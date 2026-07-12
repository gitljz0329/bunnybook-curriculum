# 用 BunnyBook 架构构建自己的课程信息源

这份指南面向希望复用 BunnyBook 设计的人：例如按 NGSS 组织一套课程图谱，按中国义务教育课程标准构建小学或初中版本，或为某个地区、学校、学科群建立自己的教师—AI 课程信息源。

BunnyBook 的可复用部分不是某一种主题答案，而是以下产品结构：

```text
教师自然语言请求
  -> 通用 AI 操作协议
  -> 课程信息源 Manifest
  -> 主题、学习节点与前置关系
  -> 课程蓝图 / 学习进阶 / 教案核对
  -> 来源、证据等级与人工复核
```

## 先理解许可与品牌边界

BunnyBook 采用分层许可：

- 软件：Apache-2.0。
- 图谱数据库的集合、结构、稳定 ID、节点关系与项目映射：ODbL 1.0。
- BunnyBook 有权许可的原创说明文字：CC BY 4.0。
- 课程标准 PDF、官方课标原文、第三方材料与商标：不在上述开放许可范围内。
- BunnyBook 名称、标识和品牌视觉：不因代码或数据开源而自动授权。

因此，做自己的版本时应：

1. 阅读根目录 `LICENSE.md`、`THIRD_PARTY_NOTICES.md` 和 `TRADEMARKS.md`。
2. 保留适用的开源许可与署名。
3. 使用自己的项目名称和视觉身份，除非另行获得 BunnyBook 品牌授权。
4. 不把受版权保护的课程标准 PDF、扫描图或大段官方原文直接提交到公开仓库。
5. 只发布你有权发布的事实性名称、来源定位、原创概述和项目映射。

## 推荐的仓库结构

```text
/
├── index.html                     # 教师 / AI 双入口首页
├── styles.css
├── app.js
├── site-config.js                 # 复用时首先修改
├── llms.txt                       # AI 最短发现入口
├── llms-full.txt                  # 不能联网时的复制式上下文
├── agent/
│   ├── START-HERE.md              # 通用对话协议
│   └── manifest.json              # 机器可读的模式与输出契约
├── api/v1/
│   └── source-manifest.json       # 版本、计数、资源与图谱语义
├── mvp/
│   ├── index.html                 # 交互图谱
│   ├── learning-map.json          # 公开、规范的数据真源
│   ├── agent-manifest.json        # 详细图谱能力清单
│   └── data-notice.md             # 证据、许可与隐私边界
├── scripts/
│   └── validate_universal_entry.py
└── netlify.toml
```

公开部署时，页面、Agent 协议和机器入口都应指向同一份 `mvp/learning-map.json`。不要在网页、MCP、Plugin 和 Skill 中维护四套不同的课程逻辑。

## 第一步：界定课程与语料范围

先写一页范围声明，至少回答：

- 面向哪个国家、地区、年级或课程体系？
- 包含哪些学科？明确不包含哪些学科？
- 使用哪些公开课程标准或政策文件？
- 哪些材料可以公开再分发，哪些只能作为本地研究副本？
- 哪些名称、条目和页码已经人工核对？
- 哪些主题、节点和关系只是作者建模，仍需教师复核？

不要用“覆盖全部课程标准”这类宽泛表述。应写成可审计范围，例如：

> 当前公开版本覆盖某地区 2025 年版七年级科学课程框架中的 4 个领域，以及项目本地目录中的 6 份学科标准；不包含艺术分科和地方校本课程。

## 第二步：设计稳定 ID

稳定 ID 让网页、AI 输出、教师审阅和未来集成能够引用同一对象。

建议约定：

```text
主题：theme-bq1-health
节点：topic-bio-homeostasis-feedback
学科：subject-biology
素养：competency-bio-scientific-thinking
来源单元：CU-001
```

自己的项目可以使用不同前缀，例如：

```text
ngss-theme-local-water
ngss-topic-system-boundary
cn-junior-topic-evidence-from-data
```

规则：

