# PrioLens — RESUME HERE

Status: ACTIVE / CHAT-LOSS-SAFE CHECKPOINT
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Chat history is not the project memory.**

Recovery order:
1. read this file;
2. read `PROJECT_STATE.md`;
3. read `docs/NEW_CHAT_SOURCE_OF_TRUTH_v0.1.md`;
4. continue from `PROJECT_STATE.md > Immediate next action`;
5. use File Library only when an actual artifact is needed;
6. do not ask the user to reconstruct recorded work from memory.

If chat memory conflicts with repo state, repo state wins.

## Latest hard checkpoint

Completed:
- Gallery first-impulse audit: 223 files / 222 byte-unique images;
- historical P3 v0.4 old-bank runtime remains live and is not the new Open14 runtime;
- active architecture = visual priority first + perceived sufficiency second;
- Open14 v0.2 family set established;
- SUCCESS moved to `DERIVED / THEORY-HOLD`;
- BELONGING split from CONNECTION;
- CARE narrowed to altruistic/proactive helping;
- all four missing text mechanisms human-accepted: CARE-A, CARE-B, RECOGNITION-A, RECOGNITION-B;
- RECOGNITION-B is a boundary probe: `mano nuomonė / kompetencija čia vertinama`;
- four production-ready text specs exist, but **no image generation is authorized unless the user explicitly asks**;
- Open14 planner v0.2 browser-safe;
- 2-exemplar / 3-appearance imbalance solved with balanced exemplar assigner;
- exemplar assigner yields 21/21 A/B globally and 7/7 A/B per screen slot;
- family-level repetition requires wins across both A and B exemplars;
- perceived-sufficiency layer advanced to v0.2;
- two-channel result synthesis specified;
- separate Open14 v0.2 runtime scaffold exists in `olemoz1977/omesg360/priolens/open14-v02/` and stays fail-closed;
- first external formative pilot protocol and KEEP/MERGE/SPLIT/DROP rules prepared;
- anonymous data-ingestion contract prepared;
- existing `omesg360` Wave1 PHP+MySQL API was inspected and provides a viable backend pattern for PrioLens;
- recommended pilot backend = reuse existing Hostinger PHP+MySQL infrastructure, not a new Vercel/Supabase project;
- undeployed drafts exist in `olemoz1977/omesg360/priolens/open14-v02/server/`: `api.example.php`, `schema.sql`, `config.example.php`;
- no DB table, endpoint, real credentials or retention change has been deployed.

## Active Open14 v0.2 families

Basic / stability:
REST, RESOURCE, SAFETY, ORDER

Social:
CONNECTION, BELONGING, CARE

Agency / esteem:
AUTONOMY, CONTROL, RECOGNITION

Growth / cognitive / possibility:
MASTERY, EXPLORATION, KNOWLEDGE / Learning-Understanding, OPPORTUNITY

This is a discovery shortlist, not a validated taxonomy.

## Four accepted missing-stimulus mechanisms

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

Visually equal peers actively seek one person's judgement on neutral shared material. No leader, teacher or specialist-status staging.

Main risk: may collapse into MASTERY, CONTROL/leadership, CONNECTION or BELONGING.

Canonical text specs:
`docs/OPEN14_MISSING_STIMULUS_PRODUCTION_SPECS_v0.1.md`.

## Exemplar rule

Each family appears 3 times but has 2 exemplars.

Canonical assigner:
`research/p3_open14_exemplar_assigner_v01.mjs`.

Per session:
- both exemplars shown;
- one shown twice, one once;
- 7 families repeat A, 7 repeat B;
- A/B total = 21/21;
- each slot = 7 A / 7 B.

Primary family repetition requires:
`chosen_A > 0 && chosen_B > 0`.

2/3 concentrated on the same repeated exemplar is **not** primary family-level evidence.

## Two-channel result

Channel A:
- cross-exemplar repeated visual pulls.

Channel B:
- current perceived sufficiency across 6 domains / 12 items.

No combined score.
No strict 1–14 rank.
No `visual pull = unmet need` claim.

Canonical docs:
- `docs/PERCEIVED_SUFFICIENCY_LAYER_v0.2.md`;
- `docs/TWO_CHANNEL_RESULT_SYNTHESIS_SPEC_v0.1.md`.

## Runtime state

Separate Open14 scaffold in `olemoz1977/omesg360`:
- `priolens/open14-v02/index.html`;
- `priolens/open14-v02/bank.json`;
- `priolens/open14-v02/p3_open14_planner_v02.mjs`;
- `priolens/open14-v02/p3_open14_exemplar_assigner_v01.mjs`.

It is intentionally `INCOMPLETE_FAIL_CLOSED`.

Missing real runtime assets:
- CARE-A;
- CARE-B;
- RECOGNITION-A;
- RECOGNITION-B;
- AUTONOMY-B Hostinger runtime path still requires real verification.

Historical live `/priolens/` v0.4 has not been replaced.

## Pilot/backend state

Canonical:
- `docs/OPEN14_EXTERNAL_PILOT_PROTOCOL_v0.1.md`;
- `docs/OPEN14_FAMILY_DECISION_RULES_v0.1.md`;
- `docs/OPEN14_DATA_INGESTION_CONTRACT_v0.1.md`;
- `docs/OPEN14_BACKEND_REUSE_DECISION_NOTE_v0.1.md`.

First external pilot target:
- 24–36 valid completions, ~30 practical target;
- formative stimulus/UX research, not validation.

Recommended backend:
> reuse existing Hostinger PHP + MySQL research infrastructure.

Prepared but not deployed:
- `priolens/open14-v02/server/api.example.php`;
- `priolens/open14-v02/server/schema.sql`;
- `priolens/open14-v02/server/config.example.php`.

Do not launch external recruitment until storage/retention/access are explicitly approved and operational.

## Immediate next action

No further theory/runtime preparation is needed.

Two real user-approval gates remain:
1. **image creation** — only if the user explicitly asks to create the four accepted prototypes;
2. **pilot backend deployment** — recommended Hostinger PHP+MySQL, but requires approval before DB/schema/API deployment and before setting retention/access behavior.

Until one of those is approved:
- keep historical live v0.4 untouched;
- keep Open14 fail-closed;
- do not invent more families/stimuli merely for completeness;
- do not start external recruitment.

## Canonical full state

Read:
`tools/priolens/PROJECT_STATE.md`
