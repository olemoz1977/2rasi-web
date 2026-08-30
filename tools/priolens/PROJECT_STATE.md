# PrioLens project state

Status: ACTIVE RESEARCH / DIRECTION-FIRST AGGREGATION NOT SUPPORTED / OT REPLICATION PACKAGE READY
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Product boundary

PrioLens remains a short visual-choice experience:

```text
START
→ visual pair
→ choose
→ ...
→ short result / mirror
```

Working principle:

> **For Fun, but with Wisdom.**

Public constraints:
- no mandatory free text;
- no per-choice explanations;
- no diagnosis/personality/hidden-self claims;
- `no_clear_choice` allowed;
- target duration about 2–4 minutes;
- working interaction budget about 12–18 meaningful choices, 20 soft ceiling.

Methodological complexity belongs behind the product.

## Safe inference boundary

```text
SCENE PROPERTY / CONTROLLED CONTRAST
→ PARTICIPANT RESPONSE
→ EMPIRICAL INTERPRETATION
```

Higher-order psychological labels are allowed only if cross-context human evidence earns them.

## Broad directions status

AUT, CER, EXP, MAS, CON, INF, PRO, OPP remain research hypotheses only.

They are **not approved scoring units**.

Exactly eight scores are not a product requirement.

## Gate D1 · INF

Result:
> **NOT PASSED / PARTIAL_IDENTITY / HOLD**

Useful local pattern survived around external steering/redirection, but third-opponent tests collapsed into routing/control, fairness, observe-vs-act or hidden shared consequence.

Do not search another INF opponent and do not relabel routing/control as Influence.

## Gate D2 · MAS

MAS was the strongest static-image falsification target.

Claude:
- Stage 1 found a recurring correctness/quality family;
- Stage 2 final: **PARTIAL_IDENTITY**.

Grok:
- Stage 1 found **no recurring broader idea** across the intended MAS variants;
- Stage 2 final: **LOCAL_ONLY**.

Decision:
> **MAS Gate D2 NOT PASSED at direction level.**

Do not render the D2 set as Mastery validation.

## Architecture conclusion after D1 + D2

Current evidence supports local visible contrasts more strongly than this assumption:

```text
broad direction
→ several different scene mechanisms
→ aggregate choices into one direction score
```

This does not prove broad directions are psychologically invalid. It means the current static-image architecture has not earned direction-first aggregation.

Source: `docs/ARCHITECTURE_REASSESSMENT_AFTER_D1_D2_v0.1.md`.

## Active architecture

### A. Direction-first aggregation
Status: **NOT SUPPORTED ENOUGH TO FREEZE**.

### B. Observable-tradeoff-first

```text
controlled local contrast
→ multiple scene realizations
→ rapid participant choices
→ repeated observable session pattern
→ descriptive mirror
```

Status: **ACTIVE SAFE BASELINE**.

### C. Empirical-cluster discovery

```text
validated local contrasts
→ human semantic + choice data
→ empirical clusters
→ provisional higher-order labels if earned
```

Status: **RECOMMENDED DISCOVERY PATH**.

## Observable tradeoff taxonomy v0.1

Source: `docs/OBSERVABLE_TRADEOFF_TAXONOMY_v0.1.md`.

First-wave candidates:
1. OT-01 · OBSERVE STATE ↔ CHANGE STATE
2. OT-02 · LOCAL CONFIGURATION ↔ SHARED-PROCESS STEERING
3. OT-03 · PRESERVE FORM/STATE ↔ REFINE FORM/QUALITY
4. OT-05 · PRECISION POSITIONING ↔ ROUTE STEERING

Held due higher social-modality risk:
- OT-04 · RECIPROCAL EXCHANGE ↔ INDEPENDENT QUALITY EXECUTION
- OT-06 · RECIPROCAL RELATION ↔ SHARED-SYSTEM STEERING

These are observable tradeoffs, not psychological traits.

## OT replication gate v0.1

Prepared text-level replication set:
- `docs/OT_REPLICATION_CONCEPT_SET_v0.1.md`
- `docs/OT_REPLICATION_BLIND_STAGE1_v0.1.md`
- `docs/OT_REPLICATION_STAGE2_REVEAL_v0.1.md`

Design:
- 4 OT families;
- 3 materially different scene realizations per family;
- 12 blind IDs total;
- family order interleaved;
- A/B polarity reversed across realizations;
- no psychological labels in Stage 1.

