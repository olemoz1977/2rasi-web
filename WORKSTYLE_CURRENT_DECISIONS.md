# WorkStyle — Current Decision Log

Status: ACTIVE SOURCE OF TRUTH FOR CURRENT WORKSTYLE R&D
Date: 2026-08-23
Branch: `hero-webgl`

Historical files such as `WORKSTYLE15_DECISIONS.md` remain preserved as the record of the 15-dimension / v0.4–v0.6 phase. They are no longer the current architecture source of truth.

## 1. Product identity

Current purpose:

> **A lightweight work-style reflection tool showing how a person tends to approach work when more than one legitimate way of acting exists.**

Current stage:
- 2rasi experimental / for-fun / research prototype;
- architecture and data kept traceable so the concept can later mature into a professional product;
- not currently a hiring, promotion, leadership-potential or role-fit instrument.

Future professional assessment work may move to OMESG360. WorkStyle R&D remains in 2rasi for now.

Product rule: engaging on the surface, methodologically disciplined underneath, no professional claims before evidence.

## 2. Historical 15-dimension phase

The inherited 15-dimension count is no longer a target.

Main lessons:
- 75 items were too fatiguing;
- 45 items were substantially more usable;
- separate cannot-assess responses exposed ambiguity hidden by ordinary midpoints;
- reverse items often measured legitimate alternative styles rather than absence of a trait;
- several inherited constructs mixed style, competence, self-regulation or metacognition;
- 5×3 symmetry was visually neat but not data-justified.

The 15-dimension architecture remains provenance/history only.

## 3. Measurement direction

Current research default: **primarily bipolar directional WorkStyle axes**.

Requirements:
- both poles occupy the same behavioural choice space;
- both poles are professionally legitimate;
- no pole is `high`, `better`, `more developed` or `more competent`;
- explicit two-anchor wording;
- visible response grammar: `Visada | Dažniau | Abu panašiai | Dažniau | Visada`;
- numeric coding remains internal;
- separate `Priklauso nuo situacijos`;
- separate `Neteko / negaliu įvertinti`;
- no 0–100 public scores, norms or percentiles yet;
- no numerical higher-order domains yet.

A bipolar axis survives only if cognitive and later empirical evidence supports it. Semantic antonyms alone are insufficient.

## 4. Current 8-axis candidate architecture

1. **Struktūruotas pasiruošimas ↔ Organizavimas eigoje** — STRONG.
2. **Metodo nuoseklumas ↔ Metodo adaptavimas** — STRONG.
3. **Konkretus fokusas ↔ Ryšių ir sistemos fokusas** — PROMISING / HIGH-CHALLENGE.
4. **Išvados stabilumas ↔ Išvados peržiūrėjimas pagal naujus duomenis** — FRAGILE CONDITIONAL.
5. **Galimybių skenavimas ↔ Rizikų skenavimas** — CONDITIONAL.
6. **Savarankiškas veikimas ↔ Koordinavimas su kitais** — STRONG.
7. **Tiesus nesutarimo išsakymas ↔ Derinimosi paieška** — STRONG.
8. **Aktyvus dalyvavimas ↔ Santūrus dalyvavimas** — STRONG.

The count `8` is not protected. A clean 7- or 6-axis model is preferable to symmetry.

## 5. Felt-distinctness rule

Constructs must pass both:
1. latent distinctness;
2. felt distinctness for respondents.

This rule was added after several `hold ↔ change` candidates felt emotionally like the same question.

Decisions already made:
- Commitment Stability ↔ Goal Reallocation removed from V1;
- position revisability reframed as conclusion/evidence updating;
- position assertion reframed as interpersonal disagreement handling.

Detailed source: `WORKSTYLE_8AXIS_FELT_DISTINCTNESS_AUDIT.md`.

## 6. Removed / parked constructs

Removed from primary core:
- Persuasive Influence;
- heterogeneous Learning Orientation;
- Empathic Attention;
- Emotional Regulation;
- Reflective Self-Awareness;
- separate Explore/Exploit axis.

Parked:
- Achievement Drive as optional unipolar candidate;
- Commitment Stability / Goal Reallocation;
- Pace/Tempo;
- Conflict Engagement as a possible future distinction;
- Detail/Gist under observation within analysis scope.

Do not re-add constructs to restore breadth or symmetry.

## 7. WorkStyle vs competence

WorkStyle asks:

> **How do I usually tend to act when several legitimate approaches are available?**

It does not ask whether the person is competent, correct, suitable for leadership or suitable for a role.

If a construct becomes an ability/competence question, move it out of WorkStyle rather than rescuing it with wording tricks.

## 8. Leadership SJT

Leadership SJT work is preserved but **PARKED** from the active WorkStyle path.

Future professional stack may use:
- WorkStyle = behavioural tendencies;
- Leadership SJT = situational managerial judgement;
- Role Profile = role requirements;
- structured interview/work sample = other evidence.

