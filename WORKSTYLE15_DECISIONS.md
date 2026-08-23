# WorkStyle 15 — decision log

Status: ACTIVE WORKING DECISIONS
Last updated: 2026-08-23

## Current product identity

Name: **WorkStyle 15**

Purpose: individual reflection on how a person tends to work.

Not a diagnostic personality test and not an official PAEI, DISC or MBTI assessment.

## Source architecture retained

Retain from the recovered legacy implementation:
- 15 dimensions;
- 6 higher-level WorkStyle groups;
- 1–5 response format;
- transparent scale-index scoring concept.

Do not treat legacy normalized percentages as population percentiles.

## Preferred questionnaire direction

**Preferred beta content: `WORKSTYLE15_ORIGINAL_75_LT_DRAFT.md`.**

Reason:
- fully original WorkStyle 15 wording;
- avoids dependence on undocumented legacy statement provenance/licensing;
- allows behavioural wording and balanced low-pole items to be designed intentionally;
- preserves the useful 15-dimension architecture without copying the old 150-item instrument.

The previous 45-legacy + 30-new Beta A blueprint remains a historical comparison/fallback design only.

## Preferred size

First pilot: **75 items = 15 dimensions × 5 items**.

Current original bank design:
- 60 direct-key;
- 15 reverse-key;
- one simple reverse item per dimension.

Do not shorten to 60 until pilot evidence identifies items that can be removed without hollowing out dimensions.

## Results already drafted

`WORKSTYLE15_INTERPRETATIONS_LT.md` contains:
- 15 dimension interpretations;
- useful higher/lower-pole framing;
- strengths/trade-offs;
- reflection prompts;
- 6 WorkStyle group interpretation boundaries.

Result rule: do not equate high with good or low with weak.

## External lenses

`WORKSTYLE15_PAEI_DISC_CROSSWALK.md` defines the first transparent correspondence model.

Current stance:
- PAEI and DISC are optional lenses over the measured WorkStyle profile;
- Primary / Secondary correspondence can be used for explanation/highlighting in the first beta;
- no official numeric PAEI/DISC claim yet;
- experimental weighted scores only after item-level review and pilot evidence.

Preferred visualization:
- 15 WorkStyle dimensions as measured core;
- 6 WorkStyle groups as summary layer;
- one outer toggle `PAEI | DISC` rather than stacking both permanently.

## Jungian / Myers-Briggs-style idea

Remembered but deferred.

Not part of V1/Beta.

If revisited later, use only as an optional Jungian preference correspondence lens and never claim an official MBTI type from WorkStyle responses.

## Organization-level idea

Separate future product: organization development / PAEI longitudinal measurement.

Do not create it by averaging personal WorkStyle profiles.

## Immediate gates before coding

1. Cognitive/language review of the 75 original LT items.
2. Cross-loading review: identify items that mainly measure a neighbouring dimension.
3. Approve final LT Beta wording and version IDs.
4. Generate a balanced fixed order using the original item IDs.
5. Implement LT beta with anonymous pilot instrumentation.
6. Translate to EN only after LT wording is stable.
7. Collect pilot evidence before shortening or introducing numeric external-lens scores.
