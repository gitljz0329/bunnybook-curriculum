# Codex Sites 部署准备边界

## 当前决定

本轮只完成本地主站产品化，不初始化、不发布 Codex Sites。当前 `mvp/` 可以作为独立静态预览；正式迁移时，应在项目根目录下新建独立的 `site/` 作为唯一 Sites 项目，避免把原始 PDF、数据管线、审阅文件和 Python 虚拟环境带入部署范围。

```text
BunnyBook project/
├── site/            # 未来 Codex Sites 项目
├── mvp_src/         # 当前界面源
├── mvp/             # 当前静态构建产物
├── data/            # 唯一本体源与构建数据
├── scripts/         # 数据和静态站生成管线
└── agent_runtime/   # 本地 MCP；不随静态网页运行
```

## 部署时必须保持

- Sites 页面继续消费同一构建管线生成的数据，不维护第二套主题或课标数据。
- 公开网页只承诺图谱、可复制 Agent 使用包、Manifest、数据文件和使用边界。
- Python MCP 作为独立本地运行物；没有真实 HTTPS 端点前，不表述为远程 MCP。
- Kimi Code 第三方插件只有在用户环境完成真实安装验收后才标记为“已测试”；进入官方市场以前始终标记为未上架。
- 正式域名确定后再加入 canonical、绝对 Open Graph URL 和经过检查的社交分享图。
- 正式权利人和贡献归属确认后，按 `docs/licensing_plan.md` 激活分层许可；在此之前“数据说明”必须继续显示许可未生效。
- 域名确定后再把 canonical 与 Open Graph 图片改为最终 HTTPS 绝对地址；当前 1200×630 分享卡已经准备在 `mvp_src/assets/`。
- Kimi Code 只表述为第三方 Custom Plugin 本地测试包；未真实安装验收、未上架时不得写成 Kimi 官方插件或 Kimi Work 插件。

## 部署产物不得包含

- 原始课程标准 PDF
- `.venv` 或 Python 缓存
- `data/review/` 中的人工审阅工作文件
- 临时截图、测试服务或本地绝对路径
- 未配置鉴权、限流和运维的本地 HTTP 服务
