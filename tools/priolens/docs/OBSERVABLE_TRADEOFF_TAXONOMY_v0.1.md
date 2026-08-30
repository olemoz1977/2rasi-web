# PrioLens observable tradeoff taxonomy v0.1

Status: ARCHITECTURE PIVOT / PRE-HUMAN SCREEN / NOT PSYCHOLOGICAL SCORING
Date: 2026-08-31

## Purpose

After INF Gate D1 and MAS Gate D2 failed to establish robust broad direction identity, the unit of design is changed from a predeclared psychological direction to a repeated **observable tradeoff**.

An observable tradeoff is:

> a controlled A/B difference that can be described from the visible scene itself without relying on a hidden story or higher-order psychological label.

The same tradeoff may be realized in multiple scene families. Only if human semantic and choice data later show a broader common meaning should a higher-order label be considered.

## Safe architecture

```text
OBSERVABLE TRADEOFF
→ multiple controlled scene realizations
→ rapid participant choices
→ repeated session pattern
→ descriptive mirror
```

Not:

```text
hidden psychological direction
→ designer-chosen images
→ score
```

## Candidate OT-01 · OBSERVE STATE ↔ CHANGE STATE

Core visible distinction:
- Observe: reveal or make the current state directly legible without altering it.
- Change: physically alter the current state, relation, route or configuration.

Evidence basis:
- CER↔INF R05 blind Stage 1 was CLEAN_CONTRAST and independently summarized as `look` vs `steer`.
- MAS↔CER R02 was also legible as reveal/observe vs physical correction, though Claude flagged a progress advantage on the correction side.

Safe interpretation:
- `Kai reikėjo rinktis tarp pamatyti dabartinę būseną ir ją pakeisti, šioje sesijoje dažniau rinkaisi ...`

Not allowed:
- Certainty
- Influence
- action orientation
- decisiveness
- curiosity
unless later evidence supports those mappings.

Main nuisance risks:
- change side can look more useful/productive/consequential;
- reveal side can look passive;
- mystery/novelty can turn reveal into Exploration.

Status:
> STRONG LOCAL CANDIDATE / NEEDS CHANGE-SIDE CONSEQUENCE BALANCING

## Candidate OT-02 · LOCAL CONFIGURATION ↔ SHARED-PROCESS STEERING

Core visible distinction:
- Local configuration: actor changes only their own setup/method; shared process remains unchanged.
- Shared-process steering: actor changes the course/allocation of a process beyond their own local task.

Evidence basis:
- INF Gate D1 R03 AUT↔INF was SUPPORTED.
- Blind interpretation clearly separated self-contained consequence from shared/external routing effect.

Safe interpretation:
- `Kai pasirinkimas buvo tarp savo darbo būdo pakeitimo ir bendros proceso eigos pakeitimo, šioje sesijoje dažniau rinkaisi ...`

Not allowed:
- Autonomy
- Influence
- leadership
- power
- control need
unless later evidence supports them.

Main nuisance risks:
- ownership inference on local setup;
- authority/status on shared steering;
- shared steering may look more consequential.

Status:
> STRONG LOCAL CANDIDATE

## Candidate OT-03 · PRESERVE FORM/STATE ↔ REFINE FORM/QUALITY

Core visible distinction:
- Preserve: stabilize/protect an existing state against unwanted change.
- Refine: actively alter the same object toward a more controlled fit/form/quality criterion.

Evidence basis:
- MAS D2 R01 was locally readable by both Claude and Grok.
- Grok blind Stage 1 judged CLEAN_CONTRAST.
- Claude blind Stage 1 judged AMBIGUOUS because refinement carried a stronger visible skill cue.

Safe interpretation:
- `Kai vienas pasirinkimas išsaugojo esamą būseną, o kitas ją tikslino ar tobulino, dažniau rinkaisi ...`

Not allowed:
- Protection
- Mastery
- conservatism
- perfectionism
unless later evidence supports them.

Main nuisance risks:
- refinement may look more skilled/active;
- preservation may look passive/low-difficulty;
- finished-quality reward must not appear.

Status:
> CANDIDATE / REQUIRES SKILL-SALIENCE BALANCING

## Candidate OT-04 · RECIPROCAL EXCHANGE ↔ INDEPENDENT QUALITY EXECUTION

Core visible distinction:
- Reciprocal exchange: participants mutually pass/receive equivalent elements; relationship between actors is central.
- Independent quality execution: same-status participants each focus on producing a controlled fit/form independently.

Evidence basis:
- MAS D2 R03 was locally readable by both reviewers.
- Grok blind Stage 1 judged CLEAN_CONTRAST.
- Claude blind Stage 1 judged AMBIGUOUS due a stronger precision/skill cue on the independent-execution side.

