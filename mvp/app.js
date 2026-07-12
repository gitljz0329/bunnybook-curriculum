// SPDX-License-Identifier: Apache-2.0

const data = window.BIG_MVP_DATA;
const mapData = data.learningMap;
const topics = mapData.topics;
const dependencies = mapData.dependencies;
const routes = mapData.routes;
const subjects = mapData.subjects;
const stages = mapData.stages;
const curriculumAlignment = mapData.curriculum_alignment;
const curriculumSubjects = curriculumAlignment.curriculum_subjects;
const competencies = curriculumAlignment.competencies;
const coverageUnits = curriculumAlignment.coverage_units;
const coverageMatrix = curriculumAlignment.coverage_matrix;
const PERSONAS = window.BIG_PERSONAS;
const PERSONA_IDS = ["teacher", "agent"];
const PERSONA_STORAGE_KEY = "bunnybook.persona.v1";
const LEGACY_PERSONA_STORAGE_KEY = "big.persona.v1";
const FEATURED_THEME_ID = "theme-bq5-ai-decisions";

const topicById = new Map(topics.map((topic) => [topic.id, topic]));
const subjectById = new Map(subjects.map((subject) => [subject.id, subject]));
const stageById = new Map(stages.map((stage) => [Number(stage.id), stage]));
const routeById = new Map(routes.map((route) => [route.id, route]));
const curriculumSubjectById = new Map(curriculumSubjects.map((subject) => [subject.id, subject]));
const competencyById = new Map(competencies.map((competency) => [competency.id, competency]));
const coverageUnitById = new Map(coverageUnits.map((unit) => [unit.id, unit]));
const coverageRowBySubjectId = new Map(coverageMatrix.map((row) => [row.subject_id, row]));
const prerequisitesByTopic = new Map(topics.map((topic) => [topic.id, []]));
const unlocksByTopic = new Map(topics.map((topic) => [topic.id, []]));

for (const dependency of dependencies) {
  prerequisitesByTopic.get(dependency.topic_id).push(dependency);
  unlocksByTopic.get(dependency.prerequisite_id).push(dependency);
}

function validPersona(value) {
  return PERSONA_IDS.includes(value);
}

function initialPersona() {
  try {
    const queryRole = new URL(window.location.href).searchParams.get("role");
    if (queryRole !== null) return validPersona(queryRole) ? queryRole : "teacher";
  } catch (_error) {
    // A local file URL may not expose a writable URL object in every browser.
  }
  try {
    const storedRole = window.localStorage.getItem(PERSONA_STORAGE_KEY)
      || window.localStorage.getItem(LEGACY_PERSONA_STORAGE_KEY);
    if (validPersona(storedRole)) return storedRole;
  } catch (_error) {
    // The experience remains usable when local storage is unavailable.
  }
  return "teacher";
}

function initialThemeId() {
  try {
    const themeId = new URL(window.location.href).searchParams.get("theme");
    return themeId && routeById.has(themeId) ? themeId : null;
  } catch (_error) {
    return null;
  }
}

function persistPersona(persona) {
  try {
    window.localStorage.setItem(PERSONA_STORAGE_KEY, persona);
  } catch (_error) {
    // Persisting the preference is an enhancement, not a requirement.
  }
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("role", persona);
    window.history.replaceState(null, "", url);
  } catch (_error) {
    // Some file:// contexts restrict history replacement.
  }
}

const state = {
  persona: initialPersona(),
  selectedId: null,
  activeRouteId: null,
  visibleSubjects: new Set(subjects.map((subject) => subject.id)),
  searchQuery: "",
  history: [],
  viewMode: "map",
  transform: { x: 0, y: 0, k: 1 },
};

const svg = document.getElementById("learning-map");
const viewport = document.getElementById("viewport");
const stageLayer = document.getElementById("stage-layer");
const edgeLayer = document.getElementById("edge-layer");
const nodeLayer = document.getElementById("node-layer");
const tooltip = document.getElementById("map-tooltip");
const mapPanel = document.querySelector(".map-panel");
const detailPanel = document.getElementById("detail-panel");
const subjectFilters = document.getElementById("subject-filters");
const routeList = document.getElementById("route-list");
const searchInput = document.getElementById("topic-search");
const searchResults = document.getElementById("search-results");
const activeContext = document.getElementById("active-context");
const visibleCount = document.getElementById("visible-count");
const clearFocusButton = document.getElementById("clear-focus");
const coverageView = document.getElementById("coverage-view");
const coverageToggle = document.getElementById("coverage-toggle");
const agentEntryToggle = document.getElementById("agent-entry-toggle");
const dataLink = document.getElementById("data-link");
const mcpConfigLink = document.getElementById("mcp-config-link");
const mcpGuideLink = document.getElementById("mcp-guide-link");
const agentManifestLink = document.getElementById("agent-manifest-link");
const agentPromptLink = document.getElementById("agent-prompt-link");
const personaStatus = document.getElementById("persona-status");
const personaTabs = [...document.querySelectorAll(".persona-tab")];
const personaContent = document.getElementById("persona-content");
const promiseEyebrow = document.getElementById("promise-eyebrow");
const promiseTitle = document.getElementById("promise-title");
const promiseCopy = document.getElementById("promise-copy");
const featuredTrialButton = document.getElementById("featured-trial");
const browseAllThemesButton = document.getElementById("browse-all-themes");
const heroNote = document.getElementById("hero-note");
const searchLabel = document.getElementById("topic-search-label");
const mapSvgTitle = document.getElementById("map-svg-title");
const mapSvgDesc = document.getElementById("map-svg-desc");
const showAllButton = document.getElementById("show-all");
const personaActions = document.getElementById("persona-actions");
const zoomControls = document.querySelector(".zoom-controls");
const mapHint = document.querySelector(".map-hint");
const nodeElements = new Map();
const edgeElements = new Map();
const positions = new Map();

const SVG_NS = "http://www.w3.org/2000/svg";
const MAP_WIDTH = 1400;
const MAP_HEIGHT = 900;
const STAGE_X = new Map([[1, 150], [2, 500], [3, 860], [4, 1215]]);
const THEME_PHASE_LABELS = Object.freeze({
  discover: "发现与界定",
  investigate: "调查与分析",
  interpret: "综合解释",
  create_and_act: "创造、表达与行动",
});

function htmlElement(tag, options = {}, children = []) {
  const node = document.createElement(tag);
  if (options.className) node.className = options.className;
  if (options.text !== undefined) node.textContent = options.text;
  if (options.attrs) {
    for (const [key, value] of Object.entries(options.attrs)) node.setAttribute(key, String(value));
  }
  for (const child of children) {
    if (child) node.append(child);
  }
  return node;
}

function personaConfig() {
  return PERSONAS[state.persona];
}

function accentRgb(hexColor) {
  const value = hexColor.replace("#", "");
  return [0, 2, 4].map((offset) => Number.parseInt(value.slice(offset, offset + 2), 16)).join(", ");
}

function renderTrustLine() {
  const trustLine = document.getElementById("trust-line");
  if (state.persona === "agent") {
    trustLine.innerHTML = `<strong>无需安装可试用</strong> · 本地 MCP 已验证 · <strong>${routes.length}</strong> 个主题 · 只读`;
    return;
  }
  trustLine.innerHTML = `<strong>可追溯</strong> · <strong>${curriculumSubjects.length}</strong> 门课标科目 · <strong>${topics.length}</strong> 个学习节点 · 人工复核边界`;
}

function applyPersonaChrome({ announce = false } = {}) {
  const config = personaConfig();
  document.body.dataset.persona = state.persona;
  document.body.style.setProperty("--persona-accent", config.accent);
  document.body.style.setProperty("--persona-accent-rgb", accentRgb(config.accent));
  promiseEyebrow.textContent = config.intro.eyebrow;
  promiseTitle.textContent = config.intro.title;
  promiseCopy.textContent = config.intro.copy;
  featuredTrialButton.textContent = state.persona === "teacher"
    ? "用“AI 可以替我们做决定吗？”试一试"
    : "选择旗舰主题，零安装试用";
  browseAllThemesButton.textContent = state.persona === "teacher"
    ? `浏览全部 ${routes.length} 个主题`
    : "查看长期接入方式";
  heroNote.textContent = state.persona === "teacher"
    ? "无需安装 · 先复制主题使用包 · 再决定是否接入 MCP"
    : "公开页面可复制使用包 · 本地 MCP 需要安装配置 · 远程接入尚未开放";
  searchInput.placeholder = config.searchPlaceholder;
  searchLabel.textContent = config.searchLabel;
  document.getElementById("route-heading").textContent = config.routeHeading;
  document.getElementById("subject-heading").textContent = config.subjectHeading;
  showAllButton.textContent = config.showAllLabel;
  mapPanel.setAttribute("aria-label", config.mapPanelLabel);
  mapSvgTitle.textContent = config.mapTitle;
  mapSvgDesc.textContent = config.mapDescription;
  personaActions.setAttribute("aria-label", config.actions.label);

  personaTabs.forEach((tab) => {
    const selected = tab.dataset.persona === state.persona;
    const tabConfig = PERSONAS[tab.dataset.persona];
    tab.querySelector("[data-persona-label]").textContent = tabConfig.label;
    tab.style.setProperty("--tab-color", tabConfig.accent);
    tab.setAttribute("aria-selected", selected ? "true" : "false");
    tab.tabIndex = selected ? 0 : -1;
  });
  personaContent.setAttribute("aria-labelledby", `persona-${state.persona}`);

  coverageToggle.hidden = state.persona !== "teacher";
  agentEntryToggle.hidden = state.persona !== "teacher";
  agentEntryToggle.textContent = PERSONAS.teacher.actions.connect;
  dataLink.hidden = false;
  coverageToggle.textContent = state.viewMode === "coverage"
    ? PERSONAS.teacher.actions.coverageReturn
    : PERSONAS.teacher.actions.coverage;
  dataLink.textContent = config.actions.data;
  agentManifestLink.textContent = PERSONAS.agent.actions.manifest;
  agentPromptLink.textContent = PERSONAS.agent.actions.prompt;
  mcpConfigLink.textContent = PERSONAS.agent.actions.mcp;
  mcpGuideLink.textContent = PERSONAS.agent.actions.guide;
  agentManifestLink.hidden = true;
  agentPromptLink.hidden = true;
  mcpConfigLink.hidden = true;
  mcpGuideLink.hidden = true;

  renderTrustLine();
  renderMapCounts();
  if (announce) personaStatus.textContent = `${config.label}已启用`;
}

function setPersona(persona, { persist = true, announce = true } = {}) {
  if (!validPersona(persona)) persona = "teacher";
  const refreshOpenSearch = !searchResults.hidden && Boolean(searchInput.value.trim());
  state.persona = persona;
  if (state.viewMode === "coverage" && persona !== "teacher") showMapView();
  applyPersonaChrome({ announce });
  renderSubjectFilters();
  renderRoutes();
  renderDetail();
  applyFocusState();
  if (refreshOpenSearch) renderSearchResults();
  if (persist) persistPersona(persona);
}

function setupPersonaControls() {
  personaTabs.forEach((tab) => {
    tab.addEventListener("click", () => setPersona(tab.dataset.persona));
    tab.addEventListener("keydown", (event) => {
      const currentIndex = PERSONA_IDS.indexOf(tab.dataset.persona);
      let nextIndex = null;
      if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % PERSONA_IDS.length;
      if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + PERSONA_IDS.length) % PERSONA_IDS.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = PERSONA_IDS.length - 1;
      if (nextIndex === null) return;
      event.preventDefault();
      const nextPersona = PERSONA_IDS[nextIndex];
      setPersona(nextPersona);
      document.querySelector(`.persona-tab[data-persona="${nextPersona}"]`).focus();
    });
  });
}

