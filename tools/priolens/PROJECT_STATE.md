# PrioLens project state

Status: ACTIVE RESEARCH / INF GATE D1 NOT PASSED / INF HOLD / MAS GATE D2 BLIND PACKAGE READY
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

Preferred result language is session-bound, e.g.:

> `Kai rinkaisi greitai, be ilgos analizės, tavo pasirinkimuose dažniau laimėdavo ...`

Do not claim hidden/subconscious true self, stable trait, strict personality rank or employment suitability.

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

Evidence that survived:
- R01 · CON↔INF: SUPPORTED
- R03 · AUT↔INF: SUPPORTED
- original blind review independently found a recurring idea: actor effect extends outward and changes shared/external routing or allocation.

Third-opponent attempts failed:
- MAS↔INF: three attempts ended in skill/complexity confound, construct dilution or generic routing/control;
- PRO↔INF R04: zero-sum allocation introduced fairness/deprivation and valence asymmetry;
- CER↔INF R05: blind contrast was clean, but reveal CROSS_LOAD; `observe vs act` explained the pair more parsimoniously and INF remained generic routing/causality.

Decision:

> **INF Gate D1 is NOT PASSED.**

Current INF status:

> `HOLD / PARTIAL_IDENTITY / NOT PUBLIC-SCORE READY`

Do not search for another INF opponent edge-by-edge and do not silently rename `redirection/control` as Influence.

Sources:
- `docs/INF_REPRESENTATION_REASSESSMENT_v0.1.md`
- `docs/CLAUDE_CER_INF_R05_STAGE2_RESULT_v0.1.md`
- `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`

## 6. Structural INF diagnosis

Static scenes can reliably depict a narrower observable family:

> **external steering / redirection**: actor changes the course, routing or allocation of something beyond the actor's local task.

Current INF additionally requires the consequence to be meaningful and shared/external. Showing that tends to introduce confounds:
- affected people → social salience/status/fairness;
- visibly better/worse outcome → reward/loss/valence;
- more affected objects → magnitude/salience;
- scarce resource → zero-sum fairness;
- complex mechanism → Mastery;
- invisible downstream importance → hidden story.

Therefore `redirection/control` is not equivalent to INF.

## 7. Gate D2 · MAS cross-edge identity

Working MAS definition:

> developing or applying competence, precision, skill or quality.

Why MAS:
- highest static-image feasibility in the operationalizability audit;
- quality/skill of execution is more directly observable than INF shared consequence;
- if MAS also fails across opponents, architecture-wide direction aggregation becomes doubtful;
- if MAS succeeds while INF remains partial, PrioLens may work selectively.

### D2 concept set v0.1

Three opponents:
- MAS↔CER · fine alignment vs state visibility;
- MAS↔PRO · form refinement vs preservation;
- MAS↔CON · quality-focused independent execution vs reciprocal exchange.

INF is deliberately excluded because MAS↔INF was exhausted during Gate D1.

The three MAS realizations deliberately span:
1. mechanical alignment;
2. material form refinement;
3. quality-focused execution in a social scene with people-count controlled.

Critical falsification rule:

> If the recurring reviewer-generated MAS core is only `careful hands`, `manual dexterity`, `craft work`, `technical tools`, `difficulty` or `independent work`, Gate D2 is not passed at direction level.

Prepared files:
- `docs/MAS_CROSS_EDGE_IDENTITY_CONCEPTS_v0.1.md`
- `docs/MAS_CROSS_EDGE_BLIND_STAGE1_v0.1.md`
- `docs/MAS_CROSS_EDGE_STAGE2_REVEAL_v0.1.md`

Blind randomized mappings:
- R01: A=PRO, B=MAS
- R02: A=MAS, B=CER
- R03: A=CON, B=MAS

Stage 2 may be shown only after Stage 1 response is locked.

Possible D2 outcomes:
- PROMISING_IDENTITY
- PARTIAL_IDENTITY
- LOCAL_ONLY
- FAIL

