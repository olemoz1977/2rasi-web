# 2Pair public + validation checkpoint

Updated: 2026-08-18

## Priority

Finish the 2Pair validation sequence. Public-entry infrastructure is already working; do not reopen marketing/distribution, GLA360, OMESG360Bot or unrelated redesign unless they directly block 2Pair validation.

## Public path — COMPLETE

Repository: `olemoz1977/2rasi-web`  
Production/default branch: `hero-webgl`

Verified public chain:

```text
2rasi.lt / 2rasi.com
-> 2Pair
-> Calibration
-> LT / EN
-> training
-> research-consent / local-only choice
-> privacy information
```

Implemented / verified:

- one codebase for `.com` and `.lt`;
- `.com` -> EN, `.lt` -> LT;
- same-path language switch;
- `2rasi.lt` parked/aliased to the active 2rasi site;
- homepage EN/LT copy;
- 2Pair EN/LT copy;
- mobile hero hints localized;
- Wave and Calibration links work;
- Calibration participant boundary is visible;
- privacy link works;
- 18+ research declaration exists;
- local-only / no-upload path exists;
- first external Calibration invitation has now been issued.

Public-entry work is no longer the active engineering gate.

## Research satellites

### Wave 1

Purpose:

- validate pair balance and other choice mechanics;
- collect spontaneous reason language;
- identify dominant confounds before Gate D.

Current reality:

- v0.3 historical/earlier participant data exists;
- v0.4 participant data exists;
- v0.3/v0.4 exports share the current analysis-compatible schema;
- current sample is still too small for family KEEP / REVISE / REJECT decisions;
- repeated humans across protocol versions must not be counted as independent people merely because UUIDs differ;
- no CS/CR polarity may be inferred from selected assets;
- `signal_mapping_status = NONE` remains in force.

Do not change live Wave participant semantics/stimuli merely because an interim descriptive pattern looks interesting. A participant-facing change requires a new documented protocol delta.

### Calibration v0.1

Purpose:

- mechanical rapid-choice / selection-timing and UX calibration only.

Live path:

`https://omesg360.eu/conflictlab/releases/calibration-v0.1/`

External participation is authorized by:

`docs/privacy/CALIBRATION_ACTIVATION_RECORD_v0.1.md`

on branch:

`arch/result-v0.2-implementation-baseline`

Activation record commit:

`98eb3b17042cf1d818bbb611b3c0287ee4399ab2`

Current boundary:

```text
study purpose = MECHANICAL_TIMING_ONLY
Gate D = NONE
Gate E = NONE
CS/CR mappings = NOT VALIDATED
latency psychological meaning = NOT VALIDATED
participant directional result = NOT AUTHORIZED
```

Research upload requires 18+ declaration and explicit consent. Participant may continue locally without upload. Reflection text/intensity remain local-first under the active Calibration boundary.

Latest timing export inspected on 2026-08-18 contained 0 CALIBRATION rows at that export time. Treat that only as current N evidence, not as proof of zero page visits.

## Product-shaped pilot — ALREADY IMPLEMENTED

The ConflictLab implementation branch already contains the product-shaped future-session stack:

- M1-M7 architecture decisions closed;
- rapid block mechanics;
- training stage;
- LT/EN flow;
- reason -> intensity reflection;
- local-first reflection boundary;
- Calculation Engine;
- Evidence Engine;
- result gate;
- Gate D / Gate E config contracts;
- timing calibration module;
- privacy / consent / retention controls;
- admin timing export;
- participant deletion-code path;
- automated tests.

Real participant result intentionally remains `NOT_ESTIMABLE` while Gate D/E are `NONE`.

Do not rebuild these components as if they were missing.

## New analysis tooling — 2026-08-18

On `olemoz1977/ConflictLab`, branch `arch/result-v0.2-implementation-baseline`:

```text
tools/analyze_wave1_export.py
tests/test_wave1_analysis_tool.py
docs/experiments/stimulus-validation/WAVE1_ANALYSIS_RUNBOOK_v0.1.md
```

Purpose:

- reproducible v0.3/v0.4 descriptive analysis;
- complete/incomplete session counts;
- pair/asset choice summaries;
- `no_clear_choice`, `hard_to_identify`, latency and intensity descriptive summaries;
- study-local neutral alias generation for blind free-text coding;
- locked coding summary after unblinding;
- no automatic family verdict and no Gate D inference.

Participant exports, generated coding sheets and alias-resolution keys must remain outside the public repository.

## Current validation gates — ORDERED

### Gate A — Human Wave evidence

Continue collection without redesigning the active protocol merely to chase interim patterns.

When the active Wave sample is sufficient under the study rule:

1. freeze export set and exclusions;
2. run reproducible descriptive analysis;
3. generate blind neutral-alias reason-coding package;
4. complete independent coding and lock it;
5. unblind;
6. summarize `supported / cross-load / insufficient / NONE` evidence and dominant confounds;
7. decide KEEP / REVISE / REJECT by family.

### Gate B — surviving stimulus families

Only surviving families may receive second exemplars.

Do not create additional stimulus library volume before Gate A evidence.

### Gate C — Gate D

For eligible exact pairs/exemplars:

1. create study-specific Gate D preregistration;
2. instantiate neutral blind validation package;
3. collect independent evidence under the frozen contract;
4. VALIDATE / FAIL / SUSPEND exact pair mapping.

Gate D validates only exact pair-level directional transformation. It does not authorize aggregation or person labels.

### Gate D — Gate E

Only after multiple independently surviving exemplars exist:

- test whether cross-exemplar aggregation is defensible;
- challenge shared confounds / nuisance variance;
- VALIDATE / FAIL / SUSPEND domain aggregation.

### Timing gate — Calibration N/20

Collect clean primary CALIBRATION blocks until the preregistered timing calibration threshold is reached.

Then the timing module may produce only the preregistered mechanical decision:

```text
KEEP_6000
ADJUST_AND_RETEST
REJECT_6000
```

Timing does not create psychological meaning.

## What is blocked by data

Do not fake progress by coding around missing empirical evidence.

Currently evidence-dependent:

- final Wave family verdicts;
- second exemplars;
- Gate D study execution;
- Gate E study execution;
- validated directional participant result;
- final product scoring/claim language.

## What may be built while data accumulates

Allowed unblocked work must support the existing validation plan without changing live protocols, for example:

- reproducible analysis tooling;
- blind-package tooling;
- test coverage;
- immutable study manifests / preregistration templates;
- data-quality diagnostics;
- state documentation.

Do not add features simply to make the product look more finished while the evidence gates remain open.

## Scope guard

Advertising/distribution optimization is parked for now.

Do not reopen:

- social-media campaign iteration;
- GLA360;
- OMESG360Bot;
- respondent-email architecture;
- unrelated 2rasi visual redesign;
- speculative psychological scoring;

unless one of them directly blocks the validation sequence above.
