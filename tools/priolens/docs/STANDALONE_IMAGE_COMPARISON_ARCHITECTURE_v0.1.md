# PrioLens standalone-image comparison architecture v0.1

Status: ACTIVE ARCHITECTURE CORRECTION
Date: 2026-08-31

## Core correction

PrioLens does **not** use a 2Pair-style matched A/B scene as its fundamental stimulus unit.

The fundamental stimulus unit is:

> **one standalone image**

A public trial is only a presentation/comparison event:

```text
standalone image 1
vs
standalone image 2
→ quick choice
```

The two images do not need to be variants of one scene, use the same object, share one action mechanism, or encode a local before/after-style contrast.

Calling the screen a "pair" must not imply a matched-pair stimulus architecture.

## Distinction from 2Pair

2Pair research is pair-local: meaning is investigated through a controlled A/B relation inside a deliberately matched pair.

PrioLens is image-first:
- individual images are created and screened as standalone semantic stimuli;
- two screened images are later juxtaposed for a forced/optional choice;
- the comparison schedule is an assembly layer, not the source of each image's meaning.

Therefore PrioLens must not require:
- same scene on both sides;
- one manipulated property difference;
- matched-object A/B variants;
- a participant to notice "what changed" between the two images.

## Research boundary

Designer intent still does not validate an image.

Each standalone image must first survive an independent semantic screen:

> What does this image visibly represent to viewers without being contrasted against another image?

Only then should it enter comparison trials.

A safe pipeline is:

```text
candidate semantic family / hypothesis
→ multiple standalone image exemplars
→ blind standalone semantic screening
→ retain images with sufficiently convergent interpretation
→ assemble two-image comparison trials
→ collect rapid choices
→ inspect repeated choice patterns across varying opponents
→ descriptive session mirror
```

## Why this matters

Matched-pair optimization can accidentally make PrioLens converge back toward 2Pair:
- both sides share one scene;
- research focuses on the exact local difference;
- the user is effectively choosing between two manipulations of one object.

That is not required for PrioLens and can make the public experience visually repetitive and overly technical.

PrioLens is allowed to compare two clearly different scenes if both standalone images are semantically interpretable and gross nuisance differences are controlled.

## What still needs control

Independent scenes do not mean uncontrolled scenes.

Across images used in comparison trials, screen and balance major nuisance cues where practical:
- positive/negative valence;
- attractiveness/aesthetic reward;
- threat or loss;
- people count/social salience;
- status/prestige;
- visual complexity;
- brightness/color saturation;
- obvious difficulty or expertise;
- completion/success cues;
- scale/magnitude;
- novelty.

The goal is not pixel-level matching. It is to avoid one image winning for a reason unrelated to the intended semantic family.

## Candidate directions after the correction

AUT, CER, EXP, MAS, CON, INF, PRO and OPP remain research hypotheses only.

The previous INF and MAS gates do not prove those semantic families invalid. They tested a stronger and partly 2Pair-derived requirement: preserving one direction as a pole across different matched opponents/mechanisms.

The corrected PrioLens question is different:

> Can multiple independent standalone images intended to express the same candidate family be recognized as sharing a useful semantic core without pair context?

If yes, those images may be compared against screened images from other families.

If not, the candidate family should be narrowed, split or dropped.

Exactly eight final public scores are still not required.

## Comparison layer

Once standalone stimuli are screened, trial construction can vary opponents.

Possible later designs include balanced incomplete or adaptive paired-comparison schedules. Bradley-Terry / Thurstone-type models remain statistical candidates only; no model is selected yet.

A comparison result is meaningful only after the standalone stimuli themselves are semantically understood.

## Immediate consequence

Stop building matched Preserve↔Refine versions of the same scene merely to create a pair.

The recent X12/X13 work is retained as stimulus-design evidence:
- X12 showed how matched-pair pressure can force physically implausible actions;
- X13 Refine is a plausible standalone image candidate;
- X13 Preserve may also be a plausible standalone image candidate, but it does not need to be a controlled mate to X13 Refine.

Next research task:
1. define a small set of candidate semantic families;
2. create 3–5 **standalone** image concepts per family using genuinely different scene mechanisms;
3. blind-screen images individually;
4. only after that build two-image choice trials.

## Product boundary

Public interaction remains:

```text
START
→ two images
→ choose
→ two images
→ choose
→ ...
→ short session mirror
```

No mandatory writing, no per-choice explanation, no diagnosis, no hidden-self claim.

**For Fun, but with Wisdom.**
