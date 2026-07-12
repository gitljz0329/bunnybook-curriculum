// SPDX-License-Identifier: Apache-2.0

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const ROOT = path.resolve(__dirname, "..");
const mapData = JSON.parse(fs.readFileSync(path.join(ROOT, "mvp", "learning-map.json"), "utf8"));
const topics = mapData.topics;
const dependencies = mapData.dependencies;
const routes = mapData.routes;
const curriculumAlignment = mapData.curriculum_alignment;
const curriculumSubjects = curriculumAlignment.curriculum_subjects;
const competencies = curriculumAlignment.competencies;
const coverageUnits = curriculumAlignment.coverage_units;
const topicById = new Map(topics.map((topic) => [topic.id, topic]));
const directPrerequisites = (topicId) => dependencies.filter((edge) => edge.topic_id === topicId);
const directUnlocks = (topicId) => dependencies.filter((edge) => edge.prerequisite_id === topicId);
Object.assign(globalThis, {
  mapData,
  topics,
  dependencies,
  routes,
  curriculumAlignment,
  curriculumSubjects,
  competencies,
  coverageUnits,
  topicById,
  directPrerequisites,
  directUnlocks,
});

const source = fs.readFileSync(path.join(ROOT, "mvp_src", "app.js"), "utf8");
const start = source.indexOf("function curriculumRefsForTopics");
const end = source.indexOf("async function copyTextContent");
if (start < 0 || end <= start) throw new Error("Cannot locate the Agent trial functions in mvp_src/app.js");
vm.runInThisContext(source.slice(start, end), { filename: "mvp_src/app.js#agent-trial" });

const errors = [];
const themeLengths = [];
const topicLengths = [];
const requiredMarkers = [
  "只设计一个活动",
  "90 分钟单课切片",
  "90 分钟流程",
  "不复述 JSON",
  "依据与复核",
  "最后附一行 BunnyBook 数据署名",
  "<bunnybook_curriculum_context>",
];

function contextFromPrompt(prompt) {
  const match = prompt.match(/<bunnybook_curriculum_context>\n([^\n]+)\n<\/bunnybook_curriculum_context>/);
  if (!match) throw new Error("Prompt does not contain one-line compact context JSON");
  return JSON.parse(match[1]);
}

for (const route of routes) {
  const prompt = agentTrialText(agentThemeContext(route));
  themeLengths.push({ id: route.id, characters: prompt.length });
  if (prompt.length >= 10000) errors.push(`theme prompt is too large: ${route.id} = ${prompt.length}`);
  for (const marker of requiredMarkers) {
    if (!prompt.includes(marker)) errors.push(`theme prompt ${route.id} is missing: ${marker}`);
  }
  const context = contextFromPrompt(prompt);
  if (context.context_version !== "2.0-kimi-trial") errors.push(`theme ${route.id} has the wrong trial context version`);
  if (!Array.isArray(context.key_topics) || context.key_topics.length > 4) errors.push(`theme ${route.id} must contain at most 4 key topics`);
  if (context.topics || context.dependencies) errors.push(`theme ${route.id} leaks the full graph payload into the default trial`);
  if (context.design_defaults?.activity_count !== 1) errors.push(`theme ${route.id} must default to one activity`);
  if (context.design_defaults?.trial_mode !== "single_session_slice") errors.push(`theme ${route.id} must be a single-session slice`);
  if ((context.curriculum_refs?.coverage_units || []).length > 5) errors.push(`theme ${route.id} exposes too many coverage units`);
  if (!context.licensing?.attribution) errors.push(`theme ${route.id} lost the attribution contract`);
  const selectedIds = new Set((context.key_topics || []).map((topic) => topic.id));
  const hiddenHard = dependencies
    .filter((edge) => edge.strength === "hard" && selectedIds.has(edge.topic_id) && !selectedIds.has(edge.prerequisite_id))
    .map((edge) => `${edge.prerequisite_id}->${edge.topic_id}`)
    .sort();
  const declaredHard = (context.hard_prerequisite_assumptions || [])
    .map((edge) => `${edge.prerequisite_id}->${edge.required_for}`)
    .sort();
  if (JSON.stringify(hiddenHard) !== JSON.stringify(declaredHard)) {
    errors.push(`theme ${route.id} does not declare every omitted hard prerequisite`);
  }
}

for (const topic of topics) {
  const prompt = agentTrialText(agentTopicContext(topic));
  topicLengths.push({ id: topic.id, characters: prompt.length });
  if (prompt.length >= 8000) errors.push(`topic prompt is too large: ${topic.id} = ${prompt.length}`);
  for (const marker of requiredMarkers) {
    if (!prompt.includes(marker)) errors.push(`topic prompt ${topic.id} is missing: ${marker}`);
  }
  if (!prompt.includes("把 focal_topic 当作活动中的一种学科能力")) {
    errors.push(`topic prompt ${topic.id} does not prevent node-as-activity framing`);
  }
  const context = contextFromPrompt(prompt);
  if (!context.focal_topic || context.focal_topic.id !== topic.id) errors.push(`topic ${topic.id} lost its focal topic`);
  if (context.related_topics || context.topic) errors.push(`topic ${topic.id} leaks the full topic payload into the default trial`);
  if (!Array.isArray(context.theme_options) || context.theme_options.length !== 1) errors.push(`topic ${topic.id} must expose exactly one preferred theme`);
  if (!context.preferred_theme_id || context.theme_options?.[0]?.id !== context.preferred_theme_id) errors.push(`topic ${topic.id} lost its preferred theme`);
  if (context.design_defaults?.activity_count !== 1 || context.design_defaults?.trial_mode !== "single_session_slice") {
    errors.push(`topic ${topic.id} must default to one single-session activity`);
  }
  if (!context.licensing?.attribution) errors.push(`topic ${topic.id} lost the attribution contract`);
}

const focus = topicLengths.find((row) => row.id === "T-ENG-004");
const report = {
  status: errors.length ? "failed" : "ok",
  tested: { themes: themeLengths.length, topics: topicLengths.length },
  maximum_characters: {
    theme: Math.max(...themeLengths.map((row) => row.characters)),
    topic: Math.max(...topicLengths.map((row) => row.characters)),
    screenshot_case_T_ENG_004: focus?.characters,
  },
  limits: { theme: 10000, topic: 8000 },
  errors,
  warnings: [],
};
console.log(JSON.stringify(report, null, 2));
process.exitCode = errors.length ? 1 : 0;
