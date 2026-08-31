# PrioLens Open14 social split and Success decision v0.1

Status: ACTIVE ARCHITECTURE DECISION
Date: 2026-09-01

## Trigger

The open-spectrum discussion exposed two issues in the first Open14 draft:

1. `CONNECTION` was still carrying several different social pulls;
2. `SUCCESS` was difficult to operationalize as an atomic visual impulse without collapsing into mastery, recognition, reward or completion.

The decision is to improve the candidate spectrum rather than preserve the first 14 labels by inertia.

## Decision 1 — split BELONGING from CONNECTION

### CONNECTION / reciprocity

Working pull:
> **I want direct contact or mutual exchange with another.**

Typical visible mechanisms:
- dyadic contact;
- reciprocal handling / passing;
- direct interpersonal exchange.

### BELONGING / togetherness / inclusion

Working pull:
> **I want to be with / part of others.**

Typical visible mechanisms:
- being inside a group/social circle;
- shared togetherness without one-to-one exchange being the main event.

Gallery already contains plausible BELONGING material, so this split does not require new image generation.

Current strongest existing candidates from the first-impulse audit:
- `S14.webp` — `bendrauti / veikti socialiniame rate`;
- `20260731_043300801.png` — `dalintis šiluma / būti kartu`.

Boundary remains empirical:
- group communication can still cross-load with CONNECTION;
- shared warmth can carry positive-valence/social-comfort salience.

That is acceptable for a broad scan. Do not sterilize them merely to force conceptual purity.

## Decision 2 — narrow CARE

CARE is not generic warmth, closeness or social contact.

Working pull:
> **I act for another person's welfare, including when it costs me some time, comfort or resource, or when I initiate help without being asked.**

The intended research space includes:
- altruistic helping;
- modest self-sacrifice;
- proactive / unsolicited assistance;
- caregiving directed toward another person's immediate welfare.

Important boundary:
- do not make CARE depend on heroic danger or extreme sacrifice;
- otherwise bravery/threat may dominate the choice;
- a small visible personal cost is enough.

### CARE-A mechanism candidate — visible self-cost

One person voluntarily gives another person protection / comfort / resource while accepting a small visible cost themselves.

Example mechanism class:
- one person shifts the available cover fully toward another person and becomes partly exposed themselves.

This is a mechanism note, not an image-generation prompt.

### CARE-B mechanism candidate — unsolicited practical help

One person notices another person struggling and starts helping before any visible request.

Example mechanism class:
- one person spontaneously helps gather or carry something the other person is visibly struggling with.

This is a mechanism note, not an image-generation prompt.

## Decision 3 — remove SUCCESS from Open14

`SUCCESS / achievement` remains theoretically meaningful, but it is not currently convincing as an atomic visual family.

The same visible success endpoint can be attractive for different reasons:
- `MASTERY` — doing it well;
- `RECOGNITION` — being seen / acknowledged;
- `RESOURCE` — obtaining the result/reward;
- `CONTROL` — reaching the desired state;
- `AUTONOMY` — accomplishing something on one's own terms;
- `OPPORTUNITY` — realizing an available possibility.

Therefore:

> **Do not force SUCCESS into the first broad visual scan merely because other motivational theories contain achievement/success constructs.**

Current status:
- `SUCCESS / ACHIEVEMENT = DERIVED / THEORY-HOLD`;
- keep it available for later pattern interpretation or targeted follow-up research;
- do not assign two Open14 stimulus slots to it now.

This is a research simplification, not a claim that achievement motivation does not exist.

## Decision 4 — RECOGNITION belongs to Agency / Esteem macro coverage

`RECOGNITION` is socially delivered, but the focal pull is one's contribution / standing being seen and acknowledged.

For Open14 macro-mixing it is therefore assigned to:
- `AGENCY / ESTEEM`, not the generic `SOCIAL` bucket.

This also preserves a more useful macro distribution:
- BASIC: 4 families;
- GROWTH: 4 families;
- SOCIAL: 3 families;
- AGENCY / ESTEEM: 3 families.

## Open14 v0.2 family set

### BASIC / STABILITY
1. REST
2. RESOURCE
3. SAFETY
4. ORDER

### SOCIAL
5. CONNECTION
6. BELONGING
7. CARE

### AGENCY / ESTEEM
8. AUTONOMY
9. CONTROL
10. RECOGNITION

### GROWTH / COGNITIVE / POSSIBILITY
11. MASTERY
12. EXPLORATION
13. KNOWLEDGE / LEARNING-UNDERSTANDING
14. OPPORTUNITY

## Asset consequence

With BELONGING filled from existing Gallery material, the minimum real Open14 gaps shrink from six images to approximately four:
- CARE A/B;
- RECOGNITION A/B.

Do not generate these automatically.

First keep the mechanisms explicit and only create prototypes when a human review gate says the mechanisms are worth visualizing.

## Planner consequence

A naive `SUCCESS -> BELONGING` label replacement breaks macro-domain mixing in the previous cyclic ordering.

Open14 v0.2 therefore receives a new family ordering and planner file:
- `research/p3_open14_planner_v02.mjs`.

The revised planner retains:
- 14 trials;
- each family exactly 3 appearances;
- each family exactly 1/1/1 across slots;
- three distinct macro domains per trial;
- no repeated family pair;
- 42 unique pair co-occurrences;
- six unique opponents per family.

The v0.2 implementation was smoke-tested across 1000 deterministic seeds with the validator passing every run.

## Product boundary

This remains a discovery scan, not a validated taxonomy.

Do not report:
- `you are a caregiver`;
- `you need belonging`;
- `you have an unmet recognition need`;
- `you are a rescuer`;
- any Karpman role from one or several image choices.

The visual task observes repeated choice patterns. Interpretation comes later and stays restrained.
