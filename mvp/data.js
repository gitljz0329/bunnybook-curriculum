window.BIG_MVP_DATA = {
  "learningMap": {
    "schema_version": "0.3-full-alpha",
    "scope": "8 Big Questions / 12 subject standards / full local curriculum corpus",
    "review_status": "author_draft_pending_subject_review",
    "licensing": {
      "status": "active",
      "rights_holder": "lixiaozuyi",
      "copyright": "Copyright 2026 lixiaozuyi",
      "license_map": {
        "database_structure_ids_relationships": {
          "spdx": "ODbL-1.0",
          "license_file": "LICENSES/ODbL-1.0.txt"
        },
        "bunnybook_authored_text": {
          "spdx": "CC-BY-4.0",
          "license_file": "LICENSES/CC-BY-4.0.txt"
        }
      },
      "attribution": "Contains information from BunnyBook Curriculum Graph, made available under ODbL 1.0. BunnyBook-authored text is Copyright 2026 lixiaozuyi and licensed under CC BY 4.0.",
      "excluded_material": [
        "third-party curriculum standards and source PDFs",
        "official curriculum labels, titles, excerpts, and source pointers where BunnyBook does not own the rights",
        "third-party names, logos, and trademarks",
        "BunnyBook names, logos, and brand assets"
      ],
      "license_overview": "LICENSE.md",
      "third_party_notices": "THIRD_PARTY_NOTICES.md"
    },
    "subjects": [
      {
        "id": "chinese",
        "label": "语文",
        "color": "#ff8a72",
        "shape": "circle",
        "discipline_group": "language_humanities"
      },
      {
        "id": "english",
        "label": "英语",
        "color": "#c79cff",
        "shape": "circle",
        "discipline_group": "language_humanities"
      },
      {
        "id": "history",
        "label": "历史",
        "color": "#d4a56a",
        "shape": "square",
        "discipline_group": "language_humanities"
      },
      {
        "id": "civics",
        "label": "思想政治",
        "color": "#ff8fb3",
        "shape": "square",
        "discipline_group": "language_humanities"
      },
      {
        "id": "mathematics",
        "label": "数学",
        "color": "#79a9ff",
        "shape": "diamond",
        "discipline_group": "mathematics_technology"
      },
      {
        "id": "information_technology",
        "label": "信息技术",
        "color": "#9b8cff",
        "shape": "hexagon",
        "discipline_group": "mathematics_technology"
      },
      {
        "id": "physics",
        "label": "物理",
        "color": "#5cc8ff",
        "shape": "triangle",
        "discipline_group": "science"
      },
      {
        "id": "chemistry",
        "label": "化学",
        "color": "#ffbc6e",
        "shape": "triangle",
        "discipline_group": "science"
      },
      {
        "id": "biology",
        "label": "生物学",
        "color": "#72d98b",
        "shape": "triangle",
        "discipline_group": "science"
      },
      {
        "id": "geography",
        "label": "地理",
        "color": "#58c7a1",
        "shape": "diamond",
        "discipline_group": "science"
      },
      {
        "id": "art",
        "label": "艺术",
        "color": "#ed7fd1",
        "shape": "hexagon",
        "discipline_group": "arts_health"
      },
      {
        "id": "physical_education_health",
        "label": "体育与健康",
        "color": "#52d4ca",
        "shape": "square",
        "discipline_group": "arts_health"
      },
      {
        "id": "interdisciplinary",
        "label": "综合节点",
        "color": "#f4e56d",
        "shape": "ring",
        "discipline_group": "synthesis"
      }
    ],
    "stages": [
      {
        "id": 1,
        "label": "共同基础",
        "description": "辨认对象、核心概念、已有证据与真实需要。"
      },
      {
        "id": 2,
        "label": "调查与分析",
        "description": "运用观察、比较、实验、建模、核验与表达工具。"
      },
      {
        "id": 3,
        "label": "综合判断",
        "description": "连接多学科证据，比较解释、方案与可能影响。"
      },
      {
        "id": 4,
        "label": "创造、表达与行动",
        "description": "形成可质询、可迭代、负责任的成果与行动。"
      }
    ],
    "topics": [
      {
        "id": "T-EVID-001",
        "name": "事实、数据与主张",
        "subject": "chinese",
        "domain": "证据表达",
        "stage": 1,
        "type": "conceptual",
        "description": "区分发生了什么、记录了什么，以及表达者据此声称了什么，避免把主张直接当成事实。",
        "mastery_evidence": [
          "能在一段材料中分别标出事实陈述、数据和结论性主张。",
          "能指出一个主张还需要什么证据才能成立。"
        ],
        "assessment_prompt": "这句话是在报告事实、呈现数据，还是提出一个需要证明的主张？",
        "source_anchor_ids": [
          "CA-CU-063"
        ],
        "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "chinese",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "chinese",
            "role": "primary",
            "competency_ids": [
              "chinese.language_construction",
              "chinese.thinking_development"
            ],
            "content_anchor_ids": [
              "CA-CU-063"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "chinese"
        ],
        "competency_ids": [
          "chinese.language_construction",
          "chinese.thinking_development"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-EVID-002",
        "name": "论点、证据与推理",
        "subject": "chinese",
        "domain": "证据表达",
        "stage": 2,
        "type": "representational",
        "description": "用“论点—证据—推理”结构检查结论如何由材料支持，并识别推理中的跳步。",
        "mastery_evidence": [
          "能把一段论证拆成论点、证据和连接二者的理由。",
          "能解释证据为什么支持或不足以支持结论。"
        ],
        "assessment_prompt": "这份证据和结论之间缺少哪一步解释？",
        "source_anchor_ids": [
          "CA-CU-057",
          "CA-CU-063",
          "CU-096"
        ],
        "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "chinese",
        "node_kind": "representational",
        "curriculum_links": [
          {
            "subject_id": "chinese",
            "role": "primary",
            "competency_ids": [
              "chinese.thinking_development",
              "chinese.language_construction"
            ],
            "content_anchor_ids": [
              "CA-CU-057",
              "CA-CU-063"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.scientific_spirit"
            ],
            "content_anchor_ids": [
              "CU-096"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "chinese",
          "civics"
        ],
        "competency_ids": [
          "chinese.thinking_development",
          "chinese.language_construction",
          "civics.scientific_spirit"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-EVID-003",
        "name": "信息来源核验",
        "subject": "chinese",
        "domain": "媒介与阅读",
        "stage": 2,
        "type": "procedural",
        "description": "检查材料的作者、出处、时间、证据来源与传播语境，判断是否值得继续使用。",
        "mastery_evidence": [
          "能追溯一则数据或说法的原始出处。",
          "能说明来源的利益位置、时效与可核验程度。"
        ],
        "assessment_prompt": "如果只能做三项检查，你会怎样确认这条信息的来源可靠吗？",
        "source_anchor_ids": [
          "CA-CU-058",
          "CA-CU-063",
          "CU-013",
          "CU-104"
        ],
        "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 21 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 45 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "chinese",
        "node_kind": "procedural",
        "curriculum_links": [
          {
            "subject_id": "chinese",
            "role": "primary",
            "competency_ids": [
              "chinese.thinking_development"
            ],
            "content_anchor_ids": [
              "CA-CU-058",
              "CA-CU-063"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.information_awareness",
              "information_technology.information_social_responsibility"
            ],
            "content_anchor_ids": [
              "CU-013"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "history",
            "role": "supporting",
            "competency_ids": [
              "history.source_evidence"
            ],
            "content_anchor_ids": [
              "CU-104"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "chinese",
          "information_technology",
          "history"
        ],
        "competency_ids": [
          "chinese.thinking_development",
          "information_technology.information_awareness",
          "information_technology.information_social_responsibility",
          "history.source_evidence"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-EVID-004",
        "name": "限定语与不确定性表达",
        "subject": "chinese",
        "domain": "公共表达",
        "stage": 3,
        "type": "language",
        "description": "用范围、条件、概率和保留意见准确表达证据边界，不把有限发现写成绝对结论。",
        "mastery_evidence": [
          "能把“证明了”改写为与证据强度相称的表述。",
          "能在结论中主动写明对象、时间和适用条件。"
        ],
        "assessment_prompt": "这句话需要加入哪些限定语，才不会说得比证据更多？",
        "source_anchor_ids": [
          "CA-CU-063",
          "CU-078"
        ],
        "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "chinese",
        "node_kind": "language",
        "curriculum_links": [
          {
            "subject_id": "chinese",
            "role": "primary",
            "competency_ids": [
              "chinese.language_construction",
              "chinese.thinking_development"
            ],
            "content_anchor_ids": [
              "CA-CU-063"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.logical_reasoning",
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CU-078"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "chinese",
          "mathematics"
        ],
        "competency_ids": [
          "chinese.language_construction",
          "chinese.thinking_development",
          "mathematics.logical_reasoning",
          "mathematics.data_analysis"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-EVID-005",
        "name": "公开质询与理由回应",
        "subject": "chinese",
        "domain": "公共表达",
        "stage": 4,
        "type": "meta",
        "description": "围绕证据、方法、影响与边界提出可回答的质询，并用理由回应而非只表达立场。",
        "mastery_evidence": [
          "每个质询都能指向具体证据或推理环节。",
          "回应时能修正原判断或说明为何保留原判断。"
        ],
        "assessment_prompt": "你的问题是在追问证据和理由，还是只在表达赞成或反对？",
        "source_anchor_ids": [
          "CA-CU-058",
          "CA-CU-063",
          "CU-096"
        ],
        "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 21 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "chinese",
        "node_kind": "meta",
        "curriculum_links": [
          {
            "subject_id": "chinese",
            "role": "primary",
            "competency_ids": [
              "chinese.language_construction",
              "chinese.thinking_development"
            ],
            "content_anchor_ids": [
              "CA-CU-058",
              "CA-CU-063"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CU-096"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "chinese",
          "civics"
        ],
        "competency_ids": [
          "chinese.language_construction",
          "chinese.thinking_development",
          "civics.scientific_spirit",
          "civics.public_participation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-001",
        "name": "观测对象与变量",
        "subject": "mathematics",
        "domain": "数据与统计",
        "stage": 1,
        "type": "conceptual",
        "description": "明确数据描述的是谁或什么，以及哪些特征正在被测量、分类或比较。",
        "mastery_evidence": [
          "能指出数据表中的观测对象、变量和变量取值。",
          "能发现问题与所测变量不匹配的情形。"
        ],
        "assessment_prompt": "这张表的一行代表什么？每一列又在记录什么？",
        "source_anchor_ids": [
          "CA-CU-078",
          "CU-013"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "mathematics",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.abstraction",
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CA-CU-078"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.information_awareness"
            ],
            "content_anchor_ids": [
              "CU-013"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "information_technology"
        ],
        "competency_ids": [
          "mathematics.abstraction",
          "mathematics.data_analysis",
          "information_technology.information_awareness"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-002",
        "name": "比例、百分比与基数",
        "subject": "mathematics",
        "domain": "数据与统计",
        "stage": 1,
        "type": "representational",
        "description": "理解比例和百分比必须依附于明确的基数，避免被“大幅增长”或“下降一半”误导。",
        "mastery_evidence": [
          "能把百分比变化还原为实际人数或数量。",
          "能判断两个比例是否使用了可比较的分母。"
        ],
        "assessment_prompt": "“增加50%”究竟从多少增加到多少？",
        "source_anchor_ids": [
          "CA-CU-078"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "mathematics",
        "node_kind": "representational",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.operation",
              "mathematics.data_analysis",
              "mathematics.logical_reasoning"
            ],
            "content_anchor_ids": [
              "CA-CU-078"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics"
        ],
        "competency_ids": [
          "mathematics.operation",
          "mathematics.data_analysis",
          "mathematics.logical_reasoning"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-003",
        "name": "样本与总体",
        "subject": "mathematics",
        "domain": "数据与统计",
        "stage": 1,
        "type": "conceptual",
        "description": "区分实际收集到的样本与希望描述的总体，理解从局部推向整体需要条件。",
        "mastery_evidence": [
          "能指出研究的总体、样本和抽样单位。",
          "能判断样本结论是否被过度推广。"
        ],
        "assessment_prompt": "这次调查问了谁，又想代表谁？",
        "source_anchor_ids": [
          "CA-CU-078",
          "CA-CU-082"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 54 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "mathematics",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.abstraction",
              "mathematics.data_analysis",
              "mathematics.modeling"
            ],
            "content_anchor_ids": [
              "CA-CU-078",
              "CA-CU-082"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics"
        ],
        "competency_ids": [
          "mathematics.abstraction",
          "mathematics.data_analysis",
          "mathematics.modeling"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-004",
        "name": "抽样偏差与代表性",
        "subject": "mathematics",
        "domain": "数据与统计",
        "stage": 2,
        "type": "procedural",
        "description": "分析抽样方式如何系统性遗漏某些人或放大某些群体，从而改变结论。",
        "mastery_evidence": [
          "能识别自愿应答、便利抽样和覆盖不足带来的偏差。",
          "能提出更能代表总体的抽样改进方案。"
        ],
        "assessment_prompt": "哪些人更可能没有进入样本？这会让结果向哪个方向偏？",
        "source_anchor_ids": [
          "CA-CU-078",
          "CA-CU-082",
          "CU-013"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 54 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "mathematics",
        "node_kind": "procedural",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.data_analysis",
              "mathematics.modeling",
              "mathematics.logical_reasoning"
            ],
            "content_anchor_ids": [
              "CA-CU-078",
              "CA-CU-082"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.information_awareness"
            ],
            "content_anchor_ids": [
              "CU-013"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "information_technology"
        ],
        "competency_ids": [
          "mathematics.data_analysis",
          "mathematics.modeling",
          "mathematics.logical_reasoning",
          "information_technology.information_awareness"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-005",
        "name": "统计口径与可比性",
        "subject": "mathematics",
        "domain": "数据与统计",
        "stage": 2,
        "type": "conceptual",
        "description": "检查分类标准、时间窗口、计算规则和单位是否一致，判断两个数字能否放在一起比较。",
        "mastery_evidence": [
          "能找出定义或计算口径发生变化的位置。",
          "能说明不可比数据需要怎样调整或标注。"
        ],
        "assessment_prompt": "两个数字看起来相同，但它们真的是按同一规则算出来的吗？",
        "source_anchor_ids": [
          "CA-CU-078",
          "CA-CU-082",
          "CU-013"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 54 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "mathematics",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.abstraction",
              "mathematics.logical_reasoning",
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CA-CU-078",
              "CA-CU-082"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.information_awareness"
            ],
            "content_anchor_ids": [
              "CU-013"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "information_technology"
        ],
        "competency_ids": [
          "mathematics.abstraction",
          "mathematics.logical_reasoning",
          "mathematics.data_analysis",
          "information_technology.information_awareness"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-006",
        "name": "平均数、中位数与分布",
        "subject": "mathematics",
        "domain": "数据与统计",
        "stage": 2,
        "type": "representational",
        "description": "根据数据分布选择合适的集中趋势指标，并避免用单一平均数遮蔽差异。",
        "mastery_evidence": [
          "能比较平均数与中位数对极端值的敏感性。",
          "能结合分布而不是只报一个中心数值。"
        ],
        "assessment_prompt": "这个“平均水平”是否被少数极端值拉高或拉低了？",
        "source_anchor_ids": [
          "CA-CU-078",
          "CA-CU-082"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 54 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "mathematics",
        "node_kind": "representational",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.data_analysis",
              "mathematics.operation",
              "mathematics.visual_imagination"
            ],
            "content_anchor_ids": [
              "CA-CU-078",
              "CA-CU-082"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics"
        ],
        "competency_ids": [
          "mathematics.data_analysis",
          "mathematics.operation",
          "mathematics.visual_imagination"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-007",
        "name": "相关关系与因果解释",
        "subject": "mathematics",
        "domain": "数据与统计",
        "stage": 3,
        "type": "conceptual",
        "description": "区分变量一起变化与一个变量导致另一个变化，寻找混杂因素和替代解释。",
        "mastery_evidence": [
          "能为相关关系提出至少一个替代解释。",
          "能说明什么额外证据才更接近因果判断。"
        ],
        "assessment_prompt": "两件事同时发生，为什么还不能直接说一个导致了另一个？",
        "source_anchor_ids": [
          "CA-CU-078",
          "CA-CU-082",
          "CU-096"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 54 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "mathematics",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.logical_reasoning",
              "mathematics.modeling",
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CA-CU-078",
              "CA-CU-082"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.scientific_spirit"
            ],
            "content_anchor_ids": [
              "CU-096"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "civics"
        ],
        "competency_ids": [
          "mathematics.logical_reasoning",
          "mathematics.modeling",
          "mathematics.data_analysis",
          "civics.scientific_spirit"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-008",
        "name": "坐标轴、比例与图表编码",
        "subject": "mathematics",
        "domain": "数据表达",
        "stage": 2,
        "type": "representational",
        "description": "理解坐标轴起点、刻度、面积、颜色和排序如何影响人对差异大小的感知。",
        "mastery_evidence": [
          "能发现截断坐标轴、面积放大或不等距刻度。",
          "能选择与数据和比较目的相匹配的图表。"
        ],
        "assessment_prompt": "如果把坐标轴从零开始，这张图给人的感觉会怎样改变？",
        "source_anchor_ids": [
          "CA-CU-078",
          "CU-013"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "mathematics",
        "node_kind": "representational",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.visual_imagination",
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CA-CU-078"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.information_awareness",
              "information_technology.digital_learning_innovation"
            ],
            "content_anchor_ids": [
              "CU-013"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "information_technology"
        ],
        "competency_ids": [
          "mathematics.visual_imagination",
          "mathematics.data_analysis",
          "information_technology.information_awareness",
          "information_technology.digital_learning_innovation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-009",
        "name": "缺失数据与异常值",
        "subject": "mathematics",
        "domain": "数据与统计",
        "stage": 2,
        "type": "procedural",
        "description": "识别没有被记录的情况和极端观测，判断它们应被保留、解释、修正还是单独报告。",
        "mastery_evidence": [
          "能区分真实极端值、录入错误和系统性缺失。",
          "能说明处理异常值或缺失值会怎样改变结论。"
        ],
        "assessment_prompt": "被删掉或没有回答的数据，可能比留下的数据告诉我们什么？",
        "source_anchor_ids": [
          "CA-CU-078",
          "CA-CU-082",
          "CU-013"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 54 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "mathematics",
        "node_kind": "procedural",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.data_analysis",
              "mathematics.logical_reasoning"
            ],
            "content_anchor_ids": [
              "CA-CU-078",
              "CA-CU-082"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.computational_thinking",
              "information_technology.information_social_responsibility"
            ],
            "content_anchor_ids": [
              "CU-013"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "information_technology"
        ],
        "competency_ids": [
          "mathematics.data_analysis",
          "mathematics.logical_reasoning",
          "information_technology.computational_thinking",
          "information_technology.information_social_responsibility"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-010",
        "name": "识别误导性数据表达",
        "subject": "interdisciplinary",
        "domain": "数据判断",
        "stage": 3,
        "type": "procedural",
        "description": "综合检查样本、口径、指标、图表和措辞，说明一份数据表达具体在哪里误导。",
        "mastery_evidence": [
          "能指出至少两种不同层面的误导机制。",
          "能区分“数据错误”和“表达选择造成偏差”。"
        ],
        "assessment_prompt": "这份表达最可能在哪一步让读者形成过强的结论？",
        "source_anchor_ids": [
          "CA-CU-078",
          "CA-CU-013",
          "CA-CU-063"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": null,
        "node_kind": "procedural",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CA-CU-078"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.information_awareness"
            ],
            "content_anchor_ids": [
              "CA-CU-013"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chinese",
            "role": "supporting",
            "competency_ids": [
              "chinese.thinking_development",
              "chinese.language_construction"
            ],
            "content_anchor_ids": [
              "CA-CU-063"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "information_technology",
          "chinese"
        ],
        "competency_ids": [
          "mathematics.data_analysis",
          "information_technology.information_awareness",
          "chinese.thinking_development",
          "chinese.language_construction"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-011",
        "name": "重绘图表与改写结论",
        "subject": "interdisciplinary",
        "domain": "数据判断",
        "stage": 4,
        "type": "procedural",
        "description": "在不篡改数据的前提下重做图表，并把结论改写为范围更清楚、语气更克制的版本。",
        "mastery_evidence": [
          "重绘结果清楚呈现单位、基数、样本和时间。",
          "改写结论明确说明能推出什么、不能推出什么。"
        ],
        "assessment_prompt": "如果让一个持不同立场的人看这张图，你怎样让它仍然诚实？",
        "source_anchor_ids": [
          "CA-CU-078",
          "CA-CU-013",
          "CA-CU-063"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": null,
        "node_kind": "procedural",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.data_analysis",
              "mathematics.visual_imagination"
            ],
            "content_anchor_ids": [
              "CA-CU-078"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.digital_learning_innovation"
            ],
            "content_anchor_ids": [
              "CA-CU-013"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chinese",
            "role": "supporting",
            "competency_ids": [
              "chinese.language_construction"
            ],
            "content_anchor_ids": [
              "CA-CU-063"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "information_technology",
          "chinese"
        ],
        "competency_ids": [
          "mathematics.data_analysis",
          "mathematics.visual_imagination",
          "information_technology.digital_learning_innovation",
          "chinese.language_construction"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-012",
        "name": "审查一个数据主张",
        "subject": "interdisciplinary",
        "domain": "数据判断",
        "stage": 3,
        "type": "meta",
        "description": "把来源、样本、变量、统计方法、图表和结论串成完整证据链，形成暂时判断。",
        "mastery_evidence": [
          "能用统一审查框架检查一则真实或模拟数据主张。",
          "能给出“可信、部分可信或证据不足”的理由。"
        ],
        "assessment_prompt": "从数据被收集到结论被公开，证据链的哪一环最薄弱？",
        "source_anchor_ids": [
          "CA-CU-078",
          "CA-CU-013",
          "CA-CU-096"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": null,
        "node_kind": "meta",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CA-CU-078"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.information_awareness"
            ],
            "content_anchor_ids": [
              "CA-CU-013"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CA-CU-096"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "information_technology",
          "civics"
        ],
        "competency_ids": [
          "mathematics.data_analysis",
          "information_technology.information_awareness",
          "civics.scientific_spirit",
          "civics.public_participation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-DATA-013",
        "name": "面向公众说明证据边界",
        "subject": "interdisciplinary",
        "domain": "公共表达",
        "stage": 4,
        "type": "language",
        "description": "面向非专业受众解释数据能说明什么、不能说明什么，以及判断仍有哪些不确定性。",
        "mastery_evidence": [
          "能用普通语言交代证据与限制。",
          "不隐去会改变受众判断的重要不确定性。"
        ],
        "assessment_prompt": "读者看完后，是否既知道你的结论，也知道它的边界？",
        "source_anchor_ids": [
          "CA-CU-058",
          "CA-CU-063",
          "CA-CU-096"
        ],
        "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 21 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": null,
        "node_kind": "language",
        "curriculum_links": [
          {
            "subject_id": "chinese",
            "role": "supporting",
            "competency_ids": [
              "chinese.language_construction",
              "chinese.thinking_development"
            ],
            "content_anchor_ids": [
              "CA-CU-058",
              "CA-CU-063"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CA-CU-096"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "chinese",
          "civics"
        ],
        "competency_ids": [
          "chinese.language_construction",
          "chinese.thinking_development",
          "civics.scientific_spirit",
          "civics.public_participation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-TECH-001",
        "name": "数据来源与采集过程",
        "subject": "information_technology",
        "domain": "数据与计算",
        "stage": 1,
        "type": "procedural",
        "description": "追踪数据从现实对象到数字记录的过程，识别传感、问卷、平台日志或人工录入各自的限制。",
        "mastery_evidence": [
          "能画出一组数据的采集流程。",
          "能指出采集工具和规则可能引入的误差。"
        ],
        "assessment_prompt": "这条数据在进入表格之前，现实中发生了什么？",
        "source_anchor_ids": [
          "CA-CU-013",
          "CU-078"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "information_technology",
        "node_kind": "procedural",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "primary",
            "competency_ids": [
              "information_technology.information_awareness",
              "information_technology.computational_thinking"
            ],
            "content_anchor_ids": [
              "CA-CU-013"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.abstraction",
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CU-078"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "mathematics"
        ],
        "competency_ids": [
          "information_technology.information_awareness",
          "information_technology.computational_thinking",
          "mathematics.abstraction",
          "mathematics.data_analysis"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-TECH-002",
        "name": "数据清洗与转换",
        "subject": "information_technology",
        "domain": "数据与计算",
        "stage": 2,
        "type": "procedural",
        "description": "处理重复、格式不一、编码错误与缺失记录，并保留可复核的转换说明。",
        "mastery_evidence": [
          "能制定一致的清洗规则并保留原始数据。",
          "能说明每项转换会不会改变分析对象。"
        ],
        "assessment_prompt": "你对原始数据做了哪些改变，别人能否复现？",
        "source_anchor_ids": [
          "CA-CU-013",
          "CA-CU-015",
          "CU-078"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 26 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "information_technology",
        "node_kind": "procedural",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "primary",
            "competency_ids": [
              "information_technology.computational_thinking",
              "information_technology.digital_learning_innovation",
              "information_technology.information_social_responsibility"
            ],
            "content_anchor_ids": [
              "CA-CU-013",
              "CA-CU-015"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CU-078"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "mathematics"
        ],
        "competency_ids": [
          "information_technology.computational_thinking",
          "information_technology.digital_learning_innovation",
          "information_technology.information_social_responsibility",
          "mathematics.data_analysis"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-TECH-003",
        "name": "数据结构与字段含义",
        "subject": "information_technology",
        "domain": "数据与数据结构",
        "stage": 2,
        "type": "representational",
        "description": "理解字段、记录、类别与编码如何表示现实对象，并检查数字标签是否掩盖重要差异。",
        "mastery_evidence": [
          "能为一张数据表写出字段字典。",
          "能指出分类编码对后续分析的影响。"
        ],
        "assessment_prompt": "这个字段在现实世界中究竟代表什么，又遗漏了什么？",
        "source_anchor_ids": [
          "CA-CU-015",
          "CU-078"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 26 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "information_technology",
        "node_kind": "representational",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "primary",
            "competency_ids": [
              "information_technology.computational_thinking",
              "information_technology.information_awareness"
            ],
            "content_anchor_ids": [
              "CA-CU-015"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.abstraction",
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CU-078"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "mathematics"
        ],
        "competency_ids": [
          "information_technology.computational_thinking",
          "information_technology.information_awareness",
          "mathematics.abstraction",
          "mathematics.data_analysis"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-AI-001",
        "name": "数据、模型与决策者",
        "subject": "information_technology",
        "domain": "人工智能基础",
        "stage": 1,
        "type": "conceptual",
        "description": "区分输入数据、模型计算、系统输出与人的最终决定，避免把整个判断过程都归给“AI”。",
        "mastery_evidence": [
          "能在一个案例中标出数据、模型、输出、使用者和受影响者。",
          "能说清系统建议与最终决定的区别。"
        ],
        "assessment_prompt": "AI 在哪一步参与了判断？哪一步仍然是人在决定？",
        "source_anchor_ids": [
          "CA-CU-018",
          "CU-096"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "information_technology",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "primary",
            "competency_ids": [
              "information_technology.information_awareness",
              "information_technology.computational_thinking",
              "information_technology.information_social_responsibility"
            ],
            "content_anchor_ids": [
              "CA-CU-018"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.scientific_spirit"
            ],
            "content_anchor_ids": [
              "CU-096"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "civics"
        ],
        "competency_ids": [
          "information_technology.information_awareness",
          "information_technology.computational_thinking",
          "information_technology.information_social_responsibility",
          "civics.scientific_spirit"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-AI-002",
        "name": "训练数据与标签",
        "subject": "information_technology",
        "domain": "人工智能基础",
        "stage": 2,
        "type": "conceptual",
        "description": "理解模型从历史样本和标签中学习模式，训练数据的选择会限制系统能看见什么。",
        "mastery_evidence": [
          "能说明训练样本与标签如何影响模型行为。",
          "能发现训练数据对某些群体或情境覆盖不足。"
        ],
        "assessment_prompt": "这个系统过去看过哪些例子，又没有看过哪些例子？",
        "source_anchor_ids": [
          "CA-CU-018",
          "CA-CU-015",
          "CU-078"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 26 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "information_technology",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "primary",
            "competency_ids": [
              "information_technology.information_awareness",
              "information_technology.computational_thinking"
            ],
            "content_anchor_ids": [
              "CA-CU-018",
              "CA-CU-015"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.abstraction",
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CU-078"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "mathematics"
        ],
        "competency_ids": [
          "information_technology.information_awareness",
          "information_technology.computational_thinking",
          "mathematics.abstraction",
          "mathematics.data_analysis"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-AI-003",
        "name": "模型输出与置信度",
        "subject": "information_technology",
        "domain": "人工智能基础",
        "stage": 2,
        "type": "representational",
        "description": "把预测分数、类别或排序理解为模型输出而非事实，并检查阈值如何改变结果。",
        "mastery_evidence": [
          "能区分预测、概率、排序和真实状态。",
          "能解释调整阈值会造成哪些误判变化。"
        ],
        "assessment_prompt": "一个“高风险”标签意味着事实，还是意味着模型在某个阈值下的判断？",
        "source_anchor_ids": [
          "CA-CU-018",
          "CU-078"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "information_technology",
        "node_kind": "representational",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "primary",
            "competency_ids": [
              "information_technology.information_awareness",
              "information_technology.computational_thinking"
            ],
            "content_anchor_ids": [
              "CA-CU-018"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.data_analysis",
              "mathematics.logical_reasoning"
            ],
            "content_anchor_ids": [
              "CU-078"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "mathematics"
        ],
        "competency_ids": [
          "information_technology.information_awareness",
          "information_technology.computational_thinking",
          "mathematics.data_analysis",
          "mathematics.logical_reasoning"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-AI-004",
        "name": "自动化偏差与反馈回路",
        "subject": "information_technology",
        "domain": "人工智能与社会",
        "stage": 3,
        "type": "conceptual",
        "description": "分析历史偏差如何经由数据和模型被复制，并因系统使用结果重新写回数据而被放大。",
        "mastery_evidence": [
          "能画出至少一条偏差进入和返回系统的路径。",
          "能区分数据偏差、模型误差和使用制度造成的影响。"
        ],
        "assessment_prompt": "如果系统的输出改变了未来的数据，它会不会越来越相信自己原来的判断？",
        "source_anchor_ids": [
          "CA-CU-018",
          "CU-078",
          "CA-CU-091"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": "information_technology",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "primary",
            "competency_ids": [
              "information_technology.information_social_responsibility"
            ],
            "content_anchor_ids": [
              "CA-CU-018"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CU-078"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CA-CU-091"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "mathematics",
          "civics"
        ],
        "competency_ids": [
          "information_technology.information_social_responsibility",
          "mathematics.data_analysis",
          "civics.scientific_spirit",
          "civics.public_participation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-AI-005",
        "name": "数据—模型—决策责任链",
        "subject": "interdisciplinary",
        "domain": "人工智能与社会",
        "stage": 3,
        "type": "representational",
        "description": "把开发者、数据提供者、使用机构、决策者与受影响者放进同一条责任链，定位可干预环节。",
        "mastery_evidence": [
          "能画出一个 AI 案例的完整责任链。",
          "能说明每个参与者掌握的信息、权力与责任。"
        ],
        "assessment_prompt": "当错误发生时，谁有能力发现、阻止、解释或纠正它？",
        "source_anchor_ids": [
          "CA-CU-018",
          "CA-CU-090",
          "CA-CU-100"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": null,
        "node_kind": "representational",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.information_social_responsibility"
            ],
            "content_anchor_ids": [
              "CA-CU-018"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.rule_of_law",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CA-CU-090"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "history",
            "role": "supporting",
            "competency_ids": [
              "history.historical_explanation"
            ],
            "content_anchor_ids": [
              "CA-CU-100"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "civics",
          "history"
        ],
        "competency_ids": [
          "information_technology.information_social_responsibility",
          "civics.rule_of_law",
          "civics.public_participation",
          "history.historical_explanation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-AI-006",
        "name": "设定人类复核边界",
        "subject": "interdisciplinary",
        "domain": "人工智能与社会",
        "stage": 4,
        "type": "procedural",
        "description": "根据错误代价、可逆性和权利影响，决定哪些情境可自动化、哪些必须由人复核或禁止自动决定。",
        "mastery_evidence": [
          "能为不同风险场景提出不同复核强度。",
          "能说明谁复核、依据什么复核以及如何留下记录。"
        ],
        "assessment_prompt": "哪类错误一旦发生就难以补救，因此不能只依赖自动判断？",
        "source_anchor_ids": [
          "CA-CU-018",
          "CU-096",
          "CA-CU-100"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": null,
        "node_kind": "procedural",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.information_social_responsibility"
            ],
            "content_anchor_ids": [
              "CA-CU-018"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.rule_of_law",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CU-096"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "history",
            "role": "supporting",
            "competency_ids": [
              "history.historical_explanation"
            ],
            "content_anchor_ids": [
              "CA-CU-100"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "civics",
          "history"
        ],
        "competency_ids": [
          "information_technology.information_social_responsibility",
          "civics.rule_of_law",
          "civics.public_participation",
          "history.historical_explanation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GOV-001",
        "name": "权利、责任与公共利益",
        "subject": "civics",
        "domain": "公共判断",
        "stage": 1,
        "type": "conceptual",
        "description": "从个人权利、机构责任和公共利益三个角度理解技术决策，而不是只比较效率高低。",
        "mastery_evidence": [
          "能指出一个技术决策影响了哪些权利与公共利益。",
          "能区分“可以做”与“应该做”。"
        ],
        "assessment_prompt": "即使系统更高效，它还可能损害哪些不应被交换掉的权利？",
        "source_anchor_ids": [
          "CA-CU-090",
          "CA-CU-091"
        ],
        "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "civics",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "civics",
            "role": "primary",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.rule_of_law",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CA-CU-090",
              "CA-CU-091"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "civics"
        ],
        "competency_ids": [
          "civics.scientific_spirit",
          "civics.rule_of_law",
          "civics.public_participation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GOV-002",
        "name": "利益相关者与受影响群体",
        "subject": "civics",
        "domain": "公共判断",
        "stage": 2,
        "type": "representational",
        "description": "识别谁设计、购买、使用系统，谁从中受益，以及谁承担错误和被忽视的成本。",
        "mastery_evidence": [
          "能绘制利益相关者图并标出权力差异。",
          "能补入容易在设计讨论中缺席的受影响群体。"
        ],
        "assessment_prompt": "谁没有坐在决策桌前，却要承担这个系统的后果？",
        "source_anchor_ids": [
          "CA-CU-091",
          "CA-CU-100"
        ],
        "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": "civics",
        "node_kind": "representational",
        "curriculum_links": [
          {
            "subject_id": "civics",
            "role": "primary",
            "competency_ids": [
              "civics.public_participation",
              "civics.scientific_spirit"
            ],
            "content_anchor_ids": [
              "CA-CU-091"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "history",
            "role": "supporting",
            "competency_ids": [
              "history.historical_materialism",
              "history.historical_explanation"
            ],
            "content_anchor_ids": [
              "CA-CU-100"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "civics",
          "history"
        ],
        "competency_ids": [
          "civics.public_participation",
          "civics.scientific_spirit",
          "history.historical_materialism",
          "history.historical_explanation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GOV-003",
        "name": "错误代价与风险分配",
        "subject": "civics",
        "domain": "公共判断",
        "stage": 3,
        "type": "conceptual",
        "description": "比较不同错误由谁承担、是否可逆，以及同样准确率下风险是否集中在少数群体。",
        "mastery_evidence": [
          "能分别说明漏判和误判的现实代价。",
          "能判断风险是否被不成比例地转嫁给弱势群体。"
        ],
        "assessment_prompt": "系统犯错时，谁付出的代价最大？这个代价还能补救吗？",
        "source_anchor_ids": [
          "CA-CU-091",
          "CU-078"
        ],
        "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": "civics",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "civics",
            "role": "primary",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.rule_of_law",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CA-CU-091"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CU-078"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "civics",
          "mathematics"
        ],
        "competency_ids": [
          "civics.scientific_spirit",
          "civics.rule_of_law",
          "civics.public_participation",
          "mathematics.data_analysis"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GOV-004",
        "name": "公平与差别影响",
        "subject": "civics",
        "domain": "公共判断",
        "stage": 3,
        "type": "conceptual",
        "description": "比较表面一致的规则是否对不同群体造成不同影响，并权衡平等对待与实质公平。",
        "mastery_evidence": [
          "能用分组结果检查总体指标掩盖的差异。",
          "能解释一种公平标准为何可能与另一种发生冲突。"
        ],
        "assessment_prompt": "同一条规则对所有人一样，为什么结果仍可能不公平？",
        "source_anchor_ids": [
          "CA-CU-091",
          "CA-CU-096",
          "CU-078"
        ],
        "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": "civics",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "civics",
            "role": "primary",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.rule_of_law",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CA-CU-091",
              "CA-CU-096"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CU-078"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "civics",
          "mathematics"
        ],
        "competency_ids": [
          "civics.scientific_spirit",
          "civics.rule_of_law",
          "civics.public_participation",
          "mathematics.data_analysis"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GOV-005",
        "name": "解释、复核与申诉",
        "subject": "civics",
        "domain": "公共判断",
        "stage": 3,
        "type": "procedural",
        "description": "为受影响者建立知情、获得理由、请求人工复核、纠正数据和提出申诉的渠道。",
        "mastery_evidence": [
          "能设计一条从收到决定到完成申诉的流程。",
          "能说明解释应包含哪些信息才能真正可用。"
        ],
        "assessment_prompt": "被系统判为“高风险”的人，怎样知道原因并获得一次真实的纠正机会？",
        "source_anchor_ids": [
          "CA-CU-090",
          "CA-CU-100",
          "CU-063"
        ],
        "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": "civics",
        "node_kind": "procedural",
        "curriculum_links": [
          {
            "subject_id": "civics",
            "role": "primary",
            "competency_ids": [
              "civics.rule_of_law",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CA-CU-090"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "history",
            "role": "supporting",
            "competency_ids": [
              "history.historical_explanation"
            ],
            "content_anchor_ids": [
              "CA-CU-100"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chinese",
            "role": "supporting",
            "competency_ids": [
              "chinese.language_construction"
            ],
            "content_anchor_ids": [
              "CU-063"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "civics",
          "history",
          "chinese"
        ],
        "competency_ids": [
          "civics.rule_of_law",
          "civics.public_participation",
          "history.historical_explanation",
          "chinese.language_construction"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GOV-006",
        "name": "制度规则与责任边界",
        "subject": "history",
        "domain": "社会治理",
        "stage": 3,
        "type": "conceptual",
        "description": "从制度形成与治理实践理解责任不能只交给个人善意，而需通过规则、程序和监督稳定下来。",
        "mastery_evidence": [
          "能把技术风险转化为机构流程和治理规则。",
          "能区分开发者、使用者与监管者的责任边界。"
        ],
        "assessment_prompt": "哪些保障不能只靠“使用者会谨慎”，而必须写进制度和流程？",
        "source_anchor_ids": [
          "CA-CU-100",
          "CA-CU-101",
          "CU-096"
        ],
        "source_ref": "6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
        "evidence_level": "inferred",
        "review_status": "pilot_draft",
        "primary_subject_id": "history",
        "node_kind": "conceptual",
        "curriculum_links": [
          {
            "subject_id": "history",
            "role": "primary",
            "competency_ids": [
              "history.historical_materialism",
              "history.historical_explanation"
            ],
            "content_anchor_ids": [
              "CA-CU-100",
              "CA-CU-101"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.rule_of_law",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CU-096"
            ],
            "mapping_basis": "inferred",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "history",
          "civics"
        ],
        "competency_ids": [
          "history.historical_materialism",
          "history.historical_explanation",
          "civics.rule_of_law",
          "civics.public_participation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GOV-007",
        "name": "制定 AI 使用建议",
        "subject": "interdisciplinary",
        "domain": "公共行动",
        "stage": 4,
        "type": "meta",
        "description": "综合技术能力、证据质量、权利影响与治理条件，提出可执行、可审查的 AI 使用边界。",
        "mastery_evidence": [
          "建议写明适用场景、禁止或谨慎使用情形、复核与申诉机制。",
          "每条建议都能回到证据、风险或权利理由。"
        ],
        "assessment_prompt": "你的建议不仅说“要谨慎”，还具体改变了谁在什么时候做什么吗？",
        "source_anchor_ids": [
          "CA-CU-018",
          "CA-CU-096",
          "CA-CU-100"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
        "evidence_level": "author",
        "review_status": "pilot_draft",
        "primary_subject_id": null,
        "node_kind": "meta",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.information_social_responsibility"
            ],
            "content_anchor_ids": [
              "CA-CU-018"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.rule_of_law",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CA-CU-096"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "history",
            "role": "supporting",
            "competency_ids": [
              "history.historical_explanation"
            ],
            "content_anchor_ids": [
              "CA-CU-100"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "civics",
          "history"
        ],
        "competency_ids": [
          "information_technology.information_social_responsibility",
          "civics.rule_of_law",
          "civics.public_participation",
          "history.historical_explanation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ENG-001",
        "name": "英语信息定位与语境判断",
        "subject": "english",
        "primary_subject_id": "english",
        "domain": "语言理解",
        "stage": 1,
        "type": "language",
        "node_kind": "language",
        "description": "在英语语篇中定位关键事实、来源、受众和写作目的，并借助上下文判断词句意义。",
        "mastery_evidence": [
          "能从一则英语材料中标出作者、出处、时间、核心信息与尚未解决的理解问题。"
        ],
        "assessment_prompt": "读懂每个单词，为什么仍可能误解一篇英语材料？",
        "source_anchor_ids": [
          "CU-085",
          "CU-086",
          "CU-088",
          "CU-089"
        ],
        "source_ref": "4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 43 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 48 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "english",
            "role": "primary",
            "competency_ids": [
              "english.language_ability",
              "english.learning_ability"
            ],
            "content_anchor_ids": [
              "CU-085",
              "CU-086",
              "CU-088",
              "CU-089"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "english"
        ],
        "competency_ids": [
          "english.language_ability",
          "english.learning_ability"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ENG-002",
        "name": "跨语言来源比较",
        "subject": "english",
        "primary_subject_id": "english",
        "domain": "跨语言阅读",
        "stage": 2,
        "type": "procedural",
        "node_kind": "procedural",
        "description": "比较中英文材料的来源、证据、术语和语境，识别翻译、省略与框架差异造成的信息偏移。",
        "mastery_evidence": [
          "能制作双语来源对照表，并说明至少两处表达差异如何影响读者理解。"
        ],
        "assessment_prompt": "两篇材料结论相近，为什么仍需要比较它们的语境和原始来源？",
        "source_anchor_ids": [
          "CU-084",
          "CU-085",
          "CU-088"
        ],
        "source_ref": "4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 43 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "english",
            "role": "primary",
            "competency_ids": [
              "english.language_ability",
              "english.thinking_quality",
              "english.learning_ability"
            ],
            "content_anchor_ids": [
              "CU-084",
              "CU-085",
              "CU-088"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "english"
        ],
        "competency_ids": [
          "english.language_ability",
          "english.thinking_quality",
          "english.learning_ability"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ENG-003",
        "name": "跨文化视角与文化语境",
        "subject": "english",
        "primary_subject_id": "english",
        "domain": "文化理解",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "从价值、惯例、历史和受众角度理解跨文化表达，避免把文化差异简化为固定标签。",
        "mastery_evidence": [
          "能用具体语篇证据解释一种文化视角，并指出自身解释可能受到的预设影响。"
        ],
        "assessment_prompt": "“尊重文化差异”为什么不等于不作任何判断？",
        "source_anchor_ids": [
          "CU-084",
          "CU-087"
        ],
        "source_ref": "4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "english",
            "role": "primary",
            "competency_ids": [
              "english.cultural_awareness",
              "english.thinking_quality"
            ],
            "content_anchor_ids": [
              "CU-084",
              "CU-087"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "english"
        ],
        "competency_ids": [
          "english.cultural_awareness",
          "english.thinking_quality"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ENG-004",
        "name": "双语解释与受众适配",
        "subject": "english",
        "primary_subject_id": "english",
        "domain": "跨文化表达",
        "stage": 3,
        "type": "language",
        "node_kind": "language",
        "description": "根据不同语言受众的知识背景与需要，重组信息、补充语境并完成清楚而忠实的双语说明。",
        "mastery_evidence": [
          "能为同一主题写出面向不同受众的中英文短说明，并解释信息取舍与术语处理。"
        ],
        "assessment_prompt": "好翻译为什么有时需要补充原文没有明说的背景？",
        "source_anchor_ids": [
          "CU-085",
          "CU-086",
          "CU-087",
          "CU-088"
        ],
        "source_ref": "4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 43 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "english",
            "role": "primary",
            "competency_ids": [
              "english.language_ability",
              "english.cultural_awareness",
              "english.thinking_quality"
            ],
            "content_anchor_ids": [
              "CU-085",
              "CU-086",
              "CU-087",
              "CU-088"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "english"
        ],
        "competency_ids": [
          "english.language_ability",
          "english.cultural_awareness",
          "english.thinking_quality"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ENG-005",
        "name": "国际对话与跨文化回应",
        "subject": "english",
        "primary_subject_id": "english",
        "domain": "国际沟通",
        "stage": 4,
        "type": "meta",
        "node_kind": "meta",
        "description": "综合证据、文化语境与受众反馈，就公共议题进行有立场、可倾听、能回应异议的跨文化交流。",
        "mastery_evidence": [
          "能完成一份双语公众材料并回应来自不同文化视角的质询。"
        ],
        "assessment_prompt": "跨文化交流中，怎样既保持自己的立场又真正理解对方？",
        "source_anchor_ids": [
          "CU-084",
          "CU-087",
          "CU-088"
        ],
        "source_ref": "4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 43 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "english",
            "role": "primary",
            "competency_ids": [
              "english.language_ability",
              "english.cultural_awareness",
              "english.thinking_quality",
              "english.learning_ability"
            ],
            "content_anchor_ids": [
              "CU-084",
              "CU-087",
              "CU-088"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "english"
        ],
        "competency_ids": [
          "english.language_ability",
          "english.cultural_awareness",
          "english.thinking_quality",
          "english.learning_ability"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ART-001",
        "name": "艺术语言与多感官感知",
        "subject": "art",
        "primary_subject_id": "art",
        "domain": "艺术感知",
        "stage": 1,
        "type": "representational",
        "node_kind": "representational",
        "description": "识别形、色、声、节奏、动作、镜头等艺术语言，描述它们如何组织感知和情感体验。",
        "mastery_evidence": [
          "能使用具体艺术语言描述一件作品，并区分可观察形式与个人联想。"
        ],
        "assessment_prompt": "“我喜欢”或“我不喜欢”为什么还不是完整的艺术分析？",
        "source_anchor_ids": [
          "CU-023",
          "CU-024",
          "CU-025"
        ],
        "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "art",
            "role": "primary",
            "competency_ids": [
              "art.artistic_perception"
            ],
            "content_anchor_ids": [
              "CU-023",
              "CU-024",
              "CU-025"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "art"
        ],
        "competency_ids": [
          "art.artistic_perception"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ART-002",
        "name": "审美判断与文化理解",
        "subject": "art",
        "primary_subject_id": "art",
        "domain": "艺术与文化",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "将形式分析、文化语境和审美判断联系起来，理解艺术意义如何在不同传统和时代中形成。",
        "mastery_evidence": [
          "能用形式与文化证据解释一个审美判断，并比较不同解释的依据。"
        ],
        "assessment_prompt": "审美判断有个人差异，为什么仍然需要证据和理由？",
        "source_anchor_ids": [
          "CU-024"
        ],
        "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "art",
            "role": "primary",
            "competency_ids": [
              "art.artistic_perception",
              "art.aesthetic_taste",
              "art.cultural_understanding"
            ],
            "content_anchor_ids": [
              "CU-024"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "art"
        ],
        "competency_ids": [
          "art.artistic_perception",
          "art.aesthetic_taste",
          "art.cultural_understanding"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ART-003",
        "name": "视觉叙事与信息层级",
        "subject": "art",
        "primary_subject_id": "art",
        "domain": "视觉表达",
        "stage": 2,
        "type": "representational",
        "node_kind": "representational",
        "description": "运用构图、顺序、对比、焦点和媒介选择，把复杂信息转化为可理解且不误导的视觉叙事。",
        "mastery_evidence": [
          "能制作一版视觉信息草图，并说明层级、阅读路径和关键取舍。"
        ],
        "assessment_prompt": "一个视觉作品很吸引人，为什么仍可能传达错误信息？",
        "source_anchor_ids": [
          "CU-026",
          "CU-030"
        ],
        "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "art",
            "role": "primary",
            "competency_ids": [
              "art.artistic_perception",
              "art.creative_expression"
            ],
            "content_anchor_ids": [
              "CU-026",
              "CU-030"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "art"
        ],
        "competency_ids": [
          "art.artistic_perception",
          "art.creative_expression"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ART-004",
        "name": "以使用者为中心的创意原型",
        "subject": "art",
        "primary_subject_id": "art",
        "domain": "创意实践",
        "stage": 3,
        "type": "procedural",
        "node_kind": "procedural",
        "description": "从真实使用情境与受众反馈出发，将想法转化为可体验、可测试、可迭代的视觉或空间原型。",
        "mastery_evidence": [
          "能呈现原型、设计标准和用户反馈，并说明至少一次有证据的修改。"
        ],
        "assessment_prompt": "一个创意原型怎样证明它不仅“好看”，而且真正回应了需要？",
        "source_anchor_ids": [
          "CU-023",
          "CU-025",
          "CU-026",
          "CU-030"
        ],
        "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "art",
            "role": "primary",
            "competency_ids": [
              "art.creative_expression",
              "art.artistic_perception",
              "art.aesthetic_taste"
            ],
            "content_anchor_ids": [
              "CU-023",
              "CU-025",
              "CU-026",
              "CU-030"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "art"
        ],
        "competency_ids": [
          "art.creative_expression",
          "art.artistic_perception",
          "art.aesthetic_taste"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ART-005",
        "name": "公共创意表达与文化责任",
        "subject": "art",
        "primary_subject_id": "art",
        "domain": "公共艺术",
        "stage": 4,
        "type": "meta",
        "node_kind": "meta",
        "description": "面向公共受众整合审美、文化语境、可及性和表达伦理，完成能被质询的艺术或数字媒介作品。",
        "mastery_evidence": [
          "能说明作品的文化来源、受众、版权、可及性与可能影响，并根据反馈修订。"
        ],
        "assessment_prompt": "公共表达中的创意自由为什么仍需要文化与受众责任？",
        "source_anchor_ids": [
          "CU-024",
          "CU-026",
          "CU-030"
        ],
        "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "art",
            "role": "primary",
            "competency_ids": [
              "art.creative_expression",
              "art.aesthetic_taste",
              "art.cultural_understanding"
            ],
            "content_anchor_ids": [
              "CU-024",
              "CU-026",
              "CU-030"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "art"
        ],
        "competency_ids": [
          "art.creative_expression",
          "art.aesthetic_taste",
          "art.cultural_understanding"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-PE-001",
        "name": "运动能力与身体反馈",
        "subject": "physical_education_health",
        "primary_subject_id": "physical_education_health",
        "domain": "运动能力",
        "stage": 1,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "理解体能、动作技能、运动认知和身体反馈的关系，用安全方式观察自己的运动状态。",
        "mastery_evidence": [
          "能选择并记录一项适合自身的运动表现指标，说明测量条件和安全边界。"
        ],
        "assessment_prompt": "运动表现提高，为什么不一定意味着健康状态全面改善？",
        "source_anchor_ids": [
          "CU-034",
          "CU-036"
        ],
        "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physical_education_health",
            "role": "primary",
            "competency_ids": [
              "physical_education_health.motor_ability"
            ],
            "content_anchor_ids": [
              "CU-034",
              "CU-036"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physical_education_health"
        ],
        "competency_ids": [
          "physical_education_health.motor_ability"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-PE-002",
        "name": "健康行为与生活方式",
        "subject": "physical_education_health",
        "primary_subject_id": "physical_education_health",
        "domain": "健康行为",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "把运动、睡眠、饮食、情绪和环境适应视为相互联系的健康行为系统，而不是孤立打卡指标。",
        "mastery_evidence": [
          "能分析一周健康行为记录，指出可能的关系、个体差异和需要进一步验证的解释。"
        ],
        "assessment_prompt": "为什么同一套健康建议不一定适合所有人？",
        "source_anchor_ids": [
          "CU-034",
          "CU-035"
        ],
        "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physical_education_health",
            "role": "primary",
            "competency_ids": [
              "physical_education_health.health_behavior"
            ],
            "content_anchor_ids": [
              "CU-034",
              "CU-035"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physical_education_health"
        ],
        "competency_ids": [
          "physical_education_health.health_behavior"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-PE-003",
        "name": "个人运动与健康改进计划",
        "subject": "physical_education_health",
        "primary_subject_id": "physical_education_health",
        "domain": "自我管理",
        "stage": 3,
        "type": "procedural",
        "node_kind": "procedural",
        "description": "根据个人条件、健康证据和安全边界设定目标，实施并调整可持续的运动与生活方式计划。",
        "mastery_evidence": [
          "能提交包含基线、目标、频率强度、风险控制、记录方式和调整规则的个人计划。"
        ],
        "assessment_prompt": "一个目标很有挑战性，为什么仍可能不是好目标？",
        "source_anchor_ids": [
          "CU-034",
          "CU-035"
        ],
        "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physical_education_health",
            "role": "primary",
            "competency_ids": [
              "physical_education_health.motor_ability",
              "physical_education_health.health_behavior"
            ],
            "content_anchor_ids": [
              "CU-034",
              "CU-035"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physical_education_health"
        ],
        "competency_ids": [
          "physical_education_health.motor_ability",
          "physical_education_health.health_behavior"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-PE-004",
        "name": "规则、公平与团队合作",
        "subject": "physical_education_health",
        "primary_subject_id": "physical_education_health",
        "domain": "体育品德",
        "stage": 3,
        "type": "meta",
        "node_kind": "meta",
        "description": "在体育与公共活动中分析规则、安全、参与机会、公平竞争和团队责任，把价值判断落实为可执行约定。",
        "mastery_evidence": [
          "能用一个真实活动案例比较形式平等、机会公平和安全需要，并提出规则修订理由。"
        ],
        "assessment_prompt": "对所有人使用同一条体育规则，为什么有时反而不公平？",
        "source_anchor_ids": [
          "CU-031",
          "CU-036",
          "CU-053"
        ],
        "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页；16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 58 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physical_education_health",
            "role": "primary",
            "competency_ids": [
              "physical_education_health.sports_ethics",
              "physical_education_health.health_behavior"
            ],
            "content_anchor_ids": [
              "CU-031",
              "CU-036",
              "CU-053"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physical_education_health"
        ],
        "competency_ids": [
          "physical_education_health.sports_ethics",
          "physical_education_health.health_behavior"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-PE-005",
        "name": "健康行动成效与共同照护",
        "subject": "physical_education_health",
        "primary_subject_id": "physical_education_health",
        "domain": "健康促进",
        "stage": 4,
        "type": "synthesis",
        "node_kind": "synthesis",
        "description": "综合个人数据、身体反馈、同伴支持和隐私边界，评价健康行动并形成尊重差异的共同照护方案。",
        "mastery_evidence": [
          "能用前后证据评价计划成效，说明不能得出的结论，并提出个人调整和集体支持建议。"
        ],
        "assessment_prompt": "一个班级平均健康指标改善，为什么仍不能说明每个人都受益？",
        "source_anchor_ids": [
          "CU-034",
          "CU-035"
        ],
        "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physical_education_health",
            "role": "primary",
            "competency_ids": [
              "physical_education_health.motor_ability",
              "physical_education_health.health_behavior",
              "physical_education_health.sports_ethics"
            ],
            "content_anchor_ids": [
              "CU-034",
              "CU-035"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physical_education_health"
        ],
        "competency_ids": [
          "physical_education_health.motor_ability",
          "physical_education_health.health_behavior",
          "physical_education_health.sports_ethics"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-BIO-001",
        "name": "生命系统与结构功能",
        "subject": "biology",
        "primary_subject_id": "biology",
        "domain": "生命系统",
        "stage": 1,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "从细胞到个体，把生命现象理解为结构、功能与层级相互联系的系统，而不是孤立事实的集合。",
        "mastery_evidence": [
          "能用结构与功能关系解释一个生命现象，并指出解释所处的系统层级。"
        ],
        "assessment_prompt": "为什么同一种结构变化可能同时影响多个生命功能？",
        "source_anchor_ids": [
          "CU-008"
        ],
        "source_ref": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "biology",
            "role": "primary",
            "competency_ids": [
              "biology.life_concept"
            ],
            "content_anchor_ids": [
              "CU-008"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "biology"
        ],
        "competency_ids": [
          "biology.life_concept"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-BIO-002",
        "name": "稳态、节律与健康",
        "subject": "biology",
        "primary_subject_id": "biology",
        "domain": "稳态与调节",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "用动态平衡解释睡眠、压力、体温、营养和运动等因素如何共同影响身体状态。",
        "mastery_evidence": [
          "能画出一个健康变量的调节关系，并解释偏离稳态后可能出现的反馈。"
        ],
        "assessment_prompt": "稳态为什么不是“始终保持同一个数值”？",
        "source_anchor_ids": [
          "CU-010"
        ],
        "source_ref": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "biology",
            "role": "primary",
            "competency_ids": [
              "biology.life_concept",
              "biology.scientific_thinking"
            ],
            "content_anchor_ids": [
              "CU-010"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "biology"
        ],
        "competency_ids": [
          "biology.life_concept",
          "biology.scientific_thinking"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-BIO-003",
        "name": "生态系统、碳循环与生物多样性",
        "subject": "biology",
        "primary_subject_id": "biology",
        "domain": "生物与环境",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "把物种、环境、物质循环和能量流动放入同一生态系统中，解释生物多样性与生态功能的关系。",
        "mastery_evidence": [
          "能用食物网或物质循环图解释一个校园生态变化的连锁影响。"
        ],
        "assessment_prompt": "增加绿化面积是否一定等于提升生物多样性？",
        "source_anchor_ids": [
          "CU-011"
        ],
        "source_ref": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 32 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "biology",
            "role": "primary",
            "competency_ids": [
              "biology.life_concept",
              "biology.scientific_thinking",
              "biology.social_responsibility"
            ],
            "content_anchor_ids": [
              "CU-011"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "biology"
        ],
        "competency_ids": [
          "biology.life_concept",
          "biology.scientific_thinking",
          "biology.social_responsibility"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-BIO-004",
        "name": "生物学观察与对照探究",
        "subject": "biology",
        "primary_subject_id": "biology",
        "domain": "科学探究",
        "stage": 3,
        "type": "procedural",
        "node_kind": "procedural",
        "description": "从现实生命问题出发，提出可检验问题，设计观察、对照或实验方案，并用证据评估解释。",
        "mastery_evidence": [
          "能说明自变量、因变量、控制条件和重复测量，并识别方案中的混杂因素。"
        ],
        "assessment_prompt": "一个健康观察为什么不能只比较“改变前”和“改变后”？",
        "source_anchor_ids": [
          "CU-008",
          "CU-010",
          "CU-011"
        ],
        "source_ref": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页；10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页；10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 32 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "biology",
            "role": "primary",
            "competency_ids": [
              "biology.scientific_inquiry",
              "biology.scientific_thinking"
            ],
            "content_anchor_ids": [
              "CU-008",
              "CU-010",
              "CU-011"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "biology"
        ],
        "competency_ids": [
          "biology.scientific_inquiry",
          "biology.scientific_thinking"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-BIO-005",
        "name": "生物技术、健康与生态责任",
        "subject": "biology",
        "primary_subject_id": "biology",
        "domain": "生物技术与社会",
        "stage": 4,
        "type": "meta",
        "node_kind": "meta",
        "description": "综合生命科学证据、技术能力、风险和受影响群体，判断健康或生态干预的适用边界与责任。",
        "mastery_evidence": [
          "能比较一项生物技术或健康干预的收益、风险、证据强度与社会责任。"
        ],
        "assessment_prompt": "技术上可行的生命干预为什么仍可能不值得采用？",
        "source_anchor_ids": [
          "CU-012"
        ],
        "source_ref": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 36 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "biology",
            "role": "primary",
            "competency_ids": [
              "biology.life_concept",
              "biology.scientific_thinking",
              "biology.social_responsibility"
            ],
            "content_anchor_ids": [
              "CU-012"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "biology"
        ],
        "competency_ids": [
          "biology.life_concept",
          "biology.scientific_thinking",
          "biology.social_responsibility"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GEO-001",
        "name": "空间位置、尺度与地图表达",
        "subject": "geography",
        "primary_subject_id": "geography",
        "domain": "空间认知",
        "stage": 1,
        "type": "representational",
        "node_kind": "representational",
        "description": "用位置、距离、方向、尺度和图层表达校园或区域中的空间关系，并理解不同尺度会改变可见模式。",
        "mastery_evidence": [
          "能选择合适尺度绘制带有图例和位置关系的简图，并解释尺度选择造成的信息取舍。"
        ],
        "assessment_prompt": "为什么同一个问题在校园尺度和城市尺度上会得到不同答案？",
        "source_anchor_ids": [
          "CU-105",
          "CU-114"
        ],
        "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 16 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 32 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "geography",
            "role": "primary",
            "competency_ids": [
              "geography.regional_cognition",
              "geography.geographical_practice"
            ],
            "content_anchor_ids": [
              "CU-105",
              "CU-114"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "geography"
        ],
        "competency_ids": [
          "geography.regional_cognition",
          "geography.geographical_practice"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GEO-002",
        "name": "人地关系与复合系统",
        "subject": "geography",
        "primary_subject_id": "geography",
        "domain": "人地关系",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "把自然条件、空间结构、人口活动和制度选择视为相互作用的复合系统，分析变化的多重原因与后果。",
        "mastery_evidence": [
          "能用因果关系图解释一个人地问题，并区分直接作用、间接作用和反馈。"
        ],
        "assessment_prompt": "一个环境问题为什么很少只有“自然原因”或“人为原因”？",
        "source_anchor_ids": [
          "CU-105",
          "CU-106"
        ],
        "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 16 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 18 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "geography",
            "role": "primary",
            "competency_ids": [
              "geography.human_land_coordination",
              "geography.comprehensive_thinking"
            ],
            "content_anchor_ids": [
              "CU-105",
              "CU-106"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "geography"
        ],
        "competency_ids": [
          "geography.human_land_coordination",
          "geography.comprehensive_thinking"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GEO-003",
        "name": "区域比较与空间差异",
        "subject": "geography",
        "primary_subject_id": "geography",
        "domain": "区域认知",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "通过区域边界、内部差异、区域联系和比较维度，解释为什么同一方案在不同地点会产生不同结果。",
        "mastery_evidence": [
          "能选取可比指标比较两个区域，并说明比较的边界和局限。"
        ],
        "assessment_prompt": "比较两个地方时，怎样避免只挑对自己结论有利的差异？",
        "source_anchor_ids": [
          "CU-106",
          "CU-112"
        ],
        "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 18 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "geography",
            "role": "primary",
            "competency_ids": [
              "geography.regional_cognition",
              "geography.comprehensive_thinking"
            ],
            "content_anchor_ids": [
              "CU-106",
              "CU-112"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "geography"
        ],
        "competency_ids": [
          "geography.regional_cognition",
          "geography.comprehensive_thinking"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GEO-004",
        "name": "地理调查、路线与空间数据",
        "subject": "geography",
        "primary_subject_id": "geography",
        "domain": "地理实践",
        "stage": 3,
        "type": "procedural",
        "node_kind": "procedural",
        "description": "设计现场观察路线，采集位置与环境信息，形成可回溯的空间数据并检验空间解释。",
        "mastery_evidence": [
          "能提交包含路线、采样点、时间、工具、记录规范和安全要求的调查方案。"
        ],
        "assessment_prompt": "为什么空间调查不能只选择最方便到达的地点？",
        "source_anchor_ids": [
          "CU-114",
          "CU-115"
        ],
        "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 32 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 33 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "geography",
            "role": "primary",
            "competency_ids": [
              "geography.geographical_practice",
              "geography.regional_cognition"
            ],
            "content_anchor_ids": [
              "CU-114",
              "CU-115"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "geography"
        ],
        "competency_ids": [
          "geography.geographical_practice",
          "geography.regional_cognition"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-GEO-005",
        "name": "可持续空间决策",
        "subject": "geography",
        "primary_subject_id": "geography",
        "domain": "可持续发展",
        "stage": 4,
        "type": "meta",
        "node_kind": "meta",
        "description": "综合环境承载、空间差异、资源配置和群体影响，在多个方案之间作出情境化的可持续选择。",
        "mastery_evidence": [
          "能比较至少两个空间方案的环境、社会与实施后果，并说明推荐方案的适用条件。"
        ],
        "assessment_prompt": "“对环境最好”的方案为什么未必就是最可持续的方案？",
        "source_anchor_ids": [
          "CU-109",
          "CU-110",
          "CU-112"
        ],
        "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 26 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "geography",
            "role": "primary",
            "competency_ids": [
              "geography.human_land_coordination",
              "geography.comprehensive_thinking",
              "geography.regional_cognition",
              "geography.geographical_practice"
            ],
            "content_anchor_ids": [
              "CU-109",
              "CU-110",
              "CU-112"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "geography"
        ],
        "competency_ids": [
          "geography.human_land_coordination",
          "geography.comprehensive_thinking",
          "geography.regional_cognition",
          "geography.geographical_practice"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-PHY-001",
        "name": "物理量、测量与单位",
        "subject": "physics",
        "primary_subject_id": "physics",
        "domain": "测量基础",
        "stage": 1,
        "type": "procedural",
        "node_kind": "procedural",
        "description": "把现实属性转化为定义清楚、单位一致、精度可说明的物理量，并记录测量条件。",
        "mastery_evidence": [
          "能选择合适工具和单位完成重复测量，并报告精度、误差来源和原始记录。"
        ],
        "assessment_prompt": "两个数值相同的测量结果为什么可能并不具有相同可信度？",
        "source_anchor_ids": [
          "CU-116",
          "CU-117"
        ],
        "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physics",
            "role": "primary",
            "competency_ids": [
              "physics.scientific_inquiry",
              "physics.scientific_attitude_responsibility"
            ],
            "content_anchor_ids": [
              "CU-116",
              "CU-117"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physics"
        ],
        "competency_ids": [
          "physics.scientific_inquiry",
          "physics.scientific_attitude_responsibility"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-PHY-002",
        "name": "运动、能量与系统转换",
        "subject": "physics",
        "primary_subject_id": "physics",
        "domain": "运动与能量",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "用运动、相互作用和能量转换解释交通、设备与校园能耗问题，识别系统边界与损耗。",
        "mastery_evidence": [
          "能画出一个真实装置或活动的能量转换链，并说明效率损失发生在哪里。"
        ],
        "assessment_prompt": "节约能源为什么不仅是“少用一点电”？",
        "source_anchor_ids": [
          "CU-118",
          "CU-120",
          "CU-127"
        ],
        "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 21 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 23 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physics",
            "role": "primary",
            "competency_ids": [
              "physics.physical_concepts",
              "physics.scientific_thinking"
            ],
            "content_anchor_ids": [
              "CU-118",
              "CU-120",
              "CU-127"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physics"
        ],
        "competency_ids": [
          "physics.physical_concepts",
          "physics.scientific_thinking"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-PHY-003",
        "name": "变量关系与物理模型",
        "subject": "physics",
        "primary_subject_id": "physics",
        "domain": "模型建构",
        "stage": 2,
        "type": "representational",
        "node_kind": "representational",
        "description": "从真实情境中抽取关键变量、条件和关系，建立能解释或预测的简化物理模型。",
        "mastery_evidence": [
          "能说明模型保留和忽略了什么，并用观测数据检查模型的解释范围。"
        ],
        "assessment_prompt": "模型越接近现实、变量越多，就一定越好吗？",
        "source_anchor_ids": [
          "CU-117",
          "CU-122"
        ],
        "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physics",
            "role": "primary",
            "competency_ids": [
              "physics.physical_concepts",
              "physics.scientific_thinking"
            ],
            "content_anchor_ids": [
              "CU-117",
              "CU-122"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physics"
        ],
        "competency_ids": [
          "physics.physical_concepts",
          "physics.scientific_thinking"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-PHY-004",
        "name": "物理实验、证据与模型校准",
        "subject": "physics",
        "primary_subject_id": "physics",
        "domain": "科学探究",
        "stage": 3,
        "type": "procedural",
        "node_kind": "procedural",
        "description": "通过提出问题、控制变量、重复测量和比较模型预测，获得证据并修正物理解释。",
        "mastery_evidence": [
          "能设计可重复的实验或现场测试，并用误差分析说明结论的可靠程度。"
        ],
        "assessment_prompt": "实验结果与预测不一致时，怎样判断应修改模型还是重做测量？",
        "source_anchor_ids": [
          "CU-116",
          "CU-136"
        ],
        "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physics",
            "role": "primary",
            "competency_ids": [
              "physics.scientific_inquiry",
              "physics.scientific_thinking",
              "physics.scientific_attitude_responsibility"
            ],
            "content_anchor_ids": [
              "CU-116",
              "CU-136"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physics"
        ],
        "competency_ids": [
          "physics.scientific_inquiry",
          "physics.scientific_thinking",
          "physics.scientific_attitude_responsibility"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-PHY-005",
        "name": "物理技术、环境与社会责任",
        "subject": "physics",
        "primary_subject_id": "physics",
        "domain": "STSE",
        "stage": 4,
        "type": "meta",
        "node_kind": "meta",
        "description": "从物理机制、性能证据、资源消耗、环境影响与公共需要综合评价一项技术方案。",
        "mastery_evidence": [
          "能基于物理证据比较两个技术方案，并明确收益、代价、风险和不确定性。"
        ],
        "assessment_prompt": "效率更高的技术为什么仍可能不是更负责任的选择？",
        "source_anchor_ids": [
          "CU-127",
          "CU-144",
          "CU-145",
          "CU-148"
        ],
        "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 46 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 47 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 48 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physics",
            "role": "primary",
            "competency_ids": [
              "physics.physical_concepts",
              "physics.scientific_thinking",
              "physics.scientific_attitude_responsibility"
            ],
            "content_anchor_ids": [
              "CU-127",
              "CU-144",
              "CU-145",
              "CU-148"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physics"
        ],
        "competency_ids": [
          "physics.physical_concepts",
          "physics.scientific_thinking",
          "physics.scientific_attitude_responsibility"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-CHEM-001",
        "name": "宏观现象、微观结构与符号表征",
        "subject": "chemistry",
        "primary_subject_id": "chemistry",
        "domain": "物质结构",
        "stage": 1,
        "type": "representational",
        "node_kind": "representational",
        "description": "在可观察现象、粒子层面解释和化学符号之间转换，用结构与性质关系理解材料。",
        "mastery_evidence": [
          "能用宏观、微观和符号三种表征解释同一物质或变化，并指出每种表征的作用。"
        ],
        "assessment_prompt": "只写出化学式，为什么还不能说明你理解了物质性质？",
        "source_anchor_ids": [
          "CU-157",
          "CU-165"
        ],
        "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 44 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "chemistry",
            "role": "primary",
            "competency_ids": [
              "chemistry.macro_micro"
            ],
            "content_anchor_ids": [
              "CU-157",
              "CU-165"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "chemistry"
        ],
        "competency_ids": [
          "chemistry.macro_micro"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-CHEM-002",
        "name": "物质变化、能量与动态平衡",
        "subject": "chemistry",
        "primary_subject_id": "chemistry",
        "domain": "化学变化",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "用反应条件、能量变化、速率、限度和平衡解释燃烧、材料转化和环境过程。",
        "mastery_evidence": [
          "能说明改变条件如何影响反应过程，并区分反应能否发生、进行多快和达到何种限度。"
        ],
        "assessment_prompt": "一个反应“能够发生”为什么不等于它会很快完成？",
        "source_anchor_ids": [
          "CU-158",
          "CU-161",
          "CU-163"
        ],
        "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 26 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 35 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "chemistry",
            "role": "primary",
            "competency_ids": [
              "chemistry.changes_equilibrium",
              "chemistry.macro_micro"
            ],
            "content_anchor_ids": [
              "CU-158",
              "CU-161",
              "CU-163"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "chemistry"
        ],
        "competency_ids": [
          "chemistry.changes_equilibrium",
          "chemistry.macro_micro"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-CHEM-003",
        "name": "化学证据与模型解释",
        "subject": "chemistry",
        "primary_subject_id": "chemistry",
        "domain": "证据推理",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "根据实验现象、测量数据和物质结构证据提出解释，区分观察、推断、模型和结论。",
        "mastery_evidence": [
          "能用证据支持或反驳一个物质性质解释，并说明模型如何连接证据与结论。"
        ],
        "assessment_prompt": "看见颜色变化时，我们到底观察到了什么，又推断了什么？",
        "source_anchor_ids": [
          "CU-156",
          "CU-168"
        ],
        "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 51 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "chemistry",
            "role": "primary",
            "competency_ids": [
              "chemistry.evidence_model",
              "chemistry.macro_micro"
            ],
            "content_anchor_ids": [
              "CU-156",
              "CU-168"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "chemistry"
        ],
        "competency_ids": [
          "chemistry.evidence_model",
          "chemistry.macro_micro"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-CHEM-004",
        "name": "化学实验、安全与创新探究",
        "subject": "chemistry",
        "primary_subject_id": "chemistry",
        "domain": "科学探究",
        "stage": 3,
        "type": "procedural",
        "node_kind": "procedural",
        "description": "围绕化学问题设计安全、可执行、可复核的实验方案，并根据证据提出改进或新的探究方向。",
        "mastery_evidence": [
          "能提交包含风险识别、变量控制、废弃物处理和异常处置的实验方案。"
        ],
        "assessment_prompt": "一个结果清楚但安全边界不明的实验，能算好实验吗？",
        "source_anchor_ids": [
          "CU-156",
          "CU-173",
          "CU-174"
        ],
        "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 62 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 63 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "chemistry",
            "role": "primary",
            "competency_ids": [
              "chemistry.inquiry_innovation",
              "chemistry.attitude_responsibility"
            ],
            "content_anchor_ids": [
              "CU-156",
              "CU-173",
              "CU-174"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "chemistry"
        ],
        "competency_ids": [
          "chemistry.inquiry_innovation",
          "chemistry.attitude_responsibility"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-CHEM-005",
        "name": "材料生命周期与化学责任",
        "subject": "chemistry",
        "primary_subject_id": "chemistry",
        "domain": "化学与社会",
        "stage": 4,
        "type": "meta",
        "node_kind": "meta",
        "description": "从原料、生产、使用、回收和排放全过程评价材料与化学过程的社会价值和环境责任。",
        "mastery_evidence": [
          "能绘制一种材料的生命周期并比较至少两个替代方案的性能、资源、安全和环境影响。"
        ],
        "assessment_prompt": "“可降解”为什么不自动意味着一种材料更环保？",
        "source_anchor_ids": [
          "CU-160",
          "CU-176",
          "CU-177",
          "CU-179"
        ],
        "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 31 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 63 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 65 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 67 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "chemistry",
            "role": "primary",
            "competency_ids": [
              "chemistry.changes_equilibrium",
              "chemistry.evidence_model",
              "chemistry.attitude_responsibility"
            ],
            "content_anchor_ids": [
              "CU-160",
              "CU-176",
              "CU-177",
              "CU-179"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "chemistry"
        ],
        "competency_ids": [
          "chemistry.changes_equilibrium",
          "chemistry.evidence_model",
          "chemistry.attitude_responsibility"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-WELL-001",
        "name": "健康问题、个体差异与尊严",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "健康与幸福",
        "stage": 1,
        "type": "synthesis",
        "node_kind": "synthesis",
        "description": "把健康问题界定为身体、行为、关系和环境共同作用的个人议题，同时保护隐私、尊重差异与自主选择。",
        "mastery_evidence": [
          "能提出一个不污名化、可调查且明确隐私边界的健康问题。"
        ],
        "assessment_prompt": "怎样讨论健康差异，才不会把个体变成标签？",
        "source_anchor_ids": [
          "CU-035",
          "CU-010",
          "CU-063"
        ],
        "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页；10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physical_education_health",
            "role": "primary",
            "competency_ids": [
              "physical_education_health.health_behavior",
              "physical_education_health.sports_ethics"
            ],
            "content_anchor_ids": [
              "CU-035"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "biology",
            "role": "supporting",
            "competency_ids": [
              "biology.life_concept",
              "biology.social_responsibility"
            ],
            "content_anchor_ids": [
              "CU-010"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chinese",
            "role": "supporting",
            "competency_ids": [
              "chinese.language_construction",
              "chinese.thinking_development"
            ],
            "content_anchor_ids": [
              "CU-063"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physical_education_health",
          "biology",
          "chinese"
        ],
        "competency_ids": [
          "physical_education_health.health_behavior",
          "physical_education_health.sports_ethics",
          "biology.life_concept",
          "biology.social_responsibility",
          "chinese.language_construction",
          "chinese.thinking_development"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-WELL-002",
        "name": "健康证据画像与机制解释",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "健康证据",
        "stage": 3,
        "type": "synthesis",
        "node_kind": "synthesis",
        "description": "综合匿名行为记录、趋势、身体机制和个人叙述，形成有限度的健康状态解释，而不是诊断或排名。",
        "mastery_evidence": [
          "能制作一份带有证据来源、趋势、可能机制、替代解释和隐私说明的健康画像。"
        ],
        "assessment_prompt": "健康数据变化与学习状态同时出现时，怎样避免直接断言因果？",
        "source_anchor_ids": [
          "CU-034",
          "CU-035",
          "CU-010",
          "CU-078"
        ],
        "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页；10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physical_education_health",
            "role": "primary",
            "competency_ids": [
              "physical_education_health.health_behavior"
            ],
            "content_anchor_ids": [
              "CU-034",
              "CU-035"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "biology",
            "role": "supporting",
            "competency_ids": [
              "biology.life_concept",
              "biology.scientific_thinking"
            ],
            "content_anchor_ids": [
              "CU-010"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.data_analysis",
              "mathematics.logical_reasoning"
            ],
            "content_anchor_ids": [
              "CU-078"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physical_education_health",
          "biology",
          "mathematics"
        ],
        "competency_ids": [
          "physical_education_health.health_behavior",
          "biology.life_concept",
          "biology.scientific_thinking",
          "mathematics.data_analysis",
          "mathematics.logical_reasoning"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-WELL-003",
        "name": "健康改进与共同照护方案",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "行动与照护",
        "stage": 4,
        "type": "synthesis",
        "node_kind": "synthesis",
        "description": "基于个人条件和证据设计可试行、可调整的健康计划，同时形成尊重差异和隐私的同伴支持机制。",
        "mastery_evidence": [
          "能展示计划、试行证据、调整逻辑和同伴支持约定，并说明方案不适用的边界。"
        ],
        "assessment_prompt": "一个有效的个人健康方案，怎样才能转化为不强迫他人的共同照护？",
        "source_anchor_ids": [
          "CU-034",
          "CU-035",
          "CU-010",
          "CU-091",
          "CU-058",
          "CU-063"
        ],
        "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页；10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 21 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "physical_education_health",
            "role": "primary",
            "competency_ids": [
              "physical_education_health.motor_ability",
              "physical_education_health.health_behavior",
              "physical_education_health.sports_ethics"
            ],
            "content_anchor_ids": [
              "CU-034",
              "CU-035"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "biology",
            "role": "supporting",
            "competency_ids": [
              "biology.scientific_thinking",
              "biology.social_responsibility"
            ],
            "content_anchor_ids": [
              "CU-010"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CU-091"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chinese",
            "role": "supporting",
            "competency_ids": [
              "chinese.language_construction"
            ],
            "content_anchor_ids": [
              "CU-058",
              "CU-063"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "physical_education_health",
          "biology",
          "civics",
          "chinese"
        ],
        "competency_ids": [
          "physical_education_health.motor_ability",
          "physical_education_health.health_behavior",
          "physical_education_health.sports_ethics",
          "biology.scientific_thinking",
          "biology.social_responsibility",
          "civics.scientific_spirit",
          "civics.public_participation",
          "chinese.language_construction"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-SYS-001",
        "name": "系统边界、要素与变量",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "系统建模",
        "stage": 1,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "为复杂问题划定研究边界，识别系统中的要素、变量、流入流出、约束和外部环境。",
        "mastery_evidence": [
          "能画出一个系统边界图，并解释至少三项纳入或排除的理由。"
        ],
        "assessment_prompt": "划定系统边界时，什么重要因素最容易被不小心排除？",
        "source_anchor_ids": [
          "CU-079",
          "CU-105",
          "CU-106",
          "CU-013"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 42 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 16 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 18 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.abstraction",
              "mathematics.modeling"
            ],
            "content_anchor_ids": [
              "CU-079"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "geography",
            "role": "supporting",
            "competency_ids": [
              "geography.comprehensive_thinking"
            ],
            "content_anchor_ids": [
              "CU-105",
              "CU-106"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "information_technology",
            "role": "supporting",
            "competency_ids": [
              "information_technology.computational_thinking"
            ],
            "content_anchor_ids": [
              "CU-013"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "geography",
          "information_technology"
        ],
        "competency_ids": [
          "mathematics.abstraction",
          "mathematics.modeling",
          "geography.comprehensive_thinking",
          "information_technology.computational_thinking"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-SYS-002",
        "name": "流动、反馈与动态变化",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "复杂系统",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "用存量、流量、正负反馈、延迟和瓶颈解释复杂系统为什么会出现非线性和意外结果。",
        "mastery_evidence": [
          "能为一个校园系统绘制反馈回路，并预测改变一个变量可能引发的直接与间接影响。"
        ],
        "assessment_prompt": "为什么解决一个局部瓶颈，有时会把拥堵转移到另一个位置？",
        "source_anchor_ids": [
          "CU-076",
          "CU-079",
          "CU-117",
          "CU-118",
          "CU-105"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 26 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 42 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 21 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 16 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.modeling",
              "mathematics.logical_reasoning"
            ],
            "content_anchor_ids": [
              "CU-076",
              "CU-079"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "physics",
            "role": "supporting",
            "competency_ids": [
              "physics.physical_concepts",
              "physics.scientific_thinking"
            ],
            "content_anchor_ids": [
              "CU-117",
              "CU-118"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "geography",
            "role": "supporting",
            "competency_ids": [
              "geography.comprehensive_thinking"
            ],
            "content_anchor_ids": [
              "CU-105"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "physics",
          "geography"
        ],
        "competency_ids": [
          "mathematics.modeling",
          "mathematics.logical_reasoning",
          "physics.physical_concepts",
          "physics.scientific_thinking",
          "geography.comprehensive_thinking"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-SYS-003",
        "name": "模型检验、局限与方案比较",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "模型判断",
        "stage": 4,
        "type": "synthesis",
        "node_kind": "synthesis",
        "description": "用现实数据校准模型，分析误差、假设与适用范围，并比较不同干预方案的预测效果和价值权衡。",
        "mastery_evidence": [
          "能提交模型预测、现实检验、误差解释和至少两个方案的比较。"
        ],
        "assessment_prompt": "一个预测准确的模型，为什么仍可能不能直接决定行动？",
        "source_anchor_ids": [
          "CU-079",
          "CU-083",
          "CU-117",
          "CU-096"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 42 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 58 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.modeling",
              "mathematics.data_analysis",
              "mathematics.logical_reasoning"
            ],
            "content_anchor_ids": [
              "CU-079",
              "CU-083"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "physics",
            "role": "supporting",
            "competency_ids": [
              "physics.scientific_thinking",
              "physics.scientific_inquiry"
            ],
            "content_anchor_ids": [
              "CU-117"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CU-096"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "physics",
          "civics"
        ],
        "competency_ids": [
          "mathematics.modeling",
          "mathematics.data_analysis",
          "mathematics.logical_reasoning",
          "physics.scientific_thinking",
          "physics.scientific_inquiry",
          "civics.scientific_spirit",
          "civics.public_participation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ECO-001",
        "name": "校园碳流、核算边界与排放因子",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "碳核算",
        "stage": 2,
        "type": "representational",
        "node_kind": "representational",
        "description": "描绘能源、交通、饮食、材料和生态碳汇，明确核算边界、活动数据、排放因子与不确定性。",
        "mastery_evidence": [
          "能绘制校园碳流图，列出核算范围、数据来源、排放因子和至少两项不确定性。"
        ],
        "assessment_prompt": "两个校园的碳排数字为什么可能因为核算边界不同而不能直接比较？",
        "source_anchor_ids": [
          "CU-105",
          "CU-110",
          "CU-160",
          "CU-176",
          "CU-127",
          "CU-079"
        ],
        "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 16 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 31 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 63 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 42 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "geography",
            "role": "primary",
            "competency_ids": [
              "geography.human_land_coordination",
              "geography.comprehensive_thinking"
            ],
            "content_anchor_ids": [
              "CU-105",
              "CU-110"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chemistry",
            "role": "supporting",
            "competency_ids": [
              "chemistry.changes_equilibrium",
              "chemistry.evidence_model"
            ],
            "content_anchor_ids": [
              "CU-160",
              "CU-176"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "physics",
            "role": "supporting",
            "competency_ids": [
              "physics.physical_concepts"
            ],
            "content_anchor_ids": [
              "CU-127"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.modeling",
              "mathematics.operation"
            ],
            "content_anchor_ids": [
              "CU-079"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "geography",
          "chemistry",
          "physics",
          "mathematics"
        ],
        "competency_ids": [
          "geography.human_land_coordination",
          "geography.comprehensive_thinking",
          "chemistry.changes_equilibrium",
          "chemistry.evidence_model",
          "physics.physical_concepts",
          "mathematics.modeling",
          "mathematics.operation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ECO-002",
        "name": "减排情景、成本与公平比较",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "减排决策",
        "stage": 3,
        "type": "synthesis",
        "node_kind": "synthesis",
        "description": "对能源、材料、交通和绿化等减排方案建立情景，比较效果、成本、受益群体、实施条件与反弹风险。",
        "mastery_evidence": [
          "能用统一指标比较至少三个减排方案，并明确模型假设、群体影响与推荐顺序。"
        ],
        "assessment_prompt": "碳减排量最大的方案为什么不一定应当最先实施？",
        "source_anchor_ids": [
          "CU-079",
          "CU-083",
          "CU-110",
          "CU-112",
          "CU-091"
        ],
        "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 42 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 58 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "mathematics",
            "role": "primary",
            "competency_ids": [
              "mathematics.modeling",
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CU-079",
              "CU-083"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "geography",
            "role": "supporting",
            "competency_ids": [
              "geography.human_land_coordination",
              "geography.comprehensive_thinking"
            ],
            "content_anchor_ids": [
              "CU-110",
              "CU-112"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CU-091"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "mathematics",
          "geography",
          "civics"
        ],
        "competency_ids": [
          "mathematics.modeling",
          "mathematics.data_analysis",
          "geography.human_land_coordination",
          "geography.comprehensive_thinking",
          "civics.scientific_spirit",
          "civics.public_participation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ECO-003",
        "name": "校园碳预算与行动路线",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "可持续行动",
        "stage": 4,
        "type": "synthesis",
        "node_kind": "synthesis",
        "description": "把碳核算与方案比较转化为有优先级、责任人、时间表、监测指标和复盘机制的校园减排行动。",
        "mastery_evidence": [
          "能提交三年行动路线并说明每项行动的证据、责任、资源、指标和调整条件。"
        ],
        "assessment_prompt": "一个行动目标写得很宏大，怎样判断它是否真的可执行、可追责？",
        "source_anchor_ids": [
          "CU-110",
          "CU-112",
          "CU-160",
          "CU-179",
          "CU-011",
          "CU-091",
          "CU-092"
        ],
        "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 31 页；9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 67 页；10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 32 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "geography",
            "role": "primary",
            "competency_ids": [
              "geography.human_land_coordination",
              "geography.geographical_practice"
            ],
            "content_anchor_ids": [
              "CU-110",
              "CU-112"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chemistry",
            "role": "supporting",
            "competency_ids": [
              "chemistry.attitude_responsibility"
            ],
            "content_anchor_ids": [
              "CU-160",
              "CU-179"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "biology",
            "role": "supporting",
            "competency_ids": [
              "biology.social_responsibility"
            ],
            "content_anchor_ids": [
              "CU-011"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.public_participation",
              "civics.scientific_spirit"
            ],
            "content_anchor_ids": [
              "CU-091",
              "CU-092"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "geography",
          "chemistry",
          "biology",
          "civics"
        ],
        "competency_ids": [
          "geography.human_land_coordination",
          "geography.geographical_practice",
          "chemistry.attitude_responsibility",
          "biology.social_responsibility",
          "civics.public_participation",
          "civics.scientific_spirit"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-CULT-001",
        "name": "文化对象的来源、时空与语境",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "文化证据",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "为一项文化对象建立来源、时间、空间、用途和解释语境，区分史料事实、合理推断与当代再阐释。",
        "mastery_evidence": [
          "能制作带来源的时空档案，并用不同标记区分事实、推断和未知。"
        ],
        "assessment_prompt": "一件文化对象的“原本意义”为什么常常不是唯一且固定的？",
        "source_anchor_ids": [
          "CU-102",
          "CU-104",
          "CU-064",
          "CU-070",
          "CU-024"
        ],
        "source_ref": "6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 45 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 29 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 35 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "history",
            "role": "primary",
            "competency_ids": [
              "history.temporal_spatial",
              "history.source_evidence",
              "history.historical_explanation"
            ],
            "content_anchor_ids": [
              "CU-102",
              "CU-104"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chinese",
            "role": "supporting",
            "competency_ids": [
              "chinese.cultural_inheritance",
              "chinese.thinking_development"
            ],
            "content_anchor_ids": [
              "CU-064",
              "CU-070"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "art",
            "role": "supporting",
            "competency_ids": [
              "art.artistic_perception",
              "art.cultural_understanding"
            ],
            "content_anchor_ids": [
              "CU-024"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "history",
          "chinese",
          "art"
        ],
        "competency_ids": [
          "history.temporal_spatial",
          "history.source_evidence",
          "history.historical_explanation",
          "chinese.cultural_inheritance",
          "chinese.thinking_development",
          "art.artistic_perception",
          "art.cultural_understanding"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-CULT-002",
        "name": "数字建档、视觉叙事与跨文化解释",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "数字文化",
        "stage": 3,
        "type": "synthesis",
        "node_kind": "synthesis",
        "description": "把可信资料转化为有元数据、视觉层级、双语语境和受众路径的数字文化叙事原型。",
        "mastery_evidence": [
          "能呈现数字档案结构、视觉故事板和双语说明，并让目标受众完成理解测试。"
        ],
        "assessment_prompt": "数字展示越沉浸，为什么越需要让观众看见证据来源和解释选择？",
        "source_anchor_ids": [
          "CU-019",
          "CU-022",
          "CU-026",
          "CU-030",
          "CU-084",
          "CU-087",
          "CU-088"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 36 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 44 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 43 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "primary",
            "competency_ids": [
              "information_technology.information_awareness",
              "information_technology.digital_learning_innovation",
              "information_technology.information_social_responsibility"
            ],
            "content_anchor_ids": [
              "CU-019",
              "CU-022"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "art",
            "role": "supporting",
            "competency_ids": [
              "art.creative_expression",
              "art.cultural_understanding"
            ],
            "content_anchor_ids": [
              "CU-026",
              "CU-030"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "english",
            "role": "supporting",
            "competency_ids": [
              "english.language_ability",
              "english.cultural_awareness"
            ],
            "content_anchor_ids": [
              "CU-084",
              "CU-087",
              "CU-088"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "art",
          "english"
        ],
        "competency_ids": [
          "information_technology.information_awareness",
          "information_technology.digital_learning_innovation",
          "information_technology.information_social_responsibility",
          "art.creative_expression",
          "art.cultural_understanding",
          "english.language_ability",
          "english.cultural_awareness"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-CULT-003",
        "name": "可信数字微展与解释责任",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "公共文化",
        "stage": 4,
        "type": "synthesis",
        "node_kind": "synthesis",
        "description": "面向真实公众完成兼顾历史真实性、审美、跨文化理解、版权和可及性的数字微展，并回应解释伦理质询。",
        "mastery_evidence": [
          "能公开展示作品、资料来源和解释说明，并根据真实性、受众和权利反馈修订。"
        ],
        "assessment_prompt": "数字化保存了文化对象的图像，为什么仍可能伤害它的文化意义？",
        "source_anchor_ids": [
          "CU-102",
          "CU-104",
          "CU-024",
          "CU-030",
          "CU-064",
          "CU-070",
          "CU-087",
          "CU-088"
        ],
        "source_ref": "6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 45 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 29 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 35 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页；4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 43 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "history",
            "role": "primary",
            "competency_ids": [
              "history.source_evidence",
              "history.historical_explanation",
              "history.national_sentiment"
            ],
            "content_anchor_ids": [
              "CU-102",
              "CU-104"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "art",
            "role": "supporting",
            "competency_ids": [
              "art.creative_expression",
              "art.aesthetic_taste",
              "art.cultural_understanding"
            ],
            "content_anchor_ids": [
              "CU-024",
              "CU-030"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chinese",
            "role": "supporting",
            "competency_ids": [
              "chinese.language_construction",
              "chinese.aesthetic_appreciation",
              "chinese.cultural_inheritance"
            ],
            "content_anchor_ids": [
              "CU-064",
              "CU-070"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "english",
            "role": "supporting",
            "competency_ids": [
              "english.language_ability",
              "english.cultural_awareness"
            ],
            "content_anchor_ids": [
              "CU-087",
              "CU-088"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "history",
          "art",
          "chinese",
          "english"
        ],
        "competency_ids": [
          "history.source_evidence",
          "history.historical_explanation",
          "history.national_sentiment",
          "art.creative_expression",
          "art.aesthetic_taste",
          "art.cultural_understanding",
          "chinese.language_construction",
          "chinese.aesthetic_appreciation",
          "chinese.cultural_inheritance",
          "english.language_ability",
          "english.cultural_awareness"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-FAIR-001",
        "name": "规则、权利与公平标准",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "公平与规则",
        "stage": 2,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "区分形式平等、机会公平、按需要分配、公共利益和安全等标准，分析规则中的权利、义务与价值冲突。",
        "mastery_evidence": [
          "能用至少三种公平标准分析一条校园规则，并说明标准之间的冲突。"
        ],
        "assessment_prompt": "对所有人一视同仁，为什么有时仍会产生不公平结果？",
        "source_anchor_ids": [
          "CU-092",
          "CU-095",
          "CU-096",
          "CU-100",
          "CU-036"
        ],
        "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 35 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页；16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "civics",
            "role": "primary",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.rule_of_law",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CU-092",
              "CU-095",
              "CU-096"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "history",
            "role": "supporting",
            "competency_ids": [
              "history.historical_materialism",
              "history.historical_explanation"
            ],
            "content_anchor_ids": [
              "CU-100"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "physical_education_health",
            "role": "supporting",
            "competency_ids": [
              "physical_education_health.sports_ethics"
            ],
            "content_anchor_ids": [
              "CU-036"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "civics",
          "history",
          "physical_education_health"
        ],
        "competency_ids": [
          "civics.scientific_spirit",
          "civics.rule_of_law",
          "civics.public_participation",
          "history.historical_materialism",
          "history.historical_explanation",
          "physical_education_health.sports_ethics"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-FAIR-002",
        "name": "规则影响调查与程序设计",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "公共程序",
        "stage": 3,
        "type": "procedural",
        "node_kind": "procedural",
        "description": "调查规则对不同群体的需要、机会和负担，设计公开、可参与、可执行、可复核的协商程序。",
        "mastery_evidence": [
          "能提交利益相关者调查、影响数据和包含听证、执行、复核与申诉的程序草案。"
        ],
        "assessment_prompt": "一次公开投票为什么不一定足以保证规则制定过程公平？",
        "source_anchor_ids": [
          "CU-092",
          "CU-095",
          "CU-078",
          "CU-058",
          "CU-063"
        ],
        "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 35 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 21 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "civics",
            "role": "primary",
            "competency_ids": [
              "civics.rule_of_law",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CU-092",
              "CU-095"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.data_analysis",
              "mathematics.logical_reasoning"
            ],
            "content_anchor_ids": [
              "CU-078"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chinese",
            "role": "supporting",
            "competency_ids": [
              "chinese.language_construction",
              "chinese.thinking_development"
            ],
            "content_anchor_ids": [
              "CU-058",
              "CU-063"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "civics",
          "mathematics",
          "chinese"
        ],
        "competency_ids": [
          "civics.rule_of_law",
          "civics.public_participation",
          "mathematics.data_analysis",
          "mathematics.logical_reasoning",
          "chinese.language_construction",
          "chinese.thinking_development"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-FAIR-003",
        "name": "校园规则听证与修订草案",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "公共决策",
        "stage": 4,
        "type": "synthesis",
        "node_kind": "synthesis",
        "description": "通过公开听证、理由回应和影响评估，将公平原则转化为权责清楚、可以执行、复核和修订的校园规则。",
        "mastery_evidence": [
          "能提交规则文本、立法理由、听证记录、异议回应、执行与申诉流程和效果指标。"
        ],
        "assessment_prompt": "一条规则写得非常清楚，为什么仍可能在执行中产生不公平？",
        "source_anchor_ids": [
          "CU-092",
          "CU-095",
          "CU-096",
          "CU-100",
          "CU-104",
          "CU-036"
        ],
        "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 35 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页；6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 45 页；16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "civics",
            "role": "primary",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.rule_of_law",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CU-092",
              "CU-095",
              "CU-096"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "history",
            "role": "supporting",
            "competency_ids": [
              "history.source_evidence",
              "history.historical_explanation"
            ],
            "content_anchor_ids": [
              "CU-100",
              "CU-104"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "physical_education_health",
            "role": "supporting",
            "competency_ids": [
              "physical_education_health.sports_ethics"
            ],
            "content_anchor_ids": [
              "CU-036"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "civics",
          "history",
          "physical_education_health"
        ],
        "competency_ids": [
          "civics.scientific_spirit",
          "civics.rule_of_law",
          "civics.public_participation",
          "history.source_evidence",
          "history.historical_explanation",
          "physical_education_health.sports_ethics"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ACT-001",
        "name": "真实需求、受影响者与成功标准",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "设计问题",
        "stage": 1,
        "type": "conceptual",
        "node_kind": "conceptual",
        "description": "通过观察和访谈把模糊抱怨转化为可验证的真实需求，识别受影响者、约束条件和可衡量的成功标准。",
        "mastery_evidence": [
          "能提交问题简报，说明谁受到影响、现有做法、真实需求、约束和成功指标。"
        ],
        "assessment_prompt": "为什么“我们需要一个应用程序”通常还不是一个好的问题定义？",
        "source_anchor_ids": [
          "CU-020",
          "CU-022",
          "CU-058",
          "CU-063",
          "CU-091"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 44 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 21 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "primary",
            "competency_ids": [
              "information_technology.information_awareness",
              "information_technology.computational_thinking"
            ],
            "content_anchor_ids": [
              "CU-020",
              "CU-022"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chinese",
            "role": "supporting",
            "competency_ids": [
              "chinese.language_construction",
              "chinese.thinking_development"
            ],
            "content_anchor_ids": [
              "CU-058",
              "CU-063"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CU-091"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "chinese",
          "civics"
        ],
        "competency_ids": [
          "information_technology.information_awareness",
          "information_technology.computational_thinking",
          "chinese.language_construction",
          "chinese.thinking_development",
          "civics.public_participation"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ACT-002",
        "name": "原型、测试与证据迭代",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "创造与试验",
        "stage": 3,
        "type": "procedural",
        "node_kind": "procedural",
        "description": "将需求与科学原理转化为可体验原型，用预先定义的指标测试，并依据证据记录每次迭代。",
        "mastery_evidence": [
          "能展示原型版本、测试方案、原始结果、失败点和有证据的修改记录。"
        ],
        "assessment_prompt": "原型测试得到正面反馈，为什么仍需要记录失败和意外结果？",
        "source_anchor_ids": [
          "CU-020",
          "CU-022",
          "CU-136",
          "CU-150",
          "CU-025",
          "CU-026",
          "CU-079"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 44 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页；8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 49 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 42 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "primary",
            "competency_ids": [
              "information_technology.computational_thinking",
              "information_technology.digital_learning_innovation"
            ],
            "content_anchor_ids": [
              "CU-020",
              "CU-022"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "physics",
            "role": "supporting",
            "competency_ids": [
              "physics.scientific_thinking",
              "physics.scientific_inquiry"
            ],
            "content_anchor_ids": [
              "CU-136",
              "CU-150"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "art",
            "role": "supporting",
            "competency_ids": [
              "art.creative_expression",
              "art.artistic_perception"
            ],
            "content_anchor_ids": [
              "CU-025",
              "CU-026"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "mathematics",
            "role": "supporting",
            "competency_ids": [
              "mathematics.modeling",
              "mathematics.data_analysis"
            ],
            "content_anchor_ids": [
              "CU-079"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "physics",
          "art",
          "mathematics"
        ],
        "competency_ids": [
          "information_technology.computational_thinking",
          "information_technology.digital_learning_innovation",
          "physics.scientific_thinking",
          "physics.scientific_inquiry",
          "art.creative_expression",
          "art.artistic_perception",
          "mathematics.modeling",
          "mathematics.data_analysis"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      },
      {
        "id": "T-ACT-003",
        "name": "采用、维护与负责任行动",
        "subject": "interdisciplinary",
        "primary_subject_id": null,
        "domain": "共同未来",
        "stage": 4,
        "type": "synthesis",
        "node_kind": "synthesis",
        "description": "综合测试证据、可及性、公共影响、资源、维护与意外后果，形成能被真实机构采用并持续复盘的行动提案。",
        "mastery_evidence": [
          "能提交采用与维护提案，明确证据、责任、资源、风险、效果指标和退出或调整条件。"
        ],
        "assessment_prompt": "一个原型测试成功，为什么仍可能不适合在全校推广？",
        "source_anchor_ids": [
          "CU-014",
          "CU-020",
          "CU-091",
          "CU-092",
          "CU-026",
          "CU-058",
          "CU-063"
        ],
        "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 23 页；11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页；5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页；13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 21 页；2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review",
        "curriculum_links": [
          {
            "subject_id": "information_technology",
            "role": "primary",
            "competency_ids": [
              "information_technology.digital_learning_innovation",
              "information_technology.information_social_responsibility"
            ],
            "content_anchor_ids": [
              "CU-014",
              "CU-020"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "civics",
            "role": "supporting",
            "competency_ids": [
              "civics.scientific_spirit",
              "civics.public_participation"
            ],
            "content_anchor_ids": [
              "CU-091",
              "CU-092"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "art",
            "role": "supporting",
            "competency_ids": [
              "art.creative_expression",
              "art.aesthetic_taste"
            ],
            "content_anchor_ids": [
              "CU-026"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          },
          {
            "subject_id": "chinese",
            "role": "supporting",
            "competency_ids": [
              "chinese.language_construction",
              "chinese.thinking_development"
            ],
            "content_anchor_ids": [
              "CU-058",
              "CU-063"
            ],
            "mapping_basis": "author",
            "review_status": "pending_subject_review"
          }
        ],
        "curriculum_subject_ids": [
          "information_technology",
          "civics",
          "art",
          "chinese"
        ],
        "competency_ids": [
          "information_technology.digital_learning_innovation",
          "information_technology.information_social_responsibility",
          "civics.scientific_spirit",
          "civics.public_participation",
          "art.creative_expression",
          "art.aesthetic_taste",
          "chinese.language_construction",
          "chinese.thinking_development"
        ],
        "alignment_status": "author_mapped_pending_subject_review"
      }
    ],
    "dependencies": [
      {
        "topic_id": "T-EVID-002",
        "prerequisite_id": "T-EVID-001",
        "strength": "hard",
        "reason": "先分清事实、数据与主张，才能判断证据如何支持论点。"
      },
      {
        "topic_id": "T-EVID-003",
        "prerequisite_id": "T-EVID-001",
        "strength": "soft",
        "reason": "识别主张与数据，有助于决定哪些来源最需要核验。"
      },
      {
        "topic_id": "T-EVID-004",
        "prerequisite_id": "T-EVID-002",
        "strength": "hard",
        "reason": "只有理解证据强度与推理，才能用合适的限定语表达结论。"
      },
      {
        "topic_id": "T-EVID-005",
        "prerequisite_id": "T-EVID-002",
        "strength": "hard",
        "reason": "有效质询必须指向论点、证据或推理中的具体环节。"
      },
      {
        "topic_id": "T-EVID-005",
        "prerequisite_id": "T-EVID-003",
        "strength": "soft",
        "reason": "来源核验为公开质询提供可核查的事实基础。"
      },
      {
        "topic_id": "T-DATA-003",
        "prerequisite_id": "T-DATA-001",
        "strength": "hard",
        "reason": "先明确观测对象和变量，才能界定样本与总体。"
      },
      {
        "topic_id": "T-DATA-004",
        "prerequisite_id": "T-DATA-003",
        "strength": "hard",
        "reason": "抽样偏差的判断建立在样本与总体的区分之上。"
      },
      {
        "topic_id": "T-DATA-005",
        "prerequisite_id": "T-DATA-002",
        "strength": "soft",
        "reason": "口径比较常需要检查百分比所依附的基数。"
      },
      {
        "topic_id": "T-DATA-005",
        "prerequisite_id": "T-DATA-001",
        "strength": "hard",
        "reason": "口径是否一致取决于对象和变量是否按同一方式定义。"
      },
      {
        "topic_id": "T-DATA-006",
        "prerequisite_id": "T-DATA-002",
        "strength": "soft",
        "reason": "比例与基数帮助理解集中趋势数字的实际规模。"
      },
      {
        "topic_id": "T-DATA-006",
        "prerequisite_id": "T-DATA-003",
        "strength": "hard",
        "reason": "描述样本分布前必须明确样本来自哪里、代表什么。"
      },
      {
        "topic_id": "T-DATA-007",
        "prerequisite_id": "T-DATA-001",
        "strength": "hard",
        "reason": "因果判断需要明确变量及其可能关系。"
      },
      {
        "topic_id": "T-DATA-007",
        "prerequisite_id": "T-EVID-002",
        "strength": "soft",
        "reason": "论证结构帮助发现从相关跳到因果的推理跳步。"
      },
      {
        "topic_id": "T-DATA-009",
        "prerequisite_id": "T-DATA-003",
        "strength": "hard",
        "reason": "缺失和异常只有相对于样本结构与总体目标才有意义。"
      },
      {
        "topic_id": "T-DATA-010",
        "prerequisite_id": "T-DATA-005",
        "strength": "hard",
        "reason": "统计口径不一致是数据表达误导的常见来源。"
      },
      {
        "topic_id": "T-DATA-010",
        "prerequisite_id": "T-DATA-006",
        "strength": "soft",
        "reason": "单一平均数可能遮蔽分布，需在识别误导时检查。"
      },
      {
        "topic_id": "T-DATA-010",
        "prerequisite_id": "T-DATA-008",
        "strength": "hard",
        "reason": "识别图表误导需要理解坐标轴、比例和视觉编码。"
      },
      {
        "topic_id": "T-DATA-010",
        "prerequisite_id": "T-DATA-009",
        "strength": "soft",
        "reason": "被省略的缺失值与异常值可能改变图表结论。"
      },
      {
        "topic_id": "T-DATA-012",
        "prerequisite_id": "T-EVID-002",
        "strength": "hard",
        "reason": "数据主张审查需要把证据和结论之间的推理说清。"
      },
      {
        "topic_id": "T-DATA-012",
        "prerequisite_id": "T-EVID-003",
        "strength": "hard",
        "reason": "没有来源核验就无法确认数据链的起点。"
      },
      {
        "topic_id": "T-DATA-012",
        "prerequisite_id": "T-DATA-004",
        "strength": "hard",
        "reason": "样本代表性决定结论能推广到多大范围。"
      },
      {
        "topic_id": "T-DATA-012",
        "prerequisite_id": "T-DATA-005",
        "strength": "hard",
        "reason": "统计口径决定比较是否成立。"
      },
      {
        "topic_id": "T-DATA-012",
        "prerequisite_id": "T-DATA-007",
        "strength": "soft",
        "reason": "相关与因果的区分能防止过度结论。"
      },
      {
        "topic_id": "T-DATA-012",
        "prerequisite_id": "T-TECH-001",
        "strength": "hard",
        "reason": "数据采集过程决定证据链中可能出现哪些误差。"
      },
      {
        "topic_id": "T-DATA-011",
        "prerequisite_id": "T-DATA-010",
        "strength": "hard",
        "reason": "必须先诊断误导机制，才能有针对性地重绘图表。"
      },
      {
        "topic_id": "T-DATA-011",
        "prerequisite_id": "T-DATA-012",
        "strength": "soft",
        "reason": "完整审查能确保重绘不只修饰视觉而是修正证据表达。"
      },
      {
        "topic_id": "T-DATA-013",
        "prerequisite_id": "T-EVID-004",
        "strength": "hard",
        "reason": "面向公众说明边界需要准确使用限定语和不确定性表达。"
      },
      {
        "topic_id": "T-DATA-013",
        "prerequisite_id": "T-DATA-011",
        "strength": "soft",
        "reason": "重绘后的图表为公众说明提供更诚实的视觉证据。"
      },
      {
        "topic_id": "T-DATA-013",
        "prerequisite_id": "T-DATA-012",
        "strength": "hard",
        "reason": "只有完成证据链审查，才能交代结论的真实边界。"
      },
      {
        "topic_id": "T-TECH-001",
        "prerequisite_id": "T-DATA-001",
        "strength": "hard",
        "reason": "采集数据前必须明确对象和变量。"
      },
      {
        "topic_id": "T-TECH-002",
        "prerequisite_id": "T-TECH-001",
        "strength": "hard",
        "reason": "清洗与转换必须建立在对原始采集过程的理解之上。"
      },
      {
        "topic_id": "T-TECH-003",
        "prerequisite_id": "T-DATA-001",
        "strength": "hard",
        "reason": "字段设计是把对象和变量转化为数据结构的过程。"
      },
      {
        "topic_id": "T-TECH-003",
        "prerequisite_id": "T-TECH-002",
        "strength": "soft",
        "reason": "清洗过程会改变字段取值，需要保留字段含义的一致性。"
      },
      {
        "topic_id": "T-AI-001",
        "prerequisite_id": "T-TECH-001",
        "strength": "hard",
        "reason": "理解 AI 决策链需要先知道数据如何进入系统。"
      },
      {
        "topic_id": "T-AI-001",
        "prerequisite_id": "T-EVID-001",
        "strength": "soft",
        "reason": "区分数据、输出与主张可避免把模型结论当作事实。"
      },
      {
        "topic_id": "T-AI-002",
        "prerequisite_id": "T-TECH-003",
        "strength": "hard",
        "reason": "训练样本和标签都是对现实对象的结构化表示。"
      },
      {
        "topic_id": "T-AI-002",
        "prerequisite_id": "T-DATA-003",
        "strength": "hard",
        "reason": "训练数据是否覆盖目标人群需要样本与总体概念。"
      },
      {
        "topic_id": "T-AI-003",
        "prerequisite_id": "T-AI-002",
        "strength": "hard",
        "reason": "理解模型输出前需知道模型从何种样本和标签中学习。"
      },
      {
        "topic_id": "T-AI-003",
        "prerequisite_id": "T-DATA-006",
        "strength": "soft",
        "reason": "概率和分布直觉有助于避免把分数当作确定事实。"
      },
      {
        "topic_id": "T-AI-004",
        "prerequisite_id": "T-AI-002",
        "strength": "hard",
        "reason": "训练数据与标签可能携带历史偏差。"
      },
      {
        "topic_id": "T-AI-004",
        "prerequisite_id": "T-AI-003",
        "strength": "hard",
        "reason": "输出如何被使用决定偏差是否进入反馈回路。"
      },
      {
        "topic_id": "T-AI-004",
        "prerequisite_id": "T-DATA-004",
        "strength": "soft",
        "reason": "代表性不足是自动化偏差的重要来源。"
      },
      {
        "topic_id": "T-AI-004",
        "prerequisite_id": "T-DATA-007",
        "strength": "soft",
        "reason": "反馈回路容易把相关模式误当成稳定因果。"
      },
      {
        "topic_id": "T-AI-005",
        "prerequisite_id": "T-AI-001",
        "strength": "hard",
        "reason": "责任链以数据、模型、输出和决策者的区分为骨架。"
      },
      {
        "topic_id": "T-AI-005",
        "prerequisite_id": "T-AI-003",
        "strength": "hard",
        "reason": "需要看清模型输出如何进入真实决定。"
      },
      {
        "topic_id": "T-AI-005",
        "prerequisite_id": "T-GOV-002",
        "strength": "hard",
        "reason": "完整责任链必须纳入所有受影响群体。"
      },
      {
        "topic_id": "T-AI-005",
        "prerequisite_id": "T-DATA-012",
        "strength": "soft",
        "reason": "数据主张审查为责任链提供证据质量判断。"
      },
      {
        "topic_id": "T-AI-006",
        "prerequisite_id": "T-AI-005",
        "strength": "hard",
        "reason": "先定位责任链中的决策环节，才能安排人工复核。"
      },
      {
        "topic_id": "T-AI-006",
        "prerequisite_id": "T-GOV-003",
        "strength": "hard",
        "reason": "复核强度应与错误代价和可逆性匹配。"
      },
      {
        "topic_id": "T-AI-006",
        "prerequisite_id": "T-GOV-005",
        "strength": "hard",
        "reason": "人工复核必须与解释和申诉渠道连在一起。"
      },
      {
        "topic_id": "T-GOV-002",
        "prerequisite_id": "T-GOV-001",
        "strength": "hard",
        "reason": "识别利益相关者要以权利、责任和公共利益为判断框架。"
      },
      {
        "topic_id": "T-GOV-003",
        "prerequisite_id": "T-GOV-002",
        "strength": "hard",
        "reason": "只有看见受影响群体，才能判断错误代价落在谁身上。"
      },
      {
        "topic_id": "T-GOV-004",
        "prerequisite_id": "T-GOV-002",
        "strength": "hard",
        "reason": "公平判断需要比较规则对不同群体的实际影响。"
      },
      {
        "topic_id": "T-GOV-004",
        "prerequisite_id": "T-GOV-003",
        "strength": "soft",
        "reason": "风险分配揭示总体准确率背后的差别影响。"
      },
      {
        "topic_id": "T-GOV-004",
        "prerequisite_id": "T-DATA-004",
        "strength": "soft",
        "reason": "代表性不足会使某些群体承受更高误判风险。"
      },
      {
        "topic_id": "T-GOV-005",
        "prerequisite_id": "T-GOV-001",
        "strength": "hard",
        "reason": "解释和申诉是权利保障与机构责任的具体机制。"
      },
      {
        "topic_id": "T-GOV-005",
        "prerequisite_id": "T-AI-003",
        "strength": "soft",
        "reason": "理解输出与阈值有助于设计可操作的复核理由。"
      },
      {
        "topic_id": "T-GOV-006",
        "prerequisite_id": "T-GOV-001",
        "strength": "hard",
        "reason": "制度规则把公共价值转化为稳定的责任安排。"
      },
      {
        "topic_id": "T-GOV-006",
        "prerequisite_id": "T-AI-005",
        "strength": "soft",
        "reason": "责任链揭示制度应在哪些环节设定规则和监督。"
      },
      {
        "topic_id": "T-GOV-007",
        "prerequisite_id": "T-GOV-004",
        "strength": "hard",
        "reason": "使用建议必须回应公平与差别影响。"
      },
      {
        "topic_id": "T-GOV-007",
        "prerequisite_id": "T-GOV-005",
        "strength": "hard",
        "reason": "可执行边界必须包含解释、复核和申诉机制。"
      },
      {
        "topic_id": "T-GOV-007",
        "prerequisite_id": "T-GOV-006",
        "strength": "hard",
        "reason": "建议需落入清楚的制度规则和责任边界。"
      },
      {
        "topic_id": "T-GOV-007",
        "prerequisite_id": "T-AI-006",
        "strength": "hard",
        "reason": "人类复核边界是 AI 使用建议的核心组成。"
      },
      {
        "topic_id": "T-GOV-007",
        "prerequisite_id": "T-EVID-005",
        "strength": "soft",
        "reason": "公共建议需要经得起围绕证据和理由的质询。"
      },
      {
        "topic_id": "T-GOV-007",
        "prerequisite_id": "T-DATA-013",
        "strength": "soft",
        "reason": "对证据边界的公众说明能防止治理建议建立在过强结论上。"
      },
      {
        "topic_id": "T-ENG-001",
        "prerequisite_id": "T-EVID-001",
        "strength": "soft",
        "reason": "区分事实与主张有助于定位英语语篇中的关键信息。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ENG-002",
        "prerequisite_id": "T-ENG-001",
        "strength": "hard",
        "reason": "跨语言比较需要先能准确定位英语材料的来源与核心信息。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ENG-002",
        "prerequisite_id": "T-EVID-003",
        "strength": "hard",
        "reason": "比较来源前需要掌握作者、时间和证据链核验。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ENG-003",
        "prerequisite_id": "T-ENG-001",
        "strength": "hard",
        "reason": "文化语境理解需要准确把握语篇中的事实、立场和受众。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ENG-004",
        "prerequisite_id": "T-ENG-002",
        "strength": "hard",
        "reason": "可靠双语表达需要先识别来源、术语和语境差异。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ENG-004",
        "prerequisite_id": "T-EVID-004",
        "strength": "soft",
        "reason": "限定语和不确定性表达有助于避免跨语言传播中的过度确定。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ENG-005",
        "prerequisite_id": "T-ENG-003",
        "strength": "hard",
        "reason": "国际对话需要理解不同文化视角形成的语境。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ENG-005",
        "prerequisite_id": "T-ENG-004",
        "strength": "hard",
        "reason": "回应真实受众需要能够适配并清楚组织双语表达。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ENG-005",
        "prerequisite_id": "T-EVID-005",
        "strength": "soft",
        "reason": "公开质询与理由回应为跨文化对话提供论证基础。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ART-002",
        "prerequisite_id": "T-ART-001",
        "strength": "hard",
        "reason": "审美与文化解释需要先能准确感知和描述艺术形式。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ART-002",
        "prerequisite_id": "T-EVID-003",
        "strength": "soft",
        "reason": "来源核验能帮助区分作品语境证据与后来的想象。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ART-003",
        "prerequisite_id": "T-ART-001",
        "strength": "hard",
        "reason": "组织视觉叙事需要掌握基本艺术语言及其感知作用。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ART-003",
        "prerequisite_id": "T-EVID-001",
        "strength": "soft",
        "reason": "区分事实与主张有助于避免视觉表达把推断伪装成事实。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ART-004",
        "prerequisite_id": "T-ART-003",
        "strength": "hard",
        "reason": "设计原型需要能组织视觉信息与使用者的阅读路径。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ART-005",
        "prerequisite_id": "T-ART-002",
        "strength": "hard",
        "reason": "负责任的公共艺术表达需要理解文化语境与审美判断。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ART-005",
        "prerequisite_id": "T-ART-004",
        "strength": "hard",
        "reason": "公共作品需要经过真实受众的原型测试与迭代。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ART-005",
        "prerequisite_id": "T-EVID-005",
        "strength": "soft",
        "reason": "公开质询有助于审查表达选择和影响。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PE-002",
        "prerequisite_id": "T-PE-001",
        "strength": "soft",
        "reason": "理解身体反馈有助于把健康行为与个体状态联系起来。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PE-002",
        "prerequisite_id": "T-BIO-001",
        "strength": "soft",
        "reason": "生命系统观支持对健康行为机制的解释。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PE-003",
        "prerequisite_id": "T-PE-002",
        "strength": "hard",
        "reason": "设计健康计划需要理解生活方式行为之间的关系和个体差异。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PE-003",
        "prerequisite_id": "T-DATA-006",
        "strength": "soft",
        "reason": "趋势和分布意识有助于判断计划效果而不被单次波动误导。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PE-004",
        "prerequisite_id": "T-PE-001",
        "strength": "soft",
        "reason": "公平规则需要考虑参与者不同的运动能力与安全条件。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PE-004",
        "prerequisite_id": "T-GOV-002",
        "strength": "soft",
        "reason": "利益相关者分析有助于识别规则影响的不同群体。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PE-005",
        "prerequisite_id": "T-PE-003",
        "strength": "hard",
        "reason": "成效评价建立在明确、已实施并有记录的健康计划上。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PE-005",
        "prerequisite_id": "T-PE-004",
        "strength": "soft",
        "reason": "共同照护需要理解规则、公平和团队责任。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PE-005",
        "prerequisite_id": "T-DATA-012",
        "strength": "soft",
        "reason": "数据主张审查能防止把有限健康记录过度推广。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-BIO-002",
        "prerequisite_id": "T-BIO-001",
        "strength": "hard",
        "reason": "理解稳态需要先能从系统层级与结构功能关系解释生命现象。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-BIO-003",
        "prerequisite_id": "T-BIO-001",
        "strength": "hard",
        "reason": "生态系统分析建立在对生命层级与结构功能关系的理解上。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-BIO-004",
        "prerequisite_id": "T-BIO-001",
        "strength": "hard",
        "reason": "设计生物学探究前需要能界定所观察的生命系统和变量。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-BIO-004",
        "prerequisite_id": "T-EVID-002",
        "strength": "soft",
        "reason": "证据推理有助于把观察结果转化为有限度的解释。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-BIO-005",
        "prerequisite_id": "T-BIO-002",
        "strength": "soft",
        "reason": "健康干预判断需要理解生命调节与稳态。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-BIO-005",
        "prerequisite_id": "T-BIO-003",
        "strength": "soft",
        "reason": "生态干预判断需要理解系统中的连锁影响。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-BIO-005",
        "prerequisite_id": "T-BIO-004",
        "strength": "hard",
        "reason": "责任判断必须建立在能够评价探究证据的基础上。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-GEO-002",
        "prerequisite_id": "T-GEO-001",
        "strength": "soft",
        "reason": "人地系统分析需要先能够定位现象并理解尺度差异。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-GEO-003",
        "prerequisite_id": "T-GEO-001",
        "strength": "hard",
        "reason": "区域比较建立在明确的空间边界、尺度和表达基础上。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-GEO-004",
        "prerequisite_id": "T-GEO-001",
        "strength": "hard",
        "reason": "规划调查路线和采样点需要先掌握空间位置与尺度表达。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-GEO-004",
        "prerequisite_id": "T-TECH-002",
        "strength": "soft",
        "reason": "规范数据清洗能提高空间调查资料的可复核性。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-GEO-005",
        "prerequisite_id": "T-GEO-002",
        "strength": "hard",
        "reason": "可持续决策需要理解人地复合系统及其反馈。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-GEO-005",
        "prerequisite_id": "T-GEO-003",
        "strength": "soft",
        "reason": "区域差异决定方案不能脱离情境直接复制。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-GEO-005",
        "prerequisite_id": "T-GEO-004",
        "strength": "hard",
        "reason": "空间决策应建立在真实调查和空间证据上。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-GEO-005",
        "prerequisite_id": "T-GOV-003",
        "strength": "soft",
        "reason": "风险分配有助于审查空间方案对不同群体的影响。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PHY-002",
        "prerequisite_id": "T-PHY-001",
        "strength": "hard",
        "reason": "分析运动和能量变化需要可靠测量相关物理量。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PHY-003",
        "prerequisite_id": "T-PHY-001",
        "strength": "hard",
        "reason": "物理模型中的变量需要可定义、可测量并使用一致单位。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PHY-003",
        "prerequisite_id": "T-DATA-003",
        "strength": "soft",
        "reason": "样本意识有助于区分用于校准模型的数据与总体情境。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PHY-004",
        "prerequisite_id": "T-PHY-001",
        "strength": "hard",
        "reason": "物理实验需要可靠测量和误差记录。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PHY-004",
        "prerequisite_id": "T-PHY-003",
        "strength": "hard",
        "reason": "校准实验需要一个明确的待检验模型与预测。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PHY-004",
        "prerequisite_id": "T-EVID-002",
        "strength": "soft",
        "reason": "论点证据关系有助于避免把一次实验结果过度推广。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PHY-005",
        "prerequisite_id": "T-PHY-002",
        "strength": "hard",
        "reason": "技术评价需要理解能量转换和系统损耗。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PHY-005",
        "prerequisite_id": "T-PHY-003",
        "strength": "hard",
        "reason": "比较方案需要理解模型的假设与适用边界。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PHY-005",
        "prerequisite_id": "T-PHY-004",
        "strength": "soft",
        "reason": "可靠的性能证据来自可复核的实验与测试。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-PHY-005",
        "prerequisite_id": "T-GOV-003",
        "strength": "soft",
        "reason": "公共技术选择还需考虑风险和代价如何分配。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CHEM-002",
        "prerequisite_id": "T-CHEM-001",
        "strength": "hard",
        "reason": "解释化学变化需要先能在宏观、微观和符号层面表征物质。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CHEM-003",
        "prerequisite_id": "T-CHEM-001",
        "strength": "hard",
        "reason": "化学证据解释需要能把现象与微观结构模型联系起来。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CHEM-003",
        "prerequisite_id": "T-EVID-002",
        "strength": "soft",
        "reason": "论点和证据的区分能提高化学解释的严谨性。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CHEM-004",
        "prerequisite_id": "T-CHEM-001",
        "strength": "hard",
        "reason": "安全实验设计需要了解物质结构、性质和表征。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CHEM-004",
        "prerequisite_id": "T-CHEM-003",
        "strength": "hard",
        "reason": "探究方案需要明确将获得何种证据来检验解释。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CHEM-005",
        "prerequisite_id": "T-CHEM-002",
        "strength": "hard",
        "reason": "生命周期评价需要理解物质变化、能量和反应条件。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CHEM-005",
        "prerequisite_id": "T-CHEM-003",
        "strength": "hard",
        "reason": "比较材料影响需要基于证据和模型而不是单一标签。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CHEM-005",
        "prerequisite_id": "T-CHEM-004",
        "strength": "soft",
        "reason": "安全与责任判断受实验风险和过程控制证据支持。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CHEM-005",
        "prerequisite_id": "T-GOV-003",
        "strength": "soft",
        "reason": "材料选择还涉及环境风险和代价的社会分配。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-001",
        "prerequisite_id": "T-PE-001",
        "strength": "soft",
        "reason": "身体反馈提供界定健康问题的具体观察基础。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-001",
        "prerequisite_id": "T-BIO-001",
        "strength": "soft",
        "reason": "生命系统观避免把健康简化为单一指标。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-001",
        "prerequisite_id": "T-EVID-001",
        "strength": "soft",
        "reason": "区分事实与主张有助于避免用标签代替证据。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-001",
        "prerequisite_id": "T-GOV-001",
        "strength": "soft",
        "reason": "健康议题的隐私、尊严和共同责任需要公共利益视角。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-002",
        "prerequisite_id": "T-WELL-001",
        "strength": "hard",
        "reason": "健康画像必须先有尊重差异和隐私边界的问题定义。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-002",
        "prerequisite_id": "T-BIO-002",
        "strength": "hard",
        "reason": "机制解释需要理解稳态、节律和动态调节。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-002",
        "prerequisite_id": "T-PE-002",
        "strength": "hard",
        "reason": "健康画像需要理解多种生活方式行为的相互作用。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-002",
        "prerequisite_id": "T-DATA-006",
        "strength": "soft",
        "reason": "趋势与分布能防止被单次记录误导。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-003",
        "prerequisite_id": "T-WELL-002",
        "strength": "hard",
        "reason": "行动方案需要建立在健康证据画像与机制解释上。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-003",
        "prerequisite_id": "T-PE-003",
        "strength": "hard",
        "reason": "个人计划的目标、实施和调整规则来自健康自我管理。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-003",
        "prerequisite_id": "T-PE-005",
        "strength": "soft",
        "reason": "共同照护方案需要能够评价个人与群体层面的不同结果。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-WELL-003",
        "prerequisite_id": "T-EVID-005",
        "strength": "soft",
        "reason": "公开回应有助于说明方案边界并接受质询。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-SYS-001",
        "prerequisite_id": "T-DATA-001",
        "strength": "soft",
        "reason": "系统变量需要从可观察对象和属性中界定。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-SYS-002",
        "prerequisite_id": "T-SYS-001",
        "strength": "hard",
        "reason": "识别反馈前需要先明确系统边界、变量和流动。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-SYS-002",
        "prerequisite_id": "T-PHY-003",
        "strength": "soft",
        "reason": "物理模型支持把系统关系转化为可检验的简化表达。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-SYS-003",
        "prerequisite_id": "T-SYS-002",
        "strength": "hard",
        "reason": "模型检验需要理解系统的动态关系与反馈机制。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-SYS-003",
        "prerequisite_id": "T-PHY-004",
        "strength": "hard",
        "reason": "模型校准依赖可复核的测量、实验和误差分析。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-SYS-003",
        "prerequisite_id": "T-DATA-007",
        "strength": "soft",
        "reason": "相关因果判断能防止把拟合关系误当机制。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-SYS-003",
        "prerequisite_id": "T-DATA-008",
        "strength": "soft",
        "reason": "模型输出需要使用不误导的坐标、比例和视觉编码。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-SYS-003",
        "prerequisite_id": "T-GOV-003",
        "strength": "soft",
        "reason": "方案比较还需判断预测误差和风险由哪些群体承担。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-001",
        "prerequisite_id": "T-SYS-001",
        "strength": "hard",
        "reason": "碳核算首先需要明确系统边界、流入流出和变量。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-001",
        "prerequisite_id": "T-CHEM-002",
        "strength": "soft",
        "reason": "排放过程需要理解物质变化、能量与反应条件。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-001",
        "prerequisite_id": "T-PHY-002",
        "strength": "soft",
        "reason": "能耗核算需要理解能源转换和效率损失。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-001",
        "prerequisite_id": "T-GEO-002",
        "strength": "soft",
        "reason": "人地系统解释能把碳排与空间和行为联系起来。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-002",
        "prerequisite_id": "T-ECO-001",
        "strength": "hard",
        "reason": "比较减排情景需要同一套边界清楚的碳核算基础。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-002",
        "prerequisite_id": "T-GEO-004",
        "strength": "soft",
        "reason": "现场调查为空间与行为干预提供真实数据。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-002",
        "prerequisite_id": "T-TECH-002",
        "strength": "soft",
        "reason": "数据清洗提高不同减排情景比较的可复核性。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-002",
        "prerequisite_id": "T-DATA-004",
        "strength": "soft",
        "reason": "代表性意识能防止用少数地点或时段替代全校情境。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-003",
        "prerequisite_id": "T-ECO-002",
        "strength": "hard",
        "reason": "行动路线需要以多方案的效果、成本和公平比较为依据。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-003",
        "prerequisite_id": "T-CHEM-005",
        "strength": "soft",
        "reason": "材料与化学过程的生命周期影响支持减排优先级判断。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-003",
        "prerequisite_id": "T-BIO-005",
        "strength": "soft",
        "reason": "生态责任有助于识别绿化和生物干预的边界。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-003",
        "prerequisite_id": "T-GEO-005",
        "strength": "hard",
        "reason": "行动路线需要综合空间、环境和社会情境作出可持续决策。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-003",
        "prerequisite_id": "T-GOV-005",
        "strength": "soft",
        "reason": "复核与申诉机制使行动责任和调整程序更清楚。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ECO-003",
        "prerequisite_id": "T-EVID-005",
        "strength": "soft",
        "reason": "公开行动路线需要回应核算假设、优先级和责任安排的质询。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CULT-001",
        "prerequisite_id": "T-EVID-003",
        "strength": "hard",
        "reason": "文化解释需要先核验材料的作者、时代、出处和传播链。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CULT-001",
        "prerequisite_id": "T-ART-001",
        "strength": "soft",
        "reason": "艺术感知支持对文化对象形式特征的准确描述。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CULT-002",
        "prerequisite_id": "T-CULT-001",
        "strength": "hard",
        "reason": "数字叙事必须建立在可追溯的文化来源与语境档案上。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CULT-002",
        "prerequisite_id": "T-ART-003",
        "strength": "hard",
        "reason": "数字展示需要组织视觉层级和阅读路径。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CULT-002",
        "prerequisite_id": "T-ENG-002",
        "strength": "soft",
        "reason": "跨语言来源比较能减少翻译和语境偏移。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CULT-002",
        "prerequisite_id": "T-TECH-002",
        "strength": "soft",
        "reason": "数据清洗与字段意识支持数字档案的一致性。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CULT-003",
        "prerequisite_id": "T-CULT-002",
        "strength": "hard",
        "reason": "可信微展需要完成数字建档、视觉叙事和跨文化解释原型。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CULT-003",
        "prerequisite_id": "T-ART-005",
        "strength": "hard",
        "reason": "公共文化表达需要审美、文化来源和受众责任。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CULT-003",
        "prerequisite_id": "T-ENG-005",
        "strength": "soft",
        "reason": "国际受众质询需要跨文化回应能力。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CULT-003",
        "prerequisite_id": "T-EVID-005",
        "strength": "hard",
        "reason": "解释责任需要能够公开回应证据和表达选择。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-CULT-003",
        "prerequisite_id": "T-GOV-001",
        "strength": "soft",
        "reason": "数字文化展陈还需处理版权、授权与公共文化权利。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-FAIR-001",
        "prerequisite_id": "T-GOV-001",
        "strength": "hard",
        "reason": "公平规则分析需要先理解权利、责任与公共利益。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-FAIR-001",
        "prerequisite_id": "T-EVID-002",
        "strength": "soft",
        "reason": "规则理由需要明确论点、证据和推理。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-FAIR-002",
        "prerequisite_id": "T-FAIR-001",
        "strength": "hard",
        "reason": "程序设计需要先明确要平衡的公平标准、权利和义务。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-FAIR-002",
        "prerequisite_id": "T-GOV-002",
        "strength": "hard",
        "reason": "影响调查需要识别利益相关者和受影响群体。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-FAIR-002",
        "prerequisite_id": "T-DATA-012",
        "strength": "soft",
        "reason": "数据主张审查能提高需求与影响证据的可信度。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-FAIR-003",
        "prerequisite_id": "T-FAIR-002",
        "strength": "hard",
        "reason": "规则草案需要建立在真实影响调查和程序设计上。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-FAIR-003",
        "prerequisite_id": "T-GOV-005",
        "strength": "hard",
        "reason": "可执行规则需要解释、复核与申诉机制。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-FAIR-003",
        "prerequisite_id": "T-PE-004",
        "strength": "soft",
        "reason": "体育情境提供规则、安全、参与机会和公平竞争的具体检验。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-FAIR-003",
        "prerequisite_id": "T-EVID-005",
        "strength": "hard",
        "reason": "公开听证需要能够回应异议和修订理由。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ACT-001",
        "prerequisite_id": "T-EVID-001",
        "strength": "soft",
        "reason": "需求研究需要区分观察事实、使用者主张与设计者假设。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ACT-001",
        "prerequisite_id": "T-SYS-001",
        "strength": "soft",
        "reason": "系统边界帮助识别问题与外部环境、约束和利益相关者。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ACT-002",
        "prerequisite_id": "T-ACT-001",
        "strength": "hard",
        "reason": "原型和测试必须回应已经核验的真实需求和成功标准。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ACT-002",
        "prerequisite_id": "T-ART-004",
        "strength": "soft",
        "reason": "使用者中心的创意原型方法改善体验设计与反馈收集。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ACT-002",
        "prerequisite_id": "T-PHY-004",
        "strength": "soft",
        "reason": "物理实验方法支持可复核的测试与误差分析。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ACT-002",
        "prerequisite_id": "T-TECH-002",
        "strength": "soft",
        "reason": "测试数据需要经过规范清洗和转换。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ACT-003",
        "prerequisite_id": "T-ACT-002",
        "strength": "hard",
        "reason": "采用提案需要经过真实原型、测试和迭代证据。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ACT-003",
        "prerequisite_id": "T-DATA-012",
        "strength": "soft",
        "reason": "成效主张需要接受数据来源、指标和结论边界审查。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ACT-003",
        "prerequisite_id": "T-GOV-005",
        "strength": "hard",
        "reason": "负责任采用需要明确解释、复核、申诉和维护责任。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      },
      {
        "topic_id": "T-ACT-003",
        "prerequisite_id": "T-EVID-005",
        "strength": "hard",
        "reason": "行动提案需要回应真实受众质询与异议。",
        "evidence_level": "author",
        "review_status": "author_draft_pending_subject_review"
      }
    ],
    "routes": [
      {
        "id": "theme-bq1-wellbeing",
        "big_question_id": "BQ1",
        "secondary_big_question_id": "BQ8",
        "title": "怎样生活才算健康？",
        "question": "怎样用证据设计一个既适合自己、尊重个体差异，又能得到同伴支持的健康生活方案？",
        "description": "有尊严的健康成长不是用统一指标约束每个人，而是理解身体节律、情绪、学习、关系与环境之间的联系，在保护隐私和尊重差异的前提下形成可持续的自我管理与共同照护。",
        "source_theme_ids": [
          "TH-CAND-014",
          "TH-CAND-015",
          "TH-CAND-013"
        ],
        "topic_ids": [
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-DATA-001",
          "T-DATA-003",
          "T-DATA-006",
          "T-DATA-007",
          "T-DATA-012",
          "T-BIO-001",
          "T-BIO-002",
          "T-BIO-004",
          "T-BIO-005",
          "T-PE-001",
          "T-PE-002",
          "T-PE-003",
          "T-PE-005",
          "T-CHEM-001",
          "T-CHEM-003",
          "T-GOV-001",
          "T-GOV-002",
          "T-WELL-001",
          "T-WELL-002",
          "T-WELL-003"
        ],
        "entry_topic_ids": [
          "T-WELL-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-006",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-003",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-WELL-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-WELL-002",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-WELL-003",
            "phase": "create_and_act",
            "importance": "entry"
          }
        ],
        "theme_learning": {
          "theme_statement": "有尊严的健康成长不是用统一指标约束每个人，而是理解身体节律、情绪、学习、关系与环境之间的联系，在保护隐私和尊重差异的前提下形成可持续的自我管理与共同照护。",
          "learning_goals": [
            "记录并解释运动、睡眠、饮食、专注和情绪等信息，区分观察、相关与因果。",
            "综合生命科学、运动健康和数据证据，设计符合个人条件且可以迭代的健康方案。",
            "识别健康数据的隐私与标签化风险，形成尊重差异的同伴支持和公共沟通方式。"
          ],
          "subject_contributions": [
            {
              "subject_id": "physical_education_health",
              "content_area": "运动技能、体能发展与健康行为",
              "competency_ids": [
                "physical_education_health.motor_ability",
                "physical_education_health.health_behavior",
                "physical_education_health.sports_ethics"
              ],
              "contribution": "形成运动处方、健康行为目标和可持续锻炼策略，判断运动安全与同伴合作边界。"
            },
            {
              "subject_id": "biology",
              "content_area": "稳态与调节、生命活动与健康",
              "competency_ids": [
                "biology.life_concept",
                "biology.scientific_thinking",
                "biology.scientific_inquiry",
                "biology.social_responsibility"
              ],
              "contribution": "解释睡眠、稳态、代谢、压力和身体调节机制，判断健康建议的科学依据。"
            },
            {
              "subject_id": "chemistry",
              "content_area": "营养物质、能量与健康相关物质",
              "competency_ids": [
                "chemistry.macro_micro",
                "chemistry.evidence_model",
                "chemistry.attitude_responsibility"
              ],
              "contribution": "解释营养物质、能量与身体健康相关的物质基础，审查产品宣传中的化学主张。"
            },
            {
              "subject_id": "mathematics",
              "content_area": "概率与统计、数据分析",
              "competency_ids": [
                "mathematics.data_analysis",
                "mathematics.modeling",
                "mathematics.logical_reasoning"
              ],
              "contribution": "分析个人或匿名小组数据，识别波动、相关关系和过度因果解释。"
            },
            {
              "subject_id": "chinese",
              "content_area": "实用性阅读与交流、反思性表达",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.thinking_development"
              ],
              "contribution": "阅读健康材料、组织反思叙事，并以非污名化语言交流差异和支持需要。"
            },
            {
              "subject_id": "civics",
              "content_area": "公共生活、科学判断与共同责任",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.public_participation"
              ],
              "contribution": "讨论健康数据隐私、人格尊严、共同责任和学校健康支持机制。"
            }
          ],
          "final_performance_task": {
            "title": "四周健康改进与共同照护方案",
            "authentic_audience": "学生本人、同伴小组、体育与健康教师或学校健康支持人员",
            "brief": "在保护隐私的前提下记录健康行为，解释关键变量，设计并试行个人改进方案，同时为班级形成一份尊重差异的同伴支持约定。",
            "required_artifacts": [
              "匿名健康数据日志",
              "机制解释卡",
              "个人健康改进方案",
              "同伴支持约定",
              "迭代反思"
            ]
          }
        },
        "material_links": {}
      },
      {
        "id": "theme-bq2-data-truth",
        "big_question_id": "BQ2",
        "secondary_big_question_id": "BQ3",
        "title": "数据能告诉我们真相吗？",
        "question": "同一组数据为什么可能支持不同结论？",
        "description": "数据可信度不是单纯的统计计算问题，而是由数据如何采集和表示、数学上能否成立、语言上如何陈述，以及面向公众是否负责任共同决定。",
        "source_theme_ids": [
          "TH-CAND-004"
        ],
        "topic_ids": [
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-DATA-001",
          "T-DATA-002",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-005",
          "T-DATA-006",
          "T-DATA-007",
          "T-DATA-008",
          "T-DATA-009",
          "T-DATA-010",
          "T-DATA-011",
          "T-DATA-012",
          "T-DATA-013",
          "T-TECH-001",
          "T-TECH-002",
          "T-TECH-003",
          "T-ENG-001",
          "T-ENG-002",
          "T-ENG-004",
          "T-ENG-005"
        ],
        "entry_topic_ids": [
          "T-DATA-012"
        ],
        "topic_roles": [
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-002",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-005",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-006",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-008",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-009",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-010",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-011",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "entry"
          },
          {
            "topic_id": "T-DATA-013",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-005",
            "phase": "create_and_act",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "数据可信度不是单纯的统计计算问题，而是由数据如何采集和表示、数学上能否成立、语言上如何陈述，以及面向公众是否负责任共同决定。",
          "learning_goals": [
            "追溯一则数据主张从现实对象、采集过程、统计处理到公开结论的完整证据链。",
            "综合运用样本、口径、分布、图表和因果判断，识别结论被夸大或误导的环节。",
            "面向真实受众重绘数据表达，并用可核验、有限定、可质询的语言说明证据边界。"
          ],
          "subject_contributions": [
            {
              "subject_id": "mathematics",
              "content_area": "概率与统计、数据表达",
              "competency_ids": [
                "mathematics.data_analysis",
                "mathematics.logical_reasoning",
                "mathematics.modeling",
                "mathematics.visual_imagination"
              ],
              "contribution": "审查变量、样本、统计口径、分布、图表以及相关与因果关系。"
            },
            {
              "subject_id": "information_technology",
              "content_area": "数据与计算、数据与数据结构",
              "competency_ids": [
                "information_technology.information_awareness",
                "information_technology.computational_thinking",
                "information_technology.digital_learning_innovation"
              ],
              "contribution": "追踪数据采集、字段编码、清洗转换和可复现过程，保留来源与处理记录。"
            },
            {
              "subject_id": "chinese",
              "content_area": "实用性阅读与交流、当代文化参与",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.thinking_development"
              ],
              "contribution": "区分事实、数据和主张，核验来源，组织论证，使用限定语并完成公众说明与质询。"
            },
            {
              "subject_id": "english",
              "content_area": "多语篇阅读、跨文化信息比较",
              "competency_ids": [
                "english.language_ability",
                "english.cultural_awareness",
                "english.thinking_quality",
                "english.learning_ability"
              ],
              "contribution": "比较跨语言来源及国际材料，识别翻译、语境和表达造成的信息偏移。"
            },
            {
              "subject_id": "civics",
              "content_area": "逻辑与思维、公共参与",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.public_participation"
              ],
              "contribution": "判断数据表达影响谁、服务何种利益，并审查公开传播是否符合公共责任。"
            }
          ],
          "final_performance_task": {
            "title": "一则数据主张的公开审查与可信改写",
            "authentic_audience": "同学、家长或校园公共议题的真实受众",
            "brief": "选择一则新闻、校园调查或公开报告中的数据主张，找到原始来源，完成跨学科审查，重绘图表、改写结论，并在公开质询中为修改理由辩护。",
            "required_artifacts": [
              "数据来源与证据链卡",
              "样本与口径审查表",
              "修正版图表",
              "公众说明",
              "质询回应记录"
            ]
          }
        },
        "material_links": {
          "teacher_package": "resources/themes/TH-CAND-004.md",
          "student_worksheet": "resources/materials/TH-CAND-004/student_worksheet.md"
        }
      },
      {
        "id": "theme-bq3-campus-flow",
        "big_question_id": "BQ3",
        "secondary_big_question_id": "BQ8",
        "title": "未来真的可以被预测吗？",
        "question": "校园高峰时段为什么会拥堵？模型能预测哪些通行变化，又可能遗漏什么？",
        "description": "复杂系统不能仅靠列举因素解释；需要划定边界，识别变量、流动、反馈和约束，再用经过现实检验的模型支持行动，同时承认模型的简化和不确定性。",
        "source_theme_ids": [
          "TH-CAND-020",
          "TH-CAND-019",
          "TH-CAND-021"
        ],
        "topic_ids": [
          "T-SYS-001",
          "T-SYS-002",
          "T-SYS-003",
          "T-DATA-001",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-006",
          "T-DATA-007",
          "T-DATA-008",
          "T-DATA-009",
          "T-DATA-012",
          "T-PHY-001",
          "T-PHY-002",
          "T-PHY-003",
          "T-PHY-004",
          "T-GEO-001",
          "T-GEO-002",
          "T-GEO-003",
          "T-GEO-004",
          "T-TECH-001",
          "T-TECH-002",
          "T-TECH-003",
          "T-GOV-002",
          "T-GOV-003"
        ],
        "entry_topic_ids": [
          "T-SYS-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-SYS-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-SYS-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-SYS-003",
            "phase": "create_and_act",
            "importance": "entry"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-006",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-008",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-009",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-003",
            "phase": "interpret",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "复杂系统不能仅靠列举因素解释；需要划定边界，识别变量、流动、反馈和约束，再用经过现实检验的模型支持行动，同时承认模型的简化和不确定性。",
          "learning_goals": [
            "把校园高峰通行还原为空间、时间、人员、规则和设施相互作用的系统。",
            "采集真实数据，建立并检验简化模型，解释误差、假设和适用边界。",
            "比较空间、时间与规则干预方案，在效率、安全、公平之间作出有证据的选择。"
          ],
          "subject_contributions": [
            {
              "subject_id": "mathematics",
              "content_area": "数学建模、函数与数据分析",
              "competency_ids": [
                "mathematics.abstraction",
                "mathematics.modeling",
                "mathematics.data_analysis",
                "mathematics.logical_reasoning"
              ],
              "contribution": "抽象变量和关系，建立流量模型，比较预测值与观测值。"
            },
            {
              "subject_id": "physics",
              "content_area": "运动、速度、密度与边界条件",
              "competency_ids": [
                "physics.physical_concepts",
                "physics.scientific_thinking",
                "physics.scientific_inquiry",
                "physics.scientific_attitude_responsibility"
              ],
              "contribution": "从运动、速度、密度和边界条件解释校园通行变化及瓶颈。"
            },
            {
              "subject_id": "information_technology",
              "content_area": "数据采集、算法模拟与可视化",
              "competency_ids": [
                "information_technology.computational_thinking",
                "information_technology.digital_learning_innovation",
                "information_technology.information_social_responsibility"
              ],
              "contribution": "组织采集数据，进行简单模拟和可视化，并保护位置与个人信息。"
            },
            {
              "subject_id": "geography",
              "content_area": "空间布局、功能分区与地理实践",
              "competency_ids": [
                "geography.human_land_coordination",
                "geography.comprehensive_thinking",
                "geography.regional_cognition",
                "geography.geographical_practice"
              ],
              "contribution": "分析校园空间布局、功能分区、路径和地点之间的关系。"
            },
            {
              "subject_id": "civics",
              "content_area": "公共规则、利益协调与参与",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.public_participation"
              ],
              "contribution": "审查优化方案对不同群体的影响，并组织规则协商。"
            }
          ],
          "final_performance_task": {
            "title": "校园高峰通行优化提案与小规模试验",
            "authentic_audience": "学校管理者、师生与后勤人员",
            "brief": "选择一个真实拥堵点，完成测量、系统图和简化模型，提出至少两种干预方案，并通过小规模试验或模拟比较效果。",
            "required_artifacts": [
              "校园通行观察地图",
              "变量与系统关系图",
              "简化预测模型",
              "方案比较表",
              "试验记录",
              "优化提案"
            ]
          }
        },
        "material_links": {}
      },
      {
        "id": "theme-bq4-carbon-campus",
        "big_question_id": "BQ4",
        "secondary_big_question_id": "BQ8",
        "title": "我们能实现碳中和吗？",
        "question": "我们的校园如何从能源、材料和行为上减少碳足迹？",
        "description": "校园碳中和不是一句倡议，而是物质与能量流动、生态过程、生活行为和制度选择共同构成的系统问题，需要透明的核算、情境化的权衡和持续行动。",
        "source_theme_ids": [
          "TH-CAND-001"
        ],
        "topic_ids": [
          "T-SYS-001",
          "T-SYS-002",
          "T-ECO-001",
          "T-ECO-002",
          "T-ECO-003",
          "T-GEO-002",
          "T-GEO-004",
          "T-GEO-005",
          "T-PHY-001",
          "T-PHY-002",
          "T-PHY-004",
          "T-PHY-005",
          "T-CHEM-001",
          "T-CHEM-002",
          "T-CHEM-003",
          "T-CHEM-004",
          "T-CHEM-005",
          "T-BIO-001",
          "T-BIO-003",
          "T-BIO-004",
          "T-BIO-005",
          "T-DATA-001",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-007",
          "T-DATA-012",
          "T-GOV-001",
          "T-GOV-003",
          "T-GOV-005",
          "T-EVID-005"
        ],
        "entry_topic_ids": [
          "T-ECO-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-SYS-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-SYS-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ECO-001",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ECO-002",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ECO-003",
            "phase": "create_and_act",
            "importance": "entry"
          },
          {
            "topic_id": "T-GEO-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-003",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-005",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "校园碳中和不是一句倡议，而是物质与能量流动、生态过程、生活行为和制度选择共同构成的系统问题，需要透明的核算、情境化的权衡和持续行动。",
          "learning_goals": [
            "描绘校园能源、交通、饮食和材料消耗与碳排放之间的系统关系。",
            "建立注明边界、排放因子、假设和不确定性的简化碳核算模型。",
            "比较不同减排方案的效果、成本、公平性和可执行性，形成分阶段行动路线。"
          ],
          "subject_contributions": [
            {
              "subject_id": "geography",
              "content_area": "地球系统、人类活动与可持续发展",
              "competency_ids": [
                "geography.human_land_coordination",
                "geography.comprehensive_thinking",
                "geography.regional_cognition",
                "geography.geographical_practice"
              ],
              "contribution": "理解碳循环、空间差异、人类活动和可持续发展的关系。"
            },
            {
              "subject_id": "physics",
              "content_area": "能源转换、效率与能源可持续利用",
              "competency_ids": [
                "physics.physical_concepts",
                "physics.scientific_thinking",
                "physics.scientific_inquiry",
                "physics.scientific_attitude_responsibility"
              ],
              "contribution": "解释能源转换、效率、用电和交通方式的物理基础。"
            },
            {
              "subject_id": "chemistry",
              "content_area": "燃烧、材料生命周期与化学社会发展",
              "competency_ids": [
                "chemistry.changes_equilibrium",
                "chemistry.evidence_model",
                "chemistry.attitude_responsibility"
              ],
              "contribution": "解释燃烧、材料生命周期和排放过程中的物质变化。"
            },
            {
              "subject_id": "biology",
              "content_area": "生态系统、碳循环与生物多样性",
              "competency_ids": [
                "biology.life_concept",
                "biology.scientific_thinking",
                "biology.scientific_inquiry",
                "biology.social_responsibility"
              ],
              "contribution": "解释生态系统、碳汇、生物多样性与校园绿化的作用和边界。"
            },
            {
              "subject_id": "mathematics",
              "content_area": "数学建模、数据分析与情景比较",
              "competency_ids": [
                "mathematics.modeling",
                "mathematics.data_analysis",
                "mathematics.operation"
              ],
              "contribution": "完成碳排估算、情景比较和不确定性表达。"
            },
            {
              "subject_id": "civics",
              "content_area": "可持续发展、公共资源与参与",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.public_participation"
              ],
              "contribution": "分析责任分配、公共资源、行动规则和校园协商机制。"
            }
          ],
          "final_performance_task": {
            "title": "校园碳预算与三年减排行动路线",
            "authentic_audience": "学校管理层、后勤部门、师生代表",
            "brief": "完成一个边界明确的校园碳排调查，比较若干减排情景，提出包含优先级、责任人、成本、预期效果和复盘机制的行动路线。",
            "required_artifacts": [
              "校园碳流图",
              "碳排核算表",
              "假设与不确定性说明",
              "减排情景比较",
              "三年行动路线",
              "公众展示"
            ]
          }
        },
        "material_links": {}
      },
      {
        "id": "theme-bq5-ai-decisions",
        "big_question_id": "BQ5",
        "secondary_big_question_id": "BQ7",
        "title": "AI 可以替我们做决定吗？",
        "question": "AI 参与判断时，责任、偏差和公平该如何被讨论？",
        "description": "AI 判断不是机器独立完成的技术动作，而是数据、模型、机构决策、权利影响和治理规则共同构成的社会技术过程。",
        "source_theme_ids": [
          "TH-CAND-007"
        ],
        "topic_ids": [
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-005",
          "T-DATA-007",
          "T-DATA-009",
          "T-DATA-012",
          "T-DATA-013",
          "T-TECH-001",
          "T-TECH-003",
          "T-AI-001",
          "T-AI-002",
          "T-AI-003",
          "T-AI-004",
          "T-AI-005",
          "T-AI-006",
          "T-GOV-001",
          "T-GOV-002",
          "T-GOV-003",
          "T-GOV-004",
          "T-GOV-005",
          "T-GOV-006",
          "T-GOV-007"
        ],
        "entry_topic_ids": [
          "T-GOV-007"
        ],
        "topic_roles": [
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-005",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-009",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-013",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-005",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-006",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-003",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-005",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-006",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-007",
            "phase": "create_and_act",
            "importance": "entry"
          }
        ],
        "theme_learning": {
          "theme_statement": "AI 判断不是机器独立完成的技术动作，而是数据、模型、机构决策、权利影响和治理规则共同构成的社会技术过程。",
          "learning_goals": [
            "画出 AI 案例中的数据、模型输出、使用者、决策者和受影响者关系链。",
            "从代表性、阈值与误判、反馈回路、群体影响和错误代价分析偏差与公平。",
            "综合技术能力、权利保障和制度责任，提出包含解释、人工复核与申诉机制的使用边界。"
          ],
          "subject_contributions": [
            {
              "subject_id": "information_technology",
              "content_area": "人工智能初步、数据与计算",
              "competency_ids": [
                "information_technology.information_awareness",
                "information_technology.computational_thinking",
                "information_technology.information_social_responsibility"
              ],
              "contribution": "解释训练数据、标签、模型输出、阈值和反馈回路，指出技术能力与局限。"
            },
            {
              "subject_id": "mathematics",
              "content_area": "概率与统计",
              "competency_ids": [
                "mathematics.data_analysis",
                "mathematics.logical_reasoning",
                "mathematics.modeling"
              ],
              "contribution": "审查样本代表性、概率、阈值、误判类型和群体结果差异。"
            },
            {
              "subject_id": "civics",
              "content_area": "经济与社会、逻辑与思维、公共参与",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.rule_of_law",
                "civics.public_participation"
              ],
              "contribution": "从权利、公共利益、公平和法治判断 AI 使用的正当性。"
            },
            {
              "subject_id": "history",
              "content_area": "国家制度、社会治理与技术变迁",
              "competency_ids": [
                "history.historical_materialism",
                "history.historical_explanation"
              ],
              "contribution": "比较技术进入劳动和治理体系的历史过程，理解制度责任如何形成。"
            },
            {
              "subject_id": "chinese",
              "content_area": "实用性阅读与交流、当代文化参与",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.thinking_development"
              ],
              "contribution": "核验案例证据，组织多方论证、质询和可执行的公共建议。"
            }
          ],
          "final_performance_task": {
            "title": "AI 使用边界公共咨询与建议书",
            "authentic_audience": "模拟学校数字教育委员会或公共决策听证会",
            "brief": "选择招聘、学习诊断、医疗分诊或公共服务中的 AI 案例，完成技术和社会风险审查，举行多方圆桌并提交使用边界建议。",
            "required_artifacts": [
              "数据—模型—决策—责任链图",
              "风险矩阵",
              "利益相关者与权责图",
              "复核与申诉流程",
              "公共建议书"
            ]
          }
        },
        "material_links": {
          "teacher_package": "resources/themes/TH-CAND-007.md",
          "student_worksheet": "resources/materials/TH-CAND-007/student_worksheet.md"
        }
      },
      {
        "id": "theme-bq6-digital-heritage",
        "big_question_id": "BQ6",
        "secondary_big_question_id": "BQ5",
        "title": "文化遗产如何活在未来？",
        "question": "数字技术如何帮助我们理解、保存和再表达文化遗产？",
        "description": "文化遗产数字化不是把对象复制到屏幕上，而是基于史料作出选择、解释、翻译和设计；数字表达必须同时处理真实性、文化语境、审美、受众和权利。",
        "source_theme_ids": [
          "TH-CAND-010"
        ],
        "topic_ids": [
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-CULT-001",
          "T-CULT-002",
          "T-CULT-003",
          "T-ART-001",
          "T-ART-002",
          "T-ART-003",
          "T-ART-004",
          "T-ART-005",
          "T-ENG-001",
          "T-ENG-002",
          "T-ENG-003",
          "T-ENG-004",
          "T-ENG-005",
          "T-TECH-001",
          "T-TECH-002",
          "T-TECH-003",
          "T-GOV-001",
          "T-GOV-006"
        ],
        "entry_topic_ids": [
          "T-CULT-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-CULT-001",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-CULT-002",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-CULT-003",
            "phase": "create_and_act",
            "importance": "entry"
          },
          {
            "topic_id": "T-ART-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-006",
            "phase": "interpret",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "文化遗产数字化不是把对象复制到屏幕上，而是基于史料作出选择、解释、翻译和设计；数字表达必须同时处理真实性、文化语境、审美、受众和权利。",
          "learning_goals": [
            "建立文化对象的来源、时间、空间和解释证据链，区分事实、推断和当代再阐释。",
            "理解文化意义如何在历史交流、媒介变化和不同受众中被重新建构。",
            "运用数字与艺术语言完成有来源、尊重文化语境、适合公众理解的展陈。"
          ],
          "subject_contributions": [
            {
              "subject_id": "chinese",
              "content_area": "文化论著研习、当代文化参与与公众表达",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.aesthetic_appreciation",
                "chinese.cultural_inheritance"
              ],
              "contribution": "阅读文化材料，组织解释性叙事、展签和公众讲解。"
            },
            {
              "subject_id": "history",
              "content_area": "文化交流传播、史料研习与历史解释",
              "competency_ids": [
                "history.temporal_spatial",
                "history.source_evidence",
                "history.historical_explanation",
                "history.national_sentiment"
              ],
              "contribution": "建立时空背景和史料证据链，解释文化意义的历史变化。"
            },
            {
              "subject_id": "art",
              "content_area": "艺术与文化、影视与数字媒体艺术实践",
              "competency_ids": [
                "art.artistic_perception",
                "art.creative_expression",
                "art.aesthetic_taste",
                "art.cultural_understanding"
              ],
              "contribution": "分析形式、媒介和审美特征，设计数字展陈与视觉表达。"
            },
            {
              "subject_id": "information_technology",
              "content_area": "数据与数据结构、三维设计与数字创意",
              "competency_ids": [
                "information_technology.information_awareness",
                "information_technology.digital_learning_innovation",
                "information_technology.information_social_responsibility"
              ],
              "contribution": "建立数字档案、元数据和交互原型，处理版权、授权和数字保存。"
            },
            {
              "subject_id": "english",
              "content_area": "跨文化语篇、翻译与国际传播",
              "competency_ids": [
                "english.language_ability",
                "english.cultural_awareness",
                "english.thinking_quality"
              ],
              "contribution": "比较跨文化解释，为不同语言受众完成翻译和文化语境补充。"
            }
          ],
          "final_performance_task": {
            "title": "一项文化遗产的可信数字微展",
            "authentic_audience": "学校、地方社区或线上公众",
            "brief": "选择一个地方或校园文化对象，建立可追溯资料档案，完成数字展陈、双语介绍和解释说明，并接受历史真实性与表达伦理质询。",
            "required_artifacts": [
              "资料与来源档案",
              "时间—空间线索图",
              "文化解释说明",
              "数字展陈原型",
              "双语展签",
              "版权与表达伦理说明"
            ]
          }
        },
        "material_links": {}
      },
      {
        "id": "theme-bq7-fair-rules",
        "big_question_id": "BQ7",
        "secondary_big_question_id": "BQ8",
        "title": "什么样的规则才公平？",
        "question": "围绕手机、空间、社团资源或体育活动的一条校园规则，怎样制定才更公平、更可执行？",
        "description": "公平规则不是简单地对所有人一模一样，而是把公共价值转化为理由透明、程序正当、权责清楚、可以申诉并能根据结果修订的共同约定。",
        "source_theme_ids": [
          "TH-CAND-023",
          "TH-CAND-024"
        ],
        "topic_ids": [
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-DATA-001",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-005",
          "T-DATA-006",
          "T-DATA-012",
          "T-GOV-001",
          "T-GOV-002",
          "T-GOV-003",
          "T-GOV-004",
          "T-GOV-005",
          "T-GOV-006",
          "T-FAIR-001",
          "T-FAIR-002",
          "T-FAIR-003",
          "T-PE-001",
          "T-PE-004",
          "T-PE-005"
        ],
        "entry_topic_ids": [
          "T-FAIR-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-005",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-006",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-003",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-005",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-006",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-FAIR-001",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-FAIR-002",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-FAIR-003",
            "phase": "create_and_act",
            "importance": "entry"
          },
          {
            "topic_id": "T-PE-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-005",
            "phase": "create_and_act",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "公平规则不是简单地对所有人一模一样，而是把公共价值转化为理由透明、程序正当、权责清楚、可以申诉并能根据结果修订的共同约定。",
          "learning_goals": [
            "识别规则涉及的利益相关者、权利、责任、证据和现实约束。",
            "比较平等、需要、贡献、安全和公共利益等公平标准，解释价值冲突。",
            "通过调查、听证和协商形成可执行、可复核、可申诉的规则文本。"
          ],
          "subject_contributions": [
            {
              "subject_id": "civics",
              "content_area": "权利义务、法治程序与公共参与",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.rule_of_law",
                "civics.public_participation"
              ],
              "contribution": "分析权利义务、公平原则、法治程序和公共协商。"
            },
            {
              "subject_id": "history",
              "content_area": "国家制度、社会治理与规则变迁",
              "competency_ids": [
                "history.historical_materialism",
                "history.source_evidence",
                "history.historical_explanation"
              ],
              "contribution": "比较规则和制度形成的历史案例，理解规则与社会条件的关系。"
            },
            {
              "subject_id": "chinese",
              "content_area": "实用性阅读与交流、规范性文本表达",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.thinking_development"
              ],
              "contribution": "开展访谈、组织论证与听证，起草边界清楚的规则文本。"
            },
            {
              "subject_id": "mathematics",
              "content_area": "数据分析、资源配置与结果评价",
              "competency_ids": [
                "mathematics.data_analysis",
                "mathematics.logical_reasoning"
              ],
              "contribution": "分析需求、使用频率、资源分配和规则实施结果。"
            },
            {
              "subject_id": "physical_education_health",
              "content_area": "活动安全、规则意识与公平竞争",
              "competency_ids": [
                "physical_education_health.health_behavior",
                "physical_education_health.sports_ethics"
              ],
              "contribution": "在空间、活动和竞赛案例中分析安全、参与机会、规则意识和公平竞争。"
            }
          ],
          "final_performance_task": {
            "title": "校园规则公开听证与修订草案",
            "authentic_audience": "班级、学生会、教师代表或学校管理者",
            "brief": "选择一项有真实争议的校园规则，完成利益相关者调查、证据分析、公平标准比较和模拟听证，提交包含执行、复核、申诉与评估机制的修订草案。",
            "required_artifacts": [
              "利益相关者图",
              "需求与影响数据",
              "公平标准比较表",
              "听证记录",
              "规则修订草案",
              "执行与申诉流程"
            ]
          }
        },
        "material_links": {}
      },
      {
        "id": "theme-bq8-campus-change-lab",
        "big_question_id": "BQ8",
        "secondary_big_question_id": "BQ5",
        "title": "好主意怎样才能真正解决问题？",
        "question": "我们能否把一个校园真实问题变成可测试、可改进、真正被使用的解决方案？",
        "description": "负责任的创造不是提出一个点子或完成一次展示，而是与受影响者共同界定问题，把证据转化为设计标准，制作和测试原型，并为采用、维护、影响和意外后果承担责任。",
        "source_theme_ids": [
          "TH-CAND-009",
          "TH-CAND-012",
          "TH-CAND-005"
        ],
        "topic_ids": [
          "T-ACT-001",
          "T-ACT-002",
          "T-ACT-003",
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-DATA-001",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-006",
          "T-DATA-007",
          "T-DATA-012",
          "T-TECH-001",
          "T-TECH-002",
          "T-TECH-003",
          "T-ART-001",
          "T-ART-003",
          "T-ART-004",
          "T-ART-005",
          "T-PHY-001",
          "T-PHY-003",
          "T-PHY-004",
          "T-PHY-005",
          "T-GOV-001",
          "T-GOV-002",
          "T-GOV-003",
          "T-GOV-005",
          "T-SYS-001",
          "T-SYS-003",
          "T-GEO-004"
        ],
        "entry_topic_ids": [
          "T-ACT-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-ACT-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-ACT-002",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ACT-003",
            "phase": "create_and_act",
            "importance": "entry"
          },
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-006",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-003",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-005",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-SYS-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-SYS-003",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-004",
            "phase": "interpret",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "负责任的创造不是提出一个点子或完成一次展示，而是与受影响者共同界定问题，把证据转化为设计标准，制作和测试原型，并为采用、维护、影响和意外后果承担责任。",
          "learning_goals": [
            "通过观察、访谈和数据明确真实需求，把模糊问题转化为可检验的设计标准。",
            "综合科学原理、计算、数据和艺术设计制作原型，并依据测试证据持续迭代。",
            "评估方案的可及性、公共影响、维护责任和采用条件，完成面向真实受众的行动沟通。"
          ],
          "subject_contributions": [
            {
              "subject_id": "information_technology",
              "content_area": "数据采集、计算设计与数字原型",
              "competency_ids": [
                "information_technology.computational_thinking",
                "information_technology.digital_learning_innovation",
                "information_technology.information_social_responsibility"
              ],
              "contribution": "设计数据采集、反馈逻辑和数字或传感器原型。"
            },
            {
              "subject_id": "physics",
              "content_area": "测量、传感、能量、运动与声光应用",
              "competency_ids": [
                "physics.physical_concepts",
                "physics.scientific_thinking",
                "physics.scientific_inquiry",
                "physics.scientific_attitude_responsibility"
              ],
              "contribution": "解释原型所依赖的测量、传感、能量、运动或声光等物理原理。"
            },
            {
              "subject_id": "mathematics",
              "content_area": "数学建模、测试指标与数据分析",
              "competency_ids": [
                "mathematics.modeling",
                "mathematics.data_analysis",
                "mathematics.logical_reasoning"
              ],
              "contribution": "定义成功指标，分析测试数据并比较迭代效果。"
            },
            {
              "subject_id": "art",
              "content_area": "艺术与科学、视觉传达与体验设计",
              "competency_ids": [
                "art.artistic_perception",
                "art.creative_expression",
                "art.aesthetic_taste"
              ],
              "contribution": "完成以使用者为中心的形态、界面、视觉和体验设计。"
            },
            {
              "subject_id": "chinese",
              "content_area": "调查访谈、设计说明与公众表达",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.thinking_development"
              ],
              "contribution": "组织需求访谈、设计说明、公共展示和反馈回应。"
            },
            {
              "subject_id": "civics",
              "content_area": "公共价值、参与协商与责任机制",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.public_participation"
              ],
              "contribution": "分析公共价值、不同群体影响、资源使用、采用规则与维护责任。"
            }
          ],
          "final_performance_task": {
            "title": "一个校园解决方案的原型、试验与采用提案",
            "authentic_audience": "真实使用者、学校管理者、后勤人员或学生社群",
            "brief": "围绕噪声、光照、用水、通行、安全或信息服务等真实问题，完成需求研究、原型、测试和至少一次迭代，并提交可采用、可维护的校园行动提案。",
            "required_artifacts": [
              "问题与需求简报",
              "设计标准",
              "原型",
              "测试数据与记录",
              "迭代历史",
              "影响与风险说明",
              "采用和维护提案"
            ]
          }
        },
        "material_links": {}
      }
    ],
    "themes": [
      {
        "id": "theme-bq1-wellbeing",
        "big_question_id": "BQ1",
        "secondary_big_question_id": "BQ8",
        "title": "怎样生活才算健康？",
        "question": "怎样用证据设计一个既适合自己、尊重个体差异，又能得到同伴支持的健康生活方案？",
        "description": "有尊严的健康成长不是用统一指标约束每个人，而是理解身体节律、情绪、学习、关系与环境之间的联系，在保护隐私和尊重差异的前提下形成可持续的自我管理与共同照护。",
        "source_theme_ids": [
          "TH-CAND-014",
          "TH-CAND-015",
          "TH-CAND-013"
        ],
        "topic_ids": [
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-DATA-001",
          "T-DATA-003",
          "T-DATA-006",
          "T-DATA-007",
          "T-DATA-012",
          "T-BIO-001",
          "T-BIO-002",
          "T-BIO-004",
          "T-BIO-005",
          "T-PE-001",
          "T-PE-002",
          "T-PE-003",
          "T-PE-005",
          "T-CHEM-001",
          "T-CHEM-003",
          "T-GOV-001",
          "T-GOV-002",
          "T-WELL-001",
          "T-WELL-002",
          "T-WELL-003"
        ],
        "entry_topic_ids": [
          "T-WELL-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-006",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-003",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-WELL-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-WELL-002",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-WELL-003",
            "phase": "create_and_act",
            "importance": "entry"
          }
        ],
        "theme_learning": {
          "theme_statement": "有尊严的健康成长不是用统一指标约束每个人，而是理解身体节律、情绪、学习、关系与环境之间的联系，在保护隐私和尊重差异的前提下形成可持续的自我管理与共同照护。",
          "learning_goals": [
            "记录并解释运动、睡眠、饮食、专注和情绪等信息，区分观察、相关与因果。",
            "综合生命科学、运动健康和数据证据，设计符合个人条件且可以迭代的健康方案。",
            "识别健康数据的隐私与标签化风险，形成尊重差异的同伴支持和公共沟通方式。"
          ],
          "subject_contributions": [
            {
              "subject_id": "physical_education_health",
              "content_area": "运动技能、体能发展与健康行为",
              "competency_ids": [
                "physical_education_health.motor_ability",
                "physical_education_health.health_behavior",
                "physical_education_health.sports_ethics"
              ],
              "contribution": "形成运动处方、健康行为目标和可持续锻炼策略，判断运动安全与同伴合作边界。"
            },
            {
              "subject_id": "biology",
              "content_area": "稳态与调节、生命活动与健康",
              "competency_ids": [
                "biology.life_concept",
                "biology.scientific_thinking",
                "biology.scientific_inquiry",
                "biology.social_responsibility"
              ],
              "contribution": "解释睡眠、稳态、代谢、压力和身体调节机制，判断健康建议的科学依据。"
            },
            {
              "subject_id": "chemistry",
              "content_area": "营养物质、能量与健康相关物质",
              "competency_ids": [
                "chemistry.macro_micro",
                "chemistry.evidence_model",
                "chemistry.attitude_responsibility"
              ],
              "contribution": "解释营养物质、能量与身体健康相关的物质基础，审查产品宣传中的化学主张。"
            },
            {
              "subject_id": "mathematics",
              "content_area": "概率与统计、数据分析",
              "competency_ids": [
                "mathematics.data_analysis",
                "mathematics.modeling",
                "mathematics.logical_reasoning"
              ],
              "contribution": "分析个人或匿名小组数据，识别波动、相关关系和过度因果解释。"
            },
            {
              "subject_id": "chinese",
              "content_area": "实用性阅读与交流、反思性表达",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.thinking_development"
              ],
              "contribution": "阅读健康材料、组织反思叙事，并以非污名化语言交流差异和支持需要。"
            },
            {
              "subject_id": "civics",
              "content_area": "公共生活、科学判断与共同责任",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.public_participation"
              ],
              "contribution": "讨论健康数据隐私、人格尊严、共同责任和学校健康支持机制。"
            }
          ],
          "final_performance_task": {
            "title": "四周健康改进与共同照护方案",
            "authentic_audience": "学生本人、同伴小组、体育与健康教师或学校健康支持人员",
            "brief": "在保护隐私的前提下记录健康行为，解释关键变量，设计并试行个人改进方案，同时为班级形成一份尊重差异的同伴支持约定。",
            "required_artifacts": [
              "匿名健康数据日志",
              "机制解释卡",
              "个人健康改进方案",
              "同伴支持约定",
              "迭代反思"
            ]
          }
        },
        "material_links": {}
      },
      {
        "id": "theme-bq2-data-truth",
        "big_question_id": "BQ2",
        "secondary_big_question_id": "BQ3",
        "title": "数据能告诉我们真相吗？",
        "question": "同一组数据为什么可能支持不同结论？",
        "description": "数据可信度不是单纯的统计计算问题，而是由数据如何采集和表示、数学上能否成立、语言上如何陈述，以及面向公众是否负责任共同决定。",
        "source_theme_ids": [
          "TH-CAND-004"
        ],
        "topic_ids": [
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-DATA-001",
          "T-DATA-002",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-005",
          "T-DATA-006",
          "T-DATA-007",
          "T-DATA-008",
          "T-DATA-009",
          "T-DATA-010",
          "T-DATA-011",
          "T-DATA-012",
          "T-DATA-013",
          "T-TECH-001",
          "T-TECH-002",
          "T-TECH-003",
          "T-ENG-001",
          "T-ENG-002",
          "T-ENG-004",
          "T-ENG-005"
        ],
        "entry_topic_ids": [
          "T-DATA-012"
        ],
        "topic_roles": [
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-002",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-005",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-006",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-008",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-009",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-010",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-011",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "entry"
          },
          {
            "topic_id": "T-DATA-013",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-005",
            "phase": "create_and_act",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "数据可信度不是单纯的统计计算问题，而是由数据如何采集和表示、数学上能否成立、语言上如何陈述，以及面向公众是否负责任共同决定。",
          "learning_goals": [
            "追溯一则数据主张从现实对象、采集过程、统计处理到公开结论的完整证据链。",
            "综合运用样本、口径、分布、图表和因果判断，识别结论被夸大或误导的环节。",
            "面向真实受众重绘数据表达，并用可核验、有限定、可质询的语言说明证据边界。"
          ],
          "subject_contributions": [
            {
              "subject_id": "mathematics",
              "content_area": "概率与统计、数据表达",
              "competency_ids": [
                "mathematics.data_analysis",
                "mathematics.logical_reasoning",
                "mathematics.modeling",
                "mathematics.visual_imagination"
              ],
              "contribution": "审查变量、样本、统计口径、分布、图表以及相关与因果关系。"
            },
            {
              "subject_id": "information_technology",
              "content_area": "数据与计算、数据与数据结构",
              "competency_ids": [
                "information_technology.information_awareness",
                "information_technology.computational_thinking",
                "information_technology.digital_learning_innovation"
              ],
              "contribution": "追踪数据采集、字段编码、清洗转换和可复现过程，保留来源与处理记录。"
            },
            {
              "subject_id": "chinese",
              "content_area": "实用性阅读与交流、当代文化参与",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.thinking_development"
              ],
              "contribution": "区分事实、数据和主张，核验来源，组织论证，使用限定语并完成公众说明与质询。"
            },
            {
              "subject_id": "english",
              "content_area": "多语篇阅读、跨文化信息比较",
              "competency_ids": [
                "english.language_ability",
                "english.cultural_awareness",
                "english.thinking_quality",
                "english.learning_ability"
              ],
              "contribution": "比较跨语言来源及国际材料，识别翻译、语境和表达造成的信息偏移。"
            },
            {
              "subject_id": "civics",
              "content_area": "逻辑与思维、公共参与",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.public_participation"
              ],
              "contribution": "判断数据表达影响谁、服务何种利益，并审查公开传播是否符合公共责任。"
            }
          ],
          "final_performance_task": {
            "title": "一则数据主张的公开审查与可信改写",
            "authentic_audience": "同学、家长或校园公共议题的真实受众",
            "brief": "选择一则新闻、校园调查或公开报告中的数据主张，找到原始来源，完成跨学科审查，重绘图表、改写结论，并在公开质询中为修改理由辩护。",
            "required_artifacts": [
              "数据来源与证据链卡",
              "样本与口径审查表",
              "修正版图表",
              "公众说明",
              "质询回应记录"
            ]
          }
        },
        "material_links": {
          "teacher_package": "resources/themes/TH-CAND-004.md",
          "student_worksheet": "resources/materials/TH-CAND-004/student_worksheet.md"
        }
      },
      {
        "id": "theme-bq3-campus-flow",
        "big_question_id": "BQ3",
        "secondary_big_question_id": "BQ8",
        "title": "未来真的可以被预测吗？",
        "question": "校园高峰时段为什么会拥堵？模型能预测哪些通行变化，又可能遗漏什么？",
        "description": "复杂系统不能仅靠列举因素解释；需要划定边界，识别变量、流动、反馈和约束，再用经过现实检验的模型支持行动，同时承认模型的简化和不确定性。",
        "source_theme_ids": [
          "TH-CAND-020",
          "TH-CAND-019",
          "TH-CAND-021"
        ],
        "topic_ids": [
          "T-SYS-001",
          "T-SYS-002",
          "T-SYS-003",
          "T-DATA-001",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-006",
          "T-DATA-007",
          "T-DATA-008",
          "T-DATA-009",
          "T-DATA-012",
          "T-PHY-001",
          "T-PHY-002",
          "T-PHY-003",
          "T-PHY-004",
          "T-GEO-001",
          "T-GEO-002",
          "T-GEO-003",
          "T-GEO-004",
          "T-TECH-001",
          "T-TECH-002",
          "T-TECH-003",
          "T-GOV-002",
          "T-GOV-003"
        ],
        "entry_topic_ids": [
          "T-SYS-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-SYS-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-SYS-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-SYS-003",
            "phase": "create_and_act",
            "importance": "entry"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-006",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-008",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-009",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-003",
            "phase": "interpret",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "复杂系统不能仅靠列举因素解释；需要划定边界，识别变量、流动、反馈和约束，再用经过现实检验的模型支持行动，同时承认模型的简化和不确定性。",
          "learning_goals": [
            "把校园高峰通行还原为空间、时间、人员、规则和设施相互作用的系统。",
            "采集真实数据，建立并检验简化模型，解释误差、假设和适用边界。",
            "比较空间、时间与规则干预方案，在效率、安全、公平之间作出有证据的选择。"
          ],
          "subject_contributions": [
            {
              "subject_id": "mathematics",
              "content_area": "数学建模、函数与数据分析",
              "competency_ids": [
                "mathematics.abstraction",
                "mathematics.modeling",
                "mathematics.data_analysis",
                "mathematics.logical_reasoning"
              ],
              "contribution": "抽象变量和关系，建立流量模型，比较预测值与观测值。"
            },
            {
              "subject_id": "physics",
              "content_area": "运动、速度、密度与边界条件",
              "competency_ids": [
                "physics.physical_concepts",
                "physics.scientific_thinking",
                "physics.scientific_inquiry",
                "physics.scientific_attitude_responsibility"
              ],
              "contribution": "从运动、速度、密度和边界条件解释校园通行变化及瓶颈。"
            },
            {
              "subject_id": "information_technology",
              "content_area": "数据采集、算法模拟与可视化",
              "competency_ids": [
                "information_technology.computational_thinking",
                "information_technology.digital_learning_innovation",
                "information_technology.information_social_responsibility"
              ],
              "contribution": "组织采集数据，进行简单模拟和可视化，并保护位置与个人信息。"
            },
            {
              "subject_id": "geography",
              "content_area": "空间布局、功能分区与地理实践",
              "competency_ids": [
                "geography.human_land_coordination",
                "geography.comprehensive_thinking",
                "geography.regional_cognition",
                "geography.geographical_practice"
              ],
              "contribution": "分析校园空间布局、功能分区、路径和地点之间的关系。"
            },
            {
              "subject_id": "civics",
              "content_area": "公共规则、利益协调与参与",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.public_participation"
              ],
              "contribution": "审查优化方案对不同群体的影响，并组织规则协商。"
            }
          ],
          "final_performance_task": {
            "title": "校园高峰通行优化提案与小规模试验",
            "authentic_audience": "学校管理者、师生与后勤人员",
            "brief": "选择一个真实拥堵点，完成测量、系统图和简化模型，提出至少两种干预方案，并通过小规模试验或模拟比较效果。",
            "required_artifacts": [
              "校园通行观察地图",
              "变量与系统关系图",
              "简化预测模型",
              "方案比较表",
              "试验记录",
              "优化提案"
            ]
          }
        },
        "material_links": {}
      },
      {
        "id": "theme-bq4-carbon-campus",
        "big_question_id": "BQ4",
        "secondary_big_question_id": "BQ8",
        "title": "我们能实现碳中和吗？",
        "question": "我们的校园如何从能源、材料和行为上减少碳足迹？",
        "description": "校园碳中和不是一句倡议，而是物质与能量流动、生态过程、生活行为和制度选择共同构成的系统问题，需要透明的核算、情境化的权衡和持续行动。",
        "source_theme_ids": [
          "TH-CAND-001"
        ],
        "topic_ids": [
          "T-SYS-001",
          "T-SYS-002",
          "T-ECO-001",
          "T-ECO-002",
          "T-ECO-003",
          "T-GEO-002",
          "T-GEO-004",
          "T-GEO-005",
          "T-PHY-001",
          "T-PHY-002",
          "T-PHY-004",
          "T-PHY-005",
          "T-CHEM-001",
          "T-CHEM-002",
          "T-CHEM-003",
          "T-CHEM-004",
          "T-CHEM-005",
          "T-BIO-001",
          "T-BIO-003",
          "T-BIO-004",
          "T-BIO-005",
          "T-DATA-001",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-007",
          "T-DATA-012",
          "T-GOV-001",
          "T-GOV-003",
          "T-GOV-005",
          "T-EVID-005"
        ],
        "entry_topic_ids": [
          "T-ECO-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-SYS-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-SYS-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ECO-001",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ECO-002",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ECO-003",
            "phase": "create_and_act",
            "importance": "entry"
          },
          {
            "topic_id": "T-GEO-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-CHEM-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-BIO-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-003",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-005",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "校园碳中和不是一句倡议，而是物质与能量流动、生态过程、生活行为和制度选择共同构成的系统问题，需要透明的核算、情境化的权衡和持续行动。",
          "learning_goals": [
            "描绘校园能源、交通、饮食和材料消耗与碳排放之间的系统关系。",
            "建立注明边界、排放因子、假设和不确定性的简化碳核算模型。",
            "比较不同减排方案的效果、成本、公平性和可执行性，形成分阶段行动路线。"
          ],
          "subject_contributions": [
            {
              "subject_id": "geography",
              "content_area": "地球系统、人类活动与可持续发展",
              "competency_ids": [
                "geography.human_land_coordination",
                "geography.comprehensive_thinking",
                "geography.regional_cognition",
                "geography.geographical_practice"
              ],
              "contribution": "理解碳循环、空间差异、人类活动和可持续发展的关系。"
            },
            {
              "subject_id": "physics",
              "content_area": "能源转换、效率与能源可持续利用",
              "competency_ids": [
                "physics.physical_concepts",
                "physics.scientific_thinking",
                "physics.scientific_inquiry",
                "physics.scientific_attitude_responsibility"
              ],
              "contribution": "解释能源转换、效率、用电和交通方式的物理基础。"
            },
            {
              "subject_id": "chemistry",
              "content_area": "燃烧、材料生命周期与化学社会发展",
              "competency_ids": [
                "chemistry.changes_equilibrium",
                "chemistry.evidence_model",
                "chemistry.attitude_responsibility"
              ],
              "contribution": "解释燃烧、材料生命周期和排放过程中的物质变化。"
            },
            {
              "subject_id": "biology",
              "content_area": "生态系统、碳循环与生物多样性",
              "competency_ids": [
                "biology.life_concept",
                "biology.scientific_thinking",
                "biology.scientific_inquiry",
                "biology.social_responsibility"
              ],
              "contribution": "解释生态系统、碳汇、生物多样性与校园绿化的作用和边界。"
            },
            {
              "subject_id": "mathematics",
              "content_area": "数学建模、数据分析与情景比较",
              "competency_ids": [
                "mathematics.modeling",
                "mathematics.data_analysis",
                "mathematics.operation"
              ],
              "contribution": "完成碳排估算、情景比较和不确定性表达。"
            },
            {
              "subject_id": "civics",
              "content_area": "可持续发展、公共资源与参与",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.public_participation"
              ],
              "contribution": "分析责任分配、公共资源、行动规则和校园协商机制。"
            }
          ],
          "final_performance_task": {
            "title": "校园碳预算与三年减排行动路线",
            "authentic_audience": "学校管理层、后勤部门、师生代表",
            "brief": "完成一个边界明确的校园碳排调查，比较若干减排情景，提出包含优先级、责任人、成本、预期效果和复盘机制的行动路线。",
            "required_artifacts": [
              "校园碳流图",
              "碳排核算表",
              "假设与不确定性说明",
              "减排情景比较",
              "三年行动路线",
              "公众展示"
            ]
          }
        },
        "material_links": {}
      },
      {
        "id": "theme-bq5-ai-decisions",
        "big_question_id": "BQ5",
        "secondary_big_question_id": "BQ7",
        "title": "AI 可以替我们做决定吗？",
        "question": "AI 参与判断时，责任、偏差和公平该如何被讨论？",
        "description": "AI 判断不是机器独立完成的技术动作，而是数据、模型、机构决策、权利影响和治理规则共同构成的社会技术过程。",
        "source_theme_ids": [
          "TH-CAND-007"
        ],
        "topic_ids": [
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-005",
          "T-DATA-007",
          "T-DATA-009",
          "T-DATA-012",
          "T-DATA-013",
          "T-TECH-001",
          "T-TECH-003",
          "T-AI-001",
          "T-AI-002",
          "T-AI-003",
          "T-AI-004",
          "T-AI-005",
          "T-AI-006",
          "T-GOV-001",
          "T-GOV-002",
          "T-GOV-003",
          "T-GOV-004",
          "T-GOV-005",
          "T-GOV-006",
          "T-GOV-007"
        ],
        "entry_topic_ids": [
          "T-GOV-007"
        ],
        "topic_roles": [
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-005",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-009",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-013",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-005",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-AI-006",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-003",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-005",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-006",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-007",
            "phase": "create_and_act",
            "importance": "entry"
          }
        ],
        "theme_learning": {
          "theme_statement": "AI 判断不是机器独立完成的技术动作，而是数据、模型、机构决策、权利影响和治理规则共同构成的社会技术过程。",
          "learning_goals": [
            "画出 AI 案例中的数据、模型输出、使用者、决策者和受影响者关系链。",
            "从代表性、阈值与误判、反馈回路、群体影响和错误代价分析偏差与公平。",
            "综合技术能力、权利保障和制度责任，提出包含解释、人工复核与申诉机制的使用边界。"
          ],
          "subject_contributions": [
            {
              "subject_id": "information_technology",
              "content_area": "人工智能初步、数据与计算",
              "competency_ids": [
                "information_technology.information_awareness",
                "information_technology.computational_thinking",
                "information_technology.information_social_responsibility"
              ],
              "contribution": "解释训练数据、标签、模型输出、阈值和反馈回路，指出技术能力与局限。"
            },
            {
              "subject_id": "mathematics",
              "content_area": "概率与统计",
              "competency_ids": [
                "mathematics.data_analysis",
                "mathematics.logical_reasoning",
                "mathematics.modeling"
              ],
              "contribution": "审查样本代表性、概率、阈值、误判类型和群体结果差异。"
            },
            {
              "subject_id": "civics",
              "content_area": "经济与社会、逻辑与思维、公共参与",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.rule_of_law",
                "civics.public_participation"
              ],
              "contribution": "从权利、公共利益、公平和法治判断 AI 使用的正当性。"
            },
            {
              "subject_id": "history",
              "content_area": "国家制度、社会治理与技术变迁",
              "competency_ids": [
                "history.historical_materialism",
                "history.historical_explanation"
              ],
              "contribution": "比较技术进入劳动和治理体系的历史过程，理解制度责任如何形成。"
            },
            {
              "subject_id": "chinese",
              "content_area": "实用性阅读与交流、当代文化参与",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.thinking_development"
              ],
              "contribution": "核验案例证据，组织多方论证、质询和可执行的公共建议。"
            }
          ],
          "final_performance_task": {
            "title": "AI 使用边界公共咨询与建议书",
            "authentic_audience": "模拟学校数字教育委员会或公共决策听证会",
            "brief": "选择招聘、学习诊断、医疗分诊或公共服务中的 AI 案例，完成技术和社会风险审查，举行多方圆桌并提交使用边界建议。",
            "required_artifacts": [
              "数据—模型—决策—责任链图",
              "风险矩阵",
              "利益相关者与权责图",
              "复核与申诉流程",
              "公共建议书"
            ]
          }
        },
        "material_links": {
          "teacher_package": "resources/themes/TH-CAND-007.md",
          "student_worksheet": "resources/materials/TH-CAND-007/student_worksheet.md"
        }
      },
      {
        "id": "theme-bq6-digital-heritage",
        "big_question_id": "BQ6",
        "secondary_big_question_id": "BQ5",
        "title": "文化遗产如何活在未来？",
        "question": "数字技术如何帮助我们理解、保存和再表达文化遗产？",
        "description": "文化遗产数字化不是把对象复制到屏幕上，而是基于史料作出选择、解释、翻译和设计；数字表达必须同时处理真实性、文化语境、审美、受众和权利。",
        "source_theme_ids": [
          "TH-CAND-010"
        ],
        "topic_ids": [
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-CULT-001",
          "T-CULT-002",
          "T-CULT-003",
          "T-ART-001",
          "T-ART-002",
          "T-ART-003",
          "T-ART-004",
          "T-ART-005",
          "T-ENG-001",
          "T-ENG-002",
          "T-ENG-003",
          "T-ENG-004",
          "T-ENG-005",
          "T-TECH-001",
          "T-TECH-002",
          "T-TECH-003",
          "T-GOV-001",
          "T-GOV-006"
        ],
        "entry_topic_ids": [
          "T-CULT-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-CULT-001",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-CULT-002",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-CULT-003",
            "phase": "create_and_act",
            "importance": "entry"
          },
          {
            "topic_id": "T-ART-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ENG-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-006",
            "phase": "interpret",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "文化遗产数字化不是把对象复制到屏幕上，而是基于史料作出选择、解释、翻译和设计；数字表达必须同时处理真实性、文化语境、审美、受众和权利。",
          "learning_goals": [
            "建立文化对象的来源、时间、空间和解释证据链，区分事实、推断和当代再阐释。",
            "理解文化意义如何在历史交流、媒介变化和不同受众中被重新建构。",
            "运用数字与艺术语言完成有来源、尊重文化语境、适合公众理解的展陈。"
          ],
          "subject_contributions": [
            {
              "subject_id": "chinese",
              "content_area": "文化论著研习、当代文化参与与公众表达",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.aesthetic_appreciation",
                "chinese.cultural_inheritance"
              ],
              "contribution": "阅读文化材料，组织解释性叙事、展签和公众讲解。"
            },
            {
              "subject_id": "history",
              "content_area": "文化交流传播、史料研习与历史解释",
              "competency_ids": [
                "history.temporal_spatial",
                "history.source_evidence",
                "history.historical_explanation",
                "history.national_sentiment"
              ],
              "contribution": "建立时空背景和史料证据链，解释文化意义的历史变化。"
            },
            {
              "subject_id": "art",
              "content_area": "艺术与文化、影视与数字媒体艺术实践",
              "competency_ids": [
                "art.artistic_perception",
                "art.creative_expression",
                "art.aesthetic_taste",
                "art.cultural_understanding"
              ],
              "contribution": "分析形式、媒介和审美特征，设计数字展陈与视觉表达。"
            },
            {
              "subject_id": "information_technology",
              "content_area": "数据与数据结构、三维设计与数字创意",
              "competency_ids": [
                "information_technology.information_awareness",
                "information_technology.digital_learning_innovation",
                "information_technology.information_social_responsibility"
              ],
              "contribution": "建立数字档案、元数据和交互原型，处理版权、授权和数字保存。"
            },
            {
              "subject_id": "english",
              "content_area": "跨文化语篇、翻译与国际传播",
              "competency_ids": [
                "english.language_ability",
                "english.cultural_awareness",
                "english.thinking_quality"
              ],
              "contribution": "比较跨文化解释，为不同语言受众完成翻译和文化语境补充。"
            }
          ],
          "final_performance_task": {
            "title": "一项文化遗产的可信数字微展",
            "authentic_audience": "学校、地方社区或线上公众",
            "brief": "选择一个地方或校园文化对象，建立可追溯资料档案，完成数字展陈、双语介绍和解释说明，并接受历史真实性与表达伦理质询。",
            "required_artifacts": [
              "资料与来源档案",
              "时间—空间线索图",
              "文化解释说明",
              "数字展陈原型",
              "双语展签",
              "版权与表达伦理说明"
            ]
          }
        },
        "material_links": {}
      },
      {
        "id": "theme-bq7-fair-rules",
        "big_question_id": "BQ7",
        "secondary_big_question_id": "BQ8",
        "title": "什么样的规则才公平？",
        "question": "围绕手机、空间、社团资源或体育活动的一条校园规则，怎样制定才更公平、更可执行？",
        "description": "公平规则不是简单地对所有人一模一样，而是把公共价值转化为理由透明、程序正当、权责清楚、可以申诉并能根据结果修订的共同约定。",
        "source_theme_ids": [
          "TH-CAND-023",
          "TH-CAND-024"
        ],
        "topic_ids": [
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-DATA-001",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-005",
          "T-DATA-006",
          "T-DATA-012",
          "T-GOV-001",
          "T-GOV-002",
          "T-GOV-003",
          "T-GOV-004",
          "T-GOV-005",
          "T-GOV-006",
          "T-FAIR-001",
          "T-FAIR-002",
          "T-FAIR-003",
          "T-PE-001",
          "T-PE-004",
          "T-PE-005"
        ],
        "entry_topic_ids": [
          "T-FAIR-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-005",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-006",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-003",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-005",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-006",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-FAIR-001",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-FAIR-002",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-FAIR-003",
            "phase": "create_and_act",
            "importance": "entry"
          },
          {
            "topic_id": "T-PE-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-PE-005",
            "phase": "create_and_act",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "公平规则不是简单地对所有人一模一样，而是把公共价值转化为理由透明、程序正当、权责清楚、可以申诉并能根据结果修订的共同约定。",
          "learning_goals": [
            "识别规则涉及的利益相关者、权利、责任、证据和现实约束。",
            "比较平等、需要、贡献、安全和公共利益等公平标准，解释价值冲突。",
            "通过调查、听证和协商形成可执行、可复核、可申诉的规则文本。"
          ],
          "subject_contributions": [
            {
              "subject_id": "civics",
              "content_area": "权利义务、法治程序与公共参与",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.rule_of_law",
                "civics.public_participation"
              ],
              "contribution": "分析权利义务、公平原则、法治程序和公共协商。"
            },
            {
              "subject_id": "history",
              "content_area": "国家制度、社会治理与规则变迁",
              "competency_ids": [
                "history.historical_materialism",
                "history.source_evidence",
                "history.historical_explanation"
              ],
              "contribution": "比较规则和制度形成的历史案例，理解规则与社会条件的关系。"
            },
            {
              "subject_id": "chinese",
              "content_area": "实用性阅读与交流、规范性文本表达",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.thinking_development"
              ],
              "contribution": "开展访谈、组织论证与听证，起草边界清楚的规则文本。"
            },
            {
              "subject_id": "mathematics",
              "content_area": "数据分析、资源配置与结果评价",
              "competency_ids": [
                "mathematics.data_analysis",
                "mathematics.logical_reasoning"
              ],
              "contribution": "分析需求、使用频率、资源分配和规则实施结果。"
            },
            {
              "subject_id": "physical_education_health",
              "content_area": "活动安全、规则意识与公平竞争",
              "competency_ids": [
                "physical_education_health.health_behavior",
                "physical_education_health.sports_ethics"
              ],
              "contribution": "在空间、活动和竞赛案例中分析安全、参与机会、规则意识和公平竞争。"
            }
          ],
          "final_performance_task": {
            "title": "校园规则公开听证与修订草案",
            "authentic_audience": "班级、学生会、教师代表或学校管理者",
            "brief": "选择一项有真实争议的校园规则，完成利益相关者调查、证据分析、公平标准比较和模拟听证，提交包含执行、复核、申诉与评估机制的修订草案。",
            "required_artifacts": [
              "利益相关者图",
              "需求与影响数据",
              "公平标准比较表",
              "听证记录",
              "规则修订草案",
              "执行与申诉流程"
            ]
          }
        },
        "material_links": {}
      },
      {
        "id": "theme-bq8-campus-change-lab",
        "big_question_id": "BQ8",
        "secondary_big_question_id": "BQ5",
        "title": "好主意怎样才能真正解决问题？",
        "question": "我们能否把一个校园真实问题变成可测试、可改进、真正被使用的解决方案？",
        "description": "负责任的创造不是提出一个点子或完成一次展示，而是与受影响者共同界定问题，把证据转化为设计标准，制作和测试原型，并为采用、维护、影响和意外后果承担责任。",
        "source_theme_ids": [
          "TH-CAND-009",
          "TH-CAND-012",
          "TH-CAND-005"
        ],
        "topic_ids": [
          "T-ACT-001",
          "T-ACT-002",
          "T-ACT-003",
          "T-EVID-001",
          "T-EVID-002",
          "T-EVID-003",
          "T-EVID-004",
          "T-EVID-005",
          "T-DATA-001",
          "T-DATA-003",
          "T-DATA-004",
          "T-DATA-006",
          "T-DATA-007",
          "T-DATA-012",
          "T-TECH-001",
          "T-TECH-002",
          "T-TECH-003",
          "T-ART-001",
          "T-ART-003",
          "T-ART-004",
          "T-ART-005",
          "T-PHY-001",
          "T-PHY-003",
          "T-PHY-004",
          "T-PHY-005",
          "T-GOV-001",
          "T-GOV-002",
          "T-GOV-003",
          "T-GOV-005",
          "T-SYS-001",
          "T-SYS-003",
          "T-GEO-004"
        ],
        "entry_topic_ids": [
          "T-ACT-003"
        ],
        "topic_roles": [
          {
            "topic_id": "T-ACT-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-ACT-002",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ACT-003",
            "phase": "create_and_act",
            "importance": "entry"
          },
          {
            "topic_id": "T-EVID-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-EVID-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-003",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-004",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-006",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-007",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-DATA-012",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-TECH-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-ART-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-003",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-004",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-PHY-005",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-002",
            "phase": "investigate",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-003",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-GOV-005",
            "phase": "interpret",
            "importance": "core"
          },
          {
            "topic_id": "T-SYS-001",
            "phase": "discover",
            "importance": "core"
          },
          {
            "topic_id": "T-SYS-003",
            "phase": "create_and_act",
            "importance": "core"
          },
          {
            "topic_id": "T-GEO-004",
            "phase": "interpret",
            "importance": "core"
          }
        ],
        "theme_learning": {
          "theme_statement": "负责任的创造不是提出一个点子或完成一次展示，而是与受影响者共同界定问题，把证据转化为设计标准，制作和测试原型，并为采用、维护、影响和意外后果承担责任。",
          "learning_goals": [
            "通过观察、访谈和数据明确真实需求，把模糊问题转化为可检验的设计标准。",
            "综合科学原理、计算、数据和艺术设计制作原型，并依据测试证据持续迭代。",
            "评估方案的可及性、公共影响、维护责任和采用条件，完成面向真实受众的行动沟通。"
          ],
          "subject_contributions": [
            {
              "subject_id": "information_technology",
              "content_area": "数据采集、计算设计与数字原型",
              "competency_ids": [
                "information_technology.computational_thinking",
                "information_technology.digital_learning_innovation",
                "information_technology.information_social_responsibility"
              ],
              "contribution": "设计数据采集、反馈逻辑和数字或传感器原型。"
            },
            {
              "subject_id": "physics",
              "content_area": "测量、传感、能量、运动与声光应用",
              "competency_ids": [
                "physics.physical_concepts",
                "physics.scientific_thinking",
                "physics.scientific_inquiry",
                "physics.scientific_attitude_responsibility"
              ],
              "contribution": "解释原型所依赖的测量、传感、能量、运动或声光等物理原理。"
            },
            {
              "subject_id": "mathematics",
              "content_area": "数学建模、测试指标与数据分析",
              "competency_ids": [
                "mathematics.modeling",
                "mathematics.data_analysis",
                "mathematics.logical_reasoning"
              ],
              "contribution": "定义成功指标，分析测试数据并比较迭代效果。"
            },
            {
              "subject_id": "art",
              "content_area": "艺术与科学、视觉传达与体验设计",
              "competency_ids": [
                "art.artistic_perception",
                "art.creative_expression",
                "art.aesthetic_taste"
              ],
              "contribution": "完成以使用者为中心的形态、界面、视觉和体验设计。"
            },
            {
              "subject_id": "chinese",
              "content_area": "调查访谈、设计说明与公众表达",
              "competency_ids": [
                "chinese.language_construction",
                "chinese.thinking_development"
              ],
              "contribution": "组织需求访谈、设计说明、公共展示和反馈回应。"
            },
            {
              "subject_id": "civics",
              "content_area": "公共价值、参与协商与责任机制",
              "competency_ids": [
                "civics.scientific_spirit",
                "civics.public_participation"
              ],
              "contribution": "分析公共价值、不同群体影响、资源使用、采用规则与维护责任。"
            }
          ],
          "final_performance_task": {
            "title": "一个校园解决方案的原型、试验与采用提案",
            "authentic_audience": "真实使用者、学校管理者、后勤人员或学生社群",
            "brief": "围绕噪声、光照、用水、通行、安全或信息服务等真实问题，完成需求研究、原型、测试和至少一次迭代，并提交可采用、可维护的校园行动提案。",
            "required_artifacts": [
              "问题与需求简报",
              "设计标准",
              "原型",
              "测试数据与记录",
              "迭代历史",
              "影响与风险说明",
              "采用和维护提案"
            ]
          }
        },
        "material_links": {}
      }
    ],
    "curriculum_alignment": {
      "review_status": "source_labels_verified_catalog_draft",
      "alignment_status": "author_mapped_pending_subject_review",
      "disclaimer": "本目录中的学科核心素养名称与页码已依据本地普通高中课程标准原文核对；它只声明本地课标语料与官方素养目录的覆盖边界，不代表主题、学习节点及其素养映射已经完成学科教师复核。PDF-001 为普通高中课程方案，是顶层政策来源，不计作第十三门学科；当前本地语料不含普通高中通用技术课程标准。",
      "coverage_contract": {
        "curriculum_plan": {
          "file_id": "PDF-001",
          "standard_file": "1.普通高中课程方案（2017年版2020年修订）.pdf",
          "role": "policy_framework"
        },
        "expected_subject_standard_file_ids": [
          "PDF-002",
          "PDF-003",
          "PDF-004",
          "PDF-005",
          "PDF-006",
          "PDF-007",
          "PDF-008",
          "PDF-009",
          "PDF-010",
          "PDF-011",
          "PDF-012",
          "PDF-013"
        ],
        "expected_subject_ids": [
          "chinese",
          "mathematics",
          "english",
          "civics",
          "history",
          "geography",
          "physics",
          "chemistry",
          "biology",
          "information_technology",
          "art",
          "physical_education_health"
        ],
        "expected_bq_ids": [
          "BQ1",
          "BQ2",
          "BQ3",
          "BQ4",
          "BQ5",
          "BQ6",
          "BQ7",
          "BQ8"
        ],
        "expected_coverage_units": 182
      },
      "curriculum_plan_unit_ids": [
        "CU-001",
        "CU-002",
        "CU-003",
        "CU-004",
        "CU-005",
        "CU-006",
        "CU-007"
      ],
      "curriculum_subjects": [
        {
          "id": "chinese",
          "label": "语文",
          "file_id": "PDF-006",
          "standard_file": "2.普通高中语文课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-006｜PDF第12-13页（书内第4-5页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "chinese.language_construction",
            "chinese.thinking_development",
            "chinese.aesthetic_appreciation",
            "chinese.cultural_inheritance"
          ],
          "coverage_unit_ids": [
            "CU-057",
            "CU-058",
            "CU-059",
            "CU-060",
            "CU-061",
            "CU-062",
            "CU-063",
            "CU-064",
            "CU-065",
            "CU-066",
            "CU-067",
            "CU-068",
            "CU-069",
            "CU-070",
            "CU-071",
            "CU-072",
            "CU-073",
            "CU-074"
          ]
        },
        {
          "id": "mathematics",
          "label": "数学",
          "file_id": "PDF-007",
          "standard_file": "3.普通高中数学课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-007｜PDF第12-15页（书内第4-7页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "mathematics.abstraction",
            "mathematics.logical_reasoning",
            "mathematics.modeling",
            "mathematics.visual_imagination",
            "mathematics.operation",
            "mathematics.data_analysis"
          ],
          "coverage_unit_ids": [
            "CU-075",
            "CU-076",
            "CU-077",
            "CU-078",
            "CU-079",
            "CU-080",
            "CU-081",
            "CU-082",
            "CU-083"
          ]
        },
        {
          "id": "english",
          "label": "英语",
          "file_id": "PDF-008",
          "standard_file": "4.普通高中英语课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-008｜PDF第12-13页（书内第4-5页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "english.language_ability",
            "english.cultural_awareness",
            "english.thinking_quality",
            "english.learning_ability"
          ],
          "coverage_unit_ids": [
            "CU-084",
            "CU-085",
            "CU-086",
            "CU-087",
            "CU-088",
            "CU-089"
          ]
        },
        {
          "id": "civics",
          "label": "思想政治",
          "file_id": "PDF-009",
          "standard_file": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-009｜PDF第12-14页（书内第4-6页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "civics.political_identity",
            "civics.scientific_spirit",
            "civics.rule_of_law",
            "civics.public_participation"
          ],
          "coverage_unit_ids": [
            "CU-090",
            "CU-091",
            "CU-092",
            "CU-093",
            "CU-094",
            "CU-095",
            "CU-096",
            "CU-097",
            "CU-098",
            "CU-099"
          ]
        },
        {
          "id": "history",
          "label": "历史",
          "file_id": "PDF-010",
          "standard_file": "6.普通高中历史课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-010｜PDF第12-13页（书内第4-5页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "history.historical_materialism",
            "history.temporal_spatial",
            "history.source_evidence",
            "history.historical_explanation",
            "history.national_sentiment"
          ],
          "coverage_unit_ids": [
            "CU-100",
            "CU-101",
            "CU-102",
            "CU-103",
            "CU-104"
          ]
        },
        {
          "id": "geography",
          "label": "地理",
          "file_id": "PDF-011",
          "standard_file": "7.普通高中地理课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-011｜PDF第11-12页（书内第3-4页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "geography.human_land_coordination",
            "geography.comprehensive_thinking",
            "geography.regional_cognition",
            "geography.geographical_practice"
          ],
          "coverage_unit_ids": [
            "CU-105",
            "CU-106",
            "CU-107",
            "CU-108",
            "CU-109",
            "CU-110",
            "CU-111",
            "CU-112",
            "CU-113",
            "CU-114",
            "CU-115"
          ]
        },
        {
          "id": "physics",
          "label": "物理",
          "file_id": "PDF-012",
          "standard_file": "8.普通高中物理课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-012｜PDF第13-14页（书内第4-5页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "physics.physical_concepts",
            "physics.scientific_thinking",
            "physics.scientific_inquiry",
            "physics.scientific_attitude_responsibility"
          ],
          "coverage_unit_ids": [
            "CU-116",
            "CU-117",
            "CU-118",
            "CU-119",
            "CU-120",
            "CU-121",
            "CU-122",
            "CU-123",
            "CU-124",
            "CU-125",
            "CU-126",
            "CU-127",
            "CU-128",
            "CU-129",
            "CU-130",
            "CU-131",
            "CU-132",
            "CU-133",
            "CU-134",
            "CU-135",
            "CU-136",
            "CU-137",
            "CU-138",
            "CU-139",
            "CU-140",
            "CU-141",
            "CU-142",
            "CU-143",
            "CU-144",
            "CU-145",
            "CU-146",
            "CU-147",
            "CU-148",
            "CU-149",
            "CU-150",
            "CU-151",
            "CU-152",
            "CU-153",
            "CU-154",
            "CU-155"
          ]
        },
        {
          "id": "chemistry",
          "label": "化学",
          "file_id": "PDF-013",
          "standard_file": "9.普通高中化学课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-013｜PDF第11-12页（书内第3-4页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "chemistry.macro_micro",
            "chemistry.changes_equilibrium",
            "chemistry.evidence_model",
            "chemistry.inquiry_innovation",
            "chemistry.attitude_responsibility"
          ],
          "coverage_unit_ids": [
            "CU-156",
            "CU-157",
            "CU-158",
            "CU-159",
            "CU-160",
            "CU-161",
            "CU-162",
            "CU-163",
            "CU-164",
            "CU-165",
            "CU-166",
            "CU-167",
            "CU-168",
            "CU-169",
            "CU-170",
            "CU-171",
            "CU-172",
            "CU-173",
            "CU-174",
            "CU-175",
            "CU-176",
            "CU-177",
            "CU-178",
            "CU-179",
            "CU-180",
            "CU-181",
            "CU-182"
          ]
        },
        {
          "id": "biology",
          "label": "生物学",
          "file_id": "PDF-002",
          "standard_file": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-002｜PDF第13-14页（书内第4-5页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "biology.life_concept",
            "biology.scientific_thinking",
            "biology.scientific_inquiry",
            "biology.social_responsibility"
          ],
          "coverage_unit_ids": [
            "CU-008",
            "CU-009",
            "CU-010",
            "CU-011",
            "CU-012"
          ]
        },
        {
          "id": "information_technology",
          "label": "信息技术",
          "file_id": "PDF-003",
          "standard_file": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-003｜PDF第13-14页（书内第5-6页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "information_technology.information_awareness",
            "information_technology.computational_thinking",
            "information_technology.digital_learning_innovation",
            "information_technology.information_social_responsibility"
          ],
          "coverage_unit_ids": [
            "CU-013",
            "CU-014",
            "CU-015",
            "CU-016",
            "CU-017",
            "CU-018",
            "CU-019",
            "CU-020",
            "CU-021",
            "CU-022"
          ]
        },
        {
          "id": "art",
          "label": "艺术",
          "file_id": "PDF-004",
          "standard_file": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-004｜PDF第12-13页（书内第4-5页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "art.artistic_perception",
            "art.creative_expression",
            "art.aesthetic_taste",
            "art.cultural_understanding"
          ],
          "coverage_unit_ids": [
            "CU-023",
            "CU-024",
            "CU-025",
            "CU-026",
            "CU-027",
            "CU-028",
            "CU-029",
            "CU-030"
          ]
        },
        {
          "id": "physical_education_health",
          "label": "体育与健康",
          "file_id": "PDF-005",
          "standard_file": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf",
          "competency_source_ref": "PDF-005｜PDF第13-14页（书内第5-6页）｜二、学科核心素养与课程目标 > （一）学科核心素养",
          "competency_ids": [
            "physical_education_health.motor_ability",
            "physical_education_health.health_behavior",
            "physical_education_health.sports_ethics"
          ],
          "coverage_unit_ids": [
            "CU-031",
            "CU-032",
            "CU-033",
            "CU-034",
            "CU-035",
            "CU-036",
            "CU-037",
            "CU-038",
            "CU-039",
            "CU-040",
            "CU-041",
            "CU-042",
            "CU-043",
            "CU-044",
            "CU-045",
            "CU-046",
            "CU-047",
            "CU-048",
            "CU-049",
            "CU-050",
            "CU-051",
            "CU-052",
            "CU-053",
            "CU-054",
            "CU-055",
            "CU-056"
          ]
        }
      ],
      "competencies": [
        {
          "id": "chinese.language_construction",
          "subject_id": "chinese",
          "label": "语言建构与运用"
        },
        {
          "id": "chinese.thinking_development",
          "subject_id": "chinese",
          "label": "思维发展与提升"
        },
        {
          "id": "chinese.aesthetic_appreciation",
          "subject_id": "chinese",
          "label": "审美鉴赏与创造"
        },
        {
          "id": "chinese.cultural_inheritance",
          "subject_id": "chinese",
          "label": "文化传承与理解"
        },
        {
          "id": "mathematics.abstraction",
          "subject_id": "mathematics",
          "label": "数学抽象"
        },
        {
          "id": "mathematics.logical_reasoning",
          "subject_id": "mathematics",
          "label": "逻辑推理"
        },
        {
          "id": "mathematics.modeling",
          "subject_id": "mathematics",
          "label": "数学建模"
        },
        {
          "id": "mathematics.visual_imagination",
          "subject_id": "mathematics",
          "label": "直观想象"
        },
        {
          "id": "mathematics.operation",
          "subject_id": "mathematics",
          "label": "数学运算"
        },
        {
          "id": "mathematics.data_analysis",
          "subject_id": "mathematics",
          "label": "数据分析"
        },
        {
          "id": "english.language_ability",
          "subject_id": "english",
          "label": "语言能力"
        },
        {
          "id": "english.cultural_awareness",
          "subject_id": "english",
          "label": "文化意识"
        },
        {
          "id": "english.thinking_quality",
          "subject_id": "english",
          "label": "思维品质"
        },
        {
          "id": "english.learning_ability",
          "subject_id": "english",
          "label": "学习能力"
        },
        {
          "id": "civics.political_identity",
          "subject_id": "civics",
          "label": "政治认同"
        },
        {
          "id": "civics.scientific_spirit",
          "subject_id": "civics",
          "label": "科学精神"
        },
        {
          "id": "civics.rule_of_law",
          "subject_id": "civics",
          "label": "法治意识"
        },
        {
          "id": "civics.public_participation",
          "subject_id": "civics",
          "label": "公共参与"
        },
        {
          "id": "history.historical_materialism",
          "subject_id": "history",
          "label": "唯物史观"
        },
        {
          "id": "history.temporal_spatial",
          "subject_id": "history",
          "label": "时空观念"
        },
        {
          "id": "history.source_evidence",
          "subject_id": "history",
          "label": "史料实证"
        },
        {
          "id": "history.historical_explanation",
          "subject_id": "history",
          "label": "历史解释"
        },
        {
          "id": "history.national_sentiment",
          "subject_id": "history",
          "label": "家国情怀"
        },
        {
          "id": "geography.human_land_coordination",
          "subject_id": "geography",
          "label": "人地协调观"
        },
        {
          "id": "geography.comprehensive_thinking",
          "subject_id": "geography",
          "label": "综合思维"
        },
        {
          "id": "geography.regional_cognition",
          "subject_id": "geography",
          "label": "区域认知"
        },
        {
          "id": "geography.geographical_practice",
          "subject_id": "geography",
          "label": "地理实践力"
        },
        {
          "id": "physics.physical_concepts",
          "subject_id": "physics",
          "label": "物理观念"
        },
        {
          "id": "physics.scientific_thinking",
          "subject_id": "physics",
          "label": "科学思维"
        },
        {
          "id": "physics.scientific_inquiry",
          "subject_id": "physics",
          "label": "科学探究"
        },
        {
          "id": "physics.scientific_attitude_responsibility",
          "subject_id": "physics",
          "label": "科学态度与责任"
        },
        {
          "id": "chemistry.macro_micro",
          "subject_id": "chemistry",
          "label": "宏观辨识与微观探析"
        },
        {
          "id": "chemistry.changes_equilibrium",
          "subject_id": "chemistry",
          "label": "变化观念与平衡思想"
        },
        {
          "id": "chemistry.evidence_model",
          "subject_id": "chemistry",
          "label": "证据推理与模型认知"
        },
        {
          "id": "chemistry.inquiry_innovation",
          "subject_id": "chemistry",
          "label": "科学探究与创新意识"
        },
        {
          "id": "chemistry.attitude_responsibility",
          "subject_id": "chemistry",
          "label": "科学态度与社会责任"
        },
        {
          "id": "biology.life_concept",
          "subject_id": "biology",
          "label": "生命观念"
        },
        {
          "id": "biology.scientific_thinking",
          "subject_id": "biology",
          "label": "科学思维"
        },
        {
          "id": "biology.scientific_inquiry",
          "subject_id": "biology",
          "label": "科学探究"
        },
        {
          "id": "biology.social_responsibility",
          "subject_id": "biology",
          "label": "社会责任"
        },
        {
          "id": "information_technology.information_awareness",
          "subject_id": "information_technology",
          "label": "信息意识"
        },
        {
          "id": "information_technology.computational_thinking",
          "subject_id": "information_technology",
          "label": "计算思维"
        },
        {
          "id": "information_technology.digital_learning_innovation",
          "subject_id": "information_technology",
          "label": "数字化学习与创新"
        },
        {
          "id": "information_technology.information_social_responsibility",
          "subject_id": "information_technology",
          "label": "信息社会责任"
        },
        {
          "id": "art.artistic_perception",
          "subject_id": "art",
          "label": "艺术感知"
        },
        {
          "id": "art.creative_expression",
          "subject_id": "art",
          "label": "创意表达"
        },
        {
          "id": "art.aesthetic_taste",
          "subject_id": "art",
          "label": "审美情趣"
        },
        {
          "id": "art.cultural_understanding",
          "subject_id": "art",
          "label": "文化理解"
        },
        {
          "id": "physical_education_health.motor_ability",
          "subject_id": "physical_education_health",
          "label": "运动能力"
        },
        {
          "id": "physical_education_health.health_behavior",
          "subject_id": "physical_education_health",
          "label": "健康行为"
        },
        {
          "id": "physical_education_health.sports_ethics",
          "subject_id": "physical_education_health",
          "label": "体育品德"
        }
      ],
      "coverage_units": [
        {
          "id": "CU-001",
          "file_id": "PDF-001",
          "subject_id": null,
          "subject_label": "综合",
          "title": "3 开设科目与学分",
          "unit_type": "content_item",
          "course_category": "",
          "source_ref": "1.普通高中课程方案（2017年版2020年修订）.pdf，课程内容，PDF第 14 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-002",
          "file_id": "PDF-001",
          "subject_id": null,
          "subject_label": "综合",
          "title": "4 科目安排",
          "unit_type": "content_item",
          "course_category": "",
          "source_ref": "1.普通高中课程方案（2017年版2020年修订）.pdf，课程内容，PDF第 15 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-003",
          "file_id": "PDF-001",
          "subject_id": null,
          "subject_label": "综合",
          "title": "5 毕业学分要求",
          "unit_type": "content_item",
          "course_category": "",
          "source_ref": "1.普通高中课程方案（2017年版2020年修订）.pdf，课程内容，PDF第 16 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-004",
          "file_id": "PDF-001",
          "subject_id": null,
          "subject_label": "综合",
          "title": "1 科学编制课程标准与教材",
          "unit_type": "content_item",
          "course_category": "",
          "source_ref": "1.普通高中课程方案（2017年版2020年修订）.pdf，课程内容，PDF第 19 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-005",
          "file_id": "PDF-001",
          "subject_id": null,
          "subject_label": "综合",
          "title": "2 合理制订课程实施规划",
          "unit_type": "content_item",
          "course_category": "",
          "source_ref": "1.普通高中课程方案（2017年版2020年修订）.pdf，课程内容，PDF第 19 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-006",
          "file_id": "PDF-001",
          "subject_id": null,
          "subject_label": "综合",
          "title": "3 切实加强学生发展指导",
          "unit_type": "content_item",
          "course_category": "",
          "source_ref": "1.普通高中课程方案（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-007",
          "file_id": "PDF-001",
          "subject_id": null,
          "subject_label": "综合",
          "title": "4 大力推进教学改革",
          "unit_type": "content_item",
          "course_category": "",
          "source_ref": "1.普通高中课程方案（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-008",
          "file_id": "PDF-002",
          "subject_id": "biology",
          "subject_label": "生物学",
          "title": "模块1 分子与细胞",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-009",
          "file_id": "PDF-002",
          "subject_id": "biology",
          "subject_label": "生物学",
          "title": "模块2 遗传与进化",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-010",
          "file_id": "PDF-002",
          "subject_id": "biology",
          "subject_label": "生物学",
          "title": "模块1 稳态与调节",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-011",
          "file_id": "PDF-002",
          "subject_id": "biology",
          "subject_label": "生物学",
          "title": "模块2 生物与环境",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 32 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-012",
          "file_id": "PDF-002",
          "subject_id": "biology",
          "subject_label": "生物学",
          "title": "模块3 生物技术与工程",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 36 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-013",
          "file_id": "PDF-003",
          "subject_id": "information_technology",
          "subject_label": "信息技术",
          "title": "模块1 数据与计算",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-014",
          "file_id": "PDF-003",
          "subject_id": "information_technology",
          "subject_label": "信息技术",
          "title": "模块2 信息系统与社会",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 23 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-015",
          "file_id": "PDF-003",
          "subject_id": "information_technology",
          "subject_label": "信息技术",
          "title": "模块1 数据与数据结构",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 26 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-016",
          "file_id": "PDF-003",
          "subject_id": "information_technology",
          "subject_label": "信息技术",
          "title": "模块2 网络基础",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-017",
          "file_id": "PDF-003",
          "subject_id": "information_technology",
          "subject_label": "信息技术",
          "title": "模块3 数据管理与分析",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 31 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-018",
          "file_id": "PDF-003",
          "subject_id": "information_technology",
          "subject_label": "信息技术",
          "title": "模块4 人工智能初步",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-019",
          "file_id": "PDF-003",
          "subject_id": "information_technology",
          "subject_label": "信息技术",
          "title": "模块5 三维设计与创意",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 36 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-020",
          "file_id": "PDF-003",
          "subject_id": "information_technology",
          "subject_label": "信息技术",
          "title": "模块6 开源硬件项目设计",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-021",
          "file_id": "PDF-003",
          "subject_id": "information_technology",
          "subject_label": "信息技术",
          "title": "模块1 算法初步",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 42 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-022",
          "file_id": "PDF-003",
          "subject_id": "information_technology",
          "subject_label": "信息技术",
          "title": "模块2 移动应用设计",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 44 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-023",
          "file_id": "PDF-004",
          "subject_id": "art",
          "subject_label": "艺术",
          "title": "模块1 艺术与生活",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-024",
          "file_id": "PDF-004",
          "subject_id": "art",
          "subject_label": "艺术",
          "title": "模块2 艺术与文化",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-025",
          "file_id": "PDF-004",
          "subject_id": "art",
          "subject_label": "艺术",
          "title": "模块3 艺术与科学",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-026",
          "file_id": "PDF-004",
          "subject_id": "art",
          "subject_label": "艺术",
          "title": "模块4 美术创意实践",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-027",
          "file_id": "PDF-004",
          "subject_id": "art",
          "subject_label": "艺术",
          "title": "模块5 音乐情境表演",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-028",
          "file_id": "PDF-004",
          "subject_id": "art",
          "subject_label": "艺术",
          "title": "模块6 舞蹈创编与表演",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 32 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-029",
          "file_id": "PDF-004",
          "subject_id": "art",
          "subject_label": "艺术",
          "title": "模块7 戏剧创编与表演",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-030",
          "file_id": "PDF-004",
          "subject_id": "art",
          "subject_label": "艺术",
          "title": "模块8 影视与数字媒体艺术实践",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-031",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "足球模块1",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-032",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "足球模块2",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-033",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "足球模块3",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-034",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "体能",
          "unit_type": "sport_series",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-035",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "健康教育",
          "unit_type": "sport_series",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-036",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "球类运动",
          "unit_type": "sport_series",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-037",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "田径类运动",
          "unit_type": "sport_series",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 35 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-038",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "跳远模块1",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 35 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-039",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "跳远模块2",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-040",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "跳远模块3",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-041",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "体操类运动",
          "unit_type": "sport_series",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 40 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-042",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "健身健美操模块1",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 41 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-043",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "健身健美操模块2",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 43 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-044",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "健身健美操模块3",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 45 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-045",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "水上或冰雪类运动",
          "unit_type": "sport_series",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 47 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-046",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "蛙泳模块1",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 47 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-047",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "蛙泳模块2",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 49 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-048",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "蛙泳模块3",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 51 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-049",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "武术与民族民间传统体育类运动",
          "unit_type": "sport_series",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 53 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-050",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "防身术模块1",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 53 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-051",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "防身术模块2",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 55 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-052",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "防身术模块3",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 56 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-053",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "新兴体育类运动",
          "unit_type": "sport_series",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 58 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-054",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "花样跳绳模块1",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 58 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-055",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "花样跳绳模块2",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 60 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-056",
          "file_id": "PDF-005",
          "subject_id": "physical_education_health",
          "subject_label": "体育与健康",
          "title": "花样跳绳模块3",
          "unit_type": "sport_module",
          "course_category": "",
          "source_ref": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 62 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-057",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群1 整本书阅读与研讨",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-058",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群2 当代文化参与",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 21 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-059",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群3 跨媒介阅读与交流",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-060",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群4 语言积累、梳理与探究",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 23 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-061",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群5 文学阅读与写作",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-062",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群6 思辨性阅读与表达",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 26 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-063",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群7 实用性阅读与交流",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-064",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群8 中华传统文化经典研习",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 29 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-065",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群9 中国革命传统作品研习",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-066",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群10 中国现当代作家作品研习",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 31 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-067",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群11 外国作家作品研习",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 32 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-068",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群12 科学与文化论著研习",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 33 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-069",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群13 汉字汉语专题研讨",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-070",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群14 中华传统文化专题研讨",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 35 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-071",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群15 中国革命传统作品专题研讨",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 36 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-072",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群16 中国现当代作家作品专题研讨",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-073",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群17 跨文化专题研讨",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-074",
          "file_id": "PDF-006",
          "subject_id": "chinese",
          "subject_label": "语文",
          "title": "学习任务群18 学术论著专题研讨",
          "unit_type": "learning_task_group",
          "course_category": "",
          "source_ref": "2.普通高中语文课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-075",
          "file_id": "PDF-007",
          "subject_id": "mathematics",
          "subject_label": "数学",
          "title": "主题一 预备知识",
          "unit_type": "content_theme",
          "course_category": "必修课程",
          "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-076",
          "file_id": "PDF-007",
          "subject_id": "mathematics",
          "subject_label": "数学",
          "title": "主题二 函数",
          "unit_type": "content_theme",
          "course_category": "必修课程",
          "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 26 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-077",
          "file_id": "PDF-007",
          "subject_id": "mathematics",
          "subject_label": "数学",
          "title": "主题三 几何与代数",
          "unit_type": "content_theme",
          "course_category": "必修课程",
          "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 33 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-078",
          "file_id": "PDF-007",
          "subject_id": "mathematics",
          "subject_label": "数学",
          "title": "主题四 概率与统计",
          "unit_type": "content_theme",
          "course_category": "必修课程",
          "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-079",
          "file_id": "PDF-007",
          "subject_id": "mathematics",
          "subject_label": "数学",
          "title": "主题五 数学建模活动与数学探究活动",
          "unit_type": "content_theme",
          "course_category": "必修课程",
          "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 42 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-080",
          "file_id": "PDF-007",
          "subject_id": "mathematics",
          "subject_label": "数学",
          "title": "主题一 函数",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 45 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-081",
          "file_id": "PDF-007",
          "subject_id": "mathematics",
          "subject_label": "数学",
          "title": "主题二 几何与代数",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 49 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-082",
          "file_id": "PDF-007",
          "subject_id": "mathematics",
          "subject_label": "数学",
          "title": "主题三 概率与统计",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 54 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-083",
          "file_id": "PDF-007",
          "subject_id": "mathematics",
          "subject_label": "数学",
          "title": "主题四 数学建模活动与数学探究活动",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "3.普通高中数学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 58 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-084",
          "file_id": "PDF-008",
          "subject_id": "english",
          "subject_label": "英语",
          "title": "主题语境",
          "unit_type": "content_element",
          "course_category": "",
          "source_ref": "4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-085",
          "file_id": "PDF-008",
          "subject_id": "english",
          "subject_label": "英语",
          "title": "语篇类型",
          "unit_type": "content_element",
          "course_category": "",
          "source_ref": "4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-086",
          "file_id": "PDF-008",
          "subject_id": "english",
          "subject_label": "英语",
          "title": "语言知识",
          "unit_type": "content_element",
          "course_category": "",
          "source_ref": "4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-087",
          "file_id": "PDF-008",
          "subject_id": "english",
          "subject_label": "英语",
          "title": "文化知识",
          "unit_type": "content_element",
          "course_category": "",
          "source_ref": "4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-088",
          "file_id": "PDF-008",
          "subject_id": "english",
          "subject_label": "英语",
          "title": "语言技能",
          "unit_type": "content_element",
          "course_category": "",
          "source_ref": "4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 43 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-089",
          "file_id": "PDF-008",
          "subject_id": "english",
          "subject_label": "英语",
          "title": "学习策略",
          "unit_type": "content_element",
          "course_category": "",
          "source_ref": "4.普通高中英语课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 48 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-090",
          "file_id": "PDF-009",
          "subject_id": "civics",
          "subject_label": "思想政治",
          "title": "模块1 中国特色社会主义",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-091",
          "file_id": "PDF-009",
          "subject_id": "civics",
          "subject_label": "思想政治",
          "title": "模块2 经济与社会",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-092",
          "file_id": "PDF-009",
          "subject_id": "civics",
          "subject_label": "思想政治",
          "title": "模块3 政治与法治",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-093",
          "file_id": "PDF-009",
          "subject_id": "civics",
          "subject_label": "思想政治",
          "title": "模块4 哲学与文化",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-094",
          "file_id": "PDF-009",
          "subject_id": "civics",
          "subject_label": "思想政治",
          "title": "模块1 当代国际政治与经济",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 32 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-095",
          "file_id": "PDF-009",
          "subject_id": "civics",
          "subject_label": "思想政治",
          "title": "模块2 法律与生活",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 35 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-096",
          "file_id": "PDF-009",
          "subject_id": "civics",
          "subject_label": "思想政治",
          "title": "模块3 逻辑与思维",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-097",
          "file_id": "PDF-009",
          "subject_id": "civics",
          "subject_label": "思想政治",
          "title": "模块1 财经与生活",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 40 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-098",
          "file_id": "PDF-009",
          "subject_id": "civics",
          "subject_label": "思想政治",
          "title": "模块2 法官与律师",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 41 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-099",
          "file_id": "PDF-009",
          "subject_id": "civics",
          "subject_label": "思想政治",
          "title": "模块3 历史上的哲学家",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 42 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-100",
          "file_id": "PDF-010",
          "subject_id": "history",
          "subject_label": "历史",
          "title": "模块1 国家制度与社会治理",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-101",
          "file_id": "PDF-010",
          "subject_id": "history",
          "subject_label": "历史",
          "title": "模块2 经济与社会生活",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-102",
          "file_id": "PDF-010",
          "subject_id": "history",
          "subject_label": "历史",
          "title": "模块3 文化交流与传播",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-103",
          "file_id": "PDF-010",
          "subject_id": "history",
          "subject_label": "历史",
          "title": "模块1 史学入门",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 41 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-104",
          "file_id": "PDF-010",
          "subject_id": "history",
          "subject_label": "历史",
          "title": "模块2 史料研读",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "6.普通高中历史课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 45 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-105",
          "file_id": "PDF-011",
          "subject_id": "geography",
          "subject_label": "地理",
          "title": "地理1",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 16 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-106",
          "file_id": "PDF-011",
          "subject_id": "geography",
          "subject_label": "地理",
          "title": "地理2",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 18 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-107",
          "file_id": "PDF-011",
          "subject_id": "geography",
          "subject_label": "地理",
          "title": "选修1 天文学基础",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-108",
          "file_id": "PDF-011",
          "subject_id": "geography",
          "subject_label": "地理",
          "title": "选修2 海洋地理",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-109",
          "file_id": "PDF-011",
          "subject_id": "geography",
          "subject_label": "地理",
          "title": "选修3 自然灾害与防治",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 26 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-110",
          "file_id": "PDF-011",
          "subject_id": "geography",
          "subject_label": "地理",
          "title": "选修4 环境保护",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-111",
          "file_id": "PDF-011",
          "subject_id": "geography",
          "subject_label": "地理",
          "title": "选修5 旅游地理",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 29 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-112",
          "file_id": "PDF-011",
          "subject_id": "geography",
          "subject_label": "地理",
          "title": "选修6 城乡规划",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-113",
          "file_id": "PDF-011",
          "subject_id": "geography",
          "subject_label": "地理",
          "title": "选修7 政治地理",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 31 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-114",
          "file_id": "PDF-011",
          "subject_id": "geography",
          "subject_label": "地理",
          "title": "选修8 地理信息技术应用",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 32 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-115",
          "file_id": "PDF-011",
          "subject_id": "geography",
          "subject_label": "地理",
          "title": "选修9 地理野外实习",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "7.普通高中地理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 33 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-116",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "必修 1",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-117",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "1.1 机械运动与物理模型",
          "unit_type": "content_topic",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 20 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-118",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "1.2 相互作用与运动定律",
          "unit_type": "content_topic",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 21 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-119",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "必修 2",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 23 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-120",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "2.1 机械能及其守恒定律",
          "unit_type": "content_topic",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 23 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-121",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "2.2 曲线运动与万有引力定律",
          "unit_type": "content_topic",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 24 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-122",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "2.3 牛顿力学的局限性与相对论初步",
          "unit_type": "content_topic",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 25 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-123",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "必修 3",
          "unit_type": "course_module",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-124",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.1 静电场",
          "unit_type": "content_topic",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 27 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-125",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.2 电路及其应用",
          "unit_type": "content_topic",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 28 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-126",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.3 电磁场与电磁波初步",
          "unit_type": "content_topic",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 29 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-127",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.4 能源与可持续发展",
          "unit_type": "content_topic",
          "course_category": "必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 30 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-128",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "选择性必修 1",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 33 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-129",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "1.1 动量与动量守恒定律",
          "unit_type": "content_topic",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 33 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-130",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "1.2 机械振动与机械波",
          "unit_type": "content_topic",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-131",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "1.3 光及其应用",
          "unit_type": "content_topic",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 34 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-132",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "选择性必修 2",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-133",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "2.1 磁场",
          "unit_type": "content_topic",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-134",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "2.2 电磁感应及其应用",
          "unit_type": "content_topic",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 37 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-135",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "2.3 电磁振荡与电磁波",
          "unit_type": "content_topic",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-136",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "2.4 传感器",
          "unit_type": "content_topic",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 39 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-137",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "选择性必修 3",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 41 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-138",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.1 固体、液体和气体",
          "unit_type": "content_topic",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 41 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-139",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.2 热力学定律",
          "unit_type": "content_topic",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 42 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-140",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.3 原子与原子核",
          "unit_type": "content_topic",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 43 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-141",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.4 波粒二象性",
          "unit_type": "content_topic",
          "course_category": "选择性必修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 43 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-142",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "选修 1",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 45 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-143",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "1.1 物理学与人类认识",
          "unit_type": "content_topic",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 46 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-144",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "1.2 物理学与社会变革",
          "unit_type": "content_topic",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 46 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-145",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "1.3 物理学与公民生活",
          "unit_type": "content_topic",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 47 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-146",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "选修 2",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 47 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-147",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "2.1 物理学与医疗技术",
          "unit_type": "content_topic",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 48 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-148",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "2.2 物理学与新能源",
          "unit_type": "content_topic",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 48 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-149",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "2.3 物理学与新材料",
          "unit_type": "content_topic",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 49 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-150",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "2.4 物理学与信息技术",
          "unit_type": "content_topic",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 49 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-151",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "选修 3",
          "unit_type": "course_module",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 49 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-152",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.1 微观世界",
          "unit_type": "content_topic",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 50 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-153",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.2 高速世界",
          "unit_type": "content_topic",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 50 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-154",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.3 宇观世界",
          "unit_type": "content_topic",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 51 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-155",
          "file_id": "PDF-012",
          "subject_id": "physics",
          "subject_label": "物理",
          "title": "3.4 世界的统一性",
          "unit_type": "content_topic",
          "course_category": "选修课程",
          "source_ref": "8.普通高中物理课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 51 页",
          "evidence_level": "inferred",
          "review_status": "candidate"
        },
        {
          "id": "CU-156",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题1 化学科学与实验探究",
          "unit_type": "content_theme",
          "course_category": "必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 19 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-157",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题2 常见的无机物及其应用",
          "unit_type": "content_theme",
          "course_category": "必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 22 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-158",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题3 物质结构基础与化学反应规律",
          "unit_type": "content_theme",
          "course_category": "必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 26 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-159",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题4 简单的有机化合物及其应用",
          "unit_type": "content_theme",
          "course_category": "必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 29 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-160",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题5 化学与社会发展",
          "unit_type": "content_theme",
          "course_category": "必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 31 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-161",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "模块1 化学反应原理",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 35 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-162",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题1 化学反应与能量",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 36 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-163",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题2 化学反应的方向、限度和速率",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 38 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-164",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题3 水溶液中的离子反应与平衡",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 41 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-165",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "模块2 物质结构与性质",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 44 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-166",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题1 原子结构与元素的性质",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 44 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-167",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题2 微粒间的相互作用与物质的性质",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 47 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-168",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题3 研究物质结构的方法与价值",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 51 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-169",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "模块3 有机化学基础",
          "unit_type": "course_module",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 53 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-170",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题1 有机化合物的组成与结构",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 53 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-171",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题2 烃及其衍生物的性质与应用",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 56 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-172",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题3 生物大分子及合成高分子",
          "unit_type": "content_theme",
          "course_category": "选择性必修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 58 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-173",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题1 基础实验",
          "unit_type": "content_theme",
          "course_category": "选修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 62 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-174",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题2 化学原理探究",
          "unit_type": "content_theme",
          "course_category": "选修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 63 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-175",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题3 化工生产过程模拟实验",
          "unit_type": "content_theme",
          "course_category": "选修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 63 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-176",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题4 STSE 综合实验",
          "unit_type": "content_theme",
          "course_category": "选修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 63 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-177",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题1 化学与生活",
          "unit_type": "content_theme",
          "course_category": "选修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 65 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-178",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题2 化学与技术",
          "unit_type": "content_theme",
          "course_category": "选修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 66 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-179",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题3 STSE 综合实践",
          "unit_type": "content_theme",
          "course_category": "选修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 67 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-180",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题1 化学科学研究进展",
          "unit_type": "content_theme",
          "course_category": "选修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 69 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-181",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题2 作为交叉学科的化学",
          "unit_type": "content_theme",
          "course_category": "选修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 69 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        },
        {
          "id": "CU-182",
          "file_id": "PDF-013",
          "subject_id": "chemistry",
          "subject_label": "化学",
          "title": "主题3 化学工程研究进展",
          "unit_type": "content_theme",
          "course_category": "选修课程",
          "source_ref": "9.普通高中化学课程标准（2017年版2020年修订）.pdf，课程内容，PDF第 70 页",
          "evidence_level": "direct",
          "review_status": "candidate"
        }
      ],
      "coverage_matrix": [
        {
          "subject_id": "chinese",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 7,
              "competency_count": 2,
              "content_anchor_count": 5,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 8,
              "competency_count": 2,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 2,
              "competency_count": 2,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 7,
              "competency_count": 2,
              "content_anchor_count": 4,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 7,
              "competency_count": 4,
              "content_anchor_count": 5,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 7,
              "competency_count": 2,
              "content_anchor_count": 5,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 8,
              "competency_count": 2,
              "content_anchor_count": 5,
              "review_status": "pending_subject_review"
            }
          ]
        },
        {
          "subject_id": "mathematics",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 7,
              "competency_count": 6,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 16,
              "competency_count": 6,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 15,
              "competency_count": 6,
              "content_anchor_count": 6,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 10,
              "competency_count": 5,
              "content_anchor_count": 6,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 14,
              "competency_count": 4,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 4,
              "competency_count": 3,
              "content_anchor_count": 1,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 10,
              "competency_count": 6,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 14,
              "competency_count": 6,
              "content_anchor_count": 5,
              "review_status": "pending_subject_review"
            }
          ]
        },
        {
          "subject_id": "english",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 4,
              "competency_count": 4,
              "content_anchor_count": 6,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 7,
              "competency_count": 4,
              "content_anchor_count": 6,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            }
          ]
        },
        {
          "subject_id": "civics",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 7,
              "competency_count": 3,
              "content_anchor_count": 5,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 5,
              "competency_count": 2,
              "content_anchor_count": 2,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 5,
              "competency_count": 3,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 8,
              "competency_count": 3,
              "content_anchor_count": 6,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 16,
              "competency_count": 3,
              "content_anchor_count": 4,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 4,
              "competency_count": 3,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 12,
              "competency_count": 3,
              "content_anchor_count": 6,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 11,
              "competency_count": 3,
              "content_anchor_count": 6,
              "review_status": "pending_subject_review"
            }
          ]
        },
        {
          "subject_id": "history",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 2,
              "competency_count": 3,
              "content_anchor_count": 2,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 1,
              "competency_count": 1,
              "content_anchor_count": 1,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 1,
              "competency_count": 2,
              "content_anchor_count": 1,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 1,
              "competency_count": 1,
              "content_anchor_count": 1,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 7,
              "competency_count": 3,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 4,
              "competency_count": 5,
              "content_anchor_count": 4,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 6,
              "competency_count": 3,
              "content_anchor_count": 4,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 3,
              "competency_count": 3,
              "content_anchor_count": 2,
              "review_status": "pending_subject_review"
            }
          ]
        },
        {
          "subject_id": "geography",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 6,
              "competency_count": 4,
              "content_anchor_count": 5,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 8,
              "competency_count": 4,
              "content_anchor_count": 7,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 2,
              "competency_count": 3,
              "content_anchor_count": 4,
              "review_status": "pending_subject_review"
            }
          ]
        },
        {
          "subject_id": "physics",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 6,
              "competency_count": 4,
              "content_anchor_count": 7,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 6,
              "competency_count": 4,
              "content_anchor_count": 9,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 6,
              "competency_count": 4,
              "content_anchor_count": 9,
              "review_status": "pending_subject_review"
            }
          ]
        },
        {
          "subject_id": "chemistry",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 2,
              "competency_count": 2,
              "content_anchor_count": 4,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 7,
              "competency_count": 5,
              "content_anchor_count": 13,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            }
          ]
        },
        {
          "subject_id": "biology",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 7,
              "competency_count": 4,
              "content_anchor_count": 4,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 5,
              "competency_count": 4,
              "content_anchor_count": 4,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            }
          ]
        },
        {
          "subject_id": "information_technology",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 3,
              "competency_count": 2,
              "content_anchor_count": 2,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 12,
              "competency_count": 4,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 9,
              "competency_count": 4,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 4,
              "competency_count": 2,
              "content_anchor_count": 2,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 14,
              "competency_count": 3,
              "content_anchor_count": 4,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 5,
              "competency_count": 4,
              "content_anchor_count": 5,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 5,
              "competency_count": 2,
              "content_anchor_count": 2,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 11,
              "competency_count": 4,
              "content_anchor_count": 6,
              "review_status": "pending_subject_review"
            }
          ]
        },
        {
          "subject_id": "art",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 8,
              "competency_count": 4,
              "content_anchor_count": 5,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 6,
              "competency_count": 4,
              "content_anchor_count": 5,
              "review_status": "pending_subject_review"
            }
          ]
        },
        {
          "subject_id": "physical_education_health",
          "theme_cells": [
            {
              "theme_id": "theme-bq1-wellbeing",
              "topic_count": 7,
              "competency_count": 3,
              "content_anchor_count": 3,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq2-data-truth",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq3-campus-flow",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq4-carbon-campus",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq5-ai-decisions",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq6-digital-heritage",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            },
            {
              "theme_id": "theme-bq7-fair-rules",
              "topic_count": 5,
              "competency_count": 3,
              "content_anchor_count": 5,
              "review_status": "pending_subject_review"
            },
            {
              "theme_id": "theme-bq8-campus-change-lab",
              "topic_count": 0,
              "competency_count": 0,
              "content_anchor_count": 0,
              "review_status": "not_mapped"
            }
          ]
        }
      ],
      "source_documents": [
        {
          "file_id": "PDF-001",
          "file_name": "1.普通高中课程方案（2017年版2020年修订）.pdf",
          "relative_path": "1.普通高中课程方案（2017年版2020年修订）.pdf",
          "file_size_mb": "0.52",
          "page_count": "25",
          "guessed_subject": "综合",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-002",
          "file_name": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf",
          "relative_path": "10.普通高中生物学课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "2.09",
          "page_count": "97",
          "guessed_subject": "生物学",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-003",
          "file_name": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf",
          "relative_path": "11.普通高中信息技术课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "1.44",
          "page_count": "83",
          "guessed_subject": "信息技术",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-004",
          "file_name": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf",
          "relative_path": "13.普通高中艺术课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "1.82",
          "page_count": "82",
          "guessed_subject": "艺术",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-005",
          "file_name": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf",
          "relative_path": "16.普通高中体育与健康课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "2.09",
          "page_count": "122",
          "guessed_subject": "体育与健康",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-006",
          "file_name": "2.普通高中语文课程标准（2017年版2020年修订）.pdf",
          "relative_path": "2.普通高中语文课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "1.35",
          "page_count": "66",
          "guessed_subject": "语文",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-007",
          "file_name": "3.普通高中数学课程标准（2017年版2020年修订）.pdf",
          "relative_path": "3.普通高中数学课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "9.97",
          "page_count": "188",
          "guessed_subject": "数学",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-008",
          "file_name": "4.普通高中英语课程标准（2017年版2020年修订）.pdf",
          "relative_path": "4.普通高中英语课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "7.39",
          "page_count": "220",
          "guessed_subject": "英语",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-009",
          "file_name": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf",
          "relative_path": "5.普通高中思想政治课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "1.42",
          "page_count": "71",
          "guessed_subject": "思想政治",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-010",
          "file_name": "6.普通高中历史课程标准（2017年版2020年修订）.pdf",
          "relative_path": "6.普通高中历史课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "2.21",
          "page_count": "91",
          "guessed_subject": "历史",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-011",
          "file_name": "7.普通高中地理课程标准（2017年版2020年修订）.pdf",
          "relative_path": "7.普通高中地理课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "1.61",
          "page_count": "67",
          "guessed_subject": "地理",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-012",
          "file_name": "8.普通高中物理课程标准（2017年版2020年修订）.pdf",
          "relative_path": "8.普通高中物理课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "2.27",
          "page_count": "98",
          "guessed_subject": "物理",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        },
        {
          "file_id": "PDF-013",
          "file_name": "9.普通高中化学课程标准（2017年版2020年修订）.pdf",
          "relative_path": "9.普通高中化学课程标准（2017年版2020年修订）.pdf",
          "file_size_mb": "2.72",
          "page_count": "113",
          "guessed_subject": "化学",
          "guessed_doc_type": "curriculum_standard",
          "extraction_status": "page_count_ok",
          "notes": ""
        }
      ]
    }
  },
  "bigQuestions": {
    "BQ1": {
      "title": "自我、关系与幸福",
      "question": "我是谁？我们如何与他人共同生活，并获得有尊严的成长？",
      "short_description": "处理身份、关系、身心健康、生涯选择、共同体归属与责任感。",
      "international_anchors": [
        {
          "IB": "identities and relationships"
        },
        {
          "OECD Learning Compass 2030": "student agency and well-being"
        },
        {
          "UNESCO GCED": "empathy, respect, shared humanity"
        }
      ]
    },
    "BQ2": {
      "title": "证据、真相与判断",
      "question": "我们如何知道什么是真的、可信的、值得相信？",
      "short_description": "处理证据、实验、文本、史料、数据、媒介信息、AI生成内容、科学与人文解释。",
      "international_anchors": [
        {
          "OECD Global Competence": "knowledge, skills, attitudes and values for complex issues"
        },
        {
          "EU Key Competences": "literacy, mathematical/scientific competence, digital competence"
        },
        {
          "UNESCO GCED": "critical understanding and responsible judgment"
        }
      ]
    },
    "BQ3": {
      "title": "系统、模型与变化",
      "question": "复杂世界如何运转、变化，并被我们解释或预测？",
      "short_description": "处理系统、变量、模型、趋势、因果、概率、风险、复杂性和不确定性。",
      "international_anchors": [
        {
          "OECD Learning Compass 2030": "navigating unfamiliar contexts"
        },
        {
          "IB MYP": "scientific and technical innovation"
        },
        {
          "IB MYP": "globalization and sustainability"
        }
      ]
    },
    "BQ4": {
      "title": "地球、生命与可持续未来",
      "question": "人类如何与自然系统共生，并对未来负责？",
      "short_description": "处理生态、气候、能源、资源、环境、生命系统和可持续发展。",
      "international_anchors": [
        {
          "UNESCO Education for Sustainable Development": "learning to act for people and planet"
        },
        {
          "UN SDG 4.7": "education for sustainable development and sustainable lifestyles"
        },
        {
          "UNESCO Futures of Education": "rebalancing relationships with the planet"
        }
      ]
    },
    "BQ5": {
      "title": "技术、人类能力与未来社会",
      "question": "技术如何扩展、重塑或限制人的能力、判断和社会关系？",
      "short_description": "处理人工智能、算法、数据、隐私、自动化、劳动、技术伦理和数字社会。",
      "international_anchors": [
        {
          "UNESCO Futures of Education": "critical and active participation in technological societies"
        },
        {
          "IB MYP": "scientific and technical innovation"
        },
        {
          "EU Key Competences": "digital and technology-based competences"
        }
      ]
    },
    "BQ6": {
      "title": "文化、表达与意义",
      "question": "人类如何创造、传承、解释和表达意义？",
      "short_description": "处理语言、文学、艺术、历史记忆、文化认同、媒介表达和跨文化理解。",
      "international_anchors": [
        {
          "IB MYP": "personal and cultural expression"
        },
        {
          "IB MYP": "orientation in space and time"
        },
        {
          "UN SDG 4.7": "cultural diversity and culture’s contribution to sustainable development"
        },
        {
          "EU Key Competences": "cultural awareness and expression"
        }
      ]
    },
    "BQ7": {
      "title": "公平、治理与公共生活",
      "question": "我们如何建设公平、和平、有韧性的公共生活？",
      "short_description": "处理制度、权利、义务、公共政策、社会公平、和平、法治和公共参与。",
      "international_anchors": [
        {
          "UN SDG 4.7": "human rights, peace, non-violence, global citizenship"
        },
        {
          "Council of Europe RFCDC": "democracy, human rights, rule of law, active citizenship"
        },
        {
          "UNESCO GCED": "human rights, peace and global citizenship"
        }
      ]
    },
    "BQ8": {
      "title": "行动、创造与共同未来",
      "question": "我们如何把理解转化为负责任的行动，并共同创造未来？",
      "short_description": "处理项目行动、设计、创造、社会创新、公共倡议、反思与改进。",
      "international_anchors": [
        {
          "OECD Learning Compass 2030": "student agency and co-agency"
        },
        {
          "IB": "action and service"
        },
        {
          "UNESCO Futures of Education": "education for transforming the future"
        }
      ]
    }
  }
};

