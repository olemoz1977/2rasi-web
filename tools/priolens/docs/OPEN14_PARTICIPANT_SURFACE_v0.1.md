# PrioLens participant surface v0.1

Status: ACTIVE CHECKPOINT / PRE-PILOT PARTICIPANT SURFACE / ITEM-LEVEL RESULT MATRIX LIVE
Updated: 2026-09-02

## Scope

This checkpoint controls **participant-facing presentation only**.

It does **not** change:
- the frozen Open14 v0.2 family set;
- visual-choice evidence rules;
- 1–5 / null Channel B storage;
- six-domain aggregation stored in the research payload;
- CARE analysis boundary;
- cohort inclusion rule;
- backend schema or API lifecycle.

The detailed participant comparison matrix is canonical in:
`OPEN14_RESULT_LINK_MATRIX_v0.1.md`.

If an older section in this file conflicts with that matrix, the matrix wins for result comparison logic.

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

Current framing:
- three images at a time;
- do not decide which is better;
- choose where attention goes first;
- 14 quick visual choices;
- then a separate current-sufficiency perspective.

The readiness card disappears after a successful bank check and remains visible only when useful, such as loading, failure, missing assets or resume state.

Retention wording remains conservative until the cleanup cron is operational.

## Result product rule

The result is not a diagnostic report and not a list of all collected values.

Its participant-facing hierarchy is now:

1. **Tavo pasirinkimai / Your choices**
   - heading: `Kas tave traukė? / What pulled you?`
2. **Tavo atsakymai / Your answers**
   - heading: `Ko dabar norėtųsi daugiau? / What would you like more of right now?`
3. **Svarbiausia / Most important**
   - heading: `Ką matai, kai palygini abu? / What do you notice when you compare the two?`

The third section is the main product payoff. The first two sections provide the evidence needed to understand it.

The public promise remains:
> `Pirmas žvilgsnis ir antras atsakymas ne visada rodo tą patį.`

### 1. Visual choices

Participant evidence remains the frozen cross-exemplar repetition rule:
- show a family only when both distinct exemplars were chosen at least once;
- therefore a displayed family is normally `2/3` or `3/3`;
- `3/3` is stronger repetition but is not a separate construct threshold;
- same-exemplar repetition alone is not promoted to family-level evidence.

For each displayed family:
- show the actual distinct images the participant selected;
- show a simple `2/3` or `3/3` badge;
- show one short human-language description of what the theme **may** relate to;
- never present that description as the reason the participant chose the image.

Current boundary copy:
> `Tai nereiškia, kad tau šito trūksta. Tik tiek, kad prie šių temų tavo dėmesys grįžo daugiau nei kartą.`

Never turn visual repetition into:
- `you need this`;
- `you lack this`;
- `your subconscious wants this`;
- `this is your true priority`.

### 2. Self-reported areas where more may be wanted

Channel B still stores all twelve item responses and still computes the six broader domains for research use.

Normal participant output is now **item-level**, not six-domain-level:
- evaluate the 12 individual Channel B responses independently for display;
- show numeric item responses `<=3` only;
- omit numeric item responses `4–5` from the main result;
- omit `null / Sunku pasakyti / Hard to say` items rather than guessing;
- if no numeric item is `<=3`, show one concise statement that nothing clearly stood out;
- if there are no numeric responses, say that PrioLens does not guess for the participant.

This `<=3` threshold is a **participant-display filter only**. It is not a new research variable, clinical cutoff, Maslow stage or pilot-analysis threshold. Raw item values and six-domain aggregation remain stored exactly as before.

No decimals, bars or technical coverage counts are shown in normal participant mode.

### 3. Final comparison is the main payoff

The final section must feel clearly more important than the two evidence sections.

Current presentation:
- label: `Svarbiausia / Most important`;
- heading: `Ką matai, kai palygini abu? / What do you notice when you compare the two?`;
- visually dominant dark reflection card;
- relevant selected images repeated inside the final card when a visual family is in focus;
- one short synthesis in ordinary language;
- one large reflection question.

The comparison now uses the item-level `DIRECT / RELATED / NONE` matrix in `OPEN14_RESULT_LINK_MATRIX_v0.1.md`.

Core participant scenarios:
1. **same area + wants more** -> ask whether the two things feel connected;
2. **same area + already feels sufficient** -> preserve the contrast and ask what still attracted attention;
3. **different things stand out** -> state that they did not point to the same place and ask which feels more important right now;
4. **visual-only** -> ask about the repeated images without inventing a Channel B match;
5. **self-report-only** -> reflect on the clearest lower-sufficiency item when no visual family repeats;
6. **quiet result** -> do not manufacture a focal point.

Avoid research-language phrases such as:
- `two signals`;
- `broader area`;
- `valid pairing`;
- repeated references to `this session` unless technically necessary.

The final question must not imply that a relationship exists.

## CARE and asymmetry guardrail

The frozen CARE rule remains unchanged:
- visual CARE = proactive / giving care;
- `CARE_SUPPORT_PRESENT` = care/support present or received;
- no direct CARE <-> CARE_SUPPORT_PRESENT comparison in Open14 v0.2.

A repeated CARE theme may appear with its selected images, but it has no direct Channel B pair in the item-level result matrix.

Meaning / Contribution items remain self-report-only because they have no active visual counterpart.

## Technical detail boundary

Raw JSON and diagnostics remain debug-only (`?debug=1`).

All underlying values, coverage information, choices and telemetry continue to be stored for research analysis. The participant surface is selective; the research payload is not.

## Runtime implementation

Runtime repository:
`olemoz1977/omesg360`

Runtime file:
`priolens/open14-v02/index.html`

Latest item-level result runtime commit:
`dd987aef62ea75d8d7a91b83318ed908f3fc54a3`

Deployment / live HTTP smoke:
`33632458582` — SUCCESS.

Verified by that deployment:
- bilingual participant source present;
- selected repeated images and `2/3` / `3/3` badges remain present;
- 12-item participant display filter is present;
- `DIRECT / RELATED` family-item links are present;
- CARE remains intentionally unmatched;
- all three main final-result scenarios are present;
- managed runtime uploaded to Hostinger;
- live HTTP source contains the item-level result model;
- planner / assigner / bank / API health remain reachable;
- historical `/priolens/` boundary remains reachable.

## Recruitment consequence

This result change is pre-pilot product hardening, not construct evidence.

External recruitment remains CLOSED until the remaining canonical hardening items are complete and `PILOT_OPENED_AT_UTC` is explicitly recorded.
