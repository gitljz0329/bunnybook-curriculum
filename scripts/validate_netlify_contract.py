#!/usr/bin/env python3
# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]

REQUIRED_PUBLIC_FILES = (
    "index.html",
    "styles.css",
    "app.js",
    "site-config.js",
    "llms.txt",
    "llms-full.txt",
    "agent/START-HERE.md",
    "agent/manifest.json",
    "api/v1/source-manifest.json",
    "mvp/index.html",
    "mvp/learning-map.json",
    "mvp/agent-manifest.json",
    "mvp/data-notice.md",
    "docs/BUILD_YOUR_OWN.md",
    "netlify.toml",
)

# The universal entry is canonical at the repository root. Keeping another copy
# inside mvp/ makes AI discovery ambiguous and can turn the graph view into a
# second, conflicting product shell.
FORBIDDEN_DUPLICATE_ENTRY_FILES = (
    "mvp/entry.css",
    "mvp/entry.js",
    "mvp/llms.txt",
    "mvp/llms-full.txt",
    "mvp/agent/START-HERE.md",
    "mvp/agent/manifest.json",
)

REQUIRED_NETLIFY_FRAGMENTS = (
    'publish = "."',
    'from = "/explore"',
    'from = "/explore/"',
    'from = "/explore/*"',
    'from = "/map"',
    'from = "/map/"',
    'from = "/map/*"',
    'to = "/mvp/index.html"',
    'to = "/mvp/:splat"',
    'from = "/api/v1/learning-map.json"',
    'to = "/mvp/learning-map.json"',
    'from = "/api/v1/graph-manifest.json"',
    'to = "/mvp/agent-manifest.json"',
    'from = "/api/v1/manifest.json"',
    'to = "/agent/manifest.json"',
    'from = "/api/v1/start-here"',
    'to = "/agent/START-HERE.md"',
    'from = "/api/v1/llms.txt"',
    'to = "/llms.txt"',
    'Access-Control-Allow-Origin = "*"',
    "Content-Security-Policy",
)

EXPECTED_COUNTS = {
    "themes": 8,
    "topics": 87,
    "dependencies": 189,
    "curriculum_subjects": 12,
    "competencies": 51,
    "coverage_units": 182,
}


def load_json(relative: str, errors: list[str]) -> dict[str, Any]:
    path = ROOT / relative
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        errors.append(f"cannot read valid JSON from {relative}: {exc}")
        return {}
    if not isinstance(value, dict):
        errors.append(f"{relative} must contain a JSON object")
        return {}
    return value


def validate_files(errors: list[str]) -> None:
    for relative in REQUIRED_PUBLIC_FILES:
        path = ROOT / relative
        if not path.is_file() or path.stat().st_size == 0:
            errors.append(f"missing or empty deployment file: {relative}")
    for relative in FORBIDDEN_DUPLICATE_ENTRY_FILES:
        if (ROOT / relative).exists():
            errors.append(f"duplicate universal-entry file must be removed: {relative}")


def validate_netlify(errors: list[str]) -> None:
    path = ROOT / "netlify.toml"
    try:
        text = path.read_text(encoding="utf-8")
    except OSError as exc:
        errors.append(f"cannot read netlify.toml: {exc}")
        return

    for fragment in REQUIRED_NETLIFY_FRAGMENTS:
        if fragment not in text:
            errors.append(f"netlify.toml is missing contract fragment: {fragment}")

    if text.count('to = "/mvp/index.html"') < 4:
        errors.append("all four base alias forms must rewrite directly to /mvp/index.html")
    if 'to = "/explore/"' in text or 'to = "/map/"' in text:
        errors.append("/explore and /map aliases must not redirect to one another")
    if "status = 301" in text or "status = 302" in text:
        errors.append("alias routing must use direct 200 rewrites, not redirect chains")

    graph_html = ROOT / "mvp" / "index.html"
    try:
        graph_text = graph_html.read_text(encoding="utf-8")
    except OSError as exc:
        errors.append(f"cannot read mvp/index.html: {exc}")
    else:
        if '<base href="/mvp/">' not in graph_text:
            errors.append("mvp/index.html must anchor relative assets to /mvp/")

    if re.search(r"https://[a-f0-9]{24,}--bunnybook-curriculum\.netlify\.app", text):
        errors.append("netlify.toml must not depend on an immutable historical deploy URL")


def validate_machine_contract(errors: list[str]) -> None:
    agent = load_json("agent/manifest.json", errors)
    source = load_json("api/v1/source-manifest.json", errors)
    graph = load_json("mvp/learning-map.json", errors)
    if not agent or not source or not graph:
        return

    if agent.get("source_counts") != EXPECTED_COUNTS:
        errors.append(f"agent manifest counts differ: {agent.get('source_counts')}")
    if source.get("counts") != EXPECTED_COUNTS:
        errors.append(f"source manifest counts differ: {source.get('counts')}")

    alignment = graph.get("curriculum_alignment", {})
    graph_counts = {
        "themes": len(graph.get("themes") or graph.get("routes") or []),
        "topics": len(graph.get("topics", [])),
        "dependencies": len(graph.get("dependencies", [])),
        "curriculum_subjects": len(alignment.get("curriculum_subjects", [])),
        "competencies": len(alignment.get("competencies", [])),
        "coverage_units": len(alignment.get("coverage_units", [])),
    }
    if graph_counts != EXPECTED_COUNTS:
        errors.append(f"canonical graph counts differ: {graph_counts}")

    discovery = agent.get("discovery", {})
    required_discovery = {
        "llms_index": "/llms.txt",
        "offline_context": "/llms-full.txt",
        "start_here": "/agent/START-HERE.md",
        "source_manifest": "/api/v1/source-manifest.json",
        "learning_map": "/api/v1/learning-map.json",
    }
    for key, expected in required_discovery.items():
        if discovery.get(key) != expected:
            errors.append(f"agent manifest discovery.{key} must be {expected}")

    access = agent.get("access", {})
    if access.get("teacher_installation_required") is not False:
        errors.append("teacher installation must remain optional")
    if access.get("mcp_required") is not False:
        errors.append("MCP must remain optional for teachers")
    if access.get("human_review_required") is not True:
        errors.append("human review must remain required")


def main() -> int:
    errors: list[str] = []
    validate_files(errors)
    validate_netlify(errors)
    validate_machine_contract(errors)

    report = {
        "status": "failed" if errors else "ok",
        "required_files": len(REQUIRED_PUBLIC_FILES),
        "forbidden_duplicate_files": len(FORBIDDEN_DUPLICATE_ENTRY_FILES),
        "expected_counts": EXPECTED_COUNTS,
        "errors": errors,
    }
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
