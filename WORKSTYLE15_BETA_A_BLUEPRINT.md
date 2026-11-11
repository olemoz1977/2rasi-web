# WorkStyle 15 — Beta A blueprint

Status: PRE-PILOT BLUEPRINT / NOT YET PUBLIC
Last updated: 2026-08-23

## 1. Core decision

Beta A target: **75 items**.

Per dimension:
- 3 retained legacy-source items;
- 1 newly written direct item (`+`);
- 1 newly written low-pole / reverse-key candidate (`R`).

Total:
- 45 legacy-source references;
- 30 original WorkStyle 15 draft items;
- 15 dimensions × 5 items = 75.

This structure deliberately moves WorkStyle 15 away from being merely a shortened copy of the legacy source while preserving the original 15-dimension architecture.

## 2. Candidate item composition

Legacy references use source item numbers from `ADEPT15.xlsx` / `Žemelapis`.
New items use the two drafts per dimension from `WORKSTYLE15_NEW_ITEMS_LT_DRAFT.md`.

| Dimension | 3 legacy candidates | New direct | New reverse |
|---|---:|---|---|
| Kryptingumas | 1, 4, 8 | KRY+ | KRY-R |
| Struktūra | 11, 12, 20 | STR+ | STR-R |
| Bendradarbiavimas | 23, 24, 28 | BEN+ | BEN-R |
| Jautrumas | 31, 32, 36 | JAU+ | JAU-R |
| Nuolankumas | 41, 42, 48 | NUO+ | NUO-R |
| Konceptualus mąstymas | 52, 57, 59 | KON+ | KON-R |
| Lankstumas | 61, 62, 65 | LAN+ | LAN-R |
| Tobulėjimas | 71, 73, 74 | TOB+ | TOB-R |
| Ramybė | 81, 85, 87 | RAM+ | RAM-R |
| Pozityvumas | 91, 92, 94 | POZ+ | POZ-R |
| Savimonė | 101, 103, 104 | SAV+ | SAV-R |
| Ambicija | 112, 115, 119 | AMB+ | AMB-R |
| Įtaka | 122, 124, 129 | ITA+ | ITA-R |
| Asertiškumas | 131, 135, 139 | ASE+ | ASE-R |
| Gyvybingumas | 141, 144, 149 | GYV+ | GYV-R |

This table is a working content architecture, not final item approval.

## 3. Scoring

Likert response: 1–5.

For direct items:
`scored = response`

For reverse-key items:
`scored = 6 - response`

Each dimension therefore has:
- 5 scored items;
- raw range 5–25.

Working normalized WorkStyle index:
`dimension_index = (raw_sum - 5) / 20 * 100`

Interpretation boundary:
- this is a theoretical scale index;
- it is not a percentile;
- it does not mean “higher than X% of people”.

## 4. Six higher-level WorkStyle groups

Keep the recovered 6-group architecture for Beta A:
- Emotional = Ramybė + Pozityvumas + Savimonė
- Teamwork = Bendradarbiavimas + Jautrumas + Nuolankumas
- Achievement = Ambicija + Įtaka
- Adaptability = Konceptualus mąstymas + Lankstumas + Tobulėjimas
- Interaction = Asertiškumas + Gyvybingumas
- Task = Kryptingumas + Struktūra

Recommended calculation:
`style_index = average(normalized dimension indexes in the group)`

This keeps each dimension equally weighted and remains transparent if item counts change later.

## 5. Questionnaire order

Do not present dimension blocks.

Beta A order should:
- mix all 15 dimensions;
- avoid two items from the same dimension appearing consecutively;
- separate direct and reverse items from the same dimension;
- avoid long runs of reverse items;
- preserve mobile reading rhythm;
- randomize or use several fixed balanced forms only if scoring/debugging remains reproducible.

## 6. Result logic before norms exist

Do **not** label fixed cut-offs as population “low / average / high”.

Beta A result should use two honest views:

### A. Absolute scale position
Show the 0–100 WorkStyle index for each dimension as a location on the theoretical response scale.

### B. Within-person pattern
Highlight which tendencies are relatively more and less characteristic **within this person's own profile**.

Suggested language:
- “More characteristic in your profile”
- “Less characteristic in your profile”
- “Worth noticing”

Avoid:
- “Top 10%”
- “High compared with others”
- “Weak competence”

until a real norm sample exists.

## 7. Interpretation card structure

Each dimension result card should contain:
1. short description of the tendency;
2. what it can contribute;
3. what can happen when overused / underused;
4. one reflection prompt;
5. optional links to outer interpretive lenses.

Example structure, not final copy:
- **Tendency:** how the pattern usually shows up.
- **Can help when:** useful contribution.
- **Watch when:** possible trade-off.
- **Notice:** one question to observe in real work.

## 8. PAEI and DISC in Beta A

Do not calculate or display “official” PAEI or DISC scores in the first pilot.

First pilot use:
- show optional explanatory correspondence only;
- allow a lens to highlight which WorkStyle dimensions conceptually connect to P/A/E/I or D/I/S/C;
- collect user feedback on whether the mapping is understandable and useful.

Numeric derived outer-ring scores come only after:
- explicit item-level crosswalk;
- weighting rules;
- contradiction/overlap review;
- pilot behaviour check.

## 9. Jungian / Myers-Briggs-style lens

Explicitly excluded from Beta A.
Keep as deferred optional experiment after PAEI + DISC have proven useful.

## 10. Pilot instrumentation

Beta A should record, without storing unnecessary identity data:
- anonymous session ID;
- language;
- answer per item;
- item presentation order/version;
- total completion time;
- optionally per-item response latency if technically simple and privacy-safe;
- completion / abandonment point;
- result-view interactions (e.g. which dimension/lens was opened) only if disclosed and useful.

Do not collect name/email unless a separate explicit user action requires it.

## 11. Beta decision gates

After enough real responses, review:
- completion rate and median time;
- reverse-item comprehension / anomalies;
- item variance and ceiling/floor patterns;
- corrected item-total correlation inside each dimension;
- internal consistency as a clue, not the only criterion;
- cross-dimension overlap;
- whether one general favourable-self-description factor dominates;
- qualitative feedback: “specific/useful” vs “generic/flattering”.

Only then decide whether public V1 remains 75 or can be reduced toward 60.

## 12. Next implementation gate

Before coding the questionnaire:
1. review the 30 new LT items linguistically;
2. compare the 45 retained legacy references against source/licensing status;
3. approve Beta A content IDs and exact wording;
4. create the mixed item order;
5. write the 15 result interpretations;
6. only then implement LT web beta and translate to EN after the LT construct is stable.
