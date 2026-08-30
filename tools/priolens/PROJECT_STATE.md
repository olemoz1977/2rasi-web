# PrioLens project state

Status: ACTIVE RESEARCH / PRE-ASSET CONCEPT VALIDATION / FREEZE STOPPED
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

The strongest currently defensible wording is narrower than the original public phrase:

> `These observed choices describe which competing direction-exemplar pairs were selected more often than their alternatives in this session under these exact presentation and stimulus conditions.`

Any stronger direction-level wording requires cross-exemplar evidence.

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

Status: INTERNAL WORKING CONTRACT / NOT VALIDATED CONSTRUCTS.

Current framework stance:

> Treat the eight as a **non-exhaustive set of working priority lenses chosen for experimental comparison**, not as eight fundamental, exhaustive, orthogonal or validated human dimensions.

No dedicated PrioLens provenance artifact currently establishes why these eight form a validated common ontology. This is an explicit framework gap, not permission to invent one.

## Framework red-team status

### Stimulus-level adversarial review

Kimi, Gemini and Claude independently reviewed the same blind 16-stimulus package.

Source:
- `/tools/priolens/docs/RED_TEAM_SYNTHESIS_v0.1.md`

Decision:

**STOP stimulus freeze. CONTINUE research. REDESIGN stimulus architecture before external preference collection.**

The current 16 are research references/candidates only, not freeze-ready.

### Framework-only adversarial review

Grok reviewed the architecture while assuming ideal stimuli and without seeing the current image audit.

Sources:
- `/tools/priolens/docs/FRAMEWORK_RED_TEAM_RESULT_GROK_v0.1.md`
- `/tools/priolens/docs/GROK_FRAMEWORK_STAGE_B_v0.1.md`

Stage A verdict: `REVISE`, confidence 72.
Stage B after seeing the stimulus synthesis: `REVISE`, confidence 68.

No purely logical fatal flaw was identified under the narrow descriptive claim.

Accepted framework conclusions:
- the 28-edge tournament does not require transitivity;
- non-transitive cycles do not invalidate the raw pairwise trace;
- strict 1–8 rank, cardinal latent score and latency psychology remain excluded;
- the unresolved core question is empirical: does direction-level structure survive exemplar substitution?

## ConflictLab / 2Pair transfer review

Source:
- `/tools/priolens/docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`

The useful historical methodological boundary is:

```text
SCENE PROPERTY / VISUAL MANIPULATION
        ↓
PARTICIPANT RESPONSE
        ↓
DERIVED INTERPRETATION
```

PrioLens must not collapse these levels.

Important historical warnings:
- ConflictLab v0.8 suspended AW as a peer static-stimulus axis after repeated concepts collapsed into other meanings/confounds;
- raw A/B choice was explicitly treated as having no inherent psychological polarity;
- blind human stimulus-family validation preceded signal mapping;
- `no_clear_choice`, `hard_to_identify`, free-text reaction and mechanical latency were preserved as distinct raw data;
- historical choice->cue->vector logic, 3+3+3 balance and 18-pair assumptions are prototype history, not PrioLens methodology.

Transfer the validation discipline, not the old constructs/scoring.

## Direction operationalizability audit

Source:
- `/tools/priolens/docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`

Current pre-asset feasibility:

| Direction | Static-image feasibility | Current risk |
|---|---|---|
| MAS | HIGH | shared craft/action family |
| CER | MEDIUM-HIGH | organization/completion/PRO leakage |
| CON | MEDIUM-HIGH semantic | structural face/social salience |
| PRO | MEDIUM-HIGH semantic | threat/loss/valence asymmetry |
| INF | MEDIUM | generic causality/MAS leakage; shared outcome may need story |
| EXP | MEDIUM-LOW | AUT/OPP/CER leakage; curiosity is response-level |
| AUT | MEDIUM-LOW | freedom is relational to constraints/options |
| OPP | LOW-MEDIUM | future gain is counterfactual and reward-laden |

Highest current construct-level operationalization risks:
- AUT
- INF
- OPP

Key structural finding:

The eight directions are not equally easy to represent as static images. MAS/CER/PRO can be anchored in present visible action/state; AUT/INF require relational agency; EXP/OPP require epistemic/future inference. This representation-class asymmetry must be treated as a potential confound, not merely an asset-cleanup issue.

## Research gates now in force

