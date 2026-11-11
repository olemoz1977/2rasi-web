# WorkStyle 15 — product and validation spec

Status: WORKING SPEC / PRE-CODE
Last updated: 2026-08-23
Source: recovered Microsoft Forms + `ADEPT15.xlsx` analysis workbook supplied by the project owner.

## 1. Product purpose

WorkStyle 15 is an individual work-style reflection tool.

Primary user questions:
- How do I tend to work?
- Which tendencies usually help me?
- Where can the same tendencies become a blind spot or friction point?
- What should I notice in my own behaviour at work?

It is not intended to diagnose personality, assign a fixed type, or make automated decisions about a person.

## 2. Recovered source model

The legacy source contains:
- 150 Lithuanian Likert statements;
- 1–5 response scale;
- 15 dimensions, 10 statements per dimension;
- 6 higher-level work-style groups;
- direct normalized scoring from theoretical scale minimum/maximum.

15 dimensions:
1. Kryptingumas
2. Struktūra
3. Bendradarbiavimas
4. Jautrumas
5. Nuolankumas
6. Konceptualus mąstymas
7. Lankstumas
8. Tobulėjimas
9. Ramybė
10. Pozityvumas
11. Savimonė
12. Ambicija
13. Įtaka
14. Asertiškumas
15. Gyvybingumas

6 recovered work-style groups:
- Emocinis stilius = Ramybė + Pozityvumas + Savimonė
- Komandinio darbo stilius = Bendradarbiavimas + Jautrumas + Nuolankumas
- Pasiekimų stilius = Ambicija + Įtaka
- Prisitaikymo stilius = Konceptualus mąstymas + Lankstumas + Tobulėjimas
- Sąveikos stilius = Asertiškumas + Gyvybingumas
- Užduočių stilius = Kryptingumas + Struktūra

Recovered normalization:
- 10-item dimension: `(sum - 10) / 40 * 100`
- 3-dimension style: `(sum - 30) / 120 * 100`
- 2-dimension style: `(sum - 20) / 80 * 100`

Important: these percentages represent position within the theoretical 1–5 scale. They are **not percentiles** and must not be described as comparison with other people unless a norm sample is built later.

## 3. What the old Forms data can and cannot tell us

The workbook contains 8 complete 150-item submissions.

This is far too small for psychometric validation or final item selection. It can only provide exploratory clues.

Observed completion timestamps range from a few minutes to more than two hours. Several records almost certainly include pauses/interruption, so Forms start/end timestamps are not a reliable measure of true completion time. A few complete submissions around 8–12 minutes show that 150 items can be completed quickly by some users, but 150 remains too demanding as the default public experience.

Exploratory response patterns also show strong positive relationships among several dimensions. With only 8 responses this is not evidence of invalid constructs, but it reinforces the need to check whether the current bank contains a broad positive-self-description / social-desirability factor.

## 4. Item-bank audit findings

### 4.1 All items are keyed in the same favourable direction
The current bank is overwhelmingly written so that a higher answer sounds socially desirable or competent.

Risk:
- acquiescence / "I am good at everything" response style;
- inflated correlations across dimensions;
- weaker differentiation between constructs.

V1 rule:
Do not introduce artificial negative wording merely to create reverse scoring. Instead, where useful, add naturally written low-pole / trade-off items that still describe believable work behaviour and can be reverse-scored without linguistic tricks.

### 4.2 Some items ask the respondent to report what other people think
Examples in the source model include statements equivalent to:
- colleagues describe me as ...
- the team follows my example ...
- others say I am ...

These are less clean in a self-report instrument because the respondent is estimating other people's perception.

V1 preference:
Use first-person observable behaviour wherever possible. Other-person perception belongs more naturally in Leadership 360°.

### 4.3 Some items are trait labels rather than behaviour
Examples include self-labels such as "charismatic leader", "natural leader", or statements that simply declare the dimension itself.

V1 preference:
Measure concrete patterns: what the person tends to do, notice, choose, avoid or persist with.

### 4.4 Some statements cross into neighbouring dimensions
Examples of likely conceptual overlap in the source bank:
- Kryptingumas ↔ Lankstumas
- Kryptingumas ↔ Struktūra
- Bendradarbiavimas ↔ Pozityvumas / Jautrumas
- Tobulėjimas ↔ Savimonė
- Ambicija ↔ Kryptingumas / Įtaka
- Įtaka ↔ Asertiškumas / Gyvybingumas

V1 rule:
A retained item should have one clear primary construct even if real human behaviour naturally overlaps.

### 4.5 Some items are context- or role-dependent
Examples include formal management, career ladder, seminars, document filing, or specific workplace settings.

V1 preference:
Keep wording applicable to managers and non-managers, office and operational work, unless the dimension genuinely requires a narrower context.

### 4.6 Repetition is useful as an item bank, not as a public test
Many of the 10 statements per dimension are close semantic neighbours. This is useful for selecting robust items but unnecessary for the default public version.

