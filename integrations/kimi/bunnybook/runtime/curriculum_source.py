# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

import json
from collections import deque
from pathlib import Path
from typing import Any, Iterable


class CurriculumSource:
    """Read-only query layer over the generated BunnyBook learning map."""

    def __init__(self, map_path: Path) -> None:
        self.map_path = map_path
        self.data = json.loads(map_path.read_text(encoding="utf-8"))
        self.themes = self.data.get("themes") or self.data["routes"]
        self.topics = self.data["topics"]
        self.dependencies = self.data["dependencies"]
        self.alignment = self.data["curriculum_alignment"]
        self.theme_by_id = {theme["id"]: theme for theme in self.themes}
        self.topic_by_id = {topic["id"]: topic for topic in self.topics}
        self.subject_by_id = {
            subject["id"]: subject
            for subject in self.alignment["curriculum_subjects"]
        }
        self.competency_by_id = {
            competency["id"]: competency
            for competency in self.alignment["competencies"]
        }
        self.coverage_by_id = {
            unit["id"]: unit for unit in self.alignment["coverage_units"]
        }

    @property
    def trust_boundary(self) -> dict[str, Any]:
        return {
            "access_mode": "read_only",
            "human_review_required": True,
            "verified": "curriculum subject and competency labels with source page references",
            "pending_review": "themes, topic granularity, dependencies, curriculum links, and coverage matrix",
            "must_not_claim": "Project mappings and prerequisite edges are not direct curriculum requirements.",
            "disclaimer": self.alignment["disclaimer"],
        }

    def overview(self) -> dict[str, Any]:
        return {
            "name": "BunnyBook · 高中跨学科主题学习课程信息源",
            "schema_version": self.data["schema_version"],
            "review_status": self.data["review_status"],
            "counts": {
                "themes": len(self.themes),
                "topics": len(self.topics),
                "dependencies": len(self.dependencies),
                "curriculum_subjects": len(self.alignment["curriculum_subjects"]),
                "competencies": len(self.alignment["competencies"]),
                "coverage_units": len(self.alignment["coverage_units"]),
            },
            "dependency_direction": "prerequisite_id -> topic_id",
            "licensing": self.data.get("licensing", {}),
            "trust_boundary": self.trust_boundary,
        }

    def _theme(self, theme_id: str) -> dict[str, Any]:
        theme = self.theme_by_id.get(theme_id)
        if theme is None:
            raise ValueError(f"Unknown theme_id: {theme_id}")
        return theme

    def _topic(self, topic_id: str) -> dict[str, Any]:
        topic = self.topic_by_id.get(topic_id)
        if topic is None:
            raise ValueError(f"Unknown topic_id: {topic_id}")
        return topic

    def _coverage_ids(self, topics: Iterable[dict[str, Any]]) -> set[str]:
        result: set[str] = set()
        for topic in topics:
            for anchor_id in topic.get("source_anchor_ids", []):
                result.add(anchor_id.removeprefix("CA-"))
            for link in topic.get("curriculum_links", []):
                for anchor_id in link.get("content_anchor_ids", []):
                    result.add(anchor_id.removeprefix("CA-"))
        return result

    def _curriculum_refs(self, topics: list[dict[str, Any]]) -> dict[str, Any]:
        subject_ids = {
            subject_id
            for topic in topics
            for subject_id in topic.get("curriculum_subject_ids", [])
        }
        competency_ids = {
            competency_id
            for topic in topics
            for competency_id in topic.get("competency_ids", [])
        }
        coverage_ids = self._coverage_ids(topics)
        return {
            "subjects": [
                self.subject_by_id[subject_id]
                for subject_id in sorted(subject_ids)
                if subject_id in self.subject_by_id
            ],
            "competencies": [
                self.competency_by_id[competency_id]
                for competency_id in sorted(competency_ids)
                if competency_id in self.competency_by_id
            ],
            "coverage_units": [
                self.coverage_by_id[coverage_id]
                for coverage_id in sorted(coverage_ids)
                if coverage_id in self.coverage_by_id
            ],
        }

    def list_themes(
        self,
        query: str = "",
        subject_id: str = "",
    ) -> dict[str, Any]:
        query_key = query.strip().casefold()
        rows = []
        for theme in self.themes:
            subject_ids = [
                contribution["subject_id"]
                for contribution in theme["theme_learning"]["subject_contributions"]
            ]
            haystack = " ".join(
                [
                    theme["id"],
                    theme["big_question_id"],
                    theme.get("secondary_big_question_id", ""),
                    theme["title"],
                    theme["question"],
                    theme["description"],
                    *subject_ids,
                ]
            ).casefold()
            if query_key and query_key not in haystack:
                continue
            if subject_id and subject_id not in subject_ids:
                continue
            task = theme["theme_learning"]["final_performance_task"]
            rows.append(
                {
                    "theme_id": theme["id"],
                    "big_question_id": theme["big_question_id"],
                    "title": theme["title"],
                    "driving_question": theme["question"],
                    "final_performance_task": task["title"],
                    "topic_count": len(theme["topic_ids"]),
                    "entry_topic_ids": theme["entry_topic_ids"],
                    "subject_ids": subject_ids,
                    "review_status": self.data["review_status"],
                }
            )
        return {
            "themes": rows,
            "count": len(rows),
            "filters": {"query": query, "subject_id": subject_id},
            "trust_boundary": self.trust_boundary,
        }

    def get_theme(self, theme_id: str) -> dict[str, Any]:
        theme = self._theme(theme_id)
        topic_ids = set(theme["topic_ids"])
        topics = [self.topic_by_id[topic_id] for topic_id in theme["topic_ids"]]
        return {
            "theme": theme,
            "topics": topics,
            "dependencies": [
                edge
                for edge in self.dependencies
                if edge["prerequisite_id"] in topic_ids
                and edge["topic_id"] in topic_ids
            ],
            "curriculum_refs": self._curriculum_refs(topics),
            "trust_boundary": self.trust_boundary,
        }

    def get_topic(self, topic_id: str) -> dict[str, Any]:
        topic = self._topic(topic_id)
        prerequisites = [
            edge for edge in self.dependencies if edge["topic_id"] == topic_id
        ]
        unlocks = [
            edge
            for edge in self.dependencies
            if edge["prerequisite_id"] == topic_id
        ]
        memberships = []
        for theme in self.themes:
            if topic_id not in theme["topic_ids"]:
                continue
            role = next(
                (
                    candidate
                    for candidate in theme.get("topic_roles", [])
                    if candidate["topic_id"] == topic_id
                ),
                None,
            )
            memberships.append(
                {
                    "theme_id": theme["id"],
                    "title": theme["title"],
                    "driving_question": theme["question"],
                    "role": role,
                }
            )
        return {
            "topic": topic,
            "direct_prerequisites": prerequisites,
            "direct_unlocks": unlocks,
            "theme_memberships": memberships,
            "curriculum_refs": self._curriculum_refs([topic]),
            "trust_boundary": self.trust_boundary,
        }

    def search(
        self,
        query: str,
        entity_types: list[str] | None = None,
        subject_id: str = "",
        limit: int = 20,
    ) -> dict[str, Any]:
        query_key = query.strip().casefold()
        if not query_key:
            raise ValueError("query must not be empty")
        allowed = set(entity_types or ["theme", "topic", "competency", "coverage_unit"])
        limit = max(1, min(int(limit), 50))
        results: list[dict[str, Any]] = []

        if "theme" in allowed:
            for theme in self.themes:
                subject_ids = [
                    contribution["subject_id"]
                    for contribution in theme["theme_learning"]["subject_contributions"]
                ]
                text = " ".join(
                    [
                        theme["id"],
                        theme["big_question_id"],
                        theme["title"],
                        theme["question"],
                        theme["description"],
                        *subject_ids,
                    ]
                ).casefold()
                if query_key in text and (not subject_id or subject_id in subject_ids):
                    results.append(
                        {
                            "entity_type": "theme",
                            "id": theme["id"],
                            "title": theme["title"],
                            "summary": theme["question"],
                            "subject_ids": subject_ids,
                            "review_status": self.data["review_status"],
                        }
                    )

        if "topic" in allowed:
            related_edges: dict[str, list[dict[str, Any]]] = {
                topic["id"]: [] for topic in self.topics
            }
            for edge in self.dependencies:
                related_edges[edge["topic_id"]].append(edge)
                related_edges[edge["prerequisite_id"]].append(edge)
            for topic in self.topics:
                subject_ids = topic["curriculum_subject_ids"]
                edge_text = " ".join(
                    f"{edge['prerequisite_id']} {edge['topic_id']} {edge['strength']} {edge['reason']}"
                    for edge in related_edges[topic["id"]]
                )
                text = " ".join(
                    [
                        topic["id"],
                        topic["name"],
                        topic["description"],
                        topic["assessment_prompt"],
                        topic["node_kind"],
                        topic["type"],
                        topic["primary_subject_id"],
                        *subject_ids,
                        *topic["competency_ids"],
                        *topic["source_anchor_ids"],
                        edge_text,
                    ]
                ).casefold()
                if query_key in text and (not subject_id or subject_id in subject_ids):
                    results.append(
                        {
                            "entity_type": "topic",
                            "id": topic["id"],
                            "title": topic["name"],
                            "summary": topic["description"],
                            "subject_ids": subject_ids,
                            "source_ref": topic["source_ref"],
                            "review_status": topic["review_status"],
                        }
                    )

        if "competency" in allowed:
            for competency in self.alignment["competencies"]:
                text = " ".join(
                    [
                        competency["id"],
                        competency["label"],
                        competency["subject_id"],
                        competency.get("source_ref", ""),
                    ]
                ).casefold()
                if query_key in text and (
                    not subject_id or competency["subject_id"] == subject_id
                ):
                    results.append(
                        {
                            "entity_type": "competency",
                            "id": competency["id"],
                            "title": competency["label"],
                            "subject_ids": [competency["subject_id"]],
                            "source_ref": competency.get("source_ref", ""),
                        }
                    )

        if "coverage_unit" in allowed:
            for unit in self.alignment["coverage_units"]:
                unit_subject = unit.get("subject_id", "")
                text = " ".join(
                    [
                        unit["id"],
                        unit["title"],
                        unit_subject,
                        unit.get("source_ref", ""),
                    ]
                ).casefold()
                if query_key in text and (
                    not subject_id or unit_subject == subject_id
                ):
                    results.append(
                        {
                            "entity_type": "coverage_unit",
                            "id": unit["id"],
                            "title": unit["title"],
                            "subject_ids": [unit_subject] if unit_subject else [],
                            "source_ref": unit.get("source_ref", ""),
                        }
                    )

        return {
            "query": query,
            "results": results[:limit],
            "returned": min(len(results), limit),
            "total_matches": len(results),
            "trust_boundary": self.trust_boundary,
        }

    def trace_topic(
        self,
        topic_id: str,
        direction: str = "prerequisites",
        max_depth: int = 3,
    ) -> dict[str, Any]:
        self._topic(topic_id)
        if direction not in {"prerequisites", "unlocks"}:
            raise ValueError("direction must be prerequisites or unlocks")
        max_depth = max(1, min(int(max_depth), 8))
        queue: deque[tuple[str, int]] = deque([(topic_id, 0)])
        seen = {topic_id}
        traced_edges: list[dict[str, Any]] = []
        discovered: list[dict[str, Any]] = []
        while queue:
            current, depth = queue.popleft()
            if depth >= max_depth:
                continue
            candidates = [
                edge
                for edge in self.dependencies
                if (
                    direction == "prerequisites"
                    and edge["topic_id"] == current
                )
                or (
                    direction == "unlocks"
                    and edge["prerequisite_id"] == current
                )
            ]
            for edge in candidates:
                next_id = (
                    edge["prerequisite_id"]
                    if direction == "prerequisites"
                    else edge["topic_id"]
                )
                traced_edges.append({**edge, "depth": depth + 1})
                if next_id in seen:
                    continue
                seen.add(next_id)
                topic = self.topic_by_id[next_id]
                discovered.append(
                    {
                        "id": topic["id"],
                        "name": topic["name"],
                        "depth": depth + 1,
                    }
                )
                queue.append((next_id, depth + 1))
        return {
            "root_topic_id": topic_id,
            "direction": direction,
            "max_depth": max_depth,
            "topics": discovered,
            "dependencies": traced_edges,
            "dependency_direction": "prerequisite_id -> topic_id",
            "trust_boundary": self.trust_boundary,
        }

    def build_activity_context(
        self,
        theme_id: str,
        focus_topic_ids: list[str] | None = None,
        duration_minutes: int = 90,
        learner_context: str = "",
        constraints: str = "",
    ) -> dict[str, Any]:
        theme_context = self.get_theme(theme_id)
        theme_topic_ids = set(theme_context["theme"]["topic_ids"])
        selected_ids = focus_topic_ids or theme_context["theme"]["entry_topic_ids"]
        invalid = [topic_id for topic_id in selected_ids if topic_id not in theme_topic_ids]
        if invalid:
            raise ValueError(
                f"focus_topic_ids are outside theme {theme_id}: {', '.join(invalid)}"
            )
        duration_minutes = max(20, min(int(duration_minutes), 2400))
        return {
            "purpose": "Context package for an external Agent to design a cross-disciplinary thematic activity",
            "design_request": {
                "theme_id": theme_id,
                "focus_topic_ids": selected_ids,
                "duration_minutes": duration_minutes,
                "learner_context": learner_context,
                "constraints": constraints,
                "trial_mode": "single_session_slice" if duration_minutes <= 180 else "extended_sequence",
            },
            "design_defaults": {
                "learner_stage": "高一" if not learner_context else learner_context,
                "class_size": 40,
                "grouping": "4—5 人小组",
                "activity_count": 1,
                "session_deliverable_rule": (
                    "当堂完成一个共同中间成果，作为主题最终表现任务的可见证据；"
                    "不得声称在单课内完成整个长期任务。"
                ),
            },
            "theme_context": theme_context,
            "focus_topics": [self.get_topic(topic_id) for topic_id in selected_ids],
            "required_output_sections": [
                "activity_overview",
                "shared_product_and_subject_contributions",
                "timed_activity_sequence_with_observable_evidence",
                "mastery_evidence",
                "curriculum_evidence_and_human_review",
            ],
            "instructions": [
                "Design exactly one activity and one shared product; do not return multiple parallel options.",
                "For a 180-minute-or-shorter request, design one single-session slice of the final performance task and one finishable intermediate artifact.",
                "Do not compress a multi-week final task into one lesson; list unavailable hard prerequisites as pre-class assumptions or teacher confirmations.",
                "Lead with classroom value, student actions, and observable evidence; put IDs and review metadata at the end.",
                "Use hard prerequisites in the sequence and treat soft prerequisites as optional scaffolds.",
                "Use only stable IDs that appear in this package.",
                "Preserve prerequisite_id -> topic_id direction and hard/soft strength.",
                "Separate verified curriculum labels from project mappings pending review.",
                "Keep the Chinese draft concise and do not restate raw JSON or hidden reasoning.",
                "Return theme_id, topic_ids, competency_ids, source_ref, and review_status in a final evidence section.",
            ],
            "licensing": self.data.get("licensing", {}),
            "trust_boundary": self.trust_boundary,
        }

    def validate_references(
        self,
        theme_ids: list[str] | None = None,
        topic_ids: list[str] | None = None,
        competency_ids: list[str] | None = None,
        coverage_unit_ids: list[str] | None = None,
    ) -> dict[str, Any]:
        requested = {
            "theme_ids": theme_ids or [],
            "topic_ids": topic_ids or [],
            "competency_ids": competency_ids or [],
            "coverage_unit_ids": coverage_unit_ids or [],
        }
        registries = {
            "theme_ids": self.theme_by_id,
            "topic_ids": self.topic_by_id,
            "competency_ids": self.competency_by_id,
            "coverage_unit_ids": self.coverage_by_id,
        }
        unknown = {
            key: [value for value in values if value not in registries[key]]
            for key, values in requested.items()
        }
        unknown = {key: values for key, values in unknown.items() if values}
        return {
            "valid": not unknown,
            "requested": requested,
            "unknown": unknown,
            "human_review_required": True,
            "note": "Valid IDs confirm registry membership, not expert approval of a design or mapping.",
        }