No AI text review validates MAS. PROMISING only justifies rendered blind human testing.

## 8. AI Review Harness v0.1

Implemented and deployed at the Vercel project `priolens-review-harness`.

Architecture:

```text
browser
→ Vercel serverless API
→ Vercel AI Gateway
→ Claude / Grok / Gemini independently
```

Implemented research integrity:
- Stage 1 sends only the blind prompt to each reviewer independently;
- each exact Stage 1 prompt + answer is cryptographically signed server-side;
- Stage 2 accepts only signed Stage 1 lock tokens;
- Stage 2 reconstructs each model's exact blind prompt → locked answer → reveal thread;
- reviewers never see each other's responses.

Security configured:
- `AI_GATEWAY_API_KEY` server-side;
- `HARNESS_ACCESS_KEY` server-side check;
- `REVIEW_LOCK_SECRET` server-side signing;
- AI Gateway key budget set to $10, no refresh.

Deployment/smoke-test result:
- frontend and serverless endpoint are live;
- request successfully reaches Vercel AI Gateway;
- first Gateway call was blocked because free-tier credits cannot access the selected model;
- Vercel requires at least a $10 paid credit top-up plus processing fee/tax (~$12.81 shown at checkout);
- user deliberately chose not to buy paid Gateway credits at this stage.

Decision:

> **HARNESS DEPLOYED / PIPELINE REACHES GATEWAY / PAID MODEL EXECUTION DEFERRED**

Do not keep spending time on Vercel billing now. Preserve the harness as a working prototype for later use.

Temporary review fallback:
- use fresh independent Claude/Grok sessions manually;
- one complete Stage 1 package per reviewer;
- lock the verbatim Stage 1 response before reveal;
- then send Stage 2 in the same reviewer session;
- avoid repeated piecemeal copy-paste.

Source: `docs/AI_REVIEW_HARNESS_v0.1.md` and deployed repo code under `review-harness/`.

## 9. Immediate next action

Run **Gate D2 MAS blind Stage 1** manually using `docs/MAS_CROSS_EDGE_BLIND_STAGE1_v0.1.md` in a fresh independent reviewer session.

Process:
1. send only the blind Stage 1 package;
2. do not mention PrioLens, MAS, CER, PRO, CON or mappings;
3. capture the full verbatim reviewer response;
4. save/lock it before reveal;
5. inspect whether one recurring idea appears across R01-B, R02-A and R03-B without labels;
6. only if Stage 1 is not structurally dead, send `MAS_CROSS_EDGE_STAGE2_REVEAL_v0.1.md` in the same session;
7. classify Gate D2;
8. do not render before text-level D2 survives.

Preferred sequence: one reviewer first (Claude or Grok). If Stage 1 is clearly dead, revise before spending another reviewer pass. If promising, replicate with the second independent reviewer.

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

## 12. Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/MAS_CROSS_EDGE_IDENTITY_CONCEPTS_v0.1.md`
4. `docs/MAS_CROSS_EDGE_BLIND_STAGE1_v0.1.md`
5. `docs/MAS_CROSS_EDGE_STAGE2_REVEAL_v0.1.md`
6. `docs/INF_REPRESENTATION_REASSESSMENT_v0.1.md`
7. `docs/CLAUDE_CER_INF_R05_STAGE2_RESULT_v0.1.md`
8. `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
9. `docs/AI_REVIEW_HARNESS_v0.1.md`
10. `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`
11. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
12. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
13. `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
14. `docs/STIMULUS_RESEARCH_GATES_v0.2.md`
15. `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
16. `docs/RED_TEAM_SYNTHESIS_v0.1.md`
17. older global-stimulus material as historical context only.

## Recovery instruction

If context is lost, start from this file. Do not restart INF edge-searching, do not return to Vercel billing unless paid Gateway execution becomes worth the cost, do not reconstruct PrioLens from the old 16-stimulus/28-edge freeze plan, do not import ConflictLab scoring assumptions, and do not turn the public product back into a long per-choice reflection protocol.