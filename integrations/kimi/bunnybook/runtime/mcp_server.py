# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

import argparse
import json
from pathlib import Path

from mcp.server.fastmcp import FastMCP
from mcp.types import ToolAnnotations

from curriculum_source import CurriculumSource


ROOT = Path(__file__).resolve().parents[1]
SOURCE = CurriculumSource(ROOT / "mvp" / "learning-map.json")

INSTRUCTIONS = """
BunnyBook Curriculum Source is a read-only curriculum information source for teachers'
external Agents. Use stable IDs, preserve prerequisite_id -> topic_id direction,
and keep source_ref and review_status in generated activity plans. Curriculum
subject and competency labels have been checked against the local source corpus;
themes, topic granularity, mappings and dependency edges still require human review.
Never claim that project mappings are direct curriculum requirements and never write
back to the ontology. For activity-design requests, lead with one shared product and
one teachable sequence; keep IDs and review metadata in a compact evidence section.
Preserve the licensing attribution when the result is publicly shared.
""".strip()

mcp = FastMCP(
    "BunnyBook Curriculum Source",
    instructions=INSTRUCTIONS,
    json_response=True,
)
READ_ONLY = ToolAnnotations(
    readOnlyHint=True,
    destructiveHint=False,
    idempotentHint=True,
    openWorldHint=False,
)


@mcp.tool(annotations=READ_ONLY)
def get_source_overview() -> dict:
    """Return version, counts, relation direction and trust boundary."""
    return SOURCE.overview()


@mcp.tool(annotations=READ_ONLY)
def list_themes(query: str = "", subject_id: str = "") -> dict:
    """List interdisciplinary themes, optionally filtered by text or subject_id."""
    return SOURCE.list_themes(query=query, subject_id=subject_id)


@mcp.tool(annotations=READ_ONLY)
def search_curriculum(
    query: str,
    entity_types: list[str] | None = None,
    subject_id: str = "",
    limit: int = 20,
) -> dict:
    """Search themes, topics, competencies and source coverage units."""
    return SOURCE.search(
        query=query,
        entity_types=entity_types,
        subject_id=subject_id,
        limit=limit,
    )


@mcp.tool(annotations=READ_ONLY)
def get_theme_context(theme_id: str) -> dict:
    """Return one theme, member topics, internal edges and curriculum references."""
    return SOURCE.get_theme(theme_id)


@mcp.tool(annotations=READ_ONLY)
def get_topic_context(topic_id: str) -> dict:
    """Return one topic, direct neighbours, theme roles and curriculum evidence."""
    return SOURCE.get_topic(topic_id)


@mcp.tool(annotations=READ_ONLY)
def trace_learning_path(
    topic_id: str,
    direction: str = "prerequisites",
    max_depth: int = 3,
) -> dict:
    """Trace prerequisite or unlock relations without changing their direction."""
    return SOURCE.trace_topic(
        topic_id=topic_id,
        direction=direction,
        max_depth=max_depth,
    )


@mcp.tool(annotations=READ_ONLY)
def build_activity_context(
    theme_id: str,
    focus_topic_ids: list[str] | None = None,
    duration_minutes: int = 90,
    learner_context: str = "",
    constraints: str = "",
) -> dict:
    """Assemble a traceable context package for an Agent to design an activity."""
    return SOURCE.build_activity_context(
        theme_id=theme_id,
        focus_topic_ids=focus_topic_ids,
        duration_minutes=duration_minutes,
        learner_context=learner_context,
        constraints=constraints,
    )


@mcp.tool(annotations=READ_ONLY)
def validate_references(
    theme_ids: list[str] | None = None,
    topic_ids: list[str] | None = None,
    competency_ids: list[str] | None = None,
    coverage_unit_ids: list[str] | None = None,
) -> dict:
    """Check whether IDs in an Agent draft exist in the current ontology."""
    return SOURCE.validate_references(
        theme_ids=theme_ids,
        topic_ids=topic_ids,
        competency_ids=competency_ids,
        coverage_unit_ids=coverage_unit_ids,
    )


@mcp.resource("bunnybook://manifest")
def manifest_resource() -> str:
    """Machine-readable source overview and trust boundary."""
    return json.dumps(SOURCE.overview(), ensure_ascii=False, indent=2)


@mcp.resource("bunnybook://learning-map")
def learning_map_resource() -> str:
    """The complete generated ontology; potentially large."""
    return json.dumps(SOURCE.data, ensure_ascii=False, indent=2)


@mcp.resource("bunnybook://themes/{theme_id}")
def theme_resource(theme_id: str) -> str:
    """A traceable context package for one theme."""
    return json.dumps(SOURCE.get_theme(theme_id), ensure_ascii=False, indent=2)


@mcp.resource("bunnybook://topics/{topic_id}")
def topic_resource(topic_id: str) -> str:
    """A traceable context package for one topic."""
    return json.dumps(SOURCE.get_topic(topic_id), ensure_ascii=False, indent=2)


@mcp.prompt()
def design_interdisciplinary_activity(
    theme_id: str,
    duration_minutes: int = 90,
    learner_context: str = "",
    constraints: str = "",
) -> str:
    """Prompt an Agent to design a traceable interdisciplinary activity."""
    return f"""
请先调用 build_activity_context，参数为：
- theme_id: {theme_id}
- duration_minutes: {duration_minutes}
- learner_context: {learner_context or '未提供，请先向教师确认'}
- constraints: {constraints or '无额外约束'}

然后只设计一份跨学科主题活动，不列多套备选通道。若时长不超过 180 分钟，把它设计为最终表现任务的一次单课切片：当堂完成一个共同中间成果，不得声称完成整个数周项目；无法在上下文中满足的 hard 前置列为课前假设或教师需确认。若未提供班情，采用“高一、40 人、4—5 人小组”作为明确假设；先写共同成果、学科分工与带时间的学生行动，再在末尾精简列出主题 ID、节点 ID、关系方向、课标科目、核心素养 ID、source_ref、review_status 与教师需复核判断。正文不复述工具 JSON，不展示思考过程。把课标已核对事实和项目映射明确分开，不得写回本体；公开分享时附上 licensing.attribution。
""".strip()


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the BunnyBook read-only MCP server")
    parser.add_argument(
        "--transport",
        choices=("stdio", "streamable-http"),
        default="stdio",
    )
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8765)
    args = parser.parse_args()
    if args.transport == "streamable-http":
        mcp.settings.host = args.host
        mcp.settings.port = args.port
        mcp.run(transport="streamable-http")
    else:
        mcp.run(transport="stdio")


if __name__ == "__main__":
    main()
