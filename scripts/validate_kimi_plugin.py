# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

import asyncio
import hashlib
import json
import os
import re
import shutil
import tempfile
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
PLUGIN_ROOT = ROOT / "integrations" / "kimi" / "bunnybook"
MANIFEST_PATH = PLUGIN_ROOT / "kimi.plugin.json"
SYNC_MANIFEST_PATH = PLUGIN_ROOT / "sync-manifest.json"

EXPECTED_COUNTS = {
    "themes": 8,
    "topics": 87,
    "dependencies": 189,
    "curriculum_subjects": 12,
    "competencies": 51,
    "coverage_units": 182,
}
EXPECTED_TOOLS = {
    "get_source_overview",
    "list_themes",
    "search_curriculum",
    "get_theme_context",
    "get_topic_context",
    "trace_learning_path",
    "build_activity_context",
    "validate_references",
}
EXPECTED_STATIC_RESOURCES = {
    "bunnybook://manifest",
    "bunnybook://learning-map",
}
EXPECTED_RESOURCE_TEMPLATES = {
    "bunnybook://themes/{theme_id}",
    "bunnybook://topics/{topic_id}",
}
EXPECTED_SYNC = {
    "agent_runtime/mcp_server.py": "runtime/mcp_server.py",
    "agent_runtime/curriculum_source.py": "runtime/curriculum_source.py",
    "mvp/learning-map.json": "mvp/learning-map.json",
    "mvp/agent-manifest.json": "mvp/agent-manifest.json",
    "LICENSE.md": "LICENSE.md",
    "NOTICE": "NOTICE",
    "THIRD_PARTY_NOTICES.md": "THIRD_PARTY_NOTICES.md",
    "TRADEMARKS.md": "TRADEMARKS.md",
    "CITATION.cff": "CITATION.cff",
    "LICENSES/ODbL-1.0.txt": "LICENSES/ODbL-1.0.txt",
    "LICENSES/CC-BY-4.0.txt": "LICENSES/CC-BY-4.0.txt",
    "LICENSES/Apache-2.0.txt": "LICENSES/Apache-2.0.txt",
}


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def load_json(path: Path, errors: list[str]) -> dict[str, Any]:
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        errors.append(f"cannot read {path.relative_to(ROOT)}: {exc}")
        return {}
    if not isinstance(value, dict):
        errors.append(f"{path.relative_to(ROOT)} must contain a JSON object")
        return {}
    return value


def validate_relative_path(value: object, label: str, errors: list[str]) -> Path | None:
    if not isinstance(value, str) or not value.startswith("./"):
        errors.append(f"{label} must be a plugin-local ./ path")
        return None
    candidate = (PLUGIN_ROOT / value[2:]).resolve()
    plugin_resolved = PLUGIN_ROOT.resolve()
    if candidate != plugin_resolved and plugin_resolved not in candidate.parents:
        errors.append(f"{label} escapes the plugin root: {value}")
        return None
    if not candidate.exists():
        errors.append(f"{label} does not exist: {value}")
        return None
    return candidate


def validate_manifest(errors: list[str]) -> dict[str, Any]:
    manifest = load_json(MANIFEST_PATH, errors)
    name = manifest.get("name")
    if name != "bunnybook-curriculum":
        errors.append(f"plugin name differs: {name!r}")
    if not isinstance(name, str) or not re.fullmatch(r"[a-z0-9][a-z0-9_-]{0,63}", name):
        errors.append("plugin name does not satisfy the Kimi id pattern")
    if manifest.get("version") != "0.1.0":
        errors.append("plugin version must be 0.1.0 for the local test package")
    description = manifest.get("description", "")
    if not isinstance(description, str) or "第三方" not in description or "并非 Kimi 官方插件" not in description:
        errors.append("plugin description must disclose third-party, non-official status")
    if manifest.get("author") != "lixiaozuyi":
        errors.append("plugin author must be lixiaozuyi")
    if manifest.get("license") != "SEE LICENSE.md":
        errors.append("plugin manifest must point to the multi-license map")

    for required_path in (
        PLUGIN_ROOT / "runtime" / "pyproject.toml",
        PLUGIN_ROOT / "runtime" / "uv.lock",
    ):
        if not required_path.is_file():
            errors.append(f"required runtime file is missing: {required_path.relative_to(PLUGIN_ROOT)}")

    validate_relative_path(manifest.get("skills"), "skills", errors)
    validate_relative_path(manifest.get("commands"), "commands", errors)
    session_start = manifest.get("sessionStart")
    if not isinstance(session_start, dict) or session_start.get("skill") != "using-bunnybook":
        errors.append("sessionStart.skill must load using-bunnybook")

    servers = manifest.get("mcpServers")
    if not isinstance(servers, dict) or set(servers) != {"bunnybook"}:
        errors.append("manifest must declare exactly one bunnybook MCP server")
        return manifest
    server = servers["bunnybook"]
    if not isinstance(server, dict):
        errors.append("bunnybook MCP declaration must be an object")
        return manifest
    if server.get("command") != "uv":
        errors.append("bunnybook MCP command must be uv")
    expected_args = [
        "run",
        "--project",
        "./runtime",
        "--frozen",
        "python",
        "./runtime/mcp_server.py",
    ]
    if server.get("args") != expected_args:
        errors.append(f"bunnybook MCP args differ: {server.get('args')!r}")
    validate_relative_path(server.get("cwd"), "mcpServers.bunnybook.cwd", errors)
    return manifest


