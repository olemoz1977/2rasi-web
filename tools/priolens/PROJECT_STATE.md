# PrioLens project state

Status: ACTIVE RESEARCH / FUN-WITH-WISDOM PRODUCT BOUNDARY / INF GATE D1 = NOT PASSED / INF HOLD / NEXT = MAS GATE D2
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
- working interaction budget about 12–18 meaningful choices, 20 soft ceiling until UX evidence says otherwise.

Methodological complexity belongs behind the product, not inside the public flow.

Source: `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`.

## 2. Safe inference target

Working object:

> repeated pre-deliberative choice tendencies within this session and empirically supported visual tradeoffs.

Preferred result language is session-bound, e.g.:

> `Kai rinkaisi greitai, be ilgos analizės, tavo pasirinkimuose dažniau laimėdavo ...`

Do not claim hidden/subconscious true self, strict personality rank, employment suitability or stable trait.

Exactly eight public scores are not a requirement. Keep only directions that survive research.

## 3. Inference boundary

```text
WORKING DIRECTION HYPOTHESIS
→ SCENE PROPERTY / CONTROLLED CONTRAST
→ PARTICIPANT RESPONSE
→ EMPIRICAL MAPPING EVIDENCE
→ DIRECTION-LEVEL DESCRIPTIVE INFERENCE
```

Designer intent does not give psychological meaning to raw A/B choice.

Matched-edge rule:

> Match context, legitimacy, valence, status and visual salience strongly enough to control nuisance differences, while preserving the target meanings.

A pair can be visually clean yet semantically too thin.

PrioLens remains distinct from 2Pair only if a higher-level working direction preserves coherent meaning across different opponents and scene mechanisms.

Source: `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`.

## 4. Current working directions

Research hypotheses only:
- AUT · Autonomy / Pasirinkimo laisvė
- CER · Certainty / Aiškumas
- EXP · Exploration / Tyrinėjimas
- MAS · Mastery / Meistriškumas
- CON · Connection / Ryšys
- INF · Influence / Poveikis
- PRO · Protection / Apsauga
- OPP · Opportunity / Galimybė

No direction is guaranteed a public score.

## 5. Gate D1 · INF cross-edge identity

Working INF definition:

> meaningful impact on the direction, decision or outcome of an external/shared situation.

### Evidence that survived

Original cross-edge blind review found a recurring INF-like idea before mapping reveal: the actor's effect extends outward and changes shared/external routing or allocation.

Supported anchors:
- R01 · CON↔INF: SUPPORTED
- R03 · AUT↔INF: SUPPORTED

These two anchors remain useful evidence.

### Failed third-opponent paths

#### MAS↔INF · STOPPED
Three attempts failed for different reasons:
- original R02: skill/tool-complexity asymmetry;
- R02R: clean mechanics but construct dilution, MAS→accuracy and INF→routing;
- R02S: blind CLEAN_CONTRAST, reveal CROSS_LOAD, MAS→careful manual action and INF→neutral routing/control.

Decision: do not iterate MAS↔INF again for Gate D1.

#### PRO↔INF R04 · STOPPED BEFORE REVEAL
Blind verdict: AMBIGUOUS.

Problem:
- INF side became zero-sum allocation: one equal recipient receives the resource while another does not;
- fairness/deprivation and `solving vs creating a problem` valence could dominate.

Decision: no reveal, no render, no iteration of this grammar.

#### CER↔INF R05 · STOPPED AFTER REVEAL
Blind Stage 1: CLEAN_CONTRAST.

Blind reviewer independently described:
- A = `look`: reveal current state without changing it;
- B = `steer`: change which route the flow follows.

Stage 2 reveal:
- A = CER
- B = INF
- verdict: CROSS_LOAD
- final action: REVISE

Failure reason:
- A is visibly generic inspection/reveal more directly than Certainty;
- B is visibly generic routing/causality more directly than Influence;
- `observe vs act` explains the visible contrast more parsimoniously than CER vs INF;
- B reproduces the local redirection mechanism but does not independently establish meaningful shared/external consequence.

Source: `docs/CLAUDE_CER_INF_R05_STAGE2_RESULT_v0.1.md`.

## 6. Gate D1 decision

> **INF Gate D1 is NOT PASSED.**

