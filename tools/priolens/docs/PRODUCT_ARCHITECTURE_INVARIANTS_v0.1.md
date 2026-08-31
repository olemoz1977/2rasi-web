# PrioLens product architecture invariants v0.1

Status: CONSTITUTIONAL / DO NOT OVERRIDE WITH LOCAL RESEARCH RESULTS
Date: 2026-08-31

## Why this file exists

PrioLens repeatedly drifted because a local research method was allowed to redefine the product architecture. Most notably, 2Pair-style matched A/B stimulus logic was imported into PrioLens and then treated as if it were a product requirement.

This file separates **product invariants** from **research hypotheses**.

A local stimulus failure, AI review result, rendering problem or psychometric idea must not silently change these invariants.

Changing an invariant requires an explicit architecture decision, not an incidental research workaround.

## Invariant 1 · Stimulus unit

The fundamental PrioLens stimulus unit is:

> **one standalone image**

An image must be meaningful enough to screen individually before it is used in a comparison.

It is not fundamentally an A-side or B-side variant of another image.

## Invariant 2 · Trial unit

A public trial is:

```text
standalone image 1
vs
standalone image 2
→ quick choice
```

The two images may come from different scenes, objects, actions and visual mechanisms.

They do not need to be controlled edits of one shared scene.

## Invariant 3 · No matched-scene requirement

PrioLens does **not** require:
- the same object on both sides;
- the same actor;
- the same background;
- one manipulated property difference;
- a before/after relation;
- a participant to infer what changed between two near-identical images.

Those are valid tools for 2Pair-style pair-local research, not PrioLens product requirements.

## Invariant 4 · Stimulus-bank architecture

PrioLens should be built as a **library of standalone semantic anchors**.

Workflow:

```text
candidate semantic family
→ multiple independent standalone image concepts
→ multiple visual iterations per concept if needed
→ blind standalone semantic screening
→ retain useful images
→ comparison schedule assembled later
```

Several similar images in the working gallery usually represent candidate iterations of one stimulus idea, not images intended to be shown together.

## Invariant 5 · Meaning is screened before pairing

The first research question for a candidate image is:

> What do viewers independently see or infer from this single image?

Only after standalone semantic screening should the image enter comparison trials.

Pair context must not be the sole source of an image's intended meaning.

## Invariant 6 · Comparison layer is separate

The comparison layer decides which already-screened images are shown against which opponents.

Possible future comparison designs may be balanced, incomplete or adaptive.

The comparison schedule does not define the semantic meaning of the images.

## Invariant 7 · Confound control remains necessary

Standalone-image architecture does not mean uncontrolled imagery.

When images are compared, control or balance major nuisance dimensions where practical:
- positive/negative valence;
- aesthetic attractiveness;
- brightness and saturation;
- visual complexity;
- people count and social salience;
- threat/loss;
- status/prestige;
- obvious expertise/difficulty;
- completion/success cues;
- magnitude/scale;
- novelty.

The goal is gross comparability, not matched-scene identity.

## Invariant 8 · 2Pair lessons have a boundary

Lessons that may transfer from 2Pair:
- avoid confounds;
- do not assign psychological meaning to raw A/B by designer intent;
- blind semantic review is useful;
- response time is mechanical unless separately validated;
- reflection/diagnosis claims must remain restrained.

Lessons that must **not** transfer as architecture requirements:
- matched A/B scene construction;
- one controlled local contrast as the fundamental stimulus unit;
- same-object controlled edits;
- pair-local meaning as the basis of every public trial.

## Invariant 9 · Product experience

PrioLens remains:
- visual;
- fast;
- playful;
- little/no reading during trials;
- no mandatory writing;
- approximately 2–4 minutes target;
- roughly 12–18 meaningful choices target;
- short session-level mirror;
- no personality, diagnosis or hidden-self claims.

Working phrase:

> **For Fun, but with Wisdom.**

## Invariant 10 · Research may fail without redefining the product

If a candidate semantic family fails, narrow, split or drop that family.

If one image cannot be rendered cleanly, replace that image.

If a comparison schedule performs poorly, redesign the schedule.

Do **not** respond to those local failures by silently converting PrioLens into a matched-pair system, questionnaire, per-choice reflection protocol or 2Pair derivative.

## Decision discipline

Before changing architecture, ask:

> Is this a product-level decision, or am I trying to solve one local research/rendering problem?

If it is local, do not edit these invariants.

## Source-of-truth role

This document should be read before `PROJECT_STATE.md` when recovering PrioLens architecture.

`PROJECT_STATE.md` may change frequently.
These invariants should change rarely and only through an explicit architecture decision.
