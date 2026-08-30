# PrioLens project state

Status: ACTIVE RESEARCH / FUN-WITH-WISDOM PRODUCT BOUNDARY / INF GATE D1 = PARTIAL_IDENTITY / PRO↔INF R04 BLIND REVIEW READY
Updated: 2026-08-30
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## 1. Product job

PrioLens is intended to be a short image-choice experience, not a long reflection questionnaire.

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
- no mandatory rating/confidence/intensity questions;
- no explanation after every choice;
- no personality or diagnosis language;
- no claim that response time reveals a hidden motive;
- `no_clear_choice` remains possible;
- target public duration about 2–4 minutes;
- working public interaction budget about 12–18 meaningful choices, with 20 as a soft ceiling until UX evidence says otherwise.

Methodological complexity belongs behind the product, not inside the user's flow.

Source: `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`.

## 2. Safe inference target

Working object:

> repeated pre-deliberative choice tendencies within this session and empirically supported visual tradeoffs.

Preferred result language remains session-bound, e.g.:

> `Kai rinkaisi greitai, be ilgos analizės, tavo pasirinkimuose dažniau laimėdavo ...`

Avoid hidden/subconscious true-self claims, strict personality ranking, employment suitability or trait language.

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

Exactly eight public scores are not a product requirement. If only some directions survive research, build only those.

## 4. Non-negotiable inference boundary

```text
WORKING DIRECTION HYPOTHESIS
→ SCENE PROPERTY / CONTROLLED CONTRAST
→ PARTICIPANT RESPONSE
→ EMPIRICAL MAPPING EVIDENCE
→ DIRECTION-LEVEL DESCRIPTIVE INFERENCE
```

Designer intent does not assign psychological meaning to raw A/B choice.

## 5. Research layer vs public product

Research mode may include open reasons, hard-to-identify, framing experiments, repeated edge realizations, blind semantic coding and longer schedules.

Public product should consume only mappings/stimuli that survived research. The public user should not perform the researchers' validation work.

## 6. Architecture history

The old global-exemplar candidate used 8 directions, 2 exemplars per direction, 16 standalone stimuli and a complete `C(8,2)=28` tournament. Red-team work stopped freeze-readiness because of semantic instability and direction-correlated visual families. Those assets remain historical only.

Architecture M uses edge-specific matched comparisons. Gate F2 made M the primary research path, not a product freeze.

Important refinement from later work:

> matched-edge does not mean making both sides mechanically identical at any cost.

Match context, legitimacy, valence, status and visual salience strongly enough to control obvious nuisance differences, but preserve the target meanings. A pair can be visually clean yet semantically too thin.

## 7. PrioLens vs 2Pair boundary

Matched-edge visual discipline can resemble 2Pair. The critical PrioLens distinction must be higher-level direction identity across different opponents and scene mechanisms.

If INF in different edges becomes unrelated local meanings, summing them into one INF result is researcher-imposed aggregation.

Source: `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`.

## 8. Gate D1 · INF cross-edge direction identity

Working INF definition:

> meaningful impact on the direction, decision or outcome of an external/shared situation.

Original three-edge test:
- R01 · CON ↔ INF
- R02 · MAS ↔ INF
- R03 · AUT ↔ INF

Claude blind Stage 1, before seeing mapping, independently grouped intended INF sides R01-A, R02-B and R03-A under a recurring broader idea: the actor's effect extends outward and changes a shared/external routing or allocation.

Claude Stage 2:
- R01: SUPPORTED
- R02: CROSS_LOAD
- R03: SUPPORTED
- Gate result: **PARTIAL_IDENTITY**

R01 and R03 remain the two current INF identity anchors.

Source: `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`.

## 9. MAS↔INF path is now STOPPED for Gate D1

Three MAS↔INF attempts were informative but unsuccessful as the third INF identity edge.

### Original R02
Problem:
- MAS side used visibly more skill/tool complexity;
- INF side used a simpler selector;
- Stage 2: CROSS_LOAD.

### R02R
Repair:
- strongly equalized mechanics, control family, effort and complexity.

Result:
- blind Stage 1: CLEAN_CONTRAST;
- reveal Stage 2: INSUFFICIENT / REVISE;
- MAS collapsed to generic accuracy;
- INF collapsed to generic routing/causality.

Lesson:

> over-matching can remove confounds while also removing the constructs.

### R02S
Shared greenhouse context with materially different meaningful actions:
- A = precise grafting/pruning candidate for MAS;
- B = irrigation redistribution candidate for INF.

Claude blind Stage 1:
- CLEAN_CONTRAST;
- A spontaneously read as precision/skill execution;
- B spontaneously read as allocation/distribution.

Claude Stage 2:
- CROSS_LOAD;
- final action: REVISE.

Reason:
- A still closer to careful manual action than broad Mastery;
- B still closer to generic control/routing than meaningful external/shared Influence;
- deliberately neutralizing downstream value under-powered INF consequence.

Project decision:

