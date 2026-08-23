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
| ADEPT 15 analog | Legacy Microsoft Forms assessment; source + scoring logic recovered in `ADEPT15.xlsx` | LT | KEEP FOR REVIEW; validate construct/source, wording and scoring before rebuilding as a web tool |

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

### Inventoried legacy assessment — ADEPT 15 analog
Source reviewed: uploaded `ADEPT15.xlsx`, originating from the Microsoft Forms implementation and its analysis workbook.

Recovered structure:
- 150 Likert statements scored 1–5;
- 15 dimensions, 10 statements per dimension;
- statement-to-dimension mapping is explicit in the `Žemelapis` sheet;
- Microsoft Forms raw response export is preserved in `Sheet1`;
- response extraction / dimension mapping is represented in `Atsakymai`;
- dimension and higher-level style calculations are represented in `Rezultatai`.

15 dimensions:
- Kryptingumas;
- Struktūra;
- Bendradarbiavimas;
- Jautrumas;
- Nuolankumas;
- Konceptualus mąstymas;
- Lankstumas;
- Tobulėjimas;
- Ramybė;
- Pozityvumas;
- Savimonė;
- Ambicija;
- Įtaka;
- Asertiškumas;
- Gyvybingumas.

Higher-level style grouping in the workbook:
- Emocinis stilius = Ramybė + Pozityvumas + Savimonė;
- Komandinio darbo stilius = Bendradarbiavimas + Jautrumas + Nuolankumas;
- Pasiekimų stilius = Ambicija + Įtaka;
- Prisitaikymo stilius = Konceptualus mąstymas + Lankstumas + Tobulėjimas;
- Sąveikos stilius = Asertiškumas + Gyvybingumas;
- Užduočių stilius = Kryptingumas + Struktūra.

Scoring recovered from formulas:
- each 10-item dimension has raw range 10–50;
- dimension normalization: `(sum - 10) / 40 * 100`;
- 3-dimension style normalization: `(sum - 30) / 120 * 100`;
- 2-dimension style normalization: `(sum - 20) / 80 * 100`.

Current caution:
- this inventory recovers what the existing implementation does; it does **not** yet validate the psychometric or theoretical basis of the statements/dimensions;
- statement wording and construct source should be reviewed before public migration;
- the workbook contains a small source-text defect (`QuestionNuolat...`) and its modern `XLOOKUP` formulas may show `#NAME?` in engines that do not support that Excel function; this is an implementation compatibility issue, not necessarily a scoring-design error.

Portfolio decision: **retain as a legacy Tools candidate, but do not publish/rebuild unchanged until the construct source, statements and reporting interpretation are reviewed.**

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
7. ADEPT 15 analog

For each, first decide whether the tool is still conceptually worth presenting in the 2rasi ecosystem. Only then invest in EN and UI normalization.

### P3 — 2Pair remains evidence-gated
Current rule:
- no 2Pair core redesign while Calibration has insufficient data and Wave1 is weakly tested;
- no large new stimulus/pair generation batch without evidence showing what is missing in the current set;
- new pairs become justified when data shows concrete imbalance, overly dominant choices, weak discrimination, timing anomalies, insufficient stimulus diversity, or another identifiable gap.

Near-term 2Pair work is therefore **data collection and research operations**, not core product development.

## Suggested sequence from here
1. Review ADEPT 15 construct/source, wording and reporting semantics using the recovered workbook as implementation source of truth.
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
