# PrioLens — new chat handoff 2026-09-03

Status: convenience handoff; repo source of truth remains `RESUME_HERE.md` plus later freeze/geometry checkpoints.

## Mandatory startup

Do not reconstruct PrioLens from chat memory and do not restart conceptual discovery from zero.

Read in this order:
1. `tools/priolens/RESUME_HERE.md`
2. `tools/priolens/docs/OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`
3. `tools/priolens/config/open14-next-bank-v0.3-design.json`
4. `tools/priolens/config/open14-next-bank-v0.3-source-assets.json`
5. `tools/priolens/config/open14-next-bank-v0.3-geometry.json`
6. `tools/priolens/docs/OPEN14_V03_GEOMETRY_REVIEW_PACKAGE_2026-09-03.md`
7. `tools/priolens/docs/OPEN14_RECOGNITION_D_OWNER_FREEZE_2026-09-03.md`
8. `tools/priolens/docs/OPEN14_REST_C_OWNER_FREEZE_2026-09-03.md`
9. `tools/priolens/research/open14_no_repeat_assigner_v03.mjs`
10. `tools/priolens/research/open14_no_repeat_assigner_v03_smoke.mjs`
11. `tools/priolens/PROJECT_STATE.md` only for older runtime/background context.

If an older file says REST or RECOGNITION is still open, the later family freeze/design freeze wins.

## Current state

Live Open14 v0.2 is still unchanged and external recruitment is CLOSED.

Next-bank design is frozen:
- 14 families x 3 unique exemplars = 42 stimuli;
- 27 live exemplars retained;
- 15 new source assets locked;
- live RECOGNITION-B retired only from the next-bank design;
- Recognition next-bank set = current A + 4967 + owner 4973;
- REST next-bank set = current A + current B + owner 4971;
- exact-image repeats target = 0.

No-repeat exemplar assigner `balanced-3x1-no-repeat-slot-v0.3` already passed 1000-seed smoke. Do not redesign the planner from scratch.

## Latest completed work before chat limit

A deterministic geometry review package for all 15 new assets was materialized:
- 15/15 review derivatives = 640x640 WebP;
- 14 non-square sources received explicit crop boxes;
- Recognition-03 was already square;
- output hashes and crop boxes are frozen in `config/open14-next-bank-v0.3-geometry.json`;
- geometry review note: `docs/OPEN14_V03_GEOMETRY_REVIEW_PACKAGE_2026-09-03.md`;
- no binaries were deployed to live runtime;
- the main crop watch is BELONGING-03, which uses x-centering 0.45 to retain evidence of a third group member.

The working-session ZIP was named `priolens_nextbank_v03_geometry_review.zip`; it is a review artifact, not deployed source of truth.

## Next task

Continue from geometry review, not from image search.

1. Owner/mobile review of the normalized 15-image contact sheet, especially BELONGING-03.
2. If crop review passes, materialize/upload the approved 15 WebP binaries into a versioned next-bank runtime asset package.
3. Combine with 27 retained live assets -> full 42 runtime bank.
4. Populate runtime paths in v0.3 bank manifest.
5. Integrate the already-smoked no-repeat assigner into a separate next runtime, never silently mutate live v0.2.
6. Bump bank/planner/session identities.
7. Run reachability/hash/pHash/text-watermark/mobile/runtime no-repeat smoke.
8. Only after all smoke passes consider replacing live v0.2 and later opening formative recruitment with explicit `PILOT_OPENED_AT_UTC`.

## Research guardrails

Do not claim:
- personality diagnosis;
- subconscious or true-self access;
- fast = true;
- RT = psychological strength;
- visual pull = unmet need;
- one global Maslow/need score;
- validated complete taxonomy.

Channel A = low-deliberation comparative visual choice.
Channel B = current perceived sufficiency collected after Channel A.
CARE visual giving and Channel-B received support remain intentionally non-equivalent.
Keep `For Fun with Wisdom`.

## Working style

Work critically, concretely and without praise. Act on reversible technical steps. Ask only when the answer materially changes the result or an irreversible action is involved. Repo beats chat memory.
