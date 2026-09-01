# PrioLens stimulus research gates v0.2

Status: ACTIVE RESEARCH DESIGN / PRE-ASSET
Date: 2026-08-30
Supersedes: `STIMULUS_RESEARCH_GATES_v0.1.md`

## Why v0.2

v0.1 assumed a global exemplar pool and therefore made single-image semantic mapping the default human gate.

ConflictLab/2Pair transfer review reopened a second architecture:

- **G · Global exemplar pool** — independent images represent each direction and are cross-paired.
- **M · Matched-edge pairs** — each direction-v-direction edge is represented by a controlled pair in the same/functionally equivalent scene.

These architectures require different semantic validation targets. v0.2 keeps them separate until evidence selects one.

## Non-negotiable methodological boundary

```text
WORKING DIRECTION HYPOTHESIS
        ↓
SCENE PROPERTY / CONTROLLED CONTRAST
        ↓
PARTICIPANT RESPONSE
        ↓
EMPIRICAL MAPPING EVIDENCE
        ↓
DIRECTION-LEVEL DESCRIPTIVE INFERENCE
```

No direction-level meaning is assigned from designer intent alone.

## Gate F0 · Direction-set framework boundary

Before stimulus work:
- directions remain non-exhaustive working priority lenses;
- no orthogonality/exhaustiveness claim;
- nearest-neighbour overlap is explicit;
- merge/split/reframe/remove remain possible outcomes.

Source: `DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`.

## Gate F1 · Scene-property concept feasibility

For every direction/edge candidate:
- describe only observable scene/action properties;
- list nearest-neighbour failure modes;
- list unavoidable modality/valence/salience risks;
- reject concepts that need hidden ownership, role, intention, future outcome or researcher-only story unless those relations can be made visibly explicit.

Verdicts:
- `CANDIDATE`
- `HIGH_RISK`
- `HOLD`
- `RETIRED`

Source: `DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`.

## Gate F2 · Architecture feasibility test

Before bulk image generation, compare the two candidate architectures.

### G · Global exemplar pool

Question:
> Can each direction be represented by multiple independent standalone images without direction-correlated modality/valence confounds?

### M · Matched-edge pairs

Question:
> Can the intended A-v-B priority tension be represented inside a controlled matched scene more cleanly than by unrelated standalone images?

Current cheap test:
- 7 hardest edges;
- 2 independent text-only matched concepts per edge;
- blind Stage 1 interpretation;
- Stage 2 reveal/mapping challenge.

Sources:
- `STIMULUS_ARCHITECTURE_ALTERNATIVES_v0.1.md`
- `MATCHED_EDGE_CONCEPT_SPRINT_v0.1.md`
- `MATCHED_EDGE_BLIND_STAGE1_v0.1.md`
- `MATCHED_EDGE_BLIND_STAGE1_PROMPT_v0.1.md`
- `MATCHED_EDGE_STAGE2_REVEAL_v0.1.md`

No bulk asset generation until F2 has enough evidence to select or reject an architecture.

---

# PATH G · GLOBAL EXEMPLAR POOL

Use only if global exemplars survive Gate F2.

## G-A · Asset visual control

For every standalone asset:
- physical coherence;
- no watermark/generator marks;
- 1:1 source;
- controlled lighting/saturation/contrast/complexity;
- face/food/nature/status/threat/technical-domain coded;
- no hidden story;
- dominant visible cue matches the approved scene-property family.

## G-B · Human single-image semantic validation

Show one image at a time, randomized, with all intended direction labels hidden.

### G-B1 open coding
Ask a frozen neutral question such as:
> `Ką šis vaizdas tau pirmiausia reiškia?`

Capture first:
- primary free meaning;
- optional alternative meaning;
- `hard_to_identify`.

### G-B2 mapping after open coding
Only after the open response is locked, show short definitions of the eight working lenses.

Capture:
- best-fitting direction;
- optional second-nearest direction;
- `AMBIGUOUS`;
- `NONE`;
- mapping confidence.

Primary outputs:
- spontaneous intended-concept presence in open coding;
- intended-direction mapping;
- nearest-neighbour confusion;
- ambiguity/NONE;
- confound profile.

## G-C · Cross-family generalization

A direction cannot proceed because one narrow image trope maps well.

