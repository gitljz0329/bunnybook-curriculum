// SPDX-License-Identifier: Apache-2.0

(() => {
  "use strict";

  const SITE_URL = "https://bunnybook-curriculum.netlify.app/";
  const MODE_CONFIG = Object.freeze({
    full_planning: Object.freeze({
      label: "全盘规划",
      action: "规划一个单元、项目或连续多课时",
      outcome: "真实问题、共同成果、学科贡献、学习节点顺序、阶段安排和评价证据",
    }),
    learning_progression: Object.freeze({
      label: "学习进阶",
      action: "梳理一个目标概念或技能的学习进阶",
      outcome: "必要前置、支持前置、掌握证据、可能卡点、补偿活动和后续解锁",
    }),
    lesson_plan: Object.freeze({
      label: "单课时备课",
      action: "设计一节可直接讨论和修改的课",
      outcome: "课程蓝图、时间化流程、学生产物、形成性评价和差异化支持",
    }),
    review: Object.freeze({
      label: "教案核对",
      action: "核对并改进一份已有教案",
      outcome: "目标—活动—产物—证据的一致性、学习进阶断点、实施风险和优先修改建议",
    }),
  });

  const body = document.body;
  const entryGate = document.getElementById("entry-gate");
  const agentPortal = document.getElementById("agent-portal");
  const teacherStarter = document.getElementById("teacher-starter");
  const appShell = document.querySelector(".app-shell");
  const teacherTab = document.getElementById("persona-teacher");
  const agentTab = document.getElementById("persona-agent");
  const promptOutput = document.getElementById("prompt-output");
  const copyStatus = document.getElementById("copy-status");
  const modeButtons = [...document.querySelectorAll(".mode-choice")];
  const promptTabs = [...document.querySelectorAll(".prompt-tab")];

  let selectedMode = "lesson_plan";
  let selectedPromptKind = "stable";
  let internalPersonaChange = false;
  let promptVariants = { quick: "", stable: "", offline: "" };

  function updateUrl(role, view = null) {
    try {
      const url = new URL(window.location.href);
      if (role) url.searchParams.set("role", role);
      else url.searchParams.delete("role");
      if (view) url.searchParams.set("view", view);
      else url.searchParams.delete("view");
      window.history.replaceState(null, "", url);
    } catch (_error) {
      // Local file previews remain usable without history support.
    }
  }

  function activatePersona(role) {
    const tab = role === "agent" ? agentTab : teacherTab;
    if (!tab) return;
    internalPersonaChange = true;
    tab.click();
    internalPersonaChange = false;
  }

  function setEntryView(view) {
    body.dataset.entryView = view;
    body.classList.toggle("entry-gate-open", view === "gate");
    body.classList.toggle("entry-agent-open", view === "agent");
    entryGate.hidden = view !== "gate";
    agentPortal.hidden = view !== "agent";
    if (appShell) appShell.setAttribute("aria-hidden", view === "gate" || view === "agent" ? "true" : "false");
  }

  function showGate({ update = true } = {}) {
    closeTeacherStarter();
    setEntryView("gate");
    if (update) updateUrl(null);
  }

  function enterTeacher({ openStarter = false, mode = null, update = true } = {}) {
    setEntryView("teacher");
    activatePersona("teacher");
    if (update) updateUrl("teacher");
    if (mode) selectMode(mode);
    if (openStarter) openTeacherStarter();
  }

  function enterAgentPortal({ update = true } = {}) {
    closeTeacherStarter();
    activatePersona("agent");
    setEntryView("agent");
    if (update) updateUrl("agent");
  }

  function enterAgentGraph({ update = true } = {}) {
    closeTeacherStarter();
    setEntryView("agent-graph");
    activatePersona("agent");
    if (update) updateUrl("agent", "graph");
  }

  function openTeacherStarter() {
    teacherStarter.hidden = false;
    body.classList.add("teacher-starter-open");
    updatePrompt();
    window.setTimeout(() => document.getElementById("teacher-topic")?.focus(), 0);
  }

  function closeTeacherStarter() {
    if (!teacherStarter) return;
    teacherStarter.hidden = true;
    body.classList.remove("teacher-starter-open");
  }

  function selectMode(mode) {
    if (!MODE_CONFIG[mode]) return;
    selectedMode = mode;
    modeButtons.forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.mode === mode ? "true" : "false");
    });
    updatePrompt();
  }

  function selectPromptKind(kind) {
    if (!Object.prototype.hasOwnProperty.call(promptVariants, kind)) return;
    selectedPromptKind = kind;
    promptTabs.forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.promptKind === kind ? "true" : "false");
    });
    if (promptOutput) promptOutput.value = promptVariants[kind];
  }

  function fieldValue(id, fallback = "") {
    const field = document.getElementById(id);
    return field?.value.trim() || fallback;
  }

  function updatePrompt() {
    if (!promptOutput) return;
    const mode = MODE_CONFIG[selectedMode];
    const subject = fieldValue("teacher-subject", "生物学");
    const grade = fieldValue("teacher-grade", "高一");
    const duration = fieldValue("teacher-duration", "45");
    const topic = fieldValue("teacher-topic", "请先和我一起确定最合适的主题或真实问题");
    const classContext = fieldValue("teacher-class-context", "班情暂未提供，请用明确假设继续，并标出需要我复核的地方");
    const teacherIdentity = `${grade}${subject}老师`;

    promptVariants.quick = `我是${teacherIdentity}，想用 ${SITE_URL} 帮我${mode.action}。主题或目标：${topic}。请按 BunnyBook 的规则和我对话，先给课程蓝图，再给完整方案。`;

    promptVariants.stable = `我是${teacherIdentity}，想用 BunnyBook 帮我${mode.action}。\n\n请先读取：${SITE_URL}llms.txt 和 ${SITE_URL}agent/START-HERE.md。不要让我安装 MCP、Plugin 或 Skill。\n\n任务模式：${mode.label}\n课时/时长：${duration} 分钟（若这是多课时规划，请把它理解为每课时参考时长）\n主题或目标：${topic}\n班级情况：${classContext}\n期望交付：${mode.outcome}\n\n最多先问我 3 个真正必要的问题；信息不足时请声明合理假设并继续。先交付教师可用的课程蓝图和教学方案，再在末尾把以下三类内容分开：\n1. 已核对的课标目录事实与来源；\n2. BunnyBook 的 author/inferred 项目映射；\n3. 需要教师决定或复核的内容。\n\n只能使用 BunnyBook 中真实存在的主题、节点、关系和来源，不得编造 ID。每个主要教学环节都要写清教师动作、学生活动、学生产物和可观察证据。`;

    promptVariants.offline = `我接下来会粘贴 BunnyBook 的“离线 AI 上下文包”。请先完整读取，再帮助我${mode.action}。\n\n我的信息：\n- 身份：${teacherIdentity}\n- 课时/时长：${duration} 分钟\n- 主题或目标：${topic}\n- 班级情况：${classContext}\n\n无法访问实时图谱时，不得编造 theme_id、topic_id、前置关系或 source_ref；请把需要回到 BunnyBook 核对的地方明确标为“待图谱核对”。最多问 3 个必要问题，然后继续完成方案。`;

    selectPromptKind(selectedPromptKind);
  }

  async function copyText(text, successMessage) {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch (_error) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    if (copyStatus) {
      copyStatus.textContent = successMessage;
      window.setTimeout(() => {
        if (copyStatus.textContent === successMessage) copyStatus.textContent = "";
      }, 2600);
    }
  }

  async function copyOfflinePack() {
    const button = document.getElementById("copy-offline-pack");
    const previous = button?.textContent;
    if (button) button.textContent = "正在读取…";
    try {
      const response = await fetch("llms-full.txt", { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const pack = await response.text();
      await copyText(`${promptVariants.offline}\n\n--- 以下是 BunnyBook 离线上下文 ---\n\n${pack}`, "完整离线上下文已复制，可直接粘贴给任何 AI。 ");
    } catch (_error) {
      if (copyStatus) copyStatus.textContent = "未能自动读取离线包，请打开 llms-full.txt 后手动复制。";
      window.open("llms-full.txt", "_blank", "noopener,noreferrer");
    } finally {
      if (button) button.textContent = previous;
    }
  }

  document.querySelectorAll("[data-enter-role]").forEach((control) => {
    control.addEventListener("click", (event) => {
      event.preventDefault();
      if (control.dataset.enterRole === "agent") enterAgentPortal();
      else enterTeacher();
    });
  });

  document.querySelectorAll("[data-open-teacher-starter]").forEach((control) => {
    control.addEventListener("click", () => {
      enterTeacher({ openStarter: true, mode: control.dataset.mode || selectedMode });
    });
  });

  document.querySelectorAll("[data-close-teacher-starter]").forEach((control) => {
    control.addEventListener("click", closeTeacherStarter);
  });

  modeButtons.forEach((button) => button.addEventListener("click", () => selectMode(button.dataset.mode)));
  promptTabs.forEach((button) => button.addEventListener("click", () => selectPromptKind(button.dataset.promptKind)));

  ["teacher-subject", "teacher-grade", "teacher-duration", "teacher-topic", "teacher-class-context"].forEach((id) => {
    const field = document.getElementById(id);
    field?.addEventListener("input", updatePrompt);
    field?.addEventListener("change", updatePrompt);
  });

  document.getElementById("copy-prompt")?.addEventListener("click", () => {
    copyText(promptOutput.value, "启动语已复制，可粘贴到豆包、Kimi、ChatGPT 或其他 AI。 ");
  });
  document.getElementById("copy-offline-pack")?.addEventListener("click", copyOfflinePack);
  document.getElementById("copy-agent-starter")?.addEventListener("click", () => {
    copyText(`请读取 ${SITE_URL}llms.txt 和 ${SITE_URL}agent/START-HERE.md，并按其中协议帮助教师备课。不要要求教师安装 MCP、Plugin 或 Skill；最多追问 3 个必要问题，先给可用方案，再列依据与复核。`, "AI 启动指令已复制。 ");
  });

  document.getElementById("show-role-choice")?.addEventListener("click", () => showGate());
  document.getElementById("agent-back-to-choice")?.addEventListener("click", () => showGate());
  document.getElementById("agent-view-graph")?.addEventListener("click", () => enterAgentGraph());
  document.getElementById("open-agent-guide")?.addEventListener("click", () => enterAgentPortal());

  teacherTab?.addEventListener("click", () => {
    if (!internalPersonaChange) {
      setEntryView("teacher");
      updateUrl("teacher");
    }
  });

  agentTab?.addEventListener("click", () => {
    if (!internalPersonaChange) enterAgentPortal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !teacherStarter.hidden) closeTeacherStarter();
  });

  selectMode(selectedMode);
  updatePrompt();

  let initialRole = null;
  let initialView = null;
  try {
    const params = new URL(window.location.href).searchParams;
    initialRole = params.get("role");
    initialView = params.get("view");
  } catch (_error) {
    // Default to the role chooser for local previews.
  }

  if (initialRole === "teacher") enterTeacher({ update: false });
  else if (initialRole === "agent" && initialView === "graph") enterAgentGraph({ update: false });
  else if (initialRole === "agent") enterAgentPortal({ update: false });
  else showGate({ update: false });
})();