1. ID 使用小写 ASCII、数字和连字符。
2. ID 一经公开尽量不改；显示名称可以迭代。
3. 不把页码或临时文件名塞进 ID。
4. 不从受限制的标准全文自动生成大批 ID 后未经审阅直接发布。
5. 删除对象时保留变更记录，避免旧教案中的引用无声失效。

## 第三步：只把可教、可观察的内容做成节点

一个 `topic` 应满足：

- 教师可以明确教它。
- 学生可以通过某种可见表现证明掌握。
- 它不是整章目录、活动名称或宽泛口号。
- 它能够与前置和后续节点建立具体关系。

不推荐：

- “生态系统”——通常过宽。
- “做实验”——这是活动，不是学习内容。
- “培养核心素养”——难以单独观察掌握。

更合适的粒度：

- “用边界和输入输出描述一个系统”。
- “区分相关关系与因果解释”。
- “用反馈机制解释变量如何维持在一定范围”。

每个节点至少应有：

```json
{
  "id": "topic-example",
  "label": "节点显示名称",
  "description": "学生要理解或能够完成什么",
  "subject": "subject-example",
  "stage": 2,
  "diagnostic_prompt": "一个可用于暴露理解的提问",
  "mastery_evidence": [
    "一项可观察、可判断的学生表现"
  ],
  "curriculum_links": [],
  "review_status": "pending_subject_review"
}
```

字段名称可根据你的 schema 调整，但“可教、可观察、可追溯、可审阅”四个原则应保留。

## 第四步：建立有方向、有理由的前置关系

关系方向固定为：

```text
prerequisite_id -> topic_id
```

每条边至少包含：

```json
{
  "prerequisite_id": "topic-system-boundary",
  "topic_id": "topic-carbon-model",
  "strength": "hard",
  "reason": "学生需要先明确系统边界，才能判断碳流入、流出和储存变化。",
  "evidence_level": "author",
  "review_status": "pending_subject_review"
}
```

使用：

- `hard`：当前项目认定为必要前置，不满足会直接妨碍目标学习。
- `soft`：有帮助的准备、语言、经验或跨学科支持。

必须避免：

- 没有理由的自动连边。
- 仅凭词语相似度生成依赖关系。
- 把作者建模写成课程标准规定的顺序。
- 有环、自环、失效 ID 或孤立节点。

## 第五步：把主题设计成真正的跨学科单元

主题不是节点标签。一个主题至少包括：

- 一个真实、可持续探究的问题。
- 一个共同目标或共同表现任务。
- 至少三门学科的明确、不可替代贡献。
- 一组必要学习节点。
- 主题内关键关系。
- 教师复核状态。

示例结构：

```json
{
  "id": "theme-local-water",
  "big_question_id": "BQ2",
  "question": "我们所在地区的水质数据能说明什么？",
  "rationale": "学生需要综合科学测量、统计分析、地理情境和公共表达。",
  "topic_ids": [
    "topic-sampling",
    "topic-measurement-error",
    "topic-data-visualization"
  ],
  "subject_contributions": [
    {
      "subject_id": "subject-science",
      "contribution": "设计测量并解释指标"
    },
    {
      "subject_id": "subject-mathematics",
      "contribution": "分析分布、变异和不确定性"
    }
  ],
  "final_performance_task": "形成一份说明数据能够支持什么、不能支持什么的公共报告。",
  "review_status": "pending_subject_review"
}
```

## 第六步：建立证据等级和审阅状态

至少区分：

- `official`：可以直接回到公开课程标准或政策文件核对的事实。
- `author`：项目作者原创的主题、节点、任务或解释。
- `inferred`：根据来源和教学逻辑作出的推断。
- `uncertain`：目前证据不足，需要进一步研究。

推荐的审阅状态：

- `draft`
- `pending_subject_review`
- `reviewed`
- `deprecated`

AI 输出必须能够分开：

1. 来源事实。
2. 项目映射与推断。
3. 教师最终决定。

不要通过开放许可、AI 自动生成或界面呈现，把待审内容“升级”为官方规定或专家共识。

## 第七步：修改通用入口

从 `site-config.js` 开始修改：

