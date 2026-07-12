# BunnyBook · 高中跨学科主题课程信息源

BunnyBook 以 8 个 Meta Big Questions 为上层组织、以真实跨学科主题为入口、以可教学习节点与前置关系为核心，是给备课 Agent 的中国高中课标知识底座。产品卖点不是再做一个会写教案的 AI，而是让教师已有的 Agent 获得可追溯的主题结构、学科贡献、学习关系、课标依据与人工复核边界。

当前主站提供两条连续路径：先通过教学图谱发现和核对主题，再零安装复制 Agent 使用包；本地只读 MCP 是长期调用方式，需要完整项目和 Python 环境。项目已准备 BunnyBook for Kimi Code 第三方插件本地测试包，但尚未成为 Kimi 官方插件或进入插件市场；公开静态网页也不会执行 Python 或冒充远程 MCP。

当前版本为 **Full Alpha 0.3**：覆盖本地现有 1 份普通高中课程方案和 12 份学科课标，并保留“课标事实”和“项目映射”之间的证据边界。

## 直接打开

- 交互地图：[mvp/index.html](./mvp/index.html)
- Full Alpha 说明：[MVP_README.md](./MVP_README.md)
- 产品方向：[docs/product_direction.md](./docs/product_direction.md)
- Agent 清单：[mvp/agent-manifest.json](./mvp/agent-manifest.json)
- MCP 接入说明：[agent_runtime/README.md](./agent_runtime/README.md)
- Kimi Code 本地测试包：[integrations/kimi/bunnybook/README.md](./integrations/kimi/bunnybook/README.md)
- 正式许可地图：[LICENSE.md](./LICENSE.md)
- 品牌、域名与分享图：[docs/brand_and_domain.md](./docs/brand_and_domain.md)

地图不依赖服务器，可直接本地打开。

## 当前范围

- 8 个跨学科主题，分别对应 BQ1-BQ8。
- 87 个可教、可判断掌握的学习节点。
- 189 条带 `hard / soft` 与理由的前置关系。
- 12 门本地已有学科课标。
- 51 项经课标原文与渲染页核对的官方核心素养名称。
- 182 个课程内容来源单元，覆盖 13 份本地 PDF。
- 1 张“12 科 × 8 主题”课标覆盖矩阵。

8 个主题分别是：怎样生活才算健康？数据能告诉我们真相吗？未来真的可以被预测吗？我们能实现碳中和吗？AI 可以替我们做决定吗？文化遗产如何活在未来？什么样的规则才公平？好主意怎样才能真正解决问题？

## 数据分层

- `data/review/full/curriculum_catalog.yml`：12 科、51 项核心素养与覆盖契约。
- `data/review/full/themes.yml`：8 个主题的主旨、学科贡献与共同表现任务。
- `data/review/full/theme_membership.yml`：主题共享哪些学习节点。
- `data/review/full/topics/`：新增学科节点、综合节点及其课标映射和前置关系。
- `data/review/content_coverage_units.csv`：182 个课程内容来源单元。
- `data/review/learning_map_pilot.yml`：原 2 主题、34 节点 pilot，继续作为可追溯基线保留。

182 个课标内容单元只承担来源索引和覆盖审计，不会被直接改名为微主题。主图继续只放可教、可观察掌握的学习节点及其前置关系。

## 公开包验证

```bash
python3 scripts/validate_public_release.py
```

这项验证不需要课标 PDF 或内部审阅数据，会检查图谱计数、正式许可、Kimi 数据镜像、公开包禁入项以及本机路径泄漏。安装 MCP 依赖后，还可以运行：

```bash
python3 scripts/validate_mcp_server.py
python3 scripts/validate_kimi_plugin.py
```

权利人的完整作者工作区可以用 `scripts/build_public_release.py` 生成一个干净的 GitHub 目录；不要在含课标 PDF 和内部审阅数据的工作区直接 `git add .`。

公开发布物包括：

- `mvp/index.html`
- `mvp/styles.css`
- `mvp/data.js`
- `mvp/app.js`
- `mvp/learning-map.json`
- `mvp/agent-manifest.json`
- `mvp/data-notice.md`
- `mvp/mcp-config.example.json`
- `agent_runtime/mcp_server.py`
- `MVP_README.md`

## 证据边界

51 项核心素养名称及其页码已依据本地课标原文核对。节点颗粒度、先修关系、主题成员关系，以及“节点—科目—核心素养—内容锚点”对应仍属于 `author / inferred` 的项目映射，尚待相应学科教师复核。

“覆盖现有课标”只指当前目录中的 12 门学科课标。当前语料没有普通高中通用技术课程标准，也不能代表国家全部外语或艺术分科课标；普通高中课程方案是政策来源，不计作第 13 门学科。

## GitHub 开源与贡献

BunnyBook 采用分层开放许可：软件、图谱数据库和原创课程内容适用不同许可证，课程标准 PDF、官方原文、第三方商标与 BunnyBook 品牌不在开放范围内。准确边界以根目录 [`LICENSE.md`](./LICENSE.md) 为准，来源与第三方声明见 [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md)。

当前本地工作区包含不能公开的研究资料，不能直接整目录上传 GitHub。公开仓库应从允许清单生成，至少排除 13 份课标 PDF、内部审阅 CSV/YAML、原文摘录、截图、缓存和本机环境。完整步骤见 [`docs/github_release_checklist.md`](./docs/github_release_checklist.md)。

公开仓库以 `mvp/learning-map.json` 为可运行、可验证的发布真源，不承诺在缺少本地研究语料和内部审阅数据时从原始 PDF 完整重建图谱；相关脚本可以公开供审计，但上游研究副本和审阅工作台不随仓库分发。

欢迎提交界面、MCP、Kimi Code 插件、原创课程内容和可追溯课标映射方面的改进。提交前请阅读 [`CONTRIBUTING.md`](./CONTRIBUTING.md) 与 [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md)；安全或隐私问题请按照 [`SECURITY.md`](./SECURITY.md) 私下报告。
