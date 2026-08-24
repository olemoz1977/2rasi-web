# 2rasi legacy tool audit

Status: CURRENT PORTFOLIO AUDIT
Date: 2026-08-24
Branch: `hero-webgl`

## Purpose

Classify the five older public LT tools before spending effort on translation, redesign or integration.

Allowed verdicts:
- `KEEP` — concept and current public role still make sense; maintain as legacy experiment without active development;
- `REBUILD` — concept is worth preserving, but current measurement/content architecture should not be promoted or expanded as-is;
- `ARCHIVE` — preserve source/history, but it should no longer be treated as an active portfolio product;
- `DROP` — no meaningful reason to preserve as portfolio material beyond repository history.

This audit does **not** authorize new feature development.

## 1. Multipliers

Repository:
`olemoz1977/multipliers-test`

Current public role:
- leadership reflection experiment;
- quick and full forms;
- explicitly described as unofficial and unvalidated;
- directly inspired by Liz Wiseman's `Multipliers` framework and terminology.

Observed strengths:
- practical leadership-learning topic;
- maps naturally to Team Lead development material;
- current README already avoids claiming validation;
- browser-based, lightweight reflection format.

Observed issues:
- strongly dependent on an external named framework / vocabulary;
- current analysis categories mix framework labels with broader competencies such as autonomy, emotional intelligence, communication and decision-making;
- not a defensible standalone leadership assessment;
- future value is stronger as learning/reflection material than as a scored test.

### Verdict: `KEEP`

Keep as a **legacy 2rasi leadership reflection experiment**, not as a professional assessment and not as an active development priority.

Future option:
- useful source material for a later Team Lead learning layer;
- if rebuilt, re-derive the learning experience rather than simply polishing the current scoring.

## 2. Divergent

Repository:
`olemoz1977/Divergent-test-2`

Current public role:
- 2rasi self-reflection experiment;
- Big Five / OCEAN profile plus exploratory archetypes;
- browser-only;
- current README explicitly says it is not diagnostic and is intended for learning/self-reflection.

Observed strengths:
- clearly belongs to the creative / experimental side of 2rasi rather than OMESG360;
- Big Five provides a recognizable conceptual reference point;
- exploratory archetypes fit the project's creative framing when they are not presented as validated personality types.

Observed issues:
- OCEAN percentages plus named archetypes can easily look more psychometrically definitive than the evidence supports;
- archetypes are interpretive/product content, not validated scales;
- should remain separate from WorkStyle and any future professional assessment stack.

### Verdict: `KEEP`

Keep as a **legacy 2rasi experiment**.

Do not merge it into WorkStyle, Leadership SJT or OMESG360 professional assessment logic.

No active rebuild is justified now.

## 3. Situational Leadership

Repository:
`olemoz1977/Situacinio-vadovavimo-testas`

Current public role:
- leadership-style test;
- long situational questionnaire;
- scenarios have pre-keyed `correct` leadership-style answers;
- output evaluates style distribution / flexibility / effectiveness.

Observed strengths:
- situational judgement is a valuable leadership-learning format;
- concrete scenarios are more behaviourally grounded than generic self-rating statements.

Observed issues:
- the current architecture assumes one pre-keyed correct style for each scenario;
- scenario and scoring logic are tied to the classic directing / selling-coaching / participating-supporting / delegating model;
- provenance / external-framework dependence is too strong for this to become the basis of the future original Leadership SJT;
- future Leadership SJT work already has a research-first path and must not inherit this item bank by default;
- current public test can confuse the portfolio by looking like the active leadership judgement instrument when that work is actually frozen and being re-derived.

### Verdict: `ARCHIVE`

Preserve the repository and historical learning value, but do not treat it as an active portfolio product.

If leadership situational judgement returns later, use the frozen Leadership SJT research path rather than rebuilding this legacy test around the same keyed model.

## 4. Drama Triangle / Karpman

Repository:
`olemoz1977/karpman-apklausa`

Current public role:
- 18-item self-reflection questionnaire;
- three role scores: Auka / Gelbėtojas / Persekiotojas;
- reverse items;
- 0-100 display derived from 1-5 means;
- fixed low / medium / high interpretation thresholds;
- recommendations toward an `Išeities trikampis` framing.

Observed strengths:
- useful conflict-reflection concept;
- already aligned with learning / reflection rather than diagnosis;
- directly relevant to Team Lead conflict-development material.

Observed issues:
- current score percentages can imply measurement precision that is not established;
- fixed thresholds are design choices rather than demonstrated norms;
- some items can confound constructive assertiveness / feedback with a `Persekiotojas` tendency;
- the concept is more valuable than the current scoring model.

### Verdict: `REBUILD`

Preserve the concept and source material, but do not invest in the current scoring architecture.

If revisited, rebuild as a reflection experience with cleaner behavioural distinctions and more cautious result semantics.

## 5. Strategic Thinking

Repository:
`olemoz1977/Strateginio_M-stymo_Testas`

Current public role:
- 15 situational questions;
- three dimensions: Sisteminis mąstymas, Perframinimas, Refleksija;
- each option has a preassigned 1-5 score;
- subscale totals and overall total;
- current README says the questions are based on a validated methodology but have not been studied in Lithuanian.

Observed strengths:
- strategic thinking is a useful leadership / management-development topic;
- systems thinking, reframing and reflection are meaningful learning dimensions;
- situational format is preferable to abstract self-description for this topic.

Observed issues:
- many options visibly form an ordered `bad -> better -> best` ladder, making socially desirable answers relatively easy to infer;
- total scores can look like an ability measure even though the current form is primarily a designed reflection exercise;
- methodology/provenance and the validity language need a cleaner audit before any professional use;
- a future version should separate learning scenarios from claims of measuring strategic-thinking capability.

### Verdict: `REBUILD`

Keep the concept, not the current measurement claims/scoring as a future product foundation.

Potential future home:
- 2rasi learning/reflection experiment, or
- Team Lead / manager learning content inside OMESG360 after re-derivation.

## Portfolio result

| Tool | Verdict | Portfolio role now |
|---|---|---|
| Multipliers | KEEP | Legacy 2rasi leadership reflection; no active development |
| Divergent | KEEP | Legacy 2rasi creative/self-reflection experiment; no active development |
| Situational Leadership | ARCHIVE | Preserve repository/history; remove from active-product framing |
| Drama Triangle | REBUILD | Preserve concept/source; current scoring not future foundation |
| Strategic Thinking | REBUILD | Preserve concept/source; re-derive before future promotion |

## What not to do now

- do not translate all five to EN;
- do not normalize their UI just for consistency;
- do not merge their scores into WorkStyle, Leadership 360 or future Leadership SJT;
- do not productize them inside OMESG360 merely because related teaching material exists;
- do not delete repositories as part of this audit.

## Next cleanup decision

Public catalogue presentation can now be aligned with these verdicts separately.

That is a **portfolio/navigation cleanup**, not a rebuild of the tools themselves.
