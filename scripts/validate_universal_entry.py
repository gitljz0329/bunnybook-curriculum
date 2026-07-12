#!/usr/bin/env python3
# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

import argparse
import json
import re
import subprocess
from html.parser import HTMLParser
from pathlib import Path
from typing import Any


REQUIRED_FILES = (
    "index.html",
    "styles.css",
    "app.js",
    "site-config.js",
    "llms.txt",
    "llms-full.txt",
    "agent/START-HERE.md",
    "agent/manifest.json",
    "api/v1/source-manifest.json",
    "docs/BUILD_YOUR_OWN.md",
    "docs/universal_entry.md",
    "mvp/index.html",
    "netlify.toml",
    "robots.txt",
    "sitemap.xml",
)

EXPECTED_COUNTS = {
    "themes": 8,
    "topics": 87,
    "dependencies": 189,
    "curriculum_subjects": 12,
    "competencies": 51,
    "coverage_units": 182,
}

CANONICAL_SITE = "https://bunnybook-curriculum.netlify.app"


class EntryHTMLParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: list[str] = []
        self.links: list[str] = []
        self.scripts: list[str] = []
        self.stylesheets: list[str] = []
        self.aria_controls: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if values.get("id"):
            self.ids.append(str(values["id"]))
        if values.get("aria-controls"):
            self.aria_controls.append(str(values["aria-controls"]))
        if tag == "a" and values.get("href"):
            self.links.append(str(values["href"]))
        if tag == "script" and values.get("src"):
            self.scripts.append(str(values["src"]))
        if tag == "link" and values.get("rel") == "stylesheet" and values.get("href"):
            self.stylesheets.append(str(values["href"]))


def read_text(root: Path, relative: str, errors: list[str]) -> str:
    path = root / relative
    try:
        return path.read_text(encoding="utf-8")
    except OSError as exc:
        errors.append(f"cannot read {relative}: {exc}")
        return ""


def load_json(root: Path, relative: str, errors: list[str]) -> dict[str, Any]:
    text = read_text(root, relative, errors)
    if not text:
        return {}
    try:
        value = json.loads(text)
    except json.JSONDecodeError as exc:
        errors.append(f"invalid JSON in {relative}: {exc}")
        return {}
    if not isinstance(value, dict):
        errors.append(f"{relative} must contain a JSON object")
        return {}
    return value


def graph_counts(graph: dict[str, Any]) -> dict[str, int]:
    alignment = graph.get("curriculum_alignment", {})
    themes = graph.get("themes") or graph.get("routes") or []
    return {
        "themes": len(themes),
        "topics": len(graph.get("topics", [])),
        "dependencies": len(graph.get("dependencies", [])),
        "curriculum_subjects": len(alignment.get("curriculum_subjects", [])),
        "competencies": len(alignment.get("competencies", [])),
        "coverage_units": len(alignment.get("coverage_units", [])),
    }


def validate_files(root: Path, errors: list[str]) -> None:
    for relative in REQUIRED_FILES:
        path = root / relative
        if not path.is_file() or path.stat().st_size == 0:
            errors.append(f"missing or empty universal-entry file: {relative}")


def validate_html(root: Path, errors: list[str]) -> None:
    html = read_text(root, "index.html", errors)
    if not html:
        return

    parser = EntryHTMLParser()
    parser.feed(html)
    duplicates = sorted({item for item in parser.ids if parser.ids.count(item) > 1})
    if duplicates:
        errors.append(f"duplicate HTML ids: {duplicates}")

    required_ids = {
        "persona-teacher",
        "persona-agent",
        "teacher-view",
        "agent-view",
        "prompt-builder",
        "generated-prompt",
        "question-grid",
    }
    missing = sorted(required_ids.difference(parser.ids))
    if missing:
        errors.append(f"index.html is missing required ids: {missing}")

    dangling_controls = sorted(set(parser.aria_controls).difference(parser.ids))
    if dangling_controls:
        errors.append(f"aria-controls references missing ids: {dangling_controls}")

    for required in ("/site-config.js", "/app.js"):
        if required not in parser.scripts:
            errors.append(f"index.html does not load {required}")
    if "/styles.css" not in parser.stylesheets:
        errors.append("index.html does not load /styles.css")

    required_links = {
        "/llms.txt",
        "/agent/START-HERE.md",
        "/api/v1/source-manifest.json",
        "/api/v1/learning-map.json",
        "/docs/BUILD_YOUR_OWN.md",
    }
    missing_links = sorted(required_links.difference(parser.links))
    if missing_links:
        errors.append(f"index.html is missing public resource links: {missing_links}")


def validate_llms(root: Path, errors: list[str]) -> None:
    llms = read_text(root, "llms.txt", errors)
    if not llms:
        return
    if not llms.startswith("# BunnyBook"):
        errors.append("llms.txt must start with an H1 project name")
    if not re.search(r"^> .+", llms, flags=re.MULTILINE):
        errors.append("llms.txt must include a blockquote summary")
    for heading in ("## Start here", "## Data", "## Human interface", "## Reuse and source"):
        if heading not in llms:
            errors.append(f"llms.txt is missing section: {heading}")
    for path in (
        "/agent/START-HERE.md",
        "/api/v1/source-manifest.json",
        "/api/v1/learning-map.json",
        "/llms-full.txt",
    ):
        if f"{CANONICAL_SITE}{path}" not in llms:
            errors.append(f"llms.txt is missing canonical URL: {path}")


