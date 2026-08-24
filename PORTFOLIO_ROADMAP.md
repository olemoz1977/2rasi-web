# 2rasi / OMESG360 portfolio roadmap

Status: ACTIVE MASTER PORTFOLIO
Last updated: 2026-08-24
Primary 2rasi branch: `hero-webgl`
Primary OMESG360 branch: `main`

## Purpose

This file is the cross-project source of truth for **current portfolio state and priority**.

Detailed methodology, implementation and recovery history stays in project-specific documents. Historical files remain provenance and must not be treated as current architecture when a newer source-of-truth file exists.

## Portfolio rule

Prefer evidence-driven validation, maintenance and source-of-truth cleanup over adding features to under-tested products.

If an active research stream reaches its evidence checkpoint, pause unrelated work and analyse that evidence first.

## Current state at a glance

| Project / stream | State | Current stance |
|---|---|---|
| 2rasi web | LIVE / STABLE | Maintain as creative / experimental ecosystem entry point |
| OMESG360 | LIVE / STABLE | Maintain as professional / operational space; protect production baseline |
| Leadership 360° | COMPLETE / FROZEN | Reopen only for a concrete requirement or defect |
| Mirror / Veidrodis | LIVE / STABLE | Maintain; visual polish is not a current priority |
| Wave1 | COLLECTING DATA | Freeze participant semantics; analyse at Gate A |
| Calibration v0.1 | COLLECTING DATA | Mechanical timing / UX evidence only; analyse at timing gate |
| WorkStyle v0.7 LT-E | COLLECTING DATA | Freeze content except critical defect/data-loss issue; analyse pilot evidence |
| Leadership SJT | FROZEN / PARKED | Future WorkStyle evolution stage; do not run Stage 0 or write new items now |
| 2Pair core | FROZEN / EVIDENCE-GATED | Reopen only from Wave / Calibration evidence gates |
| Competency Matrix / Capability | VISION CAPTURED | OMESG360 professional tool direction; not in active development |
| Darbo vietos knyga / Workplace Book | VISION CAPTURED | KEEP / merge into future OMESG360 operational core; not in active development |
| Lean / Six Sigma / TOC learning material | LEGACY SOURCE MATERIAL | Keep as future OMESG360 knowledge-base source; rebuild before product/public use |
| Team Lead / `Vilko valanda` training material | LEGACY SOURCE MATERIAL | Keep as future leadership-learning source; audit/rebuild before productization |
| Multipliers | LEGACY LIVE TOOL | Audit: KEEP / REBUILD / ARCHIVE / DROP |
| Divergent | LEGACY LIVE TOOL | Audit: KEEP / REBUILD / ARCHIVE / DROP |
| Situational Leadership | LEGACY LIVE TOOL | Audit: KEEP / REBUILD / ARCHIVE / DROP |
| Drama Triangle | LEGACY LIVE TOOL | Audit: KEEP / REBUILD / ARCHIVE / DROP |
| Strategic Thinking | LEGACY LIVE TOOL | Audit: KEEP / REBUILD / ARCHIVE / DROP |
| Organization Development / PAEI | PARKED CONCEPT | Do not develop yet |
| GLA360 / OMESG360Bot | PARKED | Do not reopen unless reprioritized |

## Active evidence streams

### Wave1

Current source: `2PAIR_LAUNCH_STATE.md`.

Purpose:
- human evidence for stimulus families and choice mechanics;
- reason-language / confound inspection;
- Gate A before second exemplars or directional validation.

Rule:
- collect data;
- do not redesign from weak interim patterns;
- when sample reaches the study gate, freeze export and run the preregistered/descriptive analysis sequence.

### Calibration v0.1

Current source: `2PAIR_LAUNCH_STATE.md` plus the active Calibration protocol sources.

Purpose:
- mechanical timing and UX calibration only.

Rule:
- collect data;
- timing evidence cannot create psychological meaning;
- only the preregistered timing decision may reopen timing mechanics.

### WorkStyle v0.7 LT-E

Current source: `WORKSTYLE_CURRENT_DECISIONS.md`.

Live cognitive form:
`https://2rasi.com/tools/workstyle15/v07-cognitive.html`

Current instrument:
- version `0.7-cognitive-8axis-lt-e`;
- 34 items;
- 8 candidate bipolar axes;
- 3 blocks: 12 + 11 + 11;
- first-response timing;
- context / cannot-assess / unclear / duplicate signals;
- optional broad pilot context;
- no public profile/score.

The verified explicit pilot intake was activated on 2026-08-23. JSON remains a fallback/export path.

Current rule:
- **COLLECTING DATA / CONTENT FROZEN**;
- no EN adaptation, scoring/profile, higher-order domain claims or external-lens scoring before LT evidence;
- after the pilot batch, analyse ambiguity, context dependence, duplicate/felt-repetition, directional spread, timing and the fragile axes;
- classify axes `KEEP / REWRITE / MERGE-DROP / OPEN QUESTION`.

Historical WorkStyle 15-dimension / v0.4-v0.6 files remain provenance only and are not current architecture.

## Frozen research / assessment work

### Leadership SJT

Leadership SJT is not a parallel active project.

Decision:
- preserve existing research/review files;
- **freeze it while WorkStyle is collecting evidence**;
- treat it as a possible next WorkStyle evolution stage after the WorkStyle architecture survives its evidence gate;
- do not start Critical Incident Stage 0, recruitment or a new SJT item bank now.

