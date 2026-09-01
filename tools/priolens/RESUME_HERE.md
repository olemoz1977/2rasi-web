# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 / OWNER SMOKE COMPLETE / STIMULUS BANK REMEDIATION
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Chat history is not the project memory.**

Recovery order:
1. read this file;
2. read `PROJECT_STATE.md` for architecture / runtime background;
3. read `docs/OPEN14_REMEDIATION_BATCH_V01_v0.1.md` as the latest active checkpoint;
4. read `docs/OPEN14_STIMULUS_BANK_OWNER_REVIEW_v0.1.md` only for the preceding candidate-review history;
5. open older docs / File Library only when needed.

If an older asset-state section conflicts with the latest remediation checkpoint, the latest remediation checkpoint wins.

## Current architecture

Channel A = low-deliberation comparative visual priority.
Channel B = current perceived sufficiency collected only after the visual task.

No combined psychological score.
No global Maslow stage.
No `visual pull = unmet need` claim.

Active Open14 v0.2 families:
- BASIC: REST, RESOURCE, SAFETY, ORDER;
- SOCIAL: CONNECTION, BELONGING, CARE;
- AGENCY / ESTEEM: AUTONOMY, CONTROL, RECOGNITION;
- GROWTH / COGNITIVE / POSSIBILITY: MASTERY, EXPLORATION, KNOWLEDGE / Learning-Understanding, OPPORTUNITY.

`SUCCESS / ACHIEVEMENT` remains `DERIVED / THEORY-HOLD`.

## Runtime state

One full mobile owner smoke completed successfully.

Current runtime includes:
- 14 visual triads;
- 12 post-visual sufficiency items;
- hidden-number 5-step slider UI;
- `Sunku pasakyti = null`;
- local autosave / resume;
- server-side incomplete checkpoints;
- final API upsert using the same `sessionUuid`;
- stale partial protection.

Production lifecycle smoke passed:
`partial -> final -> stale partial cannot overwrite final`.

Do not use the one owner run as construct evidence.

## Stimulus bank state

Dimensions audit is complete. Geometry normalization moved into semantic / visual remediation.

Resolved and live in the current bank:
- SAFETY-B -> clean `Gallery/S13.webp`; 520x520; pHash distance 0 from old file; no watermark keyword detected;
- AUTONOMY-A -> `Gallery/file_00000000cc8c81f4a927534c8316290c.png`; 1254x1254; working read `pasirinkti savo kryptį`.

Human-review package is live:
`https://omesg360.eu/priolens-remediation-review-v01/`

It contains:
- REST-A slippers candidate: top / center / bottom 1:1 crops;
- KNOWLEDGE-A library candidate: top / center / bottom 1:1 crops;
- CONNECTION-A watermark cleanup: small / medium mask variants;
- CONNECTION-B watermark cleanup: small / medium mask variants.

Still unresolved after that review:
- REST-B: replacement search;
- ORDER-A: replacement search, preferred tool shadow-board direction;
- ORDER-B: replacement search, preferred marked-space / assigned-zone direction;
- CONTROL-A: direct credible control mechanism still search;
- KNOWLEDGE-B: clearer active learning / understanding scene still search;
- BELONGING-B: HOLD due asymmetric warmth cue;
- OPPORTUNITY-A: HOLD / search clearer immediate-opportunity cue.

CARE-A/B remain accepted.
RECOGNITION-A remains accepted.
RECOGNITION-B remains accepted as boundary probe.
RESOURCE-A/B, MASTERY-A/B and EXPLORATION-A/B currently pass.

Technical active bank:
`olemoz1977/omesg360/priolens/open14-v02/bank.json`

Owner-readable bank:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

Latest formal checkpoint:
`docs/OPEN14_REMEDIATION_BATCH_V01_v0.1.md`

## Live routes

Open14 runtime:
`https://omesg360.eu/priolens-open14-v02/`

Historical P3 v0.4:
`https://omesg360.eu/priolens/`

Final API:
`https://omesg360.eu/priolens-open14-api/api.php`

Progress API:
`https://omesg360.eu/priolens-open14-api/progress.php`

Health:
`https://omesg360.eu/priolens-open14-api/health.php`

## Retention

Target: 90 days.

Already present:
- `created_at`;
- generated/indexed `expires_at = created_at + 90 DAY`;
- CLI-only cleanup script.

Still missing:
- Hostinger cron has not yet been configured / smoked.

Do not claim fully operational automatic deletion yet.

## Immediate next action

**Get the four human decisions from the remediation review page before changing those four runtime paths.**

Owner should return:
1. REST-A = top / center / bottom;
2. KNOWLEDGE-A = top / center / bottom;
3. CONNECTION-A = small / medium / reject cleanup;
4. CONNECTION-B = small / medium / reject cleanup.

Then:
1. switch accepted REST-A / KNOWLEDGE-A / CONNECTION derivatives into `bank.json`;
2. continue replacement search for REST-B, ORDER-A, ORDER-B, CONTROL-A and KNOWLEDGE-B;
3. review BELONGING-B and OPPORTUNITY-A;
4. run final 28/28 geometry + watermark + semantic + reachability audit;
5. run one final mobile visual smoke;
6. fix sufficiency `null` / coverage display;
7. preserve CARE visual-vs-received-support asymmetry explicitly;
8. configure and smoke 90-day cleanup cron;
9. only then decide first external formative mini-pilot.

Do not repeatedly rerun the owner to tune a personal result.
Do not recruit externally yet.
