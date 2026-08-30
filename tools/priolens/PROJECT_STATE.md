# PrioLens project state

Status: ACTIVE RESEARCH / DIRECTION-FIRST AGGREGATION NOT SUPPORTED / NEXT = OBSERVABLE TRADEOFF TAXONOMY
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## 1. Product boundary

PrioLens is a short image-choice experience, not a long reflection questionnaire.

Working principle:

> **For Fun, but with Wisdom.**

Public flow:

```text
START
→ visual pair
→ choose
→ visual pair
→ choose
→ ...
→ short result / mirror
```

Boundary:
- no mandatory free text;
- no mandatory ratings/confidence/intensity;
- no explanation after every choice;
- no personality/diagnosis/hidden-self language;
- no claim that response time reveals a hidden motive;
- `no_clear_choice` remains possible;
- target public duration about 2–4 minutes;
- working interaction budget about 12–18 meaningful choices, 20 soft ceiling until UX evidence says otherwise.

Methodological complexity belongs behind the product, not inside the public flow.

Source: `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`.

## 2. Safe inference target

Working object:

> repeated pre-deliberative choice tendencies within this session and empirically supported visual tradeoffs.

Preferred result language is session-bound.

Do not claim hidden/subconscious true self, stable trait, strict personality rank or employment suitability.

Exactly eight public scores are not a requirement.

## 3. Core inference boundary

```text
SCENE PROPERTY / CONTROLLED CONTRAST
→ PARTICIPANT RESPONSE
→ EMPIRICAL INTERPRETATION
```

A higher-order direction label may be added only if cross-context evidence earns it.

Designer intent does not give psychological meaning to raw A/B choice.

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

Current architecture decision:

> These labels are **not approved scoring units**.

They remain candidate higher-order lenses that may return only if human and cross-context evidence supports them.

## 5. Gate D1 · INF cross-edge identity

Working INF definition:

> meaningful impact on the direction, decision or outcome of an external/shared situation.

Evidence:
- R01 CON↔INF: SUPPORTED
- R03 AUT↔INF: SUPPORTED
- blind review found a recurring idea around external steering/redirection.

But third-opponent attempts failed:
- MAS↔INF repeatedly collapsed into skill/complexity or generic routing;
- PRO↔INF introduced zero-sum fairness/deprivation;
- CER↔INF remained observe-vs-act / generic routing.

Decision:

> **INF Gate D1 NOT PASSED**

Status:

> `HOLD / PARTIAL_IDENTITY / NOT PUBLIC-SCORE READY`

Do not search another INF opponent edge-by-edge and do not rename redirection/control as Influence.

## 6. Gate D2 · MAS cross-edge identity

Working MAS definition:

> developing or applying competence, precision, skill or quality.

MAS was chosen because it had the highest static-image feasibility in the operationalizability audit. It was intended as an architecture falsification test.

D2 set:
- R01 PRO↔MAS: preservation vs form refinement
- R02 MAS↔CER: alignment/correction vs state reveal
- R03 CON↔MAS: reciprocal exchange vs quality-focused independent execution

### Claude

Blind Stage 1:
- found a recurring family across the intended MAS variants;
- described it mainly as a visible correctness/quality criterion;
- also identified systematic skill/progress asymmetries.

Stage 2:
- R01 SUPPORTED
- R02 CROSS_LOAD
- R03 SUPPORTED
- final Gate D2 outcome: **PARTIAL_IDENTITY**
- diagnosis: R01/R03 converge on a narrow manual precision / precision-to-standard family; R02 drifts toward functional fixing/progress.

Source: `docs/CLAUDE_MAS_CROSS_EDGE_STAGE2_RESULT_v0.1.md`.

### Grok

Blind Stage 1:
- all three local contrasts judged CLEAN_CONTRAST;
- **no recurring broader idea found across the intended MAS variants**.

Stage 2:
- all three local mappings judged SUPPORTED after reveal;
- but no coherent cross-edge semantic core stronger than local mechanisms;
- final Gate D2 outcome: **LOCAL_ONLY**.

Source: `docs/GROK_MAS_CROSS_EDGE_STAGE2_RESULT_v0.1.md`.

### D2 decision

> **MAS Gate D2 NOT PASSED at direction level.**

The per-edge labels being readable after reveal are not enough. Cross-edge identity must exist before reveal and survive materially different mechanisms.

Do not render the D2 set as a Mastery-validation set.

## 7. Architecture consequence after D1 + D2

INF failed to establish robust broad identity.
MAS, the strongest static-image candidate, also failed to establish robust broad identity across two independent AI reviewers.

This does **not** prove broad directions are psychologically invalid.

It does mean the current architecture is not justified in assuming:

