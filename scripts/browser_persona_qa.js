async (page) => {
  const base = "http://127.0.0.1:4173/index.html";
  const checks = [];
  const browserProblems = [];
  const check = (condition, message) => {
    if (!condition) throw new Error(`QA failed: ${message}`);
    checks.push(message);
  };
  const selectedSurface = async () => page.locator('.persona-tab[aria-selected="true"]').getAttribute("data-persona");
  const assertSurface = async (surface, reason) => check(await selectedSurface() === surface, reason);

  page.on("console", (message) => {
    if (["warning", "error"].includes(message.type())) browserProblems.push(`console ${message.type()}: ${message.text()}`);
  });
  page.on("pageerror", (error) => browserProblems.push(`pageerror: ${error.message}`));

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base);
  await page.evaluate(() => localStorage.clear());
  await page.goto(base);
  await assertSurface("teacher", "首次访问默认进入教学图谱");

  const tabs = page.locator(".persona-tab");
  check(await tabs.count() === 2, "界面仅保留教学图谱与 Agent 接入两个入口");
  check(
    JSON.stringify((await tabs.allTextContents()).map((text) => text.trim())) === JSON.stringify(["1 · 探索教学图谱", "2 · 接入备课 Agent"]),
    "两个入口标签符合新的产品定位",
  );
  check(await page.locator('[data-persona="student"]').count() === 0, "学生入口已完全移除");
  check(await page.getByRole("button", { name: "了解 Agent 接入", exact: true }).isVisible(), "教学图谱顶栏提供明确的 Agent 转化入口");
  check(await page.getByRole("heading", { name: "让你的备课 Agent 不再凭空编课" }).isVisible(), "首屏直接表达教师收益");
  check(await page.locator("#featured-trial").isVisible(), "首屏提供唯一的旗舰主题试用入口");

  await page.evaluate(() => localStorage.setItem("bunnybook.persona.v1", "teacher"));
  await page.goto(`${base}?role=agent`);
  await assertSurface("agent", "URL 可直接打开 Agent 接入层");
  await page.goto(`${base}?role=student`);
  await assertSurface("teacher", "历史 student URL 安全回退教学图谱");
  await page.evaluate(() => localStorage.setItem("bunnybook.persona.v1", "student"));
  await page.goto(base);
  await assertSurface("teacher", "历史 student 浏览器记忆安全回退教学图谱");
  await page.getByRole("tab", { name: "2 · 接入备课 Agent" }).click();
  check(await page.evaluate(() => localStorage.getItem("bunnybook.persona.v1")) === "agent", "Agent 接入选择会写入浏览器记忆");

  const storageFailurePage = await page.context().newPage();
  await storageFailurePage.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new Error("blocked storage read"); };
    Storage.prototype.setItem = () => { throw new Error("blocked storage write"); };
  });
  await storageFailurePage.goto(base);
  check(
    await storageFailurePage.locator('.persona-tab[aria-selected="true"]').getAttribute("data-persona") === "teacher",
    "存储读取失败不阻断教学图谱",
  );
  await storageFailurePage.getByRole("tab", { name: "2 · 接入备课 Agent" }).click();
  check(
    await storageFailurePage.locator('.persona-tab[aria-selected="true"]').getAttribute("data-persona") === "agent",
    "存储写入失败不阻断 Agent 接入",
  );
  await storageFailurePage.close();

  await page.goto(`${base}?role=teacher`);
  const teacherTab = page.getByRole("tab", { name: "1 · 探索教学图谱" });
  await teacherTab.focus();
  await teacherTab.press("ArrowRight");
  await assertSurface("agent", "方向键可从教学图谱切到 Agent 接入");
  await page.getByRole("tab", { name: "2 · 接入备课 Agent" }).press("Home");
  await assertSurface("teacher", "Home 键可切回教学图谱");
  check((await page.locator("#persona-status").textContent()).includes("已启用"), "入口切换通过 live region 播报");
  check((await page.locator(".route-button").allInnerTexts()).every((text) => text.includes("共备包：")), "教师主题卡保留共备包状态");
  await page.screenshot({ path: "/tmp/big-teacher-graph-desktop.png", fullPage: true });

  const routeButton = page.locator(".route-button").nth(4);
  await routeButton.click();
  const activeRoute = page.locator('.route-button[aria-pressed="true"]');
  const activeRouteIndex = await activeRoute.evaluate((node) => [...node.parentElement.children].indexOf(node));
  const transformBefore = await page.locator("#viewport").getAttribute("transform");
  const lastSubject = page.locator(".subject-button").last();
  await lastSubject.click();
  check(await page.getByRole("button", { name: /把这个主题交给 Agent/ }).isVisible(), "教师主题详情提供带着当前主题接入 Agent 的 CTA");
  await page.getByRole("button", { name: /把这个主题交给 Agent/ }).click();
  await assertSurface("agent", "主题 CTA 会进入 Agent 接入层");
  check(await page.locator(".route-button").nth(activeRouteIndex).getAttribute("aria-pressed") === "true", "进入 Agent 接入后保留当前主题");
  check(await page.locator(".subject-button").last().getAttribute("aria-pressed") === "false", "进入 Agent 接入后保留学科筛选");
  check(await page.locator("#viewport").getAttribute("transform") === transformBefore, "进入 Agent 接入后保留地图变换");
  check((await page.locator(".current-scope").innerText()).includes("将提供"), "Agent 接入首层明确展示当前作用域");
  check(await page.getByRole("button", { name: "复制一份可直接生成活动的提示" }).isVisible(), "当前主题可零安装复制活动设计提示");
  check(await page.getByText("长期使用：本地 MCP 需要什么", { exact: true }).isVisible(), "当前主题在页面内提供长期 MCP 接入说明");

  await page.evaluate(() => {
    window.__copiedText = "";
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: async (text) => { window.__copiedText = text; } },
    });
  });
  await page.getByRole("button", { name: "复制一份可直接生成活动的提示" }).click();
  const trialText = await page.evaluate(() => window.__copiedText);
  check(trialText.includes("<bunnybook_curriculum_context>") && trialText.includes("依据与复核"), "零安装试用包同时包含活动输出契约与可追溯上下文");
  check(trialText.includes("只设计一个活动") && trialText.includes("90 分钟单课切片") && trialText.includes("不复述 JSON"), "零安装试用包约束 Agent 生成一份可上课的单课切片");
  check(trialText.length < 10000, `主题试用包已压缩到 10,000 字符内，当前 ${trialText.length}`);
  await page.getByRole("button", { name: "复制完整证据 JSON" }).click();
  const themePayload = JSON.parse(await page.evaluate(() => window.__copiedText));
  check(themePayload.scope.type === "theme" && themePayload.theme.id === themePayload.scope.id, "主题使用包保留稳定 theme_id");
  check(themePayload.topics.length === themePayload.theme.topic_ids.length, "主题使用包包含全部成员节点");
  check(themePayload.dependencies.every((edge) => themePayload.theme.topic_ids.includes(edge.prerequisite_id) && themePayload.theme.topic_ids.includes(edge.topic_id)), "主题使用包只包含主题内有向关系");
  check(themePayload.curriculum_refs.subjects.length > 0 && themePayload.curriculum_refs.competencies.length > 0, "主题使用包包含课标学科与素养证据");
  check(themePayload.trust_boundary.human_review_required === true, "主题使用包声明人工复核边界");
  await page.screenshot({ path: "/tmp/big-agent-connect-desktop.png", fullPage: true });

  await page.getByRole("tab", { name: "1 · 探索教学图谱" }).click();
  await page.locator(".graph-node.is-route").first().evaluate((node) => node.dispatchEvent(new MouseEvent("click", { bubbles: true })));
  const selectedTopicId = await page.locator(".graph-node.is-selected").getAttribute("data-topic-id");
  check(await page.getByRole("button", { name: /把这个节点交给 Agent/ }).isVisible(), "教师节点详情提供 Agent 上下文 CTA");
  await page.getByRole("button", { name: /把这个节点交给 Agent/ }).click();
  check(await page.locator(`.graph-node[data-topic-id="${selectedTopicId}"]`).getAttribute("class").then((value) => value.includes("is-selected")), "节点 CTA 进入 Agent 接入后保留当前节点");
  await page.getByRole("button", { name: "复制一份可直接生成活动的提示" }).click();
  const topicTrialText = await page.evaluate(() => window.__copiedText);
  check(topicTrialText.includes("把 focal_topic 当作活动中的一种学科能力") && topicTrialText.includes("preferred_theme_id 对应的唯一现有主题"), "节点试用包不会把单个节点误当成活动标题或列出多套主题");
  check(topicTrialText.length < 8000, `节点试用包已压缩到 8,000 字符内，当前 ${topicTrialText.length}`);
  await page.getByRole("button", { name: "复制完整证据 JSON" }).click();
  const topicPayload = JSON.parse(await page.evaluate(() => window.__copiedText));
  check(topicPayload.scope.id === selectedTopicId, "节点使用包保留稳定 topic_id");
  check(topicPayload.topic.curriculum_links.length > 0 && topicPayload.topic.source_ref, "节点使用包保留课标链接与来源指针");
  check(topicPayload.direct_prerequisites.every((edge) => edge.topic_id === selectedTopicId), "节点使用包保留前置关系方向");
  check(topicPayload.direct_unlocks.every((edge) => edge.prerequisite_id === selectedTopicId), "节点使用包保留后继关系方向");

  await page.locator("#show-all").click();
  check(await page.locator(".agent-integration").isVisible(), "无局部作用域时展示 MCP 接入首屏");
  check((await page.locator(".agent-integration").innerText()).includes("本地 MCP 已验证 · 需要安装"), "界面诚实标识本地 MCP 需要安装");
  check((await page.locator(".connection-card").last().innerText()).includes("尚未开放"), "远程 MCP 与 Plugin 不冒充已发布服务");
  check(await page.locator(".tool-row").count() === 7, "Agent 接入首屏展示确定性的只读能力");
  await page.getByRole("button", { name: "复制本地 MCP 配置模板" }).click();
  const copiedConfig = JSON.parse(await page.evaluate(() => window.__copiedText));
  check(Boolean(copiedConfig.mcpServers["bunnybook-curriculum-source"]), "MCP 配置模板包含 BunnyBook server 入口");

  await page.getByRole("tab", { name: "1 · 探索教学图谱" }).click();
  await page.locator("#coverage-toggle").click();
  check(await page.locator("#coverage-view").isVisible(), "教学图谱可进入课标覆盖矩阵");
  await page.getByRole("tab", { name: "2 · 接入备课 Agent" }).click();
  check(await page.locator("#learning-map").isVisible() && !(await page.locator("#coverage-view").isVisible()), "Agent 接入会从覆盖视图安全返回图谱");

  const contract = await page.evaluate(async () => {
    const [manifest, graph, config] = await Promise.all([
      fetch("agent-manifest.json").then((response) => response.json()),
      fetch("learning-map.json").then((response) => response.json()),
      fetch("mcp-config.example.json").then((response) => response.json()),
    ]);
    return {
      manifest,
      config,
      dataNotice: await fetch("data-notice.md").then((response) => response.text()),
      graphCounts: {
        themes: graph.themes.length,
        topics: graph.topics.length,
        dependencies: graph.dependencies.length,
        curriculum_subjects: graph.curriculum_alignment.curriculum_subjects.length,
        competencies: graph.curriculum_alignment.competencies.length,
        coverage_units: graph.curriculum_alignment.coverage_units.length,
      },
      discoverable: {
        manifest: Boolean(document.head.querySelector('link[href="agent-manifest.json"]')),
        prompt: Boolean(document.head.querySelector('link[href="agent-prompt.md"]')),
        mcpConfig: Boolean(document.head.querySelector('link[href="mcp-config.example.json"]')),
      },
    };
  });
  check(contract.manifest.contract_version === "1.2", "Agent manifest 已升级为部署边界契约 1.2");
  check(contract.manifest.integrations.mcp.status === "local_verified_install_required", "Agent manifest 区分本地 MCP 与静态主站");
  check(contract.manifest.integrations.mcp.remote_endpoint_available === false, "Agent manifest 不虚构远程 MCP");
  check(contract.manifest.integrations.plugin.status === "local_test_package_available", "Agent manifest 标明 Kimi Code 本地测试包边界");
  check(contract.manifest.integrations.plugin.official_marketplace_status === "not_submitted_or_listed", "Agent manifest 不冒充 Kimi 官方插件");
  check(contract.dataNotice.includes("已激活的分层许可"), "主站公开数据附带已激活许可与使用边界");
  check(JSON.stringify(contract.manifest.graph.counts) === JSON.stringify(contract.graphCounts), "Manifest 计数与完整本体一致");
  check(JSON.stringify(contract.graphCounts) === JSON.stringify({ themes: 8, topics: 87, dependencies: 189, curriculum_subjects: 12, competencies: 51, coverage_units: 182 }), "本体保持 8/87/189/12/51/182");
  check(Object.values(contract.discoverable).every(Boolean), "页面 head 可发现 manifest、prompt 与 MCP 配置");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${base}?role=teacher`);
  const tabBoxes = await page.locator(".persona-tab").evaluateAll((nodes) => nodes.map((node) => node.getBoundingClientRect().toJSON()));
  check(Math.abs(tabBoxes[0].width - tabBoxes[1].width) < 1.5, "390px 手机端两个入口等分");
  check(tabBoxes.every((box) => box.left >= 0 && box.right <= 390), "390px 手机端入口不溢出视口");
  await page.locator(".route-button").nth(5).click();
  check(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), "教学图谱长标题在手机端无横向溢出");
  await page.screenshot({ path: "/tmp/big-teacher-graph-mobile.png", fullPage: true });
  await page.getByRole("button", { name: /把这个主题交给 Agent/ }).click();
  check(await page.locator(".current-scope").isVisible(), "手机端 Agent 接入优先显示当前作用域");
  check(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), "Agent 接入手机界面无横向溢出");
  await page.screenshot({ path: "/tmp/big-agent-connect-mobile.png", fullPage: true });

  await page.waitForTimeout(100);
  check(browserProblems.length === 0, "浏览器控制台保持 0 errors / 0 warnings");
  return {
    passed: checks.length,
    browserProblems,
    screenshots: [
      "/tmp/big-teacher-graph-desktop.png",
      "/tmp/big-agent-connect-desktop.png",
      "/tmp/big-teacher-graph-mobile.png",
      "/tmp/big-agent-connect-mobile.png",
    ],
    checks,
  };
}
