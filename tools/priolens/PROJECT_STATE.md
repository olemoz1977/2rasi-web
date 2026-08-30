# PrioLens project state

Status: ACTIVE RESEARCH / FUN-WITH-WISDOM PRODUCT BOUNDARY / INF GATE D1 = PARTIAL_IDENTITY / CER↔INF R05 BLIND REVIEW READY
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## 1. Product job

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
- working interaction budget about 12–18 meaningful choices, 20 soft ceiling until UX evidence says otherwise.

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

## 4. Non-negotiable inference boundary

```text
WORKING DIRECTION HYPOTHESIS
→ SCENE PROPERTY / CONTROLLED CONTRAST
→ PARTICIPANT RESPONSE
→ EMPIRICAL MAPPING EVIDENCE
→ DIRECTION-LEVEL DESCRIPTIVE INFERENCE
```

Designer intent does not give psychological meaning to raw A/B choice.

## 5. Architecture rule

Matched-edge is the primary research path, but `matched` no longer means mechanically identical at any cost.

Active rule:

> Match context, legitimacy, valence, status and visual salience strongly enough to control nuisance differences, while preserving the target meanings.

A pair can be visually clean yet semantically too thin.

PrioLens remains distinct from 2Pair only if a higher-level working direction preserves coherent meaning across different opponents and scene mechanisms.

Source: `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`.

## 6. Gate D1 · INF cross-edge direction identity

Working INF definition:

> meaningful impact on the direction, decision or outcome of an external/shared situation.

Original three-edge test:
- R01 · CON ↔ INF
- R02 · MAS ↔ INF
- R03 · AUT ↔ INF

Claude blind Stage 1, before mapping reveal, independently grouped intended INF sides R01-A, R02-B and R03-A under a recurring idea: the actor's effect extends outward and changes a shared/external routing or allocation.

Claude Stage 2:
- R01: SUPPORTED
- R02: CROSS_LOAD
- R03: SUPPORTED
- Gate result: **PARTIAL_IDENTITY**

R01 and R03 remain the two current INF identity anchors.

Source: `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`.

## 7. MAS↔INF path · STOPPED for Gate D1

Three attempts were informative but unsuccessful:

- Original R02: skill/tool-complexity asymmetry; Stage 2 `CROSS_LOAD`.
- R02R: mechanics strongly equalized; blind `CLEAN_CONTRAST`, reveal `INSUFFICIENT / REVISE`; MAS collapsed to generic accuracy and INF to generic routing.
- R02S: shared greenhouse context; blind `CLEAN_CONTRAST`, reveal `CROSS_LOAD / REVISE`; A closer to careful manual action, B closer to neutral routing/control than meaningful Influence.

Decision:

> Do not iterate MAS↔INF again for Gate D1.

This does not reject MAS or INF as working directions. It rejects this edge as the current third identity test under static matched-scene constraints.

Sources:
- `docs/GROK_MAS_INF_R02R_STAGE2_RESULT_v0.1.md`
- `docs/CLAUDE_MAS_INF_R02S_STAGE2_RESULT_v0.1.md`

## 8. PRO↔INF R04 · STOPPED before reveal

R04 used a shared irrigation-manifold context:
- hidden PRO side = protective cover against mild dust/leaves;
- hidden INF side = redirect fixed water flow between two equal beds.

Blind Stage 1 verdict: `AMBIGUOUS`.

Key confound:
- A reads as preventive/protective action benefiting shared infrastructure;
- B becomes a zero-sum allocation: one equal recipient gets the resource while the other does not;
- reviewer explicitly identified a possible `solving a problem vs creating/withholding a problem` valence/fairness asymmetry.

Decision:

> Stop R04 before Stage 2 reveal. Do not render and do not iterate the same zero-sum distribution grammar.

Source: `docs/PRO_INF_R04_BLIND_STAGE1_RESULT_v0.1.md`.

## 9. Current third INF opponent · CER↔INF R05

