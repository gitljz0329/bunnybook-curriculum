# 数据模型

## 学习地图核心层（Full Alpha 0.3）

当前作者源拆分在 `data/review/full/`，构建时与原两主题 pilot 合并：

- `curriculum_catalog.yml`: 12 门课标、51 项核心素养和全量覆盖契约。
- `themes.yml`: BQ1-BQ8 的主题主旨、学科贡献和共同表现任务。
- `theme_membership.yml`: 8 个主题对共享节点的引用与主题内学习阶段。
- `visual_subjects.yml`: 地图视觉类别；`interdisciplinary` 只表示综合节点。
- `topics/*.yml`: 新增学科节点和综合节点，以及原子化的课标映射与前置关系。

原 `learning_map_pilot.yml` 和 `curriculum_alignment_pilot.yml` 保留为两主题基线。所有全量作者源仍位于 `review`，因为节点颗粒度、主题成员关系和先修关系尚未完成学科教师复核。

### topics

每个 topic 必须是单一、可教、可观察掌握的学习对象，不能是完整活动、项目主题或课标章节。

关键字段：

- `id`: 稳定的微主题 id。
- `name`: 面向教师与学习者的短名称。
- `primary_subject_id` / `domain`: 节点主要知识归属与领域；综合节点可没有主学科。
- `stage`: 1–4 的学习进阶阶段，而不是课标直接规定的年级。
- `type`: `conceptual`、`procedural`、`representational`、`language` 或 `meta`。
- `description`: 对该微主题的原创解释。
- `mastery_evidence`: 至少一条可观察的掌握表现。
- `assessment_prompt`: 可以直接用于诊断理解的问题。
- `source_anchor_ids` / `source_ref`: 课标锚点与人类可读的回溯指针。
- `evidence_level` / `review_status`: 内容证据与审阅状态。
- `curriculum_links`: 原子化保存每门映射科目的 `role`、`competency_ids`、`content_anchor_ids`、`mapping_basis` 与 `review_status`。
- `curriculum_subject_ids` / `competency_ids`: 为前端检索与筛选编译出的扁平索引，不再作为作者源。

### dependencies

`dependencies` 只表达有方向的学习先修关系：`prerequisite_id -> topic_id`。

- `strength=hard`: 未掌握会实质阻断后续理解或执行。
- `strength=soft`: 显著改善理解，但可并行补学。
- `reason`: 解释为什么前者应在后者之前；不能只写“相关”。

所有先修边当前都是结构推断。节点能回溯到课标，不等于课标直接规定了节点之间的先后顺序。

### curriculum alignment

`data/review/full/curriculum_catalog.yml` 把“官方名称”与“项目判断”分开保存：

- `curriculum_subjects`: 12 门本地已有学科课标及其文件、核心素养原文页码和课程内容单元。
- `competencies`: 51 项按课标原文核对的学科核心素养名称。
- `coverage_contract`: 1 份课程方案、12 份学科课标、BQ1-BQ8 和 182 个内容单元的预期范围。
- 节点的具体映射不再放在中央平行数组中，而是由每个 topic 的 `curriculum_links` 保存。

核心素养的名称和来源页码可以作为已核对事实；节点映射与学科分工仍是 `author_mapped_pending_subject_review`，必须经学科教师复核后才能晋升。

### routes

构建产物中的 `routes` 是 `themes.yml` 与 `theme_membership.yml` 的兼容编译结果。每个主题只引用共享 topic id，不复制节点，也不成为主图共同父节点；它呈现“真实问题—共同目标—学科分工—共同表现任务”，并为每个节点编译 `discover / investigate / interpret / create_and_act` 主题角色。

### stages 与 subjects

- `stages` 给地图提供有教育语义的横向进阶轴。
- `subjects` 给节点提供稳定的颜色、形状与筛选入口；其中 `interdisciplinary` 仅表示综合节点，不是课标学科。
- `curriculum_subjects` 才表示真实课标科目，用于节点详情、主题分工和素养映射。

构建脚本把作者源编译成 `data/build/learning_map_full.json` 与 `mvp/learning-map.json`，同时生成课标覆盖矩阵，并把本地预览所需的同一份数据写入独立的 `mvp/data.js`。`app.js` 只保留界面代码，因此页面可以直接本地打开，软件与数据许可也不会混在同一文件。

## 主题与来源支持层

下面的 Big Questions、themes、curriculum anchors、activity tasks 与 assessment evidence 继续保留，但不再充当主图中的学习节点。

## Meta Big Questions

`data/meta/big_questions.yml` 保存 8 个元问题。它们是项目的上位框架，不直接等同于某一条课标内容。

字段含义：

