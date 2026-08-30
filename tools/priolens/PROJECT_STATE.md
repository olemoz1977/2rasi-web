# PrioLens project state

Status: ACTIVE RESEARCH / FUN-WITH-WISDOM PRODUCT BOUNDARY / INF GATE D1 = PARTIAL_IDENTITY / MAS↔INF NEEDS NEW GRAMMAR
Updated: 2026-08-30
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## 1. Product job

PrioLens is intended to be a short image-choice experience, not a long reflection questionnaire.

Working product principle:

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
- no need to read new instructions before every pair;
- `no_clear_choice` remains possible;
- target public duration about 2–4 minutes;
- working public interaction budget about 12–18 meaningful choices, with 20 as a soft ceiling until UX evidence says otherwise.

Methodological complexity belongs behind the product, not inside the user's flow.

Source: `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`.

## 2. Safe inference target

Working object:

> repeated pre-deliberative choice tendencies within this session and these empirically supported visual tradeoffs.

Preferred result language is session-bound, e.g.:

> `Kai rinkaisi greitai, be ilgos analizės, tavo pasirinkimuose dažniau laimėdavo ...`

Avoid hidden/subconscious true-self claims, strict personality ranking, employment suitability or trait language.

## 3. Current eight directions are research hypotheses

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

## 5. Research layer vs product layer

Research mode may include open reasons, `hard_to_identify`, framing experiments, repeated edge realizations, context manipulations, blind semantic coding and longer schedules.

Public product should consume only mappings/stimuli that survived research. The public user should not do the researchers' validation work.

## 6. Architecture history

The old global-exemplar candidate used 8 directions, 2 exemplars per direction, 16 standalone stimuli and a complete `C(8,2)=28` tournament. Independent red-team work stopped freeze-readiness because of direction-correlated visual families and semantic instability. The old 16 remain historical only.

Architecture M uses edge-specific matched pairs: two controlled variants of the same/functionally equivalent scene. Text-only Gate F2 made M the primary research path, not a product freeze.

Claude earlier concept classifications:
- 5 SUPPORTED: M01, M03, M06, M08, M11
- 6 CROSS_LOAD: M02, M04, M07, M09, M10, M13
- 3 INSUFFICIENT: M05, M12, M14

Repeated failure grammars:
- OPP: resolved/ready/completed advantage;
- AUT: option count mistaken for autonomy;
- EXP: hidden prior-knowledge story;
- INF: status/dominance shortcut;
- INF: magnitude/scale shortcut.

## 7. PrioLens vs 2Pair boundary

Matched-edge visual discipline makes PrioLens stimuli resemble 2Pair. The critical difference must be inferential.

2Pair may remain at local pair/manipulation + participant response/reflection.

PrioLens needs evidence that a higher-level direction preserves coherent meaning across different opponents and scene mechanisms. If not, summing edge outcomes into one direction score is researcher-imposed aggregation.

Source: `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`.

## 8. Gate D1 · INF cross-edge direction identity

Working INF definition:

> meaningful impact on the direction, decision or outcome of an external/shared situation.

Three text-only concepts were tested:
- R01 · CON ↔ INF
- R02 · MAS ↔ INF
- R03 · AUT ↔ INF

Hidden mapping:
- R01 A=INF, B=CON
- R02 A=MAS, B=INF
- R03 A=INF, B=AUT

### Claude blind Stage 1

Before seeing the mapping, Claude independently grouped the intended INF sides R01-A, R02-B and R03-A under a recurring broader idea: the actor's effect extends outward and changes a shared/external routing or allocation.

Stage 1 verdicts:
- R01: AMBIGUOUS
- R02: NONSEMANTIC_DOMINATED
- R03: CLEAN_CONTRAST

### Claude Stage 2 reveal

Per-pair verdicts:
- R01: SUPPORTED
- R02: CROSS_LOAD
- R03: SUPPORTED

Final Gate D1 result:

> **PARTIAL_IDENTITY**

Interpretation:
- R01 and R03 support a coherent INF core across different opponents;
- R02 carried the same external/shared directional consequence but was contaminated by unmatched skill/complexity structure;
- INF identity remains plausible, but current three-edge pooling is unsafe;
- no construct validation or public INF score is justified yet.

Source: `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`.

## 9. R02R repair result · clean pair, weak constructs

R02R structurally rebalanced the original MAS↔INF pair:
- same neutral tabletop apparatus;
- same handwheel/control family;
- same two-hand involvement;
- same camera, lighting, material amount, path count and object density;
- no gauge/caliper/tool-prestige cue;
- no expert-vs-simple staging;
- no bigger/more/busier INF cue.