Do not merge SJT logic into the current WorkStyle questionnaire.

## 9. Current cognitive prototype

Live path:
`https://2rasi.com/tools/workstyle15/v07-cognitive.html`

Current **form/instrument version**:
`0.7-cognitive-8axis-lt-e`

Current **LT content version**:
`v07-lt-d`

Files:
- `tools/workstyle15/v07-cognitive.html` — shell, UX, timing, block/order engine;
- `tools/workstyle15/v07-content-lt.js` — LT situation content pack.

The content pack split is the first i18n step. LT-E changed ordering/instrumentation, not item wording.

Current form:
- 34 items;
- 5 stronger axes × 5 items;
- 3 fragile axes × 3 items;
- 3 blocks: 12 + 11 + 11;
- **all 8 axes represented in every block**;
- five-item axes distributed 2/2/1 across blocks;
- three-item axes distributed 1/1/1;
- no adjacent same-axis items;
- explicit break screens after items 12 and 23;
- break duration separate from response timing;
- first-response timing stops at the first answer;
- hidden/background tab time excluded;
- separate unclear and duplicate flags;
- optional broad role/experience/environment context;
- local browser resume;
- end qualitative feedback;
- JSON export;
- no profile/score.

Current intro UX:
- separate `Apie` and `Pradėti` cards;
- technical/privacy explanation is secondary disclosure;
- no black fill as the main interaction state;
- selection uses a light accent/outline.

Why no result: a result before construct survival would teach respondents to treat provisional axes as findings.

## 10. Cognitive survival priorities

Highest-risk axes:
1. Išvados stabilumas ↔ peržiūrėjimas;
2. Galimybių ↔ rizikų skenavimas;
3. Konkretus ↔ sisteminis fokusas.

Review/rework an item or axis when repeated participants show:
- one pole feels smarter/more moral/more competent;
- context response dominates;
- cannot-assess dominates;
- duplicate/felt-repetition signal;
- hidden assumptions are needed;
- very long timing accompanied by interpretation difficulty;
- both poles can be strongly true in the same referent.

## 11. Data policy

V0.5/v0.6 Likert data must not be retroactively converted to bipolar scores.

V0.7 is a new measurement series.

Primary cognitive signals:
- response distribution;
- left / centre / right descriptive proportions;
- context / NA / unclear / duplicate rates;
- first-response time;
- block-level timing change;
- break duration as process metadata;
- free-text feedback;
- respondent paraphrases when available.

Do not interpret direction as a stable personal score yet.

Analyzer:
`tools/workstyle15/analyze-v07.py`

It supports v0.7 cognitive schema versions and reports cognitive signals only.

## 12. Pilot data intake

Current participant transfer remains JSON export.

Prepared but **not connected** backend:
`workers/workstyle-pilot/`

Prepared architecture:
- Cloudflare Worker;
- D1 storage;
- 2rasi-origin restriction;
- no requested name/email/employer;
- raw JSON + compact server summary;
- synthetic v3 test payload;
- JSON remains fallback.

Automatic submission activation gate:
1. deploy Worker and D1;
2. verify `/health`;
3. submit synthetic payload and verify D1;
4. verify CORS from 2rasi;
5. update privacy copy;
6. add explicit participant `Pateikti piloto duomenis` action.

Do not silently submit cognitive-pilot sessions.

## 13. EN / i18n

Do not create an independently evolving second test implementation.

Target architecture:
`shared engine + language-specific content/UI packs`.

Already implemented:
- LT situation content is separate from the form engine.

Later EN rules:
- stable item/axis IDs where semantic equivalence is intended;
- shared randomisation, timing, blocks and data schema;
- EN is behavioural adaptation, not literal machine translation;
- EN receives a separate small cognitive check;
- language/content version remains explicit in exports;
- do not pool LT/EN psychometric data until equivalence is examined.

Do not start EN item adaptation until the LT content survives the small cognitive pilot without another wording reset.

## 14. PAEI / DISC

PAEI and DISC remain future qualitative interpretation lenses only.

No numeric mapping, no official-equivalence claims and no visual outer ring implying validated integration before external benchmark/cross-validation evidence.

## 15. Current next gate

1. Smoke-test LT-E live on mobile.
2. Verify intro cards, five-position interaction, flags, Back/Next, resume, both breaks, final feedback, JSON and restart.
3. Run approximately 6–10 cognitive participants with real work experience.
4. Keep collection manual/JSON until backend activation gate passes.
5. Analyse ambiguity, context dependence, felt redundancy, directional spread and timing by item/axis/block.
6. Mark axes `KEEP / REWRITE / MERGE-DROP / OPEN QUESTION`.
7. Kill/rewrite weak content before any profile.
8. Only after cognitive architecture stabilises move toward a scored reflective prototype and EN content adaptation.
9. Keep all public claims developmental/research-oriented until stronger evidence exists.