def validate_skill_and_commands(errors: list[str]) -> None:
    skill_path = PLUGIN_ROOT / "skills" / "using-bunnybook" / "SKILL.md"
    skill = skill_path.read_text(encoding="utf-8") if skill_path.is_file() else ""
    if not skill:
        errors.append("using-bunnybook SKILL.md is missing")
    else:
        for field in ("name: using-bunnybook", "description:", "type: prompt", "whenToUse:"):
            if field not in skill:
                errors.append(f"using-bunnybook skill is missing {field}")
        for boundary in (
            "prerequisite_id -> topic_id",
            "source_ref",
            "review_status",
            "不得写回",
            "只设计一个活动",
            "单课切片",
            "90 分钟流程",
            "许可署名",
        ):
            if boundary not in skill:
                errors.append(f"using-bunnybook skill is missing boundary: {boundary}")

    for name in ("design-theme", "inspect-evidence"):
        path = PLUGIN_ROOT / "commands" / f"{name}.md"
        body = path.read_text(encoding="utf-8") if path.is_file() else ""
        if not body:
            errors.append(f"command {name} is missing")
            continue
        if f"name: {name}" not in body or "description:" not in body:
            errors.append(f"command {name} is missing frontmatter metadata")
        if "$ARGUMENTS" not in body:
            errors.append(f"command {name} must accept $ARGUMENTS")
        if name == "design-theme":
            for marker in ("只输出一份", "单课切片", "90 分钟流程", "不复述工具返回的 JSON", "BunnyBook 许可署名"):
                if marker not in body:
                    errors.append(f"design-theme command is missing activity-first marker: {marker}")


def validate_synced_files(errors: list[str]) -> None:
    sync = load_json(SYNC_MANIFEST_PATH, errors)
    rows = sync.get("files")
    if not isinstance(rows, list):
        errors.append("sync-manifest.json must contain a files list")
        return
    seen: dict[str, str] = {}
    for row in rows:
        if not isinstance(row, dict):
            errors.append("sync-manifest contains a non-object row")
            continue
        source_rel = row.get("source")
        target_rel = row.get("target")
        if not isinstance(source_rel, str) or not isinstance(target_rel, str):
            errors.append("sync-manifest row has invalid paths")
            continue
        seen[source_rel] = target_rel
        source = ROOT / source_rel
        target = PLUGIN_ROOT / target_rel
        if not source.is_file() or not target.is_file():
            errors.append(f"synced pair is missing: {source_rel} -> {target_rel}")
            continue
        source_hash = sha256(source)
        target_hash = sha256(target)
        if source_hash != target_hash:
            errors.append(f"plugin copy is stale or edited: {target_rel}")
        if row.get("sha256") != source_hash:
            errors.append(f"sync manifest hash is stale: {source_rel}")
        if row.get("bytes") != source.stat().st_size:
            errors.append(f"sync manifest byte count is stale: {source_rel}")
    if seen != EXPECTED_SYNC:
        errors.append(f"synced source map differs: {seen}")


def validate_data_contract(errors: list[str]) -> None:
    graph = load_json(PLUGIN_ROOT / "mvp" / "learning-map.json", errors)
    agent_manifest = load_json(PLUGIN_ROOT / "mvp" / "agent-manifest.json", errors)
    if not graph or not agent_manifest:
        return
    alignment = graph.get("curriculum_alignment", {})
    themes = graph.get("themes") or graph.get("routes") or []
    actual = {
        "themes": len(themes),
        "topics": len(graph.get("topics", [])),
        "dependencies": len(graph.get("dependencies", [])),
        "curriculum_subjects": len(alignment.get("curriculum_subjects", [])),
        "competencies": len(alignment.get("competencies", [])),
        "coverage_units": len(alignment.get("coverage_units", [])),
    }
    if actual != EXPECTED_COUNTS:
        errors.append(f"plugin graph counts differ: {actual}")
    manifest_counts = agent_manifest.get("graph", {}).get("counts")
    if manifest_counts != EXPECTED_COUNTS:
        errors.append(f"plugin agent manifest counts differ: {manifest_counts}")
    if "BunnyBook" not in str(agent_manifest.get("name", "")):
        errors.append("plugin agent manifest does not expose the BunnyBook brand")
    graph_licensing = graph.get("licensing", {})
    manifest_licensing = agent_manifest.get("licensing", {})
    if graph_licensing.get("status") != "active" or graph_licensing.get("rights_holder") != "lixiaozuyi":
        errors.append("plugin graph must expose the active lixiaozuyi license map")
    if manifest_licensing.get("status") != "active" or manifest_licensing.get("rights_holder") != "lixiaozuyi":
        errors.append("plugin agent manifest must expose the active lixiaozuyi license map")
    if not graph_licensing.get("attribution"):
        errors.append("plugin graph must expose a reusable attribution notice")
    if list(PLUGIN_ROOT.rglob("*.pdf")):
        errors.append("Kimi plugin package must not contain curriculum source PDFs")
    if "source_snippet_short" in json.dumps(graph, ensure_ascii=False):
        errors.append("Kimi plugin graph leaks internal curriculum excerpts")
    direction = agent_manifest.get("graph", {}).get("input_contract", {}).get("dependency_direction")
    if direction != "prerequisite_id -> topic_id":
        errors.append(f"dependency direction differs: {direction!r}")
    trust = agent_manifest.get("trust_policy", {})
    if trust.get("access_mode") != "read_only" or trust.get("writeback_allowed") is not False:
        errors.append("plugin agent manifest must preserve the read-only trust policy")
    if trust.get("human_review_required") is not True:
        errors.append("plugin agent manifest must require human review")


