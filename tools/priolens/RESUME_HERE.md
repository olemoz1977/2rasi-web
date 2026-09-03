# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 LIVE / NEXT-BANK NO-REPEAT 42 TRANSITION ACTIVE / PRE-PILOT HARDENING
Updated: 2026-09-03
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Chat history is not the project memory.**

Recovery order:
1. read this file;
2. read `PROJECT_STATE.md` for architecture / runtime background;
3. read `docs/OPEN14_NO_REPEAT_42_TRANSITION_2026-09-03.md` for the current owner-approved next-bank decision;
4. read `docs/OPEN14_PILOT_COHORT_RULE_v0.1.md` for analysis inclusion/exclusion;
5. read `docs/OPEN14_CARE_ANALYSIS_RULE_v0.1.md` for the frozen CARE boundary;
6. read `docs/OPEN14_BILINGUAL_RUNTIME_v0.1.md` for the bilingual architecture;
7. read `docs/OPEN14_PREPILOT_SMOKE_FINDINGS_2026-09-02.md` for the latest UX / public-routing checkpoint;
8. read `docs/OPEN14_PARTICIPANT_SURFACE_v0.1.md` for the latest participant intro / result presentation rule;
9. read `docs/OPEN14_RETENTION_CRON_v0.1.md` for the verified retention code/DB boundary and remaining hPanel step;
10. read `docs/OPEN14_PARTICIPANT_COMPLETION_v0.1.md`;
11. read `docs/OPEN14_MOBILE_ACCESSIBILITY_HARDENING_v0.1.md`;
12. read `docs/OPEN14_FINAL_ASSET_BANK_v0.1.md` for the finalized currently deployed 28-exemplar bank;
13. read older docs / File Library only when needed.

If older chat or docs conflict with the 2026-09-03 no-repeat transition on **next-bank design**, `OPEN14_NO_REPEAT_42_TRANSITION_2026-09-03.md` wins.

If older runtime / UX sections conflict with the pre-pilot smoke checkpoint, the smoke checkpoint wins. For participant intro / result presentation, `OPEN14_PARTICIPANT_SURFACE_v0.1.md` wins over older participant-completion presentation. The bilingual-runtime checkpoint remains canonical for language architecture.

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

## Two simultaneous bank states — do not confuse them

### 1. Current deployed Open14 v0.2

The public runtime still uses the finalized 14-family × 2-exemplar bank:
- 28 active exemplars;
- 14 visual triads per participant;
- every family appears 3 times;
- with only A/B available, one exemplar is necessarily shown twice and the other once;
- current `bank.json` remains `status: PREPILOT_HARDENING` and `assetReviewStatus: OWNER_FINALIZED_FINAL_AUDIT_PASS`.

Current technical bank commit:
`2652f3db043f99436dc88afc1188aeb546f0313b`

Final derivatives remain under:
`/priolens-research-assets/Open14-final-v01/`

Owner-readable bank:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

Do **not** patch this live v0.2 bank opportunistically while the next bank is incomplete.

### 2. Owner-approved next bank — ACTIVE DESIGN WORK

Canonical decision:
`docs/OPEN14_NO_REPEAT_42_TRANSITION_2026-09-03.md`

Owner decision on 2026-09-03:
- next bank target = 14 families × 3 unique exemplars = 42 unique images;
- each family still appears exactly 3 times in one session;
- A, B and C each appear exactly once for that family;
- no exact-image repeat within a participant session;
- live v0.2 remains unchanged until the 42-bank assets, planner, versioning and smoke pass.

This explicit owner decision supersedes the older blanket wording `do not reopen asset generation / replacement work` **for next-bank design only**. That older guardrail still protects the currently deployed v0.2 bank from ad-hoc mutation.

Working C shortlist currently has 12 practically closed families plus two boundary candidates:
- AUTONOMY-C: clothing choice / self-direction boundary candidate;
- RECOGNITION-C: directed loyalty-award boundary candidate.

Current A/B audit P0 slots to challenge after the C package is assembled:
1. AUTONOMY-B;
2. RECOGNITION-B;
3. REST-A;
4. RESOURCE-B;
5. OPPORTUNITY-B.

P1 watch list:
- CONNECTION-B;
- CARE-A;
- KNOWLEDGE-A;
- EXPLORATION-B.

Critical replacement rule:
**do not use C to replace a weak A/B and then stop.** If A or B clearly loses in A/B/C review, find a fourth D candidate so the family still ends with three strong unique exemplars.

## Runtime state

Current participant runtime still includes:
- 14 visual triads;
- 12 post-visual sufficiency items;
- hidden-number 5-step slider UI;
- `Sunku pasakyti / Hard to say = null`;
- no visible slider thumb until a numeric 1–5 response is actually chosen;
- persistent secondary `Išeiti / Exit` action on all screens;
- local autosave / resume;
- server-side incomplete checkpoints;
- final API upsert using the same `sessionUuid`;
- stale partial protection;
- mobile readability / unanswered-state hardening;
- participant-facing three-part result hierarchy (`Pirmas žvilgsnis / First glance` -> `Antras atsakymas / Second answer` -> `Pažvelk dar kartą / Look again`);
- coverage-aware sufficiency logic with incomplete domains omitted from complete participant interpretation;
- clear repeat and 2rasi return actions;
- raw JSON export and diagnostics hidden from normal participants;
- one bilingual LT/EN runtime selected by `lang=lt|en`;
- `language` stored in new session payloads;
- language-separated local drafts.

