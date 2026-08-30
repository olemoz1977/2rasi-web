# PrioLens project state

Status: ACTIVE RESEARCH / FUN-WITH-WISDOM PRODUCT BOUNDARY / INF GATE D1 = PARTIAL_IDENTITY / CER↔INF R05 STAGE 2 REVEAL READY
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## 1. Product boundary

PrioLens is a short image-choice experience, not a long reflection questionnaire.

Working principle:

> **For Fun, but with Wisdom.**

Public flow target:

```text
START
→ visual pair
→ choose
→ visual pair
→ choose
→ ...
→ short result / mirror
```

Production boundary:
- no mandatory free text;
- no mandatory ratings/confidence/intensity;
- no explanation after every choice;
- no personality/diagnosis/hidden-self language;
- no claim that response time reveals a motive;
- `no_clear_choice` remains possible;
- target duration about 2–4 minutes;
- working public interaction budget about 12–18 meaningful choices, 20 soft ceiling until UX evidence says otherwise.

Methodological complexity belongs behind the product, not inside the public flow.

Source: `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`.

## 2. Safe inference target

Working object:

> repeated pre-deliberative choice tendencies within this session and empirically supported visual tradeoffs.

Preferred result language is session-bound, e.g.:

> `Kai rinkaisi greitai, be ilgos analizės, tavo pasirinkimuose dažniau laimėdavo ...`

Do not claim a hidden/subconscious true self, strict personality rank, employment suitability or stable trait.

## 3. Current directions are research hypotheses

Current non-exhaustive working set:
- AUT · Autonomy / Pasirinkimo laisvė
- CER · Certainty / Aiškumas
- EXP · Exploration / Tyrinėjimas
- MAS · Mastery / Meistriškumas
- CON · Connection / Ryšys
- INF · Influence / Poveikis
- PRO · Protection / Apsauga
- OPP · Opportunity / Galimybė

Exactly eight public scores are not a requirement. Keep only directions that survive research.

## 4. Inference boundary

```text
WORKING DIRECTION HYPOTHESIS
→ SCENE PROPERTY / CONTROLLED CONTRAST
→ PARTICIPANT RESPONSE
→ EMPIRICAL MAPPING EVIDENCE
→ DIRECTION-LEVEL DESCRIPTIVE INFERENCE
```

Designer intent does not give psychological meaning to raw A/B choice.

## 5. Matched-edge rule

Matched-edge is the primary research path, but `matched` does not mean mechanically identical at any cost.

> Match context, legitimacy, valence, status and visual salience strongly enough to control nuisance differences, while preserving the target meanings.

A pair can be visually clean yet semantically too thin.

PrioLens remains distinct from 2Pair only if a higher-level working direction preserves coherent meaning across different opponents and scene mechanisms.

Source: `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`.

## 6. Gate D1 · INF cross-edge direction identity

Working INF definition:

> meaningful impact on the direction, decision or outcome of an external/shared situation.

Original test:
- R01 · CON ↔ INF
- R02 · MAS ↔ INF
- R03 · AUT ↔ INF

Claude blind Stage 1 independently grouped intended INF sides R01-A, R02-B and R03-A under a recurring idea: actor effect extends outward and changes shared/external routing or allocation.

Claude Stage 2:
- R01: SUPPORTED
- R02: CROSS_LOAD
- R03: SUPPORTED
- Gate result: **PARTIAL_IDENTITY**

R01 and R03 remain the two current INF identity anchors.

Source: `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`.

## 7. Closed third-opponent attempts

### MAS↔INF · STOPPED
Three attempts failed for different reasons:
- original R02: skill/tool-complexity asymmetry;
- R02R: clean mechanics but construct dilution, MAS→accuracy and INF→routing;
- R02S: clean blind contrast but reveal CROSS_LOAD, MAS→careful manual action and INF→neutral control/routing.

Decision: do not iterate MAS↔INF again for Gate D1.

### PRO↔INF R04 · STOPPED BEFORE REVEAL
Blind verdict: AMBIGUOUS.

Problem:
- PRO side = preventive/protective action;
- INF side became zero-sum resource allocation, one equal recipient gets water while another does not;
- fairness/deprivation / `solving vs creating a problem` valence risk can dominate.

Decision: no reveal, no render, no iteration of this zero-sum grammar.

Sources:
- `docs/GROK_MAS_INF_R02R_STAGE2_RESULT_v0.1.md`
- `docs/CLAUDE_MAS_INF_R02S_STAGE2_RESULT_v0.1.md`
- `docs/PRO_INF_R04_BLIND_STAGE1_RESULT_v0.1.md`

