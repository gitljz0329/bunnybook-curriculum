---
name: inspect-evidence
description: 检查一个主题、节点或检索词背后的课标来源与人工复核边界
---

请检查下面对象的课程依据：

`$ARGUMENTS`

若输入是主题 ID，调用 `get_theme_context`；若是节点 ID，调用 `get_topic_context`；若是自然语言或 ID 不确定，先调用 `search_curriculum`，不得猜测。必要时用 `trace_learning_path` 显示直接前置或后继，并在最后用 `validate_references` 核验所有引用 ID。

输出：

1. 对象与稳定 ID；
2. 它在主题活动中的作用；
3. 对应课标科目、核心素养 ID、内容单元或锚点、`source_ref`；
4. 前置与后继关系，保持 `prerequisite_id -> topic_id` 方向；
5. `review_status` 和人工复核边界；
6. 一句结论，明确这是课标已核对事实、BunnyBook 项目映射，还是目前证据不足。

