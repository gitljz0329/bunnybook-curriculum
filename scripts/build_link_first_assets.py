#!/usr/bin/env python3
# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

import argparse
import json
import sys
from collections import defaultdict
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
GRAPH_PATH = ROOT / "mvp" / "learning-map.json"
API_ROOT = ROOT / "api" / "v1"
CANONICAL_SITE = "https://bunnybook-curriculum.netlify.app"


def json_text(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2) + "\n"


def load_graph() -> dict[str, Any]:
    value = json.loads(GRAPH_PATH.read_text(encoding="utf-8"))
    if not isinstance(value, dict):
        raise ValueError("mvp/learning-map.json must contain an object")
    return value


def build_assets(graph: dict[str, Any]) -> dict[Path, dict[str, Any]]:
    themes = graph.get("themes") or graph.get("routes") or []
    topics = graph.get("topics", [])
    dependencies = graph.get("dependencies", [])
    alignment = graph.get("curriculum_alignment", {})
    subjects = alignment.get("curriculum_subjects", [])
    competencies = alignment.get("competencies", [])

    topic_by_id = {topic["id"]: topic for topic in topics}
    subject_by_id = {subject["id"]: subject for subject in subjects}
    competency_by_id = {competency["id"]: competency for competency in competencies}
    theme_ids_by_topic: dict[str, list[str]] = defaultdict(list)
    assets: dict[Path, dict[str, Any]] = {}
    theme_index_rows: list[dict[str, Any]] = []

    for theme in themes:
        big_question_id = theme["big_question_id"]
        theme_topic_ids = list(dict.fromkeys(theme.get("topic_ids", [])))
        theme_topic_id_set = set(theme_topic_ids)
        for topic_id in theme_topic_ids:
            theme_ids_by_topic[topic_id].append(theme["id"])

        subject_ids: list[str] = []
        competency_ids: list[str] = []
        for contribution in theme.get("theme_learning", {}).get("subject_contributions", []):
            subject_ids.append(contribution.get("subject_id"))
            competency_ids.extend(contribution.get("competency_ids", []))
        for topic_id in theme_topic_ids:
            topic = topic_by_id.get(topic_id, {})
            subject_ids.extend(topic.get("curriculum_subject_ids", []))
            competency_ids.extend(topic.get("competency_ids", []))
        subject_ids = sorted({item for item in subject_ids if item})
        competency_ids = sorted({item for item in competency_ids if item})

        internal_dependencies = [
            edge
            for edge in dependencies
            if edge.get("topic_id") in theme_topic_id_set
            and edge.get("prerequisite_id") in theme_topic_id_set
        ]
        external_prerequisites = [
            edge
            for edge in dependencies
            if edge.get("topic_id") in theme_topic_id_set
            and edge.get("prerequisite_id") not in theme_topic_id_set
        ]
        href = f"{CANONICAL_SITE}/api/v1/themes/{big_question_id}.json"
        theme_index_rows.append(
            {
                "id": theme["id"],
                "big_question_id": big_question_id,
                "title": theme.get("title"),
                "question": theme.get("question"),
                "description": theme.get("description"),
                "subject_ids": subject_ids,
                "topic_count": len(theme_topic_ids),
                "performance_task": theme.get("theme_learning", {}).get("final_performance_task"),
                "href": href,
            }
        )
        pack = {
            "bundle_version": "1.0-link-first",
            "generated_from": "/mvp/learning-map.json",
            "canonical_href": href,
            "purpose": "A bounded theme context for general-purpose AI lesson-planning conversations.",
            "theme": theme,
            "topics": [topic_by_id[topic_id] for topic_id in theme_topic_ids if topic_id in topic_by_id],
            "dependencies": internal_dependencies,
            "external_prerequisites": external_prerequisites,
            "curriculum_subjects": [subject_by_id[item] for item in subject_ids if item in subject_by_id],
            "competencies": [competency_by_id[item] for item in competency_ids if item in competency_by_id],
            "retrieval_notes": {
                "dependency_direction": "prerequisite_id -> topic_id",
                "human_review_required": True,
                "full_graph_href": f"{CANONICAL_SITE}/api/v1/learning-map.json",
                "use_full_graph_when": "The task needs cross-theme paths, graph-wide validation, or an ID not present in this bundle.",
            },
        }
        assets[API_ROOT / "themes" / f"{big_question_id}.json"] = pack

    theme_index = {
        "index_version": "1.0-link-first",
        "generated_from": "/mvp/learning-map.json",
        "count": len(theme_index_rows),
        "themes": theme_index_rows,
    }
    assets[API_ROOT / "theme-index.json"] = theme_index

    search_topics = []
    for topic in topics:
        search_topics.append(
            {
                "id": topic.get("id"),
                "name": topic.get("name"),
                "subject": topic.get("subject"),
                "curriculum_subject_ids": topic.get("curriculum_subject_ids", []),
                "domain": topic.get("domain"),
                "stage": topic.get("stage"),
                "theme_ids": sorted(theme_ids_by_topic.get(topic.get("id"), [])),
                "review_status": topic.get("review_status"),
            }
        )
    search_index = {
        "index_version": "1.0-link-first",
        "generated_from": "/mvp/learning-map.json",
        "purpose": "Locate one relevant theme or topic before fetching a bounded theme bundle.",
        "retrieval_order": [
            "/api/v1/search-index.json",
            "/api/v1/themes/{BQ1-BQ8}.json",
            "/api/v1/learning-map.json only when graph-wide context is necessary",
        ],
        "subjects": [{"id": item.get("id"), "label": item.get("label")} for item in subjects],
        "themes": theme_index_rows,
        "topics": search_topics,
    }
    assets[API_ROOT / "search-index.json"] = search_index
    return assets


def main() -> int:
    parser = argparse.ArgumentParser(description="Build bounded BunnyBook assets for link-first AI retrieval.")
    parser.add_argument("--check", action="store_true", help="Verify generated assets without rewriting them.")
    args = parser.parse_args()

    assets = build_assets(load_graph())
    mismatches: list[str] = []
    for path, value in assets.items():
        expected = json_text(value)
        if args.check:
            if not path.is_file() or path.read_text(encoding="utf-8") != expected:
                mismatches.append(path.relative_to(ROOT).as_posix())
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(expected, encoding="utf-8")

    report = {
        "status": "failed" if mismatches else "ok",
        "mode": "check" if args.check else "build",
        "assets": len(assets),
        "mismatches": mismatches,
    }
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 1 if mismatches else 0


if __name__ == "__main__":
    sys.exit(main())
