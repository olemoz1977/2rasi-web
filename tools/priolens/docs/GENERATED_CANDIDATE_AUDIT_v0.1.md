# PrioLens generated candidate audit v0.1

Status: WORKING DESIGN AUDIT / NOT A STIMULUS FREEZE
Date: 2026-08-29

## Scope

This checkpoint audits the generated 1:1 weak-direction candidates produced during the current design session. The image binaries are currently conversation uploads and have **not** been copied into the repository or assigned immutable hashes.

This was an informed design audit, not a blind validation study: the intended directions were known while prompts were written and while images were reviewed. Therefore a `PASS` below means "defensible design candidate", not validated construct evidence.

## Current candidates

### INF · Influence

#### INF-A · hand redirects a marble flow through a physical gate

- Source upload: `4602.png` in the current design session.
- Semantic status: `SEMANTIC_PASS`.
- Rationale: a visible action changes the outcome of an external system; the consequence is visible rather than implied by status or social role.
- Nearest-neighbour challenge:
  - vs AUT: the action changes an external flow rather than choosing the actor's own path.
  - vs MAS: the image emphasizes consequence on the system more than skilled execution quality.
- Visual status: `VISUAL_PASS_WITH_MECHANISM_FLAG`.
- Main risk: control/mechanism imagery may itself become attractive to technically oriented participants.

#### INF-B · control panel with knobs and indicators

- Source upload: `4599.png` in the current design session.
- Earlier provisional decision: KEEP as INF.
- Strict semantic re-audit: `SEMANTIC_AMBIGUOUS`.
- Problem: the panel visibly affords control, but the image does **not** show what external/shared outcome changes. Under the frozen INF definition, control affordance alone is insufficient evidence of influence.
- Nearest-neighbour risk: MAS/control-system competence and AUT/personal control remain plausible.
- Current disposition: **DO NOT FREEZE.**

#### INF-C · hand opens an irrigation gate and water reaches several young-plant beds

- Source upload: `4612.png`.
- Semantic status: `SEMANTIC_PASS`.
- Rationale: one visible action changes a wider external system and its consequence is visible in the same frame as water is distributed toward multiple beds.
- Nearest-neighbour challenge:
  - vs AUT: the action is not about choosing the actor's own route; it changes what happens across the external irrigation system.
  - vs MAS: the image does not depend on precision, craftsmanship or quality of execution; the central cue is consequence.
  - vs OPP: young plants are neutral and no valuable harvest/potential-gain cue dominates.
- Visual status: `VISUAL_PASS_WITH_NATURAL_SYSTEM_FLAG`.
- Main risk: agriculture/nature affinity and moving-water salience.
- Independence status versus INF-A: `PAIR_INDEPENDENCE_FAIL`.
- Independence problem: INF-A and INF-C use the same underlying scene logic: **hand + gate/lever + routed physical flow + visible downstream consequence**. Changing marbles to water does not create a conceptually independent exemplar family.
- Current disposition: **KEEP AS A STRONG INF CANDIDATE, BUT DO NOT PAIR WITH INF-A AS THE FINAL TWO.** One of INF-A/INF-C may survive; a different INF scene family is still required.

### MAS · Mastery

#### MAS-A · hands measure/adjust a small mechanical part with a caliper and precision tool

- Source upload: `4604.png`.
- Semantic status: `SEMANTIC_PASS`.
- Rationale: precision, measurement, skilled adjustment and quality control are directly visible.
- Nearest-neighbour challenge:
  - vs INF: the action improves/controls work quality rather than shaping a shared external outcome.
  - vs CER: measurement is present, but the central cue is skilled execution, not merely obtaining clarity.
- Visual status: `VISUAL_PASS_WITH_DOMAIN_FLAG`.
- Main risk: technical/industrial-domain affinity.

#### MAS-B · potter's hands form a symmetrical clay vessel on a wheel

- Source upload: `4605.png`.
- Semantic status: `SEMANTIC_PASS`.
- Rationale: hand control, refinement, symmetry and skilled execution are directly visible.
- Nearest-neighbour challenge:
  - vs INF: the image is about capability/quality, not external impact.
  - vs OPP: no opening/potential-gain cue dominates.
