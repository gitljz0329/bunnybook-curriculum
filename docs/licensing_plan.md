# BunnyBook 公开许可方案（已激活）

更新日期：2026-07-11

状态：**分层开放许可已经激活。** 正式权利人为 `lixiaozuyi`；许可联系信息集中记录在根目录 `LICENSE.md` 与 `CITATION.cff`。许可仅在该权利人实际拥有或获授权的权利范围内生效；第三方与尚未清结的共同贡献明确排除。

这份文件说明发布决策与操作边界；正式许可地图以根目录 `LICENSE.md` 为准，官方未经修改的许可证全文位于 `LICENSES/`。

## 已激活的许可结构

| 对象 | 许可 | 适用范围 |
|---|---|---|
| 图谱数据库 | ODbL 1.0 | 数据集合、模式、稳定 ID、节点关系、主题成员关系和项目映射 |
| BunnyBook 原创文字 | CC BY 4.0 | 原创主题与节点说明、关系理由、掌握证据、诊断问题、教师材料和原创文档 |
| 软件 | Apache-2.0 | 网站代码、MCP、Kimi Code 第三方插件、构建与验证脚本 |
| 品牌 | 保留品牌权利 | BunnyBook 名称、标识、兔耳/书本品牌图形和官方来源识别视觉 |
| 第三方内容 | 不由 BunnyBook 再许可 | 课程标准 PDF、官方课标原文与编排、第三方框架、名称、Logo 和商标 |

版权所有 © 2026 lixiaozuyi。

## 为什么采用“Marble+”分层结构

Marble 的课程图谱采用 ODbL 1.0 许可数据库、CC BY-SA 4.0 许可其原创文字，并把第三方课程框架排除在自身许可之外。BunnyBook 沿用“按权利层拆分”的基本结构，但将自有原创文字改为 CC BY 4.0，并为 MCP、Plugin、网站和构建代码单独加入 Apache-2.0。

ODbL 允许研究与商业产品使用，同时要求公开使用的派生数据库按其规则继续开放；教师或 Agent 基于图谱生成的活动方案通常是 produced work，并不因此要求整个宿主产品开源。CC BY 只要求对 BunnyBook 原创内容合理署名和标注修改，降低教师、学校与 Agent 宿主的再利用摩擦。Apache-2.0 则为软件复制、修改、分发和专利许可提供清晰边界。

## 精确许可范围

### ODbL 1.0 数据库层

覆盖 BunnyBook 有权许可的：

- `mvp/learning-map.json`、`mvp/data.js` 及构建等价物的数据库集合与结构；
- 主题、节点、关系、学科、素养和内容单元之间的稳定 ID 体系；
- `prerequisite_id -> topic_id` 方向、关系强弱、主题成员关系和项目映射结构；
- 数据库选择、编排与整体组织所产生的数据库权利。

ODbL 不自动解决每个字段中独立内容的版权，因此与 CC BY 内容层及第三方排除声明共同适用。

### CC BY 4.0 原创内容层

覆盖 BunnyBook 有权许可的原创内容，例如：

- 主题标题、驱动问题、说明、学习目标、共同表现任务和学科贡献解释；
- 节点名称、原创说明、掌握证据和诊断问题；
- 关系理由、教师友好摘要、教师包和工作纸；
- BunnyBook 自己撰写的文档和图解中不属于软件或品牌的内容。

使用者须标注 `BunnyBook Curriculum`、作者 `lixiaozuyi`、CC BY 4.0 链接和是否修改；署名不得暗示 BunnyBook、教育部、Kimi 或其他第三方背书。

### Apache-2.0 软件层

覆盖 BunnyBook 有权许可的：

- `mvp_src/` 中的界面代码与样式；
- `agent_runtime/` 中的只读 MCP；
- `integrations/kimi/` 中的 Kimi Code 第三方插件适配；
- `scripts/` 中的构建、验证和同步代码。

数据载体和处理代码即使出现在同一发行物中，也分别适用各自许可。

## 明确排除

以下内容不属于 BunnyBook 开放许可：

- 根目录 13 份本地课程方案/课程标准 PDF 及其版式、图表和原文；
- 内部核对表中的 `source_snippet_short` 等原文摘录；
- 官方核心素养名称、课程模块/任务群标题、文件名、页码等上游材料中 BunnyBook 不拥有的权利；
- Marble、Kimi、IB、OECD、UNESCO、EU、教育部及其他第三方的名称、Logo、商标和原文；
- BunnyBook 名称、标识和用于识别官方来源的品牌视觉；
- 任何尚未获得 lixiaozuyi 授权的共同作者、雇佣、学校课题、学生或外包贡献。

公开数据可以保留必要的短名称、事实性索引和来源定位，但不能宣称由 BunnyBook 授予这些上游材料的许可。原始 PDF 与内部摘录不得进入静态站、插件包或 GitHub 公开仓库。

## GitHub 公开发布前检查

许可文件已经可随仓库发布，但公开推送前仍应完成以下操作检查：

1. 确保根目录 13 份 PDF、内部摘录、缓存和审阅中间文件不被提交。
2. 复核 `data/catalog/source_rights.csv` 中所有 `pending_source_url_verification` 条目。
3. 检查是否存在共同作者、雇佣成果、学校课题、学生或外包贡献；取得书面授权或移除相关材料。
4. 确认没有复制 Marble 或其他课程产品的受保护表达或数据，只借鉴公开产品与许可结构。
5. 为最终仓库和站点确定 canonical URL，并把它加入数据库署名示例、`CITATION.cff` 和站点元数据。
6. 若发行物直接打包第三方依赖源码或二进制，生成并随包提供对应版本的完整第三方许可文本。

## 已生成的许可资产

- `LICENSE.md`：总许可地图与适用范围；
- `LICENSES/ODbL-1.0.txt`：官方 ODbL 1.0 完整文本；
- `LICENSES/CC-BY-4.0.txt`：官方 CC BY 4.0 完整文本；
- `LICENSES/Apache-2.0.txt`：官方 Apache License 2.0 完整文本；
- `NOTICE`：发行物总通知；
- `THIRD_PARTY_NOTICES.md`：上游材料与软件依赖边界；
- `TRADEMARKS.md`：品牌使用边界；
- `CITATION.cff`：标准引用元数据。

## 官方参考

- Marble 课程图谱及其多层许可：<https://withmarble.com/curriculum/>、<https://github.com/withmarbleapp/os-taxonomy>
- ODbL 1.0：<https://opendatacommons.org/licenses/odbl/1-0/>
- CC BY 4.0：<https://creativecommons.org/licenses/by/4.0/>
- Apache-2.0 应用说明：<https://www.apache.org/legal/apply-license>
- 中国《著作权法》：<https://www.npc.gov.cn/c2/c30834/202011/t20201119_308796.html>
