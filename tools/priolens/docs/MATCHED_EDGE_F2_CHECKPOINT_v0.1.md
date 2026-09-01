# PrioLens matched-edge Gate F2 checkpoint v0.1

Status: PROVISIONAL SUPPORT / INDEPENDENT REPLICATION PENDING
Date: 2026-08-30

## Question

Can the seven hardest PrioLens direction edges be represented as controlled matched-scene tradeoffs more cleanly than the previous unrelated global-exemplar architecture?

Tested edges: AUT↔OPP, AUT↔EXP, AUT↔INF, CER↔PRO, EXP↔OPP, MAS↔INF, CON↔INF. Two independent text-only scene concepts were created per edge, 14 total.

## Grok result

Stage 1, before seeing intended mappings, classified all 14 concepts as `CLEAN_CONTRAST`.

Stage 2, after preserving Stage 1 and revealing the intended mappings, classified all 14 concepts as `SUPPORTED` and gave the verdict `MATCHED_EDGE_PROMISING`.

Sources:
- `GROK_MATCHED_EDGE_STAGE1_v0.1.md`
- `GROK_MATCHED_EDGE_STAGE2_v0.1.md`

## Evidence this adds

Matched-edge design appears able to reduce some structural confounds of the old global-exemplar approach by holding social content, resource content, task domain, lighting and scene context more constant within each trial.

## Remaining risks

- Stage 2 can still rationalize a mapping once definitions are revealed.
- Several concepts reuse similar visual mechanisms, especially visibility vs enclosure, local vs broad effect, and multiple options vs one ready/revealed item.
- Direction meaning may become opponent-specific.
- Text-level cleanliness may not survive image rendering.
- Human participants have not yet shown that they describe these contrasts in the intended priority language.

## Current decision

**MATCHED-EDGE: PROMISING / NOT SELECTED.**

Do not freeze Architecture M or generate the full asset set yet.

## Required next evidence

1. Compare with the independently completed Claude Stage 1 + Stage 2 review.
2. Aggregate disagreements and failure modes rather than confidence averages.
3. If the independent reviews materially converge, render only a small feasibility subset spanning a strong edge, a difficult nearest-neighbour edge, a social edge and a future/unknown edge.
4. Blind-audit those rendered pairs before any larger image production.
5. Only then design human matched-pair semantic validation.
