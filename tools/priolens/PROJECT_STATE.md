# PrioLens project state

Status: ACTIVE RESEARCH / MATCHED-EDGE PRIMARY RESEARCH PATH / RENDERED DIAGNOSTIC GATE
Updated: 2026-08-30
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Product boundary

PrioLens is a new 2rasi-native product, not a ConflictLab revival.

No diagnosis, personality type, hidden/subconscious need, employment suitability, validated trait, latency psychology or strict forced rank claims.

Current eight items are a **non-exhaustive set of working priority lenses chosen for experimental comparison**, not eight fundamental or validated human dimensions:
- AUT · Autonomy / Pasirinkimo laisvė
- CER · Certainty / Aiškumas
- EXP · Exploration / Tyrinėjimas
- MAS · Mastery / Meistriškumas
- CON · Connection / Ryšys
- INF · Influence / Poveikis
- PRO · Protection / Apsauga
- OPP · Opportunity / Galimybė

Source: `docs/DIRECTION_DEFINITIONS_v0.1.md`.

## Non-negotiable inference boundary

```text
WORKING DIRECTION HYPOTHESIS
→ SCENE PROPERTY / CONTROLLED CONTRAST
→ PARTICIPANT RESPONSE
→ EMPIRICAL MAPPING EVIDENCE
→ DIRECTION-LEVEL DESCRIPTIVE INFERENCE
```

Designer intent does not assign psychological meaning to a raw A/B choice.

Until human matched-pair evidence exists, safe wording is only that a pair is a **candidate controlled visual tradeoff designed to represent a working lens edge**.

## Old global-exemplar state

The previous architecture used:
- 8 directions;
- 2 exemplars per direction;
- 16 stimuli;
- complete `C(8,2)=28` tournament.

Independent Kimi/Gemini/Claude stimulus red-team work stopped freeze-readiness of that set.

Main failures:
- direction-correlated face/social, food/reward, nature/greenery, craft/action, threat/protection and technical/mechanical families;
- semantic disagreement, especially AUT, INF, EXP, PRO, OPP;
- two exemplars insufficient to separate direction from image/family.

The old 16 remain historical/research references only.

Source: `docs/RED_TEAM_SYNTHESIS_v0.1.md`.

## Framework-only status

Grok framework-only review:
- Stage A: `REVISE`, confidence 72;
- Stage B after stimulus synthesis: `REVISE`, confidence 68.

No purely logical fatal flaw found under the narrow session/stimulus-bound descriptive claim.

The 28-edge idea does not require transitivity. Ties/cycles remain legitimate raw structure. Direction-level wording remains evidence-dependent.

Sources:
- `docs/FRAMEWORK_RED_TEAM_RESULT_GROK_v0.1.md`
- `docs/GROK_FRAMEWORK_STAGE_B_v0.1.md`

## ConflictLab / 2Pair transfer lesson

ConflictLab v0.8 is methodological precedent, not a construct/scoring source.

Transfer:
- scene property → participant response → derived interpretation separation;
- blind reasons before mapping;
- equal legitimacy;
- dominant visible manipulation;
- no cue/explanation rescues a weak stimulus;
- accept that some static visual constructs can fail.

Do not import AW/CS/CR, cue vectors, AHA scoring, 3+3+3 or historical latency interpretations.

Source: `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`.

## Direction operationalizability

The eight directions are not equally easy to show in static images.

Current broad feasibility:
- MAS: HIGH
- CER: MEDIUM-HIGH
- CON: MEDIUM-HIGH semantic / social-salience risk
- PRO: MEDIUM-HIGH semantic / valence risk
- INF: MEDIUM
- EXP: MEDIUM-LOW
- AUT: MEDIUM-LOW
- OPP: LOW-MEDIUM

Highest operationalization risks remain AUT, INF and OPP, with EXP closely involved.

