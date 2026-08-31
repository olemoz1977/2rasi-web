# PrioLens new-chat source of truth v0.1

Status: ACTIVE HANDOFF / CONTEXT-LOSS GUARD
Updated: 2026-08-31 22:45 Europe/Vilnius

## Why this file exists

PrioLens work spans multiple chats, repos and uploaded artifacts. Conversation history is not the project source of truth.

Past failure modes that must not recur:
1. treating a File Library artifact as missing because it was not attached to the current chat;
2. following an older chat summary after the repo had advanced;
3. forgetting that `olemoz1977/omesg360` already provides the working Hostinger deployment channel.

## Startup order for every new PrioLens chat

1. Read `tools/priolens/RESUME_HERE.md`.
2. Read `tools/priolens/PROJECT_STATE.md`.
3. Read `tools/priolens/docs/NEED_STATE_AND_IMPULSE_PRIORITY_ARCHITECTURE_v0.1.md`.
4. Continue only from `PROJECT_STATE.md > Immediate next action`.
5. Search File Library only if an actual historical/runtime artifact is needed.
6. Open artifacts before making claims about version/schema/content.

If chat memory conflicts with repo state, **repo state wins**.

## Current checkpoint

The project has moved beyond the old seven-direction bank-building question.

Current facts:
- Gallery: 223 files / 222 byte-unique images;
- old-direction curation: 40 KEEP/HOLD, 183 DROP;
- P3 v0.4 runtime is live on `omesg360.eu/priolens/`;
- persistent research assets are separated from the deploy-owned runtime;
- P3 exact slot balance and tie-safe rendering work;
- latest v0.4 owner run: MAS 5/6, EXP 3/6, PRO 3/6, OPP 2/6, CON 1/6, AUT 0/6, INF 0/6, median RT ~1.51 s;
- repeated owner runs on the same historical 14 images are familiarity-contaminated and not validation.

## New active architecture

Do not assume the historical seven/eight directions are exhaustive.

PrioLens now tests a two-layer idea:
1. **revealed visual priority** from low-deliberation image choice;
2. **perceived sufficiency** of broader need domains from a short self-assessment shown after the visual task.

The two are compared, not collapsed into one score.

Maslow-style levels are only a broad coverage map, not a strict hierarchy and not one global participant stage.

Candidate impulse space is deliberately open. Examples include safety/protection, care, belonging, autonomy, control/assertion, recognition/status, mastery, success, exploration, opportunity/reward, certainty/order, authenticity, justice, purpose, immersion and contribution/service.

Canonical architecture:
`NEED_STATE_AND_IMPULSE_PRIORITY_ARCHITECTURE_v0.1.md`.

## Active Gallery rule

Do not restart the whole 223-image audit from zero.

Re-use the existing first-impulse audit and open-code promising images under the broader spectrum:

> **image → first spontaneous pull / meaning → candidate impulse family → KEEP / HOLD / DROP / REASSIGN / NEW-FAMILY**

Do not force images into the historical seven directions.
Do not sterilize images merely to remove every possible secondary interpretation.

## Current theoretical boundary

Do not claim:
- fast = true;
- fast = subconscious / instinctive;
- strong response = unmet need;
- one selected image reveals a Karpman role;
- direct neural-system activation from an image choice;
- the current impulse families form a complete validated taxonomy.

Working framing remains:
> low-deliberation comparative visual choice under reduced self-presentation opportunity.

## Runtime / hosting

Research runtime:
`omesg360.eu/priolens/`

Hostinger deployment is managed through:
`olemoz1977/omesg360`

Persistent Gallery/research assets must remain outside the deploy-owned PrioLens runtime target.

## Immediate next action

1. Re-open the 40 KEEP/HOLD set first, plus selected high-potential historical DROPs.
2. Open-code them against the wider candidate impulse space.
3. Allow `NEW-FAMILY`.
4. Produce a compact candidate impulse spectrum with representative engaging images.
5. Only then decide the next visual-priority bank and comparison design.
6. Separately draft the perceived-sufficiency macro-domain layer, shown after the visual task.

## Final guardrail

Recover in this order:
`RESUME_HERE.md → PROJECT_STATE.md → current architecture note → File Library artifact if needed → only then conversation history`.
