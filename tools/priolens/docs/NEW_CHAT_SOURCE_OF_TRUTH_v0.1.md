# PrioLens new-chat source of truth v0.1

Status: ACTIVE HANDOFF / CONTEXT-LOSS GUARD
Updated: 2026-08-31

## Why this file exists

PrioLens work crossed several chats and several uploaded HTML prototypes. A new chat can receive repo summaries without automatically surfacing older attachments. That caused two failure modes:

1. an attachment that still existed in File Library was treated as if it were unavailable;
2. filename/version assumptions were substituted for opening the actual source artifact.

This file defines the order in which a new chat must recover context before continuing work.

## Source priority

### 1. Current working state

Always fetch first:

`tools/priolens/PROJECT_STATE.md`

This is the source of truth for what has already been completed and what the immediate next action is.

Do not restart an older task from conversation memory if `PROJECT_STATE.md` says that task is already complete.

### 2. Historical runtime/source artifacts

These are source artifacts, not summaries. Use them when reconstructing what an earlier prototype actually contained.

#### `priolens_working_beta_v03.html`

File Library artifact.

Verified properties:
- PrioLens working beta;
- schema `2rasi.priolens.session.working-v0.3`;
- eight directions: AUT, CER, EXP, MAS, CON, INF, PRO, OPP;
- 28-pair core session;
- explicit `Tyrimo režimas 2×28` blind-calibration flow;
- intermission before the second 28 trials so the first result does not contaminate the second round;
- same two-standalone-exemplar-per-direction architecture as the recovered original baseline.

Direction cues in the file include:
- AUT: freedom to choose own method/direction;
- CER: clarity, definiteness, less uncertainty;
- EXP: curiosity / step toward what is not yet clear;
- MAS: skill, precision, well-executed action;
- CON: reciprocal connection/closeness/belonging;
- INF: ability to change what happens next;
- PRO: protection/preservation/harm reduction;
- OPP: visible possibility/potential benefit.

#### `priolens_working_beta-4.html`

File Library artifact.

Verified properties:
- PrioLens working beta;
- schema `2rasi.priolens.session.working-v0.2`;
- the same eight direction definitions/cues and the same 16 embedded standalone stimuli;
- 28-pair core flow;
- optional calibration via `Patikrinti su kitais vaizdais` after the result.

Important: **do not infer chronology from the filename `-4`.** Code/schema evidence shows `priolens_working_beta_v03.html` contains the later `working-v0.3` flow and the explicit blind 2×28 research mode, while `priolens_working_beta-4.html` identifies itself internally as `working-v0.2`.

### 3. `decision_drivers_8x8_prototype_v0.4.html`

Current uploaded/source artifact from the ConflictLab-era lineage.

Verified directly from the file:
- title: `Decision Drivers · 8×8 prototype v0.4 v0.3`;
- assets are loaded from the ConflictLab repository lineage;
- it already defines AUT/CER/EXP/MAS/CON/INF/PRO/OPP as eight needs/drivers;
- CER is defined as wanting more definiteness and knowing better what to expect;
- it is a **pairwise 12-duel prototype**, using a 3-regular graph where each driver appears three times;
- it is **not** the later P3 three-image runtime.

This file is therefore important historical evidence for the genealogy of the eight directions and Gallery stimuli, but it must not be substituted for the missing P3 runtime.

### 4. `Gallery.zip`

Historical image corpus: 223 files / 222 byte-unique images.

The full impulse audit is already complete in the repo. Do not re-review the full Gallery from scratch unless a genuinely new question requires it.

Canonical outputs:
- `docs/GALLERY_IMPULSE_AUDIT_v0.1.csv`
- `docs/GALLERY_IMPULSE_CURATION_v0.1.md`
- `docs/CANDIDATE_BANK_MATRIX_v0.3.md`

## Current methodological rule

For every image, regardless of old PASS/HOLD/DROP status:

> **image → what it evokes → possible direction → KEEP / HOLD / DROP / REASSIGN**

Do not begin from the historical intended label and rationalize backward.

## Current project checkpoint

As of this handoff:
- full Gallery impulse audit is complete;
- 40 Gallery images remain KEEP/HOLD for the eight-direction question;
- 183 are DROP from the compact bank;
- CER is on **CONSTRUCT HOLD** because existing images resolve mainly into proxies such as confirmation, order, permission, completion or precision rather than a clean standalone `knowing what to expect` impulse;
- one 7-direction P3 owner run has been analysed;
- P3 produced a Mastery–Protection tie at 5/6 each;
- current P3 result rendering incorrectly breaks the tie;
- current P3 slot placement is not balanced;
- exact top/middle/bottom balancing is mathematically feasible;
- Influence is cross-format unstable and should be rechecked only after slot balancing.

Canonical P3 diagnostic:
`docs/P3_SINGLE_SESSION_DIAGNOSTIC_v0.1.md`

## Immediate next action

Do not restart Gallery audit or CER image generation.

The active next technical tasks are:
1. implement tie-safe P3 result rendering;
2. implement exact P3 slot balancing so every exemplar appears once top, once middle, once bottom across its three presentations;
3. rerun the same 7-direction P3 owner check with a new seed;
4. inspect whether Influence still collapses after position balancing;
5. keep CER inactive until its construct decision is resolved.

Current blocker remains identification/recovery of the actual P3 three-image runtime/source. The available `decision_drivers_8x8_prototype_v0.4.html` is not that runtime.

## New-chat startup checklist

At the start of any new PrioLens chat:
1. fetch `tools/priolens/PROJECT_STATE.md` from branch `feature/priolens-architecture`;
2. read this handoff file;
3. search File Library for `priolens_working_beta_v03.html` and `priolens_working_beta-4.html` if historical runtime/stimulus reconstruction is relevant;
4. inspect original files before making claims about version order or stimulus logic;
5. continue only from the latest repo `Immediate next action`.

Do not treat missing attachments in the immediate chat context as proof that the files do not exist.