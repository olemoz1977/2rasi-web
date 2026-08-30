# PrioLens stimulus architecture alternatives v0.1

Status: ARCHITECTURE REOPENED / PRE-ASSET
Date: 2026-08-30

## Why this review exists

The current red-team path moved from `2 exemplars per direction` toward a larger rotating exemplar pool. That is a reasonable repair, but ConflictLab v0.8 exposes a deeper alternative:

> Instead of comparing unrelated global exemplars, construct **matched visual contrasts** inside the same or functionally equivalent scene.

ConflictLab's useful design principles were:
- dominant visible manipulation;
- minimal irrelevant change;
- equal legitimacy of both sides;
- blind human reasons before signal interpretation;
- no cue/explanation can rescue a weak visual contrast.

PrioLens should test whether those principles produce a cleaner pairwise tradeoff architecture than global direction exemplars.

## Architecture A · Global direction exemplar pool

Current redesign idea:
- 8 directions;
- >=4 materially different exemplars per direction;
- each trial pairs one exemplar from direction A with one from direction B;
- exemplar combinations rotate across participants;
- direction/exemplar/family effects retained for analysis.

### Strengths
- simple conceptual model;
- each direction has reusable exemplars;
- direct test of whether a direction generalizes across different visual families;
- asset count can start around 32.

### Weaknesses
- cross-direction trials remain visually heterogeneous;
- CON may systematically contain people/faces, OPP reward/resources, PRO barriers/threat, MAS skilled action, etc.;
- even semantically valid exemplars can carry direction-correlated modality/valence/salience;
- participant may be choosing domains/aesthetics rather than the intended priority tradeoff;
- single-image semantic validation requires a stronger property: each image must independently communicate a direction.

## Architecture B · Edge-specific matched tradeoff pairs

For each of the 28 direction edges, design one controlled scene with two variants:

```text
same / functionally equivalent context
        ↓
variant A makes direction A the dominant legitimate priority
variant B makes direction B the dominant legitimate priority
```

Example structure only, not a frozen stimulus:

`AUT vs CER`
- same neutral task/context;
- AUT variant: several equally legitimate self-directed methods are visibly available;
- CER variant: one clearly defined method/state is visibly specified;
- camera, lighting, actors, object count and overall visual value remain matched as closely as possible.

### Strengths
- directly operationalizes the actual tradeoff rather than two unrelated images;
- both sides can share people/no-people, color, lighting, domain and visual complexity;
- sharply reduces direction-specific visual-family confounds within a trial;
- face/social salience can be matched on both sides when CON is one competitor;
- reward/resource content can be matched on both sides when OPP is one competitor;
- each direction naturally appears in seven different opponent/context manifestations;
- human validation can ask whether the **difference that drove the choice** matches the intended edge, which is closer to the actual product task.

### Weaknesses
- 28 bespoke matched pairs = at least 56 assets;
- two independent scenario families per edge would mean 112 assets;
- designing equal-legitimacy contrasts for nearest-neighbour directions may be very hard;
- direction meaning may become opponent-specific;
- one scenario per edge still confounds edge meaning with that scenario at group level;
- aggregation to direction-level wins remains descriptive and requires replication before broader claims;
- participants may learn the manipulation style if many pairs look too experimentally matched.

## Architecture C · Shared-context direction panels

Create a small number of neutral base contexts. Within each context create one variant for each of the eight directions. Pairwise trials always compare two direction variants from the same context.

Illustrative design:
- 4 base contexts x 8 direction variants = 32 assets;
- each edge is assigned one context per participant;
- contexts rotate across participants.

### Strengths
- within-trial visual matching;
- fewer assets than bespoke 28-edge matched pairs;
- direct cross-context direction generalization test;
- each direction represented across multiple contexts.

### Weaknesses
- finding one base context capable of expressing **all eight** directions without artificial storytelling may be impossible;
- repeated context variants can create obvious task-learning/demand effects;
- CON/social and OPP/future-value may still require scene changes too large to count as matched.

