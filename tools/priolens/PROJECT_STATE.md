# PrioLens project state

Status: ACTIVE RESEARCH / FUN-WITH-WISDOM PRODUCT BOUNDARY / INF CROSS-EDGE BLIND REVIEW READY
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

Do not describe a hidden/subconscious true self.

Working object:

> repeated pre-deliberative choice tendencies within this session and these empirically supported visual tradeoffs.

Preferred result language is session-bound, for example:

> `Kai rinkaisi greitai, be ilgos analizės, tavo pasirinkimuose dažniau laimėdavo ...`

Avoid `Tu esi`, `Tavo pasąmonė nori`, strict personality ranking, employment suitability or trait claims.

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

Exactly eight public scores are **not** a product requirement.

If only some directions survive research, build only those. If cross-edge identity fails, do not manufacture direction scores by summing researcher-assigned edge labels.

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

### Research layer
May include open reasons, `hard_to_identify`, framing experiments, repeated edge realizations, context manipulations, blind semantic coding and longer schedules.

### Product layer
Consumes only mappings/stimuli that survived research. The public user should not be asked to perform the researchers' validation work.

This is the central product distinction from the current 2Pair research flow.

## 6. Architecture history

The old global-exemplar candidate used 8 directions, 2 exemplars per direction, 16 standalone stimuli and a complete `C(8,2)=28` tournament. Independent red-team work stopped freeze-readiness because of direction-correlated visual families and semantic instability. The old 16 remain historical only.

Architecture M uses edge-specific matched pairs: two controlled variants of the same/functionally equivalent scene. Text-only Gate F2 made M the primary research path, not a product freeze.

Claude Stage 2 authoritative concept classifications:
- 5 SUPPORTED: M01, M03, M06, M08, M11
- 6 CROSS_LOAD: M02, M04, M07, M09, M10, M13
- 3 INSUFFICIENT: M05, M12, M14

Repeated failure grammars:
- OPP: resolved/ready/completed advantage;
- AUT: option count mistaken for autonomy;
- EXP: hidden prior-knowledge story;
- INF: status/dominance shortcut;
- INF: magnitude/scale shortcut.