## 8. Current third opponent · CER↔INF R05

R05 shared context:
- neutral tabletop channel/flow board;
- same hand, central area, two equal routes and same neutral tokens;
- same camera, lighting, materials, counts and salience;
- no labels, color coding, reward, hazard, status or destination advantage.

Hidden A = CER candidate:
- slides aside modest frosted inspection cover;
- current internal path becomes directly visible;
- flow is not redirected;
- reveal is not staged as mystery/surprise.

Hidden B = INF candidate:
- moves central junction piece;
- same existing flow changes to the other equal route;
- amount/speed/route count/attractiveness stay unchanged;
- distinctive consequence is change in external flow course.

### Locked blind Stage 1 result

Verdict: **CLEAN_CONTRAST**.

Reviewer independently described:
- A = `look`: reveals existing internal state without changing downstream routing;
- B = `steer`: changes routing so the flow follows the other route.

Spontaneous preference language:
- A: certainty/confirmation before acting, value of knowing current state, possible curiosity;
- B: direct action/control, changing outcomes rather than observing.

Reviewer found no obvious dominance in competence, difficulty, prestige, safety, completion, attractiveness, power, usefulness, consequence or visual salience.

One-sentence blind contrast:

> One option shows the current path without changing it, while the other option changes which path the flow follows.

Residual semantic risks:
- A could still be generic inspection/reveal or EXP;
- B could still be generic control/routing rather than INF;
- `look vs steer` could reflect passive/active preference rather than CER↔INF.

Source: `docs/CER_INF_R05_BLIND_STAGE1_RESULT_v0.1.md`.

## 9. Immediate next action

Run one Stage 2 reveal in the SAME reviewer thread so Stage 1 remains locked.

Reveal:
- A = CER · Certainty / Aiškumas
- B = INF · Influence / Poveikis

Definitions:
- CER: clarity, predictability or knowing what applies, what is present or what is likely to happen.
- INF: meaningful impact on the direction, decision or outcome of an external/shared situation.

Stage 2 must judge:
1. whether mapping fits locked Stage 1 interpretation;
2. SUPPORTED / CROSS_LOAD / INSUFFICIENT;
3. strongest competing interpretation for A and B;
4. whether A is CER beyond generic inspection/reveal or curiosity;
5. whether B is INF beyond generic control/routing/causality;
6. whether passive-vs-active framing dominates;
7. whether R05 is safe enough to advance to rendered visual testing;
8. whether R05's INF meaning matches R01/R03's common external/shared directional-consequence core.

Final action:
- ADVANCE_TO_RENDER / REVISE / REJECT.

If R05 fails, STOP searching edge-by-edge for a third INF opponent and reassess INF representation strategy. If R05 is SUPPORTED and cross-edge meaning matches R01/R03, advance R01/R03/R05 to rendered diagnostic validation. AI concept review still does not validate INF or justify a public score.

## 10. Short-product implication

A complete 28-edge tournament is not automatically required.

If direction identity survives rendered human research, investigate balanced incomplete/adaptive schedules. Bradley–Terry / Thurstone-style models remain candidates, not selected methodology.

12–18 trials are a UX target, not a validated measurement minimum. Uncertainty, ties, cycles and `no_clear_choice` must remain visible.

## 11. Render execution rule

When rendering becomes justified:
1. one image task at a time;
2. new scene = new generation context;
3. controlled edit of accepted base where appropriate;
4. if target meanings require different actions, match context/legitimacy/valence/salience rather than forcing microscopic edits;
5. reject labels, collages, multi-state images and unrelated scene changes.

## 12. Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/CER_INF_R05_BLIND_STAGE1_RESULT_v0.1.md`
4. `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
5. `docs/PRO_INF_R04_BLIND_STAGE1_RESULT_v0.1.md`
6. `docs/CER_INF_R05_CONCEPT_v0.1.md`
7. `docs/CER_INF_R05_BLIND_STAGE1_v0.1.md`
8. `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`
9. `docs/GROK_MAS_INF_R02R_STAGE2_RESULT_v0.1.md`
10. `docs/CLAUDE_MAS_INF_R02S_STAGE2_RESULT_v0.1.md`
11. `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
12. `docs/STIMULUS_RESEARCH_GATES_v0.2.md`
13. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
14. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
15. `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
16. `docs/RED_TEAM_SYNTHESIS_v0.1.md`
17. older global-stimulus material as historical context only.

## Recovery instruction

If context is lost, start from this file. Do not reconstruct PrioLens from the old 16-stimulus/28-edge freeze plan, do not import ConflictLab scoring assumptions, and do not turn the public product back into a long per-choice reflection protocol.
