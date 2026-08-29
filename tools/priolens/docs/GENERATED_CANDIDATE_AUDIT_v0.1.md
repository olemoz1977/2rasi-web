# PrioLens generated candidate audit v0.1

Status: WORKING DESIGN AUDIT / NOT A STIMULUS FREEZE
Date: 2026-08-29

## Scope

This checkpoint audits generated 1:1 weak-direction candidates from the current design session. Image binaries are conversation uploads/generated assets and are **not** repository assets or hash-frozen stimuli.

This is an informed design audit, not a blind validation study. `PASS` means defensible design candidate, not validated construct evidence.

## INF · Influence

### INF-A · hand redirects marble flow through a physical gate

- Source upload: `4602.png`.
- Semantic status: `SEMANTIC_PASS`.
- Rationale: a visible action changes the outcome of an external physical system; consequence is visible in-frame.
- Nearest neighbours:
  - vs AUT: external system outcome, not actor's own route.
  - vs MAS: consequence dominates over skilled execution.
- Visual status: `VISUAL_PASS_WITH_MECHANISM_FLAG`.
- Risk: control/mechanism affinity.

### INF-B · control panel with knobs and indicators

- Source upload: `4599.png`.
- Status: `SEMANTIC_AMBIGUOUS / DO_NOT_FREEZE`.
- Problem: control affordance is visible but the affected external/shared outcome is not.

### INF-C · irrigation gate distributes water toward several young-plant beds

- Source upload: `4612.png`.
- Semantic status: `SEMANTIC_PASS`.
- Rationale: one visible action changes a wider external system and the downstream consequence is visible in the same frame.
- Visual status: `VISUAL_PASS_WITH_NATURAL_SYSTEM_FLAG`.
- Independence versus INF-A: `PAIR_INDEPENDENCE_FAIL`.
- Reason: both instantiate the same underlying logic: **hand + gate/lever + routed physical flow + downstream consequence**.
- Disposition: keep as a strong alternative to INF-A, but do not pair INF-A and INF-C as the final two.

### Rejected INF attempts

- room light-switch images: visible local consequence, but too low-stakes and strongly luminance-driven; not accepted as a clean independent INF exemplar.
- letter/mailbox: external consequence hidden outside the frame; postal-symbol/brand confound.
- recycling-compactor button: result already present; causal consequence not visible.
- fire alarm: PRO/threat semantics dominate.
- park/playground gates: collapse toward OPP/AUT because access/opening dominates.
- repeated pump/sluice/irrigation variants: conceptually duplicate INF-C routed-flow family.
- window-opening images: personal environment control / OPP-AUT ambiguity, no visible broader consequence.
- first-aid/resource storage variants: collapse toward PRO/OPP and lack a visible causal outcome.
- drinking fountain / pump variants: again collapse to button + water-flow logic.

### Procedural domino reference

`4614.png` is **not a generated PrioLens stimulus**. It is a crude Python-drawn composition reference created only to force a future image generator toward a branching chain-reaction geometry.

Status: `PROCEDURAL_REFERENCE_ONLY / NOT A STIMULUS / NEVER SCORE OR FREEZE`.

It must not be counted as a positive INF result, candidate image, or evidence of visual quality.

### Current INF conclusion

Current strict status: **one independent defensible scene family only**.

- Family 1: routed physical consequence, represented by INF-A or INF-C.
- A second conceptually independent photographic INF exemplar is still missing.

Therefore **INF generation remains open**. The project must not claim two independent INF exemplars yet.

## MAS · Mastery

### MAS-A · precision mechanical adjustment

- Source upload: `4604.png`.
- Status: `SEMANTIC_PASS / VISUAL_PASS_WITH_DOMAIN_FLAG`.
- Precision, measurement, skilled adjustment and quality control are directly visible.

### MAS-B · potter forms a symmetrical clay vessel

- Source upload: `4605.png`.
- Status: `SEMANTIC_PASS / VISUAL_PASS_WITH_DOMAIN_FLAG`.
- Hand control, refinement, symmetry and skilled execution are directly visible.
- Independence versus MAS-A: `PAIR_INDEPENDENCE_PASS`.

Current MAS status: **2 defensible independent candidates**. No more MAS generation is justified now.

## OPP · Opportunity

### OPP-A · open greenhouse with visible productive value

- Source upload: `4607.png`.
- Status: `SEMANTIC_PASS / VISUAL_PASS_WITH_DOMAIN_FLAG`.
- Value is visible and accessible; discovery or multiple-choice semantics are not required.
- Risk: nature/food positive valence.

### OPP-B · prepared neutral food table with one empty plate

- Source upload: `4611.png`.
- Status: `SEMANTIC_PASS_PROVISIONAL / VISUAL_PASS_WITH_REWARD_FLAG`.
- Prepared value is visibly available for immediate use.
- Risk: appetite/reward salience and residual shared-food/CON schema.
- Independence versus OPP-A: `PAIR_INDEPENDENCE_PROVISIONAL_PASS`, but both remain positive food/resource domains.

Rejected OPP attempts:

- `4606`: excessive poor-outside/rich-inside luminance/valence contrast.
- `4608`: semantically good but too close to greenhouse/harvest domain.
- `4609`: ambiguous with MAS.
- `4610`: ambiguous with MAS.

Current OPP status: **2 provisional independent candidates**, pending full-set valence/domain challenge.

## Weak-direction checkpoint

Current strict state:

- INF: **1 independent defensible family** → genuine gap remains.
- MAS: **2 defensible independent candidates**.
- OPP: **2 provisional independent candidates**, with shared reward/food-domain risk.

## Next action

1. Continue INF concept design until one **photorealistic, conceptually independent** second INF candidate passes semantics, pair independence and visual-confound review.
2. Do not count procedural references, mockups or low-quality composites as stimuli.
3. Once INF has two independent candidates, return to AUT/CER/EXP/CON/PRO.
4. Assemble a proposed 16-candidate set and run full-set luminance/contrast/complexity/salience/style/valence/domain-overlap audit.
5. Only then select/freeze assets and assign immutable hashes.