function svgElement(tag, attributes = {}) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, String(value));
  return node;
}

function truncateLabel(value, length = 12) {
  return value.length > length ? `${value.slice(0, length)}…` : value;
}

function subjectLabel(topic) {
  return subjectById.get(topic.subject)?.label || topic.subject;
}

function curriculumSubjectLabels(topic) {
  return topic.curriculum_subject_ids
    .map((subjectId) => curriculumSubjectById.get(subjectId)?.label || subjectId)
    .join(" · ");
}

function competencyLabels(topic, limit = Infinity) {
  return topic.competency_ids
    .slice(0, limit)
    .map((competencyId) => competencyById.get(competencyId)?.label || competencyId);
}

function stageLabel(topic) {
  return stageById.get(Number(topic.stage))?.label || `阶段 ${topic.stage}`;
}

function topicSearchHaystack(topic) {
  const themeLabels = routes
    .filter((route) => route.topic_ids.includes(topic.id))
    .map((route) => `${route.id} ${route.big_question_id} ${route.secondary_big_question_id || ""} ${route.title} ${route.question}`)
    .join(" ");
  const relationLabels = [
    ...(prerequisitesByTopic.get(topic.id) || []),
    ...(unlocksByTopic.get(topic.id) || []),
  ].map((edge) => `${edge.prerequisite_id} ${edge.topic_id} ${edge.strength} ${edge.reason}`).join(" ");
  return `${topic.id} ${topic.name} ${topic.domain} ${topic.description} ${topic.type} ${topic.node_kind} ${topic.primary_subject_id} ${topic.review_status} ${topic.alignment_status} ${topic.curriculum_subject_ids.join(" ")} ${topic.competency_ids.join(" ")} ${curriculumSubjectLabels(topic)} ${competencyLabels(topic).join(" ")} ${topic.source_anchor_ids.join(" ")} ${themeLabels} ${relationLabels}`.toLocaleLowerCase("zh-CN");
}

function buildPositions() {
  for (const stage of stages) {
    const stageTopics = topics
      .filter((topic) => Number(topic.stage) === Number(stage.id))
      .sort((a, b) => {
        const subjectA = subjects.findIndex((subject) => subject.id === a.subject);
        const subjectB = subjects.findIndex((subject) => subject.id === b.subject);
        return subjectA - subjectB || a.domain.localeCompare(b.domain, "zh-CN") || a.name.localeCompare(b.name, "zh-CN");
      });
    const usableHeight = 680;
    const gap = stageTopics.length > 1 ? usableHeight / (stageTopics.length - 1) : 0;
    stageTopics.forEach((topic, index) => {
      const baseX = STAGE_X.get(Number(stage.id));
      const hash = [...topic.id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
      const xJitter = ((hash % 5) - 2) * 13;
      const y = stageTopics.length === 1 ? MAP_HEIGHT / 2 : 110 + index * gap;
      positions.set(topic.id, { x: baseX + xJitter, y });
    });
  }
}

function buildStageLayer() {
  stageLayer.replaceChildren();
  stages.forEach((stage, index) => {
    const band = svgElement("rect", {
      class: "stage-band",
      x: index * 350 + 1,
      y: 1,
      width: 348,
      height: 898,
      rx: 24,
    });
    const label = svgElement("text", {
      class: "stage-label",
      x: index * 350 + 24,
      y: 58,
    });
    label.textContent = `0${stage.id}  ${stage.label}`;
    const caption = svgElement("text", {
      class: "stage-caption",
      x: index * 350 + 24,
      y: 79,
    });
    caption.textContent = stage.description;
    stageLayer.append(band, label, caption);
  });
}

function edgePath(from, to) {
  if (Math.abs(to.x - from.x) < 40) {
    const bend = from.y < to.y ? 55 : -55;
    return `M ${from.x} ${from.y} C ${from.x + bend} ${from.y + 18}, ${to.x + bend} ${to.y - 18}, ${to.x} ${to.y}`;
  }
  const direction = Math.sign(to.x - from.x) || 1;
  const curve = Math.max(60, Math.abs(to.x - from.x) * 0.42);
  return `M ${from.x} ${from.y} C ${from.x + curve * direction} ${from.y}, ${to.x - curve * direction} ${to.y}, ${to.x} ${to.y}`;
}

function buildEdges() {
  edgeLayer.replaceChildren();
  edgeElements.clear();
  for (const dependency of dependencies) {
    const from = positions.get(dependency.prerequisite_id);
    const to = positions.get(dependency.topic_id);
    const key = `${dependency.prerequisite_id}→${dependency.topic_id}`;
    const path = svgElement("path", {
      class: `graph-edge ${dependency.strength}`,
      d: edgePath(from, to),
      "data-from": dependency.prerequisite_id,
      "data-to": dependency.topic_id,
      "data-strength": dependency.strength,
    });
    edgeElements.set(key, path);
    edgeLayer.append(path);
  }
}

function createShape(subject) {
  const common = { class: "node-shape" };
  switch (subject.shape) {
    case "diamond":
      return svgElement("rect", { ...common, x: -7, y: -7, width: 14, height: 14, rx: 1.5, transform: "rotate(45)" });
    case "square":
      return svgElement("rect", { ...common, x: -8, y: -8, width: 16, height: 16, rx: 2.5 });
    case "triangle":
      return svgElement("polygon", { ...common, points: "0,-10 9,8 -9,8" });
    case "hexagon":
      return svgElement("polygon", { ...common, points: "-8,-5 -3,-9 6,-9 10,-1 5,8 -5,8 -10,-1" });
    case "ring": {
      const ring = svgElement("circle", { ...common, r: 9 });
      ring.style.fill = "var(--bg-deep)";
      ring.style.strokeWidth = "3";
      return ring;
    }
    default:
      return svgElement("circle", { ...common, r: 8 });
  }
}

function buildNodes() {
  nodeLayer.replaceChildren();
  nodeElements.clear();
  for (const topic of topics) {
    const position = positions.get(topic.id);
    const subject = subjectById.get(topic.subject);
    const group = svgElement("g", {
      class: "graph-node",
      transform: `translate(${position.x} ${position.y})`,
      role: "button",
      tabindex: "0",
      "aria-label": `${topic.name}，${subject.label}，${stageLabel(topic)}`,
      "data-topic-id": topic.id,
    });
    group.style.setProperty("--subject-color", subject.color);
    const label = svgElement("text", { class: "node-label", x: 15, y: 4 });
    label.textContent = truncateLabel(topic.name);
    const core = svgElement("circle", { class: "node-core", r: 1.8 });
    group.append(createShape(subject), core, label);

    group.addEventListener("pointerdown", (event) => event.stopPropagation());
    group.addEventListener("click", (event) => {
      event.stopPropagation();
      selectTopic(topic.id, true);
    });
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectTopic(topic.id, true);
      }
    });
    group.addEventListener("pointerenter", (event) => showTooltip(topic, event));
    group.addEventListener("pointermove", moveTooltip);
    group.addEventListener("pointerleave", hideTooltip);
    nodeElements.set(topic.id, group);
    nodeLayer.append(group);
  }
}

function directPrerequisites(topicId) {
  return prerequisitesByTopic.get(topicId) || [];
}

function directUnlocks(topicId) {
  return unlocksByTopic.get(topicId) || [];
}

function getAncestors(topicId) {
  const result = new Set();
  const stack = [topicId];
  while (stack.length) {
    const current = stack.pop();
    for (const dependency of directPrerequisites(current)) {
      if (!result.has(dependency.prerequisite_id)) {
        result.add(dependency.prerequisite_id);
        stack.push(dependency.prerequisite_id);
      }
    }
  }
  return result;
}

function getDescendants(topicId) {
  const result = new Set();
  const stack = [topicId];
  while (stack.length) {
    const current = stack.pop();
    for (const dependency of directUnlocks(current)) {
      if (!result.has(dependency.topic_id)) {
        result.add(dependency.topic_id);
        stack.push(dependency.topic_id);
      }
    }
  }
  return result;
}

function activeRouteTopics() {
  if (!state.activeRouteId) return null;
  return new Set(routeById.get(state.activeRouteId)?.topic_ids || []);
}

function visibleBySubject(topicId) {
  const topic = topicById.get(topicId);
  return topic && state.visibleSubjects.has(topic.subject);
}

function applyFocusState() {
  const selected = state.selectedId;
  const ancestors = selected ? getAncestors(selected) : new Set();
  const descendants = selected ? getDescendants(selected) : new Set();
  const routeTopics = activeRouteTopics();
  const overviewTopics = new Set(routes.flatMap((route) => route.entry_topic_ids || []));
  const query = state.searchQuery.trim().toLocaleLowerCase("zh-CN");
  let shownTopics = 0;

  for (const topic of topics) {
    const element = nodeElements.get(topic.id);
    const subjectVisible = state.visibleSubjects.has(topic.subject);
    const isSelected = topic.id === selected;
    const isAncestor = ancestors.has(topic.id);
    const isDescendant = descendants.has(topic.id);
    const isRoute = routeTopics?.has(topic.id) || false;
    const isOverview = overviewTopics.has(topic.id);
    const searchHaystack = topicSearchHaystack(topic);
    const isSearchMatch = Boolean(query && searchHaystack.includes(query));
    const isDimmed = subjectVisible && (
      selected
        ? !isSelected && !isAncestor && !isDescendant
        : routeTopics
          ? !isRoute
          : !isOverview
    );

    element.classList.toggle("is-hidden", !subjectVisible);
    element.classList.toggle("is-selected", isSelected);
    element.classList.toggle("is-ancestor", isAncestor);
    element.classList.toggle("is-descendant", isDescendant);
    element.classList.toggle("is-route", isRoute || (!selected && !routeTopics && isOverview));
    element.classList.toggle("is-search-match", isSearchMatch);
    element.classList.toggle("is-dimmed", isDimmed);
    if (subjectVisible && (!routeTopics || isRoute) && (!selected || isSelected || isAncestor || isDescendant)) shownTopics += 1;
  }

  for (const dependency of dependencies) {
    const key = `${dependency.prerequisite_id}→${dependency.topic_id}`;
    const element = edgeElements.get(key);
    const endpointsVisible = visibleBySubject(dependency.prerequisite_id) && visibleBySubject(dependency.topic_id);
    const isRoute = Boolean(routeTopics?.has(dependency.prerequisite_id) && routeTopics.has(dependency.topic_id));
    const isAncestorEdge = Boolean(selected &&
      (dependency.topic_id === selected || ancestors.has(dependency.topic_id)) &&
      ancestors.has(dependency.prerequisite_id));
    const isDescendantEdge = Boolean(selected &&
      (dependency.prerequisite_id === selected || descendants.has(dependency.prerequisite_id)) &&
      descendants.has(dependency.topic_id));
    const isDimmed = endpointsVisible && (
      selected ? !isAncestorEdge && !isDescendantEdge : routeTopics ? !isRoute : true
    );

    element.classList.toggle("is-hidden", !endpointsVisible);
    element.classList.toggle("is-route", isRoute);
    element.classList.toggle("is-ancestor", isAncestorEdge);
    element.classList.toggle("is-descendant", isDescendantEdge);
    element.classList.toggle("is-dimmed", isDimmed);
  }

  const selectedTopic = selected ? topicById.get(selected) : null;
  const activeRoute = state.activeRouteId ? routeById.get(state.activeRouteId) : null;
  const context = state.persona === "agent"
      ? selectedTopic
        ? `当前 Agent 上下文｜${selectedTopic.id} · ${selectedTopic.name}`
        : activeRoute
          ? `当前 Agent 上下文｜${activeRoute.id} · ${activeRoute.title}`
          : "连接 MCP 或复制一个主题上下文包"
      : selectedTopic
        ? `聚焦：${selectedTopic.name}`
        : activeRoute
          ? `跨学科主题｜${activeRoute.title}`
          : "8 个跨学科主题入口";
  activeContext.textContent = context;
  const activeSubjects = activeRoute
    ? [...new Set(activeRoute.topic_ids.flatMap((id) => topicById.get(id).curriculum_subject_ids))]
        .map((id) => curriculumSubjectById.get(id).label)
        .join(" · ")
    : "";
  visibleCount.textContent = state.persona === "agent"
      ? selected
        ? `in_degree=${directPrerequisites(selected).length} · out_degree=${directUnlocks(selected).length} · ancestors=${ancestors.size}`
        : activeRoute
          ? `${activeRoute.topic_ids.length} 个节点 · ${activeSubjects} · 可交给 Agent 设计活动`
          : `${dependencies.length} 条有向关系 · MCP 只读 · schema ${mapData.schema_version}`
      : selected
        ? `${ancestors.size} 个全部前置 · ${directPrerequisites(selected).length} 个直接前置 · ${directUnlocks(selected).length} 个直接解锁`
        : activeRoute
          ? `${activeSubjects} · ${shownTopics} 个节点`
          : `${overviewTopics.size} 个主题终点 · ${shownTopics} 个共享节点`;
  clearFocusButton.hidden = !selected;
  renderMapCounts();
}

