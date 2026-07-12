# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

import hashlib
import json
import re
import subprocess
import sys
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
EXPECTED_COUNTS = {
    "themes": 8,
    "topics": 87,
    "dependencies": 189,
    "curriculum_subjects": 12,
    "competencies": 51,
    "coverage_units": 182,
}
EXPECTED_LICENSE_HASHES = {
    "LICENSES/ODbL-1.0.txt": "1d553feead201a7619788171b43cca12675e82d70b197aa45795986bb8603e72",
    "LICENSES/CC-BY-4.0.txt": "9ba9550ad48438d0836ddab3da480b3b69ffa0aac7b7878b5a0039e7ab429411",
    "LICENSES/Apache-2.0.txt": "cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30",
}
REQUIRED_FILES = (
    "README.md",
    "LICENSE.md",
    "NOTICE",
    "THIRD_PARTY_NOTICES.md",
    "TRADEMARKS.md",
    "CITATION.cff",
    "mvp/index.html",
    "mvp/app.js",
    "mvp/data.js",
    "mvp/learning-map.json",
    "mvp/agent-manifest.json",
    "agent_runtime/mcp_server.py",
    "integrations/kimi/bunnybook/kimi.plugin.json",
    "integrations/kimi/bunnybook/mvp/learning-map.json",
)
FORBIDDEN_PREFIXES = (
    "data/build/",
    "data/review/",
    "data/working/",
    "data/catalog/source_maps/",
    "output/",
    "outputs/",
    "tmp/",
    ".venv/",
    ".playwright-cli/",
)


def load_json(relative: str, errors: list[str]) -> dict[str, Any]:
    path = ROOT / relative
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        errors.append(f"cannot read {relative}: {exc}")
        return {}
    if not isinstance(value, dict):
        errors.append(f"{relative} must contain a JSON object")
        return {}
    return value


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def graph_counts(graph: dict[str, Any]) -> dict[str, int]:
    alignment = graph.get("curriculum_alignment", {})
    return {
        "themes": len(graph.get("themes") or graph.get("routes") or []),
        "topics": len(graph.get("topics", [])),
        "dependencies": len(graph.get("dependencies", [])),
        "curriculum_subjects": len(alignment.get("curriculum_subjects", [])),
        "competencies": len(alignment.get("competencies", [])),
        "coverage_units": len(alignment.get("coverage_units", [])),
    }


def validate_release_tree(errors: list[str]) -> None:
    for relative in REQUIRED_FILES:
        path = ROOT / relative
        if not path.is_file() or path.stat().st_size == 0:
            errors.append(f"missing or empty public file: {relative}")
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        relative = path.relative_to(ROOT).as_posix()
        if relative.startswith(".git/"):
            continue
        lower = relative.lower()
        if lower.endswith(".pdf"):
            errors.append(f"public release contains a PDF: {relative}")
        if relative.startswith(FORBIDDEN_PREFIXES):
            errors.append(f"public release contains internal artifact: {relative}")
        if "/__pycache__/" in f"/{relative}" or lower.endswith((".pyc", ".pyo")):
            errors.append(f"public release contains cache artifact: {relative}")

    inspect_roots = [ROOT / "README.md", ROOT / "mvp", ROOT / "agent_runtime", ROOT / "integrations", ROOT / "docs"]
    for base in inspect_roots:
        paths = [base] if base.is_file() else list(base.rglob("*")) if base.exists() else []
        for path in paths:
            if not path.is_file() or path.stat().st_size > 2_000_000:
                continue
            try:
                text = path.read_text(encoding="utf-8")
            except (OSError, UnicodeDecodeError):
                continue
            relative = path.relative_to(ROOT).as_posix()
            if "source_snippet_short" in text and relative not in {
                "docs/copyright_and_provenance.md",
                "docs/licensing_plan.md",
                "docs/github_release_checklist.md",
                "docs/data_model.md",
                "docs/anchor_extraction_guidelines.md",
            }:
                errors.append(f"public release contains an internal excerpt field: {relative}")
            if re.search(r"/(?:Users|home)/[^/\s]+/", text):
                errors.append(f"public release contains a machine-local path: {relative}")