Source:
- `/tools/priolens/docs/STIMULUS_RESEARCH_GATES_v0.1.md`

Required sequence:

```text
DIRECTION HYPOTHESIS
    ↓
SCENE-PROPERTY FAMILY
    ↓
CONCRETE ASSET
    ↓
HUMAN SEMANTIC RESPONSE
    ↓
CROSS-EXEMPLAR GENERALIZATION
    ↓
PAIRWISE PREFERENCE RESPONSE
    ↓
DIRECTION-LEVEL DESCRIPTIVE INFERENCE
```

No stage may be skipped by AI review, designer explanation or scoring logic.

### Gate 0A
Direction-to-scene concept feasibility before image generation.

### Gate 0B
Blind concept interpretation without direction label.

### Gate A
Concrete asset visual control / confound audit.

### Gate B
Human blind semantic response: one image at a time, open meaning first, direction mapping only after open coding.

### Gate C
Cross-family semantic generalization.

### Gate D
Pairwise choice viability, choice before explanation.

### Gate E
Direction-vs-exemplar evidence using an appropriate repeated binary/pairwise model.

### Gate F
Participant-facing interpretation boundary.

## Original architecture status

The original draft used:
- 8 directions;
- 2 exemplars per direction;
- 16 active stimuli;
- complete `C(8,2)=28` direction tournament;
- descriptive result only.

Current decisions:
- `2 exemplars/direction` is **rejected as freeze-ready evidence architecture**;
- `16 active stimuli` is not a current target;
- the 28-edge tournament remains a viable later preference-research structure but is **not the next research step**;
- no normal preference pilot with the current 16.

The draft architecture file is historical/current design context and is partially superseded by the research checkpoints above.

## Presentation / raw-data rules that still stand for later pairwise research

- vertical top/bottom presentation;
- equal 1:1 frames;
- both visible simultaneously;
- `object-fit: contain`;
- no scrolling during measured trial;
- top/bottom randomized/counterbalanced independently from direction;
- preload + decode before measured timing;
- mechanical latency diagnostic only;
- `no_clear_choice` retained;
- exemplar ID and scene-property family ID retained;
- participant, opponent, position and sequence retained for analysis.

## Current blocker boundary

There are now three upstream questions before normal preference testing:

1. **Direction-set structure:** are the eight working lenses coherent enough to compare, and what would cause merge/split/reframe/removal?
2. **Scene-property feasibility:** can each direction be instantiated through multiple independent visible families without hidden story or dominant confound?
3. **Human semantic generalization:** do people independently map those families to the intended direction before any pairwise preference inference?

Do not spend major effort polishing the old 16 while these remain unresolved.

## Next priority work

1. Build a surplus of **3–5 scene-property families per direction** in observable terms only.
2. Gate 0A: classify each family `CANDIDATE / HIGH_RISK / HOLD / RETIRED`.
3. Gate 0B: prepare a blind concept-review package that hides intended direction on first pass.
4. Pay special attention to AUT / INF / OPP; do not rescue weak families with narrative.
5. Only surviving families receive concrete asset generation briefs.
6. Design the separate human semantic-validation protocol before generating a polished library.
7. Do not freeze numeric semantic pass thresholds until an analysis/power/simulation plan exists.
8. Only after semantic and cross-family survival return to a balanced pairwise preference experiment.
9. In the preference phase, model participant, direction/opponent, exemplar/family, position, sequence and measured visual covariates separately where design permits.
10. If direction effects do not generalize across exemplars/families, stop or reframe PrioLens rather than improve scoring/UI.

## Current repository source-of-truth order

1. `/tools/priolens/PROJECT_STATE.md`
2. `/tools/priolens/docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
3. `/tools/priolens/docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
4. `/tools/priolens/docs/STIMULUS_RESEARCH_GATES_v0.1.md`
5. `/tools/priolens/docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
6. `/tools/priolens/docs/RED_TEAM_SYNTHESIS_v0.1.md`
7. `/tools/priolens/docs/GROK_FRAMEWORK_STAGE_B_v0.1.md`
8. `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`
9. older stimulus ledger/full-set audit/draft architecture only for historical candidate context.

## Recovery instruction

If conversation context is lost, start from this file and follow the source-of-truth order above. Do not reconstruct PrioLens from ConflictLab/2Pair scoring memory or from the old 16-stimulus freeze plan.