function showTooltip(topic, event) {
  const subject = subjectById.get(topic.subject);
  const lines = [
    htmlElement("strong", { text: topic.name }),
    htmlElement("span", { text: `${subject.label} · ${topic.domain} · ${stageLabel(topic)}` }),
  ];
  if (state.persona === "agent") {
    lines[0].textContent = `${topic.id} · ${topic.name}`;
    lines.push(
      htmlElement("span", { text: `${topic.type} · ${topic.review_status}` }),
      htmlElement("span", { text: `anchors: ${topic.source_anchor_ids.join(", ")}` }),
    );
  } else {
    lines.push(
      htmlElement("span", { text: `课标：${curriculumSubjectLabels(topic)}｜素养：${competencyLabels(topic, 2).join("、")}` }),
      htmlElement("span", { text: `可以这样追问：${topic.assessment_prompt}` }),
    );
  }
  tooltip.replaceChildren(...lines);
  tooltip.hidden = false;
  moveTooltip(event);
}

function moveTooltip(event) {
  if (tooltip.hidden) return;
  const panelRect = svg.parentElement.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  let left = event.clientX - panelRect.left + 15;
  let top = event.clientY - panelRect.top + 15;
  if (left + tooltipRect.width > panelRect.width - 10) left -= tooltipRect.width + 28;
  if (top + tooltipRect.height > panelRect.height - 10) top -= tooltipRect.height + 28;
  tooltip.style.left = `${Math.max(10, left)}px`;
  tooltip.style.top = `${Math.max(10, top)}px`;
}

function hideTooltip() {
  tooltip.hidden = true;
}

function renderSubjectFilters() {
  subjectFilters.replaceChildren();
  for (const subject of subjects) {
    const count = topics.filter((topic) => topic.subject === subject.id).length;
    const button = htmlElement("button", {
      className: "subject-button",
      attrs: {
        type: "button",
        "aria-pressed": state.visibleSubjects.has(subject.id) ? "true" : "false",
        "data-shape": subject.shape,
      },
    }, [
      htmlElement("span", { className: "subject-swatch", attrs: { "aria-hidden": "true" } }),
      htmlElement("span", { text: state.persona === "agent" ? `${subject.id} · ${subject.label}` : subject.label }),
      htmlElement("span", { text: String(count) }),
    ]);
    button.style.setProperty("--subject-color", subject.color);
    button.addEventListener("click", () => {
      if (state.visibleSubjects.has(subject.id)) state.visibleSubjects.delete(subject.id);
      else state.visibleSubjects.add(subject.id);
      renderSubjectFilters();
      applyFocusState();
    });
    subjectFilters.append(button);
  }
  const allVisible = state.visibleSubjects.size === subjects.length;
  document.getElementById("toggle-subjects").textContent = allVisible
    ? personaConfig().subjectToggle.none
    : personaConfig().subjectToggle.all;
}

function routeCurriculumSubjects(route) {
  const ids = new Set();
  for (const contribution of route.theme_learning.subject_contributions) ids.add(contribution.subject_id);
  return [...ids].map((id) => curriculumSubjectById.get(id));
}

function renderRoutes() {
  routeList.replaceChildren();
  routes.forEach((route, index) => {
    const routeSubjects = routeCurriculumSubjects(route).map((subject) => subject.label).join(" · ");
    const finalTask = route.theme_learning.final_performance_task;
    let routeBody;
    if (state.persona === "agent") {
      routeBody = [
        htmlElement("strong", { text: route.title }),
        htmlElement("code", { className: "route-object-id", text: route.id }),
        htmlElement("small", { text: `${route.big_question_id} · ${route.topic_ids.length} 个节点 · ${routeSubjects}` }),
        htmlElement("span", { className: "route-cta", text: "组装 Agent 上下文 →" }),
      ];
    } else {
      const packageLabel = route.material_links?.teacher_package ? "共备包：已有样张" : "共备包：待补";
      routeBody = [
        htmlElement("strong", { text: route.title }),
        htmlElement("small", { text: route.question }),
        htmlElement("small", { className: "route-task", text: `${personaConfig().terms.performanceTask}：${finalTask.title}` }),
        htmlElement("small", { className: "route-subjects", text: `${routeSubjects} · ${route.topic_ids.length} 个节点 · ${packageLabel}` }),
      ];
    }
    const button = htmlElement("button", {
      className: "route-button",
      attrs: {
        type: "button",
        "aria-pressed": state.activeRouteId === route.id ? "true" : "false",
      },
    }, [
      htmlElement("span", { className: "route-index", text: `0${index + 1}` }),
      htmlElement("span", {}, routeBody),
    ]);
    button.addEventListener("click", () => selectRoute(route.id));
    routeList.append(button);
  });
  document.getElementById("show-all").setAttribute("aria-pressed", state.activeRouteId ? "false" : "true");
}

function showMapView() {
  state.viewMode = "map";
  svg.hidden = false;
  coverageView.hidden = true;
  zoomControls.hidden = false;
  mapHint.hidden = false;
  coverageToggle.setAttribute("aria-pressed", "false");
  coverageToggle.textContent = PERSONAS.teacher.actions.coverage;
  applyFocusState();
}

function openThemeFromCoverage(routeId) {
  showMapView();
  if (state.activeRouteId === routeId) {
    state.selectedId = null;
    renderRoutes();
    renderDetail();
    applyFocusState();
    fitToTopics(routeById.get(routeId).topic_ids);
    return;
  }
  state.activeRouteId = null;
  selectRoute(routeId);
}

function coverageCell(subjectId, route, cell) {
  const button = htmlElement("button", {
    className: `coverage-cell ${cell.topic_count ? "has-coverage" : "is-empty"}`,
    attrs: {
      type: "button",
      "aria-label": `${curriculumSubjectById.get(subjectId).label}在${route.title}中：${cell.topic_count}个节点，${cell.competency_count}项核心素养`,
    },
  }, [
    htmlElement("strong", { text: cell.topic_count ? String(cell.topic_count) : "—" }),
    htmlElement("small", { text: cell.topic_count ? `${cell.competency_count} 素养` : "未参与" }),
  ]);
  if (cell.topic_count) button.addEventListener("click", () => openThemeFromCoverage(route.id));
  else button.disabled = true;
  return button;
}

function renderCoverageView() {
  const headerRow = htmlElement("tr", {}, [htmlElement("th", { text: "课标科目" })]);
  routes.forEach((route) => {
    headerRow.append(htmlElement("th", {}, [
      htmlElement("span", { text: route.big_question_id }),
      htmlElement("small", { text: route.title }),
    ]));
  });

  const body = htmlElement("tbody");
  curriculumSubjects.forEach((subject) => {
    const row = coverageRowBySubjectId.get(subject.id);
    const cellsByTheme = new Map(row.theme_cells.map((cell) => [cell.theme_id, cell]));
    const subjectHead = htmlElement("th", {}, [
      htmlElement("strong", { text: subject.label }),
      htmlElement("small", { text: `${subject.competency_ids.length} 素养 · ${subject.coverage_unit_ids.length} 内容单元` }),
    ]);
    const tr = htmlElement("tr", {}, [subjectHead]);
    routes.forEach((route) => {
      tr.append(htmlElement("td", {}, [coverageCell(subject.id, route, cellsByTheme.get(route.id))]));
    });
    body.append(tr);
  });

  const matrix = htmlElement("div", { className: "coverage-matrix-wrap" }, [
    htmlElement("table", { className: "coverage-matrix" }, [
      htmlElement("thead", {}, [headerRow]),
      body,
    ]),
  ]);

  const standards = htmlElement("div", { className: "coverage-standard-grid" });
  curriculumSubjects.forEach((subject) => {
    const subjectUnits = subject.coverage_unit_ids.map((id) => coverageUnitById.get(id));
    const details = htmlElement("details", { className: "coverage-standard" }, [
      htmlElement("summary", {}, [
        htmlElement("strong", { text: subject.label }),
        htmlElement("span", { text: `${subject.competency_ids.length} 项素养 · ${subjectUnits.length} 个内容单元` }),
      ]),
      htmlElement("p", { className: "coverage-source", text: subject.competency_source_ref }),
      htmlElement("div", { className: "competency-chips" }, subject.competency_ids.map(competencyChip)),
      htmlElement("ul", { className: "coverage-unit-list" }, subjectUnits.map((unit) => htmlElement("li", {}, [
        htmlElement("strong", { text: unit.title }),
        htmlElement("small", { text: unit.source_ref }),
      ]))),
    ]);
    standards.append(details);
  });

  const policyUnits = curriculumAlignment.curriculum_plan_unit_ids.map((id) => coverageUnitById.get(id));
  const policy = htmlElement("details", { className: "coverage-standard policy-standard" }, [
    htmlElement("summary", {}, [
      htmlElement("strong", { text: "普通高中课程方案" }),
      htmlElement("span", { text: `${policyUnits.length} 个政策与实施条目 · 不计作第 13 门学科` }),
    ]),
    htmlElement("ul", { className: "coverage-unit-list" }, policyUnits.map((unit) => htmlElement("li", {}, [
      htmlElement("strong", { text: unit.title }),
      htmlElement("small", { text: unit.source_ref }),
    ]))),
  ]);

  const coverageCloseButton = htmlElement("button", {
    className: "coverage-close",
    text: "返回学习地图",
    attrs: { type: "button" },
  });
  coverageCloseButton.addEventListener("click", showMapView);

  coverageView.replaceChildren(
    htmlElement("div", { className: "coverage-heading" }, [
      htmlElement("div", { className: "coverage-heading-top" }, [
      htmlElement("p", { className: "detail-kicker", text: "课标依据与项目映射" }),
        coverageCloseButton,
      ]),
      htmlElement("h2", { text: "12 门课标 × 8 个项目主题" , attrs: { id: "coverage-title" } }),
      htmlElement("p", { text: `51 项核心素养名称已经课标原文核对；${coverageUnits.length} 个课程内容单元作为来源索引。矩阵展示项目当前如何组织课程依据，不代表课标直接规定这些主题与对应关系。` }),
    ]),
    matrix,
    htmlElement("div", { className: "coverage-section-heading" }, [
      htmlElement("h3", { text: "逐科课标目录" }),
      htmlElement("span", { text: "展开查看全部核心素养与课程内容单元" }),
    ]),
    standards,
    policy,
    htmlElement("p", { className: "coverage-disclaimer", text: curriculumAlignment.disclaimer }),
  );
}