```text
broad direction
→ several different scene mechanisms
→ aggregate participant choices into one direction score
```

Current evidence supports local semantic contrasts more strongly than higher-order direction aggregation.

Source: `docs/ARCHITECTURE_REASSESSMENT_AFTER_D1_D2_v0.1.md`.

## 8. Architecture candidates

### A. Direction-first aggregation

Current hypothesis:

```text
broad direction → scene mechanisms → choices → direction score
```

Status:

> **NOT SUPPORTED ENOUGH TO FREEZE**

Do not proceed to a third broad-direction gate as if D1/D2 were only asset-quality problems.

### B. Observable-tradeoff-first

```text
controlled local contrast
→ participant choice
→ repeated observable choice pattern
→ descriptive session mirror
```

No requirement that every pair maps to one of eight predeclared directions.

Status:

> **SAFE BASELINE CANDIDATE**

### C. Empirical-cluster discovery

```text
validated local contrasts
→ human semantic evidence + repeated choice data
→ empirical clusters
→ provisional higher-order labels if earned
```

Status:

> **RECOMMENDED DISCOVERY PATH**

Broad labels return only after data demonstrate a common cross-context core.

## 9. Immediate next action

Do **not** design Gate D3 for another broad direction yet.

Do **not** render INF or MAS as direction-validation sets.

Build an **observable tradeoff taxonomy** from local contrasts that survived blind concept review.

For each candidate tradeoff define:
1. exact visible property difference;
2. matched scene constraints;
3. nuisance cues to control;
4. safe local interpretation;
5. interpretations explicitly not yet allowed;
6. whether the pair remains interesting enough for the short public product.

Then design a compact human semantic screen around those local contrasts.

The next architecture question is:

> Can PrioLens produce useful, repeatable and interesting session-level mirrors from validated local tradeoffs without pretending they are already broad psychological dimensions?

## 10. AI Review Harness v0.1

Implemented and deployed at Vercel project `priolens-review-harness`.

Pipeline reaches Vercel AI Gateway successfully.

Paid model execution is currently deferred because Vercel requires a minimum $10 paid top-up plus fees/tax. The user deliberately chose not to buy credits at this stage.

Security already configured:
- `AI_GATEWAY_API_KEY` server-side;
- `HARNESS_ACCESS_KEY`;
- `REVIEW_LOCK_SECRET`;
- AI Gateway key budget $10, no refresh.

Decision:

> **PRESERVE HARNESS / DO NOT SPEND MORE TIME ON BILLING NOW**

Temporary fallback is manual fresh Claude/Grok sessions with Stage 1 locked before Stage 2 reveal.

## 11. Public-product implication

The product ambition does not change:
- visual;
- fast;
- playful;
- little reading;
- no mandatory writing;
- 2–4 minutes;
- short session mirror;
- no diagnosis or hidden-self claim.

A result does not need eight percentages.

A safer result can be close to observed tradeoffs, e.g.:
- what repeatedly won in this session;
- which tradeoffs were stable;
- which choices changed by context;
- where no clear pattern emerged.

Exact wording remains research-dependent.

## 12. Render execution rule

When rendering becomes justified:
1. one image task at a time;
2. new scene = new generation context;
3. controlled edit of accepted base when appropriate;
4. match context/legitimacy/valence/salience;
5. reject labels, collages, multi-state images and unrelated scene changes.

No current direction-validation set is cleared for rendering.

## 13. Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/ARCHITECTURE_REASSESSMENT_AFTER_D1_D2_v0.1.md`
4. `docs/GROK_MAS_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
5. `docs/CLAUDE_MAS_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
6. `docs/MAS_CROSS_EDGE_BLIND_STAGE1_v0.1.md`
7. `docs/MAS_CROSS_EDGE_STAGE2_REVEAL_v0.1.md`
8. `docs/INF_REPRESENTATION_REASSESSMENT_v0.1.md`
9. `docs/CLAUDE_CER_INF_R05_STAGE2_RESULT_v0.1.md`
10. `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
11. `docs/AI_REVIEW_HARNESS_v0.1.md`
12. `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`
13. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
14. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
15. `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
16. `docs/STIMULUS_RESEARCH_GATES_v0.2.md`
17. `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
18. `docs/RED_TEAM_SYNTHESIS_v0.1.md`
19. older global-stimulus material as historical context only.

## Recovery instruction

If context is lost, start from this file.

Do not restart INF edge-searching, do not start Gate D3, do not assume the eight directions are score units, do not return to Vercel billing now, do not reconstruct PrioLens from the old 16-stimulus/28-edge freeze plan, and do not turn the public product into a long per-choice reflection protocol.