### 2Pair core

Current source: `2PAIR_LAUNCH_STATE.md`.

Rule:
- no core redesign while Wave / Calibration evidence is insufficient;
- product-shaped future-session components already exist and should not be rebuilt as if missing;
- allowed work while waiting is limited to analysis tooling, blind-package tooling, tests, manifests/preregistration templates, data-quality diagnostics and documentation.

## OMESG360 operational product direction

OMESG360 is the professional / operational space. New operational product concepts should be evaluated as parts of one future system rather than isolated spreadsheets or disconnected tools.

### Competency Matrix / Capability

Current vision source in `olemoz1977/omesg360`:
`COMPETENCY_MATRIX_VISION.md`.

Status:
**VISION CAPTURED / NOT IN ACTIVE DEVELOPMENT**.

Core direction:
`Process -> current standard -> team capability -> gap -> Globėjas/trainer -> training plan -> reassessment -> improvement`.

Important semantics from the historical Excel source:
- `N` or `-` = no need for that person/role to know the competence;
- `0` = required but cannot perform / does not know;
- `1-5` = current competence / independence level;
- `N/-` is not zero.

Key principle:
A strong system cannot depend on one `superhero`. Individual mastery and system resilience must remain separate questions. Future analysis may include independent coverage, backup coverage, trainer coverage, single-point dependency and knowledge concentration.

### Darbo vietos knyga / Workplace Book

Current vision source in `olemoz1977/omesg360`:
`WORKPLACE_BOOK_VISION.md`.

Status:
**KEEP / MERGE INTO FUTURE OMESG360 CORE / NOT IN ACTIVE DEVELOPMENT**.

Direction:
- operator/shop-floor view of the current relevant workplace knowledge;
- standard work / SOP / TWI / quality / safety / SMED / abnormal-condition guidance where contextually relevant;
- Team Lead/supervisor maintenance view later;
- do not duplicate process knowledge between DVK and Competency Matrix;
- SOP is part of standardization and remains versioned/improvable, not permanent truth.

Long-term conceptual loop:
`Process / Flow -> Stability -> Standardization -> People Capability -> Improvement -> improved process / standard`.

### Knowledge / learning sources

Two source-material families have been identified but are **not products yet**:

1. Lean / Six Sigma / TOC teaching material
   - broad methods and problem-solving reference;
   - potential future OMESG360 knowledge-base source;
   - do not publish 1:1; review accuracy, provenance and product framing first.

2. Team Lead / `Vilko valanda` training material
   - feedback, engagement, collaboration, leadership, resilience, situational leadership, PAEI/organizational lifecycle, Karpman, growth mindset and related manager-learning material;
   - potential future Team Lead learning source;
   - do not productize or publish 1:1 before audit/rebuild.

These sources may later support the same OMESG360 operational ecosystem, but no Academy or Knowledge Base development is active now.

## OMESG360 production guard

Project-specific deployment source of truth remains in the OMESG360 repo:
- `PROJECT_ROADMAP.md`;
- `RECOVERY_AND_INTEGRATION_PLAN.md`.

Rules that remain in force:
- Hostinger Git auto-deployment stays OFF;
- no destructive whole-root sync or `--delete` over `public_html`;
- new folders and necessary `public_html` changes are allowed when impact on the existing system is checked first;
- prefer isolated/backward-compatible additions;
- preserve server-only secrets/config/data;
- do not damage Leadership 360, Wave1, Calibration or other existing runtime surfaces while adding future modules.

## Legacy audit queue

When no active evidence stream is ready for analysis, the safe portfolio task is to audit legacy tools one by one:

1. Multipliers
2. Divergent
3. Situational Leadership
4. Drama Triangle
5. Strategic Thinking

For each, decide only:
`KEEP / REBUILD / ARCHIVE / DROP`.

Do not automatically translate, redesign or add features during the audit.

## Current priority sequence

### P0 — collect and protect evidence
1. Wave1 data collection.
2. Calibration data collection.
3. WorkStyle v0.7 data collection.
4. If any reaches its analysis gate, pause other work and analyse it.

### P1 — safe cleanup while waiting
1. keep source-of-truth documents current;
2. perform compact legacy-tool audit;
3. maintain analysis/data-quality tooling where it directly supports active research.

### P2 — frozen until evidence / explicit reprioritization
- Leadership SJT;
- 2Pair core feature development;
- Competency Matrix implementation;
- Darbo vietos knyga implementation;
- OMESG360 Knowledge Base / Team Lead Academy;
- WorkStyle EN/profile/scoring;
- Organization Development / PAEI;
- GLA360 / OMESG360Bot;
- unrelated visual redesign.

## Freeze register

- Leadership 360°: COMPLETE / FROZEN.
- OMESG360 recovery: COMPLETE / production baseline protected.
- Wave1: COLLECTING DATA / semantics frozen.
- Calibration: COLLECTING DATA / mechanics frozen pending timing evidence.
- WorkStyle v0.7 LT-E: COLLECTING DATA / content frozen except critical defects.
- Leadership SJT: FROZEN as future WorkStyle evolution.
- 2Pair core: TEMPORARY RESEARCH FREEZE pending evidence.
- Competency Matrix: VISION CAPTURED / NOT ACTIVE.
- Workplace Book: VISION CAPTURED / NOT ACTIVE.