- `title`: 大问题标题。
- `question`: 面向教师和学生的核心问题。
- `short_description`: 问题覆盖的概念范围。
- `international_anchors`: 国际框架中的参考锚点。

## 主题表 themes.csv

主题是连接 Big Question 与跨学科活动的中间层。主题可以来自教师设计、课程标准综合分析或项目实践经验。

字段要点：

- `primary_bq`: 主题主要归属的大问题。
- `secondary_bq`: 可能关联的第二大问题。
- `status`: 建议使用 `draft`、`reviewed`、`ready`、`deprecated` 等状态。

## 课程标准锚点 curriculum_anchors.csv

课程标准锚点是从课程标准或相关文件中抽取、改写和定位后的教学依据。公开数据应使用原创摘要和来源定位，不应复制大段原文。

关键字段：

- `teacher_friendly_summary`: 面向教师的原创摘要。
- `source_ref`: 文件名、页码、章节名或条目位置。
- `evidence_level`: `direct`、`inferred`、`author` 或 `uncertain`。

## 来源章节表 standard_sections.csv

`data/catalog/standard_sections.csv` 是 Phase 1 的来源地图索引。它记录每个 PDF 中主要课程标准章节的大致位置，例如核心素养、课程目标、课程内容、学业质量、教学建议和评价建议。

关键字段：

- `section_id`: 来源章节 id，供候选锚点引用。
- `file_id`: 来自 `data/catalog/pdf_manifest.csv`。
- `heading_path`: 检测到的标题或标题路径。
- `section_type`: 标准化章节类型。
- `page_start` / `page_end`: 人类可读的 1-based PDF 页码。
- `needs_review`: 是否需要人工确认页码或标题。

每个 PDF 的 YAML 来源地图保存在 `data/catalog/source_maps/`，便于人工快速查看单个文件结构。

## review 数据区

`data/review/` 保存 AI 或脚本生成的候选数据。它们只用于人工复核和工作流测试，不等于正式图谱数据，也不应直接用于公开展示。

正式、人工确认后的数据才进入 `data/working/`。

## content_coverage_units.csv

`data/review/content_coverage_units.csv` 是 Phase 2 的课程内容覆盖索引。它把各学科“课程内容”部分抽成较粗颗粒的覆盖单元，例如模块、主题、学习任务群、课程内容要素或运动系列。

它的用途是判断课程内容是否被 Big Questions 覆盖，而不是直接生成正式课标锚点。

关键字段：

- `unit_id`: 覆盖单元 id。
- `section_id`: 对应 `standard_sections_ranged.csv` 中的课程内容章节。
- `unit_title`: 模块、主题或任务群标题。
- `unit_type`: `course_module`、`content_theme`、`learning_task_group`、`content_element`、`sport_series` 等。
- `source_ref`: 来源文件和页码指针。页码用于回溯，不作为 Phase 2 的人工闸门。
- `review_status`: 默认 `candidate`。

## content_bq_edges.csv

`data/review/content_bq_edges.csv` 保存覆盖单元到 Big Questions 的候选关系。

这些边用于覆盖审计和后续主题候选生成。它们仍然是候选边，不等同于 `data/working/edges.csv` 中的正式边。

关键字段：

- `unit_id`: 来源覆盖单元。
- `bq_id`: 关联的 Big Question。
- `relation`: 当前使用 `frames_content`。
- `rationale`: 自动映射依据说明。
- `evidence_level`: 通常为 `inferred` 或 `author`。

## theme_cluster_candidates.csv

`data/review/theme_cluster_candidates.csv` 保存 Phase 3 生成的主题群候选。主题群是 Big Question 与具体探究主题之间的中间层，用来避免直接从大问题跳到零散活动。

关键字段：

- `cluster_id`: 主题群 id。
- `bq_id`: 主要统摄该主题群的 Big Question。
- `summary`: 主题群的范围说明。
- `why_this_cluster_matters`: 为什么这个主题群值得进入 MVP 候选。
- `related_subjects`: 可能参与的学科，用分号分隔。
- `review_status`: 默认 `candidate`，人工选择后可改为 `accept`。

## theme_candidates.csv

`data/review/theme_candidates.csv` 保存具体探究主题候选。它们用于人工选择 deep themes，不是完整教案，也不直接进入正式图谱。

关键字段：

- `theme_id`: 主题候选 id。
- `primary_bq` / `secondary_bq`: 主要和次要 Big Question。
- `theme_cluster`: 关联的主题群 id。
- `driving_question`: 面向学生和教师的驱动问题。
- `related_subjects`: 该主题涉及的学科。
- `linked_coverage_unit_ids`: 支撑该主题的 Phase 2 覆盖单元。它不是正式课标锚点。
- `possible_activity_tasks`: 可能的活动任务，不是完整教案流程。
- `possible_artifacts`: 学生可产出的可评价成果。
- `why_not_subject_mosaic`: 说明为什么该主题不是学科拼盘。

