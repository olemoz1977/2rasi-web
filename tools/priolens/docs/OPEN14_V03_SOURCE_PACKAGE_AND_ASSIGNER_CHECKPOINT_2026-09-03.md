# PrioLens Open14 v0.3 source package + no-repeat assigner checkpoint

Status: ACTIVE NEXT-BANK BUILD / SOURCE 15/15 LOCKED / ASSIGNER SMOKE PASS / GEOMETRY PENDING / LIVE v0.2 UNCHANGED
Date: 2026-09-03

## Design

Canonical 42-bank design:
`OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`

Machine-readable design manifest:
`../config/open14-next-bank-v0.3-design.json`

Important runtime delta:
- live v0.2 has 28 active binaries;
- next bank retains 27 of them;
- live `RECOGNITION-B` is retired from the next bank;
- 15 non-live binaries are therefore required to reach 42, not 14.

## New source materialization

Canonical machine-readable inventory:
`../config/open14-next-bank-v0.3-source-assets.json`

Verified in the working environment:
- required new sources: 15;
- present: 15 / 15;
- exact source dimensions and SHA-256 locked;
- naturally square: 1 / 15 (`RECOGNITION-03` owner `4973`);
- non-square / geometry review pending: 14 / 15.

The source-lock step does not silently crop/edit non-square images.

A source-only local ZIP package was prepared as an operational handoff:
- file: `priolens-open14-v03-source-lock.zip`;
- SHA-256: `a3d509b5e2bdf8f5bbf8d8e31d2f9b0103aacf13d4fbf1eb717cde2aa62e5178`;
- contains stable `FAMILY-xx_source.*` copies plus the source manifest;
- this ZIP is not a runtime package and is not committed as a binary artifact in this repo.

## Exemplar assignment implementation

Existing family planner retained for the prototype:
`../research/p3_open14_planner_v02.mjs`

New assigner:
`../research/open14_no_repeat_assigner_v03.mjs`

Identity:
`balanced-3x1-no-repeat-slot-v0.3`

Smoke:
`../research/open14_no_repeat_assigner_v03_smoke.mjs`

1000-seed local smoke result:
- PASS;
- 14 trials/session;
- 42 image exposures/session;
- 42 unique exemplar IDs/session;
- each family's three exemplar IDs used exactly 1/1/1;
- exact-image repeats = 0;
- per screen slot exemplar-class counts form a 4/5/5 permutation;
- across smoke seeds every family/exemplar reaches all three screen slots.

This validates assignment logic only. It is not a deployed runtime smoke.

## Current blocker / next step

Fourteen new source images are not square. Deterministic participant geometry must be frozen before they become runtime assets.

Owner constraint remains active:
> do not generate, redraw or edit images without explicit owner instruction.

Therefore next executable asset step is blocked only on explicit permission to normalize/crop the 14 non-square reviewed sources.

After geometry approval:
1. create versioned normalized binaries;
2. record normalized hashes and runtime paths;
3. populate the v0.3 bank manifest;
4. audit geometry/reachability/text/watermark/hash/pHash;
5. integrate the no-repeat assigner into a separate next runtime;
6. bump bank/planner/session identities;
7. owner mobile 42-bank smoke;
8. runtime no-repeat smoke.

Live Open14 v0.2 remains unchanged. External recruitment remains CLOSED.