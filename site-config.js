// SPDX-License-Identifier: Apache-2.0
// Fork maintainers: edit this file first. The interface and prompt builder read
// project identity, resource URLs, counts, modes, and theme entries from here.

window.BUNNYBOOK_CONFIG = Object.freeze({
  projectName: "BunnyBook",
  language: "zh-CN",
  canonicalSiteUrl: "https://bunnybook-curriculum.netlify.app",
  repositoryUrl: "https://github.com/gitljz0329/bunnybook-curriculum",
  mapUrl: "/mvp/index.html",
  resources: Object.freeze({
    llms: "/llms.txt",
    llmsFull: "/llms-full.txt",
    startHere: "/agent/START-HERE.md",
    universalManifest: "/agent/manifest.json",
    sourceManifest: "/api/v1/source-manifest.json",
    searchIndex: "/api/v1/search-index.json",
    themeIndex: "/api/v1/theme-index.json",
    learningMap: "/api/v1/learning-map.json",
    graphManifest: "/mvp/agent-manifest.json",
    dataNotice: "/mvp/data-notice.md",
    reuseGuide: "/docs/BUILD_YOUR_OWN.md",
  }),
  counts: Object.freeze({
    themes: 8,
    topics: 87,
    dependencies: 189,
    curriculumSubjects: 12,
    competencies: 51,
    coverageUnits: 182,
  }),
  modes: Object.freeze({
    lesson_plan: Object.freeze({
      label: "单课时备课",
      intent: "设计一节可直接讨论和修改的课",
      output: "先给一页课程蓝图，再给时间化课堂流程、学生产物、可观察掌握证据、差异化支持、依据与教师复核项",
    }),
    full_planning: Object.freeze({
      label: "单元 / 项目规划",
      intent: "规划一个单元、项目或多课时学习序列",
      output: "给出真实问题、共同成果、学科贡献、关键节点、学习顺序、课时安排、形成性检查点、评价证据与教师决策项",
    }),
    learning_progression: Object.freeze({
      label: "学习进阶",
      intent: "围绕目标内容追踪学生之前需要会什么、可能卡在哪里以及下一步能学什么",
      output: "给出目标节点、hard 与 soft 前置、可观察掌握证据、可能缺口、补偿性任务、下一步解锁内容与教师复核项",
    }),
    review: Object.freeze({
      label: "核对已有教案",
      intent: "用 BunnyBook 图谱核对一份已有课程方案",
      output: "检查目标—活动—证据一致性、前置关系、课标来源、缺失环节、未经证实的判断，并给出按优先级排序的修改建议",
    }),
  }),
  themes: Object.freeze([
    Object.freeze({ id: "BQ1", question: "怎样生活才算健康？", hint: "健康、稳态、行为与公共选择" }),
    Object.freeze({ id: "BQ2", question: "数据能告诉我们真相吗？", hint: "测量、证据、统计与不确定性" }),
    Object.freeze({ id: "BQ3", question: "未来真的可以被预测吗？", hint: "模型、变化、概率与边界" }),
    Object.freeze({ id: "BQ4", question: "我们能实现碳中和吗？", hint: "系统、能源、环境与行动方案" }),
    Object.freeze({ id: "BQ5", question: "AI 可以替我们做决定吗？", hint: "算法、伦理、证据与责任" }),
    Object.freeze({ id: "BQ6", question: "文化遗产如何活在未来？", hint: "历史、表达、技术与公众参与" }),
    Object.freeze({ id: "BQ7", question: "什么样的规则才公平？", hint: "制度、权利、分配与论证" }),
    Object.freeze({ id: "BQ8", question: "好主意怎样才能真正解决问题？", hint: "需求、设计、验证与迭代" }),
  ]),
  trust: Object.freeze({
    humanReviewRequired: true,
    writebackAllowed: false,
    studentPersonalDataAllowed: false,
    attribution: "Contains information from BunnyBook Curriculum Graph, made available under ODbL 1.0. BunnyBook-authored text is Copyright 2026 lixiaozuyi and licensed under CC BY 4.0.",
  }),
});