Do not search for a fourth INF opponent edge-by-edge.

Current INF status:

> `HOLD / PARTIAL_IDENTITY / NOT PUBLIC-SCORE READY`

This does not prove INF is invalid as a psychological idea. It means the current static matched-image architecture has not established a safe direction-level mapping.

Do not render R01/R03 as a three-edge INF validation set yet.

## 7. Structural INF diagnosis

Repeated reviews show that static scenes can reliably depict a narrower observable family:

> **external steering / redirection**: the actor changes the course, routing or allocation of something beyond the actor's local task.

But current INF also requires that the consequence be **meaningful and shared/external**.

That second requirement is difficult to depict without introducing confounds:
- other affected people → social salience/status/fairness;
- visibly better/worse outcome → valence/reward/loss;
- more affected objects → magnitude/salience;
- scarce resource → zero-sum fairness;
- complex mechanism → Mastery;
- invisible downstream importance → hidden story.

Therefore `redirection/control` must not be silently treated as equivalent to INF.

Source: `docs/INF_REPRESENTATION_REASSESSMENT_v0.1.md`.

## 8. Strategic decision after INF

Do **not** narrow or rename INF merely to rescue the architecture.

Keep INF on HOLD and test whether the architecture works for a more visually tractable direction.

Next falsification target:

> **Gate D2 · MAS cross-edge identity**

Why MAS:
- the operationalizability audit rates MAS highest for static-image feasibility;
- quality/skill of execution is more directly observable than INF's shared consequence;
- if MAS also fails across opponents, the problem may be architecture-wide;
- if MAS succeeds while INF remains partial, PrioLens may work selectively and the public set should include only directions that survive.

## 9. Gate D2 constraints

Do not use INF as one of the first MAS opponents; MAS↔INF has already been exhausted.

For MAS:
- test at least three materially different opponents/mechanisms;
- require blind recurrence of a common core such as `quality / competence / skill of execution`;
- reject a result explained mainly by craft aesthetics, hands, specialist tools, technical difficulty or professional prestige;
- keep contexts/valence/status/salience balanced;
- blind Stage 1 first, reveal only after response lock;
- no rendering until text-level cross-edge identity survives.

This is a project architecture test, not validation of MAS as a trait.

## 10. Public-product implication

A complete 28-edge tournament is not automatically required.

If some directions survive cross-edge identity and later rendered human research, investigate balanced incomplete/adaptive schedules. Bradley–Terry / Thurstone-style models remain statistical candidates, not selected methodology.

12–18 trials are a UX target, not a validated measurement minimum. Uncertainty, ties, cycles and `no_clear_choice` must remain visible.

## 11. Render execution rule

When rendering becomes justified:
1. one image task at a time;
2. new scene = new generation context;
3. use controlled edit of an accepted base where appropriate;
4. if target meanings require different actions, match context/legitimacy/valence/salience rather than forcing microscopic edits;
5. reject labels, collages, multi-state images and unrelated scene changes.

## 12. Immediate next action

Do not render INF.

Design **Gate D2 · MAS cross-edge identity** as a text-only three-opponent concept set, excluding INF.

Before generating any assets:
1. choose three opponents that force MAS to appear through materially different scene mechanisms;
2. avoid repeating the `close-up skilled hands / craft tool` visual family;
3. create a randomized blind Stage 1 package with hidden mappings;
4. run blind review before reveal.

## 13. Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/INF_REPRESENTATION_REASSESSMENT_v0.1.md`
4. `docs/CLAUDE_CER_INF_R05_STAGE2_RESULT_v0.1.md`
5. `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
6. `docs/PRO_INF_R04_BLIND_STAGE1_RESULT_v0.1.md`
7. `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`
8. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
9. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
10. `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
11. `docs/STIMULUS_RESEARCH_GATES_v0.2.md`
12. `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
13. `docs/RED_TEAM_SYNTHESIS_v0.1.md`
14. older global-stimulus material as historical context only.

## Recovery instruction

If context is lost, start from this file. Do not restart INF edge-searching, do not reconstruct PrioLens from the old 16-stimulus/28-edge freeze plan, do not import ConflictLab scoring assumptions, and do not turn the public product back into a long per-choice reflection protocol.
