// SPDX-License-Identifier: Apache-2.0
(() => {
  "use strict";

  const config = window.BUNNYBOOK_CONFIG;
  if (!config) throw new Error("BUNNYBOOK_CONFIG is unavailable");

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const promptBuilder = $("#prompt-builder");
  const promptOutput = $("#generated-prompt");
  const status = $("#copy-status");
  const agentStatus = $("#agent-copy-status");
  const minimalStatus = $("#minimal-copy-status");

  const modeNames = {
    lesson_plan: "单课时备课",
    full_planning: "单元 / 项目规划",
    learning_progression: "学习进阶",
    review: "核对已有教案",
  };

  function setPersona(persona, updateUrl = true) {
    const target = persona === "agent" ? "agent" : "teacher";
    document.body.dataset.persona = target;
    document.querySelectorAll(".persona-button[data-persona]").forEach((button) => {
      const active = button.dataset.persona === target;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
    $("#teacher-view").hidden = target !== "teacher";
    $("#agent-view").hidden = target !== "agent";
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set("role", target);
      history.replaceState(null, "", url);
    }
  }

  function fieldValue(id) {
    return $(id)?.value.trim() || "";
  }

  function accessValue() {
    return $('input[name="access"]:checked', promptBuilder)?.value || "web";
  }

  function buildPrompt() {
    const subject = fieldValue("#subject") || "高中教师";
    const grade = fieldValue("#grade") || "高中";
    const mode = fieldValue("#mode") || "lesson_plan";
    const duration = fieldValue("#duration") || "45 分钟";
    const focus = fieldValue("#focus");
    const context = fieldValue("#context");
    const descriptor = focus ? `，本次想围绕“${focus}”` : "";
    const contextLine = context ? `\n班情与约束：${context}` : "";
    const modeConfig = config.modes[mode];

    if (accessValue() === "offline") {
      return `我是${grade}${subject}老师${descriptor}，想完成${modeNames[mode]}。${contextLine}\n\n你目前不需要打开网页。我会把 BunnyBook 的离线启动上下文粘贴在本条消息之后。请先按其中协议工作：最多先问我 3 个必要问题，先给一页课程蓝图，再展开完整方案；不要编造主题 ID、节点 ID、关系或课标来源。\n\n本次时间：${duration}。\n期望交付：${modeConfig.output}\n\n——以下粘贴 BunnyBook /llms-full.txt——`;
    }

    return `我是${grade}${subject}老师${descriptor}，想用 https://bunnybook-curriculum.netlify.app 完成${modeNames[mode]}。${contextLine}\n\n请先读取 https://bunnybook-curriculum.netlify.app/llms.txt 和其中的 AI 操作协议，再按需读取课程图谱。不要让我安装 MCP、Plugin 或 Skill。最多先问我 3 个真正影响方案的问题；先给一页课程蓝图，再展开完整方案。\n\n本次时间：${duration}。\n期望交付：${modeConfig.output}\n\n请只引用 BunnyBook 中真实存在的 ID、关系和来源，并把课标可核对事实、BunnyBook 项目映射、教师最终决策分开。无法打开网页时请直接说明，并请我粘贴 /llms-full.txt，不要假装已读取。`;
  }

  function minimalPrompt() {
    return "我是个高中生物老师，想用 https://bunnybook-curriculum.netlify.app 帮我备节课。";
  }

  function refreshPrompt() {
    promptOutput.value = buildPrompt();
  }

  async function copyText(text, target, successMessage) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      if (!copied) throw new Error("copy command failed");
    }
    if (target) {
      target.textContent = successMessage;
      clearTimeout(target._timer);
      target._timer = setTimeout(() => { target.textContent = ""; }, 2600);
    }
  }

  function renderQuestions() {
    const grid = $("#question-grid");
    grid.replaceChildren(...config.themes.map((theme) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "question-card";
      button.innerHTML = `<small>${theme.id}</small><h3>${theme.question}</h3><p>${theme.hint}</p>`;
      button.addEventListener("click", () => {
        $("#focus").value = theme.question;
        refreshPrompt();
        $("#prompt-builder").scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return button;
    }));
  }

  function hydrateCounts() {
    $$('[data-count="themes"]').forEach((node) => { node.textContent = config.counts.themes; });
    $$('[data-count="topics"]').forEach((node) => { node.textContent = config.counts.topics; });
    $$('[data-count="dependencies"]').forEach((node) => { node.textContent = config.counts.dependencies; });
  }

  function agentBootstrap() {
    return `你正在使用 BunnyBook Curriculum Source。请按以下顺序工作：\n1. 读取 https://bunnybook-curriculum.netlify.app/llms.txt\n2. 读取 https://bunnybook-curriculum.netlify.app/agent/START-HERE.md\n3. 用 https://bunnybook-curriculum.netlify.app/api/v1/search-index.json 定位主题或节点\n4. 优先只读取一个相关的 /api/v1/themes/BQ*.json 主题包\n5. 只有跨主题核对或图谱级检索时才读取 learning-map.json。\n\n将教师请求归入 lesson_plan、full_planning、learning_progression 或 review；第一轮最多询问 3 个必要问题；先给课程蓝图，再展开方案；只使用真实 ID 和关系；分开课标事实、项目映射和教师决策；所有输出需要教师复核。不得要求普通教师安装 MCP、Plugin 或 Skill。`;
  }

  function offlineFallback() {
    return "我目前无法直接打开 BunnyBook 链接。请把 https://bunnybook-curriculum.netlify.app/llms-full.txt 的内容复制到这个对话中；如需引用具体主题和节点，请再复制教学图谱中的相关主题使用包。在收到这些内容前，我不会编造主题 ID、节点 ID、关系或课标来源。";
  }

  document.querySelectorAll(".persona-button[data-persona]").forEach((button) => {
    button.addEventListener("click", () => setPersona(button.dataset.persona));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      const next = button.dataset.persona === "teacher" ? "agent" : "teacher";
      setPersona(next);
      $(`#persona-${next}`).focus();
    });
  });

  promptBuilder.addEventListener("input", refreshPrompt);
  promptBuilder.addEventListener("change", refreshPrompt);
  $("#copy-minimal-prompt").addEventListener("click", () => copyText(minimalPrompt(), minimalStatus, "已复制。现在粘贴到你常用的 AI 对话框即可。"));
  $("#copy-prompt").addEventListener("click", () => copyText(promptOutput.value, status, "启动语已复制，可直接粘贴给你的 AI。"));
  $("#copy-offline-package").addEventListener("click", async () => {
    try {
      const response = await fetch(config.resources.llmsFull, { cache: "no-store" });
      if (!response.ok) throw new Error(String(response.status));
      await copyText(await response.text(), status, "完整离线启动包已复制。" );
    } catch (_) {
      location.href = config.resources.llmsFull;
    }
  });
  $("#copy-agent-bootstrap").addEventListener("click", () => copyText(agentBootstrap(), agentStatus, "AI 启动协议已复制。"));
  $("#copy-fallback").addEventListener("click", () => copyText(offlineFallback(), agentStatus, "离线请求话术已复制。"));
  $$('[data-select-mode]').forEach((button) => button.addEventListener("click", () => {
    $("#mode").value = button.dataset.selectMode;
    refreshPrompt();
    $("#prompt-builder").scrollIntoView({ behavior: "smooth", block: "start" });
  }));

  hydrateCounts();
  renderQuestions();
  refreshPrompt();
  setPersona(new URL(location.href).searchParams.get("role") === "agent" ? "agent" : "teacher", false);
})();
