# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 / OWNER SMOKE COMPLETE / GEOMETRY NORMALIZATION NEXT
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Chat history is not the project memory.**

Recovery order:
1. read this file;
2. read `PROJECT_STATE.md`;
3. read `docs/OPEN14_OWNER_SMOKE_AND_RUNTIME_HARDENING_v0.1.md`;
4. read `docs/NEW_CHAT_SOURCE_OF_TRUTH_v0.1.md` only for older architectural background;
5. continue from the immediate next action below;
6. open File Library only when an actual historical/runtime artifact is needed.

If chat memory conflicts with repo state, repo state wins.

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

## Asset / planner state

Open14 bank:
- 14 families;
- 2 exemplars per family;
- 28 runtime asset paths;
- exemplar identity retained;
- 14 triads per session;
- each family appears 3 times;
- each family 1/1/1 across slots;
- no repeated family pair;
- A/B exposure balanced 21/21.

Primary family repetition still requires:
`chosen_A > 0 && chosen_B > 0`.

CARE-A, CARE-B, RECOGNITION-A and RECOGNITION-B are retained for pilot research.
RECOGNITION-B remains a boundary probe.

## Owner smoke status

One full mobile owner smoke has been completed.

Technical outcome:
- all 14 visual trials completed;
- all 6 sufficiency screens completed;
- final API submission succeeded;
- planner / exemplar invariants held;
- no-clear count was 0;
- visual-choice median RT in this owner run was 4332.5 ms.

Do not use this one owner run as construct evidence.

The owner smoke exposed a real geometry confound: some active assets are portrait / 9:16 and therefore occupy materially less visible area than square images in the same mobile slot.

## Autosave / resume now live

The old statement that sessions are saved only after `finish()` is obsolete.

Current runtime now:
- saves a local checkpoint after every visual choice;
- saves after every perceived-sufficiency response;
- resumes an incomplete session in the same browser/device;
- offers `Tęsti sesiją` or `Pradėti naują`;
- stores incomplete server checkpoints through `/priolens-open14-api/progress.php`;
- finalizes the same `sessionUuid` through the final API;
- prevents stale partial checkpoints from overwriting a completed row.

Production lifecycle smoke passed:
`partial -> final -> stale partial cannot overwrite final`.

## Sufficiency UI now

Visible 1–5 buttons are replaced by a discrete 5-step slider.

Participant sees:
- `Labai trūksta` on the left;
- `Pakanka` on the right;
- separate `Sunku pasakyti` button.

Internal values remain 1–5; `Sunku pasakyti` remains `null`.

## Live routes

Open14 runtime:
`https://omesg360.eu/priolens-open14-v02/`

Historical P3 v0.4 remains separate:
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

**Normalize active stimulus geometry before external recruitment.**

Sequence:
1. finish actual-dimensions audit of all 28 current runtime assets;
2. identify every non-square active exemplar;
3. create reviewed 1:1 derivatives without stretching and without simply padding portrait images inside square canvases;
4. preserve the original first-glance meaning during crop/reframe;
5. switch `bank.json` only after derivative review;
6. smoke mobile geometry again;
7. fix `null` / coverage display in sufficiency domain results;
8. keep visual CARE vs received-support self-report asymmetry explicit;
9. configure and smoke 90-day cleanup cron;
10. only then decide first external formative mini-pilot.

Do not repeatedly rerun the owner to tune a personal result.
Do not recruit externally yet.

Canonical latest checkpoint:
`docs/OPEN14_OWNER_SMOKE_AND_RUNTIME_HARDENING_v0.1.md`.

Canonical full state:
`tools/priolens/PROJECT_STATE.md`.
