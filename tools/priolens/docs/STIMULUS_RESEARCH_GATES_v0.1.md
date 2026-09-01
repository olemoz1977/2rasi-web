# PrioLens stimulus research gates v0.1

Status: RESEARCH DESIGN / PRE-ASSET
Date: 2026-08-30

## Purpose

Define the sequence required before PrioLens may interpret a raw visual choice as evidence about a working direction.

The sequence is deliberately stricter than the original 16-stimulus workflow.

```text
DIRECTION HYPOTHESIS
    ↓
SCENE-PROPERTY FAMILY
    ↓
CONCRETE ASSET
    ↓
HUMAN SEMANTIC RESPONSE
    ↓
CROSS-EXEMPLAR GENERALIZATION
    ↓
PAIRWISE PREFERENCE RESPONSE
    ↓
DIRECTION-LEVEL DESCRIPTIVE INFERENCE
```

No stage may be skipped by explanation, AI confidence or scoring logic.

## Terminology

### Direction hypothesis
One of the eight working PrioLens directions. Not a validated construct.

### Scene-property family (SPF)
A materially distinct, observable visual way of attempting to represent a direction.

Examples of family-level descriptions:
- `relevant_information_visibility`
- `precision_adjustment`
- `distribution_steering`

An SPF is not a psychological signal.

### Asset
A concrete image instantiating one SPF.

### Mapping status
Before human evidence every asset/family is:

`UNCONFIRMED`

Human evidence may later support:

`SUPPORTED / CROSS_LOAD / INSUFFICIENT / NONE`

These labels describe mapping evidence, not a person.

---

## Gate 0A · Direction-to-scene concept feasibility

Question:

> Can the intended direction be represented through an observable scene property or action without relying on hidden story or a stronger confound?

Input:
- direction definition;
- candidate scene-property family description;
- nearest-neighbour failure modes;
- expected modality/confound risks.

No image required.

Pass conditions:
- the family can be described entirely in visible/observable scene terms;
- the direction rationale does not require researcher-only context;
- at least one plausible implementation exists where neighbour meanings are materially weaker;
- the intended meaning does not depend on inherently stronger reward/threat/status cues.

Verdicts:
- `CANDIDATE`
- `HIGH_RISK`
- `HOLD`
- `RETIRED`

A direction needs **multiple materially different CANDIDATE/HIGH_RISK families** before broad asset generation.

---

## Gate 0B · Blind concept interpretation

Purpose:
Detect whether the concept description itself already encodes the wrong or overly broad meaning before spending time on image generation.

Procedure:
1. Reviewer sees a neutral scene description with no direction label.
2. Reviewer states primary visible meaning and top alternative meanings.
3. Only then the intended direction and eight definitions are revealed.
4. Reviewer challenges nearest neighbours.

Failure patterns:
- intended direction only becomes plausible after reveal;
- two or more neighbours are equally plausible;
- concept inherently needs positive/negative valence to work;
- concept is only a metaphor, not a visible scene property.

AI may be used here only as adversarial curation support. This is not validation.

---

## Gate A · Asset visual control

Question:

> Does the concrete image faithfully realize the approved scene-property family without adding a stronger visual explanation?

Required checks:
- physical coherence;
- no generator watermark/mark;
- no accidental text/symbol cue unless explicitly part of the approved family;
- square 1:1 source suitable for contain rendering;
- lighting, saturation, contrast and visual complexity recorded;
- face/food/nature/status/threat/technical-domain presence coded categorically;
- dominant visual cue matches the family concept;
- no researcher-only story is required.

Gate A can reject a semantically promising family implementation without rejecting the family itself.

---

## Gate B · Human blind semantic response

This is the first human evidence gate.

### Presentation

- show **one image at a time**, not a direction-v-direction pair;
- hide direction labels, hypotheses and sibling-family information;
- randomized stimulus order;
- no result feedback during the session.

### Phase B1 · Open meaning

Ask for a short free response such as:

> `Ką šis vaizdas tau pirmiausia reiškia?`

or an equivalent neutral wording frozen before collection.

Capture:
- open-ended primary meaning;
- optional alternative meaning;
- `hard_to_identify`;
- optional valence/attractiveness/confound ratings if the protocol version includes them.

