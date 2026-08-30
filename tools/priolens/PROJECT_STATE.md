# PrioLens project state

Status: ACTIVE RESEARCH / STIMULUS ARCHITECTURE REOPENED / FREEZE STOPPED
Updated: 2026-08-30
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9
Public target: `https://2rasi.com/tools/priolens/` and `https://2rasi.lt/tools/priolens/`

## Product boundary

- PrioLens is a new 2rasi-native product, not a ConflictLab revival.
- 2Pair remains frozen.
- No runtime dependency on `omesg360.eu`.
- Intended promise remains narrow and descriptive.
- No diagnosis, subconscious/hidden-needs, personality-type, employment-suitability or validated-trait claims.

Strongest currently defensible wording:

> `These observed choices describe which competing direction-exemplar pairs were selected more often than their alternatives in this session under these exact presentation and stimulus conditions.`

Any stronger direction-level wording requires empirical cross-exemplar or cross-scenario evidence.

## Eight working directions

- AUT: Autonomy / Pasirinkimo laisvė
- CER: Certainty / Aiškumas
- EXP: Exploration / Tyrinėjimas
- MAS: Mastery / Meistriškumas
- CON: Connection / Ryšys
- INF: Influence / Poveikis
- PRO: Protection / Apsauga
- OPP: Opportunity / Galimybė

Source: `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`

Current framework stance:

> Treat the eight as a **non-exhaustive set of working priority lenses chosen for experimental comparison**, not as eight fundamental, exhaustive, orthogonal or validated human dimensions.

No dedicated PrioLens provenance artifact currently establishes why these eight form a validated common ontology. This is an explicit framework gap.

## Red-team checkpoint

### Current 16-stimulus set

Independent blind reviews by Kimi, Gemini and Claude were sufficient to stop the previous stimulus freeze.

Source:
- `/tools/priolens/docs/RED_TEAM_SYNTHESIS_v0.1.md`

Decision:

**STOP stimulus freeze. CONTINUE research.**

The current 16 remain historical/research candidates only.

### Framework-only review

Grok reviewed the framework first without stimulus-audit findings and then after seeing the synthesis.

Sources:
- `/tools/priolens/docs/FRAMEWORK_RED_TEAM_RESULT_GROK_v0.1.md`
- `/tools/priolens/docs/GROK_FRAMEWORK_STAGE_B_v0.1.md`

Verdicts:
- Stage A: `REVISE`, confidence 72;
- Stage B: `REVISE`, confidence 68.

No purely logical fatal flaw was identified under the narrow descriptive claim.

Accepted conclusions:
- the 28-edge tournament does not require transitivity;
- cycles do not invalidate the raw pairwise trace;
- strict rank/cardinal score/latency psychology remain excluded;
- the unresolved core question is empirical generalization beyond specific stimuli/scenarios.

## ConflictLab / 2Pair transfer review

Source:
- `/tools/priolens/docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`

Transferable boundary:

```text
SCENE PROPERTY / VISUAL MANIPULATION
        ↓
PARTICIPANT RESPONSE
        ↓
DERIVED INTERPRETATION
```

Important historical lesson:
ConflictLab v0.8 ultimately stopped treating AW as a peer static-image axis after repeated candidates collapsed into other interpretations/confounds. Raw A/B choice was explicitly separated from psychological mapping, and controlled matched pairs were validated through blind human reactions before signal claims.

PrioLens imports this **discipline**, not AW/CS/CR, cue vectors, AHA scoring or the historical 3+3+3 architecture.

## Direction-set / operationalizability status