function showCoverageView() {
  if (state.persona !== "teacher") return;
  state.viewMode = "coverage";
  svg.hidden = true;
  tooltip.hidden = true;
  coverageView.hidden = false;
  zoomControls.hidden = true;
  mapHint.hidden = true;
  clearFocusButton.hidden = true;
  coverageToggle.setAttribute("aria-pressed", "true");
  coverageToggle.textContent = PERSONAS.teacher.actions.coverageReturn;
  activeContext.textContent = "课标依据与项目映射";
  visibleCount.textContent = `${curriculumSubjects.length} 门课标 · ${competencies.length} 项核心素养 · ${coverageUnits.length} 个内容单元`;
  renderCoverageView();
  coverageView.scrollTop = 0;
  coverageView.scrollLeft = 0;
  if (window.matchMedia("(max-width: 700px)").matches) {
    window.setTimeout(() => mapPanel.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }
}

function selectRoute(routeId) {
  if (state.viewMode !== "map") showMapView();
  state.activeRouteId = state.activeRouteId === routeId ? null : routeId;
  state.selectedId = null;
  state.history = [];
  renderRoutes();
  renderDetail();
  applyFocusState();
  if (state.activeRouteId) fitToTopics(routeById.get(state.activeRouteId).topic_ids);
  else resetView();
  scrollDetailOnMobile();
}

function openRoute(routeId) {
  if (state.activeRouteId !== routeId) {
    selectRoute(routeId);
    return;
  }
  state.selectedId = null;
  state.history = [];
  renderRoutes();
  renderDetail();
  applyFocusState();
  fitToTopics(routeById.get(routeId).topic_ids);
  scrollDetailOnMobile();
}

function showAllThemes() {
  if (state.viewMode !== "map") showMapView();
  state.activeRouteId = null;
  state.selectedId = null;
  state.history = [];
  renderRoutes();
  renderDetail();
  applyFocusState();
  resetView();
}

function showAllThemesAndFocus() {
  showAllThemes();
  const firstTheme = routeList.querySelector("button");
  window.setTimeout(() => {
    routeList.scrollIntoView({ behavior: "smooth", block: "start" });
    firstTheme?.focus({ preventScroll: true });
  }, 80);
}

function selectTopic(topicId, pushHistory = true) {
  if (state.viewMode !== "map") showMapView();
  const topic = topicById.get(topicId);
  if (!topic) return;
  if (!state.visibleSubjects.has(topic.subject)) {
    state.visibleSubjects.add(topic.subject);
    renderSubjectFilters();
  }
  if (pushHistory && state.selectedId && state.selectedId !== topicId) state.history.push(state.selectedId);
  state.selectedId = topicId;
  renderDetail();
  applyFocusState();
  focusTopic(topicId);
  scrollDetailOnMobile();
}

function scrollDetailOnMobile() {
  if (window.matchMedia("(max-width: 700px)").matches) {
    window.setTimeout(() => detailPanel.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }
}

function clearFocus() {
  state.selectedId = null;
  state.history = [];
  renderDetail();
  applyFocusState();
  if (state.activeRouteId) fitToTopics(routeById.get(state.activeRouteId).topic_ids);
  else resetView();
}

function goBack() {
  const previous = state.history.pop();
  if (previous) selectTopic(previous, false);
  else clearFocus();
}

function createMetaChip(text, className = "") {
  return htmlElement("span", { className: `meta-chip ${className}`.trim(), text });
}

function relationButton(dependency, direction) {
  const targetId = direction === "prerequisite" ? dependency.prerequisite_id : dependency.topic_id;
  const target = topicById.get(targetId);
  const relationLabel = state.persona === "agent"
      ? `${dependency.strength} · ${direction === "prerequisite" ? "incoming" : "outgoing"}`
      : dependency.strength === "hard" ? "关键前置" : "辅助前置";
  const button = htmlElement("button", {
    className: `relation-button ${direction === "unlock" ? "unlock" : ""}`,
    attrs: { type: "button" },
  }, [
    htmlElement("span", { className: `relation-line ${dependency.strength}` }),
    htmlElement("span", {}, [
      htmlElement("strong", { text: state.persona === "agent" ? `${target.id} · ${target.name}` : target.name }),
      htmlElement("small", { text: `${relationLabel} · ${dependency.reason}` }),
    ]),
  ]);
  button.addEventListener("click", () => selectTopic(targetId, true));
  return button;
}

function competencyChip(competencyId) {
  return htmlElement("span", { className: "competency-chip", text: competencyById.get(competencyId).label });
}

function renderCurriculumAlignment(topic) {
  const rows = topic.curriculum_subject_ids.map((subjectId) => {
    const subject = curriculumSubjectById.get(subjectId);
    const subjectCompetencies = topic.competency_ids.filter((competencyId) => competencyById.get(competencyId).subject_id === subjectId);
    return htmlElement("div", { className: "curriculum-row" }, [
      htmlElement("div", { className: "curriculum-subject" }, [
        htmlElement("strong", { text: subject.label }),
        htmlElement("small", { text: topic.source_anchor_ids.length ? "课标内容锚点 + 项目素养映射" : "跨学科教学映射" }),
      ]),
      htmlElement("div", { className: "competency-chips" }, subjectCompetencies.map(competencyChip)),
    ]);
  });
  return htmlElement("section", { className: "curriculum-card" }, [
    htmlElement("div", { className: "curriculum-card-heading" }, [
      htmlElement("h3", { text: personaConfig().terms.curriculumAlignment }),
      htmlElement("span", { text: "名称已核对" }),
    ]),
    ...rows,
    htmlElement("p", { className: "alignment-note", text: "节点与素养的关联为项目映射，尚待对应学科教师复核。" }),
  ]);
}

function renderTeacherRouteDetail(route) {
  const theme = route.theme_learning;
  const close = htmlElement("button", { className: "detail-back", text: "← 返回全部主题", attrs: { type: "button" } });
  close.addEventListener("click", () => selectRoute(route.id));

  const contributionRows = theme.subject_contributions.map((contribution) => {
    const subject = curriculumSubjectById.get(contribution.subject_id);
    return htmlElement("div", { className: "subject-contribution" }, [
      htmlElement("div", { className: "contribution-heading" }, [
        htmlElement("strong", { text: subject.label }),
        htmlElement("span", { text: contribution.content_area }),
      ]),
      htmlElement("p", { text: contribution.contribution }),
      htmlElement("div", { className: "competency-chips" }, contribution.competency_ids.map(competencyChip)),
    ]);
  });

  const finalTask = theme.final_performance_task;
  const taskSection = htmlElement("section", { className: "performance-task" }, [
    htmlElement("p", { className: "detail-kicker", text: personaConfig().terms.performanceTask }),
    htmlElement("h3", { text: finalTask.title }),
    htmlElement("p", { className: "task-audience", text: `真实受众：${finalTask.authentic_audience}` }),
    htmlElement("p", { text: finalTask.brief }),
    htmlElement("div", { className: "artifact-list" }, finalTask.required_artifacts.map((artifact) => htmlElement("span", { text: artifact }))),
  ]);

  const routeStartIds = route.entry_topic_ids;
  const starts = htmlElement("div", { className: "start-options route-starts" }, [
    htmlElement("span", { text: "从关键节点进入地图" }),
  ]);
  routeStartIds.forEach((id) => {
    const topic = topicById.get(id);
    const button = htmlElement("button", { className: "start-node", text: topic.name, attrs: { type: "button" } });
    button.addEventListener("click", () => selectTopic(topic.id, true));
    starts.append(button);
  });

  const resourceLinks = Object.entries(route.material_links || {}).filter(([, href]) => Boolean(href));
  const resources = htmlElement("section", { className: "detail-section route-resources" }, [
    htmlElement("h3", {}, [htmlElement("span", { text: "共备资源" })]),
    ...(resourceLinks.length
      ? resourceLinks.map(([kind, href]) => htmlElement("a", {
          className: "route-link",
          text: `${kind === "teacher_package" ? "教师共备样张" : "学生工作纸"} →`,
          attrs: { href },
        }))
      : [htmlElement("p", { className: "no-relations", text: "当前主题的教师共备包尚待补充。" })]),
  ]);

  const parts = [
    close,
    htmlElement("p", { className: "detail-kicker", text: "跨学科主题" }),
    htmlElement("h2", { text: route.title }),
    htmlElement("div", { className: "assessment-callout route-question" }, [
      htmlElement("span", { text: "驱动问题" }),
      htmlElement("p", { text: route.question }),
    ]),
    htmlElement("p", { className: "topic-description", text: theme.theme_statement }),
    agentHandoffButton("把这个主题交给 Agent", "theme"),
    taskSection,
    htmlElement("section", { className: "detail-section" }, [
      htmlElement("h3", {}, [htmlElement("span", { text: "共同学习目标" })]),
      htmlElement("ul", { className: "mastery-list" }, theme.learning_goals.map((goal) => htmlElement("li", { text: goal }))),
    ]),
    htmlElement("section", { className: "detail-section" }, [
      htmlElement("h3", {}, [htmlElement("span", { text: "学科如何共同工作" }), htmlElement("span", { text: `${contributionRows.length} 门课标科目` })]),
      htmlElement("div", { className: "subject-contributions" }, contributionRows),
    ]),
    starts,
  ];
  parts.push(resources);
  parts.push(htmlElement("p", { className: "empty-proof", text: curriculumAlignment.disclaimer }));
  detailPanel.replaceChildren(...parts);
  detailPanel.scrollTop = 0;
}

function curriculumRefsForTopics(scopedTopics) {
  const subjectIds = new Set(scopedTopics.flatMap((topic) => topic.curriculum_subject_ids));
  const competencyIds = new Set(scopedTopics.flatMap((topic) => topic.competency_ids));
  const coverageIds = new Set(scopedTopics.flatMap((topic) => topic.source_anchor_ids.map((id) => id.replace(/^CA-/, ""))));
  return {
    subjects: curriculumSubjects.filter((subject) => subjectIds.has(subject.id)),
    competencies: competencies.filter((competency) => competencyIds.has(competency.id)),
    coverage_units: coverageUnits.filter((unit) => coverageIds.has(unit.id)),
  };
}

function agentTrustBoundary() {
  return {
    human_review_required: true,
    verified: "curriculum subject and competency labels with their source page references",
    pending_review: "themes, topics, prerequisite relations, curriculum links, and coverage matrix",
    prohibited_claim: "Do not describe project mappings or prerequisite edges as directly prescribed by the curriculum standards.",
    disclaimer: curriculumAlignment.disclaimer,
  };
}

function agentThemeContext(route) {
  const topicIdSet = new Set(route.topic_ids);
  const scopedTopics = route.topic_ids.map((id) => topicById.get(id));
  return {
    context_version: "1.0",
    graph_schema_version: mapData.schema_version,
    scope: { type: "theme", id: route.id },
    theme: route,
    topics: scopedTopics,
    dependencies: dependencies.filter((edge) => topicIdSet.has(edge.prerequisite_id) && topicIdSet.has(edge.topic_id)),
    curriculum_refs: curriculumRefsForTopics(scopedTopics),
    trust_boundary: agentTrustBoundary(),
  };
}

function agentTopicContext(topic, preferredThemeId = null) {
  const scopedDependencies = dependencies.filter((edge) => edge.prerequisite_id === topic.id || edge.topic_id === topic.id);
  const relatedIds = new Set([topic.id]);
  scopedDependencies.forEach((edge) => {
    relatedIds.add(edge.prerequisite_id);
    relatedIds.add(edge.topic_id);
  });
  const scopedTopics = [...relatedIds].map((id) => topicById.get(id));
  return {
    context_version: "1.0",
    graph_schema_version: mapData.schema_version,
    scope: { type: "topic", id: topic.id },
    topic,
    direct_prerequisites: directPrerequisites(topic.id),
    direct_unlocks: directUnlocks(topic.id),
    related_topics: scopedTopics,
    curriculum_refs: curriculumRefsForTopics([topic]),
    preferred_theme_id: preferredThemeId,
    trust_boundary: agentTrustBoundary(),
  };
}

function compactCurriculumRefs(scopedTopics, {
  maxCoverageUnits = Number.POSITIVE_INFINITY,
  includeSubjectSourceRefs = true,
} = {}) {
  const refs = curriculumRefsForTopics(scopedTopics);
  return {
    subjects: refs.subjects.map((subject) => {
      const compactSubject = { id: subject.id, label: subject.label };
      if (includeSubjectSourceRefs) compactSubject.competency_source_ref = subject.competency_source_ref;
      return compactSubject;
    }),
    competencies: refs.competencies.map((competency) => ({
      id: competency.id,
      subject_id: competency.subject_id,
      label: competency.label,
    })),
    coverage_units: refs.coverage_units.slice(0, maxCoverageUnits).map((unit) => ({
      id: unit.id,
      file_id: unit.file_id,
      subject_id: unit.subject_id,
      title: unit.title,
      source_ref: unit.source_ref,
      review_status: unit.review_status,
    })),
  };
}

function compactTopicForTrial(topic, role = null, {
  includeSourceRef = true,
  includeMappingMetadata = true,
} = {}) {
  const result = {
    id: topic.id,
    name: topic.name,
    subject_id: topic.primary_subject_id,
    stage: topic.stage,
    description: topic.description,
    mastery_evidence: topic.mastery_evidence,
    theme_role: role,
    curriculum_links: topic.curriculum_links.map((link) => {
      const compactLink = {
        subject_id: link.subject_id,
        competency_ids: link.competency_ids,
        content_anchor_ids: link.content_anchor_ids,
      };
      if (includeMappingMetadata) {
        compactLink.mapping_basis = link.mapping_basis;
        compactLink.review_status = link.review_status;
      }
      return compactLink;
    }),
  };
  if (includeMappingMetadata) {
    result.evidence_level = topic.evidence_level;
    result.review_status = topic.review_status;
  }
  if (includeSourceRef) result.source_ref = topic.source_ref;
  return result;
}

function compactDependencyForTrial(edge) {
  return {
    prerequisite_id: edge.prerequisite_id,
    topic_id: edge.topic_id,
    strength: edge.strength,
    reason: edge.reason,
  };
}

function keyThemeTopicIds(route, limit = 4) {
  const roleById = new Map(route.topic_roles.map((role) => [role.topic_id, role]));
  const selected = [];
  const add = (topicId) => {
    if (topicId && route.topic_ids.includes(topicId) && !selected.includes(topicId)) selected.push(topicId);
  };
  route.entry_topic_ids.forEach(add);
  for (let stage = 1; stage <= 4; stage += 1) {
    const candidate = route.topic_ids.find((topicId) => {
      const role = roleById.get(topicId);
      return topicById.get(topicId)?.stage === stage && ["entry", "core"].includes(role?.importance);
    });
    add(candidate);
  }
  route.topic_roles.filter((role) => role.importance === "core").forEach((role) => add(role.topic_id));
  route.topic_ids.forEach(add);
  return selected.slice(0, limit);
}

function compactAgentTrialPayload(payload) {
  const shared = {
    context_version: "2.0-kimi-trial",
    graph_schema_version: mapData.schema_version,
    design_defaults: {
      learner_stage: "高一",
      duration_minutes: 90,
      class_size: 40,
      grouping: "4—5 人小组",
      activity_count: 1,
      trial_mode: "single_session_slice",
      session_deliverable_rule: "当堂完成一个共同中间成果，作为主题最终表现任务的可见证据；不得声称 90 分钟完成整个长期任务。",
    },
    trust_boundary: agentTrustBoundary(),
    licensing: mapData.licensing ? {
      rights_holder: mapData.licensing.rights_holder,
      attribution: mapData.licensing.attribution,
      license_map: mapData.licensing.license_map,
    } : null,
  };
  if (payload.scope.type === "theme") {
    const route = payload.theme;
    const roleById = new Map(route.topic_roles.map((role) => [role.topic_id, role]));
    const selectedIds = keyThemeTopicIds(route);
    const selectedTopics = selectedIds.map((id) => topicById.get(id));
    const selectedSet = new Set(selectedIds);
    const hardPrerequisiteAssumptions = dependencies
      .filter((edge) => edge.strength === "hard" && selectedSet.has(edge.topic_id) && !selectedSet.has(edge.prerequisite_id))
      .map((edge) => ({
        prerequisite_id: edge.prerequisite_id,
        prerequisite_name: topicById.get(edge.prerequisite_id)?.name,
        required_for: edge.topic_id,
      }));
    return {
      ...shared,
      scope: payload.scope,
      theme: {
        id: route.id,
        big_question_id: route.big_question_id,
        title: route.title,
        driving_question: route.question,
        theme_statement: route.theme_learning.theme_statement,
        learning_goals: route.theme_learning.learning_goals,
        final_performance_task: route.theme_learning.final_performance_task,
        subject_contributions: route.theme_learning.subject_contributions.map((contribution) => ({
          subject_id: contribution.subject_id,
          content_area: contribution.content_area,
          contribution: contribution.contribution,
        })),
        entry_topic_ids: route.entry_topic_ids,
      },
      key_topics: selectedTopics.map((topic) => compactTopicForTrial(
        topic,
        roleById.get(topic.id),
        { includeSourceRef: false, includeMappingMetadata: false },
      )),
      key_dependencies: payload.dependencies
        .filter((edge) => selectedSet.has(edge.prerequisite_id) && selectedSet.has(edge.topic_id))
        .map(compactDependencyForTrial),
      hard_prerequisite_assumptions: hardPrerequisiteAssumptions,
      curriculum_refs: compactCurriculumRefs(selectedTopics, {
        maxCoverageUnits: 5,
        includeSubjectSourceRefs: false,
      }),
      selection_note: `为首次试用仅提供 ${selectedTopics.length} 个关键节点；完整 ${route.topic_ids.length} 节点与关系可通过 JSON 或 MCP 读取。`,
    };
  }

  const topic = payload.topic;
  const relatedTopics = payload.related_topics.filter((candidate) => candidate.id !== topic.id);
  const membershipRoutes = routes.filter((route) => route.topic_ids.includes(topic.id));
  const preferredRoute = membershipRoutes.find((route) => route.id === payload.preferred_theme_id) || membershipRoutes[0];
  const themeOptions = preferredRoute
    ? [preferredRoute].map((route) => ({
      id: route.id,
      title: route.title,
      driving_question: route.question,
      final_output: route.theme_learning.final_performance_task.title,
    }))
    : [];
  return {
    ...shared,
    scope: payload.scope,
    focal_topic: compactTopicForTrial(topic),
    direct_prerequisites: payload.direct_prerequisites.map(compactDependencyForTrial),
    direct_unlocks: payload.direct_unlocks.map(compactDependencyForTrial),
    neighbour_topics: relatedTopics.map((candidate) => ({
      id: candidate.id,
      name: candidate.name,
      subject_id: candidate.primary_subject_id,
      stage: candidate.stage,
    })),
    preferred_theme_id: preferredRoute?.id || null,
    theme_options: themeOptions,
    curriculum_refs: compactCurriculumRefs([topic]),
  };
}

async function copyAgentPayload(payload, label) {
  return copyTextContent(JSON.stringify(payload, null, 2), label, `${label} JSON`);
}

function agentTrialText(payload) {
  const compactPayload = compactAgentTrialPayload(payload);
  const scope = payload.scope;
  const subject = scope.type === "theme"
    ? `${payload.theme.id}（${payload.theme.title}）`
    : `${payload.topic.id}（${payload.topic.name}）`;
  const scopeInstruction = scope.type === "theme"
    ? "直接围绕给定主题设计，不再另列备选主题。"
    : "把 focal_topic 当作活动中的一种学科能力，而不是活动标题；使用 preferred_theme_id 对应的唯一现有主题承载它，不再列备选主题。";
  return [
    "你是一名务实的高中跨学科课程设计伙伴。请把下面的 BunnyBook 上下文收成一份教师明天可以讨论或试教的活动草案。",
    `当前对象：${subject}`,
    scopeInstruction,
    "",
    "重要约束：",
    "1. 只设计一个活动，不提供 A/B/C 多套通道，不写长篇节点说明书。",
    "2. 先呈现课堂价值、共同成果和学生行动；稳定 ID、source_ref、review_status 只放在末尾“依据与复核”中。",
    "3. 各学科必须为同一个共同成果贡献不同的概念、证据或方法，不能变成几门课并列的小作业。",
    "4. hard 前置必须进入流程；soft 前置只作为建议脚手架。不要把所有关系都说成课标硬性要求。",
    "5. 只使用上下文已有的主题、节点和课标映射；信息不足时写入“教师需确认”，不得补造 ID、来源或官方要求。",
    "6. 使用默认参数：高一、90 分钟、40 人、4—5 人小组。若我随后补充真实班情，再据此调整；本轮不要先追问。",
    "7. 这是主题最终表现任务的一次 90 分钟单课切片：只完成一个当堂共同中间成果，不得声称完成整个数周项目。hard_prerequisite_assumptions 视为课前已具备或教师需确认，不要伪装成课堂内已完成。",
    "8. 正文控制在 1200—1600 个中文字符，不复述 JSON，不展示思考过程。",
    "",
    "请严格按以下顺序输出：",
    "## 活动概览（活动名、驱动问题、当堂共同成果、真实或模拟受众）",
    "## 学科如何共同工作（每门学科一句：提供什么概念/证据/方法）",
    "## 90 分钟流程（4 个阶段；每阶段写时间、学生行动、教师观察证据）",
    "## 怎样判断学生学会了（3—4 条可观察标准）",
    "## 依据与复核（精简表格，最多 8 行；区分课标来源索引、BunnyBook 项目映射、教师需确认）",
    "最后附一行 BunnyBook 数据署名；不要添加其他章节。",
    "\n<bunnybook_curriculum_context>",
    JSON.stringify(compactPayload),
    "</bunnybook_curriculum_context>",
  ].join("\n");
}

async function copyTextContent(content, label, ariaLabel = label) {
  try {
    if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
    await navigator.clipboard.writeText(content);
    personaStatus.textContent = `${label}已复制。下一步粘贴到你的 AI 助手。`;
    showCopyToast(label);
  } catch (_error) {
    detailPanel.querySelector(".agent-copy-fallback")?.remove();
    const fallback = htmlElement("div", { className: "agent-copy-fallback" }, [
      htmlElement("p", { text: "浏览器限制了自动复制，请从下面手动复制。" }),
      htmlElement("textarea", { attrs: { readonly: "", "aria-label": ariaLabel }, text: content }),
    ]);
    detailPanel.prepend(fallback);
    const textarea = fallback.querySelector("textarea");
    textarea.focus();
    textarea.select();
    personaStatus.textContent = "自动复制受限，已显示可手动复制内容";
  }
}

let copyToastTimer = null;

function showCopyToast(label) {
  let toast = document.getElementById("copy-toast");
  if (!toast) {
    toast = htmlElement("div", {
      className: "copy-toast",
      attrs: { id: "copy-toast", role: "status", "aria-live": "polite" },
    });
    document.body.append(toast);
  }
  toast.textContent = `已复制“${label}” · 下一步粘贴到你的 AI 助手`;
  toast.classList.add("is-visible");
  window.clearTimeout(copyToastTimer);
  copyToastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

function mcpConfigExample() {
  return JSON.stringify({
    mcpServers: {
      "bunnybook-curriculum-source": {
        command: "__BUNNYBOOK_PROJECT_ROOT__/.venv/bin/python",
        args: ["__BUNNYBOOK_PROJECT_ROOT__/agent_runtime/mcp_server.py"],
      },
    },
  }, null, 2);
}

function agentHandoffButton(label, scopeType) {
  const button = htmlElement("button", {
    className: "agent-handoff",
    attrs: { type: "button", "data-agent-scope": scopeType },
  }, [
    htmlElement("strong", { text: `${label} →` }),
    htmlElement("small", { text: "保留当前选择，先预览并复制使用包；长期使用再配置本地 MCP。" }),
  ]);
  button.addEventListener("click", () => {
    setPersona("agent");
    scrollDetailOnMobile();
  });
  return button;
}

function agentResourceActions(payload, label) {
  const trialButton = htmlElement("button", {
    className: "agent-action primary",
    text: "复制一份可直接生成活动的提示",
    attrs: { type: "button" },
  });
  trialButton.addEventListener("click", () => copyTextContent(agentTrialText(payload), `${label}试用包`, "Agent 试用包"));
  const jsonButton = htmlElement("button", {
    className: "agent-action",
    text: "复制完整证据 JSON",
    attrs: { type: "button" },
  });
  jsonButton.addEventListener("click", () => copyAgentPayload(payload, `${label} JSON`));
  return htmlElement("div", { className: "agent-actions" }, [
    trialButton,
    htmlElement("p", { className: "action-helper", text: "默认高一 · 90 分钟 · 一个共同成果。粘贴后会先生成可上课的草案，ID 与审阅状态放在末尾。请勿加入可识别的学生信息、健康信息或个体评价数据。" }),
    jsonButton,
    localMcpDisclosure(),
    developerResourceDisclosure(),
  ]);
}

function localMcpDisclosure() {
  return htmlElement("details", { className: "developer-disclosure mcp-steps" }, [
    htmlElement("summary", { text: "长期使用：本地 MCP 需要什么" }),
    htmlElement("div", { className: "mcp-steps-body" }, [
      htmlElement("p", { text: "当前 MCP 已在源工作区完成协议验证，但公开安装包和远程端点尚未发布。" }),
      htmlElement("ol", {}, [
        htmlElement("li", { text: "保留完整 BunnyBook 项目，并安装 requirements-mcp.txt。" }),
        htmlElement("li", { text: "把配置示例中的 __BUNNYBOOK_PROJECT_ROOT__ 替换为本机项目目录。" }),
        htmlElement("li", { text: "在支持 MCP 的本地 Agent 中加载配置，再调用 list_themes 验证。" }),
      ]),
      htmlElement("div", { className: "inline-resource-links" }, [
        htmlElement("a", { text: "查看完整说明", attrs: { href: "mcp-guide.md", target: "_blank", rel: "noreferrer" } }),
        htmlElement("a", { text: "打开配置示例", attrs: { href: "mcp-config.example.json", target: "_blank", rel: "noreferrer" } }),
      ]),
    ]),
  ]);
}

function developerResourceDisclosure() {
  return htmlElement("details", { className: "developer-disclosure resource-disclosure" }, [
    htmlElement("summary", { text: "开发者资源" }),
    htmlElement("div", { className: "agent-actions" }, [
      htmlElement("a", { className: "agent-action", text: "MCP 配置示例", attrs: { href: "mcp-config.example.json", target: "_blank", rel: "noreferrer" } }),
      htmlElement("a", { className: "agent-action", text: "Agent 清单", attrs: { href: "agent-manifest.json", target: "_blank", rel: "noreferrer" } }),
      htmlElement("a", { className: "agent-action", text: "完整本体 JSON", attrs: { href: "learning-map.json", target: "_blank", rel: "noreferrer" } }),
      htmlElement("a", { className: "agent-action", text: "启动提示", attrs: { href: "agent-prompt.md", target: "_blank", rel: "noreferrer" } }),
      htmlElement("a", { className: "agent-action", text: "数据版本与使用边界", attrs: { href: "data-notice.md", target: "_blank", rel: "noreferrer" } }),
    ]),
  ]);
}

function agentConnectionPanel() {
  const copyConfigButton = htmlElement("button", {
    className: "agent-action primary",
    text: "复制本地 MCP 配置模板",
    attrs: { type: "button" },
  });
  copyConfigButton.addEventListener("click", () => copyTextContent(mcpConfigExample(), "MCP 配置", "MCP 配置 JSON"));
  return htmlElement("section", { className: "agent-integration" }, [
    htmlElement("div", { className: "integration-heading" }, [
      htmlElement("div", {}, [
        htmlElement("p", { className: "detail-kicker", text: "长期使用" }),
        htmlElement("h3", { text: "本地 MCP 已验证 · 需要安装" }),
      ]),
      htmlElement("span", { className: "status-chip is-config", text: "需配置" }),
    ]),
    htmlElement("p", { text: "本地 MCP 直接读取同一份 learning-map.json，不复制本体、不调用模型、不写回审阅状态。它需要完整项目与 Python 环境；公开网页本身不会运行这个服务。" }),
    htmlElement("div", { className: "agent-actions" }, [
      copyConfigButton,
      htmlElement("a", { className: "agent-action", text: "打开接入说明", attrs: { href: "mcp-guide.md", target: "_blank", rel: "noreferrer" } }),
      htmlElement("a", { className: "agent-action", text: "打开配置示例", attrs: { href: "mcp-config.example.json", target: "_blank", rel: "noreferrer" } }),
    ]),
    htmlElement("div", { className: "integration-grid" }, [
      htmlElement("div", { className: "connection-card" }, [
        htmlElement("span", { className: "status-chip is-ready", text: "当前可用" }),
        htmlElement("strong", { text: "Agent 使用包 · 无需安装" }),
        htmlElement("p", { text: "复制当前主题或节点，直接粘贴到已有 Agent，先验证它是否改善你的活动设计。" }),
      ]),
      htmlElement("div", { className: "connection-card" }, [
        htmlElement("span", { className: "status-chip is-config", text: "本地需配置" }),
        htmlElement("strong", { text: "只读 MCP · 长期调用" }),
        htmlElement("p", { text: "适合已经使用支持 MCP 的本地 Agent，并愿意安装项目运行环境的教师或开发者。" }),
      ]),
      htmlElement("div", { className: "connection-card" }, [
        htmlElement("span", { className: "status-chip is-config", text: "本地测试" }),
        htmlElement("strong", { text: "BunnyBook for Kimi Code" }),
        htmlElement("p", { text: "已准备第三方 Custom Plugin 本地测试包；尚未成为 Kimi 官方插件或进入插件市场，远程 MCP 也尚未开放。" }),
      ]),
    ]),
  ]);
}

function agentCapabilitiesPanel() {
  const tools = [
    ["get_source_overview", "读取版本、语料范围、审阅状态与许可边界"],
    ["list_themes", "发现适合教学目标的跨学科主题"],
    ["search_curriculum", "检索主题、节点、素养与课标来源单元"],
    ["get_theme_context", "读取共同任务、成员节点、主题内关系和学科贡献"],
    ["get_topic_context", "读取节点邻接、课标映射与来源状态"],
    ["trace_learning_path", "保持方向追踪前置或后继关系"],
    ["build_activity_context", "组装供宿主 Agent 设计活动的可追溯上下文"],
    ["validate_references", "检查 Agent 草案中的稳定 ID 是否真实存在"],
  ];
  return htmlElement("section", { className: "agent-capabilities" }, [
    htmlElement("h3", { text: "你的 Agent 可以调用" }),
    htmlElement("div", { className: "tool-list" }, tools.map(([name, description]) => htmlElement("div", { className: "tool-row" }, [
      htmlElement("code", { text: name }),
      htmlElement("span", { text: description }),
    ]))),
  ]);
}

function agentPromptExample(route = routeById.get(FEATURED_THEME_ID)) {
  return `请基于 ${route.id}（${route.title}）设计一个高一、90 分钟的跨学科活动：只给一个共同成果，先写课堂流程，再把使用的 ID、课标来源和待教师复核判断放在末尾。`;
}

function featuredThemeCard({ agentMode = false } = {}) {
  const route = routeById.get(FEATURED_THEME_ID);
  const finalTask = route.theme_learning.final_performance_task;
  const subjectCount = routeCurriculumSubjects(route).length;
  const button = htmlElement("button", {
    className: "featured-theme-action",
    text: agentMode ? "复制一份可直接生成活动的提示" : "查看这个主题如何协同",
    attrs: { type: "button" },
  });
  if (agentMode) {
    button.addEventListener("click", () => copyTextContent(
      agentTrialText(agentThemeContext(route)),
      "旗舰主题试用包",
      "Agent 试用包",
    ));
  } else {
    button.addEventListener("click", () => openRoute(route.id));
  }
  return htmlElement("section", { className: "featured-theme-card" }, [
    htmlElement("p", { className: "detail-kicker", text: "1 分钟体验 · 旗舰主题" }),
    htmlElement("h3", { text: route.title }),
    htmlElement("p", { className: "featured-question", text: route.question }),
    htmlElement("div", { className: "proof-pills" }, [
      htmlElement("span", { text: `${route.topic_ids.length} 个节点` }),
      htmlElement("span", { text: `${subjectCount} 门学科` }),
      htmlElement("span", { text: "1 个共同任务" }),
    ]),
    htmlElement("div", { className: "featured-output" }, [
      htmlElement("span", { text: "Agent 将获得" }),
      htmlElement("strong", { text: finalTask.title }),
      htmlElement("p", { text: "主题结构 · 学科分工 · 学习关系 · 课标证据 · 人工复核边界" }),
    ]),
    htmlElement("div", { className: "featured-steps" }, [
      htmlElement("span", { text: "活动结构预览" }),
      htmlElement("div", {}, [htmlElement("b", { text: "01" }), htmlElement("p", { text: "界定 AI 决策链与责任问题" })]),
      htmlElement("div", {}, [htmlElement("b", { text: "02" }), htmlElement("p", { text: "审查数据、误判与群体影响" })]),
      htmlElement("div", {}, [htmlElement("b", { text: "03" }), htmlElement("p", { text: "形成使用边界建议并接受质询" })]),
      htmlElement("small", { text: "示意结构；完整草案由宿主 Agent 生成，仍需教师复核。" }),
    ]),
    button,
  ]);
}

function teacherComparisonPanel() {
  return htmlElement("section", { className: "comparison-panel", attrs: { "aria-label": "普通 AI 与接入 BunnyBook 的差异" } }, [
    htmlElement("div", { className: "comparison-card is-generic" }, [
      htmlElement("span", { text: "普通 AI 容易" }),
      htmlElement("strong", { text: "先列活动，再补依据" }),
      htmlElement("p", { text: "看似跨学科，实际上常是几门课各做一个小作业。" }),
    ]),
    htmlElement("div", { className: "comparison-arrow", text: "→", attrs: { "aria-hidden": "true" } }),
    htmlElement("div", { className: "comparison-card is-grounded" }, [
      htmlElement("span", { text: "接入 BunnyBook 后" }),
      htmlElement("strong", { text: "先定共同任务，再组织证据链" }),
      htmlElement("p", { text: "学科贡献、节点关系和课标来源可以逐条回到原图核对。" }),
    ]),
  ]);
}

function reviewProofPanel() {
  return htmlElement("section", { className: "review-proof" }, [
    htmlElement("div", {}, [
      htmlElement("strong", { text: "已经核对" }),
      htmlElement("p", { text: "12 门课标科目、51 项核心素养名称及其本地来源页码。" }),
    ]),
    htmlElement("div", {}, [
      htmlElement("strong", { text: "待教师复核" }),
      htmlElement("p", { text: "主题、节点颗粒度、先修关系和具体课标映射。" }),
    ]),
  ]);
}

function developerDisclosure(label, sections) {
  return htmlElement("details", { className: "developer-disclosure" }, [
    htmlElement("summary", { text: label }),
    ...sections.map(([title, value]) => htmlElement("section", { className: "agent-object-section" }, [
      htmlElement("h3", { text: title }),
      htmlElement("pre", { text: JSON.stringify(value, null, 2) }),
    ])),
  ]);
}

function renderAgentRouteDetail(route) {
  const close = htmlElement("button", { className: "detail-back", text: "← 返回 theme 列表", attrs: { type: "button" } });
  close.addEventListener("click", () => selectRoute(route.id));
  const summary = {
    id: route.id,
    big_question_id: route.big_question_id,
    secondary_big_question_id: route.secondary_big_question_id,
    entry_topic_ids: route.entry_topic_ids,
    topic_count: route.topic_ids.length,
    review_status: mapData.review_status,
  };
  detailPanel.replaceChildren(
    close,
    htmlElement("p", { className: "detail-kicker", text: "当前 Agent 作用域 · Theme" }),
    htmlElement("h2", { text: route.title }),
    htmlElement("div", { className: "topic-meta" }, [
      createMetaChip(route.id, "agent-id"),
      createMetaChip(route.big_question_id),
      createMetaChip(mapData.review_status),
    ]),
    htmlElement("div", { className: "current-scope" }, [
      htmlElement("strong", { text: `将提供 ${route.topic_ids.length} 个节点、主题内关系与课标证据` }),
      htmlElement("p", { text: route.question }),
    ]),
    agentResourceActions(agentThemeContext(route), "主题"),
    htmlElement("section", { className: "agent-prompt-example" }, [
      htmlElement("span", { text: "可以这样交给 Agent" }),
      htmlElement("p", { text: agentPromptExample(route) }),
    ]),
    developerDisclosure("查看开发者字段与原始对象", [
      ["object summary", summary],
      ["topic_ids", route.topic_ids],
      ["subject_contributions", route.theme_learning.subject_contributions],
    ]),
    htmlElement("p", { className: "empty-proof", text: agentTrustBoundary().prohibited_claim }),
  );
  detailPanel.scrollTop = 0;
}

function renderRouteDetail(route) {
  if (state.persona === "agent") return renderAgentRouteDetail(route);
  return renderTeacherRouteDetail(route);
}

function renderTeacherDefaultDetail() {
  const wrapper = htmlElement("div", { className: "detail-empty" }, [
    htmlElement("p", { className: "detail-kicker", text: "为什么不是普通 AI 备课" }),
    htmlElement("h2", { text: "一个真实问题，一条可核对的设计链。" }),
    htmlElement("p", { text: "BunnyBook 不替教师生成一份看似完整的教案，而是先把共同任务、学科贡献、学习关系和课程依据交给教师已有的 Agent。" }),
  ]);
  const coverageButton = htmlElement("button", { className: "coverage-entry", attrs: { type: "button" } }, [
    htmlElement("strong", { text: "查看课标依据与项目映射" }),
    htmlElement("small", { text: `${curriculumSubjects.length} 门课标 · ${competencies.length} 项核心素养 · ${coverageUnits.length} 个来源单元` }),
  ]);
  coverageButton.addEventListener("click", showCoverageView);
  wrapper.append(
    teacherComparisonPanel(),
    featuredThemeCard(),
    reviewProofPanel(),
    coverageButton,
    htmlElement("p", {
      className: "empty-proof",
      text: "可追溯不等于已经专家审定。所有项目映射都保留审阅状态，生成结果仍需教师判断。",
    }),
  );
  detailPanel.replaceChildren(wrapper);
}

function renderAgentDefaultDetail() {
  const manifestSummary = {
    contract_version: "1.2",
    graph_schema_version: mapData.schema_version,
    themes: routes.length,
    topics: topics.length,
    dependencies: dependencies.length,
    curriculum_subjects: curriculumSubjects.length,
    competencies: competencies.length,
    coverage_units: coverageUnits.length,
    dependency_direction: "prerequisite_id -> topic_id",
    access: "read_only",
    site_mode: "static_context_only",
    remote_mcp_available: false,
  };
  detailPanel.replaceChildren(
    htmlElement("p", { className: "detail-kicker", text: "两种使用方式" }),
    htmlElement("h2", { text: "先用一个主题试用，再决定是否长期接入。" }),
    htmlElement("p", { className: "topic-description", text: "零安装使用包适合第一次体验；本地只读 MCP 适合已经验证价值、需要持续调用的教师或开发者。" }),
    htmlElement("div", { className: "current-scope is-empty" }, [
      htmlElement("strong", { text: "当前作用域：完整课程信息源" }),
      htmlElement("p", { text: "先选择主题或节点，可以得到更小、更相关、更容易复核的 Agent 使用包。" }),
    ]),
    featuredThemeCard({ agentMode: true }),
    agentConnectionPanel(),
    agentCapabilitiesPanel(),
    htmlElement("section", { className: "agent-prompt-example" }, [
      htmlElement("span", { text: "使用示例" }),
      htmlElement("p", { text: agentPromptExample() }),
    ]),
    developerDisclosure("查看数据契约与开发者资源", [
      ["contract summary", manifestSummary],
    ]),
    developerResourceDisclosure(),
    htmlElement("section", { className: "agent-boundary" }, [
      htmlElement("strong", { text: "生成结果仍需教师复核" }),
      htmlElement("p", { text: curriculumAlignment.disclaimer }),
      htmlElement("p", { text: agentTrustBoundary().prohibited_claim }),
    ]),
  );
}

function renderDefaultDetail() {
  if (state.persona === "agent") return renderAgentDefaultDetail();
  return renderTeacherDefaultDetail();
}

function renderAgentTopicDetail(topic) {
  const prerequisites = directPrerequisites(topic.id);
  const unlocks = directUnlocks(topic.id);
  const membership = routes.filter((route) => route.topic_ids.includes(topic.id));
  const back = htmlElement("button", {
    className: "detail-back",
    text: state.history.length ? "← 返回上一个节点" : "← 返回图谱概览",
    attrs: { type: "button" },
  });
  back.addEventListener("click", goBack);
  const summary = {
    id: topic.id,
    node_kind: topic.node_kind,
    primary_subject_id: topic.primary_subject_id,
    stage: topic.stage,
    type: topic.type,
    curriculum_subject_ids: topic.curriculum_subject_ids,
    competency_ids: topic.competency_ids,
    source_anchor_ids: topic.source_anchor_ids,
    evidence_level: topic.evidence_level,
    review_status: topic.review_status,
    alignment_status: topic.alignment_status,
    theme_ids: membership.map((route) => route.id),
  };
  detailPanel.replaceChildren(
    back,
    htmlElement("p", { className: "detail-kicker", text: "当前 Agent 作用域 · Topic" }),
    htmlElement("h2", { text: topic.name }),
    htmlElement("div", { className: "topic-meta" }, [
      createMetaChip(topic.id, "agent-id"),
      createMetaChip(topic.node_kind),
      createMetaChip(topic.type),
      createMetaChip(`stage=${topic.stage}`),
      createMetaChip(topic.review_status),
    ]),
    htmlElement("div", { className: "current-scope" }, [
      htmlElement("strong", { text: `将提供节点、${prerequisites.length} 个直接前置、${unlocks.length} 个直接后继与课标证据` }),
      htmlElement("p", { text: topic.description }),
    ]),
    agentResourceActions(agentTopicContext(topic, state.activeRouteId), "节点"),
    htmlElement("section", { className: "agent-prompt-example" }, [
      htmlElement("span", { text: "可以这样交给 Agent" }),
      htmlElement("p", { text: `请把 ${topic.id} 作为活动设计中的关键节点，先调用 get_topic_context 与 trace_learning_path；保留关系理由、课标来源和 review_status。` }),
    ]),
    htmlElement("section", { className: "detail-section" }, [
      htmlElement("h3", {}, [htmlElement("span", { text: "incoming prerequisites" }), htmlElement("span", { text: String(prerequisites.length) })]),
      prerequisites.length
        ? htmlElement("div", { className: "relation-list" }, prerequisites.map((dependency) => relationButton(dependency, "prerequisite")))
        : htmlElement("p", { className: "no-relations", text: "[]" }),
    ]),
    htmlElement("section", { className: "detail-section" }, [
      htmlElement("h3", {}, [htmlElement("span", { text: "outgoing unlocks" }), htmlElement("span", { text: String(unlocks.length) })]),
      unlocks.length
        ? htmlElement("div", { className: "relation-list" }, unlocks.map((dependency) => relationButton(dependency, "unlock")))
        : htmlElement("p", { className: "no-relations", text: "[]" }),
    ]),
    developerDisclosure("查看节点对象与 curriculum_links", [
      ["object summary", summary],
      ["curriculum_links", topic.curriculum_links],
    ]),
    htmlElement("section", { className: "source-block agent-source" }, [
      htmlElement("h3", { text: "source and review boundary" }),
      htmlElement("p", {}, [htmlElement("strong", { text: "source_ref: " }), document.createTextNode(topic.source_ref)]),
      htmlElement("p", {}, [htmlElement("strong", { text: "anchors: " }), document.createTextNode(topic.source_anchor_ids.join(" · "))]),
      htmlElement("p", { className: "review-state", text: `${topic.evidence_level} · ${topic.review_status} · ${topic.alignment_status}` }),
      htmlElement("p", { text: agentTrustBoundary().prohibited_claim }),
    ]),
  );
  detailPanel.scrollTop = 0;
}

function renderDetail() {
  if (!state.selectedId) {
    if (state.activeRouteId) renderRouteDetail(routeById.get(state.activeRouteId));
    else renderDefaultDetail();
    return;
  }
  const topic = topicById.get(state.selectedId);
  if (state.persona === "agent") return renderAgentTopicDetail(topic);
  const subject = subjectById.get(topic.subject);
  const prerequisites = directPrerequisites(topic.id);
  const unlocks = directUnlocks(topic.id);
  const ancestorCount = getAncestors(topic.id).size;
  const membership = routes.filter((route) => route.topic_ids.includes(topic.id));

  const back = htmlElement("button", {
    className: "detail-back",
    text: state.history.length ? "← 返回上一个节点" : "← 返回地图概览",
    attrs: { type: "button" },
  });
  back.addEventListener("click", goBack);

  const subjectChip = createMetaChip(subject.label, "subject");
  subjectChip.prepend(htmlElement("span", { className: "meta-chip-dot", attrs: { "aria-hidden": "true" } }));
  subjectChip.style.setProperty("--subject-color", subject.color);
  const meta = htmlElement("div", { className: "topic-meta" }, [
    subjectChip,
    createMetaChip(topic.domain),
    createMetaChip(stageLabel(topic)),
    createMetaChip(topic.type),
  ]);

  const assessment = htmlElement("div", { className: "assessment-callout" }, [
    htmlElement("span", { text: personaConfig().terms.diagnosticPrompt }),
    htmlElement("p", { text: topic.assessment_prompt }),
  ]);

  const membershipItems = membership.flatMap((route) => {
    const role = route.topic_roles.find((candidate) => candidate.topic_id === topic.id);
    const phase = THEME_PHASE_LABELS[role?.phase] || stageLabel(topic);
    const importance = role?.importance === "entry" ? "入口节点" : role?.importance === "core" ? "核心节点" : "支持节点";
    const items = [
      htmlElement("div", { className: "topic-route-role" }, [
        htmlElement("strong", { text: route.title }),
        htmlElement("p", { text: `${phase} · ${importance}。本节点为共同任务提供${topic.domain}方面的概念、证据或方法。` }),
      ]),
    ];
    if (route.material_links?.teacher_package) {
      items.push(htmlElement("a", { className: "route-link", text: `${route.title} · 教师包 →`, attrs: { href: route.material_links.teacher_package } }));
    }
    if (route.material_links?.student_worksheet) {
      items.push(htmlElement("a", { className: "route-link", text: `${route.title} · 学生工作纸 →`, attrs: { href: route.material_links.student_worksheet } }));
    }
    return items;
  });
  const roleSection = htmlElement("section", { className: "detail-section node-role-section" }, [
    htmlElement("h3", {}, [
      htmlElement("span", { text: personaConfig().terms.nodeRole }),
      htmlElement("span", { text: `${membership.length} 个主题` }),
    ]),
    membershipItems.length
      ? htmlElement("div", { className: "route-membership" }, membershipItems)
      : htmlElement("p", { className: "no-relations", text: "当前节点尚未加入跨学科主题。" }),
  ]);

  const mastery = htmlElement("section", { className: "detail-section" }, [
    htmlElement("h3", {}, [htmlElement("span", { text: personaConfig().terms.masteryEvidence })]),
    htmlElement("ul", { className: "mastery-list" }, topic.mastery_evidence.map((item) => htmlElement("li", { text: item }))),
  ]);

  const prereqSection = htmlElement("section", { className: "detail-section" }, [
    htmlElement("h3", {}, [
      htmlElement("span", { text: personaConfig().terms.prerequisite }),
      htmlElement("span", { text: `${prerequisites.length} 个直接 · ${ancestorCount} 个全部` }),
    ]),
    prerequisites.length
      ? htmlElement("div", { className: "relation-list" }, prerequisites.map((dependency) => relationButton(dependency, "prerequisite")))
      : htmlElement("p", { className: "no-relations", text: "这是当前 Alpha 结构中的基础入口节点。" }),
  ]);

  const unlockSection = htmlElement("section", { className: "detail-section" }, [
    htmlElement("h3", {}, [
      htmlElement("span", { text: personaConfig().terms.unlock }),
      htmlElement("span", { text: `${unlocks.length} 个直接` }),
    ]),
    unlocks.length
      ? htmlElement("div", { className: "relation-list" }, unlocks.map((dependency) => relationButton(dependency, "unlock")))
      : htmlElement("p", { className: "no-relations", text: "这是当前 Alpha 结构中的阶段性终点。" }),
  ]);

  const source = htmlElement("section", { className: "detail-section source-block" }, [
    htmlElement("h3", {}, [htmlElement("span", { text: personaConfig().terms.provenance })]),
    htmlElement("p", {}, [htmlElement("strong", { text: "课标回溯：" }), document.createTextNode(topic.source_ref)]),
    htmlElement("p", {}, [htmlElement("strong", { text: "锚点：" }), document.createTextNode(topic.source_anchor_ids.join(" · "))]),
    htmlElement("p", { className: "review-state", text: `${topic.evidence_level} · ${topic.review_status} · ${topic.alignment_status}` }),
  ]);

  const parts = [
    back,
    meta,
    htmlElement("h2", { text: topic.name }),
    htmlElement("p", { className: "topic-description", text: topic.description }),
    agentHandoffButton("把这个节点交给 Agent", "topic"),
    roleSection,
    assessment,
    mastery,
    renderCurriculumAlignment(topic),
    prereqSection,
    unlockSection,
  ];
  parts.push(source);
  detailPanel.replaceChildren(...parts);
  detailPanel.scrollTop = 0;
}

function renderSearchResults() {
  const query = searchInput.value.trim().toLocaleLowerCase("zh-CN");
  state.searchQuery = query;
  if (!query) {
    searchResults.hidden = true;
    searchResults.replaceChildren();
    if (state.viewMode === "map") applyFocusState();
    return;
  }
  const matches = topics.filter((topic) => topicSearchHaystack(topic).includes(query)).slice(0, 12);
  if (!matches.length) {
    const emptyText = state.persona === "agent"
        ? "No topic matched this name or stable ID."
        : "没有找到匹配节点。试试“数据”“公平”或“复核”。";
    searchResults.replaceChildren(htmlElement("p", { className: "empty-search", text: emptyText }));
  } else {
    searchResults.replaceChildren(...matches.map((topic) => {
      const subject = subjectById.get(topic.subject);
      const resultTitle = state.persona === "agent" ? `${topic.id} · ${topic.name}` : topic.name;
      const resultMeta = state.persona === "agent"
          ? `${topic.type} · ${topic.review_status}`
          : `${curriculumSubjectLabels(topic)} · ${stageLabel(topic)}`;
      const button = htmlElement("button", { className: "search-result", attrs: { type: "button" } }, [
        htmlElement("span", { className: "result-dot", attrs: { "aria-hidden": "true" } }),
        htmlElement("span", {}, [htmlElement("strong", { text: resultTitle })]),
        htmlElement("small", { text: resultMeta }),
      ]);
      button.style.setProperty("--subject-color", subject.color);
      button.addEventListener("click", () => {
        searchResults.hidden = true;
        searchInput.value = topic.name;
        state.searchQuery = topic.name.toLocaleLowerCase("zh-CN");
        selectTopic(topic.id, true);
      });
      return button;
    }));
  }
  searchResults.hidden = false;
  if (state.viewMode === "map") applyFocusState();
}

function renderMapCounts() {
  const visibleTopics = topics.filter((topic) => state.visibleSubjects.has(topic.subject)).length;
  const visibleEdges = dependencies.filter((dependency) => visibleBySubject(dependency.prerequisite_id) && visibleBySubject(dependency.topic_id)).length;
  const allSubjectsVisible = state.visibleSubjects.size === subjects.length;
  if (state.persona === "agent") {
    document.getElementById("map-counts").textContent = allSubjectsVisible
      ? `全量 · ${topics.length} topics · ${dependencies.length} edges`
      : `当前可见 · ${visibleTopics}/${topics.length} topics · ${visibleEdges}/${dependencies.length} edges`;
    return;
  }
  document.getElementById("map-counts").textContent = allSubjectsVisible
    ? `总计 · ${routes.length} 主题 · ${topics.length} 节点 · ${dependencies.length} 关系`
    : `当前可见 · ${visibleTopics}/${topics.length} 节点 · ${visibleEdges}/${dependencies.length} 关系`;
}

function applyTransform() {
  viewport.setAttribute("transform", `translate(${state.transform.x} ${state.transform.y}) scale(${state.transform.k})`);
}

function resetView() {
  state.transform = { x: 0, y: 0, k: 1 };
  applyTransform();
}

function focusTopic(topicId) {
  const position = positions.get(topicId);
  const k = Math.max(state.transform.k, 1.12);
  state.transform = {
    x: MAP_WIDTH * 0.5 - position.x * k,
    y: MAP_HEIGHT * 0.5 - position.y * k,
    k,
  };
  applyTransform();
}

function fitToTopics(topicIds) {
  const points = topicIds.map((id) => positions.get(id)).filter(Boolean);
  if (!points.length) return resetView();
  const xs = points.map((point) => point.x);
  const ys = points.map((point) => point.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const width = Math.max(180, maxX - minX + 220);
  const height = Math.max(180, maxY - minY + 180);
  const k = Math.min(1.45, MAP_WIDTH / width, MAP_HEIGHT / height);
  state.transform = {
    x: MAP_WIDTH / 2 - ((minX + maxX) / 2) * k,
    y: MAP_HEIGHT / 2 - ((minY + maxY) / 2) * k,
    k,
  };
  applyTransform();
}

function zoomAt(factor, center = { x: MAP_WIDTH / 2, y: MAP_HEIGHT / 2 }) {
  const old = state.transform;
  const nextK = Math.max(0.55, Math.min(2.8, old.k * factor));
  const worldX = (center.x - old.x) / old.k;
  const worldY = (center.y - old.y) / old.k;
  state.transform = {
    x: center.x - worldX * nextK,
    y: center.y - worldY * nextK,
    k: nextK,
  };
  applyTransform();
}

function setupPanZoom() {
  let drag = null;
  svg.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    drag = { clientX: event.clientX, clientY: event.clientY, x: state.transform.x, y: state.transform.y };
    svg.setPointerCapture(event.pointerId);
    svg.classList.add("is-dragging");
  });
  svg.addEventListener("pointermove", (event) => {
    if (!drag) return;
    const scaleX = MAP_WIDTH / svg.clientWidth;
    const scaleY = MAP_HEIGHT / svg.clientHeight;
    state.transform.x = drag.x + (event.clientX - drag.clientX) * scaleX;
    state.transform.y = drag.y + (event.clientY - drag.clientY) * scaleY;
    applyTransform();
  });
  const endDrag = (event) => {
    if (!drag) return;
    drag = null;
    if (svg.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId);
    svg.classList.remove("is-dragging");
  };
  svg.addEventListener("pointerup", endDrag);
  svg.addEventListener("pointercancel", endDrag);
  svg.addEventListener("wheel", (event) => {
    event.preventDefault();
    const rect = svg.getBoundingClientRect();
    const center = {
      x: (event.clientX - rect.left) * (MAP_WIDTH / rect.width),
      y: (event.clientY - rect.top) * (MAP_HEIGHT / rect.height),
    };
    zoomAt(event.deltaY < 0 ? 1.12 : 0.89, center);
  }, { passive: false });
  svg.addEventListener("dblclick", resetView);
}

function setupControls() {
  document.getElementById("zoom-in").addEventListener("click", () => zoomAt(1.18));
  document.getElementById("zoom-out").addEventListener("click", () => zoomAt(0.84));
  document.getElementById("reset-view").addEventListener("click", resetView);
  clearFocusButton.addEventListener("click", clearFocus);
  agentEntryToggle.addEventListener("click", () => setPersona("agent"));
  featuredTrialButton.addEventListener("click", () => openRoute(FEATURED_THEME_ID));
  browseAllThemesButton.addEventListener("click", showAllThemesAndFocus);
  coverageToggle.addEventListener("click", () => {
    if (state.viewMode === "coverage") showMapView();
    else showCoverageView();
  });
  document.getElementById("show-all").addEventListener("click", showAllThemes);
  document.getElementById("toggle-subjects").addEventListener("click", () => {
    if (state.visibleSubjects.size === subjects.length) state.visibleSubjects.clear();
    else state.visibleSubjects = new Set(subjects.map((subject) => subject.id));
    renderSubjectFilters();
    applyFocusState();
  });
  searchInput.addEventListener("input", renderSearchResults);
  searchInput.addEventListener("focus", renderSearchResults);
  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".search-wrap") && !event.target.closest(".persona-bar")) searchResults.hidden = true;
  });
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (event.key === "Escape") {
      searchResults.hidden = true;
      if (state.selectedId) clearFocus();
    }
  });
}

function initialize() {
  applyPersonaChrome();
  buildPositions();
  buildStageLayer();
  buildEdges();
  buildNodes();
  renderSubjectFilters();
  renderRoutes();
  renderDetail();
  applyFocusState();
  applyTransform();
  setupPanZoom();
  setupControls();
  setupPersonaControls();
  renderTrustLine();
  const themeId = initialThemeId();
  if (themeId) openRoute(themeId);
}

initialize();