Do not show the eight directions yet.

### Phase B2 · Direction mapping after open response

Then show the eight **definition summaries**, not personality labels, and ask:

- which one direction fits best;
- `AMBIGUOUS` if two are comparably plausible;
- `NONE` if none fits;
- optional second-nearest direction;
- confidence in the mapping.

Open response must remain preserved and cannot be edited after the labels appear.

### Primary outputs

For each asset/family:
- intended-direction mapping rate;
- nearest-neighbour confusion;
- `AMBIGUOUS` rate;
- `NONE` rate;
- qualitative open-code themes;
- valence/salience/confound distribution;
- whether open coding spontaneously contains the intended concept before reveal.

No arbitrary pass percentage is frozen yet. Thresholds require a separate pre-registered analysis plan and preferably simulation/pilot evidence.

---

## Gate C · Cross-family semantic generalization

Question:

> Does the intended direction survive materially different visual families, or is it actually one narrow visual trope?

Requirements before pairwise preference research:
- more than one independent family per direction must show human semantic support;
- mapping cannot depend on one surface domain only;
- neighbour confusion pattern should be understood and not dominated by one recurring family confound;
- held-out assets/families should be reserved where practical so generalization can be tested on stimuli not used to tune the design.

Critical failure:

If a direction maps well only for one narrow family, do **not** call this direction-level support. It is family-level support.

---

## Gate D · Pairwise choice viability

Only semantically screened assets enter visual choice research.

Participant-facing principles retained from 2Pair / ConflictLab experience:
- choice occurs **before explanation**;
- both stimuli visible simultaneously;
- equal geometry;
- top/bottom randomized/counterbalanced;
- `no_clear_choice` allowed;
- optional reason is collected after the choice so explanation cannot rewrite the initial selection;
- mechanical latency remains diagnostic telemetry only.

Question:

> Do participants make usable choices between semantically screened directions without one family/asset systematically dominating for non-direction reasons?

Retain raw:
- participant ID;
- direction pair;
- asset IDs;
- family IDs;
- top/bottom position;
- trial sequence/index;
- choice / no_clear_choice;
- optional post-choice reason;
- mechanical latency;
- viewport/presentation diagnostics.

---

## Gate E · Direction-vs-exemplar evidence

Question:

> After accounting for participant, opponent, exemplar/family, position and sequence, is there evidence that choices generalize at the direction level?

Preferred analysis class:
- binary/pairwise choice model suitable for repeated observations;
- likely mixed-effects logistic / hierarchical pairwise model;
- exact model is not frozen in this document.

Do not use ordinary win totals as proof of construct validity.

Candidate explanatory components:

```text
participant
+ direction / opponent
+ exemplar
+ scene-property family
+ position
+ sequence / local context
+ measured visual covariates
→ choice
```

The core falsification question is:

> Does changing the exemplar/family while holding the target direction hypothesis constant preserve enough of the choice structure to justify a direction-level description?

If exemplar/family dominates and direction-level structure fails to generalize, PrioLens must stop or reframe that direction.

---

## Gate F · Participant-facing interpretation boundary

Only after Gate E may PrioLens decide whether wording stronger than raw pairwise reporting is defensible.

Safe baseline:

> `In this session, with these stimuli, these image choices occurred.`

Potentially stronger wording requires evidence:

> `Across different images representing the same working direction, this direction tended to be selected more often in this session.`

Not allowed without much stronger later validation:
- stable trait/need claims;
- subconscious/hidden preference claims;
- employment/clinical interpretation;
- direction strength derived from latency;
- strict rank when pairwise evidence is cyclic/tied.

---

## Research freeze rules

1. Freeze wording, asset set, protocol and capture schema before each human collection wave.
2. Any participant-facing or stimulus change after collection begins requires a new protocol/stimulus-set version.
3. Never pool materially changed protocols as one homogeneous dataset without explicit modeling/version separation.
4. AI curation results remain design evidence only.
5. Human semantic validation and pairwise preference validation are separate protocols and datasets.

## Current next action

Before generating polished assets:

1. expand each direction to a surplus of 3–5 scene-property families;
2. run Gate 0A/0B concept review;
3. retire/HOLD weak families;
4. only then generate concrete asset candidates for Gate A/B.
