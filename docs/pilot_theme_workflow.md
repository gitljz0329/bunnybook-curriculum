# Pilot Theme Workflow

Phase 5 选择两张 deep theme，并把它们推进成教师可共备的 pilot packages。

它仍然不是完整教材单元。目标是做两张可复用的共备样张，展示图谱如何从：

```text
Big Question -> Theme -> Activity Task -> Curriculum Anchor -> Assessment Evidence
```

## Selected Pilot Themes

- `TH-CAND-004` 数据会不会骗人
- `TH-CAND-007` AI 与社会判断

这两张先做，是因为它们能形成一组紧密样张：一张用低门槛方式处理证据和数据判断，另一张把这种判断延伸到 AI、责任和公共生活。

## Inputs

- `themes/deep/TH-CAND-004.md`
- `themes/deep/TH-CAND-007.md`
- `data/working/themes.csv`
- `data/working/curriculum_anchors.csv`
- `data/working/assessment_evidence.csv`
- `data/working/edges.csv`

## Outputs

- `themes/pilot/TH-CAND-004.md`
- `themes/pilot/TH-CAND-007.md`
- `data/working/activity_tasks.csv`
- updated `data/working/themes.csv`
- updated `data/working/edges.csv`
- `outputs/reports/pilot_theme_build_report.md`
- `outputs/reports/phase5_validation_report.md`

## Run

```bash
.venv/bin/python scripts/build_pilot_theme_packages.py
.venv/bin/python scripts/validate_phase5.py
.venv/bin/python scripts/validate_data.py
.venv/bin/python scripts/build_seed_json.py
```

## Notes

其他 accepted deep themes 继续保留为 `deep_draft`。如果前两张 pilot package 跑通，再把它们继续推进。

来源页码仍然只是回溯指针。Phase 5 的重点是共备用性，不是逐页校验来源。
