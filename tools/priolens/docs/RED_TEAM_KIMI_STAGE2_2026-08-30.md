# PrioLens red-team checkpoint — Kimi Stage 2

Status: EXTERNAL AI REVIEW / EVIDENCE INPUT, NOT GROUND TRUTH
Date: 2026-08-30

## Review design

Kimi first completed a blind Stage 1 review of neutral stimulus IDs S01–S16 without intended direction labels. Only after that review was frozen were the intended mappings and working direction definitions revealed for Stage 2.

## Stage 2 verdict by stimulus

| Neutral ID | Internal stimulus | Intended | Kimi Stage 2 |
|---|---|---|---|
| S01 | 3098 | EXP | MAPPED → EXP |
| S02 | 4641 | INF | MAPPED → INF |
| S03 | 4646 | CON | MAPPED → CON, weak/heavily confounded |
| S04 | 4602 | INF | AMBIGUOUS — INF / MAS |
| S05 | 4655 | AUT | FAIL |
| S06 | CER-CHECKLIST-01 | CER | MAPPED → CER |
| S07 | 4638 | OPP | MAPPED → OPP, but food/reward confound stronger than direction signal |
| S08 | 2723 | PRO | MAPPED → PRO |
| S09 | 4649 | EXP | FAIL |
| S10 | 4650 | CER | MAPPED → CER |
| S11 | 4656 | AUT | FAIL |
| S12 | 4635 | MAS | MAPPED → MAS |
| S13 | 4645 | PRO | AMBIGUOUS — PRO / MAS |
| S14 | 2624 | CON | MAPPED → CON |
| S15 | 4637 | OPP | MAPPED → OPP |
| S16 | 4636 | MAS | MAPPED → MAS |

Note: Kimi's own summary tally says MAPPED=10 but lists 11 mapped stimuli. The row-level verdicts sum to 11 mapped + 2 ambiguous + 3 fail = 16. Preserve row-level data rather than the arithmetic typo.

## Findings with immediate design consequence

### AUT is not currently operationalized successfully

Both AUT exemplars failed independently:
- S05 / 4655 reads as beverage/tool use, with OPP/MAS stronger than AUT.
- S11 / 4656 reads as professional work / broadcasting, with MAS/INF stronger than AUT.

This is stronger than a single-asset defect. Current AUT slot coverage must be reopened.

### EXP has one failed exemplar

S09 / 4649 reads as organization / known possessions and is closer to CER/AUT than EXP. EXP cannot remain 2/2 on the current evidence.

### INF pair is not independent enough

S02 / 4641 is a strong INF mapping. S04 / 4602 is ambiguous INF/MAS. Kimi also flags the pair as one wooden mechanical causality family rather than conceptually independent realizations. INF slot 1 and pair-independence must be reopened.

### PRO has one ambiguous exemplar

S13 / 4645 is split between protection and mastery because the professional-looking metal object competes with the fitted-foam cue. PRO-2 should be treated as unresolved, not PASS.

### OPP remains structurally confounded

Both exemplars map to OPP after reveal, but both share edible-resource / reward content. S07 in particular may win because it is appetitive and colorful rather than because it instantiates opportunity. This is now a stronger structural concern, not merely cosmetic valence cleanup.

### CON has a modality confound

Both CON exemplars contain people/faces while most other directions do not. Kimi identifies face/social salience as a structural unfairness. This does not by itself invalidate CON semantics, but it must be tested empirically and may require cross-direction modality balancing.

### CER passes semantically but remains modality-correlated

Both CER exemplars map successfully after reveal, but both are bright/minimal/explicit-state scenes. S06 additionally relies on symbolic checkmarks rather than scene semantics.

## Current evidence classification

Under RED_TEAM_REVIEW_PROTOCOL_v0.1:

- AUT dual failure: B-level candidate once independently replicated by another reviewer; currently strong C-level external evidence plus internal pilot anomaly.
- EXP-2 failure: C-level evidence pending independent reviewer replication.
- INF pair non-independence / INF-1 ambiguity: C-level evidence, already aligned with prior internal concern about mechanical-domain affinity.
- PRO-2 ambiguity: C-level evidence.
- OPP food/reward confound: converges with prior internal full-set audit; treat as B-level design concern once a second blind external reviewer independently flags it.
- CON face modality confound: converges with prior internal audit; empirical test required.

## Consequence

The previous repository statement that the active blocker is only asset cleanup is obsolete.

Do not freeze the current 16.

Reopen at minimum:
- AUT both slots,
- EXP slot 2,
- INF slot 1 / pair independence,
- PRO slot 2.

Keep but challenge aggressively:
- OPP both slots,
- CON modality balance,
- CER modality balance.

MAS currently remains the cleanest direction pair in this external review.

## Next red-team step

Do not redesign from one AI review alone. Run the same blind Stage 1 + reveal Stage 2 protocol independently with at least one additional multimodal model. Do not show Kimi's conclusions to the next reviewer.

Architecture changes should follow decisive defects or convergent independent findings, not AI-vote averaging.
