# BunnyBook GitHub 开源发布检查清单

更新日期：2026-07-11

## 发布结论

**不要在当前工作目录直接执行 `git init` 后 `git add .`。** 当前目录同时保存公开产品、13 份第三方课标 PDF、内部审阅数据、原文短摘录、浏览器截图和本地构建环境。即使已有 `.gitignore`，第一次公开发布仍应从允许清单生成一个干净的独立目录，再对实际待提交文件做第二次审计。

推荐建立独立公开仓库，暂定名 `bunnybook-curriculum`。可以先创建为 Private 完成一次 GitHub 端检查，再切换 Public；如果直接选择 Public，也必须先完成本清单。

## 建议公开的边界

公开仓库使用允许清单，不复制整个工作区：

- 根文件：`README.md`、`MVP_README.md`、`LICENSE.md`、`LICENSES/`、`NOTICE`、`THIRD_PARTY_NOTICES.md`、`TRADEMARKS.md`、`CITATION.cff`、`CONTRIBUTING.md`、`SECURITY.md`、`CODE_OF_CONDUCT.md`、`.gitignore`、`.gitattributes`。
- GitHub 社区与审计：`.github/`。
- 静态主站和公开图谱：`mvp/`、`mvp_src/`。
- Agent 接口：`agent_runtime/`。
- Kimi Code 第三方测试插件：`integrations/kimi/bunnybook/`。
- 可公开的实现、验证和同步代码：`scripts/`、`requirements.txt`、`requirements-mcp.txt`。
- 原创主题与教师材料：`themes/`、`materials/`，或只保留 `mvp/resources/` 这一份发布镜像。
- 产品、数据模型、许可、来源、部署和贡献说明：筛选后的 `docs/`。
- 来源权利清单：`data/catalog/source_rights.csv`；它只记录来源、哈希和再分发边界，不包含课标原文。

公开图谱的唯一发布真源应标记为 `mvp/learning-map.json`。不要为了让公开仓库能够“从 PDF 完整重建”而发布内部抽取和审阅数据；公开仓库可以是一个可运行、可检查、可贡献的产品仓库，不必暴露本地研究语料。

## 必须排除

- 根目录 13 份课程方案/课程标准 PDF，以及未来新增的任何 PDF。
- `data/review/`、`data/working/`、`data/catalog/source_maps/`。
- `data/catalog/pdf_manifest.csv`、`standard_sections.csv`、`standard_sections_ranged.csv`。
- 含 `source_snippet_short`、课标原文、内部置信度校准或人工复核意见的 CSV/YAML/HTML。
- `.venv/`、`__pycache__/`、`.cache/`、`.pytest_cache/`、`node_modules/`。
- `.playwright-cli/`、`tmp/`、`output/`、`outputs/`、自动化截图、日志和本地验证中间物。
- `.env*`、Cookie、API Key、OAuth Token、私钥、账号配置和本机专用路径。
- `PROJECT_STATE.md` 等内部工作状态记录。

这些规则已写入 `.gitignore`，并由 `.github/workflows/public-release-audit.yml` 对实际被追踪的文件再次阻断。`.gitignore` 不能移除已经提交过的文件，所以首次提交前仍必须检查待追踪清单。

## 首次发布前

- [ ] 权利人已经确认 `LICENSE.md` 中的软件、数据库、原创内容和品牌四层边界。
- [ ] `LICENSES/`、`NOTICE`、`THIRD_PARTY_NOTICES.md`、`TRADEMARKS.md` 与 `CITATION.cff` 均已生成且内容一致。
- [ ] `README.md` 中所有本地绝对路径已改成仓库相对路径。
- [ ] `README.md` 清楚声明 Kimi 包是第三方 Custom Plugin，本项目与 Kimi/月之暗面不存在官方隶属或背书关系。
- [ ] 公开包中没有 `.pdf`、内部 CSV/YAML、原文摘录、截图或凭据。
- [ ] `mvp/learning-map.json` 与 Kimi 插件中的镜像完全一致。
- [ ] 主图仍为 8 个主题、87 个节点、189 条关系、12 个学科。
- [ ] 主站、MCP 与 Kimi 插件验证通过。
- [ ] README 已明确区分“公开包可运行/可验证”和“内部语料才能完整重建”，没有暗示公开仓库能从 PDF 零起点复现全部图谱。
- [ ] GitHub 仓库已启用 Private vulnerability reporting。
- [ ] 仓库地址确定后，在 `.github/ISSUE_TEMPLATE/config.yml` 中加入该仓库的 `/security/advisories/new` 绝对链接。
- [ ] 默认分支启用 Pull Request 与状态检查保护，至少要求 `Public release audit` 通过。
- [ ] 仓库描述、Topics、社交分享图和网站链接已填写。

## 建议的 GitHub 仓库设置

- Description：`A provenance-aware curriculum graph and read-only MCP for designing interdisciplinary high-school learning activities.`
- Topics：`curriculum`、`education`、`knowledge-graph`、`mcp`、`agent`、`interdisciplinary-learning`、`kimi`、`chinese-education`。
- Releases：首个标签建议为 `v0.3.0-alpha`，并附上图谱计数、已知审阅边界和许可摘要。
- Discussions：等出现真实外部贡献者后再开启；初期用结构化 Issue 收集缺陷和映射建议即可。
- Wiki：暂不启用，避免文档出现第二真源。

## 仍需权利人选择

1. 仓库名：推荐 `bunnybook-curriculum`；备选 `bunnybook-graph` 或 `bunnybook-mcp`。
2. 首次可见性：推荐先 Private 审计、确认 Git 历史干净后切换 Public；如果直接 Public，则必须从干净允许清单目录开始，不能在当前工作区直接初始化。
3. 是否把 `themes/` 与 `materials/` 作为可编辑源发布，还是只发布 `mvp/resources/` 镜像。推荐前者，便于社区贡献，但需确保构建过程不会依赖未公开的内部审阅数据。

许可证适用范围以根目录 [`LICENSE.md`](../LICENSE.md) 为准；本清单只规定发布边界，不扩张任何第三方内容的授权。
