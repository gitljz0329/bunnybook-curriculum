# BunnyBook · 同时面向教师与 AI 的开放课程信息源

BunnyBook 以 8 个 Meta Big Questions 为上层组织、以真实跨学科主题为入口、以可教学习节点与前置关系为核心，是一份给教师和备课 AI 共同使用的中国高中课程知识底座。

主产品不是再做一个只能在特定平台运行的教案生成器，而是让教师只需把公开网址发给自己常用的任意 AI，就能在原对话框中完成可追溯、可修改、需教师复核的课程设计：

```text
教师自然语言请求
  -> /llms.txt 与 /agent/START-HERE.md
  -> 主题、学习节点、前置关系与课标来源
  -> 单元或项目规划 / 学习进阶 / 单课时备课 / 教案核对
  -> 依据、警告与教师复核
```

**一句话定位：老师看得懂，AI 也找得到。**  
**产品原则：链接即接口，对话即应用，图谱即知识底座。**

当前图谱版本为 **Full Alpha 0.3**；通用教师—AI 入口协议为 **2.0 Universal Entry**。

## 直接打开

### 教师入口

- 通用首页：[`index.html`](./index.html)
- 完整教学图谱：线上路径 `/explore/`；仓库源文件 [`mvp/index.html`](./mvp/index.html)
- 图谱数据说明：[`mvp/data-notice.md`](./mvp/data-notice.md)
- Full Alpha 说明：[`MVP_README.md`](./MVP_README.md)

教师不需要安装任何工具。可以直接对常用 AI 说：

> 我是个高中生物老师，想用 https://bunnybook-curriculum.netlify.app 帮我备节课。

首页会根据学科、年级、任务、课时和班情生成更稳定的启动语。

### AI / Agent 入口

- 最短发现入口：[`llms.txt`](./llms.txt)
- 不能联网时的复制式上下文：[`llms-full.txt`](./llms-full.txt)
- 通用 AI 操作协议：[`agent/START-HERE.md`](./agent/START-HERE.md)
- Universal Entry 架构：[`docs/universal_entry.md`](./docs/universal_entry.md)
- 通用 Agent Manifest：[`agent/manifest.json`](./agent/manifest.json)
- 信息源 Manifest：[`api/v1/source-manifest.json`](./api/v1/source-manifest.json)
- 详细图谱清单：[`mvp/agent-manifest.json`](./mvp/agent-manifest.json)
- Agent 启动提示：[`mvp/agent-prompt.md`](./mvp/agent-prompt.md)

默认工作方式：

1. 将请求归入 `lesson_plan`、`full_planning`、`learning_progression` 或 `review`。
2. 第一轮最多询问 3 个真正影响方案的问题。
3. 渐进读取相关主题和节点，不为局部任务无差别扫描整站。
4. 先给一页课程蓝图，再展开课堂方案。
5. 分开课标可核对事实、BunnyBook 项目映射和教师最终决策。
6. 无法访问网页时明确说明，请教师粘贴 `llms-full.txt`；不得假装已读取或编造 ID。

### 开发者与高频集成

- MCP 接入说明：[`agent_runtime/README.md`](./agent_runtime/README.md)
- MCP 配置示例：[`mvp/mcp-config.example.json`](./mvp/mcp-config.example.json)
- Kimi Code 本地测试包：[`integrations/kimi/bunnybook/README.md`](./integrations/kimi/bunnybook/README.md)

本地只读 MCP、Plugin 和 Skill 都是可选加速层，不是普通教师第一次使用 BunnyBook 的前提。公开静态网页不会执行 Python，也不会冒充远程 MCP。

## GitHub 仓库为什么存在

这个仓库不仅为 BunnyBook 当前图谱提供可审计的公开真源，也是一套可复用的课程知识服务模板。

有人可以在遵守许可和品牌边界的前提下，fork 本仓库并构建：