Hidden assignment:
- OT-01: X02, X05, X09
- OT-02: X04, X07, X11
- OT-03: X01, X06, X12
- OT-05: X03, X08, X10

Stage 1 task:
- describe each local A/B contrast;
- flag nuisance asymmetry;
- independently group pairs that instantiate the same recurring relation;
- track polarity;
- judge whether grouping survives scene/domain changes.

Stage 2 task:
- reveal intended OT families only after Stage 1 is locked;
- compare recovered blind groups with intended families;
- classify each OT as STRONG_REPLICATION / PARTIAL_REPLICATION / LOCAL_ONLY / NO_REPLICATION;
- classify architecture as OBSERVABLE_REPLICATION_SUPPORTED / PARTIAL / WEAK / FAIL.

Architecture-level SUPPORTED requires at least 3 of 4 intended OT families to show clear cross-scene identity in the locked blind review, not merely after reveal.

AI review is concept screening only. Human semantic replication remains required before public interpretation.

## Immediate next action

Run `docs/OT_REPLICATION_BLIND_STAGE1_v0.1.md` in a fresh independent reviewer session.

Do not reveal family names or assignments.

Lock the verbatim Stage 1 response before sending `docs/OT_REPLICATION_STAGE2_REVEAL_v0.1.md` in the same reviewer session.

Preferred sequence:
1. Claude Stage 1 → lock → Stage 2;
2. Grok Stage 1 → lock → Stage 2 with the exact same package;
3. compare recovery of the four OT families;
4. render only families that survive text-level replication.

Do not generate images yet.

## Product interpretation direction

A result does not need eight percentages.

Safer session mirror structure:
- which observable tradeoffs repeatedly won;
- which were stable across scenes;
- which changed with context;
- where no clear pattern emerged.

Example form only:
> `Kai rinkaisi greitai, šioje sesijoje dažniau rinkaisi pakeisti būseną nei tik ją pamatyti.`

This is descriptive and session-bound, not a hidden-self claim.

## Distinction from 2Pair

2Pair can remain pair-local and reflective.

PrioLens remains distinct if it tests whether the **same observable tradeoff** recurs across multiple scene families and produces a short repeated-pattern mirror.

## AI Review Harness

Vercel harness is deployed and reaches AI Gateway.

Paid model execution is deferred because Vercel requires a minimum paid credit top-up plus fees/tax. Do not spend more time on billing now.

Preserve harness for later. Temporary fallback: fresh manual Claude/Grok sessions with Stage 1 locked before reveal.

## Render rule

When rendering becomes justified:
1. one image task at a time;
2. new scene = new generation context;
3. controlled edit of accepted base where appropriate;
4. match context/legitimacy/valence/salience;
5. reject labels, collages, multi-state images and unrelated scene changes.

No current OT family is cleared for rendering until text-level replication survives.

## Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/OT_REPLICATION_CONCEPT_SET_v0.1.md`
4. `docs/OT_REPLICATION_BLIND_STAGE1_v0.1.md`
5. `docs/OT_REPLICATION_STAGE2_REVEAL_v0.1.md`
6. `docs/OBSERVABLE_TRADEOFF_TAXONOMY_v0.1.md`
7. `docs/ARCHITECTURE_REASSESSMENT_AFTER_D1_D2_v0.1.md`
8. `docs/GROK_MAS_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
9. `docs/CLAUDE_MAS_CROSS_EDGE_STAGE2_RESULT_v0.1.md`
10. `docs/INF_REPRESENTATION_REASSESSMENT_v0.1.md`
11. `docs/AI_REVIEW_HARNESS_v0.1.md`
12. `docs/PRIOLENS_VS_2PAIR_BOUNDARY_v0.1.md`
13. `docs/DIRECTION_OPERATIONALIZABILITY_AUDIT_v0.1.md`
14. `docs/DIRECTION_SET_STRUCTURE_AUDIT_v0.1.md`
15. older matched-edge/global-stimulus material as historical context only.

## Recovery instruction

If context is lost, start from this file.

Do not restart INF edge-searching, do not start another broad-direction Gate D3, do not assume the eight directions are score units, do not return to Vercel billing now, do not generate images before OT replication survives, and do not turn the public product into a long reflection questionnaire.
