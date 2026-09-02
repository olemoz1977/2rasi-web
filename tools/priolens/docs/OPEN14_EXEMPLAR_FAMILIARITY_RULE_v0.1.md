# PrioLens Open14 exemplar familiarity rule v0.1

Status: PRE-PILOT DESIGN RULE FOR NEXT OWNER PROTOTYPE / PUBLIC OPEN14 v0.2 UNCHANGED
Date: 2026-09-03

## Problem

Open14 has 14 families, two active exemplars per family and three appearances per family in a 14-triad session. Therefore one exact exemplar must appear twice unless the protocol or bank size changes.

Repeated exposure to an exact image can plausibly change familiarity, salience, fluency or preference. In a first-pull task this is a potential nuisance variable. It must not be silently interpreted as stronger family-level psychological evidence.

The current v0.2 design already has one important protection:
- family-level repetition evidence requires choices spanning both exemplars;
- same-exemplar repetition alone is not family-level evidence.

The remaining weakness is temporal: `p3_open14_exemplar_assigner_v01.mjs` chooses the singleton occurrence from screen-slot balancing, not from temporal order. The repeated exact exemplar can therefore recur too soon.

## Decision

Do not create additional images merely to solve familiarity.

For the next owner prototype, keep the existing 14-family / 28-exemplar bank and change only sequence / exemplar assignment.

Public `/priolens-open14-v02/` remains unchanged until the owner prototype gate passes and a protocol version bump is explicitly accepted.

## Required temporal assignment

For every family, after the 14 trial order is fixed:

1. identify the family's three temporal appearances: early, middle and late;
2. assign the repeated exemplar to the early and late appearances;
3. assign the other exemplar to the middle appearance;
4. therefore each family follows an exact-image temporal pattern `A-B-A` or `B-A-B`, never `A-A-B` or `B-A-A`;
5. the repeated exact exemplar is thus separated as much as possible for that family.

## Required constrained trial order

The next owner planner should use deterministic seeded rejection sampling over the existing valid 14-trial design until all of the following hold:

- all existing planner invariants remain true: each family shown 3 times, 1/1/1 across slots, three distinct macro domains per triad, no repeated family pair, 42 unique pair co-occurrences, six unique opponents per family;
- for every family, the distance from its earliest to latest appearance is at least 5 trial positions, meaning at least four intervening triads between repeated occurrences of the exact exemplar;
- the temporal-middle singleton-slot counts are compatible with exact A/B slot balancing.

Feasibility check performed before this rule was written:
- valid random trial orders with minimum family span >=5 occur often enough for lightweight rejection sampling;
- adding the slot-balance compatibility constraint remains computationally cheap (roughly on the order of tens to low hundreds of seeded shuffle attempts, not a runtime concern).

## Exemplar balance

After the temporal singleton occurrence is fixed:

- keep seven families with A as the repeated exemplar and seven with B as the repeated exemplar;
- choose repeated side within temporal-middle slot groups so global totals remain A=21 / B=21;
- preserve per-screen-slot A=7 / B=7 where the constrained-order compatibility condition permits it;
- validate all counts automatically before a session starts.

## Result rule

Participant-facing family evidence must remain cross-exemplar.

Do not treat raw `3/3` as categorically stronger psychological evidence than cross-exemplar `2/3`, because the third observation necessarily contains an exact-image repeat.

Preferred participant meaning:
- `cross-exemplar repeat` = the family attracted attention through both different images;
- raw 2/3, 3/3 and exact exemplar counts remain owner / analysis telemetry.

If counts are displayed to participants during owner prototyping, they must not be labelled as strength scores.

## Analysis telemetry

The existing runtime already stores exact exemplar identity and trial order. Familiarity / repetition effects can therefore be inspected without inventing a psychological score.

For pilot analysis derive, per exposure:
- family exposure index (1/2/3);
- exact exemplar exposure index (1/2);
- trials since same family;
- trials since same exact exemplar;
- whether the current choice repeated a previously chosen exact exemplar.

A useful nuisance check is whether selection probability systematically rises on the second exposure to the same exact exemplar after controlling descriptively for family and exemplar identity.

Do not use owner / household rows as construct evidence; they may only be used to smoke the sequencing and telemetry.

## Research interpretation boundary

This rule controls a possible familiarity nuisance. It does not prove that first-pull choices are subconscious needs, true priorities or unmet needs.

The active research question remains about cross-exemplar repeated visual pull and its relationship with independently reported current sufficiency beyond stimulus-specific salience and chance.