- 按 NGSS 组织的课程信息源；
- 中国义务教育阶段版本；
- 某一地区、学校或学科群的课程图谱；
- 其他语言、学段或课程体系的教师—AI 双入口产品。

完整步骤见：[`docs/BUILD_YOUR_OWN.md`](./docs/BUILD_YOUR_OWN.md)。

复用时首先修改：

1. `site-config.js`：项目身份、站点 URL、计数、模式和主题入口。
2. `mvp/learning-map.json`：公开图谱的规范数据真源。
3. `llms.txt` 与 `llms-full.txt`：AI 发现入口和离线兜底。
4. `agent/START-HERE.md` 与 `agent/manifest.json`：对话协议。
5. `api/v1/source-manifest.json`：版本、资源和图谱语义。
6. `mvp/data-notice.md`：证据、许可、隐私和人工复核边界。

BunnyBook 品牌不随代码或数据的开放许可自动授权。派生项目应使用自己的名称和视觉身份，除非另行取得许可。

## 当前范围

- 8 个跨学科主题，分别对应 BQ1—BQ8。
- 87 个可教、可判断掌握的学习节点。
- 189 条带 `hard / soft` 与理由的前置关系。
- 12 门本地已有学科课标。
- 51 项经课标原文与渲染页核对的官方核心素养名称。
- 182 个课程内容来源单元，覆盖 13 份本地 PDF。
- 1 张“12 科 × 8 主题”课标覆盖矩阵。

8 个主题分别是：怎样生活才算健康？数据能告诉我们真相吗？未来真的可以被预测吗？我们能实现碳中和吗？AI 可以替我们做决定吗？文化遗产如何活在未来？什么样的规则才公平？好主意怎样才能真正解决问题？

## 四类教师任务

| 模式 | 教师的典型问题 | 默认交付 |
|---|---|---|
| `lesson_plan` | “帮我备一节 45 分钟的课。” | 一页蓝图、时间化流程、学生产物、掌握证据和复核项 |
| `full_planning` | “这个单元整体怎样组织？” | 真实问题、共同成果、学科贡献、节点顺序、课时和评价架构 |
| `learning_progression` | “学生学这个之前需要会什么？” | 目标节点、hard / soft 前置、证据、缺口与下一步 |
| `review` | “请帮我核对这份教案。” | 一致性、关系、来源、缺失证据与优先修改建议 |

## 数据分层

- `mvp/learning-map.json`：公开、可运行、可验证的规范图谱真源。
- `mvp/data.js`：供本地直接打开页面的图谱镜像。
- `data/review/full/curriculum_catalog.yml`：作者工作区中的 12 科、51 项核心素养与覆盖契约；不随公开仓库分发。
- `data/review/full/themes.yml`：作者工作区中的主题主旨、学科贡献与共同表现任务。
- `data/review/full/theme_membership.yml`：作者工作区中的主题成员关系。
- `data/review/full/topics/`：作者工作区中的学科节点、综合节点、课标映射和前置关系。
- `data/review/content_coverage_units.csv`：作者工作区中的 182 个课程内容来源单元。
- `data/review/learning_map_pilot.yml`：原 2 主题、34 节点 pilot，可追溯基线。

182 个课标内容单元只承担来源索引和覆盖审计，不会被直接改名为微主题。主图继续只放可教、可观察掌握的学习节点及其前置关系。

## 图谱语义

- `themes` 是规范主题集合；`routes` 是兼容副本，同一主题不能重复计数。
- `topics` 是学习节点。
- `dependencies` 的方向固定为 `prerequisite_id -> topic_id`。
- `hard` 表示 BunnyBook 当前项目认定的必要前置。
- `soft` 表示支持关系或有帮助的准备。
- 两类关系都不是课程标准直接规定的教学顺序。
- `curriculum_alignment.coverage_units` 是来源索引，不是学习节点。
- 顶层 `subjects` 中的 `interdisciplinary` 只用于可视化，不是第十三门课标学科。

## 公开包验证

