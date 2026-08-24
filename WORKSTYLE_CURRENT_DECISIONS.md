# WorkStyle — Current Decision Log

Status: ACTIVE SOURCE OF TRUTH FOR CURRENT WORKSTYLE R&D
Date: 2026-08-24
Branch: `hero-webgl`

Historical files such as `WORKSTYLE15_DECISIONS.md` remain preserved as the record of the 15-dimension / v0.4-v0.6 phase. They are not the current architecture source of truth.

## 1. Product identity

Current purpose:

> **A lightweight work-style reflection tool showing how a person tends to approach work when more than one legitimate way of acting exists.**

Current stage:
- 2rasi experimental / research prototype;
- not a hiring, promotion, leadership-potential or role-fit instrument;
- no professional claims before evidence;
- engaging on the surface, methodologically disciplined underneath.

Future professional assessment work may move to OMESG360. WorkStyle R&D remains in 2rasi for now.

## 2. Measurement direction

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
- no 0-100 public scores, norms or percentiles yet;
- no numerical higher-order domains yet.

A bipolar axis survives only if cognitive and later empirical evidence supports it. Semantic antonyms alone are insufficient.

## 3. Current 8-axis candidate architecture

1. **Struktūruotas pasiruošimas ↔ Organizavimas eigoje** — STRONG.
2. **Metodo nuoseklumas ↔ Metodo adaptavimas** — STRONG.
3. **Konkretus fokusas ↔ Ryšių ir sistemos fokusas** — PROMISING / HIGH-CHALLENGE.
4. **Išvados stabilumas ↔ Išvados peržiūrėjimas pagal naujus duomenis** — FRAGILE CONDITIONAL.
5. **Galimybių skenavimas ↔ Rizikų skenavimas** — CONDITIONAL.
6. **Savarankiškas veikimas ↔ Koordinavimas su kitais** — STRONG.
7. **Tiesus nesutarimo išsakymas ↔ Derinimosi paieška** — STRONG.
8. **Aktyvus dalyvavimas ↔ Santūrus dalyvavimas** — STRONG.

The count `8` is not protected. A clean 7- or 6-axis model is preferable to symmetry.

## 4. Felt-distinctness rule

Constructs must pass both:
1. latent distinctness;
2. felt distinctness for respondents.

This rule was added after several candidates felt emotionally like the same question despite conceptual differences.

Decisions already made:
- Commitment Stability ↔ Goal Reallocation removed from V1;
- position revisability reframed as conclusion/evidence updating;
- position assertion reframed as interpersonal disagreement handling.

Detailed source: `WORKSTYLE_8AXIS_FELT_DISTINCTNESS_AUDIT.md`.

## 5. Removed / parked constructs

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
- Conflict Engagement as possible future distinction;
- Detail/Gist under observation within analysis scope.

Do not re-add constructs to restore breadth or symmetry.

## 6. WorkStyle vs competence

WorkStyle asks:

> **How do I usually tend to act when several legitimate approaches are available?**

It does not ask whether the person is competent, correct, suitable for leadership or suitable for a role.

If a construct becomes an ability/competence question, move it out of WorkStyle rather than rescuing it with wording tricks.

## 7. Leadership SJT

Leadership SJT work is preserved but **FROZEN / PARKED**.

Current portfolio decision:
- Leadership SJT is a possible **next WorkStyle evolution stage**, not a parallel active project;
- do not start Critical Incident Stage 0, participant recruitment or new SJT item writing while WorkStyle v0.7 is collecting evidence;
- reopen only after the WorkStyle architecture reaches and survives its current evidence gate or the portfolio is explicitly reprioritized.

Future professional stack may still use:
- WorkStyle = behavioural tendencies;
- Leadership SJT = situational managerial judgement;
- Role Profile = role requirements;
- structured interview/work sample = other evidence.

Do not merge SJT logic into the current WorkStyle questionnaire.

## 8. Current cognitive prototype

Live path:
`https://2rasi.com/tools/workstyle15/v07-cognitive.html`

Current form/instrument version:
`0.7-cognitive-8axis-lt-e`

Current LT content version:
`v07-lt-d`

Files:
- `tools/workstyle15/v07-cognitive.html` — shell, UX, timing, block/order engine;
- `tools/workstyle15/v07-content-lt.js` — LT situation content pack.

Current form:
- 34 items;
- 5 stronger axes × 5 items;
- 3 fragile axes × 3 items;
- 3 blocks: 12 + 11 + 11;
- all 8 axes represented in every block;
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
- JSON export/fallback;
- no profile/score.

Q01-Q07 remain unchanged.

Current Q08:
- EN conceptual source: `When I travel, I prefer to organize as I go, rather than prepare everything in advance.`
- LT: `Keliaudamas dažniau organizuojuosi eigoje, užuot viską iš anksto susiplanavęs.`

After Q08, v0.7 content is frozen pending evidence.

Why no result: a result before construct survival would teach respondents to treat provisional axes as findings.

## 9. Cognitive survival priorities

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

## 10. Data policy

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

It reports cognitive signals only.

## 11. Pilot data intake — ACTIVE

The pilot intake is no longer only prepared. The verified explicit intake was activated on **2026-08-23**.

Relevant implementation lineage includes:
- `f67891e90e10a01b64b0feff1c328ecffe60fe08` — `chore(workstyle): activate verified pilot intake`;
- `446c195c80a620f0c8bd9ee06776399d3a29327c` — `fix(workstyle): align landing with active intake`.

Current boundary:
- participant submission is explicit, not silent;
- no requested name/email/employer;
- broad pilot context remains optional;
- JSON export remains available as fallback;
- intake architecture uses the prepared Cloudflare Worker / D1 path;
- participant data must not be committed to the public repository.

Current state:
**COLLECTING DATA**.

Do not redesign intake or questionnaire mechanics merely to create activity while the pilot is running. Fix only critical defects/data-loss issues without an evidence-driven version decision.

## 12. EN / i18n

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

Do not start EN adaptation until LT evidence supports the current architecture.

## 13. PAEI / DISC

PAEI and DISC remain future qualitative interpretation lenses only.

No numeric mapping, official-equivalence claims or validated-looking integration before external benchmark/cross-validation evidence.

## 14. Current evidence gate

Current stance:
**COLLECT, FREEZE, THEN ANALYSE.**

Target pilot batch remains approximately 6-10 cognitive participants with real work experience before the first structured survival review, unless data quality provides a concrete reason to change the gate.

At the checkpoint:
1. freeze the analysis set and version scope;
2. inspect ambiguity / unclear signals;
3. inspect context and cannot-assess rates;
4. inspect duplicate / felt-repetition signals;
5. inspect directional spread;
6. inspect first-response timing and block effects;
7. focus especially on the three fragile/high-challenge axes;
8. classify each axis `KEEP / REWRITE / MERGE-DROP / OPEN QUESTION`;
9. kill/rewrite weak content before any profile/scoring layer.

Only after cognitive architecture stabilises consider:
- scored reflective prototype;
- EN content adaptation;
- later professional evolution.

Keep all public claims developmental/research-oriented until stronger evidence exists.
