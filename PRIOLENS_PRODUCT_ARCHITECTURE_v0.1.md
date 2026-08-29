# PrioLens product architecture v0.1

Status: DRAFT ARCHITECTURE / NO PARTICIPANT SCORING CLAIMS YET
Date: 2026-08-29
Product home: 2rasi
Working product name: PrioLens
Public route target: `/tools/priolens/`
Homepage position: card 10, in the current `HELP TO BUILD` group until the pilot is ready.

## 1. Product boundary

PrioLens is a new 2rasi product. It is not a rename or continuation of ConflictLab, and it does not replace 2Pair.

2Pair remains frozen as its own experimental product and historical research line. PrioLens may reuse lessons learned from 2Pair about rapid visual presentation, timing hygiene and post-choice reflection, but it must not import 2Pair scoring assumptions, release paths or `omesg360.eu` runtime dependencies.

PrioLens lives in the 2rasi product family and is served from the 2rasi domain:

- EN: `https://2rasi.com/tools/priolens/`
- LT: `https://2rasi.lt/tools/priolens/`

The product promise is clarity, not diagnosis: repeated forced choices help a participant see which directions tend to take priority when two valid directions compete.

## 2. Core protocol model

### Direction set

The initial model contains eight working directions:

1. connection
2. opportunity
3. certainty
4. exploration
5. autonomy
6. influence
7. mastery
8. protection

These labels are working constructs. They must not be presented as validated psychological needs until the relevant evidence exists.

### Stimulus model

- 8 directions
- 2 independent visual exemplars per direction in v0.1
- 16 active stimuli total
- each stimulus has a stable immutable ID
- direction identity and exemplar identity are separate fields
- asset version/hash is recorded so a visual change cannot silently alter a protocol version

Two exemplars are the minimum practical floor for detecting stimulus-specific effects. A later protocol may move to three or more exemplars without changing the product route.

### Pair model

Eight directions create `C(8,2) = 28` unique direction-v-direction edges.

The v0.1 core session contains all 28 direction edges exactly once. Therefore:

- 28 core trials per participant
- every direction appears in 7 core trials
- every direction competes with every other direction once
- the participant is not shown all possible image combinations

With two exemplars per direction, each direction edge has 4 possible exemplar combinations. Across all 28 edges this gives 112 possible cross-direction image pairs. Those 112 combinations are distributed across participants by the session planner; they are not exhausted by one participant.

### Reliability extension

A later research mode may append 8-12 repeat edges using the alternate exemplar combination. This block is disabled by default in the architecture scaffold and must receive its own protocol flag/version before participant use.

## 3. Presentation freeze for v0.1

The measured choice screen uses one presentation geometry across supported viewports:

- vertical top/bottom layout
- both images fully visible at the same time
- equal square containers (`1:1`)
- identical container dimensions for both stimuli
- `object-fit: contain`
- no image crop used to make assets fit
- no scrolling inside a measured trial
- neutral and equal padding/background treatment
- top/bottom identity randomized/counterbalanced independently of direction identity

The viewport must fit both stimulus frames plus required controls. A viewport that cannot do so fails preflight rather than silently changing the measured layout.

### Rendering/timing order

Measured timing must never include asset fetch or decode time.

Required order:

1. preload required block assets
2. decode images
3. reserve final layout boxes
4. render both stimuli
5. verify both are visible and interactive
6. wait for stable paint/layout boundary
7. start the trial timing clock
8. capture the participant choice event
9. timestamp the event before rendering the next trial

`performance.now()` is the timing clock. The exact pointer event used to commit a choice remains a protocol decision and must be frozen before external data collection; it must not change silently between builds.

Orientation/layout changes during a measured trial are logged as diagnostics and the affected trial/session can be marked invalid or retried according to the protocol.

## 4. Runtime architecture

PrioLens is self-contained under `tools/priolens/`.

```text
tools/priolens/
  index.html                 product entry / pilot shell
  README.md                  local implementation notes
  config/
    product-v0.1.json        product metadata and route contract
    protocol-v0.1.json       session/presentation rules
    stimuli-v0.1.json        8 directions x 2 exemplar registry
  src/
    session-plan.js          28-edge plan + exemplar/position balancing
    runtime.js               render, preload, timing, navigation
    result.js                descriptive relative-priority output
    storage.js               local event log + optional upload adapter
  styles/
    priolens.css             measured-screen and shell styles
  docs/
    DATA_CONTRACT_v0.1.md    event schema and interpretation boundary
```

