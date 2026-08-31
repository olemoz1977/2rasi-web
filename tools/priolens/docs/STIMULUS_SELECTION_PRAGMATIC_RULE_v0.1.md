# PrioLens pragmatic stimulus selection rule v0.1

Status: ACTIVE GUARDRAIL
Date: 2026-08-31

## Why this exists

Recent work over-corrected toward laboratory-style visual isolation. That made stimulus design unnecessarily brittle and pushed PrioLens away from its product goal: fast, intuitive visual choices.

The product does not require each image to isolate a single mechanism with zero semantic leakage. It requires images that are immediately readable, reasonably unambiguous, and usable in a balanced bank that can later be empirically screened.

## Active selection question

For each standalone image, ask first:

> **What does a reasonable viewer see happening within about one second?**

Keep the image when:
- the first spontaneous reading is clear and close to the intended visible meaning;
- no competing interpretation is obviously stronger;
- the scene works at small mobile size;
- the image is not dominated by an irrelevant nuisance cue;
- the image adds useful scene diversity to the bank.

Do not reject an otherwise clear stimulus merely because secondary readings exist.

## What not to optimize for

Do not require:
- one perfectly isolated latent mechanism;
- zero semantic overlap with neighbouring concepts;
- same-scene matched controls;
- laboratory-style visual sterility;
- endless AI consensus before a stimulus can remain in the candidate pool.

Confounds still matter, but they are practical screening concerns, not automatic rejection triggers.

## AI role

Use blind AI descriptions only as a rough adversarial check:
- What is the first visible action/state?
- What plausible alternatives appear?
- Is some irrelevant visual property dominating attention?

AI agreement is not construct validation.

If the first reading is obvious enough that a normal viewer can state it without explanation, the image may stay in the candidate bank even when AI can invent secondary alternatives.

## Product-level principle

PrioLens should prefer:

`clear scene -> quick intuitive reading -> diverse candidate bank -> later empirical filtering`

over
`theoretically perfect isolation -> increasingly artificial scene -> slow stimulus production`.

This rule does not restore the old eight broad directions as validated scores. Broad labels remain hypotheses. It only prevents over-engineering individual visual stimuli.

## Example from current work

The physical audio control panel with fingers turning a volume knob should be read pragmatically as:

> `adjusting volume / changing a local setting`

The presence of level indicators is a secondary design consideration, not by itself a reason to reject the image as contaminated by a different semantic family.

## Guardrail

When a stimulus is clear at first glance, move on. Do not keep inventing theoretical reasons to reject it unless a competing reading or visual confound is genuinely likely to dominate real user choice.