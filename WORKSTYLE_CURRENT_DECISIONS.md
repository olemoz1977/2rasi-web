# WorkStyle — Current Decision Log

Status: ACTIVE SOURCE OF TRUTH FOR CURRENT WORKSTYLE R&D
Date: 2026-08-23
Branch: hero-webgl

Historical files such as `WORKSTYLE15_DECISIONS.md` remain preserved as the record of the 15-dimension / v0.4–v0.6 phase. They are no longer the current architecture source of truth.

---

# 1. Product identity

Current purpose:

> **A lightweight work-style reflection tool showing how a person tends to approach work when more than one legitimate way of acting exists.**

Current product stage:
- 2rasi experimental / for-fun / research prototype;
- designed so the architecture and data can later support a more serious professional product;
- not currently a hiring, promotion, leadership-potential or role-fit instrument.

Future professional assessment work may move to OMESG360, but WorkStyle development currently remains in the 2rasi R&D environment.

---

# 2. Historical 15-dimension architecture

The inherited WorkStyle 15 architecture is no longer treated as a target count.

The 15-dimension phase produced useful evidence:
- 75 items were too fatiguing;
- 45 items were much more usable;
- a separate cannot-assess response exposed ambiguity hidden by ordinary midpoints;
- reverse items often measured legitimate alternative preferences rather than absence of the target trait;
- several inherited constructs mixed style, competence, self-regulation, or metacognition;
- the 5×3 architecture created conceptual and visual symmetry not justified by data.

The old architecture is retained only as provenance/history.

---

# 3. Measurement direction

Current research default:

**primarily bipolar directional WorkStyle axes**.

Requirements:
- both poles must occupy the same behavioural space;
- both poles must be professionally legitimate;
- no pole is `high`, `better`, `more developed`, or `more competent`;
- explicit two-anchor wording;
- 5 response positions between anchors;
- separate `Priklauso nuo situacijos`;
- separate `Neteko tokios situacijos / negaliu įvertinti`;
- ordinal treatment in later analysis;
- no 0–100 public scores;
- no percentiles/norms yet;
- no numerical higher-order domain scores yet.

A bipolar axis is accepted only if cognitive/empirical evidence supports it. Semantic antonyms alone are insufficient.

---

# 4. Current 8-axis candidate architecture

## 1. Struktūruotas pasiruošimas ↔ Organizavimas eigoje
Referent: when work structure is created.
Status: STRONG.

## 2. Metodo nuoseklumas ↔ Metodo adaptavimas
Referent: preserving/modifying an already-used method while the objective remains broadly stable.
Status: STRONG.

## 3. Konkretus fokusas ↔ Ryšių ir sistemos fokusas
Referent: default scope of analysis / attention.
Status: PROMISING / HIGH-CHALLENGE.

## 4. Išvados stabilumas ↔ Išvados peržiūrėjimas pagal naujus duomenis
Referent: threshold for reopening an already formed conclusion when credible but non-decisive new evidence appears.
Status: FRAGILE CONDITIONAL.

## 5. Galimybių skenavimas ↔ Rizikų skenavimas
Referent: first attentional direction under uncertainty.
Status: CONDITIONAL.

## 6. Savarankiškas veikimas ↔ Koordinavimas su kitais
Referent: default amount of coordination when both independent and coordinated routes are viable.
Status: STRONG.

## 7. Tiesus nesutarimo išsakymas ↔ Derinimosi paieška
Referent: first interpersonal move when genuine disagreement exists.
Status: STRONG.

## 8. Aktyvus dalyvavimas ↔ Santūrus dalyvavimas
Referent: visible participation intensity in ordinary group interaction.
Status: STRONG.

The count `8` is not protected. A clean 7-axis or 6-axis model is preferable to retaining a weak axis for symmetry.

---

# 5. Important respondent-distinctness decision

Constructs must pass two separate tests:

1. **latent distinctness** — theoretically / empirically different;
2. **felt distinctness** — respondents experience them as asking about different parts of work life.

This rule was added after the 9-axis candidate exposed four emotionally similar `hold ↔ change` dilemmas.

Decision:
- `Commitment Stability ↔ Goal Reallocation` was removed from V1;
- `Position Stability ↔ Position Revisability` was reframed as conclusion/evidence updating;
- `Position Assertion ↔ Accommodation` was reframed as interpersonal disagreement handling.