The presentation website remains in the `2rasi-web` repository. If a server-side persistence endpoint is activated, its implementation should remain logically separated from the static presentation layer while being exposed through a 2rasi-owned same-origin route.

Reserved API namespace:

`/api/priolens/v1/`

No PrioLens runtime should depend on `omesg360.eu`.

## 5. Session planner responsibilities

The planner, not CSS or DOM order, owns experimental balancing.

For each session it must:

- generate all 28 unordered direction edges exactly once
- randomize trial order
- choose one of the four exemplar combinations for each edge
- rotate exemplar combinations across sessions using a reproducible session seed or allocation strategy
- balance top/bottom exposure for each direction and exemplar as closely as possible
- keep direction identity separate from screen position
- mark optional reliability trials explicitly
- persist the generated plan before the measured block begins

A retry must never silently create a different trial that is recorded as if it were the original attempt. Retry policy must be explicit in the event contract.

## 6. Result boundary

The first participant-facing result is descriptive, not diagnostic.

Allowed v0.1 output:

- wins / selections per direction over its seven core comparisons
- pairwise matrix / which direction won each observed edge
- ties or near-ties shown as such
- grouped tiers or relative pattern rather than artificial #1-#8 precision
- reflection prompts that help the participant inspect surprising or close choices
- explicit statement that the result reflects this session and these stimuli

Not allowed without later validation:

- claims of subconscious, instinctive or hidden-need measurement
- personality diagnosis
- employment or clinical interpretation
- treating response latency as psychological strength
- strict ranking when the data do not distinguish tied directions
- combining latency and choice into an invented psychological score

If a model-based estimator such as Bradley-Terry is later introduced, it requires a separately versioned analysis contract and must expose uncertainty rather than replacing the raw pairwise trace.

## 7. Data contract principles

Every event is versioned by at least:

- `product_version`
- `protocol_version`
- `stimulus_set_version`
- `session_plan_version`
- `runtime_build`

Core trial fields include:

- pseudonymous `session_id`
- `trial_id` and `trial_index`
- both direction IDs
- both stimulus IDs
- exact top/bottom positions
- preload/decode/render readiness diagnostics
- monotonic trial start timestamp
- selected stimulus/direction or `no_clear_choice`
- mechanical choice latency in milliseconds
- input modality
- viewport dimensions and orientation
- orientation/layout-change diagnostic
- reliability-trial flag

Research upload, when enabled, should be opt-in and must not require a participant name or email in the event payload.

## 8. Separation from 2Pair

The following are deliberate boundaries:

| Area | 2Pair | PrioLens |
| --- | --- | --- |
| Product state | frozen experimental product | new product line |
| Public route | `/tools/2pair/` | `/tools/priolens/` |
| Runtime host | existing 2Pair release remains unchanged | 2rasi-owned route |
| Core unit | fixed visual pair research | complete 8-direction pairwise tournament |
| Core trials | existing 2Pair protocol unchanged | 28 direction edges |
| Stimulus reuse | no assumption | new versioned stimulus registry |
| Result | existing 2Pair trace | relative-priority clarity output |
| Data | never pooled automatically | independent product/protocol versions |

No historical 2Pair participant data may be pooled with PrioLens as if both came from one protocol.

## 9. Build order

1. Freeze working direction definitions.
2. Freeze two independent exemplars per direction.
3. Implement and test the 28-edge session planner.
4. Freeze exact choice-commit input event.
5. Implement vertical measured renderer and preflight.
6. Add event/data contract validation.
7. Add descriptive result view without overclaiming.
8. Owner/device smoke test only.
9. Freeze `protocol-v0.1` and `stimuli-v0.1`.
10. Only then expose the PrioLens card/pilot publicly for external collection.

## 10. Architecture decision

PrioLens is the tenth 2rasi product card and a first-class 2rasi route. It is not hosted as a 2Pair release and it does not revive ConflictLab. The code and data contracts are versioned independently from both predecessors.