CER is now the replacement third opponent because it can be operationalized through visible state/information without threat, reward or zero-sum allocation.

R05 shared context:
- neutral tabletop channel/flow board;
- same hand, central area, two equal downstream routes and same neutral tokens;
- same camera, lighting, materials, object count and salience;
- no labels, color coding, reward, hazard, status or destination advantage.

Hidden Variant A = CER candidate:
- hand slides aside a modest frosted inspection cover;
- existing internal connection/current route becomes directly and unambiguously visible;
- flow is not redirected and no destination changes;
- reveal is not staged as mystery/surprise/novel discovery.

Hidden Variant B = INF candidate:
- hand moves the central junction piece;
- same existing flow changes to the other equal downstream route;
- total amount, speed, route count and destination attractiveness stay unchanged;
- internal state remains equally legible;
- distinctive consequence is change in the external flow course.

Known risks:
- A may read as inspection/reveal/EXP rather than CER;
- B may read as generic routing/causality rather than INF;
- B may appear more consequential/active;
- if blind review reads mainly `inspection vs operation`, do not advance.

Sources:
- `docs/CER_INF_R05_CONCEPT_v0.1.md`
- `docs/CER_INF_R05_BLIND_STAGE1_v0.1.md`

## 10. Current Gate D1 rule

Do not render any INF pair yet.

Next action:
1. run one fresh blind Stage 1 on `docs/CER_INF_R05_BLIND_STAGE1_v0.1.md`;
2. lock the full response before any mapping reveal;
3. if blind result is structurally acceptable, reveal A=CER and B=INF once;
4. if R05 also fails because CER collapses to reveal/EXP or INF to routing/causality, stop searching edge-by-edge and reassess the INF definition/representation strategy rather than cycling through opponents indefinitely;
5. only if a third opponent survives concept-level blind + reveal review should R01/R03/R05 advance to rendered diagnostic validation.

AI concept review determines only whether rendering is worth attempting. It does not validate INF or justify a public score.

## 11. Short-product implication

A complete 28-edge tournament is not automatically required for the public product.

If direction identity survives rendered human research, investigate balanced incomplete/adaptive schedules. Bradley–Terry / Thurstone-style models remain statistical candidates, not selected methodology.

12–18 trials are a UX target, not a validated measurement minimum. Uncertainty, ties, cycles and `no_clear_choice` must remain visible rather than converted into false precision.

## 12. Approach / avoidance research idea

Preserve separately:
- approach: `Kurį rinktumeisi?`;
- different realization of same edge: `Jei vieno iš šių dviejų turėtum atsisakyti, kurio atsisakytum?`;
- counterbalance framing/scenes across participants;
- do not double-count framings as two votes toward one score.

## 13. Render execution rule

When rendering becomes justified:
1. one image task at a time;
2. new scene = new generation context;
3. use controlled edit of an accepted base where the pair genuinely supports it;
4. if target meanings require materially different actions, match context/legitimacy/valence/salience rather than forcing microscopic edits;
5. reject labels, collages, multi-state images and unrelated scene changes.

## 14. Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
4. `docs/PRO_INF_R04_BLIND_STAGE1_RESULT_v0.1.md`
5. `docs/CER_INF_R05_CONCEPT_v0.1.md`
6. `docs/CER_INF_R05_BLIND_STAGE1_v0.1.md`
7. `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`
8. `docs/GROK_MAS_INF_R02R_STAGE2_RESULT_v0.1.md`
9. `docs/CLAUDE_MAS_INF_R02S_STAGE2_RESULT_v0.1.md`
10. `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
11. `docs/STIMULUS_RESEARCH_GATES_v0.2.md`
12. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
13. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
14. `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
15. `docs/RED_TEAM_SYNTHESIS_v0.1.md`
16. older global-stimulus material as historical context only.

## Recovery instruction

If context is lost, start from this file. Do not reconstruct PrioLens from the old 16-stimulus/28-edge freeze plan, do not import ConflictLab scoring assumptions, and do not turn the public product back into a long per-choice reflection protocol.
