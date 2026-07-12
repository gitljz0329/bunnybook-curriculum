# BunnyBook for Kimi Code（本地测试版）

这是一个可在 Kimi Code CLI 本地安装的第三方 Custom Plugin。它不是 Kimi 官方插件，也尚未进入任何 Kimi marketplace。

插件把 BunnyBook 当前课程图谱打包为只读信息源：Kimi 可以检索 8 个跨学科主题、87 个学习节点、189 条有方向的关系，以及对应的课标科目、核心素养、内容单元、来源指针和人工复核边界。插件不会修改图谱，不会保存教师对话，也不包含远程服务或 API Key。

## 安装前准备

1. 安装并打开 Kimi Code CLI；如需使用会员额度，先在 Kimi Code 中运行 `/login` 完成账号 OAuth 登录。
2. 确认终端可以运行 `uv --version`。插件首次启动会用 `uv` 按锁定依赖创建自己的 Python 运行环境。
3. 在本仓库根目录运行：

   ```sh
   .venv/bin/python scripts/sync_kimi_plugin.py
   .venv/bin/python scripts/validate_kimi_plugin.py
   ```

## 在 Kimi Code 中本地安装

在 Kimi Code 会话里运行：

```text
/plugins install <本仓库绝对路径>/integrations/kimi/bunnybook
/reload
/plugins info bunnybook-curriculum
/mcp
```

Kimi 会把 Custom 安装标记为第三方来源并要求你确认信任。安装时会复制一份托管副本；如果本地源目录发生变化，需要重新安装，然后再次运行 `/reload` 或开启新会话。

如果当前 Kimi Code 中没有 `/plugins`，说明这一本机 CLI 尚未提供文档所述的 Custom Plugin 管理入口；请先按 Kimi 官方安装渠道升级，再做真实宿主验收。仓库验证脚本只证明 manifest、数据同步和 MCP 协议可运行，不把它冒充成已经完成的 Kimi 宿主安装。

## 两个教师入口

- `/bunnybook-curriculum:design-theme TH-CAND-007，90 分钟，高一，班级 40 人`
- `/bunnybook-curriculum:inspect-evidence <主题 ID、节点 ID 或检索词>`

也可以直接用自然语言让 Kimi 设计跨学科主题活动。会话启动 Skill 会提醒 Kimi 先读取 BunnyBook，再保留 ID、来源和待人工复核声明。

## 数据与运行时边界

- `runtime/mcp_server.py` 与 `runtime/curriculum_source.py` 由仓库根目录的 canonical `agent_runtime/` 同步生成。
- `mvp/learning-map.json` 与 `mvp/agent-manifest.json` 由主站 canonical 产物同步生成。
- 不要直接编辑这些四个副本；修改源文件后重新运行 `scripts/sync_kimi_plugin.py`。
- `sync-manifest.json` 记录每个 canonical 文件的 SHA-256，验证脚本会阻止陈旧或被手改的插件包通过。
- 图谱中的课标科目、核心素养名称和来源页码已按本地语料核对；主题、节点颗粒度、先修关系和具体映射仍需学科教师复核。

## 许可证状态

本地测试包采用与主项目一致的分层许可：MCP、Skill、命令与适配代码采用 Apache-2.0；图谱数据库结构、稳定 ID 与关系采用 ODbL 1.0；lixiaozuyi 有权许可的 BunnyBook 原创文字采用 CC BY 4.0。课程标准 PDF、官方课标材料与第三方商标不由 BunnyBook 再许可，BunnyBook 品牌资产也不包含在开放许可中。

完整范围见本目录中的 `LICENSE.md`、`LICENSES/`、`NOTICE`、`THIRD_PARTY_NOTICES.md` 与 `TRADEMARKS.md`。公开分享使用图谱生成的活动时，应保留图谱返回的 `licensing.attribution`。
