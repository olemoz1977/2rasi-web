# PrioLens bidirectional rank prototype v0.2

Status: ACTIVE OWNER-ONLY PROTOTYPE / DOES NOT SUPERSEDE OPEN14 v0.2
Date: 2026-09-02

## Purpose

Test whether a bidirectional visual choice produces a more useful participant experience before any public 2rasi routing is changed.

The prototype asks two visual questions in each existing Open14 triad:
1. which image pulls first;
2. which of the two remaining images pulls least.

It then compares repeated positive / negative visual directions with the existing 12-item current-perceived-sufficiency layer only where a pre-declared construct link permits comparison.

## Isolation boundary

This prototype does not change:
- `2rasi.lt` or `2rasi.com`;
- the public PrioLens card or landing;
- `/priolens-open14-v02/`;
- the Open14 v0.2 API or database;
- the external pilot cohort rule;
- the CARE analysis boundary;
- external recruitment status.

External recruitment remains CLOSED.

## Runtime

Repository: `olemoz1977/omesg360`

Source:
`priolens/open14-rank-v02/index.html`

Live URL:
`https://omesg360.eu/priolens-open14-rank-v02/`

Session storage:
- browser localStorage only;
- schema `2rasi.priolens.open14.rank-session-v0.2`;
- no backend submission.

Deploy workflow:
`.github/workflows/deploy-priolens-open14-rank-v02.yml`

Initial successful deployment / live smoke:
`33677798846` — SUCCESS.

Conditional-Channel-B result deployment / live smoke:
`33681484938` — SUCCESS.

Direction-aware self-reflection deployment / live smoke:
`33684823997` — SUCCESS.

An immediately preceding deploy run `33677194302` failed only because Hostinger FTP connectivity hit `max-retries`; source validation had passed. A fresh runner then uploaded and live-smoked successfully.

## Shared visual design

No stimulus work is reopened.

The prototype reuses:
- the finalized 14-family / 28-exemplar Open14 v0.2 bank;
- the same 14x3 planner;
- the same exemplar assigner;
- the same 14 triads;
- the same 12 sufficiency items.

No new images were generated, edited or substituted.

## Visual interaction

For each triad:
1. `Kuris pirmas patraukia?`
2. after the first selection is fixed, `O kuris iš likusių traukia mažiausiai?`
3. `Abu likę panašiai` remains valid for the least-choice step;
4. `Nė vienas aiškiai` remains valid for the first-pull step.

A positive or negative participant-facing repetition currently requires:
- at least 2 of 3 appearances in that direction;
- both family exemplars represented.

The owner is separately evaluating whether 3/3 should carry stronger participant-facing weight than 2/3. Do not silently change the repetition threshold without a new checkpoint.

## Result hierarchy

Participant-like result now has three visible layers:
1. `Kas tave traukė?`
2. `Kas liko antrame plane?`
3. `Ką verta pastebėti`

There is no standalone `Kaip pats vertini dabar?` recap section.

Channel B answers are not repeated merely because the participant just entered them. They appear only inside the final reflection when they add interpretive value under the frozen matrix rule.

The owner balance table is hidden inside an optional diagnostic disclosure. `balance = most - least` remains session telemetry only, not a psychological score.

## Channel B display rule

The 1-5 scale is not collapsed into a binary deficit label.

For result logic:
- 1-2 = lower sufficiency;
- 3 = middle / neutral context and must not be rewritten as `norėtųsi daugiau`;
- 4-5 = higher sufficiency;
- null / `Sunku pasakyti` = no comparison.

Participant-facing rule:
- do not show 3 merely as a recap;
- do not show 4-5 merely as a recap;
- use 1-2 or 4-5 only when a valid DIRECT / RELATED visual pair creates an alignment or contrast worth reflecting on;
- if an unmatched Channel B item is 1-2, it may appear as a short contextual note, explicitly stating that no direct visual pair exists;
- unmatched 3, 4-5 and null stay out of the normal result.

## Result link matrix

Use the same family-to-item discipline as `OPEN14_RESULT_LINK_MATRIX_v0.1.md`, now in both visual directions.