```bash
python3 scripts/validate_public_release.py
python3 scripts/validate_universal_entry.py
node scripts/validate_agent_trial.js
```

跨宿主人工验收使用 [`docs/cross_ai_acceptance.md`](docs/cross_ai_acceptance.md)。它以同一句教师请求检查豆包、Kimi、ChatGPT、千问等宿主是否遵守最多 3 个问题、轻量检索、先给蓝图和人工复核边界。

安装 MCP 依赖后，还可以运行：

```bash
python3 scripts/validate_mcp_server.py
python3 scripts/validate_kimi_plugin.py
```

`validate_universal_entry.py` 会检查：

- 教师 / AI 双入口和关键可访问性引用；
- `llms.txt` 格式和绝对资源地址；
- 通用 Manifest、信息源 Manifest 与图谱计数一致性；
- 四种任务模式；
- JavaScript 语法；
- Netlify 路由；
- 密钥、本机路径和不可复用部署 URL 泄漏。

## Netlify 部署

根目录 `netlify.toml` 将公开仓库作为静态发布目录，并提供稳定路径：

- `/explore/*` → `/mvp/:splat`（图谱页面及相对资源）
- `/map` 与 `/map/*` → `/explore/` 兼容跳转
- `/api/v1/learning-map.json` → `/mvp/learning-map.json`
- `/api/v1/search-index.json` → 轻量主题与节点检索
- `/api/v1/theme-index.json` → 8 个主题包入口
- `/api/v1/themes/BQ1.json` 至 `BQ8.json` → 单主题有界上下文
- `/api/v1/graph-manifest.json` → `/mvp/agent-manifest.json`

先做预览部署：

```bash
npx netlify deploy
```

验证后发布生产：

```bash
npx netlify deploy --prod
```

建议把 Netlify 站点连接到这个公开 GitHub 仓库，让生产部署与可审计真源保持一致。

## 证据边界

51 项核心素养名称及其页码已依据本地课标原文核对。节点颗粒度、先修关系、主题成员关系，以及“节点—科目—核心素养—内容锚点”对应仍属于 `author / inferred` 的项目映射，尚待相应学科教师复核。

“覆盖现有课标”只指当前目录中的 12 门学科课标。当前语料没有普通高中通用技术课程标准，也不能代表国家全部外语或艺术分科课标；普通高中课程方案是政策来源，不计作第十三门学科。

AI 生成的教案、路径和判断必须由教师依据真实班情复核。不要向公开 AI 输入可识别学生身份的信息、健康信息、行为记录、成绩明细或个体评价数据。BunnyBook 不得用于自动评价学生、决定升学机会、作出健康或纪律处分等高风险个体决定。

## GitHub 开源与贡献

BunnyBook 采用分层开放许可：软件、图谱数据库和原创课程内容适用不同许可证，课程标准 PDF、官方原文、第三方商标与 BunnyBook 品牌不在开放范围内。准确边界以根目录 [`LICENSE.md`](./LICENSE.md) 为准，来源与第三方声明见 [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md)。

作者工作区包含不能公开的研究资料，不能直接整目录上传 GitHub。公开仓库应从允许清单生成，至少排除课标 PDF、内部审阅 CSV/YAML、原文摘录、截图、缓存和本机环境。完整步骤见 [`docs/github_release_checklist.md`](./docs/github_release_checklist.md)。

公开仓库以 `mvp/learning-map.json` 为可运行、可验证的发布真源，不承诺在缺少本地研究语料和内部审阅数据时从原始 PDF 完整重建图谱；相关脚本可以公开供审计，但上游研究副本和审阅工作台不随仓库分发。

欢迎提交界面、通用 AI 协议、数据验证、MCP、宿主适配、原创课程内容和可追溯课标映射方面的改进。提交前请阅读 [`CONTRIBUTING.md`](./CONTRIBUTING.md) 与 [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md)；安全或隐私问题请按照 [`SECURITY.md`](./SECURITY.md) 私下报告。
