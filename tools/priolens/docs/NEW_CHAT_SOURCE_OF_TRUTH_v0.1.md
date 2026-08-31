# PrioLens new-chat source of truth v0.1

Status: ACTIVE HANDOFF / CONTEXT-LOSS GUARD
Updated: 2026-09-01

## Why this file exists

PrioLens work spans multiple chats, repos and uploaded artifacts. Conversation history is not the project source of truth.

Past failure modes that must not recur:
1. treating a File Library artifact as missing because it was not attached to the current chat;
2. following an older chat summary after the repo had advanced;
3. forgetting that `olemoz1977/omesg360` already provides the working Hostinger deployment channel;
4. restoring an older seven-direction or Open14-v0.1 stimulus model after later architecture decisions.

## Startup order for every new PrioLens chat

1. Read `tools/priolens/RESUME_HERE.md`.
2. Read `tools/priolens/PROJECT_STATE.md`.
3. Read `tools/priolens/docs/NEED_STATE_AND_IMPULSE_PRIORITY_ARCHITECTURE_v0.1.md`.
4. Read `tools/priolens/docs/OPEN14_SOCIAL_SPLIT_AND_SUCCESS_DECISION_v0.1.md`.
5. Read `tools/priolens/docs/P3_OPEN_SPECTRUM_14_SPEC_v0.2.md`.
6. Read `tools/priolens/docs/OPEN14_ASSET_MATRIX_v0.2.md`.
7. Continue only from `PROJECT_STATE.md > Immediate next action`.
8. Search File Library only if an actual historical/runtime artifact is needed.

If chat memory conflicts with repo state, **repo state wins**.

## Current checkpoint

Completed:
- Gallery inventory: 223 files / 222 byte-unique images;
- full first-impulse audit exists; do not restart it;
- historical P3 v0.4 seven-family runtime remains live on `omesg360.eu/priolens/`;
- repeated owner runs on the same old bank are familiarity-contaminated and not validation;
- two-layer architecture is active: visual priority first, perceived sufficiency second;
- open impulse spectrum work is complete enough to define Open14 v0.2;
- Open14 v0.2 planner implemented and smoke-tested across 1000 deterministic seeds;
- Open14 v0.2 asset matrix has 24 existing/recovered assets and 4 intentional blanks.

## Active two-layer architecture

### Channel A — revealed visual priority

Low-deliberation image choice without need labels.

### Channel B — perceived sufficiency

Short self-assessment after the visual task about how sufficiently broader need areas feel present in the person's life.

Compare the channels afterward. Do not collapse them into one unmet-need score.

Maslow-style levels are coverage buckets, not one global stage.

## Active Open14 v0.2 family set

### Basic / stability
- REST
- RESOURCE
- SAFETY
- ORDER

### Social
- CONNECTION — direct contact / reciprocity
- BELONGING — being with / part of others
- CARE — acting for another's welfare

### Agency / esteem
- AUTONOMY
- CONTROL
- RECOGNITION

### Growth / cognitive / possibility
- MASTERY
- EXPLORATION
- KNOWLEDGE — working display concept: Learning / Understanding
- OPPORTUNITY

This is a discovery shortlist, not a validated taxonomy.

## Critical v0.2 decision

`SUCCESS / ACHIEVEMENT` is **not** an active Open14 atomic family.

Reason:
- a success endpoint can be attractive because of mastery, recognition, reward/resource, control, autonomy or opportunity;
- current one-frame representation does not isolate a useful atomic pull.

Current status:
- `SUCCESS / ACHIEVEMENT = DERIVED / THEORY-HOLD`.

`BELONGING` replaces SUCCESS in the 14-family scan because the Gallery already shows a meaningful distinction between direct connection/reciprocity and group/togetherness.

## CARE boundary

CARE is intentionally narrower than warmth or connection.

Working pull:
> act for another person's welfare, including with a small personal cost or before being asked.

Accepted mechanism space:
- modest self-sacrifice / giving another person protection, comfort or resource at some visible personal cost;
- proactive practical help before a visible request.

Do not make CARE depend on heroic danger.

## Active asset state

Canonical matrix:
`OPEN14_ASSET_MATRIX_v0.2.md`.

Existing Gallery/recovered assets cover 12 of 14 families.

BELONGING reuses:
- `S14.webp` — social circle / group interaction;
- `20260731_043300801.png` — shared warmth / being together.

Current true visual gaps:
- CARE A/B;
- RECOGNITION A/B.

Approximately **4 new prototypes at most**, not 6 and not a rebuilt library.

Do not create any image without a human review gate for the missing scene mechanisms.

## Active planner

Source:
`tools/priolens/research/p3_open14_planner_v02.mjs`

Planner:
`cyclic-14x3-diff-1-4-slot-role-v0.2`

Validated per session:
- 14 triads;
- every family exactly 3 appearances;
- every family exactly 1/1/1 across slots;
- 3 distinct macro domains per trial;
- no repeated family pair;
- 42 unique pair co-occurrences;
- 6 unique opponents per family.

The FAMILY_SET order is structural. Do not alphabetize it without revalidation.

## Active stimulus rule

Use:
> **image → first spontaneous pull / meaning → candidate family → KEEP / HOLD / DROP / REASSIGN / NEW-FAMILY**

Do not sterilize vivid images merely because secondary readings are possible.

Main question:
> **What does a reasonable viewer see happening within about one second?**

Emotion itself is not a confound. Systematic salience asymmetry across families is the practical risk.

## Current theoretical boundary

Do not claim:
- fast = true;
- fast = subconscious / instinctive;
- strong response = unmet need;
- one or several choices reveal a Karpman role;
- direct neural-system activation from image choice;
- current families are a complete taxonomy;
- a selected CARE scene means the person is a Rescuer.

Working framing remains:
> **low-deliberation comparative visual choice under reduced self-presentation opportunity.**

## Runtime / hosting

Research runtime:
`omesg360.eu/priolens/`

Hostinger deployment channel:
`olemoz1977/omesg360`

Persistent Gallery/research assets stay outside the deploy-owned PrioLens runtime target.

## Immediate next action

1. keep the 24 existing Open14 v0.2 assets frozen as the working shortlist;
2. define two materially different CARE and two materially different RECOGNITION scene mechanisms in words;
3. do not generate images yet;
4. prepare runtime/data wiring against planner v0.2 without inventing fake assets for the four gaps;
5. stop at the human decision gate before any new stimulus creation;
6. once the missing mechanisms/assets are accepted, build the complete Open14 v0.2 runtime and run a technical/design smoke test only.

## Final guardrail

Recover in this order:
`RESUME_HERE.md → PROJECT_STATE.md → current architecture/decision/spec → File Library only if needed → conversation history last`.
