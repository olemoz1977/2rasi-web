# PrioLens project state

Status: ACTIVE RESEARCH / FUN-WITH-WISDOM PRODUCT BOUNDARY / CROSS-EDGE DIRECTION IDENTITY GATE
Updated: 2026-08-30
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## 1. Product job

PrioLens is intended to be a short image-choice experience, not a long reflection questionnaire.

Working product principle:

> **For Fun, but with Wisdom.**

The public interaction should be almost trivial:

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
- target public duration approximately 2–4 minutes;
- initial product interaction budget approximately 12–18 meaningful choices, with 20 as a soft ceiling until UX evidence says otherwise.

Methodological complexity belongs behind the product, not inside the user's flow.

Source: `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`.

## 2. What PrioLens may claim

Do not describe a hidden/subconscious true self.

Safer working object:

> repeated pre-deliberative choice tendencies within this session and these validated visual tradeoffs.

Preferred result language is session-bound, for example:

> `Kai rinkaisi greitai, be ilgos analizės, tavo pasirinkimuose dažniau laimėdavo ...`

Avoid `Tu esi`, `Tavo pasąmonė nori`, strict personality ranking, employment suitability or trait claims.

## 3. Current eight directions are research hypotheses

The current working set is non-exhaustive and not validated:
- AUT · Autonomy / Pasirinkimo laisvė
- CER · Certainty / Aiškumas
- EXP · Exploration / Tyrinėjimas
- MAS · Mastery / Meistriškumas
- CON · Connection / Ryšys
- INF · Influence / Poveikis
- PRO · Protection / Apsauga
- OPP · Opportunity / Galimybė

Exactly eight public scores are **not** a product requirement.

If only five directions survive research, build five. If cross-edge direction identity fails, do not manufacture eight scores by summing researcher-assigned edge labels.

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

May be deliberately slower and include:
- open reasons;
- `hard_to_identify`;
- approach vs forfeit framing;
- repeated edge realizations;
- context manipulations;
- blind semantic coding;
- cross-edge identity testing;
- longer balanced/complete comparison schedules.

This research validates the stimuli and inference model before they are used in the public flow.

### Product layer

The public product consumes only mappings/stimuli that survived research. It must not ask the public user to do the researchers' validation work.

This is the main product distinction from the current 2Pair research flow.

## 6. Historical global-exemplar architecture

The old freeze candidate used:
- 8 directions;
- 2 exemplars per direction;
- 16 standalone stimuli;
- complete `C(8,2)=28` tournament.

Independent red-team work stopped freeze-readiness because of direction-correlated visual families and semantic instability. The old 16 are historical/research references only.

Source: `docs/RED_TEAM_SYNTHESIS_v0.1.md`.

## 7. Matched-edge architecture

Architecture M uses edge-specific matched pairs: two controlled variants of the same/functionally equivalent scene expressing a candidate tradeoff.

Gate F2 made M the primary research path, not a product freeze.

Claude text-only Stage 2 authoritative per-pair classifications:
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

## 8. PrioLens vs 2Pair boundary

Matched-edge visual discipline makes PrioLens stimuli look like 2Pair stimuli. That is not itself a problem.

The critical difference must be inferential:

### 2Pair
The local pair/manipulation + participant response can remain the primary observation unit. Raw A/B choice has no inherent psychological polarity until empirical mapping evidence exists.

### PrioLens
A higher-level direction is useful only if the same direction preserves coherent meaning across different opponents and different scene mechanisms.

If INF in INF↔MAS, INF↔AUT and INF↔CON becomes three unrelated local meanings, summing those outcomes into an INF score is researcher-imposed aggregation.

Source: `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`.

## 9. Current Gate D1 · Cross-edge Direction Identity

This gate precedes large-scale rendering or a public scoring model.

Core question:

> When the same working direction appears against different opponents, do blind participant reasons preserve a coherent common meaning stronger than scenario/mechanism-specific explanations?

First target: INF across three edges:
1. MAS ↔ INF
2. AUT ↔ INF
3. CON ↔ INF

Requirements:
- materially different scene mechanisms;
- local matched-pair control retained;
- no direction labels shown;
- INF not represented only by more/bigger/busier;
- INF not represented by one powerful actor vs passive others;
- blind/open reasons preserved in research mode before mapping.

If INF fails, pause direction-level aggregation before expanding the asset library.

## 10. Short-product implication

A complete 28-edge tournament is not automatically required for the public product.

If direction identity survives research, investigate pairwise-preference estimation with a **balanced incomplete or adaptive comparison schedule** rather than assuming every edge must be shown.

Candidate statistical families include Bradley–Terry / Thurstone-style paired-comparison models, but no model is selected yet.

Important boundary:
- these models assume a meaningful recurring latent item/direction across comparisons;
- therefore model convenience cannot substitute for Gate D1 evidence;
- 12–18 trials are a UX target, not yet a validated measurement minimum;
- scoring method must be stress-tested by simulation and human data;
- uncertainty, ties, cycles and `no_clear_choice` must remain visible rather than being forced into false precision.

A promising initial design hypothesis, to test rather than assume, is a balanced partial graph where every surviving direction appears multiple times against different opponents while the total trial count stays within the public interaction budget.

## 11. Approach / avoidance research idea

Preserve as a separate robustness experiment:
- one realization: `Kurį rinktumeisi?`;
- a different realization of the same edge: `Jei vieno iš šių dviejų turėtum atsisakyti, kurio atsisakytum?`;
- counterbalance framing/scenes across participants;
- do not double-count the two framings as two votes toward one score.

This belongs in research mode, not the default public flow unless later evidence justifies it.

## 12. Render execution checkpoint

One CER↔PRO diagnostic pair was successfully produced using the correct image workflow:
1. generate one standalone base image;
2. accept/reject that image;
3. separately edit that exact image;
4. change only the target property;
5. reject collages, labels, multi-state images or unrelated scene changes.

Execution rule:

> One image task at a time. New scene = new generation context. Second side of a matched pair = controlled edit of the accepted first side.

This is an execution constraint, not validation evidence.

## 13. Immediate next action

Do not mechanically continue D02/D03/D04 and do not render 56 assets.

Next research task:

1. design the three-pair INF cross-edge identity mini-set;
2. ensure the three INF realizations use materially different mechanisms;
3. conduct blind semantic validation in research mode;
4. use the results to decide whether direction-level aggregation deserves continued development;
5. only after at least one direction survives cross-edge identity, prototype a short balanced 12–18-choice product schedule and test whether a paired-comparison model can summarize it without false precision.

## 14. Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`
4. `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
5. `docs/STIMULUS_RESEARCH_GATES_v0.2.md`
6. `docs/STIMULUS_ARCHITECTURE_ALTERNATIVES_v0.1.md`
7. `docs/CLAUDE_MATCHED_EDGE_STAGE2_v0.1.md`
8. `docs/GROK_MATCHED_EDGE_STAGE2_v0.1.md`
9. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
10. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
11. `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
12. `docs/RED_TEAM_SYNTHESIS_v0.1.md`
13. older global-stimulus material only as historical context.

## Recovery instruction

If context is lost, start from this file. Do not reconstruct PrioLens from the old 16-stimulus/28-edge freeze plan, do not import ConflictLab scoring assumptions, and do not turn the public product back into a long per-choice reflection protocol.