### Grok blind Stage 1

Verdict: `CLEAN_CONTRAST`.

Grok found no obvious advantage in competence, difficulty, effort, tool use, complexity, usefulness, attractiveness or salience.

### Grok Stage 2 reveal

Hidden mapping:
- A = MAS
- B = INF

Verdict: `INSUFFICIENT`
Final action: `REVISE`

Reason:
- A reads as generic accuracy / precise positioning more clearly than Mastery;
- B reads as generic routing / causality more clearly than Influence;
- balancing the mechanics removed the original confound but also stripped away too much of the broader construct meaning.

This is now treated as a **construct-dilution warning**:

> A matched pair can be locally very clean yet be too semantically thin to justify direction-level inference.

Therefore R02R is not render-ready and should not receive another tiny mechanical repair.

Sources:
- `docs/GROK_MAS_INF_R02R_STAGE1_RESULT_v0.1.md`
- `docs/GROK_MAS_INF_R02R_STAGE2_RESULT_v0.1.md`

## 10. Revised matched-edge rule

Matched-edge no longer means `make both sides as mechanically identical as possible`.

The active rule is:

> **Match context, legitimacy, valence, status and visual salience strongly enough to control obvious confounds, but allow materially different actions when that is necessary for the target meanings to remain visible.**

For MAS↔INF specifically:
- MAS must visibly involve quality of execution / competence, not only small positional difference;
- INF must visibly involve consequence on a genuinely external/shared situation, not only internal routing;
- both sides should remain equally legitimate and similarly engaging;
- INF must not rely on larger magnitude, more objects affected, authority or passive followers;
- MAS must not win merely by looking harder, more expert, more technical or more prestigious.

This changes the design target from exact-mechanism matching to **shared-context balanced contrast**.

## 11. Short-product implication

A complete 28-edge tournament is not automatically required for the public product.

If direction identity survives, investigate a balanced incomplete or adaptive comparison schedule. Bradley–Terry / Thurstone-style models remain statistical candidates, not selected methodology.

Boundaries:
- recurring direction meaning must come before model convenience;
- 12–18 trials are a UX target, not a validated measurement minimum;
- uncertainty, ties, cycles and `no_clear_choice` must not become false precision.

## 12. Approach / avoidance research idea

Preserve separately:
- approach: `Kurį rinktumeisi?`;
- a different realization of the same edge: `Jei vieno iš šių dviejų turėtum atsisakyti, kurio atsisakytum?`;
- counterbalance framing/scenes across participants;
- do not double-count the two framings as two votes toward one score.

## 13. Render execution rule

One CER↔PRO diagnostic pair demonstrated the workable technical process:
1. generate one standalone base image;
2. accept/reject it;
3. separately edit that exact image where the pair genuinely supports controlled editing;
4. change only intended properties where feasible;
5. reject collages, labels, multi-state images or unrelated scene changes.

Important update: not every valid matched edge must be reducible to one microscopic edit. If construct preservation requires different actions within the same controlled context, scene matching should be enforced at the context/visual-legitimacy level rather than by forcing identical mechanics.

## 14. Immediate next action

Do not render R02R.

Next research task:
1. design one new **shared-context MAS↔INF** concept that preserves the broader meanings rather than the exact mechanism;
2. keep actor status, valence, attractiveness and approximate visual salience balanced;
3. make MAS visibly about quality/skill of execution;
4. make INF visibly about consequence on a genuinely shared/external situation;
5. run blind Stage 1 and reveal Stage 2 once;
6. if it still collapses to `accuracy vs causality` or `expert vs simple`, stop forcing MAS↔INF and replace it with another INF opponent for Gate D1 rather than iterating indefinitely.

R01 and R03 remain the two currently supported INF identity anchors.

## 15. Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/GROK_MAS_INF_R02R_STAGE2_RESULT_v0.1.md`
4. `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
5. `docs/MAS_INF_R02_REDESIGN_v0.1.md`
6. `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`
7. `docs/INF_CROSS_EDGE_IDENTITY_CONCEPTS_v0.1.md`
8. `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
9. `docs/STIMULUS_RESEARCH_GATES_v0.2.md`
10. `docs/STIMULUS_ARCHITECTURE_ALTERNATIVES_v0.1.md`
11. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
12. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
13. `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
14. `docs/RED_TEAM_SYNTHESIS_v0.1.md`
15. older global-stimulus material as historical context only.

## Recovery instruction

If context is lost, start from this file. Do not reconstruct PrioLens from the old 16-stimulus/28-edge freeze plan, do not import ConflictLab scoring assumptions, and do not turn the public product back into a long per-choice reflection protocol.
