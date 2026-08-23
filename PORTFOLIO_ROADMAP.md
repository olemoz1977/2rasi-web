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
| WorkStyle 15 | Working product name for the recovered ADEPT 15 analog; 150-item source bank | LT source | DEVELOP CAREFULLY; create shorter public LT/EN version after item audit |
| Organization Development / PAEI | Future concept | future LT/EN | IDEA ONLY; later build a separate organization-level longitudinal measurement tool |

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

### Inventoried legacy assessment — WorkStyle 15 source (former ADEPT 15 analog)
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

Current product direction:
- retain all 150 statements as the source/item bank rather than assuming all 150 belong in the public product;
- working public product name: **WorkStyle 15**;
- likely public target: approximately 60–75 items (4–5 strong items per dimension), subject to item audit and available data;
- public result should explain work tendencies, strengths, watch-outs and reflection prompts rather than present raw percentages as percentiles;
- full 150-item version may remain as research/reference baseline.

Current caution:
- this inventory recovers what the existing implementation does; it does **not** yet validate the psychometric or theoretical basis of the statements/dimensions;
- statement wording, redundancy, social desirability, possible reverse-item needs and construct source should be reviewed before public migration;
- the workbook contains a small source-text defect (`QuestionNuolat...`) and its modern `XLOOKUP` formulas may show `#NAME?` in engines that do not support that Excel function; this is an implementation compatibility issue, not necessarily a scoring-design error.

Portfolio decision: **KEEP and evolve into WorkStyle 15, but do not publish/rebuild unchanged.**

### Future interpretation concept — WorkStyle 15 × Adizes PAEI
Idea status: **recorded hypothesis, not a validated PAEI assessment.**

There is a strong conceptual overlap between the 15 WorkStyle dimensions and Adizes managerial roles:

- **P — Producer / results orientation**: strongest conceptual links to Kryptingumas and Ambicija; possible secondary links to Asertiškumas and Įtaka.
- **A — Administrator / order and repeatability**: strongest conceptual link to Struktūra; possible secondary links to Kryptingumas and Ramybė.
- **E — Entrepreneur / change, opportunity and future orientation**: strongest conceptual links to Konceptualus mąstymas, Lankstumas and Tobulėjimas; possible secondary links to Ambicija and Gyvybingumas.
- **I — Integrator / trust and cohesion**: strongest conceptual links to Bendradarbiavimas, Jautrumas and Nuolankumas; possible secondary links to Pozityvumas and Savimonė.

Several WorkStyle dimensions are cross-cutting rather than clean P/A/E/I markers: Savimonė, Ramybė, Įtaka, Asertiškumas and Gyvybingumas may change how a role is expressed rather than define one role by themselves.

Product rule:
- do **not** simply average selected WorkStyle 15 dimensions and label the output as an official PAEI profile;
- if used, PAEI should initially appear only as an optional interpretive lens such as “tendencies associated with P/A/E/I roles”;
- a true PAEI assessment would need dedicated observable-behaviour items and separate validation.

Potential value:
WorkStyle 15 can describe **how a person tends to work**, while the PAEI lens can explain **what managerial contribution those tendencies may naturally support or under-support**.

### Product visualization hypothesis — WorkStyle 15 multi-lens radial profile
Idea status: **recorded concept; visualization and mappings require validation.**

Proposed result architecture:
1. **Core / first layer — 15 WorkStyle dimensions** shown as the primary measured profile.
2. **Second layer — 6 WorkStyle styles** from the recovered workbook: Emotional, Teamwork, Achievement, Adaptability, Interaction and Task styles.
3. **Third layer / outer interpretive ring — Adizes PAEI lens** showing conceptual correspondence with P, A, E and I roles.
4. **Fourth layer / outer interpretive ring — DISC lens** showing conceptual correspondence with D, I, S and C behavioural styles.

The visual can use a concentric radial/radar design so the user sees the same underlying WorkStyle 15 profile through progressively broader frameworks rather than receiving disconnected test reports.

Critical interpretation rule:
- only the 15 dimensions and 6 recovered WorkStyle styles are direct outputs of the current WorkStyle source model;
- PAEI and DISC must initially be presented as **derived correspondence lenses**, not independent validated PAEI or DISC scores;
- do not imply that completing WorkStyle 15 is equivalent to completing an official Adizes or DISC assessment;
- before assigning numeric PAEI/DISC values, create an explicit item/dimension crosswalk, define weights, review overlap and contradictions, and test whether the derived profiles behave sensibly on real responses.