Production lifecycle smoke passed:
`partial -> final -> stale partial cannot overwrite final`.

Do not use owner or household smoke runs as construct evidence.

## Recent live checkpoints

### Mobile UX hardening

Runtime commit:
`6ed9fd59cf8b715cf99d03427084a9cd38ff722d`

Workflow run:
`33540650020` — SUCCESS.

### Participant completion

Runtime commit:
`98d4204ebc178288931af0ec3ef1a42693fc8fd2`

Workflow run:
`33542878842` — SUCCESS.

### Bilingual LT/EN runtime

Runtime commit:
`b97c06e876cf2df0b0f3af3d043465d66b2ff845`

Workflow run:
`33544864679` — SUCCESS.

EN persistence lifecycle smoke:
`33613108832` — SUCCESS (`partial -> final -> stale partial blocked`) using `language: "en"` and `SYSTEM_SMOKE_DO_NOT_ANALYZE`.

Routing:
- `?lang=lt&from=lt` -> LT participant UI and return to `2rasi.lt`;
- `?lang=en&from=com` -> EN participant UI and return to `2rasi.com`;
- legacy `from=com` without `lang` infers EN;
- default remains LT.

### Pre-pilot smoke fixes

Runtime fix commit:
`05c6d95a6eccdff102a9244c6aab2e8ea455512d`

Deployment / live-source smoke workflow:
`33620120366` — SUCCESS.

### Participant surface

Canonical checkpoint:
`docs/OPEN14_PARTICIPANT_SURFACE_v0.1.md`

Main runtime commit:
`caa49b0dcb372fc085e79ec15fbd3fce66dd6d12`

Latest combined no-comparison edge commit:
`542f55627cee2f1039dc15c3c91de7eb0770054d`

Latest edge deployment / live-source smoke workflow:
`33622980671` — SUCCESS.

`Open14` is internal-only in normal participant UI; participant-facing product name is `PrioLens`.

### Retention code + live DB ready — scheduler still open

Canonical checkpoint:
`docs/OPEN14_RETENTION_CRON_v0.1.md`

Readiness workflow run:
`33623739323` — SUCCESS.

Verified against production:
- deployed `cleanup.php` exactly matches repo source;
- direct HTTP execution is denied (`403 Forbidden`);
- live DB has generated `expires_at = created_at + 90 DAY`;
- `idx_expires_at` exists;
- `expiryMismatchRows = 0`.

Still OPEN:
- create the Hostinger hPanel PHP cron entry;
- smoke its first real scheduled/manual execution and inspect output.

Until that is done, automatic physical deletion is not guaranteed and participant wording remains `numatyta / intended up to 90 days`.

## CARE boundary frozen

Canonical analysis rule:
`docs/OPEN14_CARE_ANALYSIS_RULE_v0.1.md`

Open14 v0.2 intentionally does **not** compare visual CARE directly with `CARE_SUPPORT_PRESENT`.
Visual CARE = proactive care-giving.
Channel B item = care/support present or received.

Keep both, but do not treat them as equivalent constructs.

## 2rasi entry state

The canonical PrioLens card points to `/tools/priolens/`.

Homepage hook:
- EN: `A first glance and a second answer do not always show the same thing.`
- LT: `Pirmas žvilgsnis ir antras atsakymas ne visada rodo tą patį.`

Prepared routing:
- `2rasi.lt` -> `https://omesg360.eu/priolens-open14-v02/?from=lt&lang=lt`;
- `2rasi.com` -> `https://omesg360.eu/priolens-open14-v02/?from=com&lang=en`.

Public `.com` still needs independent manual re-smoke before claiming PASS.

## Pilot cohort boundary

Canonical inclusion/exclusion rule:
`docs/OPEN14_PILOT_COHORT_RULE_v0.1.md`

Existing owner, household and technical rows do not need destructive deletion to preserve analysis validity.
The first external cohort requires an explicit `PILOT_OPENED_AT_UTC`; only completed rows at/after that cutoff can enter the cohort, and `SYSTEM_SMOKE_DO_NOT_ANALYZE` is always excluded.
Keep `language` as an analysis factor.

External recruitment remains CLOSED.

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

## Active execution queue — 2026-09-03

### Next-bank work

1. Resolve exact source/provenance/runtime-ready asset for all 14 proposed C exemplars.
2. Build the 14-family A/B/C side-by-side audit package.
3. Challenge P0 slots first.
4. Search/select D only for a P0 family where one current A/B clearly loses.
5. Freeze exactly 3 reviewed unique exemplars per family.
6. Patch planner from repeat-A/B logic to one-use A/B/C logic.
7. Bump/version bank + planner identity; do not merge with historical v0.2 observations.
8. Run geometry/reachability/text-watermark/duplicate audit.
9. Run owner mobile visual smoke and runtime no-repeat smoke.

### Existing pre-pilot operations still open

- full LT mobile participant smoke;
- focused EN result smoke;
- public `.lt` and `.com` entry/return manual smoke;
- Hostinger cleanup cron configuration + first output smoke;
- only when recruitment intentionally opens, record `PILOT_OPENED_AT_UTC` before distributing the recruitment link.

## Research question

Current testable question:
> **Do cross-exemplar repeated visual pulls show interpretable, non-trivial relationships with independently reported current sufficiency, beyond stimulus-specific salience and chance?**

Do not claim:
- personality diagnosis;
- subconscious / true-self access;
- fast = true;
- RT = psychological strength;
- visual pull = unmet need.

Keep **For Fun with Wisdom**.