- 项目名称。
- 正式站点 URL。
- 仓库 URL。
- 数据计数。
- 四种对话模式是否适用。
- 主题 ID、问题和摘要。
- 许可署名。

然后修改：

- `llms.txt`：使用你的绝对 URL、范围和关键资源。
- `llms-full.txt`：提供不能联网时的完整启动上下文。
- `agent/START-HERE.md`：调整任务路由、输出结构和信任边界。
- `agent/manifest.json`：保持与文本协议一致。
- `api/v1/source-manifest.json`：更新版本、计数和资源地址。
- `mvp/data-notice.md`：清楚说明哪些已经核对，哪些仍待复核。

不要声称 `llms.txt` 能保证所有 AI 一定读取。它是一个正在形成的公开约定，因此仍应保留“复制离线启动包”的兜底路径。

## 第八步：验证

在仓库根目录运行：

```bash
python3 scripts/validate_public_release.py
python3 scripts/validate_universal_entry.py
node scripts/validate_agent_trial.js
```

还应人工测试：

1. 教师首页能否在桌面和手机使用。
2. 启动语是否随学科、年级、模式、时间和班情变化。
3. AI 能浏览网页时是否从 `/llms.txt` 开始。
4. AI 不能浏览网页时是否明确承认，并请求 `llms-full.txt`。
5. 是否最多先问 3 个必要问题。
6. 是否只引用真实稳定 ID。
7. 是否正确解释 `hard / soft` 和关系方向。
8. 是否把来源事实、项目映射和教师决策分开。
9. 是否避免学生个人数据和高风险自动决定。
10. 公开部署是否没有 PDF、密钥、内部审阅表和本机路径。

建议至少使用 4 种不同类型的通用 AI 做验收，并记录模型是否能访问网页、是否读取正确入口、是否编造 ID 和教案是否真正可用。

## 第九步：部署到 Netlify

本仓库使用根目录 `netlify.toml`，默认把整个公开仓库作为静态发布目录，并提供：

- `/map/*` → `/mvp/:splat`（图谱及其相对资源；`/explore/*` 保留为兼容入口）
- `/api/v1/learning-map.json` → `/mvp/learning-map.json`
- `/api/v1/graph-manifest.json` → `/mvp/agent-manifest.json`

部署前确认公开仓库不包含受限制材料。可以先做预览部署：

```bash
npx netlify deploy
```

验证后再部署生产版本：

```bash
npx netlify deploy --prod
```

也可以把公开仓库连接到 Netlify 的 Git 部署流程。无论采用哪种方式，部署真源都应是同一个公开仓库，而不是某台个人电脑上的隐藏副本。

## 第十步：再考虑 MCP、Plugin 与 Skill

只有在通用链接模式已经证明有用后，再实现专业集成。

推荐顺序：

1. 通用链接模式。
2. 复制式离线上下文包。
3. 稳定只读 API 路径。
4. 本地或远程只读 MCP。
5. 针对具体宿主的 Plugin / Skill。

MCP 工具应围绕已验证的真实任务，例如：

- `list_themes`
- `search_curriculum`
- `get_theme_context`
- `get_topic_context`
- `trace_learning_path`
- `validate_references`

Plugin 或 Skill 只做宿主适配，不能维护一套不同的主题、节点、关系或证据逻辑。

## 最终验收标准

一个复用项目只有在以下条件成立时才算“即插即用”：

- 普通教师只需把 URL 发给常用 AI，就能开始有效对话。
- AI 无需安装也能知道从哪里读取、如何路由任务和怎样输出。
- AI 不能联网时有清楚的复制式兜底。
- 教师能在图谱里核对主题、节点、关系和来源。
- 所有关键引用都有稳定 ID。
- 所有项目推断都有证据等级和人工复核状态。
- 课程标准事实、原创设计和教师最终决策没有混为一谈。
- 代码、数据、第三方材料和品牌许可边界清楚。
- 仓库可以由其他人 fork、改配置、换图谱、运行验证并重新部署。

真正的产品指标不是安装了多少插件，而是：一个没有工程部署能力的教师，从粘贴链接到得到可修改的课程蓝图，需要多少步；以及这些方案有多少真正进入课堂并经过教师修订。