Detailed source:
`WORKSTYLE_8AXIS_FELT_DISTINCTNESS_AUDIT.md`.

---

# 6. Constructs removed / parked

## Removed from primary core
- Persuasive Influence — competence contamination / overlap with assertion;
- Learning Orientation — heterogeneous content;
- Empathic Attention — no clean opposite, desirability/competence contamination;
- Emotional Regulation — temperament/self-regulation capability rather than neutral style;
- Reflective Self-Awareness — metacognitive/no clean opposite;
- Explore/Exploit — too redundant with Method Adaptation for compact V1.

## Parked
- Achievement Drive — optional unipolar construct;
- Commitment Stability / Goal Reallocation — too context-heavy for V1;
- Pace/Tempo — future research candidate;
- Conflict Engagement — currently item context under disagreement axis;
- Detail/Gist — monitor under analysis-scope construct.

Do not add parked constructs merely to increase breadth or restore symmetry.

---

# 7. WorkStyle vs competence boundary

WorkStyle asks:
> **How do I usually tend to act when several legitimate approaches are available?**

It does not ask:
- am I good at this;
- do I know the correct managerial action;
- am I suitable for leadership;
- how well do I perform;
- what role should I hold.

Constructs that become ability/competence questions should move out of WorkStyle rather than being rescued with wording tricks.

---

# 8. Leadership SJT status

Leadership SJT research completed so far is preserved but **PARKED** from the active WorkStyle path.

Future professional architecture may use:
- WorkStyle = behavioural tendencies;
- Leadership SJT = situational managerial judgement;
- Role Profile = role requirements;
- structured interview/work sample = additional evidence.

Do not merge SJT scenario logic into the current WorkStyle questionnaire.

---

# 9. Current cognitive prototype

Current prototype:
`tools/workstyle15/v07-cognitive.html`

Form:
- 34 items;
- 5 stronger axes × 5 items;
- 3 fragile axes × 3 items;
- interleaved/randomised order;
- two explicit bipolar anchors;
- `Priklauso nuo situacijos`;
- `Neteko / negaliu įvertinti`;
- per-item `neaiškus / dubliuojasi` flag;
- item active response time;
- end comments on repetition/context/wording;
- local-only session storage;
- anonymous JSON export;
- **no score/profile**.

Why no result:
Showing a result before construct survival would teach respondents to treat unvalidated axes as real findings.

---

# 10. Cognitive survival priorities

Highest-risk axes:
1. Išvados stabilumas ↔ peržiūrėjimas;
2. Galimybių ↔ rizikų skenavimas;
3. Konkretus ↔ sisteminis fokusas.

Five stronger axes can still fail, but currently have cleaner behavioural identity.

Axis should be dropped/reworked when:
- one pole is consistently judged more competent/moral;
- `Priklauso nuo situacijos` dominates because the axis is mostly context, not person tendency;
- respondents paraphrase it as another axis;
- items require ability/knowledge to answer;
- both poles can naturally be simultaneously high in the same referent;
- item wording needs hidden assumptions to make the trade-off work.

---

# 11. Current data policy

V0.5/v0.6 Likert data must not be retroactively converted to bipolar scores.

V0.7 starts a new measurement series.

For the cognitive stage, primary signals are:
- response distribution;
- `Priklauso nuo situacijos` rate;
- `Neteko / negaliu` rate;
- unclear/duplicate flag rate;
- active response time;
- free-text repetition/context feedback;
- later, respondent paraphrases from cognitive debriefs.

Do not interpret direction as a stable personal score until the axis/item set survives cognitive and structural work.

---

# 12. PAEI / DISC

PAEI and DISC remain future qualitative interpretation lenses only.

Current rules:
- not part of core scoring;
- no hand-assigned numeric mapping;
- no claims of official equivalence;
- no outer ring that visually implies validated integration;
- any quantitative mapping must wait for external benchmark data and cross-validation.

---

# 13. Current next gate

1. Use the 34-item v0.7 cognitive prototype internally and with a very small number of cognitive participants.
2. Collect JSON exports + verbal/debrief notes.
3. Analyse item ambiguity, context dependence, felt redundancy and timing.
4. Kill/rewrite weak axes/items before adding a result profile.
5. Only after the cognitive architecture is stable create a scored reflective prototype.
6. Keep public claims explicitly developmental/research-oriented until substantially stronger evidence exists.
