# Theme Generation Guidelines

Phase 3 generates a small set of theme candidates from Phase 2 coverage data.

The goal is not to produce complete lesson plans. The goal is to create enough theme options for human selection of 2-3 deep themes.

## Inputs

- `data/review/content_coverage_units.csv`
- `data/review/content_bq_edges.csv`
- `data/meta/big_questions.yml`

Do not treat Phase 2 coverage units as formal curriculum anchors. They remain review candidates.

## Outputs

- `data/review/theme_cluster_candidates.csv`
- `data/review/theme_candidates.csv`
- `outputs/reports/theme_candidate_report.md`
- `outputs/reports/theme_candidate_validation_report.md`

## Candidate Rules

- Keep the set small enough to read: 20-40 theme candidates.
- Each theme cluster can contain at most 3 concrete themes.
- Each concrete theme should link to at least 4 coverage units across at least 3 subjects.
- Every theme must include a driving question, possible student tasks, possible artifacts, and a note on why it is not a subject mosaic.
- Theme candidates stay in `data/review/` until the user selects 2-3 themes for deeper development.

## Promotion Rule

Do not bulk-promote coverage units into `data/working/curriculum_anchors.csv`.

When a theme is selected for deep development, promote only the small number of coverage units that are actually needed, after checking and rewriting their teacher-facing summaries.
