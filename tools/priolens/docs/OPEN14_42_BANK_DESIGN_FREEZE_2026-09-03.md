# PrioLens Open14 42-bank design freeze

Status: CANONICAL DESIGN FREEZE / 14×3 RESOLVED / LIVE v0.2 UNCHANGED / RUNTIME PACKAGE NOT YET BUILT
Date: 2026-09-03
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

Parents:
- `OPEN14_NO_REPEAT_42_TRANSITION_2026-09-03.md`
- `OPEN14_C_PACKAGE_PROVENANCE_2026-09-03.md`
- `OPEN14_ABC_FULL_AUDIT_2026-09-03.md`
- `OPEN14_RECOGNITION_D_OWNER_FREEZE_2026-09-03.md`
- `OPEN14_REST_C_OWNER_FREEZE_2026-09-03.md`

## Decision

The next-bank design is now frozen at:
- 14 active families;
- exactly 3 reviewed unique exemplars per family;
- 42 active visual stimuli total;
- each family appears exactly 3 times in a session;
- one distinct family exemplar per occurrence;
- exact-image repeats = 0 within a session.

This is a **design freeze only**. It does not authorize mutation of the live Open14 v0.2 bank until the runtime package, planner/version boundary and smoke pass.

## Canonical next-bank exemplar IDs

Runtime should not rely on legacy A/B/C letter semantics. Use stable family-local IDs `01/02/03`.

| Family | Next ID 01 | Next ID 02 | Next ID 03 | Note |
| --- | --- | --- | --- | --- |
| REST | current live REST-A | current live REST-B | owner `4971.jpg` / Pexels `269141` | 03 = actual rest under blanket; slippers `4928` excluded |
| RESOURCE | current live RESOURCE-A | current live RESOURCE-B | `4957.jpg` | prepared usable materials |
| SAFETY | current live SAFETY-A | current live SAFETY-B | `4945.jpg` | fastening seat belt |
| ORDER | current live ORDER-A | current live ORDER-B | `4958.jpg` | organized drawer |
| CONNECTION | current live CONNECTION-A | current live CONNECTION-B | `4932.jpg` | direct dyadic conversation |
| BELONGING | current live BELONGING-A | current live BELONGING-B | `4947.jpg` | shared gaming activity |
| CARE | current live CARE-A | current live CARE-B | `4964.jpg` | adult tying child's shoe; proactive care-giving |
| AUTONOMY | current live AUTONOMY-A | current live AUTONOMY-B | `4966.jpg` | garment choice; B/03 remain boundary but accepted |
| CONTROL | current live CONTROL-A | current live CONTROL-B | `4936.jpg` | direct mixing/control console |
| RECOGNITION | current live RECOGNITION-A | `4967.jpg` | owner-approved edited `4973` certificate stimulus | current live RECOGNITION-B is retired from next bank |
| MASTERY | current live MASTERY-A | current live MASTERY-B | `4952.jpg` | sewing a button |
| EXPLORATION | current live EXPLORATION-A | current live EXPLORATION-B | `4953.jpg` | binocular search |
| KNOWLEDGE | current live KNOWLEDGE-A | current live KNOWLEDGE-B | `4954.jpg` | active study + notes |
| OPPORTUNITY | current live OPPORTUNITY-A | current live OPPORTUNITY-B | `4955.jpg` | open greenhouse / visible accessible value |

## Explicit exclusion / HOLD set

Do not accidentally reintroduce these as final stimuli:
- REST `4928.jpg` furry slippers — HOLD, semantic duplicate of home-comfort/footwear mechanism;
- RECOGNITION live B — retire from next bank; ambiguous between recognition, judgement, leadership and attention;
- RECOGNITION `4965.jpg` transparent loyalty award — HOLD; recognition object too difficult to notice at mobile size;
- earlier DROP candidates with watermark, construct-label text, semantic duplicates or weak first-glance fit remain DROP unless later formative evidence reopens them.

## Research boundary

This freeze means only:
- the selected visual mechanisms are sufficiently coherent and diverse for the next formative runtime;
- no exact-image repeat is required anymore.

It does **not** mean:
- the 14 families are validated human-priority dimensions;
- visual attraction proves an unmet need;
- one selected image reveals a hidden/subconscious truth;
- reaction time is psychological strength;
- a family score is diagnostic.

CARE boundary remains:
- visual CARE = proactive care-giving;
- `CARE_SUPPORT_PRESENT` = care/support present/received;
- do not collapse them into one construct.

## Planner contract for next bank

Per participant:
- keep the validated 14-triad family schedule if family-level constraints remain unchanged;
- every family occurs exactly 3 times;
- assign `01`, `02`, `03` exactly once each for that family;
- 42 total image exposures;
- exact-image repeats = 0;
- exemplar×screen-slot assignment rotated/balanced by planner, not DOM order;
- no family should acquire a stable exemplar-slot association across seed classes.

Because 14 is not divisible by 3, perfect one-session global slot equality is impossible. A 5/5/4-type count is acceptable if rotations remove systematic family/exemplar bias across seed classes.

## Versioning contract

The runtime implementation must introduce a new identity for:
- bank/stimulus set;
- exemplar-assignment planner;
- session metadata;
- analysis filter.

Do not overwrite historical Open14 v0.2 identity.

## Runtime asset preparation contract

Before runtime freeze:
1. copy/normalize all selected binaries into a versioned next-bank asset directory;
2. preserve source hashes and record normalized hashes;
3. choose deterministic crop/fit geometry per stimulus;
4. verify no visible watermark or meaningful construct-label text dominates at participant-card size;
5. hash + pHash duplicate audit across all 42;
6. verify every asset is reachable;
7. patch bank/planner/session identities;
8. run owner mobile 42-bank first-glance smoke;
9. run runtime no-repeat smoke.

## Live boundary

Open14 v0.2 remains unchanged and external recruitment remains CLOSED.

Do not set `PILOT_OPENED_AT_UTC` until the new runtime version is intentionally ready for external recruitment.