# 工作流

1. 放入 PDF。

   将普通高中课程标准、教材或相关 PDF 放在项目目录中。不要移动、删除或重命名原始 PDF。

2. 运行 `inventory_pdfs.py`。

   ```bash
   .venv/bin/python scripts/inventory_pdfs.py
   ```

   这会生成 `data/catalog/pdf_manifest.csv` 和 `outputs/reports/pdf_inventory.md`。

3. 运行 `extract_pdf_text_sample.py`。

   ```bash
   .venv/bin/python scripts/extract_pdf_text_sample.py
   ```

   这只抽取每个 PDF 的前 3 页样本文本，不做全量抽取。

4. 人工确认 PDF 类型和学科。

   检查 `guessed_subject`、`guessed_doc_type`、页数和抽取状态。自动判断只是起点。

5. 生成课程内容覆盖层。

   ```bash
   .venv/bin/python scripts/extract_content_coverage_units.py
   .venv/bin/python scripts/map_content_units_to_bq.py
   .venv/bin/python scripts/audit_content_coverage.py
   .venv/bin/python scripts/validate_phase2.py
   ```

   这会生成 `data/review/content_coverage_units.csv`、`data/review/content_bq_edges.csv` 和覆盖审计报告。Big Questions 在这里作为固定的组织框架使用，不再逐条人工审阅。

6. 生成少量主题候选。

   ```bash
   .venv/bin/python scripts/generate_theme_candidates.py
   .venv/bin/python scripts/validate_theme_candidates.py
   ```

   这会生成 `data/review/theme_cluster_candidates.csv`、`data/review/theme_candidates.csv` 和 `outputs/reports/theme_candidate_report.md`。这些主题只是候选，不是完整活动方案。

7. 人工选择 2-3 个 deep themes。

   在 `data/review/theme_candidates.csv` 中把 2-3 个主题的 `review_status` 改为 `accept`，再进入深度主题卡生成。

8. 生成 deep theme 卡片和最小正式图谱数据。

   ```bash
   .venv/bin/python scripts/select_deep_themes.py
   .venv/bin/python scripts/build_deep_themes.py
   .venv/bin/python scripts/validate_phase4.py
   ```

   当前 Phase 4 选择 5 个主题作为 deep themes，并为它们生成 `themes/deep/` 卡片、少量正式课标锚点、知识能力点、评价证据和图谱边。

9. 生成两张 pilot theme 教师共备样张。

   ```bash
   .venv/bin/python scripts/build_pilot_theme_packages.py
   .venv/bin/python scripts/validate_phase5.py
   ```

   当前 Phase 5 选择 `TH-CAND-004` 数据会不会骗人 和 `TH-CAND-007` AI 与社会判断，生成 `themes/pilot/` 样张、`data/working/activity_tasks.csv` 活动任务节点，并把任务连接到课标锚点与评价证据。

10. 按主题需要晋升少量正式锚点。

   不批量晋升覆盖单元。只有当某个深度主题需要稳定课标依据时，才把少量已核对条目写入 `data/working/curriculum_anchors.csv`。每条都保留 `source_ref`。

11. 运行 `validate_data.py`。

   ```bash
   .venv/bin/python scripts/validate_data.py
   ```

   校验字段、id、证据等级、置信度和边关系。

12. 运行 `build_seed_json.py`。

   ```bash
   .venv/bin/python scripts/build_seed_json.py
   ```

   生成 `data/build/graph_seed.json`，作为后续可视化或图数据库导入的最小 seed 数据。

13. 维护全量学习地图作者源。

   人工编辑 `data/review/full/` 下的课程目录、主题、主题成员和 topic 文件；原 `learning_map_pilot.yml` 作为两主题基线保留。topic 必须是可独立判断掌握的微主题；dependency 只表示 `prerequisite -> topic`，区分 `hard / soft` 并写明理由。

   当前全量版本仍是 `author_draft_pending_subject_review`。新增或修改关系后，先检查内容锚点所属学科、素养归属和教育合理性，不要因为页面可视化成功就把它晋升为正式数据。

14. 生成并验证交互地图。

   ```bash
   .venv/bin/python scripts/build_mvp_package.py
   .venv/bin/python scripts/validate_mvp.py
   ```

   这会生成 `mvp/index.html` 交互入口、`mvp/learning-map.json`、`data/build/learning_map_full.json`、`MVP_README.md` 和 Full Alpha 校验报告。

   `validate_mvp.py` 会检查 8 主题覆盖、12 科/51 素养注册表、182 个内容来源单元、节点课标链接及锚点所属学科、主题子图、边端点、hard/soft、关系理由、hard DAG、无自环、无孤立节点、覆盖矩阵和页面核心交互。