Preliminary DISC correspondence to investigate, not yet approved scoring:
- **D — Dominance** may draw most strongly from Asertiškumas, Kryptingumas, Ambicija and Įtaka;
- **I — Influence** may draw from Gyvybingumas, Pozityvumas, Įtaka and Bendradarbiavimas;
- **S — Steadiness** may draw from Ramybė, Jautrumas, Bendradarbiavimas and Nuolankumas;
- **C — Conscientiousness** may draw most strongly from Struktūra and Kryptingumas, with possible secondary relationships to Savimonė and selected conceptual/quality-oriented items.

The DISC crosswalk should be audited at **item level**, not accepted only from dimension names, because several WorkStyle dimensions can plausibly contribute to more than one DISC style.

Product intent:
The user should first understand **their own 15-dimensional work pattern**, then see how the same pattern can be interpreted through broader management/behaviour frameworks. The outer rings add context, not new claims of measurement.

### Future product concept — Organization Development / PAEI
Longer-term idea: build a separate organization-level tool for measuring organizational development, not an extension of the individual self-report score.

Core concept:
- multiple people rate observable organizational behaviour, ideally across levels/functions;
- measure organizational balance across four practical capabilities:
  - **P** — producing results now / execution / customer value;
  - **A** — processes / standards / governance / predictability;
  - **E** — adaptation / innovation / opportunity / future orientation;
  - **I** — trust / collaboration / shared purpose / organizational integration;
- aggregate results at organization/team/unit level rather than diagnose individuals;
- repeat the measurement over time (for example quarterly or semi-annually) to show development direction rather than a one-time label;
- highlight imbalances and tensions, e.g. strong P with weak A, strong A with weak E, strong E with weak I;
- later investigate whether a validated second layer can connect these patterns with Adizes organizational lifecycle / development stages.

Important boundary:
- **WorkStyle 15** = individual work-style reflection;
- **Leadership 360°** = multi-rater leadership behaviour + development cycle;
- **Organization Development / PAEI** = collective system/organization measurement over time.

The organization tool should therefore be designed from organizational behaviour statements, not created by averaging employees' WorkStyle 15 personal profiles.

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

Portfolio decision: **KEEP as a future Tools item.** Do not treat it as WorkStyle 15. Before implementation, clarify the few ambiguous semantics identified during review (especially meaning of target `0`, responsibility field, training-plan initials and gap sign convention).

### P2 — LT/EN parity only where it creates value
Do not translate every old project automatically.

Review these LT-only tools one by one:
1. Multipliers
2. Divergent
3. Situational Leadership
4. Drama Triangle
5. Strategic Thinking
6. Competency Matrix / Skills Matrix
7. WorkStyle 15

For each, first decide whether the tool is still conceptually worth presenting in the 2rasi ecosystem. Only then invest in EN and UI normalization.

### P3 — 2Pair remains evidence-gated
Current rule:
- no 2Pair core redesign while Calibration has insufficient data and Wave1 is weakly tested;
- no large new stimulus/pair generation batch without evidence showing what is missing in the current set;
- new pairs become justified when data shows concrete imbalance, overly dominant choices, weak discrimination, timing anomalies, insufficient stimulus diversity, or another identifiable gap.

Near-term 2Pair work is therefore **data collection and research operations**, not core product development.

## Suggested sequence from here
1. Audit WorkStyle 15 item bank and construct/reporting semantics using the recovered workbook as implementation source of truth.
2. Decide the first public WorkStyle 15 item set and interpretation model before coding.
3. Build and review explicit WorkStyle 15 → PAEI and WorkStyle 15 → DISC crosswalks before any derived outer-ring scoring is implemented.
4. Preserve and specify the Competency Matrix / Skills Matrix semantics before rebuilding it.
5. Complete a compact inventory row for every legacy LT-only tool.
6. Decide which legacy project is genuinely worth upgrading to LT/EN next.
7. In parallel, continue collecting Wave1 and Calibration data without changing their mechanics.
8. Reopen 2Pair core only after evidence gives a concrete reason.
9. Keep Organization Development / PAEI as a later product concept until WorkStyle 15 and the current tools portfolio are stable.

## Freeze register
- Leadership 360°: COMPLETE / FROZEN.
- OMESG360 recovery: COMPLETE.
- 2Pair core: TEMPORARY RESEARCH FREEZE pending stronger Wave1 + Calibration evidence.

## Rule for new work
Prefer evidence-driven maintenance, inventory and language/product cleanup over adding new features to under-tested projects.
