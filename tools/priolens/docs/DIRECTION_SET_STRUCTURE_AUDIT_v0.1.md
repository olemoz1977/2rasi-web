# PrioLens direction-set structure audit v0.1

Status: FRAMEWORK CHECK / NOT CONSTRUCT VALIDATION
Date: 2026-08-30

## Purpose

Audit the eight working PrioLens directions as a **set**, independently of the quality of any concrete stimulus image.

Current directions:

- AUT · Autonomy
- CER · Certainty
- EXP · Exploration
- MAS · Mastery
- CON · Connection
- INF · Influence
- PRO · Protection
- OPP · Opportunity

## Provenance status

The current PrioLens source-of-truth stack defines these as **working constructs / working directions**, not validated psychological needs or latent traits.

No dedicated PrioLens provenance document currently establishes:

- why these eight and not another number/set;
- that the set is exhaustive;
- that the directions are mutually exclusive;
- that they are orthogonal;
- that they occupy one validated latent space;
- that all eight are equally representable by static images.

Therefore none of those stronger assumptions may be introduced implicitly during stimulus design, scoring or participant-facing interpretation.

## What the pairwise architecture actually requires

The 28-edge tournament does **not** logically require the eight directions to be orthogonal or exhaustive.

It only requires that:

1. each working direction has a sufficiently coherent operational meaning;
2. a participant can make a meaningful choice when two represented directions compete;
3. overlap/ambiguity is observable rather than hidden;
4. direction-level interpretation is not claimed unless responses generalize beyond specific exemplars/families.

Thus conceptual overlap is not automatically fatal. But excessive overlap can make an edge uninterpretable because the participant may be choosing the same underlying meaning on both sides under different labels.

## Ontological-level mismatch risk

The eight definitions currently mix several kinds of priority object.

### Relational/self-governance
- AUT: freedom relative to constraints/options.
- INF: impact relative to external/shared outcomes.

### Epistemic orientation
- CER: knowing / reduced uncertainty.
- EXP: discovering / engaging unknown information.

### Capability / execution
- MAS: competence, precision, quality.

### Social relation
- CON: mutual contact / belonging.

### Preservation / loss prevention
- PRO: safeguarding against harm/loss.

### Future affordance / gain
- OPP: accessible possibility for future value.

These can all be phrased as “what is prioritized,” but they do not arise from one demonstrated common ontology in the current project documentation.

This matters because visual representation difficulty may reflect the **type of construct**, not merely asset quality.

## Representation-class asymmetry

The operationalizability audit identifies three broad classes:

1. directly observable present-tense state/action: CER, MAS, PRO, partly CON;
2. relational agency: AUT, INF;
3. epistemic/future orientation: EXP, OPP.

If mapping success later differs systematically by these classes, the problem may be architectural. For example, a complete tournament would then partly compare “easy-to-see present action” against “hard-to-see inferred future orientation.”

## Nearest-neighbour topology

Current definitions already identify important overlaps:

- AUT ↔ OPP
- AUT ↔ EXP
- AUT ↔ INF
- CER ↔ PRO
- CER ↔ EXP
- EXP ↔ OPP
- MAS ↔ INF
- CON ↔ INF
- CON ↔ PRO

This creates a useful falsification topology.

A direction is stronger as a working category if:
- it maps reliably across independent families;
- its confusion is concentrated in understandable nearest neighbours rather than arbitrary directions;
- held-out exemplars preserve the same neighbour structure;
- no single visual family is required to make the direction legible.

A direction is weak if:
- its mapping depends on label reveal;
- it repeatedly collapses into one neighbour across families;
- the direction disappears when a reward/threat/social-salience cue is removed;
- its successful exemplars are all one narrow trope.

## Recommended framework stance

Until stronger evidence exists, treat the eight as:

> **a non-exhaustive set of working priority lenses chosen for experimental comparison**

Do not describe them as:
- the eight fundamental human priorities;
- an exhaustive motivational taxonomy;
- independent dimensions;
- validated needs;
- a complete model of the participant.

This stance preserves the current pairwise experiment while keeping the claim falsifiable.

## Open framework question

Before a public product interpretation is frozen, PrioLens needs an explicit answer to:

> Why should these eight lenses be compared together, and what would count as evidence that one direction should be merged, split, reframed or removed?

The first part is a provenance/product-model question. The second can be answered empirically through semantic and cross-exemplar validation.

## Construct-review triggers

Move a direction to `CONSTRUCT_REVIEW` if any of the following occurs across multiple independent families:

1. intended mapping fails to beat the same neighbour;
2. human open coding rarely contains the intended concept before labels are shown;
3. the direction requires systematically stronger positive/negative/social cues than others;
4. cross-exemplar generalization is poor despite semantically clean assets;
5. the direction is only distinguishable by researcher explanation;
6. two directions produce empirically indistinguishable mapping/confusion patterns.

Possible actions after `CONSTRUCT_REVIEW`:
- tighten definition;
- narrow scope;
- merge with a neighbour;
- split into better-defined subfamilies;
- change modality (e.g. static image may be inappropriate);
- retire from PrioLens.

No such action is justified solely from the current AI red-team data.

## Current conclusion

The eight-direction set is **not logically falsified** and does not need immediate reduction to 4–6.

However, it is also **not theoretically established by the current PrioLens documentation**. The next research stage must therefore test the directions as working lenses rather than assuming they are validated dimensions.