def validate_manifests(root: Path, errors: list[str]) -> None:
    agent = load_json(root, "agent/manifest.json", errors)
    source = load_json(root, "api/v1/source-manifest.json", errors)
    if not agent or not source:
        return

    agent_counts = agent.get("source_counts", {})
    source_counts = source.get("counts", {})
    if agent_counts != EXPECTED_COUNTS:
        errors.append(f"agent/manifest.json counts differ: {agent_counts}")
    if source_counts != EXPECTED_COUNTS:
        errors.append(f"source-manifest counts differ: {source_counts}")

    required_modes = {"lesson_plan", "full_planning", "learning_progression", "review"}
    agent_modes = set(agent.get("modes", {}))
    source_modes = set(source.get("conversation_modes", []))
    if agent_modes != required_modes:
        errors.append(f"agent manifest modes differ: {sorted(agent_modes)}")
    if source_modes != required_modes:
        errors.append(f"source manifest modes differ: {sorted(source_modes)}")

    access = agent.get("access", {})
    if access.get("teacher_installation_required") is not False:
        errors.append("agent manifest must not require teacher installation")
    if access.get("mcp_required") is not False:
        errors.append("agent manifest must not require MCP")
    if access.get("writeback_allowed") is not False:
        errors.append("agent manifest must be read-only")
    if access.get("human_review_required") is not True:
        errors.append("agent manifest must require human review")

    resources = source.get("resources", {})
    for name, resource in resources.items():
        if not isinstance(resource, dict):
            errors.append(f"source resource {name} must be an object")
            continue
        href = resource.get("href")
        if not isinstance(href, str) or not href.startswith(f"{CANONICAL_SITE}/"):
            errors.append(f"source resource {name} lacks a canonical HTTPS href")

    graph_path = root / "mvp" / "learning-map.json"
    if graph_path.is_file():
        graph = load_json(root, "mvp/learning-map.json", errors)
        counts = graph_counts(graph)
        if counts != EXPECTED_COUNTS:
            errors.append(f"canonical graph counts differ: {counts}")


def validate_config_and_scripts(root: Path, errors: list[str], warnings: list[str]) -> None:
    config = read_text(root, "site-config.js", errors)
    app = read_text(root, "app.js", errors)
    if "window.BUNNYBOOK_CONFIG" not in config:
        errors.append("site-config.js does not define window.BUNNYBOOK_CONFIG")
    for mode in ("lesson_plan", "full_planning", "learning_progression", "review"):
        if mode not in config or mode not in app:
            errors.append(f"universal entry is missing mode: {mode}")
    for count in EXPECTED_COUNTS.values():
        if str(count) not in config:
            errors.append(f"site-config.js does not expose expected count value: {count}")

    if 'document.querySelectorAll(".persona-button[data-persona]")' not in app:
        errors.append("app.js must scope persona controls to persona buttons, not the body data-persona attribute")

    for script in ("site-config.js", "app.js"):
        try:
            result = subprocess.run(
                ["node", "--check", str(root / script)],
                text=True,
                capture_output=True,
                check=False,
            )
        except OSError:
            warnings.append("Node.js is unavailable; JavaScript syntax check was skipped")
            break
        if result.returncode:
            errors.append(f"JavaScript syntax error in {script}: {result.stderr.strip()[:600]}")


def validate_netlify(root: Path, errors: list[str]) -> None:
    config = read_text(root, "netlify.toml", errors)
    graph_html = read_text(root, "mvp/index.html", errors)
    expected_rules = (
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
    )
    for rule in expected_rules:
        if rule not in config:
            errors.append(f"netlify.toml is missing rule fragment: {rule}")

    if config.count('to = "/mvp/index.html"') < 4:
        errors.append("netlify.toml must directly rewrite all four base alias forms to /mvp/index.html")
    if 'to = "/explore/"' in config or 'to = "/map/"' in config:
        errors.append("netlify aliases must not redirect to one another")
    if "status = 301" in config or "status = 302" in config:
        errors.append("netlify aliases must use direct 200 rewrites, not redirect chains")
    if '<base href="/mvp/">' not in graph_html:
        errors.append("mvp/index.html must anchor relative graph assets to /mvp/")


def validate_public_safety(root: Path, errors: list[str]) -> None:
    secret_patterns = {
        "private key": re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----"),
        "GitHub token": re.compile(r"\b(?:ghp|github_pat)_[A-Za-z0-9_]{20,}\b"),
        "AWS access key": re.compile(r"\bAKIA[0-9A-Z]{16}\b"),
        "machine-local user path": re.compile(r"/(?:Users|home)/[^/\s]+/"),
    }
    for relative in REQUIRED_FILES:
        path = root / relative
        if not path.is_file() or path.stat().st_size > 2_000_000:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except (OSError, UnicodeDecodeError):
            continue
        for label, pattern in secret_patterns.items():
            if pattern.search(text):
                errors.append(f"possible {label} in {relative}")
        if re.search(r"https://[a-f0-9]{24,}--bunnybook-curriculum\.netlify\.app", text):
            errors.append(f"immutable deploy URL leaked into repository source: {relative}")


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate the BunnyBook universal teacher/AI entry.")
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    root = args.root.resolve()

    errors: list[str] = []
    warnings: list[str] = []
    validate_files(root, errors)
    validate_html(root, errors)
    validate_llms(root, errors)
    validate_manifests(root, errors)
    validate_config_and_scripts(root, errors, warnings)
    validate_netlify(root, errors)
    validate_public_safety(root, errors)

    report = {
        "root": str(root),
        "status": "failed" if errors else "ok",
        "counts": EXPECTED_COUNTS,
        "errors": errors,
        "warnings": sorted(set(warnings)),
    }
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
