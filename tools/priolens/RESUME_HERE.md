# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 LIVE / NEXT-BANK NO-REPEAT 42 TRANSITION ACTIVE / PRE-PILOT HARDENING
Updated: 2026-09-03
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Chat history is not project memory. Repo is source of truth.**

Recovery order:
1. this file;
2. `PROJECT_STATE.md` for architecture/runtime background;
3. `docs/OPEN14_NO_REPEAT_42_TRANSITION_2026-09-03.md` for current next-bank decision;
4. `docs/OPEN14_C_PACKAGE_PROVENANCE_2026-09-03.md` for reviewed C binary identities;
5. `docs/OPEN14_ABC_P0_AUDIT_2026-09-03.md` for the latest A/B/C challenge and D-search decisions;
6. `docs/OPEN14_PILOT_COHORT_RULE_v0.1.md`;
7. `docs/OPEN14_CARE_ANALYSIS_RULE_v0.1.md`;
8. `docs/OPEN14_BILINGUAL_RUNTIME_v0.1.md`;
9. participant/UX/retention checkpoints only as needed.

If parent transition/C-package notes conflict with the later P0 audit on a specific family, the later P0 audit wins.

## Product / research boundary

Channel A = low-deliberation comparative visual choice.
Channel B = current perceived sufficiency collected only after Channel A.

Do not claim:
- personality diagnosis;
- subconscious / true-self access;
- fast = true;
- RT = psychological strength;
- visual pull = unmet need;
- one global Maslow/need score;
- validated complete human-priority taxonomy.

Keep `For Fun with Wisdom`.

Active 14 families:
REST, RESOURCE, SAFETY, ORDER, CONNECTION, BELONGING, CARE, AUTONOMY, CONTROL, RECOGNITION, MASTERY, EXPLORATION, KNOWLEDGE/Learning-Understanding, OPPORTUNITY.

`SUCCESS / ACHIEVEMENT` remains `DERIVED / THEORY-HOLD`.

## Two bank states — do not mix them

### Live Open14 v0.2

Unchanged:
- 14 families × 2 exemplars = 28 active images;
- 14 triads;
- each family appears 3 times;
- with only A/B one exact image necessarily repeats;
- family-level repetition requires cross-exemplar evidence, not same-image repetition.

Open14:
`https://omesg360.eu/priolens-open14-v02/`

Owner-readable bank:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

### Owner-approved next bank

Target:
- 14 families × 3 unique exemplars = 42 unique stimuli;
- each family appears exactly 3 times;
- A/B/C each exactly once for that family;
- 0 exact-image repeat within a session;
- live v0.2 stays untouched until final asset, planner, versioning and smoke pass.

Canonical parent:
`docs/OPEN14_NO_REPEAT_42_TRANSITION_2026-09-03.md`

## Current C / A-B-C truth

Reviewed binary provenance:
`docs/OPEN14_C_PACKAGE_PROVENANCE_2026-09-03.md`

Latest P0 audit:
`docs/OPEN14_ABC_P0_AUDIT_2026-09-03.md`

Important current deltas:
- transparent loyalty-award `4965.jpg` = HOLD / not final Recognition C because the award is too difficult to notice at small/mobile size;
- Recognition comparison C = `4967.jpg` teacher/student high-five / directed positive acknowledgement, explicitly BOUNDARY because of learning/mastery context;
- Recognition-B is the first active A/B slot with a current D trigger;
- preferred Recognition-D review candidate = Pexels `7648310`, adult professional holding a large framed certificate; solves transparent-object visibility but carries achievement/certificate/event cross-load;
- REST `4928.jpg` furry-slippers candidate has been **reopened / downgraded to HOLD** because it is too close to the existing home-comfort/footwear mechanism;
- preferred REST-C search direction is an actual restoration/rest action rather than another footwear image; first review candidate = Pexels/Pixabay `269141` person napping under a blanket on a sofa (CC0 on Pexels), with sleep/illness/laziness risk;
- AUTONOMY A/B/C remains intact for now: B is a boundary WATCH, but another generic selection image would reduce mechanism diversity, so D is not triggered yet;
- RESOURCE A/B/C passes the first P0 challenge;
- OPPORTUNITY A/B/C passes the first P0 challenge. Earlier working note that described Opportunity-B as a workbench/tools scene was wrong; canonical live bank says Opportunity-B = blank canvas / `pradėti kurti nuo tuščios drobės`.

## Active A/B challenge queue

P0 first-pass result:
- AUTONOMY-B: boundary WATCH, no D yet;
- RECOGNITION-B: provisional loser, D search active;
- REST-A: not proven loser; REST-C itself reopened for mechanism diversity;
- RESOURCE-B: pass/watch, no D;
- OPPORTUNITY-B: pass, no D.

P1 still to audit:
- `CONNECTION-B`
- `CARE-A`
- `KNOWLEDGE-A`
- `EXPLORATION-B`

Critical replacement rule:
**do not move C into a weak A/B slot and stop.**
If an old A/B clearly loses, find D specifically for that family, compare A/B/C/D and keep three strong unique exemplars.

## Planner target for next bank

Keep 14-triad family schedule if its family-level constraints stay valid.
Replace repeated A/B assignment with:
- A once;
- B once;
- C once;
- 42 total exposures;
- exact-image repeats = 0;
- exemplar×slot assignment balanced/rotated by planner, not DOM order.

Next bank must have a new bank/planner identity so historical v0.2 sessions remain separable.

## CARE boundary

Canonical:
`docs/OPEN14_CARE_ANALYSIS_RULE_v0.1.md`

Visual CARE = proactive care-giving.
`CARE_SUPPORT_PRESENT` = care/support present or received.
Do not directly compare them as equivalent constructs in v0.2.

## Bilingual runtime

One runtime serves LT+EN:
- LT: `?lang=lt&from=lt` → return to `2rasi.lt`;
- EN: `?lang=en&from=com` → return to `2rasi.com`.

`language: lt|en` is persisted and retained for analysis.

## Pilot / recruitment boundary

External recruitment remains **CLOSED**.

Before opening recruitment, record explicit `PILOT_OPENED_AT_UTC`.
Only completed rows at/after that cutoff with the frozen bank/planner/schema combination can enter the external cohort. Always exclude seed `SYSTEM_SMOKE_DO_NOT_ANALYZE` and keep language as an analysis factor.

## Existing operational work still open

- one fresh full LT mobile participant smoke;
- focused EN result smoke;
- public `.lt` and `.com` card → landing → PrioLens → return manual smoke;
- Hostinger 90-day cleanup cron configuration + first output smoke;
- recruitment only after intentional opening and `PILOT_OPENED_AT_UTC`.

## Active next-bank execution queue

1. Owner small-size review of Recognition-D `7648310`.
2. Resolve a non-footwear REST-C; review `269141` first.
3. Continue A/B/C audit through P1 and stable families.
4. Search/select D only where a current A/B clearly loses.
5. Freeze exactly three reviewed unique exemplars per family.
6. Normalize/upload versioned next-bank assets.
7. Patch planner to one-use A/B/C assignment.
8. Bump bank/planner/session metadata so v0.2 observations remain separable.
9. Geometry/reachability/text-watermark/hash/pHash audit.
10. Owner mobile visual smoke.
11. Runtime no-repeat smoke.
12. Only then reconsider external recruitment.

Main pragmatic stimulus question:
> **What does a reasonable viewer see happening within about one second?**

Guardrail:
> **clear enough + engaging > theoretically pure + dead**