Require support across materially different scene-property families and reserve held-out assets/families where practical.

Failure:
- direction mapping disappears when family changes;
- one family explains the apparent direction effect;
- removing reward/social/threat cue removes the intended meaning.

---

# PATH M · MATCHED-EDGE PAIRS

Use only if matched-edge concepts survive Gate F2.

## M-A · Matched asset control

For each direction edge, both variants must share as much as practical:
- scene/domain;
- camera/perspective;
- lighting/color treatment;
- people/face presence;
- object density;
- overall visual quality and plausibility.

The intended priority contrast must be the dominant meaningful difference.

Required design principles:
- minimal irrelevant change;
- equal legitimacy;
- no obvious good/bad, safe/dangerous, rich/poor, professional/absurd contrast;
- no cue/text explanation rescuing weak imagery.

## M-B · Human blind pair-contrast validation

Show the two matched variants together with randomized first/second position.

The validation target is the **contrast**, not whether either image can be named as a direction in isolation.

### M-B1 choice before explanation
Ask neutrally:
> `Kurį renkiesi?`

Allow:
- first variant;
- second variant;
- `no_clear_choice`.

### M-B2 open reason after locked choice
Then ask a neutral reason prompt such as:
> `Kas labiausiai nulėmė skirtumą / tavo pasirinkimą?`

Capture:
- free-text reason;
- `hard_to_identify` independently of choice;
- optional reaction-intensity only if separately justified; never multiply it into a direction score.

### M-B3 post-hoc coding
Blind-to-participant result coding classifies the reason:
- `SIDE_A_RELEVANT`
- `SIDE_B_RELEVANT`
- `CROSS_LOAD`
- `CONFOUND`
- `INSUFFICIENT`
- `NONE`

Only after open reasons are preserved may coders compare them with intended direction definitions.

Key question:
> Does the reason participants use to distinguish the variants correspond to the intended A↔B tradeoff more often than to incidental differences?

## M-C · Edge replication across scene families

One matched scene can validate only one **edge realization**, not the abstract direction pair.

For stronger evidence:
- use at least two materially different matched scene families for critical edges;
- rotate them across participants or waves;
- test whether the same A↔B interpretation survives the scene change.

Failure:
- edge meaning changes with scenario;
- one scene works while another reverses/cross-loads;
- the intended contrast requires family-specific storytelling.

---

# COMMON LATER GATES

## Gate P1 · Full pairwise-session viability

Only semantically supported global assets or matched edge pairs may enter a full PrioLens session.

Retain:
- participant ID;
- edge ID;
- direction IDs;
- asset IDs;
- family/scenario IDs;
- exact first/second position;
- sequence/trial index;
- choice / no_clear_choice;
- optional post-choice reason;
- mechanical latency;
- viewport/render diagnostics.

The 28-edge complete tournament remains a candidate full-session structure, not the current validation step.

## Gate P2 · Direction-vs-exemplar/scenario evidence

Question:
> Does enough structure generalize above specific asset/family/scenario effects to justify direction-level description?

Candidate model class:
- mixed-effects logistic / hierarchical pairwise choice model;
- exact model, priors and thresholds require separate analysis design.

Potential terms:

```text
participant
+ direction / opponent
+ exemplar OR matched-scenario family
+ position
+ sequence/local context
+ measured visual covariates
→ binary choice
```

Do not use ordinary win totals as construct-validity proof.

## Gate P3 · Inference boundary

Safe baseline:
> `In this session, with these stimuli, these choices occurred.`

Stronger direction-level wording is allowed only if cross-exemplar/cross-scenario evidence supports it.

Still excluded:
- stable trait/need claims;
- subconscious/hidden preference claims;
- diagnosis/prediction;
- latency-derived psychological strength;
- forced strict rank over tied/cyclic pairwise data.

## Protocol freeze

Human data from Path G semantic validation, Path M matched-contrast validation and the later full pairwise session are **different protocols**. They must not be silently pooled.

Any change to:
- stimulus assets;
- wording;
- choice options;
- response-capture semantics;
- presentation geometry;
requires a new protocol/stimulus-set version once collection begins.

## Current next action

Complete Gate F2 using the prepared 14 matched concepts **before** generating a new polished visual library.