Sources:
- `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
- `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`

## Gate F2: stimulus architecture decision

Two architectures were compared conceptually:

### G · Global exemplar pool
Multiple standalone exemplars per direction, cross-paired later.

Known problem: unrelated images retain direction-correlated modality, valence, domain and salience confounds inside each trial.

### M · Matched-edge tradeoff pairs
Each direction-v-direction edge is represented by two controlled variants of the same or functionally equivalent scene.

Main advantage: within-trial matching of people, object family, camera, lighting, domain and reward/threat exposure.

Main risks:
- opponent-specific direction meaning;
- recurring visual mechanism can masquerade as direction signal;
- 28 bespoke edges are expensive;
- human interpretation still untested.

Source: `docs/STIMULUS_ARCHITECTURE_ALTERNATIVES_v0.1.md`.

## Text-only matched-edge sprint

Gate F2 tested seven hardest edges, two concepts per edge, 14 total:
- AUT ↔ OPP
- AUT ↔ EXP
- AUT ↔ INF
- CER ↔ PRO
- EXP ↔ OPP
- MAS ↔ INF
- CON ↔ INF

### Grok
Neutralized Stage 1 was blind to hidden mapping. Stage 2 classified all 14 as SUPPORTED and called matched-edge promising.

Use as permissive/supportive concept evidence, not validation.

Sources:
- `docs/GROK_MATCHED_EDGE_STAGE1_v0.1.md`
- `docs/GROK_MATCHED_EDGE_STAGE2_v0.1.md`

### Claude
Stage 1 was blind to intended directions/mapping but had minor project-name/matched-edge leakage. Use as adversarial partial-blind evidence.

Stage 2 per-pair classifications:
- 5 SUPPORTED: M01, M03, M06, M08, M11
- 6 CROSS_LOAD: M02, M04, M07, M09, M10, M13
- 3 INSUFFICIENT: M05, M12, M14

Claude's headline said 6 SUPPORTED, but the per-pair list is 5; the per-pair classifications are authoritative.

Source: `docs/CLAUDE_MATCHED_EDGE_STAGE2_v0.1.md`.

## F2 synthesis

Source: `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`.

Decision:

**Architecture M · matched-edge becomes the PRIMARY RESEARCH PATH.**

This is not a product-architecture freeze and not construct/method validation.

Architecture G is retained as fallback/comparator, not the next default build path.

Why M advances:
- CER↔PRO works cleanly in M01/M08;
- MAS↔INF works cleanly in M03/M11 and across different domains;
- AUT↔INF has at least one viable realization (M06);
- failures are now localized to explicit edge grammars rather than broad unrelated-image confounds.

## Repeated failure grammars to redesign

### OPP: resolved / ready / matched advantage
M05, M07, M12, M14 repeatedly make OPP a more complete, useful or satisfying state.

Do not use `ready/cashed-in outcome` as the default OPP grammar.

### AUT: option count is not autonomy
M02, M07, M10, M14 show that multiple equivalent choices may read as arbitrary choice, uncertainty or exploration rather than meaningful self-direction.

AUT needs visible meaningful control over method/course, not merely more options.

### EXP: prior unknownness can be hidden story
Static images cannot directly show what an actor knew before. EXP needs visible investigation/reveal in-frame rather than researcher-only temporal assumptions.

### INF: status/agency shortcut
M04/M09 turn impact into one active actor vs passive others. Avoid dominance/leadership/status as a visual shortcut for influence.

### INF: magnitude/scale shortcut
M13 shows risk that broad/busy/multiple effects become 'influence'. Mechanism diversity is required.

## Current next gate: rendered diagnostic falsification set

Do **not** render 56 assets and do not rebuild the old 16.

Next set contains only four matched edges/pairs:

1. **M08 CER ↔ PRO** — strongest clean baseline.
2. **M11 MAS ↔ INF** — strong cross-domain action baseline.
3. **Redesigned AUT ↔ OPP diagnostic** — not M07/M14 unchanged. Remove resolved-ready advantage and make autonomy meaningful.
4. **Redesigned CON ↔ INF diagnostic** — not M04/M09 unchanged. Show external/shared consequence without active-person/passive-others status asymmetry.

Purpose: falsification, not showcase quality.

Why not render M02 unchanged: its hidden-prior-knowledge flaw is already conceptual; confirming it visually adds less information than testing whether the repeated AUT/OPP and CON/INF failures can be repaired.

## Rendered diagnostic requirements

Before human collection:
- same/functionally equivalent scene within pair;
- same camera/perspective/lighting/color treatment where possible;
- same people/object family/object density where possible;
- no obvious good/bad or resolved/unresolved desirability asymmetry;
- no hidden role/history/future story required;
- no status cue as INF shortcut;
- both sides functionally legitimate;
- intended tradeoff is dominant meaningful difference.

## Human Path M after rendered gate

If rendered pairs survive asset review:
1. show pair blind, randomized side order;
2. ask `Kurį renkiesi?` including `no_clear_choice`;
3. lock choice;
4. ask open reason;
5. preserve `hard_to_identify` separately;
6. only afterwards code reason as side-A relevant / side-B relevant / cross-load / confound / insufficient / none;
7. replicate critical edges across independent scenario families before any direction-level claim.

Source: `docs/STIMULUS_RESEARCH_GATES_v0.2.md`.

## Later pairwise-session constraints retained

If the method reaches a full session:
- vertical top/bottom presentation;
- equal 1:1 frames;
- both visible simultaneously;
- `object-fit: contain`;
- no scrolling during measured trial;
- position randomized/counterbalanced;
- preload/decode before mechanical timing;
- latency diagnostic only;
- retain participant, edge, direction, asset, family/scenario, position and sequence IDs;
- ties/cycles visible;
- no strict rank or latency-derived psychological score.

## Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
3. `docs/STIMULUS_RESEARCH_GATES_v0.2.md`
4. `docs/STIMULUS_ARCHITECTURE_ALTERNATIVES_v0.1.md`
5. `docs/CLAUDE_MATCHED_EDGE_STAGE2_v0.1.md`
6. `docs/GROK_MATCHED_EDGE_STAGE2_v0.1.md`
7. `docs/MATCHED_EDGE_STAGE1_CLAUDE_GROK_COMPARISON_v0.1.md`
8. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
9. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
10. `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
11. `docs/RED_TEAM_SYNTHESIS_v0.1.md`
12. older global-stimulus ledgers/audits and original architecture only as historical context.

## Recovery instruction

If context is lost, start from this file and follow the source-of-truth order. Do not reconstruct PrioLens from the old 16-stimulus freeze plan or from ConflictLab/2Pair scoring memory.