Decision:
Treat all 150 statements as a source bank, not as the V1 questionnaire.

## 5. Public V1 target

Working target: **75 items = 15 dimensions × 5 items**.

Why 75 first:
- preserves 5 observations per dimension;
- roughly halves the legacy burden;
- still provides room to represent different behavioural facets inside each dimension;
- gives a stronger starting point than immediately cutting to only 3 items per dimension.

Possible later target: 60 items (4 per dimension), but only after pilot data shows which items can be removed safely.

### Item-selection criteria
Each retained item should ideally be:
1. one clear idea;
2. behaviour/tendency rather than identity label;
3. understandable without management jargon;
4. applicable across different work contexts;
5. not an obvious duplicate of another retained item;
6. not trivially socially desirable;
7. primarily linked to one WorkStyle dimension;
8. translatable into natural English without changing the construct.

## 6. Questionnaire UX

Before start, tell the user:
- approximate duration;
- there are no correct answers;
- answer about how you **usually act at work**, not how you would ideally like to act;
- use the full 1–5 scale.

During the questionnaire:
- mix dimensions rather than present 5 items from one dimension in sequence;
- do not display the name of the dimension being measured;
- show progress;
- allow mobile completion without dense matrix UI.

## 7. Result architecture

The result should not stop at percentages.

For each of the 15 dimensions provide:
- current tendency / relative position on the WorkStyle scale;
- plain-language interpretation;
- what this tendency can bring when useful;
- what to watch when overused or underused;
- one reflection prompt / observable behaviour to notice.

The result language should avoid fixed labels such as "you are X". Prefer "you tend to...", "you may notice...", "this pattern can help when...".

## 8. Multi-lens radial profile

Working visualization concept:

### Layer 1 — primary measurement
15 WorkStyle dimensions.

### Layer 2 — recovered aggregation
6 WorkStyle groups.

### Optional outer lens — Adizes PAEI
Conceptual correspondence only until separately validated.

Preliminary mapping hypothesis:
- P: strongest links to Kryptingumas, Ambicija; possible Asertiškumas / Įtaka
- A: strongest link to Struktūra; possible Kryptingumas / Ramybė
- E: strongest links to Konceptualus mąstymas, Lankstumas, Tobulėjimas; possible Ambicija / Gyvybingumas
- I: strongest links to Bendradarbiavimas, Jautrumas, Nuolankumas; possible Pozityvumas / Savimonė

### Optional outer lens — DISC
Conceptual correspondence only until a transparent item/dimension crosswalk is built.

Preliminary mapping hypothesis:
- D: Asertiškumas, Kryptingumas, Ambicija, Įtaka
- I: Gyvybingumas, Pozityvumas, Įtaka, Bendradarbiavimas
- S: Ramybė, Jautrumas, Bendradarbiavimas, Nuolankumas
- C: Struktūra, Kryptingumas, with possible item-level links from Savimonė / conceptual-quality content

Critical rule:
PAEI and DISC are **lenses**, not claims that the user completed official PAEI or DISC assessments.

The best UX may be one outer ring with a toggle `PAEI | DISC` rather than stacking both permanently and overcrowding the radar.

## 9. Deferred Jungian / Myers-Briggs idea

Keep as a later optional experiment only.

If ever used:
- call it a Jungian preference lens or similar;
- do not claim an official MBTI type;
- do not include it in WorkStyle 15 V1;
- add only if it demonstrably adds interpretive value beyond PAEI + DISC.

## 10. Validation path before public release

### Phase A — semantic audit
- review all 150 source items;
- mark KEEP / REWRITE / DROP;
- produce a balanced candidate pool larger than the final 75;
- verify LT wording first;
- create EN translation only after the LT construct wording is stable.

### Phase B — 75-item beta
Collect real response data and track:
- completion rate;
- item missingness;
- response-time distribution;
- item variance / ceiling and floor patterns;
- item-to-dimension consistency;
- cross-dimension correlations;
- signs of a general positive-self-description factor;
- user feedback on whether the result feels specific and useful rather than flattering/general.

### Phase C — shortening / refinement
Only after beta evidence:
- remove weak or redundant items;
- consider 60-item public version;
- refine interpretation thresholds;
- validate PAEI/DISC crosswalk behaviour before showing numeric derived lens values.

## 11. Product boundaries in the ecosystem

- **WorkStyle 15**: how I tend to work — self-reflection.
- **Leadership 360°**: how my leadership behaviour is experienced by me and others — multi-rater development loop.
- **2Pair**: what repeated forced choices may reveal without direct self-description — research product.
- **Organization Development / PAEI**: later organization-level longitudinal measurement — not an average of employee WorkStyle profiles.

## 12. Next concrete action

Before coding WorkStyle 15, complete the 150-item semantic audit and create the first 75-item candidate set. Do not publish the legacy statement bank verbatim into the public repository until its source/licensing status is clear.
