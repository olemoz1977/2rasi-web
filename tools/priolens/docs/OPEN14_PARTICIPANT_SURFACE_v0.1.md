# PrioLens participant surface v0.1

Status: ACTIVE CHECKPOINT / PRE-PILOT PARTICIPANT SURFACE / FOCUSED RESULT EXPERIENCE LIVE
Updated: 2026-09-02

## Scope

This checkpoint controls **participant-facing presentation only**.

It does **not** change:
- the frozen Open14 v0.2 family set;
- visual-choice evidence rules;
- 1–5 / null Channel B storage;
- domain aggregation stored in the research payload;
- CARE analysis boundary;
- cohort inclusion rule;
- backend schema or API lifecycle.

## Naming boundary

`Open14` remains internal terminology for repository paths, schema identifiers, planner / bank / telemetry and analysis.

Normal participant UI uses:
- product name: **PrioLens**;
- LT status: `Tyrimo prototipas`;
- EN status: `Research prototype`.

Browser title:
`PrioLens · 2rasi`.

## Intro surface

The 2rasi landing explains what PrioLens is. The runtime intro prepares the participant to act.

Current LT framing:
- `Kuris pirmas patraukia?`
- three images at a time;
- do not decide which is better;
- choose where attention goes first;
- 14 quick choices, followed by a second perspective.

The readiness card disappears after a successful bank check and remains visible only when useful, such as loading, failure, missing assets or resume state.

Retention wording remains conservative until the cleanup cron is operational.

## Result product rule

The result is not a diagnostic report and not a list of all collected values.

Its job is to give the participant three useful steps:

1. **Kas patraukė tavo dėmesį / What pulled your attention**
2. **Kur šiuo metu mažiau pakanka / Where less feels sufficient right now**
3. **Pažvelk dar kartą / Look again** as a reflection question

The public promise remains:
> `Pirmas žvilgsnis ir antras atsakymas ne visada rodo tą patį.`

### 1. What pulled your attention

Participant evidence remains the frozen cross-exemplar repetition rule:
- a family is shown as repeated only when both distinct exemplars were chosen at least once;
- same-exemplar repetition alone is not promoted to family-level evidence;
- no technical rates, bars or RT interpretation are shown.

When a repeated theme exists, the result now explicitly explains the interpretation boundary:

> The choices show what repeatedly pulled attention in this session. They do not tell us what the participant lacks.

Participant copy may mention plausible attention influences such as current relevance, learned value, prior experience or properties of the image itself, but must state that the choice alone does not identify **why** attention was pulled.

Therefore never turn visual repetition into:
- `you need this`;
- `you lack this`;
- `your subconscious wants this`;
- `this is your true priority`.

### 2. Where less feels sufficient right now

Channel B still stores all twelve item responses and full domain coverage exactly as before.

Normal participant output is now intentionally selective:
- only **complete** 2/2 domains may be interpreted;
- among complete domains, only domains with the current aggregate value `<= 3` are listed individually;
- values on the 4–5 side are not listed as six separate reassuring cards;
- if no complete domain is `<= 3`, show one concise statement that no area stood out as less sufficient;
- incomplete domains remain omitted from interpretation and one concise coverage note is allowed;
- if no domain is complete, do not interpret this perspective.

This `<= 3` threshold is a **participant-display filter only**. It is not a new research variable, clinical cutoff, Maslow stage or pilot-analysis threshold. Raw values remain stored.

Participant states remain broad and non-precise:
- lower current sufficiency;
- in between.

No decimals, bars or `0/2`, `1/2`, `2/2` counts are shown in normal mode.

### 3. Look again / reflection

The third section no longer tries to manufacture a generalized conclusion.

It gives one focused synthesis and one question.

Priority order:

1. If a repeated visual family has a valid mapped complete sufficiency domain, use that valid pairing.
   - When the mapped domain is `<=3`, ask whether the participant sees a connection between the two signals or whether they feel unrelated.
   - When the mapped domain is on the more-sufficient side, explicitly preserve the contrast and ask what about the repeated-theme images still pulled attention.
2. If a repeated visual theme has no valid equivalent Channel B comparison, reflect on the visual repetition alone rather than inventing symmetry.
3. If there is no repeated visual theme but one or more complete domains are `<=3`, ask which of those areas feels most worth attention now.
4. If neither side produces a salient participant-facing signal, ask whether anything in the result still surprised the participant.

The question must not imply that a relationship exists. A valid participant answer is explicitly allowed to be: **these two things feel unrelated**.

## CARE and asymmetry guardrail

The frozen CARE rule remains unchanged:
- visual CARE = proactive / giving care;
- `CARE_SUPPORT_PRESENT` = care/support present or received;
- no direct CARE <-> CARE_SUPPORT_PRESENT comparison in Open14 v0.2.

A repeated CARE theme may therefore appear in section 1 and may receive a visual-only reflection question, but must not be falsely paired with received support.

Meaning / Contribution remains contextual-only because it has no active visual counterpart.

## Technical detail boundary

Raw JSON and diagnostics remain debug-only (`?debug=1`).

All underlying values, coverage information, choices and telemetry continue to be stored for research analysis. The participant surface is selective; the research payload is not.

## Runtime implementation

Runtime repository:
`olemoz1977/omesg360`

Runtime file:
`priolens/open14-v02/index.html`

Focused result experience runtime commit:
`3ff1c11a7bce581ada174a917d1732efcc5b53de`

Deployment / live HTTP smoke:
`33628198344` — SUCCESS.

Verified by that deployment:
- current bilingual participant surface present in source;
- focused `<=3` result filter present;
- LT and EN reflection copy present;
- managed runtime uploaded to Hostinger;
- live HTTP source contains the new result experience;
- planner / assigner / bank / API health remain reachable;
- historical `/priolens/` boundary remains reachable.

## Recruitment consequence

This result change is pre-pilot product hardening, not construct evidence.

External recruitment remains CLOSED until the remaining canonical hardening items are complete and `PILOT_OPENED_AT_UTC` is explicitly recorded.
