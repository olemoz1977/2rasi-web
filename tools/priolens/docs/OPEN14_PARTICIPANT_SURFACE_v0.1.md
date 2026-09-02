# PrioLens participant surface v0.1

Status: ACTIVE CHECKPOINT / PRE-PILOT PARTICIPANT SURFACE / A-B-C SELF-EXPLANATION LIVE
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
- backend DB schema or API lifecycle.

The detailed participant comparison matrix is canonical in:
`OPEN14_RESULT_LINK_MATRIX_v0.1.md`.

The post-choice participant self-explanation rule is canonical in:
`OPEN14_SELF_EXPLANATION_RULE_v0.1.md`.

If an older section conflicts with those checkpoints, the newer dedicated rule wins for its scope.

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

The current product logic is explicitly **A -> B -> C**:

1. **A — Tavo pasirinkimai / Your choices**
   - heading: `Kas tave traukė? / What pulled you?`
   - shows repeated cross-exemplar visual themes.
2. **B — Tavo atsakymai / Your answers**
   - heading: `Ko dabar norėtųsi daugiau? / What would you like more of right now?`
   - shows only self-reported areas where the participant selected `<=3`.
3. **C — Svarbiausia / Most important**
   - keeps A and B as context;
   - when a repeated visual family is in focus, asks the participant why they think those particular images attracted them;
   - stores that answer as `selfExplanation`.

A and B are observations. B is **not** assumed to explain A. C is the participant's own post-choice explanation, not PrioLens revealing a hidden cause.

The public promise remains:
> `Pirmas žvilgsnis ir antras atsakymas ne visada rodo tą patį.`

### 1. A — visual choices

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

### 2. B — self-reported areas where more may be wanted

Channel B still stores all twelve item responses and still computes the six broader domains for research use.

Normal participant output is **item-level**, not six-domain-level:
- evaluate the 12 individual Channel B responses independently for display;
- show numeric item responses `<=3` only;
- omit numeric item responses `4–5` from the main result;
- omit `null / Sunku pasakyti / Hard to say` items rather than guessing;
- if no numeric item is `<=3`, show one concise statement that nothing clearly stood out;
- if there are no numeric responses, say that PrioLens does not guess for the participant.

This `<=3` threshold is a **participant-display filter only**. It is not a new research variable, clinical cutoff, Maslow stage or pilot-analysis threshold. Raw item values and six-domain aggregation remain stored exactly as before.

B has a narrower role than before: it tests one plausible account of A, namely whether a mapped area is something the participant currently reports wanting more of. It must not be presented as the cause of the visual choice.

No decimals, bars or technical coverage counts are shown in normal participant mode.

### 3. A/B context in the final card

The final section remains visually dominant and keeps the strongest relevant A/B relationship or mismatch in ordinary language.

Current presentation:
- label: `Svarbiausia / Most important`;
- visually dominant dark reflection card;
- relevant selected images repeated inside the final card when a visual family is in focus;
- one short A/B context sentence.

The A/B comparison uses the item-level `DIRECT / RELATED / NONE` matrix in `OPEN14_RESULT_LINK_MATRIX_v0.1.md`.

Core context scenarios remain:
1. **same area + wants more** — show that both observations point to a related place, without claiming causality;
2. **same area + already feels sufficient** — show the contrast;
3. **different things stand out** — say simply that A and B did not point to the same place;
4. **visual-only** — do not invent a Channel B match;
5. **self-report-only** — reflect on the clearest lower-sufficiency item when no visual family repeats;
6. **quiet result** — do not manufacture a focal point.

Avoid research-language phrases such as:
- `two signals`;
- `broader area`;
- `valid pairing`;
- repeated references to `this session` unless technically necessary.

### 4. C — participant self-explanation

When a repeated visual family is the final focus, the dark card asks:

> **Kaip tau atrodo, kodėl būtent šie vaizdai tave traukė?**

EN:

> **Why do you think these particular images pulled you?**

Current response options are:
- `Norėčiau daugiau to savo gyvenime`;
- `Man tai dabar svarbu`;
- `Primena žmogų ar situaciją`;
- `Patinka tai, ką matau`;
- `Tiesiog patraukė pats vaizdas`;
- `Nežinau`.

After a choice, PrioLens gives one short non-diagnostic reflection. When useful, it uses B as context. Example: if B was high but C is `WANT_MORE`, PrioLens may point out that `pakanka` and `norėčiau daugiau` are not the same thing.

C is saved as optional `selfExplanation` inside the same completed session payload. It is a post-choice self-explanation, not an objective cause and not evidence of subconscious truth.

`DONT_KNOW / Nežinau` is a valid answer. PrioLens must not pressure the participant to manufacture an explanation.

## CARE and asymmetry guardrail

The frozen CARE rule remains unchanged:
- visual CARE = proactive / giving care;
- `CARE_SUPPORT_PRESENT` = care/support present or received;
- no direct CARE <-> CARE_SUPPORT_PRESENT comparison in Open14 v0.2.

A repeated CARE theme may appear with its selected images and can receive C self-explanation, but it has no direct Channel B pair in the item-level result matrix.

Meaning / Contribution items remain self-report-only because they have no active visual counterpart.

## Technical detail boundary

Raw JSON and diagnostics remain debug-only (`?debug=1`).

All underlying values, coverage information, choices, telemetry and optional C response continue to be stored for research analysis. The participant surface is selective; the research payload is not.

## Runtime implementation

Runtime repository:
`olemoz1977/omesg360`

Runtime file:
`priolens/open14-v02/index.html`

Latest A-B-C self-explanation runtime commit:
`0a41dd15c5182c45d791343984c9ecbd5f3b3309`

Deployment / live HTTP smoke:
`33636219024` — SUCCESS.

Verified before/deployment:
- bilingual participant source remains present;
- selected repeated images and `2/3` / `3/3` badges remain present;
- 12-item participant display filter remains present;
- `DIRECT / RELATED` family-item links remain present;
- CARE remains intentionally unmatched;
- C self-explanation UI and six reason codes pass inline JS validation;
- the completed session can be upserted again with optional `selfExplanation` via the existing final API;
- managed runtime was uploaded to Hostinger;
- public HTTP runtime/dependency smoke passed;
- planner / assigner / bank / API health remain reachable;
- historical `/priolens/` boundary remains reachable.

## Recruitment consequence

This result change is pre-pilot product hardening and adds a new formative variable. It is not construct evidence.

External recruitment remains CLOSED until the remaining canonical hardening items are complete and `PILOT_OPENED_AT_UTC` is explicitly recorded.