Safe interpretation:
- `Socialiniame kontekste, kai vienas variantas buvo abipusis apsikeitimas, o kitas individualus tikslus atlikimas, dažniau rinkaisi ...`

Not allowed:
- Connection
- Mastery
- introversion/extraversion
- teamwork preference
unless later evidence supports them.

Main nuisance risks:
- social salience/faces;
- skill cue asymmetry;
- exchange can look trivial unless both actions are equally meaningful.

Status:
> CANDIDATE / HIGH SOCIAL-MODALITY RISK

## Candidate OT-05 · PRECISION POSITIONING ↔ ROUTE STEERING

Core visible distinction:
- Precision positioning: action changes exact fit/alignment/position of a bounded component.
- Route steering: action changes which equal path an existing flow follows.

Evidence basis:
- MAS↔INF R02R blind review returned CLEAN_CONTRAST after complexity was balanced.
- Reveal failed because the sides under-expressed broad Mastery/Influence labels.
- That failure is not a failure of the local visible contrast itself.

Safe interpretation:
- `Kai vienas variantas reikalavo tiksliai sureguliuoti padėtį, o kitas pakeisti srauto kryptį, dažniau rinkaisi ...`

Not allowed:
- Mastery
- Influence
- control
- competence
unless later evidence supports them.

Main nuisance risks:
- mechanical-domain preference;
- route change may feel more consequential;
- precision can drift into difficulty/technicality.

Status:
> STRONG LOCAL MECHANICAL CANDIDATE

## Candidate OT-06 · RECIPROCAL RELATION ↔ SHARED-SYSTEM STEERING

Core visible distinction:
- Reciprocal relation: mutual exchange/contact among equal participants without changing system route/allocation.
- Shared-system steering: one equal participant changes route/allocation while others remain active and non-subordinate.

Evidence basis:
- INF Gate D1 R01 mapping was SUPPORTED after reveal.
- Blind Stage 1 clearly saw reciprocal social engagement vs shared-system route change, but judged the significance AMBIGUOUS.

Safe interpretation:
- only the literal local contrast until stronger evidence exists.

Not allowed:
- Connection
- Influence
- leadership
- people vs task orientation
unless later evidence supports them.

Main nuisance risks:
- people-focus vs task-focus may explain the choice better;
- social salience;
- one differentiated action can attract attention.

Status:
> SECONDARY CANDIDATE / NOT FIRST HUMAN SCREEN

## Candidate priority for first human semantic screen

Recommended first wave:
1. OT-01 OBSERVE STATE ↔ CHANGE STATE
2. OT-02 LOCAL CONFIGURATION ↔ SHARED-PROCESS STEERING
3. OT-03 PRESERVE ↔ REFINE
4. OT-05 PRECISION POSITIONING ↔ ROUTE STEERING

Hold OT-04 and OT-06 until social-modality confounds are better controlled.

## Required replication rule

A tradeoff is not a usable PrioLens pattern after one pair.

For each OT candidate, build at least 3 materially different scene realizations while preserving the same observable relation.

A tradeoff survives only if blind human descriptions converge on the same local distinction across scene families.

## Human semantic screen before public scoring

For each rendered pair collect, in research only:
- forced A/B or no-clear-choice;
- one short open reason after a subset of trials, not every public-product choice;
- independent semantic coding of what difference the participant saw;
- optional confidence only in research, not required in product.

Primary criterion:

> Does the same observable tradeoff remain recognizable across different scenes without a hidden label?

Only after this should repeated participant choices be interpreted as a session pattern.

## Product-level mirror concept

The mirror can remain short and low-reading.

Example structure:

> `Kai rinkaisi greitai, šioje sesijoje keli kontrastai kartojosi.`
>
> `Dažniau rinkaisi pakeisti būseną nei tik ją pamatyti.`
>
> `Kai pasirinkimas buvo tarp savo darbo būdo ir bendros proceso eigos, dažniau rinkaisi ...`
>
> `Kai kuriose porose aiškaus pasikartojimo nebuvo.`

This is descriptive, session-bound and falsifiable. It does not claim a hidden trait.

## Distinction from 2Pair

2Pair can remain pair-local and reflective.

PrioLens remains distinct if it tests whether the **same observable tradeoff** recurs across multiple scene families and produces a short repeated-pattern mirror.

PrioLens does not need to force broad psychological categories to be distinct from 2Pair.

## Next design gate

Before generating many assets, take the four first-wave OTs and create **three text-level scene realizations each**.

Blind-review the replication identity at the observable level only.

If even observable tradeoffs do not preserve identity across scene families, static-image PrioLens architecture should be reconsidered more radically.