Sources:
- `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
- `docs/CLAUDE_MATCHED_EDGE_STAGE2_v0.1.md`
- `docs/GROK_MATCHED_EDGE_STAGE2_v0.1.md`

## 7. PrioLens vs 2Pair boundary

Matched-edge visual discipline makes PrioLens stimuli resemble 2Pair. The critical difference must be inferential.

2Pair may remain at local pair/manipulation + participant response/reflection.

PrioLens needs evidence that a higher-level direction preserves coherent meaning across different opponents and different scene mechanisms.

If INF in INF↔MAS, INF↔AUT and INF↔CON becomes three unrelated local meanings, summing those outcomes into an INF score is researcher-imposed aggregation.

Source: `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`.

## 8. Gate D1 · INF cross-edge direction identity

Core question:

> When INF appears against different opponents, does blind interpretation preserve a coherent common meaning stronger than scenario/mechanism-specific explanations?

Working INF definition:

> meaningful impact on the direction, decision or outcome of an external/shared situation.

Three text-only concepts are now designed:

1. **MAS ↔ INF** · precision vs routing direction
   - same tabletop mechanical flow apparatus;
   - MAS = fine alignment/tolerance correction;
   - INF = same existing flow redirected between equal downstream paths;
   - total amount/speed/destination count held constant to avoid magnitude shortcut.

2. **AUT ↔ INF** · self-configuration vs shared process configuration
   - three equal workstations and equal-status participants;
   - AUT = meaningful adjustment of one's own work method/setup;
   - INF = simple central routing change alters where the shared next item goes;
   - other people remain active and non-subordinate.

3. **CON ↔ INF** · reciprocal relation vs consequence on shared state
   - three equal participants around a round table;
   - CON = reciprocal exchange/contact loop;
   - INF = one of three equal controls changes route/allocation in a shared tabletop system;
   - no head-of-table or passive-followers shortcut.

Source: `docs/INF_CROSS_EDGE_IDENTITY_CONCEPTS_v0.1.md`.

## 9. Gate D1 blind review package

Stage 1 is ready and must be locked before mappings are revealed.

Blind package:
- `docs/INF_CROSS_EDGE_BLIND_STAGE1_v0.1.md`

Reviewer does not see direction labels, intended mappings or the INF identity hypothesis.

Stage 1 asks for each pair:
1. dominant meaningful A/B difference;
2. reasons to prefer A;
3. reasons to prefer B;
4. obvious competence/safety/completion/attractiveness/power/usefulness/salience asymmetry;
5. hidden story required;
6. verdict: CLEAN_CONTRAST / AMBIGUOUS / NONSEMANTIC_DOMINATED / INFEASIBLE_AS_MATCHED_PAIR;
7. only after all three, whether any variants appear to express one recurring broader idea.

Stage 2 reveal is separate:
- `docs/INF_CROSS_EDGE_STAGE2_REVEAL_v0.1.md`

Hidden mapping:
- R01 A=INF, B=CON
- R02 A=MAS, B=INF
- R03 A=INF, B=AUT

Stage 2 asks whether the intended INF variants share one semantic core stronger than scale, authority, generic causality, complexity or local utility.

Possible Gate D1 concept outcomes:
- PROMISING_IDENTITY
- PARTIAL_IDENTITY
- LOCAL_ONLY
- FAIL

AI concept review can only decide whether rendering is worth attempting. It cannot validate INF or human interpretation.

## 10. Short-product implication

A complete 28-edge tournament is not automatically required for the public product.

If direction identity survives, investigate a balanced incomplete or adaptive comparison schedule. Bradley–Terry / Thurstone-style models remain statistical candidates, not selected methodology.

Important boundary:
- the recurring item/direction must first have empirical meaning across comparisons;
- 12–18 trials are a UX target, not a validated measurement minimum;
- uncertainty, ties, cycles and `no_clear_choice` must not be converted into false precision.

## 11. Approach / avoidance research idea

Preserve separately:
- approach: `Kurį rinktumeisi?`;
- different realization of same edge: `Jei vieno iš šių dviejų turėtum atsisakyti, kurio atsisakytum?`;
- counterbalance framing/scenes across participants;
- do not double-count the two framings as two votes toward one score.

This belongs in research mode unless later evidence justifies public use.

## 12. Render execution rule

One CER↔PRO diagnostic pair demonstrated the workable technical process:
1. generate one standalone base image;
2. accept/reject it;
3. separately edit that exact image;
4. change only the target property;
5. reject collages, labels, multi-state images or unrelated scene changes.

> One image task at a time. New scene = new generation context. Second side of matched pair = controlled edit of accepted first side.

This is execution discipline, not validation evidence.

## 13. Immediate next action

Do not render the three INF pairs yet.

Next:
1. send `INF_CROSS_EDGE_BLIND_STAGE1_v0.1.md` to an independent reviewer without reveal material;
2. lock the full Stage 1 response;
3. only then provide `INF_CROSS_EDGE_STAGE2_REVEAL_v0.1.md`;
4. classify Gate D1 as PROMISING_IDENTITY / PARTIAL_IDENTITY / LOCAL_ONLY / FAIL;
5. render only the concept(s) that survive text-level adversarial review;
6. after rendered blind human evidence, decide whether INF deserves direction-level aggregation.

## 14. Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`
4. `docs/INF_CROSS_EDGE_IDENTITY_CONCEPTS_v0.1.md`
5. `docs/INF_CROSS_EDGE_BLIND_STAGE1_v0.1.md`
6. `docs/INF_CROSS_EDGE_STAGE2_REVEAL_v0.1.md`
7. `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
8. `docs/STIMULUS_RESEARCH_GATES_v0.2.md`
9. `docs/STIMULUS_ARCHITECTURE_ALTERNATIVES_v0.1.md`
10. `docs/CLAUDE_MATCHED_EDGE_STAGE2_v0.1.md`
11. `docs/GROK_MATCHED_EDGE_STAGE2_v0.1.md`
12. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
13. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
14. `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
15. `docs/RED_TEAM_SYNTHESIS_v0.1.md`
16. older global-stimulus material as historical context only.

## Recovery instruction

If context is lost, start from this file. Do not reconstruct PrioLens from the old 16-stimulus/28-edge freeze plan, do not import ConflictLab scoring assumptions, and do not turn the public product back into a long per-choice reflection protocol.
