# 来源地图

来源地图把一个 PDF 从“文件”变成可引用的课程标准来源。它不总结整本 PDF，而是记录文件身份、页数、是否可抽取文本，以及主要章节的大致位置。

## 为什么先做 source map

如果直接生成知识图谱，很容易把课程标准原文、AI 推断和教师解释混在一起。先做来源地图，可以让后续每个课程锚点都能回到文件、页码和章节线索，人工复核也更轻。

## section_type

`data/catalog/standard_sections.csv` 使用以下章节类型：

- `front_matter`: 封面、前言、目录等。
- `curriculum_nature`: 课程性质、基本理念或课程理念。
- `core_literacy`: 学科核心素养或核心素养。
- `curriculum_goals`: 课程目标。
- `curriculum_structure`: 课程结构。
- `curriculum_content`: 课程内容、内容要求或模块内容。
- `academic_quality`: 学业质量。
- `teaching_suggestions`: 实施建议或教学建议。
- `evaluation_suggestions`: 评价建议或考试评价建议。
- `appendix`: 附录。
- `unknown`: 暂不能可靠分类。

## source_ref 写法

`source_ref` 至少包含：

- PDF 文件名。
- PDF 页码，使用人类可读的 1-based 页码。
- 章节或标题线索。

示例：

```text
普通高中数学课程标准（2017年版2020年修订）.pdf，PDF第 42 页，课程内容
```

## page_start / page_end

`page_start` 和 `page_end` 都使用 PDF 阅读器中看到的 1-based 页码，不使用 pypdf 内部的 0-based 索引。无法确定结束页时，`page_end` 可以留空，但 `needs_review` 应为 `true`。

## needs_review

`needs_review=true` 表示这一条来源地图仍需人工确认。常见原因包括：

- 标题来自启发式检测，而不是 PDF 自带书签。
- 章节结束页无法确定。
- 同一页有多个标题或复杂表格。
- PDF 抽取文本可能丢失换行或层级。
