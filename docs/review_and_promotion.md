# Review And Promotion

当前状态说明：这条流水线保留为 QA 抽样和少量正式锚点晋升工具，不再是 Phase 2 主线。Phase 2 先使用 `data/review/content_coverage_units.csv` 和 `data/review/content_bq_edges.csv` 做课程内容覆盖；只有选定深度主题需要稳定依据时，才回到这里晋升少量条目。

`data/review/` 是候选区，不是正式图谱。这里的课程锚点、Big Question 关联和审阅队列都来自脚本或 AI 辅助处理，只能作为人工复核入口。

正式图谱数据只进入 `data/working/`。进入条件是：人工已经检查来源页码、短摘录、摘要、BQ 关联和需要修订的字段。

## anchor_review_queue.csv

`data/review/queues/anchor_review_queue.csv` 是人工审阅入口。每一行对应一个课程锚点候选，并汇总：

- 来源文件、学科、锚点类型和来源页码。
- 原始候选标题、摘要和短摘录。
- 校准后的 Big Question 推荐。
- 质量标记与建议优先级。
- 人工填写的审阅动作和修订字段。

## review_action

人工可以在 `review_action` 中填写：

- `accept`: 候选质量足够好，可以晋升。
- `revise`: 候选有价值，但需要使用 `corrected_title`、`corrected_summary` 或 `corrected_bq_ids` 的人工修订内容。
- `reject`: 候选不适合进入正式数据。
- `defer`: 暂缓，需要以后回到 PDF 或教学判断中继续核对。

空值表示尚未审阅，晋升脚本不会处理。

## 修订字段

- `corrected_title`: 人工修订后的标题。留空时继续使用候选标题。
- `corrected_summary`: 人工修订后的教师友好摘要。留空时继续使用候选摘要。
- `corrected_bq_ids`: 人工确认的 Big Question id，用分号分隔，例如 `BQ2;BQ3`。留空时晋升脚本会使用审阅队列里的建议 BQ。

## 晋升脚本

`scripts/promote_reviewed_candidates.py` 只处理 `review_action=accept` 或 `review_action=revise` 的行。它会：

- 将人工确认后的条目写入 `data/working/curriculum_anchors.csv`。
- 根据 BQ id 在 `data/working/edges.csv` 中写入 Big Question 到课程锚点的关系。
- 检查可能重复的 `source_ref + anchor_title`。
- 输出 `outputs/reports/promotion_report.md`。

如果没有任何 `accept` 或 `revise`，脚本会正常结束，并报告 `no candidates promoted`。

## 为什么不自动晋升

schema 校验通过只说明表结构和字段值合法，不说明教育内容正确。课程标准锚点需要人工确认来源、语义、摘要和教学解释，Big Question 关联也需要判断是否过度联想。

## 为什么 BQ 关联不能强行凑满 2 个

一个锚点可以链接 0 个、1 个或 2 个 Big Questions。没有足够证据时不推荐关联，比强行补满两个更可靠。候选区允许空缺，正式区需要清楚理由。
