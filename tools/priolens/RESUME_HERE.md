# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 / OWNER ASSET REVIEW COMPLETE / MOBILE UX HARDENED / PRE-PILOT HARDENING
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Chat history is not the project memory.**

Recovery order:
1. read this file;
2. read `PROJECT_STATE.md` for architecture / runtime background;
3. read `docs/OPEN14_MOBILE_ACCESSIBILITY_HARDENING_v0.1.md` as the latest active checkpoint;
4. read `docs/OPEN14_FINAL_ASSET_BANK_v0.1.md` for the finalized active stimulus bank;
5. read older docs / File Library only when needed.

If an older runtime / UX section conflicts with the latest mobile-hardening checkpoint, the latest checkpoint wins.

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

One full mobile owner smoke completed successfully. A later informal lower-vision mobile smoke exposed real discoverability/readability problems; those are now patched and live.

Current runtime includes:
- 14 visual triads;
- 12 post-visual sufficiency items;
- hidden-number 5-step slider UI;
- `Sunku pasakyti = null`;
- local autosave / resume;
- server-side incomplete checkpoints;
- final API upsert using the same `sessionUuid`;
- stale partial protection;
- in-app-browser JSON export hardening;
- mobile readability / unanswered-state hardening.

Production lifecycle smoke passed:
`partial -> final -> stale partial cannot overwrite final`.

Do not use owner or household smoke runs as construct evidence.

### Mobile UX hardening now live

Runtime commit:
`6ed9fd59cf8b715cf99d03427084a9cd38ff722d`

Workflow run:
`33540650020` — SUCCESS.

Changes:
- `Nė vienas aiškiai` moved from a narrow vertical strip to a horizontal 48 px button below the three images;
- trial prompt / counter enlarged;
- sufficiency statements enlarged to 18 px;
- support labels / helper text increased in size and contrast;
- unanswered sliders explicitly show `Neatsakyta`;
- missing answers now receive inline high-contrast validation instead of relying on browser `alert()`.

Related Messenger JSON export runtime commit:
`5e0f8881e93d53e3fac5c22c6f5587e30bc18053`.

## Stimulus bank state

**Owner stimulus remediation is complete.**

Final asset audit:
- 14 families;
- 28 active exemplars;
- 28/28 active binaries reachable;
- 28/28 square;
- no OCR hits for known KlingAI / Gemini / OpenAI watermark text;
- no remaining active REPLACE / SEARCH_REQUIRED / old HOLD blockers.

Final package workflow:
`33518074758` — SUCCESS.

Final bank status:
- `status: PREPILOT_HARDENING`;
- `assetReviewStatus: OWNER_FINALIZED_FINAL_AUDIT_PASS`.

Current technical bank commit:
`2652f3db043f99436dc88afc1188aeb546f0313b`

Latest final replacements:
- CONTROL-A -> industrial joystick;
- BELONGING-B -> three-person shared coffee ritual;
- EXPLORATION-B -> magnifier / unknown forest object;
- OPPORTUNITY-A -> one prepared empty market stall inside an active market.

All four runtime derivatives are 640x640 WebP under:
`/priolens-research-assets/Open14-final-v01/`

Owner-readable bank:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

It reads live `bank.json`; stale hardcoded REST-B / CONNECTION-B watermark flags were removed.

Do not reopen asset generation / replacement work unless a concrete smoke failure or formative data gives a reason.

Latest asset checkpoint:
`docs/OPEN14_FINAL_ASSET_BANK_v0.1.md`

Latest runtime / UX checkpoint:
`docs/OPEN14_MOBILE_ACCESSIBILITY_HARDENING_v0.1.md`

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

## Remaining pre-pilot hardening

1. rerun one short mobile smoke specifically checking the new `Nė vienas aiškiai`, text readability and unanswered-slider validation;
2. fix sufficiency `null` / coverage display so 1/2 answered does not look fully observed;
3. preserve CARE visual-giving vs received-support asymmetry explicitly in result wording / logic;
4. configure and smoke 90-day cleanup cron;
5. only then decide first small external formative pilot.

Target retention remains 90 days, but physical automatic deletion is not fully operational until cron is configured and smoked.

External recruitment remains CLOSED.

## Research guardrail

Current research question:
> **Do cross-exemplar repeated visual pulls show interpretable, non-trivial relationships with independently reported current sufficiency, beyond stimulus-specific salience and chance?**

Do not claim:
- personality diagnosis;
- subconscious / true-self access;
- fast = true;
- RT = psychological strength;
- visual pull = unmet need.

Keep **For Fun with Wisdom**.
