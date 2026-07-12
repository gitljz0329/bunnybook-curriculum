# Full Alpha 0.3 Delivery

这份交付包含同一课程本体的两层产品表面：教学图谱帮助教师发现跨学科主题并建立信任；Agent 接入层先提供无需安装的主题使用包，再说明如何通过本地只读 MCP 持续调用。学生任务与材料继续作为活动设计内容存在，但不再设置独立学生入口。

## 入口

- 交互地图：`mvp/index.html`
- 地图数据：`mvp/learning-map.json`
- Agent 能力清单：`mvp/agent-manifest.json`
- Agent 启动提示：`mvp/agent-prompt.md`
- MCP 配置示例：`mvp/mcp-config.example.json`
- MCP 接入说明：`mvp/mcp-guide.md`
- 数据版本与使用边界：`mvp/data-notice.md`
- MCP 运行时：`agent_runtime/mcp_server.py`
- 全量作者源：`data/review/full/`
- 构建数据：`data/build/learning_map_full.json`
- 原两主题基线：`data/review/learning_map_pilot.yml`
- 产品方向：`docs/product_direction.md`
- 教师共备样张：`themes/pilot/`
- 学生材料包：`materials/pilot/`

## 当前内容

- 8 个跨学科主题，完整覆盖 BQ1-BQ8。
- 87 个共享学习节点。
- 189 条 prerequisite dependencies：104 hard / 85 soft。
- 12 门本地已有学科课标。
- 51 项经课标原文核对的核心素养名称。
- 182 个课程内容来源单元：175 个来自学科课标，7 个来自普通高中课程方案。
- 13 个视觉类别：12 门真实课标科目 + 综合节点。
- 0 个孤立节点；hard prerequisite 图为 DAG。

8 个主题分别是：怎样生活才算健康？数据能告诉我们真相吗？未来真的可以被预测吗？我们能实现碳中和吗？AI 可以替我们做决定吗？文化遗产如何活在未来？什么样的规则才公平？好主意怎样才能真正解决问题？

## 关键体验

- 首屏显示 8 个主题终点，其他共享节点保持低干扰。
- 选择主题后查看驱动问题、共同目标、学科分工和共同表现任务。
- 搜索节点、课标科目、核心素养、主题或内容锚点。
- 开关 12 门学科与综合节点视角。
- 拖动、缩放、节点聚焦、全部前置谱系和直接解锁连续下钻。
- 查看每个节点的课标科目、核心素养、内容锚点、掌握证据和审阅状态。
- 切换到“12 科 × 8 主题”课标覆盖矩阵；点击单元格进入主题。
- 逐科展开全部 51 项核心素养与 182 个课程内容来源单元。
- 通过“教学图谱 / Agent 接入”完成从主题发现到真实使用的转化；当前主题和节点可直接复制为 Agent 使用包。
- 通过真实只读 MCP 检索主题与课标、读取主题或节点上下文、追踪关系、组装活动设计上下文并校验稳定 ID。

Agent contract 1.2 区分公开静态主站与源工作区中的真实 MCP 运行时。主站可以复制上下文、发现 Manifest 与读取图数据，但不会执行 Python，也不声明远程 MCP；本地 MCP 只做确定性的只读读取与上下文组装，活动草案由教师自己的宿主 Agent 生成。首个宿主适配为 BunnyBook for Kimi Code 第三方 Custom Plugin 本地测试包，它复用同一 MCP，不另造数据层，也不冒充 Kimi 官方插件或已上架产品。

## 验证

```bash
.venv/bin/python scripts/build_mvp_package.py
.venv/bin/python scripts/validate_mvp.py
.venv/bin/python scripts/validate_mcp_server.py
```

双入口浏览器回归脚本位于 `scripts/browser_persona_qa.js`，通过 Playwright CLI 的 `run-code --filename` 执行；测试服务入口为 `http://127.0.0.1:4173/index.html`。

结构验证覆盖：覆盖契约、12 科与 51 项素养注册表、182 个来源单元、8 个主题与 BQ 唯一对应、主题子图连通、节点课标映射、素养所属科目、内容锚点有效性、主题学科贡献、共同表现任务、关系端点、重复边、自环、hard DAG、孤立节点、覆盖矩阵和页面核心交互标志。

当前构建与结构验证为 0 errors / 0 warnings；MCP 已通过真实协议握手、8 个只读工具、2 个静态资源、2 个资源模板和 1 个活动设计提示的发现与调用。部署前浏览器回归脚本已经同步到新版价值主张、零安装试用、Manifest 1.2 和公开部署边界；在正式 Sites 迁移与域名确定后，应再执行桌面、390×844 手机、键盘、复制权限、社交预览和全部静态链接验收。后续内容待办是学科教师逐条审阅项目映射、确认许可权利人，并用用户自己的 Kimi Code 会员完成第三方插件真实安装验收。

## 边界

51 项核心素养名称及其页码是本轮已核对事实。节点颗粒度、先修关系、主题成员关系和“节点—科目—素养—内容锚点”映射仍为项目推断，适合内部产品验证与教师审阅，不代表课标直接规定或专家共识。

“覆盖全部课标”仅指当前目录中的 12 门学科课标。普通高中课程方案是政策来源，不计作第 13 门学科；当前目录不含普通高中通用技术课标，也不能代表国家全部外语或艺术分科标准。
