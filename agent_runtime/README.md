# BunnyBook Curriculum Source MCP

这是课程图谱的只读 Agent 接口。它不生成第二份本体，也不写回审阅状态；所有工具都直接读取 `mvp/learning-map.json`。

网页中的“Agent 使用包”可以直接复制到已有 Agent，无需安装。本页所述 MCP 属于源工作区中的本地运行能力，需要完整项目与 Python 环境；未来部署的静态主站不会执行这个服务，也不会自动成为远程 MCP。

## 提供的能力

- `get_source_overview`
- `list_themes`
- `search_curriculum`
- `get_theme_context`
- `get_topic_context`
- `trace_learning_path`
- `build_activity_context`
- `validate_references`

同时提供完整图谱、主题、节点资源，以及 `design_interdisciplinary_activity` 提示模板。

## 本地运行

先在项目虚拟环境中安装 `requirements-mcp.txt`，然后用 stdio 方式把 `agent_runtime/mcp_server.py` 加入支持 MCP 的 Agent。`mcp-config.example.json` 是通用配置形状；使用前把 `__BUNNYBOOK_PROJECT_ROOT__` 替换为本机项目目录。不同 Agent 的配置文件位置与字段扩展可能不同。

需要本地 HTTP 调试时，可以使用 `--transport streamable-http --port 8765`，MCP 地址为 `http://127.0.0.1:8765/mcp`。远程部署还需要 HTTPS、鉴权、限流与运维配置，当前仓库不把本地服务冒充成已发布插件或公开端点。

## 信任边界

课标科目、核心素养名称和来源页码已经本地语料核对；主题、节点颗粒度、先修关系与具体映射仍需学科教师复核。ID 存在不等于设计判断已经通过专家审定。