Sources:
- `/tools/priolens/docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
- `/tools/priolens/docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`

Current static-image feasibility:

| Direction | Feasibility | Main risk |
|---|---|---|
| MAS | HIGH | shared craft/action family |
| CER | MEDIUM-HIGH | organization/completion/PRO leakage |
| CON | MEDIUM-HIGH semantic | structural face/social salience |
| PRO | MEDIUM-HIGH semantic | threat/loss/valence asymmetry |
| INF | MEDIUM | generic causality/MAS leakage; shared outcome may need story |
| EXP | MEDIUM-LOW | AUT/OPP/CER leakage; curiosity is response-level |
| AUT | MEDIUM-LOW | freedom is relational to constraints/options |
| OPP | LOW-MEDIUM | future gain is counterfactual and reward-laden |

Highest current operationalization risks:
- AUT
- INF
- OPP

The eight directions also differ in representation class:
- present visible state/action: CER, MAS, PRO, partly CON;
- relational agency: AUT, INF;
- epistemic/future orientation: EXP, OPP.

This asymmetry may itself bias static-image comparisons.

## Stimulus architecture reopened

Source:
- `/tools/priolens/docs/STIMULUS_ARCHITECTURE_ALTERNATIVES_v0.1.md`

Two live candidates now exist.

### G · Global exemplar pool
- >=4 materially different standalone exemplars per direction;
- cross-pair direction exemplars;
- single-image semantic validation required;
- main risk: direction-correlated modality/valence/aesthetic confounds remain within trials.

### M · Matched-edge tradeoff pairs
- each direction-v-direction edge receives a same/functionally-equivalent scene with two controlled variants;
- the intended priority tradeoff is the dominant meaningful difference;
- main strength: people/food/nature/threat/technical domain can be held much more constant within a trial;
- main risk: 28 bespoke edge designs, opponent-specific direction meaning and large asset burden.

No architecture is frozen.

Key methodological correction:

> If the product is intrinsically pairwise, requiring every standalone image to be independently nameable as a direction may be stronger than necessary. Under matched-edge architecture the primary semantic object is the **controlled A↔B contrast and participant reason**, not the isolated image label.

## Current architecture-feasibility sprint

Sources:
- `/tools/priolens/docs/MATCHED_EDGE_CONCEPT_SPRINT_v0.1.md`
- `/tools/priolens/docs/MATCHED_EDGE_BLIND_STAGE1_v0.1.md`
- `/tools/priolens/docs/MATCHED_EDGE_BLIND_STAGE1_PROMPT_v0.1.md`
- `/tools/priolens/docs/MATCHED_EDGE_STAGE2_REVEAL_v0.1.md`

Text-only Gate F2 test prepared:
- 7 hardest nearest-neighbour edges;
- 2 independent matched scene concepts per edge;
- 14 concepts total;
- randomized blind IDs M01–M14;
- intended edge/side mapping hidden until Stage 2.

Edges:
1. AUT ↔ OPP
2. AUT ↔ EXP
3. AUT ↔ INF
4. CER ↔ PRO
5. EXP ↔ OPP
6. MAS ↔ INF
7. CON ↔ INF

Internal pre-blind assessment suggests CER↔PRO and MAS↔INF are most promising; AUT/OPP/EXP edges remain structurally hardest. This must not be given to blind reviewers before Stage 2.

## Active research gates

Source:
- `/tools/priolens/docs/STIMULUS_RESEARCH_GATES_v0.2.md`

v0.2 supersedes v0.1 and keeps architecture-specific validation paths separate.

Common:
```text
WORKING DIRECTION
→ SCENE PROPERTY / CONTROLLED CONTRAST
→ PARTICIPANT RESPONSE
→ EMPIRICAL MAPPING EVIDENCE
→ DIRECTION-LEVEL DESCRIPTIVE INFERENCE
```

Path G:
- standalone asset visual control;
- human single-image open coding;
- direction mapping only after open response;
- cross-family generalization.

Path M:
- matched-pair visual control;
- blind pair choice before explanation;
- open reason after locked choice;
- reason coded against intended edge only after preservation;
- edge replication across independent scenes.

Both paths converge only later on a full pairwise session and direction-vs-exemplar/scenario analysis.

## Original architecture status

Original draft:
- 8 directions;
- 2 exemplars per direction;
- 16 active stimuli;
- complete `C(8,2)=28` tournament.

Current:
- `2 exemplars/direction` rejected as freeze-ready evidence architecture;
- old 16 not a current target;
- 28-edge full session remains a possible later structure;
- no normal preference pilot until stimulus architecture and semantic validation survive.

## Presentation / raw-data rules retained for later pairwise work

- vertical top/bottom;
- equal 1:1 frames;
- both visible simultaneously;
- `object-fit: contain`;
- no scrolling during measured trial;
- position randomized/counterbalanced;
- preload/decode before timing;
- mechanical latency diagnostic only;
- `no_clear_choice` retained;
- choice before post-choice explanation;
- participant, edge, direction, asset, family/scenario, position and sequence IDs retained.

## Current blocker boundary

Before any new polished visual library:

1. **Architecture choice:** does a global exemplar pool or matched-edge architecture create cleaner intended tradeoffs?
2. **Direction feasibility:** can AUT/INF/OPP and other directions survive without hidden narrative/confound rescue?
3. **Human mapping:** whichever architecture survives must be validated with human responses before direction-level inference.

## Immediate next action

Run the prepared **blind text-only matched-edge concept review** with independent reviewers who have not seen the intended mapping.

Required order:
1. give only `MATCHED_EDGE_BLIND_STAGE1_v0.1.md` + `MATCHED_EDGE_BLIND_STAGE1_PROMPT_v0.1.md`;
2. preserve Stage 1 response;
3. then provide `MATCHED_EDGE_STAGE2_REVEAL_v0.1.md`;
4. do not show reviewers one another's outputs;
5. aggregate failure modes, not confidence averages.

Do not generate new images until this Gate F2 checkpoint is complete.

## Current source-of-truth order

1. `/tools/priolens/PROJECT_STATE.md`
2. `/tools/priolens/docs/STIMULUS_ARCHITECTURE_ALTERNATIVES_v0.1.md`
3. `/tools/priolens/docs/STIMULUS_RESEARCH_GATES_v0.2.md`
4. `/tools/priolens/docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
5. `/tools/priolens/docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
6. `/tools/priolens/docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
7. `/tools/priolens/docs/RED_TEAM_SYNTHESIS_v0.1.md`
8. `/tools/priolens/docs/GROK_FRAMEWORK_STAGE_B_v0.1.md`
9. `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`
10. older stimulus ledger/full-set audit/draft architecture only as historical context.

## Recovery instruction

If context is lost, start from this file and follow the source-of-truth order above. Do not reconstruct PrioLens from ConflictLab/2Pair scoring memory or from the old 16-stimulus freeze plan.
