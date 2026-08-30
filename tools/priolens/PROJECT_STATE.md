# PrioLens project state

Status: ACTIVE RESEARCH / INF GATE D1 NOT PASSED / INF HOLD / AI REVIEW HARNESS IMPLEMENTED NOT DEPLOYED / NEXT = DEPLOY HARNESS THEN MAS GATE D2
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

## 7. Next falsification target · Gate D2 MAS

Keep INF on HOLD and test whether the architecture works for a more visually tractable direction.

Target:

> **Gate D2 · MAS cross-edge identity**

Why MAS:
- highest static-image feasibility in the operationalizability audit;
- quality/skill of execution is more directly observable than INF shared consequence;
- if MAS also fails across opponents, architecture-wide aggregation becomes doubtful;
- if MAS succeeds, PrioLens may work selectively and only surviving directions should enter the product.

Constraints:
- do not use INF as an initial opponent;
- test at least three materially different opponents/mechanisms;
- require blind recurrence of `quality / competence / skill of execution` or a close reviewer-generated equivalent;
- reject results driven mainly by craft aesthetics, hands, specialist tools, technical difficulty or professional prestige;
- keep context/valence/status/salience balanced;
- blind Stage 1 first, reveal only after Stage 1 response lock;
- no rendering until text-level cross-edge identity survives.

This is an architecture falsification test, not validation of MAS as a trait.

## 8. AI Review Harness v0.1

Reason for building it: manual phone copy-paste across separate Claude/Grok/Gemini chats is slow and creates avoidable process errors.

Implemented in repo:
- `review-harness/index.html` - mobile-first UI;
- `review-harness/api/review.js` - Vercel serverless API;
- `review-harness/vercel.json`;
- `review-harness/.env.example`;
- `docs/AI_REVIEW_HARNESS_v0.1.md`.

Architecture:

```text
phone
→ one PrioLens review page
→ Vercel serverless API
→ Vercel AI Gateway
→ Claude / Grok / Gemini independently
```

Default reviewer slots:
- Claude: `anthropic/claude-opus-5`
- Grok: `xai/grok-4.6` with narrow `spacexai/grok-4.6` catalog-slug fallback
- Gemini: `google/gemini-3.6-flash`

The model IDs are environment-overridable.

Research integrity:
- Stage 1 sends only the blind prompt to each reviewer independently;
- each exact Stage 1 prompt + answer is cryptographically signed server-side;
- Stage 2 accepts only signed Stage 1 lock tokens;
- Stage 2 reconstructs each model's own exact thread as blind prompt → locked answer → reveal;
- reviewers never see each other's responses;
- no database is required for the lock mechanism.

Security:
- `AI_GATEWAY_API_KEY` stays server-side;
- personal `HARNESS_ACCESS_KEY` protects the endpoint from casual public use;
- `REVIEW_LOCK_SECRET` signs Stage 1 records;
- use a conservative AI Gateway per-key spend budget;
- never place provider/Gateway secrets in GitHub Pages or browser JavaScript.

Status:

> **CODE IMPLEMENTED / NOT DEPLOYED / NOT LIVE-TESTED**

Source: `docs/AI_REVIEW_HARNESS_v0.1.md`.

## 9. Immediate next action

Do not start MAS D2 manual reviews yet.

First deploy and smoke-test the harness:
1. create/connect a Vercel project with root directory `tools/priolens/review-harness`;
2. create one Vercel AI Gateway key;
3. set `AI_GATEWAY_API_KEY`, `HARNESS_ACCESS_KEY`, `REVIEW_LOCK_SECRET` in Vercel environment variables;
4. set a low Gateway key spend budget;
5. deploy;
6. run a harmless one-line Stage 1 call across Claude/Grok/Gemini;
7. run a harmless Stage 2 reveal and verify that the three Stage 1 records remain locked;
8. only then design/load Gate D2 MAS as the first real research package.

If deployment is blocked, do not revert to repeated three-chat copy-paste by default; fix the harness or deliberately choose a temporary fallback.

## 10. Later harness improvements

Only after v0.1 works on the phone:
- repo-backed package dropdown so the user pastes nothing;
- automatic result commit to a research-results branch;
- server-side A/B randomization;
- cost/model/version capture;
- optional human-review mode using the same package schema.

Do not expand scope before the Stage 1 → lock → Stage 2 flow is proven.

## 11. Public-product implication

A complete 28-edge tournament is not automatically required.

If some directions survive cross-edge identity and later rendered human research, investigate balanced incomplete/adaptive schedules. Bradley–Terry / Thurstone-style models remain statistical candidates, not selected methodology.

12–18 trials are a UX target, not a validated measurement minimum. Uncertainty, ties, cycles and `no_clear_choice` must remain visible.

## 12. Render execution rule

When rendering becomes justified:
1. one image task at a time;
2. new scene = new generation context;
3. use controlled edit of an accepted base where appropriate;
4. if target meanings require different actions, match context/legitimacy/valence/salience rather than forcing microscopic edits;
5. reject labels, collages, multi-state images and unrelated scene changes.

## 13. Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/AI_REVIEW_HARNESS_v0.1.md`
4. `docs/INF_REPRESENTATION_REASSESSMENT_v0.1.md`
5. `docs/CLAUDE_CER_INF_R05_STAGE2_RESULT_v0.1.md`
6. `docs/CLAUDE_INF_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
7. `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`
8. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
9. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
10. `docs/MATCHED_EDGE_GATE_F2_SYNTHESIS_v0.1.md`
11. `docs/STIMULUS_RESEARCH_GATES_v0.2.md`
12. `docs/CONFLICTLAB_2PAIR_LESSONS_FOR_PRIOLENS_v0.1.md`
13. `docs/RED_TEAM_SYNTHESIS_v0.1.md`
14. older global-stimulus material as historical context only.

## Recovery instruction

If context is lost, start from this file. Do not restart INF edge-searching, do not restart manual three-model copy-paste if the harness can be repaired, do not reconstruct PrioLens from the old 16-stimulus/28-edge freeze plan, do not import ConflictLab scoring assumptions, and do not turn the public product back into a long per-choice reflection protocol.
