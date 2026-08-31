# PrioLens new-chat source of truth v0.1

Status: ACTIVE HANDOFF / CONTEXT-LOSS GUARD
Updated: 2026-09-01

## Why this file exists

PrioLens work spans multiple chats, repos and uploaded artifacts. Conversation history is not the project source of truth.

Past failure modes that must not recur:
1. treating a File Library artifact as missing because it is not attached to the current chat;
2. following an older chat summary after the repo has advanced;
3. forgetting that `olemoz1977/omesg360` already provides the Hostinger/research-runtime repo;
4. restoring the old seven-direction or Open14-v0.1 model after later architecture decisions;
5. treating one repeated exemplar as family-level evidence;
6. generating new stimuli without an explicit user request.

## Startup order for every new PrioLens chat

1. Read `tools/priolens/RESUME_HERE.md`.
2. Read `tools/priolens/PROJECT_STATE.md`.
3. Continue from `PROJECT_STATE.md > Immediate next action`.
4. Open only the specific canonical docs needed for the task.
5. Search File Library only when an actual historical/runtime artifact is needed.

If chat memory conflicts with repo state, **repo state wins**.

## Current architecture

PrioLens uses two separate channels:

### A — revealed visual priority
Low-deliberation comparative image choice without need labels.

### B — current perceived sufficiency
12 short self-ratings across six broad domains, shown only after the visual task.

Do not collapse the channels into one score.
Do not assign one global Maslow stage.
Do not claim visual pull = unmet need.

Canonical docs:
- `NEED_STATE_AND_IMPULSE_PRIORITY_ARCHITECTURE_v0.1.md`;
- `PERCEIVED_SUFFICIENCY_LAYER_v0.2.md`;
- `TWO_CHANNEL_RESULT_SYNTHESIS_SPEC_v0.1.md`.

## Active Open14 v0.2 family set

Basic / stability:
- REST
- RESOURCE
- SAFETY
- ORDER

Social:
- CONNECTION
- BELONGING
- CARE

Agency / esteem:
- AUTONOMY
- CONTROL
- RECOGNITION

Growth / cognitive / possibility:
- MASTERY
- EXPLORATION
- KNOWLEDGE / Learning-Understanding
- OPPORTUNITY

This is a discovery shortlist, not a validated taxonomy.

`SUCCESS / ACHIEVEMENT` is no longer an active atomic visual family.
Status: `DERIVED / THEORY-HOLD`.

## Four accepted missing-stimulus mechanisms

All four text mechanisms have passed the human gate.

### CARE-A
`pasirūpinti kitu savo komforto sąskaita`

One person shifts the only umbrella toward another and accepts modest exposure to rain.

### CARE-B
`pastebėti ir padėti neprašytam`

One person starts helping gather another person's dropped everyday items before any visible request.

### RECOGNITION-A
`būti pastebėtam ir įvertintam kitų`

Small peer group gives restrained applause, natural smiles and one or more thumbs-up gestures toward one ordinary focal person.

### RECOGNITION-B — boundary probe
`mano nuomonė / kompetencija čia vertinama`

Visually equal peers actively seek one person's judgement on neutral shared material. No leader, teacher or specialist-status cues.

Main risk: RECOGNITION-B may collapse into MASTERY, CONTROL/leadership, CONNECTION or BELONGING.

Canonical production constraints:
`OPEN14_MISSING_STIMULUS_PRODUCTION_SPECS_v0.1.md`.

**Do not generate any image unless the user explicitly asks.**

## Active asset state

Existing/recovered assets cover 12 of 14 families.

Still missing as real image assets:
- CARE-A;
- CARE-B;
- RECOGNITION-A;
- RECOGNITION-B.

AUT-B backpack exists in `olemoz1977/omesg360/priolens/recovered-assets/priolens_aut_backpack_v01.webp`, but its intended Hostinger URL must not be treated as live until a real smoke check verifies it.

Canonical matrix:
`OPEN14_ASSET_MATRIX_v0.2.md`.

## Planner and exemplar balance

Planner:
`tools/priolens/research/p3_open14_planner_v02.mjs`.

Per session:
- 14 triads;
- every family appears exactly 3 times;
- every family exactly 1/1/1 across screen slots;
- 3 distinct macro domains per triad;
- no repeated family pair;
- 42 unique pair co-occurrences;
- 6 unique opponents per family.

Exemplar assigner:
`tools/priolens/research/p3_open14_exemplar_assigner_v01.mjs`.

Because each family has 2 exemplars but 3 appearances:
- both exemplars are always shown;
- one appears twice and one once;
- 7 families repeat A / 7 repeat B;
- overall A/B exposure = 21/21;
- each screen slot = 7 A / 7 B.

Primary family-level repetition requires:
`chosen_A > 0 && chosen_B > 0`.

2/3 choices concentrated on the same repeated exemplar are exemplar-specific, not primary family-level evidence.

## Runtime

Separate Open14 source scaffold exists in `olemoz1977/omesg360/priolens/open14-v02/`:
- `index.html`;
- `bank.json`;
- `p3_open14_planner_v02.mjs`;
- `p3_open14_exemplar_assigner_v01.mjs`.

It is intentionally fail-closed while runtime paths are missing.

Historical live `omesg360.eu/priolens/` v0.4 has not been replaced.

## Pilot preparation

Prepared:
- `OPEN14_EXTERNAL_PILOT_PROTOCOL_v0.1.md`;
- `OPEN14_FAMILY_DECISION_RULES_v0.1.md`;
- `OPEN14_DATA_INGESTION_CONTRACT_v0.1.md`.

First external pilot is formative, target roughly 24–36 valid completions (~30 practical target), not validation.

Do not start external recruitment until:
- missing accepted images exist and pass pragmatic first-read review;
- Open14 runtime is complete and technically smoked;
- anonymous data ingestion is selected, deployed and privacy/retention behavior is explicit.

## Active guardrails

- **For Fun with Wisdom** remains canonical phrase.
- no sterile-image optimization for its own sake;
- no forced family count;
- no theory-first rationalization of images;
- no direct neural-system inference;
- no Karpman role diagnosis;
- no strict 1–14 rank;
- no RT-as-psychological-strength claim;
- preserve exact exemplar identity;
- expose uncertainty rather than manufacture completeness.

## Immediate next action

Read `PROJECT_STATE.md`.

Two external-action gates remain:
1. image creation, only after explicit user request;
2. pilot backend deployment, only after explicit approval if it creates a new service/project or changes data-retention behavior.
