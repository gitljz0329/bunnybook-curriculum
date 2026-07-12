# Deep Theme Workflow

Phase 4 turns accepted theme candidates into the first usable deep-theme layer.

It is still not a full lesson-plan generator. The goal is to create a maintainable bridge:

```text
accepted theme candidate -> deep theme card -> formal theme node -> selected curriculum anchors -> knowledge/ability -> assessment evidence
```

## Inputs

- `data/review/theme_candidates.csv`
- `data/review/theme_cluster_candidates.csv`
- `data/review/content_coverage_units.csv`
- `data/meta/big_questions.yml`

Only rows with `review_status=accept` in `theme_candidates.csv` are treated as deep themes.

## Scripts

Select the current five deep themes:

```bash
.venv/bin/python scripts/select_deep_themes.py
```

Build deep theme cards and formal working data:

```bash
.venv/bin/python scripts/build_deep_themes.py
```

Validate Phase 4:

```bash
.venv/bin/python scripts/validate_phase4.py
.venv/bin/python scripts/validate_data.py
.venv/bin/python scripts/build_seed_json.py
```

## Outputs

- `themes/deep/TH-CAND-001.md`
- `themes/deep/TH-CAND-002.md`
- `themes/deep/TH-CAND-004.md`
- `themes/deep/TH-CAND-007.md`
- `themes/deep/TH-CAND-010.md`
- `data/working/themes.csv`
- `data/working/curriculum_anchors.csv`
- `data/working/knowledge_abilities.csv`
- `data/working/assessment_evidence.csv`
- `data/working/subject_anchors.csv`
- `data/working/edges.csv`
- `outputs/reports/deep_theme_build_report.md`
- `outputs/reports/phase4_validation_report.md`

## Promotion Rule

Phase 4 promotes only the coverage units linked by accepted themes. It does not promote all 182 Phase 2 coverage units.

The promoted curriculum anchors are still marked `deep_draft`. Their page references are traceback pointers, not a page-validation gate.

Before public release, a teacher or editor can refine the `teacher_friendly_summary` field and optionally sample-check source pages for the anchors that will be quoted or displayed.
