# PrioLens red-team synthesis v0.1

Status: ACTIVE DESIGN CHECKPOINT / FREEZE STOPPED
Date: 2026-08-30

## Scope

Independent AI review performed with the same blind 16-stimulus package. Reviewers were not shown one another's conclusions.

Reviewers:
- Kimi: Stage 1 blind coding + Stage 2 mapping challenge.
- Gemini: Stage 1 blind coding + methodological red-team challenge.
- Claude: Stage 1 blind coding + Stage 2 mapping challenge.

This synthesis is not evidence that AI reviewers are valid psychometric judges. It is an adversarial design checkpoint used to identify concrete semantic and confound risks before human pilot work.

## Immediate decision

**STOP stimulus freeze. CONTINUE research. REDESIGN stimulus architecture before external collection.**

The previous state "asset cleanup + re-audit of the same 16" is no longer sufficient. The current blocker is semantic robustness + stimulus-family confounding, not merely watermark/luminance cleanup.

## Strong cross-reviewer convergence from blind Stage 1

The following observations recur independently across Kimi, Gemini and Claude:

- S03: positive dyadic social scene; face/social salience is a major confound.
- S07: food/nourishment/abundance; food/reward confound is major.
- S15: greenhouse/growth/greenery; strong positive nature/green aesthetic confound.
- S12: precision measurement/craftsmanship; MAS semantic signal is strong.
- S16: pottery/craftsmanship/mastery; MAS semantic signal is strong, with craft aesthetic pull.
- S06: checklist/completion/organization; explicit-state meaning is clear, but completion semantics are present.
- S02: chain reaction/causality; visible meaning is clear, but whether that supports INF is disputed after reveal.
- S04: mechanical/system/causality scene; semantically complex and potentially cross-loaded.
- S10: visually/semantically ambiguous container scene.
- S13: protective case is visible but object identity/value/fragility is weak or ambiguous.

## Kimi vs Claude Stage 2 mapping disagreement

This disagreement is itself a design signal: several stimuli require interpretive rationalization after labels are revealed rather than carrying one robust intended meaning.

| Stimulus | Intended | Kimi | Claude | Current action |
|---|---|---|---|---|
| S01 | EXP | MAPPED | AMBIGUOUS EXP/OPP/AUT | REWORK / retest |
| S02 | INF | MAPPED | likely FAIL | REWORK / retest |
| S03 | CON | MAPPED, weak/confounded | PASS | KEEP only as candidate; face confound remains |
| S04 | INF | AMBIGUOUS INF/MAS | AMBIGUOUS/likely FAIL | REPLACE preferred |
| S05 | AUT | FAIL | PASS | REPLACE or redesign; mapping not robust |
| S06 | CER | MAPPED | AMBIGUOUS CER/MAS | REWORK / retest |
| S07 | OPP | MAPPED but reward-dominated | likely FAIL | REPLACE preferred |
| S08 | PRO | MAPPED | AMBIGUOUS | REWORK / retest |
| S09 | EXP | FAIL | PASS | REPLACE or redesign; mapping not robust |
| S10 | CER | MAPPED | AMBIGUOUS CER/PRO | REPLACE preferred |
| S11 | AUT | FAIL | PASS | REPLACE or redesign; mapping not robust |
| S12 | MAS | MAPPED | PASS | strongest candidate |
| S13 | PRO | AMBIGUOUS PRO/MAS | likely FAIL | REPLACE preferred |
| S14 | CON | MAPPED | AMBIGUOUS CON/INF | REWORK / retest |
| S15 | OPP | MAPPED, confounded | PASS, confounded | KEEP only as candidate; valence confound remains |
| S16 | MAS | MAPPED | PASS | strongest candidate |

## Direction-level diagnosis

### MAS
Best current semantic robustness. S12 and S16 are independently recognized as skill/craft/precision. However, both are active skilled-hand scenes and may still form a shared "craft action" family. Direction survives; exemplar diversity should improve.