async def validate_protocol(
    manifest: dict[str, Any], errors: list[str], warnings: list[str]
) -> None:
    try:
        from mcp import ClientSession, StdioServerParameters
        from mcp.client.stdio import stdio_client
    except ImportError:
        warnings.append("MCP SDK unavailable in validator environment; protocol smoke test skipped")
        return

    uv = shutil.which("uv")
    if not uv:
        warnings.append("uv is not on PATH; protocol smoke test skipped")
        return
    server = manifest.get("mcpServers", {}).get("bunnybook", {})
    args = server.get("args", [])
    if not isinstance(args, list) or not all(isinstance(value, str) for value in args):
        return

    map_path = PLUGIN_ROOT / "mvp" / "learning-map.json"
    hash_before = sha256(map_path)
    with tempfile.TemporaryDirectory(prefix="bunnybook-uv-") as tmp:
        env = os.environ.copy()
        env["UV_PROJECT_ENVIRONMENT"] = str(Path(tmp) / ".venv")
        env["PYTHONDONTWRITEBYTECODE"] = "1"
        params = StdioServerParameters(
            command=uv,
            args=args,
            cwd=str(PLUGIN_ROOT),
            env=env,
        )
        try:
            async with stdio_client(params) as (read_stream, write_stream):
                async with ClientSession(read_stream, write_stream) as session:
                    await session.initialize()
                    tools = await session.list_tools()
                    names = {tool.name for tool in tools.tools}
                    if names != EXPECTED_TOOLS:
                        errors.append(f"Kimi plugin MCP tools differ: {sorted(names)}")
                    for tool in tools.tools:
                        annotations = tool.annotations
                        if not annotations or not (
                            annotations.readOnlyHint is True
                            and annotations.destructiveHint is False
                            and annotations.idempotentHint is True
                            and annotations.openWorldHint is False
                        ):
                            errors.append(f"MCP tool {tool.name} lacks complete read-only annotations")
                    resources = await session.list_resources()
                    resource_uris = {str(resource.uri) for resource in resources.resources}
                    if resource_uris != EXPECTED_STATIC_RESOURCES:
                        errors.append(f"Kimi plugin MCP resources differ: {sorted(resource_uris)}")
                    templates = await session.list_resource_templates()
                    template_uris = {
                        str(template.uriTemplate) for template in templates.resourceTemplates
                    }
                    if template_uris != EXPECTED_RESOURCE_TEMPLATES:
                        errors.append(
                            f"Kimi plugin MCP resource templates differ: {sorted(template_uris)}"
                        )
                    prompts = await session.list_prompts()
                    if {prompt.name for prompt in prompts.prompts} != {
                        "design_interdisciplinary_activity"
                    }:
                        errors.append("Kimi plugin MCP prompts differ")
                    result = await session.call_tool("get_source_overview", {})
                    if result.isError:
                        errors.append("Kimi plugin get_source_overview returned an error")
                    text = " ".join(
                        getattr(content, "text", "") for content in result.content
                    )
                    if "189" not in text:
                        errors.append("Kimi plugin overview did not expose dependency count")
                    if "BunnyBook" not in text:
                        errors.append("Kimi plugin overview did not expose the BunnyBook brand")
        except Exception as exc:
            errors.append(f"Kimi plugin stdio handshake failed: {exc}")
    if hash_before != sha256(map_path):
        errors.append("MCP protocol calls changed the plugin learning map")


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []
    manifest = validate_manifest(errors)
    validate_skill_and_commands(errors)
    validate_synced_files(errors)
    validate_data_contract(errors)
    if not errors:
        asyncio.run(validate_protocol(manifest, errors, warnings))
    report = {
        "plugin": "bunnybook-curriculum",
        "counts": EXPECTED_COUNTS,
        "tools": sorted(EXPECTED_TOOLS),
        "protocol_smoke_test": "passed" if not errors and not warnings else "see messages",
        "errors": errors,
        "warnings": warnings,
        "status": "ok" if not errors else "failed",
    }
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
