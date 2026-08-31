# PrioLens — RESUME HERE

Status: ACTIVE / CHAT-LOSS-SAFE CHECKPOINT
Updated: 2026-08-31 20:52 Europe/Vilnius
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Chat history is not the project memory.**

When a PrioLens chat is missing messages, truncated, archived or restarted:
1. read this file;
2. read `PROJECT_STATE.md`;
3. continue from `PROJECT_STATE.md > Immediate next action`;
4. use File Library only when the actual historical/runtime artifact is needed;
5. do not ask the user to reconstruct already-recorded work from memory.

If chat memory conflicts with repo state, repo state wins.

## Current hard checkpoint

Completed:
- full Gallery impulse audit: 223 files / 222 byte-unique images;
- second-stage curation: 40 KEEP/HOLD, 183 DROP for the current direction question;
- impulse-first rule is active: `image → what it evokes → possible direction → KEEP / HOLD / DROP / REASSIGN`;
- CER is `CONSTRUCT HOLD`; do not generate more CER images;
- P3 three-image runtime has been recovered;
- current standalone runtime artifact: `priolens_p3_standalone_v03.html`;
- P3 tie-safe rendering is implemented;
- exact P3 slot balancing is implemented;
- two owner P3 runs have been completed with CER inactive.

Balanced P3 owner rerun, schema `2rasi.priolens.p3.research-v0.3`:
- MAS 6/6;
- CON 3/6;
- PRO 3/6;
- EXP 1/6;
- OPP 1/6;
- AUT 0/6;
- INF 0/6;
- median RT about 2.06 s;
- `no clear choice` 0/14.

Interpretation limits:
- this is an owner technical/design run, not participant validation;
- MAS is the only direction with perfect two-exemplar support in the balanced run;
- INF and AUT remain 0/6 after exact slot balancing, so their collapse cannot be blamed only on aggregate slot position;
- Protection and Connection changed substantially between owner runs, showing context sensitivity;
- Plackett–Luce output is debug/research only;
- repeated owner exposure to the same 14 historical images now creates familiarity contamination.

## Current methodological position

Do not claim:
- fast = true;
- fast = instinctive/subconscious;
- the seven/eight directions are validated human dimensions;
- latency is psychological strength.

Working research hypothesis:
- low-deliberation visual forced choice may reduce the opportunity to consciously construct a socially desirable self-description;
- repeated choices across materially different stimuli may reveal session-level choice tendencies;
- whether broad direction labels actually cohere must be tested, not assumed.

P3 is a **research presentation variant**, not yet the frozen public architecture.

## Immediate next action

Do **not** run a third owner session on the same 14 historical images as validation.

Next:
1. build a materially different **non-CER** research bank from the impulse-curated KEEP/HOLD candidates;
2. preserve exemplar identity in the data;
3. test whether repeated patterns survive materially different exemplars;
4. keep P3 as a viable research variant while separately deciding whether the mobile 2+1 geometry is acceptable;
5. keep CER inactive until the construct itself is resolved.

## Artifact recovery

Historical/runtime files may exist in File Library even if they are not attached to the current chat.

Known artifacts:
- `priolens_working_beta_v03.html` — schema `working-v0.3`, 28 + blind 2×28;
- `priolens_working_beta-4.html` — schema `working-v0.2`, 28 + optional calibration;
- `decision_drivers_8x8_prototype_v0.4.html` — earlier pairwise 8-driver lineage, not P3;
- `priolens_p3_standalone_v03.html` — current standalone 3-image research runtime with embedded historical stimuli.

Never infer chronology from filenames alone. Open the artifact and inspect its internal schema.

## Canonical full state

For detail and citations, read:
`tools/priolens/PROJECT_STATE.md`

This file is intentionally short. It exists so a new chat can recover the exact working edge in under a minute.