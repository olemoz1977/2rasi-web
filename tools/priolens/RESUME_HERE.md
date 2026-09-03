# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 LIVE / NEXT-BANK 42 DESIGN FROZEN / 15 NEW SOURCES LOCKED / NO-REPEAT ASSIGNER SMOKE PASS / GEOMETRY PACKAGE NEXT / PRE-PILOT HARDENING
Updated: 2026-09-03
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Repo is source of truth. Do not reconstruct PrioLens from chat memory.**

Recovery order:
1. this file;
2. `PROJECT_STATE.md` for runtime/background;
3. `docs/OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md` — current next-bank canonical set;
4. `config/open14-next-bank-v0.3-design.json` — machine-readable 42-ID design manifest;
5. `config/open14-next-bank-v0.3-source-assets.json` — exact 15 new source binaries/hashes/dimensions;
6. `docs/OPEN14_C_PACKAGE_PROVENANCE_2026-09-03.md`;
7. `docs/OPEN14_RECOGNITION_D_OWNER_FREEZE_2026-09-03.md`;
8. `docs/OPEN14_REST_C_OWNER_FREEZE_2026-09-03.md`;
9. `docs/OPEN14_NO_REPEAT_42_TRANSITION_2026-09-03.md`;
10. `docs/OPEN14_ABC_FULL_AUDIT_2026-09-03.md`;
11. `docs/OPEN14_PILOT_COHORT_RULE_v0.1.md`;
12. `docs/OPEN14_CARE_ANALYSIS_RULE_v0.1.md`;
13. `docs/OPEN14_BILINGUAL_RUNTIME_v0.1.md`.

Later family-specific freeze checkpoints supersede older open-review notes for that family.

## Product / research boundary

Channel A = low-deliberation comparative visual choice.
Channel B = current perceived sufficiency collected only after Channel A.

Do not claim personality diagnosis, subconscious/true-self access, fast=true, RT=psychological strength, visual pull=unmet need, one global need score, or a validated complete taxonomy.

Keep `For Fun with Wisdom`.

Active 14 families:
REST, RESOURCE, SAFETY, ORDER, CONNECTION, BELONGING, CARE, AUTONOMY, CONTROL, RECOGNITION, MASTERY, EXPLORATION, KNOWLEDGE/Learning-Understanding, OPPORTUNITY.

`SUCCESS / ACHIEVEMENT` remains `DERIVED / THEORY-HOLD`.

## Two bank states — do not mix

### Live Open14 v0.2
Unchanged:
- 14 families × 2 exemplars = 28 active images;
- 14 triads;
- each family appears 3 times;
- one exact A/B exemplar necessarily repeats for a family;
- external recruitment remains CLOSED.

Live runtime:
`https://omesg360.eu/priolens-open14-v02/`

Owner bank:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

### Next bank — DESIGN FROZEN
Canonical:
`docs/OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`

Frozen design:
- 14 families × 3 reviewed unique exemplars = 42 stimuli;
- every family appears exactly 3 times;
- each final exemplar once per family/session;
- exact-image repeats = 0;
- runtime IDs use stable family-local `01/02/03`, not legacy A/B/C semantics;
- new bank/planner/session identity required;
- live v0.2 stays untouched until runtime asset package + planner/versioning + smoke pass.

Important delta from live:
- **27 live exemplars are retained**;
- **15 new runtime assets are required**;
- the count is 15, not 14, because live `RECOGNITION-B` is retired and Recognition contributes two non-live assets (`4967` + owner `4973`).

## New source package — MATERIALIZED

Machine-readable inventory:
`config/open14-next-bank-v0.3-source-assets.json`

Verified in the working environment:
- 15 / 15 required new source binaries present;
- dimensions and source SHA-256 locked;
- 1 / 15 naturally square: `RECOGNITION-03` / owner `4973`;
- 14 / 15 are non-square and remain `SOURCE_LOCKED_GEOMETRY_REVIEW_PENDING`;
- no non-square source was silently cropped by the source-lock step.

Design manifest:
`config/open14-next-bank-v0.3-design.json`

It intentionally keeps `runtimePath: null` for the 15 new assets and fails closed until a real versioned runtime package exists.