| Visual family | Channel B item | Link |
| --- | --- | --- |
| REST | RESTORATION_ENERGY | DIRECT |
| RESOURCE | MATERIAL_RESOURCES | DIRECT |
| SAFETY | SAFETY_STABILITY | DIRECT |
| ORDER | CLARITY_PREDICTABILITY | DIRECT |
| CONNECTION | CONNECTION_BELONGING | RELATED |
| BELONGING | CONNECTION_BELONGING | DIRECT |
| CARE | none | NONE |
| AUTONOMY | AUTONOMY_AGENCY | DIRECT |
| CONTROL | AUTONOMY_AGENCY | RELATED |
| RECOGNITION | RECOGNITION_ESTEEM | DIRECT |
| MASTERY | CAPABILITY_MASTERY | DIRECT |
| EXPLORATION | LEARNING_GROWTH | RELATED |
| KNOWLEDGE | LEARNING_GROWTH | DIRECT |
| OPPORTUNITY | LEARNING_GROWTH | RELATED |

Unmatched Channel B items include:
- `CARE_SUPPORT_PRESENT` for direct visual comparison purposes;
- `MEANING_PURPOSE`;
- `CONTRIBUTION`.

Do not invent visual equivalents for them merely to make the matrix symmetrical.

CARE remains intentionally unmatched because visual CARE is proactive / giving care while `CARE_SUPPORT_PRESENT` mainly concerns care/support present or received.

## Reflection matrix

Only valid DIRECT / RELATED pairs may create a visual-vs-self-report reflection.

| Self-report state | Repeated MOST | Repeated LEAST |
| --- | --- | --- |
| 1-2 lower sufficiency | possible alignment | potentially interesting contrast |
| 3 middle | no participant comparison by default | no participant comparison by default |
| 4-5 higher sufficiency | pull despite sufficiency | sufficient + visually backgrounded |
| null | no comparison | no comparison |
| NONE mapping | no comparison | no comparison |

RELATED pairs must explicitly use softer language and must never be presented as identical constructs.

If no useful mapped pair exists, the final reflection falls back to the visual `most vs least` pattern without manufacturing a Channel B relationship. A clearly low unmatched Channel B item may be mentioned only as separate context with an explicit `no direct visual pair` statement.

## Channel C: participant self-explanation

The final reflection is not complete when the interface only asks an open question. The prototype now lets the participant answer the reflection, following the original Open14 self-explanation pattern but adapting it to the direction of the visual result.

C is participant self-explanation, not a new measurement channel and not proof of why the visual choice occurred.

For a repeated MOST focus, keep the original positive-direction options:
- `Norėčiau daugiau to savo gyvenime`;
- `Man tai dabar svarbu`;
- `Primena žmogų ar situaciją`;
- `Patinka tai, ką matau`;
- `Tiesiog patraukė pats vaizdas`;
- `Nežinau`.

For a repeated LEAST focus, use a distinct neutral mirrored set rather than asking why the images attracted the participant:
- `Man tai dabar mažiau aktualu`;
- `Jaučiu, kad šito man pakanka`;
- `Primena žmogų ar situaciją`;
- `Nepatinka tai, ką matau`;
- `Tiesiog pats vaizdas traukė mažiau`;
- `Nežinau`.

For a mixed visual result without one defensible focus family, use only a lightweight recognition response:
- `Taip, atpažįstu`;
- `Nelabai`;
- `Nežinau`.

When one focus family exists, show the relevant selected family exemplars again above the self-explanation question.

Owner-prototype storage:
- `state.selfExplanation` inside the rank session;
- schema `2rasi.priolens.rank-self-explanation-v0.1`;
- localStorage only;
- no backend submission.

C must not:
- retroactively change MOST / LEAST counts;
- alter Channel B sufficiency values;
- validate a DIRECT or RELATED mapping;
- be described as revealing a subconscious cause, true need or hidden priority.

C exists to let the participant say what the result means, if anything, rather than having PrioLens answer that question for them.

## Product language rule

Keep language simple enough to understand without research terminology.

Preferred result headings:
- `Kas tave traukė?`
- `Kas liko antrame plane?`
- `Ką verta pastebėti`

Do not use participant-facing language such as:
- two signals;
- wider domain;
- Maslow level;
- subconscious need;
- true priority.

## Gate before 2rasi integration

Do not change public routing unless owner / small household UX probes support all of the following:
1. the least-choice step feels natural enough and not artificially forced;
2. the result is understandable without researcher explanation;
3. the final question clearly follows from the participant's own choices;
4. bidirectional `most / least` adds useful information beyond positive pull alone;
5. the participant self-explanation step feels like a natural completion of the reflection rather than a forced rationalization.

If this gate passes, the protocol must be formally versioned for backend/pilot use before replacing the public Open14 v0.2 route.

If the gate does not pass, keep public Open14 v0.2 and retire or narrow the rank experiment.
