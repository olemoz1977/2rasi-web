# PrioLens new-chat source of truth v0.1

Status: ACTIVE HANDOFF / CONTEXT-LOSS GUARD
Updated: 2026-08-31 20:52 Europe/Vilnius

## Why this file exists

PrioLens work spans multiple chats and uploaded HTML artifacts. Chat history can be truncated, archived or fail to surface older attachments. Therefore **conversation history is not the project source of truth**.

Two past failure modes must not recur:
1. an attachment that still existed in File Library was treated as unavailable;
2. an older chat summary was followed after the repo had already advanced beyond it.

## Startup order for every new PrioLens chat

1. Read `tools/priolens/RESUME_HERE.md`.
2. Read `tools/priolens/PROJECT_STATE.md`.
3. Continue only from `PROJECT_STATE.md > Immediate next action`.
4. Search File Library only if an actual runtime/source artifact is needed.
5. Open the artifact before making claims about its version, schema, images or behavior.

If chat memory conflicts with repo state, **repo state wins**.

Do not ask the user to reconstruct already-recorded work unless the required artifact genuinely cannot be recovered from repo or File Library.

## Current project checkpoint

The current checkpoint is no longer the earlier unbalanced P3 run.

Completed:
- full Gallery impulse audit;
- 40 Gallery images KEEP/HOLD and 183 DROP for the current direction question;
- CER is `CONSTRUCT HOLD`;
- actual P3 three-image runtime has been recovered;
- tie-safe P3 result rendering has been implemented;
- exact P3 slot balancing has been implemented;
- a balanced 7-direction P3 owner rerun has been completed.

Balanced P3 rerun result:
- Mastery 6/6;
- Connection 3/6;
- Protection 3/6;
- Exploration 1/6;
- Opportunity 1/6;
- Autonomy 0/6;
- Influence 0/6;
- median RT about 2.06 s;
- no-clear-choice 0/14.

This is a technical/design owner run, not participant validation.

Canonical detail:
- `docs/P3_BALANCED_OWNER_RERUN_DIAGNOSTIC_v0.1.md`
- `docs/P3_SLOT_BALANCING_SPEC_v0.1.md`
- `docs/P3_TIE_SAFE_RESULT_SPEC_v0.1.md`

## Active methodological rule

For every image, regardless of historical PASS/HOLD/DROP status:

> **image → what it evokes → possible direction → KEEP / HOLD / DROP / REASSIGN**

Do not begin from the old intended label and rationalize backward.

Broad directions remain design hypotheses, not validated psychological dimensions.

## Current theoretical boundary

Do not claim:
- fast = true;
- fast = instinctive or subconscious;
- latency = psychological strength;
- AUT/CER/EXP/MAS/CON/INF/PRO/OPP are established natural human dimensions.

Current research framing:
- low-deliberation visual forced choice may reduce opportunity for deliberate self-presentation;
- repeated choices across materially different stimuli may reveal session-level choice tendencies;
- cross-exemplar coherence must be demonstrated rather than assumed.

## Known runtime/source artifacts

### `priolens_working_beta_v03.html`
File Library artifact.
Verified internal schema: `2rasi.priolens.session.working-v0.3`.
Contains eight directions, 16 embedded standalone stimuli, 28-pair core and blind `2×28` research mode with intermission.

### `priolens_working_beta-4.html`
File Library artifact.
Verified internal schema: `2rasi.priolens.session.working-v0.2`.
Contains the same eight directions and 16 embedded standalone stimuli, 28-pair core and optional calibration flow.

Do not infer chronology from the filename `-4`; inspect the internal schema.

### `decision_drivers_8x8_prototype_v0.4.html`
ConflictLab-lineage historical artifact.
Pairwise 12-duel prototype with AUT/CER/EXP/MAS/CON/INF/PRO/OPP already present. It is genealogy evidence, not the current P3 runtime or current scoring validation.

### `priolens_p3_standalone_v03.html`
Current/recovered standalone P3 research runtime.
Verified schema: `2rasi.priolens.p3.research-v0.3`.
Contains embedded historical stimuli, tie-safe result logic and exact slot balancing. It no longer requires loading the old beta before a run.

## Gallery

`Gallery.zip` contains 223 files / 222 byte-unique images.
The full impulse audit is already complete. Do not repeat it from scratch.

Canonical outputs:
- `docs/GALLERY_IMPULSE_AUDIT_v0.1.csv`
- `docs/GALLERY_IMPULSE_CURATION_v0.1.md`
- `docs/CANDIDATE_BANK_MATRIX_v0.3.md`

## CER

CER remains `CONSTRUCT HOLD`, not an image-production gap.
Existing candidates mostly collapse into confirmation, order, permission, completion, precision or other proxies.

Do not generate more CER images until the construct is explicitly retained, narrowed, replaced or dropped.

## Immediate next action

Do not restart Gallery audit.
Do not restart P3 tie/slot debugging.
Do not run a third owner session on the same 14 historical images as validation.

The active next research move is:
1. build the next materially different **non-CER** research bank from impulse-curated KEEP/HOLD candidates;
2. prioritize semantic/mechanism diversity over historical direction quotas;
3. preserve exemplar identity in all data;
4. use the new bank to test whether repeated choice patterns survive materially different exemplars;
5. keep P3 as a viable research presentation variant while separately deciding whether the mobile 2+1 geometry is acceptable;
6. keep CER inactive until its construct decision is resolved.

## Final guardrail

A missing message or missing current-chat attachment is never evidence that completed project work disappeared.

Recover in this order:
`RESUME_HERE.md → PROJECT_STATE.md → File Library artifact if needed → only then conversation history`.