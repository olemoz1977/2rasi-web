# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 / LIVE OWNER-SMOKE READY
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
5. open File Library only when an actual historical/runtime artifact is needed.

If chat memory conflicts with repo state, repo state wins.

## Current hard checkpoint

Architecture:
- Channel A = low-deliberation comparative visual priority;
- Channel B = current perceived sufficiency, collected only after the visual task;
- no combined psychological score;
- no global Maslow stage;
- no `visual pull = unmet need` claim.

Active Open14 v0.2 families:
- BASIC: REST, RESOURCE, SAFETY, ORDER;
- SOCIAL: CONNECTION, BELONGING, CARE;
- AGENCY / ESTEEM: AUTONOMY, CONTROL, RECOGNITION;
- GROWTH / COGNITIVE / POSSIBILITY: MASTERY, EXPLORATION, KNOWLEDGE / Learning-Understanding, OPPORTUNITY.

`SUCCESS / ACHIEVEMENT` remains `DERIVED / THEORY-HOLD`, not an active atomic visual family.

## Asset state

Open14 bank is now fully wired:
- 14 families;
- 2 exemplars per family;
- 28 runtime asset paths;
- 0 missing runtime paths.

New human-accepted pilot assets are live:
- CARE-A;
- CARE-B;
- RECOGNITION-A;
- RECOGNITION-B.

RECOGNITION-B remains a deliberate boundary probe.

AUTONOMY-B backpack runtime path is live and HTTP-smoked.

Canonical active matrix:
`docs/OPEN14_ASSET_MATRIX_v0.3.md`.

## Planner / exemplar rule

Canonical planner:
`research/p3_open14_planner_v02.mjs`.

Per session:
- 14 triads;
- each family appears 3 times;
- each family 1/1/1 across positions;
- 3 distinct macro domains per triad;
- no repeated family pair;
- 42 unique pair co-occurrences.

Canonical exemplar assigner:
`research/p3_open14_exemplar_assigner_v01.mjs`.

Because 2 exemplars are shown across 3 family appearances:
- both exemplars appear;
- one appears twice, one once;
- 7 families repeat A, 7 repeat B;
- total A/B = 21/21;
- each screen slot = 7 A / 7 B.

Primary family-level repetition requires:
`chosen_A > 0 && chosen_B > 0`.

A repeated win on only one exemplar is exemplar-specific, not primary family-level evidence.

## Live runtime

Open14 owner-smoke runtime:
`https://omesg360.eu/priolens-open14-v02/`

Historical P3 v0.4 remains separate and untouched:
`https://omesg360.eu/priolens/`

Open14 bank status:
`READY_FOR_OWNER_SMOKE`.

Runtime includes:
- 14 visual triads;
- `no_clear_choice`;
- RT as process telemetry only;
- exact exemplar identity;
- 12 sufficiency items after visual choices;
- cross-exemplar result logic;
- JSON export;
- automatic pilot API submission;
- API failure fallback that still shows the result and keeps JSON export available.

Canonical checkpoint:
`docs/OPEN14_LIVE_RUNTIME_CHECKPOINT_v0.1.md`.

## Backend state

Dedicated Hostinger MySQL:
- DB: `u986950573_priolens`;
- table: `priolens_open14_sessions`.

Live API:
`https://omesg360.eu/priolens-open14-api/api.php`

Health:
`https://omesg360.eu/priolens-open14-api/health.php`

Server-only `config.php` exists and is not committed.

Verified:
- DB health;
- production API validation;
- production INSERT path;
- idempotent retry behavior;
- isolated runtime deploy;
- pilot asset HTTP reachability;
- historical `/priolens/` boundary.

Synthetic infrastructure row:
- seed `SYSTEM_SMOKE_DO_NOT_ANALYZE`;
- exclude from all pilot analysis.

## Retention

Approved target: 90 days.

Already present:
- `created_at`;
- generated/indexed `expires_at = created_at + 90 DAY`;
- CLI-only `cleanup.php` deployed.

Still missing:
- Hostinger cron is **not yet configured**.

Therefore do not claim automatic 90-day deletion is fully operational yet.

## External pilot

Prepared formative protocol target:
- 24–36 valid completions;
- ~30 practical target;
- stimulus/UX/family-boundary research, not validation.

Do not recruit yet.

## Immediate next action

**One owner smoke session in the live Open14 runtime.**

Use it only to check:
- mobile geometry;
- image loading/cropping;
- whether 14 triads still feel fast/game-like;
- sufficiency burden;
- result readability;
- visible automatic-save success/failure;
- obvious stimulus anomalies.

Do not repeatedly rerun the owner to tune a personal result.

After the owner smoke:
1. fix only clear technical/UX failures;
2. configure and smoke the 90-day cleanup cron;
3. then decide first external formative pilot release.

## Canonical full state

Read:
`tools/priolens/PROJECT_STATE.md`
