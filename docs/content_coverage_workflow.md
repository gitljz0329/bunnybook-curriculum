# Content Coverage Workflow

Phase 2 shifts the project from manual anchor promotion to curriculum-content coverage.

The 8 Big Questions are treated as fixed organizing lenses. The work now asks a simpler question:

> Do we have candidate nodes and edges that cover the curriculum content sections across the high-school standards corpus?

## What Phase 2 Creates

- `data/review/content_coverage_units.csv`
- `data/review/content_bq_edges.csv`
- `outputs/reports/content_coverage_audit.md`
- `outputs/reports/phase2_validation_report.md`

These files stay in `data/review/`. They are coverage candidates, not final graph data.

## Why Page References Still Exist

Page references are kept only as source pointers. They help us trace a unit back to a PDF when needed, but exact page validation is not the main task in this phase.

The main gate is coverage:

- every curriculum-content source file should produce at least one coverage unit;
- every coverage unit should have at least one Big Question edge;
- the audit should show which subjects and Big Questions are under-covered.

## How To Run

```bash
.venv/bin/python scripts/extract_content_coverage_units.py
.venv/bin/python scripts/map_content_units_to_bq.py
.venv/bin/python scripts/audit_content_coverage.py
.venv/bin/python scripts/validate_phase2.py
```

General data validation can still be run afterwards:

```bash
.venv/bin/python scripts/validate_data.py
.venv/bin/python scripts/build_seed_json.py
```

`validate_data.py` checks only `data/working/`, so it should remain clean while Phase 2 is still candidate-level.

## When To Promote Later

Do not bulk-promote Phase 2 units into `data/working/curriculum_anchors.csv`.

Promotion should happen only when a selected deep theme needs a stable curriculum anchor. At that point, promote the small number of units needed for that theme, rewrite the summary if necessary, and keep the source pointer.