> **Do not iterate MAS↔INF again for Gate D1.**

This does not reject MAS or INF as working directions. It means this edge is currently a poor identity test under static matched-scene constraints.

Sources:
- `docs/GROK_MAS_INF_R02R_STAGE2_RESULT_v0.1.md`
- `docs/CLAUDE_MAS_INF_R02S_STAGE2_RESULT_v0.1.md`

## 10. New third INF opponent · R04 PRO↔INF

PRO is selected instead of CER as the replacement third opponent.

Reason:
- PRO has comparatively direct static visual grammar through barrier/shielding/preservation;
- CER would likely require an information-visibility/inspection mechanism that risks EXP/inspection cross-load;
- PRO's main threat/valence risk can be deliberately suppressed with low-arousal environmental exposure.

R04 shared context:
- ordinary outdoor garden/work area;
- two equal planting beds;
- one simple central irrigation manifold;
- same worker, camera, lighting, plant density, water amount and visual attractiveness.

Hidden Variant A = PRO candidate:
- worker closes a fitted protective cover around the central manifold;
- mild dry leaves/light dust are physically intercepted;
- no storm, damage, danger, darkness, locks or security symbolism;
- routing remains unchanged.

Hidden Variant B = INF candidate:
- worker uses the central routing gate;
- the same fixed water flow is redirected from one equal bed to the other;
- during the visible moment one bed receives the shared flow and the other does not;
- total water, number of beds and attractiveness remain fixed;
- no greener/better/rewarded destination.

Why this is strategically useful:
- R01/R03 test INF in social/shared contexts;
- R04 tests whether INF survives in a non-social external system;
- if the same external-direction/outcome core survives, identity evidence is more diverse.

Sources:
- `docs/PRO_INF_R04_CONCEPT_v0.1.md`
- `docs/PRO_INF_R04_BLIND_STAGE1_v0.1.md`

## 11. Current Gate D1 decision rule

Do not render R04 yet.

Run one fresh blind Stage 1 reviewer who has not seen PRO/INF mapping.

Blind reviewer must judge:
- dominant A/B difference;
- preference reasons;
- safety/competence/difficulty/prestige/completion/attractiveness/power/usefulness/consequence/salience asymmetry;
- nuisance vs meaningful differences;
- hidden story required;
- CLEAN_CONTRAST / AMBIGUOUS / NONSEMANTIC_DOMINATED / INFEASIBLE_AS_MATCHED_PAIR;
- one-sentence own-language contrast.

Only after Stage 1 is locked reveal:
- A = PRO
- B = INF

Stage 2 must ask whether B is genuinely read through external/shared directional consequence rather than generic irrigation control/routing.

If R04 is SUPPORTED and INF meaning aligns with R01/R03, Gate D1 may advance from PARTIAL_IDENTITY to a stronger concept-level candidate state. This still does not validate INF or justify a public score without rendered human evidence.

## 12. Short-product implication

A complete 28-edge tournament is not automatically required for the public product.

If direction identity survives, investigate balanced incomplete/adaptive comparison schedules. Bradley–Terry / Thurstone-style models remain candidates, not selected methodology.

12–18 trials remain a UX target, not a validated measurement minimum. Uncertainty, ties, cycles and `no_clear_choice` must not be converted into false precision.

## 13. Approach / avoidance research idea

Preserve separately:
- approach: `Kurį rinktumeisi?`;
- different realization of same edge: `Jei vieno iš šių dviejų turėtum atsisakyti, kurio atsisakytum?`;
- counterbalance framing/scenes across participants;
- do not double-count framings as two votes toward one score.

## 14. Render execution rule

When rendering becomes justified:
1. one image task at a time;
2. new scene = new generation context;
3. where a pair supports controlled editing, generate one accepted base then edit that exact image;
4. if construct preservation requires materially different actions, enforce matching at context/legitimacy/valence/salience level rather than forcing microscopic edits;
5. reject labels, collages, multi-state images and unrelated scene changes.

## 15. Immediate next action

Run blind Stage 1 on `docs/PRO_INF_R04_BLIND_STAGE1_v0.1.md` in a fresh neutral reviewer context.

Do not reveal PRO/INF mapping until the full Stage 1 response is locked.

## 16. Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/CLAUDE_MAS_INF_R02S_STAGE2_RESULT_v0.1.md`
4. `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
5. `docs/PRO_INF_R04_CONCEPT_v0.1.md`
6. `docs/PRO_INF_R04_BLIND_STAGE1_v0.1.md`
7. `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`
8. `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
9. `docs/STIMULUS_RESEARCH_GATES_v0.2.md`
10. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
11. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
12. `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
13. `docs/RED_TEAM_SYNTHESIS_v0.1.md`
14. older global-stimulus material as historical context only.

## Recovery instruction

If context is lost, start from this file. Do not reconstruct PrioLens from the old 16-stimulus/28-edge freeze plan, do not import ConflictLab scoring assumptions, and do not turn the public product back into a long per-choice reflection protocol.
