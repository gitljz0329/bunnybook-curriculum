# BunnyBook 多层许可说明

版权所有 © 2026 lixiaozuyi  
许可联系：lixiaozuyi@gmail.com

BunnyBook Curriculum 同时包含数据库、原创内容、软件、品牌材料和第三方来源索引。单一许可证不能准确覆盖这些对象，因此本仓库采用以下分层许可。除非文件另有明确标注，本说明适用于本仓库及其发布包。

## 1. 图谱数据库：ODbL 1.0

BunnyBook 依法有权许可的数据库集合与结构，包括数据模式、稳定 ID 体系、主题成员关系、节点关系、关系方向、项目映射以及数据的选择与编排，依据 **Open Data Commons Open Database License 1.0（ODbL 1.0）** 提供。

典型载体包括：

- `mvp/learning-map.json`、`mvp/data.js` 及其构建等价物；
- `data/` 中由 BunnyBook 创建、用于形成上述图谱的结构化记录；
- 图谱中主题、节点、关系、学科、素养与内容单元之间的 ID 和关联结构。

ODbL 官方完整文本见 [`LICENSES/ODbL-1.0.txt`](LICENSES/ODbL-1.0.txt)。对数据库的公开使用、再分发或派生数据库，应遵守 ODbL 的署名、许可通知和 Share-Alike 要求。建议署名：

> Contains information from the BunnyBook Curriculum Graph by lixiaozuyi, licensed under ODbL 1.0.

ODbL 只许可数据库层权利，不自动许可每条记录中的独立内容。

## 2. BunnyBook 原创内容：CC BY 4.0

BunnyBook 依法有权许可的原创文字内容，包括主题与节点说明、驱动问题、学习目标、原创掌握证据、诊断问题、关系理由、教师材料和原创文档内容，依据 **Creative Commons Attribution 4.0 International（CC BY 4.0）** 提供。

CC BY 4.0 官方完整文本见 [`LICENSES/CC-BY-4.0.txt`](LICENSES/CC-BY-4.0.txt)。使用时应标注作者、许可链接和是否做过修改，并不得暗示 lixiaozuyi、BunnyBook、教育部、Kimi 或任何第三方对使用者及其成果背书。建议署名：

> “BunnyBook Curriculum” by lixiaozuyi, licensed under CC BY 4.0; changes were made.

## 3. 软件：Apache License 2.0

BunnyBook 依法有权许可的软件代码，包括主站代码、只读 MCP、Kimi Code 第三方插件适配、构建脚本和验证脚本，依据 **Apache License 2.0** 提供。

典型目录包括：

- `mvp_src/` 中的界面代码与样式；
- `agent_runtime/` 中的 MCP 运行时；
- `integrations/kimi/` 中的 Kimi Code 适配；
- `scripts/` 中的构建、同步与验证代码。

Apache-2.0 官方完整文本见 [`LICENSES/Apache-2.0.txt`](LICENSES/Apache-2.0.txt)。再分发软件时须保留适用的版权与许可通知，并按许可证要求处理修改声明和 `NOTICE`。

## 4. 品牌：未授予商标许可

“BunnyBook”、 “BunnyBook Curriculum”、相关标识、兔耳/书本品牌图形、社交分享视觉及用于识别 BunnyBook 官方来源的整体品牌呈现，不因 ODbL、CC BY 4.0 或 Apache-2.0 而获得使用许可。详细规则见 [`TRADEMARKS.md`](TRADEMARKS.md)。

## 5. 明确排除的材料

下列材料不由 lixiaozuyi 或 BunnyBook 通过上述许可证再许可：

- 课程方案、课程标准 PDF 及其版式、图表和原文；
- 教育部或其他上游来源的官方名称、核心素养名称、课程模块/任务群标题、文件名、页码、短引文及其他不属于 BunnyBook 的材料；
- Marble、Kimi 及其他第三方的名称、Logo、商标、框架、软件或内容；
- 任何由共同作者、雇主、学校、课题组、学生、外包方或其他主体拥有而尚未取得许可的贡献。

这些内容即使出现在数据记录或来源索引中，也仍受其各自法律状态和上游条款约束。详见 [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)。根目录中的本地课程标准 PDF 是研究与核对副本，不属于公开发布包，不得随 GitHub 仓库或插件分发。

## 6. 混合文件的解释顺序

一个文件可能同时承载多类对象。例如，JSON 文件中的数据库选择与编排适用 ODbL 1.0；其中 BunnyBook 原创文字适用 CC BY 4.0；上游官方名称与来源定位仍被排除；处理这些数据的软件代码适用 Apache-2.0。许可证只在 lixiaozuyi 有权授权的范围内生效。

官方许可证来源：

- ODbL 1.0：<https://opendatacommons.org/licenses/odbl/1-0/>
- CC BY 4.0：<https://creativecommons.org/licenses/by/4.0/legalcode>
- Apache License 2.0：<https://www.apache.org/licenses/LICENSE-2.0>

