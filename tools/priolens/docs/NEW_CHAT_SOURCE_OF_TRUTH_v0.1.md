# PrioLens new-chat source of truth v0.1

Status: ACTIVE HANDOFF / LIVE OWNER-SMOKE READY
Updated: 2026-09-01

## Why this file exists

PrioLens work spans multiple chats, repos and uploaded artifacts. Conversation history is not the project source of truth.

Past failure modes that must not recur:
1. treating a File Library artifact as missing because it is not attached to the current chat;
2. following an older chat summary after the repo has advanced;
3. forgetting that `olemoz1977/omesg360` already provides the Hostinger/research-runtime repo;
4. restoring the old seven-direction or Open14-v0.1 model after later architecture decisions;
5. treating one repeated exemplar as family-level evidence;
6. generating new stimuli without an explicit user request;
7. confusing historical live `/priolens/` v0.4 with the separate Open14 runtime;
8. claiming 90-day deletion is operational before cleanup cron exists.

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

`SUCCESS / ACHIEVEMENT` remains `DERIVED / THEORY-HOLD`.

## Asset state

Active bank is fully wired:
- 14 families;
- 2 exemplars per family;
- 28 runtime paths;
- 0 missing runtime assets.

New live pilot exemplars:
- CARE-A;
- CARE-B;
- RECOGNITION-A;
- RECOGNITION-B.

AUTONOMY-B backpack is also live and HTTP-smoked.

RECOGNITION-B remains an explicit boundary probe.
KNOWLEDGE-B remains a Learning / Understanding boundary probe.

Canonical active matrix:
`OPEN14_ASSET_MATRIX_v0.3.md`.

Canonical live checkpoint:
`OPEN14_LIVE_RUNTIME_CHECKPOINT_v0.1.md`.

## Planner and exemplar balance

Planner:
`tools/priolens/research/p3_open14_planner_v02.mjs`.

Per session:
- 14 triads;
- every family appears exactly 3 times;
- every family exactly 1/1/1 across screen slots;
- 3 distinct macro domains per triad;
- no repeated family pair;
- 42 unique pair co-occurrences.

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

## Live runtime

Open14 owner-smoke route:
`https://omesg360.eu/priolens-open14-v02/`

Historical P3 v0.4 remains separate and untouched:
`https://omesg360.eu/priolens/`

Open14 source package:
`olemoz1977/omesg360/priolens/open14-v02/`.

Runtime is no longer fail-closed for missing assets.
Current bank status:
`READY_FOR_OWNER_SMOKE`.

Runtime includes automatic API submission after completion, but API failure does not block result rendering or JSON export.

## Backend

Dedicated Hostinger MySQL is live:
- database `u986950573_priolens`;
- table `priolens_open14_sessions`.

API:
`https://omesg360.eu/priolens-open14-api/api.php`

Health:
`https://omesg360.eu/priolens-open14-api/health.php`

Verified:
- DB health;
- production API validation;
- production INSERT path;
- idempotent fixed system-smoke row;
- historical runtime boundary.

Synthetic infrastructure row:
- seed `SYSTEM_SMOKE_DO_NOT_ANALYZE`;
- exclude from all pilot analysis.

## Retention

Approved target: 90 days.

Operational:
- `created_at` stored;
- `expires_at = created_at + 90 DAY` generated/indexed;
- CLI-only `cleanup.php` deployed.

Not yet operational:
- Hostinger cron is not configured.

Therefore automatic physical deletion after 90 days is not yet guaranteed and external recruitment stays closed.

## Pilot preparation

Prepared:
- `OPEN14_EXTERNAL_PILOT_PROTOCOL_v0.1.md`;
- `OPEN14_FAMILY_DECISION_RULES_v0.1.md`;
- `OPEN14_DATA_INGESTION_CONTRACT_v0.1.md`.

First external pilot remains formative:
- target 24–36 valid completions;
- ~30 practical target;
- not validation.

## Immediate next action

**Run exactly one owner smoke session at:**
`https://omesg360.eu/priolens-open14-v02/`

Use it to inspect only:
- mobile layout;
- image loading/cropping;
- flow speed;
- sufficiency burden;
- result readability;
- automatic-save state;
- obvious stimulus anomalies.

Do not repeatedly rerun the owner to tune the owner's personal pattern.

After that:
1. fix clear technical/UX failures only;
2. configure and smoke the 90-day cleanup cron;
3. then decide external formative pilot release.

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
