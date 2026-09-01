# F8 blind semantic check v0.1

Status: ACTIVE SOLO ADVERSARIAL CHECK
Date: 2026-08-31

## Purpose

Test whether two materially different standalone images converge on a similar lower-level visible mechanism without revealing any AUT/F8/broad-direction label to the reviewer.

This is not human validation and not construct validation. It is a blinded adversarial semantic check suitable for the current solo workflow.

## Images

- Blind A: historical S11 workstation-adjustment scene, generator mark removed only for review cleanliness.
- Blind B: new backpack shoulder-strap adjustment scene, generator mark removed only for review cleanliness.

The reviewer must see each image separately, ideally in separate fresh chats, and must not be told that the images are related.

## Reviewer prompt

Describe only what is visibly happening in this image.

Return exactly four sections:
1. Literal description — one sentence, no interpretation of personality, values, motives or preferences.
2. Best-fit visible concepts — three short action/state/relationship concepts, ranked from strongest to weakest.
3. Plausible alternative readings — three short alternatives that a reasonable viewer could also infer.
4. Visual confounds — up to five non-semantic visual properties that could dominate attention or preference.

Do not use or infer personality traits, psychological types, hidden motives, Autonomy, Influence, Mastery, Certainty, Exploration, Connection, Protection, Opportunity, or any other project-specific category. Do not compare this image with any other image. Do not guess what the experimenter intended.

## Decision rule

After independent descriptions are collected for A and B, compare only the blind outputs.

F8 earns `SEMANTIC_CONVERGENCE_CANDIDATE` only if:
- both literal descriptions centrally involve adjusting/configuring/tuning an immediate setup or personally used object;
- at least one of the top two best-fit visible concepts overlaps at mechanism level without relying on broad abstractions such as autonomy/control/freedom;
- neither image is dominated by a different scene story such as travel preparation, office productivity, ergonomic comfort, status or achievement;
- convergence is not created merely by both images containing hands.

If only one image recovers the mechanism, keep that image individually and do not claim a family.

If the overlap exists only after revealing the intended family, F8 fails this gate.

## Guardrail

Do not promote a positive result to AUT, a personality construct or a scoring dimension. A positive result supports only the lower-level descriptive family `local configuration / local adjustment` as a candidate for further testing.