## deep theme cards

`themes/deep/` 保存 Phase 4 生成的深度主题卡。每张卡对应一个 `review_status=accept` 的主题候选，包含驱动问题、Big Question 视角、覆盖锚点、学习弧线、学生产出和评价重点。

这些卡不是完整教案，而是备课图谱的第一层可读样张。它们把 Phase 2 覆盖单元转换成少量正式工作区节点：

- `data/working/themes.csv`: accepted deep theme。
- `data/working/curriculum_anchors.csv`: 由该主题实际使用的覆盖单元晋升而来，状态为 `deep_draft`。
- `data/working/knowledge_abilities.csv`: 主题需要的跨学科能力和方法。
- `data/working/assessment_evidence.csv`: 可观察的学生产出和评价证据。
- `data/working/subject_anchors.csv`: 主题为什么需要某个学科参与。
- `data/working/edges.csv`: Big Question、主题、锚点、能力和证据之间的结构化关系。

Phase 4 仍不批量晋升 182 个覆盖单元；只有 accepted deep themes 链接到的覆盖单元进入正式工作区。

## pilot theme packages

`themes/pilot/` 保存 Phase 5 生成的教师共备样张。当前先选择两张：

- `TH-CAND-004` 数据会不会骗人
- `TH-CAND-007` AI 与社会判断

这两张被标记为 `pilot_draft`，因为它们已经从 deep theme 卡片推进到具体活动节奏、教师准备、材料包、评价量规和学生产出提示。

## activity_tasks.csv

`data/working/activity_tasks.csv` 保存 Phase 5 的活动任务节点。它把主题继续拆成可执行的共备步骤，但仍保持轻量，不写成完整教案。

关键字段：

- `theme_id`: 所属主题。
- `sequence`: 该主题内的活动顺序。
- `task_type`: 任务类型，例如 `evidence_scan`、`data_audit`、`risk_analysis`、`deliberation`。
- `student_action`: 学生在该任务中做什么。
- `teacher_move`: 教师如何推进、追问或约束任务。
- `student_output`: 该任务产生的可观察成果。
- `linked_anchor_ids`: 支撑该任务的正式课标锚点。
- `assessment_evidence_ids`: 该任务对应或推进的评价证据。

Phase 5 同时在 `data/working/edges.csv` 中加入：

- `Theme -> ActivityTask` 的 `includes_task` 边。
- `ActivityTask -> CurriculumAnchor` 的 `uses_anchor` 边。
- `ActivityTask -> AssessmentEvidence` 的 `produces_evidence` 边。

## MVP delivery artifacts

Full Alpha 0.3 把 8 个主题、全量本地课标目录、共享节点图与原有样张收成可交付包：

- `MVP_README.md`: MVP 总说明。
- `mvp/index.html`: 可直接打开的交互学习地图。
- `mvp/learning-map.json`: 可独立读取的开放地图数据。
- `mvp/agent-manifest.json`: Agent 的只读能力发现、图数据地址、计数与信任边界。
- `mvp/agent-prompt.md`: Agent 的字段语义、关系方向、输出要求与人工复核提示。
- `mvp/mcp-config.example.json`: 本地 MCP 客户端配置形状。
- `mvp/mcp-guide.md`: MCP 能力、运行方式与信任边界。
- `agent_runtime/mcp_server.py`: 读取同一 `learning-map.json` 的真实只读 MCP 运行时。
- `data/build/learning_map_full.json`: 全量构建产物。
- `materials/pilot/`: 两张 pilot theme 的学生工作纸、课堂模板和样例材料。
- `outputs/reports/mvp_build_report.md`: MVP 构建报告。
- `outputs/reports/mvp_validation_report.md`: MVP 校验报告。

`mvp/index.html` 先载入独立的 `mvp/data.js`，再运行 `mvp/app.js`，因此可以直接本地打开，不需要启动服务器。`data.js` 与 `learning-map.json` 是同一构建数据的两种发布载体；旧 `graph_seed.json` 继续保存主题、活动、锚点与评价证据的支持层数据。

`agent-manifest.json` 本身仍是静态发现清单，不冒充 MCP；项目另以 `agent_runtime/mcp_server.py` 提供真实的本地 MCP。两者都把 `learning-map.json` 作为唯一完整图数据源，规定 `themes` 为规范主题集合、`routes` 为兼容副本，并固定 `dependencies` 的读取方向为 `prerequisite_id -> topic_id`。MCP 只允许读取、检索、关系追踪、上下文组装和 ID 校验，不生成第二份课程逻辑，也不写回或改变审阅状态。公开静态主站不会执行 Python；Manifest 1.2 因此明确声明本地 MCP 需要安装、远程端点尚未开放，并链接 `data-notice.md` 说明数据版本和使用边界。

