# 2rasi / OMESG360 portfolio roadmap

Status: ACTIVE MASTER PORTFOLIO
Last updated: 2026-08-23
Primary 2rasi branch: `hero-webgl`

## Purpose
This file is the cross-project source of truth for what exists, what is frozen, what needs validation, and what should be considered next across the 2rasi / OMESG360 ecosystem.

Project-specific recovery/deployment details for OMESG360 remain in its own `PROJECT_ROADMAP.md` and `RECOVERY_AND_INTEGRATION_PLAN.md`.

## Current portfolio

| Project | Current state | Languages | Next stance |
|---|---|---|---|
| 2rasi web | Live | LT/EN by domain | Maintain; use as ecosystem entry point |
| OMESG360 | Healthy production baseline | LT/EN | Maintain; Hostinger Git auto-deploy stays OFF |
| Leadership 360° | COMPLETE / FROZEN | LT/EN | No changes without a concrete new requirement |
| Mirror / Veidrodis | Live | LT/EN | Maintain |
| 2Pair core | Research product in development | not yet a product release target | FREEZE core until evidence improves |
| Wave1 | Research satellite, live | current public research surface | Collect more participants/data; do not redesign from weak evidence |
| Calibration v0.1 | Research satellite, live | current public research surface | Collect calibration data before changing 2Pair core |
| Multipliers | Live legacy tool | LT | Review for EN value before translating |
| Divergent | Live legacy tool | LT | Review for EN value before translating |
| Situational Leadership | Live legacy tool | LT | Review for EN value before translating |
| Drama Triangle | Live legacy tool | LT | Review for EN value before translating |
| Strategic Thinking | Live legacy tool | LT | Review for EN value before translating |
| Competency Matrix / Skills Matrix | Legacy spreadsheet tool; accepted as future Tools item | LT | KEEP; document semantics, then rebuild as a usable LT/EN web tool |
| ADEPT 15 analog | Legacy external project in Microsoft Forms | unknown / to inventory | Recover content, document structure, then decide migrate / rebuild / archive |

## Current priorities

### P0 — Protect the healthy baseline
- Do not reopen Leadership 360° unless there is a concrete product requirement.
- Keep OMESG360 Hostinger Git auto-deployment OFF.
- Keep normal OMESG360 deployments frontend-only through the controlled GitHub Actions -> FTP path.
- Do not modify Wave1 or Calibration mechanics merely to create activity.

### P1 — Build a real legacy-project inventory
Before translating or rebuilding old tools, record for each one:
- purpose / framework;
- current URL or source location;
- current language(s);
- number of questions / situations;
- whether it still represents the intended logic;
- whether user data is local/browser/server/external platform;
- whether it is worth keeping public;
- decision: KEEP / IMPROVE / TRANSLATE / REBUILD / ARCHIVE.

First missing inventory item: **ADEPT 15 analog in Microsoft Forms**.

### Newly inventoried tool candidate — Competency Matrix / Skills Matrix
Source reviewed: uploaded legacy Excel workbook.

Understood structure without additional explanation:
- process -> step -> what is done -> how it is done -> quality/safety reason;
- 0–5 competence scale from unable to perform through able to teach others;
- responsible person per action/step;
- January–December training plan using initials;
- per-person current competence (`Faktas`), required competence (`Tikslas`) and gap (`Skirtumas`);
- row-level aggregate competence gap across the team;
- top-level actual competence sum versus target competence sum.

Portfolio decision: **KEEP as a future Tools item.** Do not treat it as ADEPT 15. Before implementation, clarify the few ambiguous semantics identified during review (especially meaning of target `0`, responsibility field, training-plan initials and gap sign convention).

### P2 — LT/EN parity only where it creates value
Do not translate every old project automatically.

Review these LT-only tools one by one:
1. Multipliers
2. Divergent
3. Situational Leadership
4. Drama Triangle
5. Strategic Thinking
6. Competency Matrix / Skills Matrix

For each, first decide whether the tool is still conceptually worth presenting in the 2rasi ecosystem. Only then invest in EN and UI normalization.

### P3 — 2Pair remains evidence-gated
Current rule:
- no 2Pair core redesign while Calibration has insufficient data and Wave1 is weakly tested;
- no large new stimulus/pair generation batch without evidence showing what is missing in the current set;
- new pairs become justified when data shows concrete imbalance, overly dominant choices, weak discrimination, timing anomalies, insufficient stimulus diversity, or another identifiable gap.

Near-term 2Pair work is therefore **data collection and research operations**, not core product development.

## Suggested sequence from here
1. Inventory ADEPT 15 from Microsoft Forms.
2. Preserve and specify the Competency Matrix / Skills Matrix semantics before rebuilding it.
3. Complete a compact inventory row for every legacy LT-only tool.
4. Decide which legacy project is genuinely worth upgrading to LT/EN next.
5. In parallel, continue collecting Wave1 and Calibration data without changing their mechanics.
6. Reopen 2Pair core only after evidence gives a concrete reason.

## Freeze register
- Leadership 360°: COMPLETE / FROZEN.
- OMESG360 recovery: COMPLETE.
- 2Pair core: TEMPORARY RESEARCH FREEZE pending stronger Wave1 + Calibration evidence.

## Rule for new work
Prefer evidence-driven maintenance, inventory and language/product cleanup over adding new features to under-tested projects.
