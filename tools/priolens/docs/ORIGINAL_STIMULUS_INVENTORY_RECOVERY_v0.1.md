# PrioLens original stimulus inventory recovery v0.1

Status: RECOVERY / SOURCE-GROUNDED / DO NOT GUESS MISSING LINKS
Date: 2026-08-31

## Purpose

Reconstruct the original PrioLens standalone-image stimulus bank from the old working beta and red-team material before doing any new stimulus design.

This file separates:
- facts directly recovered from source material;
- historical design decisions;
- unresolved links that must not be guessed.

## Original architecture recovered

The original PrioLens v0.1 architecture used:
- 8 working directions;
- 2 independent standalone visual exemplars per direction;
- 16 active stimuli total;
- 28 unique direction-v-direction edges in a full core session;
- two displayed images are selected from independently registered stimuli, not created as one matched A/B scene.

Original working directions:
1. connection
2. opportunity
3. certainty
4. exploration
5. autonomy
6. influence
7. mastery
8. protection

The old beta contains stable stimulus IDs:
- autonomy-01 / autonomy-02
- certainty-01 / certainty-02
- exploration-01 / exploration-02
- mastery-01 / mastery-02
- connection-01 / connection-02
- influence-01 / influence-02
- protection-01 / protection-02
- opportunity-01 / opportunity-02

The beta embeds the actual images as base64 data URLs, so the original 16 assets are technically recoverable from the HTML without regenerating them.

## Red-team blind stimulus set recovery

The independent red-team used blind IDs S01–S16. Intended direction mapping and synthesis status are directly recovered below.

| Blind ID | Intended direction | Recovered blind semantic note | Red-team action |
| --- | --- | --- | --- |
| S01 | EXP | exact scene description not yet recovered from synthesis; plausible exploration but leakage to OPP/AUT | REWORK / retest |
| S02 | INF | chain reaction / causality | REWORK / retest |
| S03 | CON | positive dyadic social scene; strong face/social salience | KEEP only as candidate; confound remains |
| S04 | INF | mechanical/system/causality; semantically complex/cross-loaded | REPLACE preferred |
| S05 | AUT | exact scene description not yet recovered from synthesis; mapping disagreement | REPLACE or redesign |
| S06 | CER | checklist / completion / organization | REWORK / retest |
| S07 | OPP | food / nourishment / abundance; reward-dominated | REPLACE preferred |
| S08 | PRO | semantically plausible protection; staging/mood risk | REWORK / retest |
| S09 | EXP | exact scene description not yet recovered from synthesis; sharp reviewer disagreement | REPLACE or redesign |
| S10 | CER | visually/semantically ambiguous container scene | REPLACE preferred |
| S11 | AUT | exact scene description not yet recovered from synthesis; autonomy not spontaneously foregrounded by all reviewers | REPLACE or redesign |
| S12 | MAS | precision measurement / craftsmanship | STRONGEST CANDIDATE |
| S13 | PRO | protective case visible, but protected object identity/value/fragility weak | REPLACE preferred |
| S14 | CON | exact scene description not yet recovered from synthesis; CON/INF ambiguity | REWORK / retest |
| S15 | OPP | greenhouse / growth / greenery; strong positive nature/green confound | KEEP only as provisional candidate |
| S16 | MAS | pottery / craftsmanship / mastery; craft aesthetic pull | STRONGEST CANDIDATE |

## Direction-level recovery

### MAS
Best old semantic robustness.
- S12 and S16 both survived AI review strongly.
- Risk: both are active skilled-hand / craft scenes, so current diversity is weak.
- Historical next move: keep them as anchors but add materially different MAS exemplars.

### CON
Potentially viable.
- S03 clearer than S14.
- Main risk: people/faces/social salience may dominate choices.

### INF
Not ready.
- S02 clearly shows causality but may only mean generic chain reaction.
- S04 is mechanical and cross-loaded.
- Both share a causal-mechanism family.

### AUT
Not robust.
- S05 and S11 produced reviewer disagreement.
- Current scenes depend too much on inferred context/story.

### CER
Partly readable but leaky.
- S06 reads as explicit state / checklist but also completion/achievement.
- S10 reads as containment/protection/organization.

### EXP
Not robust.
- S01 plausible but leaks to OPP/AUT.
- S09 sharply split reviewers.

### PRO
Partly viable.
- S08 plausible but mood/staging matters.
- S13 failed because what is being protected is not clearly worth protecting.

### OPP
Highest old confound risk.
- S07 is reward/food dominated.
- S15 is nature/growth/positive-valence dominated.

## Critical unresolved mapping

The source material currently proves:
- which blind Sxx stimulus belonged to which intended direction;
- which two stable asset IDs existed for each direction in the beta;
- the semantic/red-team diagnosis for each Sxx.

It does **not yet prove the exact one-to-one link**:

`Sxx -> direction-01 or direction-02`

Do not infer that link from numbering order.

Recover it only from:
- the original blind-review packet if found;
- an original stimulus registry/export;
- or deterministic comparison of extracted beta assets with the blind-review images/descriptions.

## Historical architecture decision that still matters

The red-team explicitly stopped freezing the 16-image set.

The proposed next research architecture was a larger candidate bank, provisionally at least 4 independently designed exemplars per direction, followed by human semantic validation before pairwise preference testing.

This did **not** mean abandoning standalone images. It meant that two exemplars per direction were too few to separate direction signal from exemplar-specific effects.

## Recovery work order

1. Extract all 16 embedded beta images from `priolens_working_beta_v03.html`.
2. Save them under stable historical IDs without changing pixels.
3. Find/reconstruct the S01–S16 ↔ `direction-01/-02` mapping without guessing.
4. Produce contact-sheet / inventory with:
   - stable asset ID;
   - blind Sxx ID if recovered;
   - intended direction;
   - red-team verdict;
   - major confounds;
   - KEEP / REWORK / DROP historical status.
5. Only after that decide which old assets seed a larger 4+ exemplar-per-direction candidate pool.

## Guardrail

Do not design new matched same-scene A/B pairs while this recovery is incomplete.

Do not regenerate an old stimulus that still exists embedded in the beta.

Do not promote an Sxx stimulus to a stable direction exemplar merely because one AI reviewer accepted it.
