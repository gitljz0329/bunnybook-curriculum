from __future__ import annotations

import asyncio
import hashlib
import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
AGENT_RUNTIME = ROOT / "agent_runtime"
sys.path.insert(0, str(AGENT_RUNTIME))

from curriculum_source import CurriculumSource  # noqa: E402


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


def validate_query_layer(errors: list[str]) -> None:
    source = CurriculumSource(ROOT / "mvp" / "learning-map.json")
    counts = source.overview()["counts"]
    if counts != {
        "themes": 8,
        "topics": 87,
        "dependencies": 189,
        "curriculum_subjects": 12,
        "competencies": 51,
        "coverage_units": 182,
    }:
        errors.append(f"query layer counts differ: {counts}")
    themes = source.list_themes()
    if themes["count"] != 8:
        errors.append("list_themes did not return 8 themes")
    theme_id = themes["themes"][0]["theme_id"]
    theme = source.get_theme(theme_id)
    if len(theme["topics"]) != len(theme["theme"]["topic_ids"]):
        errors.append("theme context does not contain every member topic")
    topic_id = theme["theme"]["entry_topic_ids"][0]
    topic = source.get_topic(topic_id)
    if topic["topic"]["id"] != topic_id:
        errors.append("topic context returned the wrong topic")
    activity = source.build_activity_context(theme_id, [topic_id], 180)
    if activity["design_request"]["theme_id"] != theme_id:
        errors.append("activity context lost theme_id")
    if activity["trust_boundary"]["human_review_required"] is not True:
        errors.append("activity context must require human review")
    validation = source.validate_references(
        theme_ids=[theme_id, "theme-does-not-exist"],
        topic_ids=[topic_id],
    )
    if validation["valid"] or validation["unknown"].get("theme_ids") != [
        "theme-does-not-exist"
    ]:
        errors.append("reference validation did not catch an unknown theme")


async def validate_protocol(errors: list[str]) -> None:
    try:
        from mcp import ClientSession, StdioServerParameters
        from mcp.client.stdio import stdio_client
    except ImportError:
        errors.append(
            "MCP SDK is not installed; install requirements-mcp.txt in .venv"
        )
        return

    params = StdioServerParameters(
        command=str(ROOT / ".venv" / "bin" / "python"),
        args=[str(AGENT_RUNTIME / "mcp_server.py")],
    )
    map_path = ROOT / "mvp" / "learning-map.json"
    hash_before = hashlib.sha256(map_path.read_bytes()).hexdigest()
    try:
        async with stdio_client(params) as (read_stream, write_stream):
            async with ClientSession(read_stream, write_stream) as session:
                await session.initialize()
                tools = await session.list_tools()
                tool_names = {tool.name for tool in tools.tools}
                if tool_names != EXPECTED_TOOLS:
                    errors.append(
                        f"MCP tools differ: {sorted(tool_names)}"
                    )
                for tool in tools.tools:
                    annotations = tool.annotations
                    if not annotations or not (
                        annotations.readOnlyHint is True
                        and annotations.destructiveHint is False
                        and annotations.idempotentHint is True
                        and annotations.openWorldHint is False
                    ):
                        errors.append(f"MCP tool {tool.name} is missing read-only annotations")
                resources = await session.list_resources()
                resource_uris = {str(resource.uri) for resource in resources.resources}
                if resource_uris != {"bunnybook://manifest", "bunnybook://learning-map"}:
                    errors.append(f"MCP static resources differ: {sorted(resource_uris)}")
                templates = await session.list_resource_templates()
                template_uris = {
                    str(template.uriTemplate) for template in templates.resourceTemplates
                }
                if template_uris != {"bunnybook://themes/{theme_id}", "bunnybook://topics/{topic_id}"}:
                    errors.append(f"MCP resource templates differ: {sorted(template_uris)}")
                prompts = await session.list_prompts()
                if {prompt.name for prompt in prompts.prompts} != {
                    "design_interdisciplinary_activity"
                }:
                    errors.append("MCP prompts differ from the expected contract")
                result = await session.call_tool("get_source_overview", {})
                if result.isError:
                    errors.append("get_source_overview returned an MCP error")
                elif "189" not in " ".join(
                    getattr(content, "text", "") for content in result.content
                ):
                    errors.append("get_source_overview did not expose graph counts")
                invalid = await session.call_tool(
                    "get_theme_context",
                    {"theme_id": "theme-does-not-exist"},
                )
                if not invalid.isError:
                    errors.append("unknown theme_id must return an MCP tool error")
    except Exception as exc:  # pragma: no cover - surfaces SDK/runtime failures
        errors.append(f"MCP protocol smoke test failed: {exc}")
    hash_after = hashlib.sha256(map_path.read_bytes()).hexdigest()
    if hash_before != hash_after:
        errors.append("MCP protocol calls changed learning-map.json")


def main() -> int:
    errors: list[str] = []
    validate_query_layer(errors)
    asyncio.run(validate_protocol(errors))
    report = {
        "tools": sorted(EXPECTED_TOOLS),
        "errors": errors,
        "status": "ok" if not errors else "failed",
    }
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