- Visual status: `VISUAL_PASS_WITH_DOMAIN_FLAG`.
- Main risk: craft/tactile aesthetic affinity.
- Independence status versus MAS-A: `PAIR_INDEPENDENCE_PASS`.
- Independence rationale: technical measurement/adjustment and tactile form-making are different scene/content families while preserving skilled execution as the shared priority.

### OPP · Opportunity

#### OPP-A · open greenhouse with visibly productive plants and ripe produce

- Source upload: `4607.png`.
- Semantic status: `SEMANTIC_PASS`.
- Rationale: an accessible opening leads to already visible value; the opportunity does not depend on uncertainty or multiple choices.
- Nearest-neighbour challenge:
  - vs EXP: value is visible; discovery is not required.
  - vs AUT: there is one accessible opportunity rather than freedom among alternatives.
- Visual status: `VISUAL_PASS_WITH_DOMAIN_FLAG`.
- Main risk: nature/food positive valence and ripe-produce salience.

#### OPP-B · neutral prepared food table with one empty plate

- Source upload: `4611.png`.
- Semantic status: `SEMANTIC_PASS_PROVISIONAL`.
- Rationale: useful value is visibly prepared, available and immediately accessible; the single empty plate makes access legible without a hidden narrative.
- Nearest-neighbour challenge:
  - vs CON: no people, celebration, multiple place settings or explicit relationship cue are present; nevertheless shared-food schemas remain possible.
  - vs MAS: no skill/performance process is shown.
  - vs EXP/AUT: no unknown content or multiple-choice structure is present.
- Visual status: `VISUAL_PASS_WITH_REWARD_FLAG`.
- Main risk: appetite/hunger state and food reward salience may influence choice independently of OPP.
- Independence status versus OPP-A: `PAIR_INDEPENDENCE_PROVISIONAL_PASS`.
- Independence rationale: productive access through a greenhouse and immediately consumable prepared value are different immediate scene structures, but both still occupy food/resource domains.
- Cross-set caution: retain a shared food/reward-domain flag for the final 16-set audit.

## Rejected OPP attempts from the same session

- `4606.png` greenhouse with strong poor-outside/rich-inside contrast: semantic OPP pass, visual fail due luminance/color/valence contrast.
- `4608.png` apple tree + empty basket: semantic pass, but too close in domain/content to greenhouse OPP for a two-exemplar set.
- `4609.png` woodworking blank + empty bench: visual pass, semantic ambiguity with MAS.
- `4610.png` metal materials + empty workspace: visual pass, semantic ambiguity with MAS.

## Six-candidate weak-direction cross-set checkpoint

Current strict status:

- INF: **two strong semantic candidates exist (INF-A, INF-C), but they fail pair independence because both instantiate routed-flow control. The direction still lacks a second independent exemplar family.**
- MAS: **2 defensible, independent candidates**. Generation can stop for MAS.
- OPP: **2 provisional defensible candidates**, but both retain positive-resource/food-domain risk. Generation can stop for OPP for now; the pair must be challenged again in the final 16-set audit.

### Cross-direction notes

- MAS-A versus INF-A/INF-C: sufficiently separable at the semantic level because MAS-A centers skilled precision while INF centers downstream consequence. However technical/mechanical visual affinity between MAS-A and INF-A remains a set-level style/domain concern.
- MAS-B provides useful domain diversity and reduces the risk that MAS becomes synonymous with industrial/technical skill.
- OPP-A and OPP-B have stronger positive/reward valence than the current MAS candidates and likely stronger natural/color salience than INF candidates. This requires later normalization/challenge before final freeze.
- INF-A and INF-C should **not** both enter the final 16 even though both individually pass.

## Next action

Do **not** generate more MAS or OPP candidates now.

INF still needs **one conceptually independent scene family** in which a visible action changes a consequential external/shared outcome, while avoiding:

- routed flows, gates, valves or branching channels;
- generic control panels with no visible consequence;
- authority/status/social-role stereotypes;
- dominance/coercion;
- precision/craft imagery that collapses into MAS.

Candidate design should be solved before any additional rendering. No further image generation is authorized merely to fill quota.

After a genuinely different INF concept exists and passes review, rerun the weak-direction cross-set audit and then return to the full 16-stimulus candidate set.

No generated candidate is frozen or copied into runtime assets by this document.