## curriculum_anchor_candidates.csv

课程锚点候选来自来源地图中的少量重点章节。它用于测试从 PDF 章节到课程锚点的流程。

关键字段：

- `candidate_id`: 候选项 id。
- `section_id`: 对应 `standard_sections.csv` 中的来源章节。
- `anchor_type`: 候选锚点类型，例如 `core_literacy`、`content_requirement`、`academic_quality`。
- `teacher_friendly_summary`: 面向教师的原创摘要。
- `source_snippet_short`: 最多 120 个中文字符的短摘录，只用于人工核对。
- `review_status`: `candidate`、`accept`、`revise` 或 `reject`。

## bq_link_candidates.csv

Big Question 关联候选说明某个课程锚点可能连接哪些元问题。每个课程锚点候选最多推荐 2 个 Big Questions。

这些关系通常不是课程标准直接表述，因此默认应使用 `inferred` 或 `author`，人工确认前不能当作正式图谱边。

## calibrated bq links

`data/review/calibrated/bq_link_candidates_calibrated.csv` 是 Phase 1.5 对原始 BQ 推荐的重新校准结果。它不覆盖原始候选表。

字段要点：

- `calibration_action`: `keep` 或 `downgrade`。低于阈值或依据过弱的 link 会被省略，质量审计报告统计被删除数量。
- `calibration_notes`: 说明保留、降级或需要人工确认的原因。
- `confidence`: 只表示自动校准强弱，不表示教育内容已经正确。

## review queue

`data/review/queues/anchor_review_queue.csv` 是人工审阅入口。它把课程锚点候选、校准后的 BQ 推荐、质量标记和人工修订字段合并到一张表。

关键字段：

- `priority`: `high`、`medium` 或 `low`。
- `quality_flags`: 例如 `weak_bq_link`、`generic_summary`、`needs_source_check`。
- `review_action`: 人工填写 `accept`、`revise`、`reject` 或 `defer`。
- `corrected_title`、`corrected_summary`、`corrected_bq_ids`: 人工修订字段。

## promotion pipeline

`scripts/promote_reviewed_candidates.py` 只处理 `review_action=accept` 或 `review_action=revise` 的队列行。它把人工确认后的条目写入 `data/working/curriculum_anchors.csv`，并可把人工确认的 Big Question 关系写入 `data/working/edges.csv`。

`data/working/` 只存人工确认后的正式数据。任何自动候选、自动校准或自动优先级都必须先停留在 `data/review/`。

Phase 2 不要求批量运行 promotion pipeline。只有当某个深度主题需要稳定课标依据时，才从覆盖单元或旧候选中挑选少量条目人工核对后晋升。

## subject_role_candidates.csv

学科角色候选用于测试某个锚点在跨学科主题活动中可能承担的角色。`disciplinary_role` 必须来自 `data/meta/role_vocab.yml`。

这个表可以先为空。只有当某个锚点的跨学科角色比较清楚时，才添加候选。

## 知识与能力点 knowledge_abilities.csv

知识与能力点是课程锚点支持的学习内容、方法、能力或素养表现。

`type` 可使用：

- `knowledge`
- `ability`
- `method`
- `concept`
- `disposition`

## 评价证据 assessment_evidence.csv

评价证据描述学生可以通过什么可观察表现来证明理解、能力或态度发展。

字段要点：

- `observable_student_performance`: 可观察的学生表现。
- `artifact_type`: 例如 `report`、`presentation`、`model`、`portfolio`、`debate`、`design`。

## 学科锚定 subject_anchors.csv

该表说明某一主题为什么需要某一学科参与，以及该学科在活动中的角色。

关键字段：

- `theme_id`: 关联 `themes.csv`。
- `curriculum_anchor_id`: 关联 `curriculum_anchors.csv`。
- `disciplinary_role`: 使用 `data/meta/role_vocab.yml` 中的角色。

## 边表 edges.csv

边表保存节点之间的结构化关系。它用于表达 Big Question、主题、课标锚点、知识能力点和评价证据之间的连接。

关键字段：

- `from_id`: 起点节点。
- `to_id`: 终点节点。
- `relation`: 关系类型，例如 `frames`、`uses_anchor`、`supports`、`assesses`。
- `rationale`: 原创关系说明。
- `evidence_level`: 关系证据等级。

## 证据等级

- `direct`: 课标或来源文本直接表述。
- `inferred`: 基于课标结构或上下文合理推断。
- `author`: 作者基于教学经验做出的判断。
- `uncertain`: 尚不确定，需要人工复核。
