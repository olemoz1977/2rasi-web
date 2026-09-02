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

Successful deployment / live smoke:
`33677798846` — SUCCESS.

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

A strong positive or negative participant-facing repetition requires:
- at least 2 of 3 appearances in that direction;
- both family exemplars represented.

## Result hierarchy

Participant-like result:
1. `Kas tave traukė?`
2. `Kas liko antrame plane?`
3. `Kaip pats vertini dabar?`
4. `Ką verta pastebėti`

The owner balance table is hidden inside an optional diagnostic disclosure. `balance = most - least` remains session telemetry only, not a psychological score.

## Channel B display rule

The 1-5 scale is not collapsed into a binary deficit label.

For result presentation:
- 1-2 = lower sufficiency;
- 3 = `Per vidurį` and must not be rewritten as `norėtųsi daugiau`;
- 4-5 = higher sufficiency;
- null / `Sunku pasakyti` = no comparison.

The result surface shows 1-3 responses as context, preserving the distinction between 1-2 and 3.

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

Unmatched Channel B areas remain:
- `MEANING_PURPOSE`;
- `CONTRIBUTION`.

Do not invent visual equivalents for them merely to make the matrix symmetrical.

CARE remains intentionally unmatched because visual CARE is proactive / giving care while `CARE_SUPPORT_PRESENT` mainly concerns care/support present or received.

## Reflection matrix

Only valid DIRECT / RELATED pairs may create a visual-vs-self-report reflection.

| Self-report state | Repeated MOST | Repeated LEAST |
| --- | --- | --- |
| 1-2 lower sufficiency | possible alignment | potentially interesting contrast |
| 3 middle | context only | context only |
| 4-5 higher sufficiency | pull despite sufficiency | sufficient + visually backgrounded |
| null | no comparison | no comparison |
| NONE mapping | no comparison | no comparison |

RELATED pairs must explicitly use softer language and must never be presented as identical constructs.

If no useful mapped pair exists, the final reflection falls back to the visual `most vs least` pattern without manufacturing a Channel B relationship.

## Product language rule

Keep language simple enough to understand without research terminology.

Preferred result headings:
- `Kas tave traukė?`
- `Kas liko antrame plane?`
- `Kaip pats vertini dabar?`
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
4. bidirectional `most / least` adds useful information beyond positive pull alone.

If this gate passes, the protocol must be formally versioned for backend/pilot use before replacing the public Open14 v0.2 route.

If the gate does not pass, keep public Open14 v0.2 and retire or narrow the rank experiment.
