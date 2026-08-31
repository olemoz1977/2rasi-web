# PrioLens P3 slot balancing spec v0.1

Status: ACTIVE TECHNICAL SPEC
Date: 2026-08-31

## Problem

The first owner P3 run used 14 three-image trials with 14 active stimuli (7 directions × 2 exemplars). Each stimulus appeared exactly 3 times, but top / middle / bottom positions were not balanced. This creates an avoidable position confound.

Required invariant for the current 14-trial design:

> Every stimulus appears exactly once in top, once in middle and once in bottom across its three presentations.

This automatically gives each direction 2 / 2 / 2 slot exposure across its six presentations.

## Why exact balancing is always possible for this design

Represent the fixed P3 schedule as a bipartite incidence graph:

- left side: 14 trial nodes;
- right side: 14 stimulus nodes;
- connect a trial to each of its three displayed stimuli.

In the current P3 block:

- every trial contains exactly 3 stimuli → every trial node has degree 3;
- every stimulus is shown exactly 3 times → every stimulus node has degree 3.

Therefore the incidence graph is a **3-regular bipartite graph**.

A regular bipartite graph can be decomposed into perfect matchings. For this graph, decompose the edges into three disjoint perfect matchings:

1. matching A → TOP;
2. matching B → MIDDLE;
3. matching C → BOTTOM.

Because each perfect matching touches every trial exactly once and every stimulus exactly once, the resulting assignment guarantees:

- one top, one middle and one bottom item in every trial;
- every stimulus occupies each slot exactly once across its three appearances.

## Planner algorithm

Input: 14 unordered triples, already satisfying the P3 incidence requirements.

1. Build trial ↔ stimulus incidence edges.
2. Find a perfect matching in the full bipartite graph.
3. Assign those matched edges to TOP and remove them.
4. Find a perfect matching in the remaining 2-regular bipartite graph.
5. Assign those edges to MIDDLE and remove them.
6. The remaining edges become BOTTOM.
7. Validate all invariants before the session can start.

A standard bipartite matching implementation is sufficient. At this size, deterministic augmenting-path matching is enough; Hopcroft–Karp is optional, not required.

## Required validation

The planner must fail closed if any condition is false:

- 14 trials;
- 3 unique stimuli per trial;
- 14 active stimuli;
- each stimulus appears exactly 3 times;
- every trial has exactly one top, one middle and one bottom;
- every stimulus appears exactly once in each slot;
- each direction appears 2 times in each slot across its six presentations.

The final assigned schedule must be persisted before the measured block begins.

## Randomization without losing balance

Balance does not require a fixed visual order across sessions.

After obtaining the three perfect matchings, a seeded session may randomly permute the slot labels `[TOP, MIDDLE, BOTTOM]` across the three matchings. The trial sequence may also be seeded-shuffled independently.

Do not independently shuffle the three items inside each trial after the balanced assignment, because that destroys the invariant.

## Scope

This is a presentation-balancing specification only. It does not validate the P3 measurement model, the seven active directions, or any stimulus mapping.