## Final family deltas

### REST
Canonical:
`docs/OPEN14_REST_C_OWNER_FREEZE_2026-09-03.md`

Next-bank REST = current A + current B + owner `4971.jpg`.

REST-C exact owner binary:
- 1536×1097;
- SHA-256 `9996dbab58b7963b044f0a1129c228e94cfd28809772e1b17ebbaf131f6e131c`;
- source Pexels/Pixabay `269141`;
- 192×192 review still reads as actual resting/napping under blanket;
- furry-slippers `4928.jpg` = HOLD / excluded from final 42 design.

### RECOGNITION
Canonical:
`docs/OPEN14_RECOGNITION_D_OWNER_FREEZE_2026-09-03.md`

Next-bank Recognition = **current A + `4967` C + owner-approved edited certificate D**.

Current live Recognition-B is retired from next-bank design only.

Recognition-D exact owner binary:
- owner label `4973.png`;
- 1536×1536;
- SHA-256 `be0b9af42c648fba4d63643babc935d90247b48f6a5afe609664fe21c1672334`;
- normalized 640×640 WebP SHA-256 `3965c63ee28f7052ce0fb160b9308b8f3154aff5d7967da687a1ca09ad266b13`;
- edited derivative of Pexels `7648310` certificate scene;
- transparent loyalty-award `4965.jpg` = HOLD / excluded.

### Other 12 families
PASS or PASS-WATCH in the full A/B/C audit and frozen in `OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`.
Do not reopen them without concrete side-by-side/mobile or later formative evidence.

## Planner / assigner implementation — PROTOTYPE PASS

Family schedule remains:
`research/p3_open14_planner_v02.mjs`

It already guarantees:
- 14 triads;
- each family shown 3×;
- each family in screen slots 1/1/1;
- 3 macro domains per triad;
- 42 unique family pair co-occurrences;
- 6 unique opponents per family.

New no-repeat exemplar assigner:
`research/open14_no_repeat_assigner_v03.mjs`

Assigner identity:
`balanced-3x1-no-repeat-slot-v0.3`

Smoke:
`research/open14_no_repeat_assigner_v03_smoke.mjs`

1000-seed local smoke PASS:
- 42 exposures/session;
- 42 unique exemplar IDs/session;
- each family uses its three exemplar IDs exactly 1/1/1;
- exact-image repeats = 0;
- per slot exemplar-class counts are a 4/5/5 permutation;
- across smoke seeds every family/exemplar reaches all three screen slots.

This is not yet deployed runtime behavior.

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

`language: lt|en` remains persisted and retained for analysis.

## Pilot / recruitment boundary

External recruitment remains **CLOSED**.
Before recruitment, record explicit `PILOT_OPENED_AT_UTC` and freeze the active bank/planner/session version combination.
Always exclude `SYSTEM_SMOKE_DO_NOT_ANALYZE`; keep language as an analysis factor.

## Existing operational work still open

- one fresh full LT mobile participant smoke;
- focused EN result smoke;
- public `.lt` and `.com` card → landing → PrioLens → return manual smoke;
- Hostinger 90-day cleanup cron configuration + first output smoke;
- recruitment only after intentional opening and `PILOT_OPENED_AT_UTC`.

## Active next-bank execution queue

1. Resolve deterministic 1:1 runtime geometry for the 14 non-square new sources. **Do not edit/crop without explicit owner image-edit instruction.**
2. Build the separate versioned 42-bank runtime asset package: 27 retained live binaries + 15 new normalized binaries.
3. Preserve original and normalized hashes; populate runtime paths in the v0.3 bank manifest.
4. Integrate the already-smoked `balanced-3x1-no-repeat-slot-v0.3` assigner into a separate next runtime, not live v0.2.
5. Bump bank/planner/session metadata so v0.2 observations remain separable.
6. Run geometry/reachability/text-watermark/hash/pHash audit.
7. Owner mobile visual smoke across all 42.
8. Runtime no-repeat smoke.
9. Only then reconsider external recruitment.

Main pragmatic stimulus question:
> **What does a reasonable viewer see happening within about one second?**

Guardrail:
> **clear enough + engaging > theoretically pure + dead**
