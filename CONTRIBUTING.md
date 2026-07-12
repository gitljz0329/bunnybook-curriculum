# 为 BunnyBook 做贡献

感谢你帮助 BunnyBook 变得更准确、更可用。BunnyBook 同时包含课程图谱、原创课程内容和软件；提交前请先阅读根目录的 [`LICENSE.md`](./LICENSE.md)，确认你的贡献适用哪一层许可。

## 适合提交的贡献

- 修复界面、MCP 或 Kimi Code 插件中的缺陷。
- 改进原创主题说明、学习节点、关系理由与教师材料。
- 补充可追溯的课标映射建议，并明确它是课标事实、项目映射还是待人工复核内容。
- 改进无障碍、文档、测试与公开数据验证。

## 不要提交的内容

- 课程标准、教材、试题或其他第三方资料的 PDF、扫描图和大段原文。
- `data/review/`、`data/working/`、内部审阅 CSV/YAML、`source_snippet_short` 或未公开的评审记录。
- 学生、教师或学校的个人信息与未脱敏案例。
- API Key、访问令牌、Cookie、私钥、账号凭据或本机绝对路径。
- 无法确认权利归属的生成内容、图片、Logo 或品牌素材。

必要的课标依据请用来源名称、公开链接、页码或章节定位表达，并用自己的话概述；不要把上游资料当作 BunnyBook 可以再许可的原创内容。

## 提交流程

1. 先搜索现有 Issue，确认没有重复问题。
2. 对数据或课程映射改动，先建立“课标映射建议”Issue，写明来源定位、建议关系和证据等级。
3. 保持一次 Pull Request 只解决一个清晰问题。
4. 运行公开包验证：

   ```bash
   python3 scripts/validate_public_release.py
   ```

   修改 MCP 或 Kimi 插件时，再在相应依赖可用的环境运行 `scripts/validate_mcp_server.py` 或 `scripts/validate_kimi_plugin.py`。

5. 在 Pull Request 中说明改动、验证方式、许可/来源边界以及是否需要学科教师复核。

## 数据改动最低要求

数据贡献应保留稳定 ID 和关系方向，不得把“BunnyBook 项目映射”表述为“课标直接规定”。新建或修改的映射至少应包含：

- 来源文件或官方页面名称；
- 页码、章节或条目定位；
- `evidence_level`；
- `review_status`；
- 一段原创的关系理由；
- 是否需要相应学科教师复核。

公开仓库把 `mvp/learning-map.json` 作为发布真源，不包含完整的内部 PDF 抽取与审阅工作台。大型图谱改动建议先提交映射 Issue，由维护者在内部作者源复核并重新生成公开图；直接修改发布 JSON 时，必须同步 Kimi 镜像、Manifest 计数与机器可读许可字段。

## 贡献许可

提交贡献即表示你确认：你有权提交这些内容，并同意它们按照根目录 [`LICENSE.md`](./LICENSE.md) 中对应的软件、数据库或原创内容许可发布。第三方材料、官方课标原文和 BunnyBook 品牌不因提交而自动获得开放许可。

参与本项目也意味着同意遵守 [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md)。安全问题请不要建立公开 Issue，而应按照 [`SECURITY.md`](./SECURITY.md) 私下报告。