Status: conceptually attractive but likely difficult.

## Key methodological insight

The original single-image semantic gate may be **stronger than the product actually requires**.

If PrioLens remains a pairwise tradeoff tool, it does not necessarily need every standalone image to be independently nameable as `AUT` or `OPP`.

It needs stronger evidence that:

> within a controlled A-v-B contrast, the reason participants distinguish/select the sides corresponds to the intended competing priorities rather than to a stronger incidental difference.

This suggests two different semantic-validation targets:

### Global exemplar architecture
Validate each image/family independently, then validate pairwise choices.

### Matched-edge architecture
Validate the pair contrast itself:
1. show matched pair blind;
2. capture choice / no_clear_choice;
3. ask open-ended `Kas nulėmė skirtumą / pasirinkimą?` after choice;
4. code whether the reason is direction-A relevant, direction-B relevant, cross-load, confound, insufficient or NONE;
5. only then reveal/compare intended edge definitions in a separate research step.

The second target is closer to ConflictLab Wave 1's successful methodological discipline.

## Why this matters for the current confounds

### CON faces
Global pool: CON uniquely carries faces/social scenes.
Matched edge: when CON competes with MAS/PRO/INF/etc., both variants can contain the same people and social context; the manipulated difference can be relationship vs the competing priority.

### OPP reward
Global pool: OPP tends to carry visible reward/resource value.
Matched edge: the same resource/value can appear on both sides; the difference can be how the opportunity is framed/acted on relative to the opponent direction.

### PRO negative mood
Global pool: PRO tends to carry rain/threat/darkness.
Matched edge: the same exposure can appear on both sides, with the competing direction changing the response/configuration rather than the hazard itself.

### MAS skilled hands
Global pool: skilled-action aesthetics may become MAS's signature.
Matched edge: both variants can contain the same task/actor; the difference can be precision/skill emphasis vs another legitimate priority.

## Major caution

Matched pairs do **not** automatically solve construct validity.

They only improve experimental control.

A matched pair still fails if:
- the intended A/B difference is not visually dominant;
- one side is obviously better/more rational/socially desirable;
- participants describe a third factor instead of either intended direction;
- the contrast requires hidden narrative;
- one direction can only be expressed through caricature.

## Recommended decision test before committing architecture

Do not generate 32 global exemplars or 56 matched assets yet.

Run a **text-only matched-edge concept feasibility sprint** on the hardest nearest-neighbour edges:

1. AUT ↔ OPP
2. AUT ↔ EXP
3. AUT ↔ INF
4. CER ↔ PRO
5. EXP ↔ OPP
6. MAS ↔ INF
7. CON ↔ INF

For each edge:
- design 2 independent matched scene concepts;
- describe only visible differences;
- enforce equal legitimacy and minimal irrelevant change;
- blind-review the pair concept without direction labels;
- ask what contrast the reviewer sees;
- after reveal, classify `SUPPORTED / CROSS_LOAD / INSUFFICIENT / NONE`.

Compare those results against the global scene-property-family concepts already drafted.

## Decision rule for architecture choice

Prefer **matched-edge architecture** if it consistently:
- produces cleaner blind interpretation of the intended tradeoff;
- reduces face/food/nature/threat/technical-family asymmetry;
- avoids hidden story more often than standalone exemplars;
- preserves equal legitimacy on both sides.

Prefer **global exemplar pool** if matched scenes:
- become artificial;
- require too much scene-specific narrative;
- make directions opponent-dependent in inconsistent ways;
- cannot create independent scenario replications.

A hybrid remains possible, but should not be chosen merely to avoid making a decision.

## Current recommendation

**REOPEN the stimulus architecture before asset generation.**

The larger global exemplar pool remains a valid candidate, not the default.

The next highest-information step is the 7-edge text-only matched-concept sprint. It can falsify or support the matched-edge approach cheaply before any new image generation.