### CON
Semantic content is understandable, but face/social salience is structurally unique. S03 is clearer than S14. The direction may be viable but current modality fairness is unresolved.

### INF
Current pair is not acceptable as a final pair. S02 is iconic causality but Claude rejects the leap from generic chain reaction to meaningful influence. S04 is cross-loaded and mechanical. Both share a causal-mechanism family. Redesign required.

### AUT
Current pair is not robust. Kimi rejects S05/S11 while Claude accepts both; Gemini Stage 1 did not spontaneously foreground autonomy in S11. This means AUT currently depends too much on inferred story/context. Redesign required.

### CER
Current pair has explicit-state logic but nearest-neighbour leakage remains. Checklist can read as completion/achievement; transparent box as containment/protection/organization. Redesign or stronger exemplars required.

### EXP
S01 is plausible but leaks to AUT/OPP. S09 sharply splits reviewers: Kimi FAIL vs Claude PASS. Redesign required before freeze.

### PRO
S08 is semantically plausible but mood/staging affects it. S13 does not reliably communicate a clearly fragile/valuable protected object. Replace S13; reconsider S08 staging.

### OPP
Highest structural confound risk remains. S07 and S15 are dominated by food/resource/nature/reward. S07 should be replaced. S15 may remain only as a provisional candidate while a non-food/non-nature independent OPP family is found.

## Methodological findings from Gemini review

Valid concerns to test empirically:
- spontaneous visual choice may be dominated by salience/aesthetic/valence rather than intended semantic direction;
- two exemplars per direction are insufficient to separate direction effect from exemplar effect;
- repeated calibration may include memory/fatigue/demand effects;
- low-level features should be measured and controlled;
- the instruction "which first attracts you" may measure visual attraction rather than priority unless construct-level evidence is demonstrated.

Reviewer claims NOT accepted as descriptions of the current protocol:
- the protocol does not require a strict linear 1–8 ranking;
- it does not require transitivity;
- it does not treat wins as a validated cardinal latent scale;
- top/bottom position is explicitly counterbalanced in the protocol.

Intransitive cycles should be measured as descriptive structure, not automatically treated as a mathematical failure.

## Architecture change under consideration

Do not freeze a 2-exemplar-per-direction set.

Next research architecture should use a larger candidate pool, provisionally **at least 4 independently designed exemplars per direction**, with participants seeing only a balanced subset and exemplar identities retained in data.

Purpose:
- estimate whether a direction-level signal survives across materially different images;
- separate participant, direction, exemplar and presentation effects;
- reduce dependence on any single image family.

This is a research architecture proposal, not yet frozen.

## Next falsification work

1. Stop cosmetic cleanup as the main priority.
2. Do not recruit a normal PrioLens preference pilot with the current 16 as if they were final.
3. Build/review a broader stimulus candidate pool, especially AUT, CER, EXP, INF, PRO and OPP.
4. Run **human semantic validation before preference testing**:
   - blind open-ended meaning;
   - optional mapping to the eight definitions only after open coding;
   - record intended-direction hit, neighbour confusion and confound ratings.
5. Quantify low-level image features (luminance, contrast, saturation, edge density; face/food/nature presence as categorical covariates).
6. Only after semantic screening run balanced pairwise preference pilot.
7. In pairwise data retain exemplar IDs and inspect direction vs exemplar effects.
8. Add descriptive intransitive-triad diagnostics.
9. Treat blur/mirror controls as possible falsification probes, not as participant-facing core protocol.

## Current bottom line

The eight-direction idea is **not falsified yet**, but the claim that the current 16 stimuli adequately operationalize it **has been falsified enough to stop freeze**.

The strongest surviving question is now:

> Can materially different exemplars of the same direction produce a reproducible direction-level choice signal after semantic fit and low-level visual confounds are controlled?

If the answer is no, PrioLens should stop or be reframed as an image-preference reflection task rather than a direction-level priority trace.