def validate_licenses(errors: list[str]) -> None:
    for relative, expected in EXPECTED_LICENSE_HASHES.items():
        path = ROOT / relative
        if not path.is_file():
            errors.append(f"missing official license text: {relative}")
        elif expected.startswith("__"):
            errors.append(f"validator license hash placeholder was not finalized: {relative}")
        elif sha256(path) != expected:
            errors.append(f"official license text differs from the pinned copy: {relative}")


def validate_graph_contract(errors: list[str]) -> None:
    graph = load_json("mvp/learning-map.json", errors)
    plugin_graph = load_json("integrations/kimi/bunnybook/mvp/learning-map.json", errors)
    manifest = load_json("mvp/agent-manifest.json", errors)
    plugin_manifest = load_json("integrations/kimi/bunnybook/kimi.plugin.json", errors)
    if not graph:
        return
    if graph_counts(graph) != EXPECTED_COUNTS:
        errors.append(f"public graph counts differ: {graph_counts(graph)}")
    if plugin_graph != graph:
        errors.append("Kimi plugin graph differs from the public canonical graph")
    if manifest.get("graph", {}).get("counts") != EXPECTED_COUNTS:
        errors.append("Agent manifest counts differ from the public graph")
    graph_licensing = graph.get("licensing", {})
    manifest_licensing = manifest.get("licensing", {})
    if graph_licensing.get("status") != "active" or graph_licensing.get("rights_holder") != "lixiaozuyi":
        errors.append("public graph lacks the active lixiaozuyi license map")
    if manifest_licensing.get("status") != "active" or manifest_licensing.get("rights_holder") != "lixiaozuyi":
        errors.append("Agent manifest lacks the active lixiaozuyi license map")
    if plugin_manifest.get("license") != "SEE LICENSE.md":
        errors.append("Kimi plugin manifest does not point to the multi-license map")

    data_js = (ROOT / "mvp" / "data.js").read_text(encoding="utf-8")
    prefix = "window.BIG_MVP_DATA = "
    if not data_js.startswith(prefix) or not data_js.rstrip().endswith(";"):
        errors.append("mvp/data.js has an invalid local-preview envelope")
    else:
        payload = json.loads(data_js[len(prefix):].strip().removesuffix(";"))
        if payload.get("learningMap") != graph:
            errors.append("mvp/data.js does not mirror learning-map.json")
    if "window.BIG_MVP_DATA =" in (ROOT / "mvp" / "app.js").read_text(encoding="utf-8"):
        errors.append("mvp/app.js mixes executable code with the licensed graph payload")


def validate_agent_trial_prompts(errors: list[str]) -> None:
    validator = ROOT / "scripts" / "validate_agent_trial.js"
    if not validator.is_file():
        errors.append("public release is missing scripts/validate_agent_trial.js")
        return
    try:
        result = subprocess.run(
            ["node", str(validator)],
            cwd=ROOT,
            text=True,
            capture_output=True,
            check=False,
        )
    except OSError as exc:
        errors.append(f"cannot run public Agent trial prompt validation: {exc}")
        return
    if result.returncode:
        detail = result.stdout.strip() or result.stderr.strip()
        errors.append(f"public Agent trial prompt validation failed: {detail[:1200]}")


def main() -> int:
    errors: list[str] = []
    validate_release_tree(errors)
    validate_licenses(errors)
    validate_graph_contract(errors)
    validate_agent_trial_prompts(errors)
    report = {
        "counts": EXPECTED_COUNTS,
        "rights_holder": "lixiaozuyi",
        "errors": errors,
        "warnings": [],
        "status": "failed" if errors else "ok",
    }
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
