# WorkStyle — Current Decision Log

Status: ACTIVE SOURCE OF TRUTH FOR CURRENT WORKSTYLE R&D
Date: 2026-08-23
Branch: `hero-webgl`

Historical files such as `WORKSTYLE15_DECISIONS.md` remain preserved as the record of the 15-dimension / v0.4–v0.6 phase. They are no longer the current architecture source of truth.

---

# 1. Product identity

Current purpose:

> **A lightweight work-style reflection tool showing how a person tends to approach work when more than one legitimate way of acting exists.**

Current product stage:
- 2rasi experimental / for-fun / research prototype;
- designed so its architecture and data can later support a more serious professional product;
- not currently a hiring, promotion, leadership-potential or role-fit instrument.

Future professional assessment work may move to OMESG360, but WorkStyle development currently remains in the 2rasi R&D environment.

Product principle:
- fun / visually engaging now;
- methodologically traceable underneath;
- no professional claims before evidence supports them.

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
- five response positions between anchors;
- separate `Priklauso nuo situacijos`;
- separate `Neteko / negaliu įvertinti`;
- ordinal treatment in later analysis;
- no 0–100 public scores;
- no percentiles/norms yet;
- no numerical higher-order domain scores yet.

A bipolar axis is accepted only if cognitive/empirical evidence supports it. Semantic antonyms alone are insufficient.

The current response grammar is:

`Visada | Dažniau | Abu panašiai | Dažniau | Visada`

Each response word is read together with the behavioural statement below its side. Numeric 1–5 coding is internal only.

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

# 5. Felt-distinctness rule

Constructs must pass two separate tests:

1. **latent distinctness** — theoretically / empirically different;
2. **felt distinctness** — respondents experience them as asking about different parts of work life.

This rule was added after the 9-axis candidate exposed several emotionally similar `hold ↔ change` dilemmas.

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

Current file:
`tools/workstyle15/v07-cognitive.html`

Current instrument version:
`0.7-cognitive-8axis-lt-d`

Current form:
- 34 items;
- 5 stronger axes × 5 items;
- 3 fragile axes × 3 items;
- constrained randomisation prevents the same axis appearing consecutively;
- two explicit bipolar anchors;
- five visible response positions using words rather than numbers;
- separate `Priklauso nuo situacijos`;
- separate `Neteko / negaliu įvertinti`;
- separate per-item `Neaišku` and `Primena ankstesnę situaciją` flags;
- **three blocks: 12 + 11 + 11**;
- two explicit break screens;
- break time excluded from item timing;
- visibility/background time excluded from active first-response timing;
- optional broad pilot context: role, experience band, work environment;
- end qualitative feedback;
- local browser session + resume;
- anonymous JSON export;
- **no score/profile**.

Current intro UX:
- separate `Apie` and `Pradėti` cards;
- research/privacy details are secondary disclosure rather than a wall of instructions;
- no black fill as primary interaction feedback;
- choice highlighting uses a light accent / outline rather than covering text.

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
- left / centre / right descriptive response proportions;
- `Priklauso nuo situacijos` rate;
- `Neteko / negaliu` rate;
- unclear rate;
- duplicate/felt-repetition rate;
- first-response timing;
- block-level timing change / fatigue signal;
- break duration as separate process metadata;
- free-text feedback;
- later, respondent paraphrases from cognitive debriefs.

Do not interpret direction as a stable personal score until the axis/item set survives cognitive and structural work.

Analyzer:
`tools/workstyle15/analyze-v07.py`

The analyzer accepts v0.7 cognitive schema versions and reports cognitive signals only, never a respondent score.

---

# 12. Pilot data intake

Current live form remains local-first and JSON-export capable.

A future automatic intake backend has been prepared but is **not connected to the live form**:

`workers/workstyle-pilot/`

Prepared architecture:
- Cloudflare Worker intake;
- D1 storage;
- allowed origin restricted to 2rasi domains;
- no name/email/employer fields;
- original JSON retained for reproducible analysis;
- compact server-calculated metadata retained for quick review;
- JSON export remains fallback.

Activation gate:
1. deploy Worker + D1;
2. verify `/health`;
3. submit a synthetic session and verify D1;
4. verify CORS from 2rasi;
5. update participant-facing privacy wording;
6. only then add explicit `Pateikti piloto duomenis` action.

Do not silently submit cognitive-pilot data.

---

# 13. EN / i18n rule

Do not create a second independently evolving HTML implementation for English.

Target architecture after LT cognitive wording stabilises:

`shared WorkStyle engine + LT content pack + EN content pack`

Rules:
- item IDs and axis IDs remain stable across languages when semantic equivalence is intended;
- timing/randomisation/blocks/data schema stay shared;
- EN is an adaptation of behavioural meaning, not a literal machine translation;
- EN wording receives its own small cognitive check;
- LT and EN versions remain distinguishable in exported data;
- do not pool LT and EN psychometric data until language equivalence is examined.

EN work starts only after the LT cognitive form survives without another structural wording reset.

---

# 14. PAEI / DISC

PAEI and DISC remain future qualitative interpretation lenses only.

Current rules:
- not part of core scoring;
- no hand-assigned numeric mapping;
- no claims of official equivalence;
- no outer ring that visually implies validated integration;
- any quantitative mapping must wait for external benchmark data and cross-validation.

---

# 15. Current next gate

1. Smoke-test the LT-D live page on mobile after deployment.
2. Verify intro cards, 5-position interaction, flags, Back/Next, resume, both breaks, final feedback, JSON export and restart.
3. Run a small cognitive pilot with approximately 6–10 people with real work experience.
4. Keep participant collection manual/JSON until automatic intake passes its backend activation gate.
5. Analyse ambiguity, context dependence, felt redundancy, directional spread and timing by item/axis/block.
6. Mark each axis `KEEP / REWRITE / MERGE-DROP / OPEN QUESTION`.
7. Kill/rewrite weak axes/items before adding any result profile.
8. Only after the cognitive architecture stabilises create a scored reflective prototype and then an EN content pack.
9. Keep public claims explicitly developmental/research-oriented until substantially stronger evidence exists.
