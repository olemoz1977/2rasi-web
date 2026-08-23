# WorkStyle 15 — decision log

Status: ACTIVE COGNITIVE PILOT / V0.5 PRE-PILOT
Last updated: 2026-08-23

## Product identity

Name: **WorkStyle 15**.

Purpose: individual reflection on how a person tends to work.

Not a diagnostic personality test and not an official PAEI, DISC, MBTI or ADEPT-15 assessment.

## Provenance

The recovered legacy 15-dimension / 6-style model aligns closely with Aon's ADEPT-15 architecture. The old 150-item Lithuanian Likert bank has plausible but unverified Copilot/international-example provenance.

Boundary:
- the legacy tool is not the official ADEPT-15 instrument;
- do not use ADEPT branding, proprietary item claims or adaptive-scoring claims;
- the current WorkStyle item wording is newly written WorkStyle content;
- keep the historical provenance documented for future reviewers.

## Independent architecture

Current public architecture: **5 domains × 3 dimensions = 15 dimensions**.

1. **Įgyvendinimas / Execution**
   - Kryptingumas / Goal Persistence
   - Struktūra / Work Structure
   - Pasiekimų siekis / Achievement Drive

2. **Adaptacija / Adaptation**
   - Sisteminis mąstymas / Systems Thinking
   - Prisitaikymas / Adaptability
   - Mokymosi orientacija / Learning Orientation

3. **Atvirumas kitiems / Collaboration-related openness**
   - Bendradarbiavimas / Cooperation
   - Empatinis dėmesys / Empathic Attention
   - Intelektinis nuolankumas / Intellectual Humility

4. **Poveikis / Influence**
   - Asertyvus komunikavimas / Assertive Communication
   - Įtaka / Persuasive Influence
   - Socialinė energija / Social Energy

5. **Savireguliacija / Self-Regulation**
   - Emocinė savitvarda / Emotional Regulation
   - Konstruktyvus požiūris / Constructive Outlook
   - Reflektyvi savimonė / Reflective Self-Awareness

The domain labels are intentionally distinct from dimension labels.

## Independent blind reviews

Two independent reviewers assessed the same v0.1 blind package:
- Claude: **READY AFTER MINOR REVISIONS**, confidence 72/100;
- Grok: **READY AFTER MINOR REVISIONS**, confidence 78/100.

Gemini did not reliably read the file and is not counted as review evidence.

Shared empirical watch-outs:
- Achievement Drive vs Goal Persistence;
- Social Energy vs Persuasive Influence / Assertive Communication;
- Constructive Outlook vs Emotional Regulation;
- Learning Orientation vs Reflective Self-Awareness.

Claude questioned Social Energy more strongly than Grok. Decision: keep it and test empirically.

Reverse-item disagreement: Claude suggested more reverse items; Grok accepted one reverse per dimension. Decision: do not chase a mechanical reverse/direct ratio.

## V0.4 pilot finding

V0.4 used 75 items (5 per dimension). The first real mobile completion produced a clear fatigue signal:
- respondent explicitly reported boredom from roughly item 30;
- response latencies collapsed sharply in the later part of the form;
- later responses therefore should not be treated as a trustworthy personal profile;
- several items also felt over-engineered / insufficiently human in wording;
- the 1–5 agree/disagree scale caused `3` to be used both as a true midpoint and as `I do not know`.

Decision: **75 items in one form is too long for the target experience.**

The v0.4 bank remains preserved as a candidate/audit bank and must not be deleted.

## V0.5 critical design decision

Target public-pilot form: **45 items = 15 dimensions × 3 items**.

Per dimension:
- 2 direct-key items;
- 1 reverse-key item;
- 3 items total.

Rationale:
- 30 items (2 per dimension) is attractive for UX but too fragile: one weak item would represent half of a dimension;
- 60–75 items carries too much fatigue risk;
- 45 is the selected compromise between respondent attention and dimension coverage.

Current draft source:
- `WORKSTYLE15_V05_45_LT_DRAFT.md`

Current beta config:
- `tools/workstyle15/v05-config.js`
- `tools/workstyle15/app-v05.js`
- `tools/workstyle15/v05.css`
- `tools/workstyle15/v05.html`

V0.4 production-pilot files remain untouched for audit/history.

## Plain-language rule

Every item should be understandable after one normal read.

Avoid:
- psychometric or academic wording;
- abstract self-interpretation when observable behaviour can be asked directly;
- unnecessary subordinate clauses;
- double negatives;
- wording that makes the respondent feel they failed to understand the test;
- reverse items that merely sound like an obviously bad person answer.

The goal is not to make items simplistic. The goal is to make the behaviour clear.

## V0.5 response scale

Question frame: **Kiek tai tau būdinga darbe?**

1. Visai nebūdinga
2. Dažniau nebūdinga
3. Kartais taip, kartais ne
4. Dažniau būdinga
5. Labai būdinga

Separate response:
- **Sunku įvertinti / neteko tokios situacijos**

Critical rule:
- `Sunku įvertinti` is stored as `NA`;
- it is **not converted to 3**;
- it does not contribute to the score.

The UI explicitly explains that 5 does not mean better, ideal or correct. It only means the behaviour is strongly characteristic in relevant work situations.

## V0.5 missing-response scoring

Direct item: response as-is.
Reverse item: `6 - response`.
`NA`: excluded.

Dimension scoring:
- 3 valid items: score normally;
- 2 valid items: score from their mean, but mark the dimension as based on 2/3 responses;
- fewer than 2 valid items: do not show a dimension score.

Dimension index:
`dimension_index = (mean_valid_scored_items - 1) / 4 * 100`

Domain index:
- mean of available dimension indexes;
- require at least 2 of the 3 dimensions to have a valid score;
- otherwise show insufficient data.

Indexes are theoretical scale positions, not norms or percentiles.

## V0.5 pilot order

45 items are split into **3 blocks × 15 items**.

Rules:
- every block contains all 15 dimensions exactly once;
- every block contains exactly 5 reverse items;
- reverse items are distributed across dimensions and blocks;
- after items 15 and 30, show a short break/progress screen;
- do not present a single uninterrupted 45-item wall.

Current form ID: `workstyle15-lt-v0.5-form-a`.

## Results hierarchy

1. 15 WorkStyle dimensions — primary result;
2. five domains — secondary summary;
3. balanced interpretation / trade-offs;
4. optional correspondence lenses only later.

Do not collapse respondents into fixed types.

If `Sunku įvertinti` reduces a dimension below the minimum valid-response threshold, say so instead of inventing precision.

## PAEI / DISC / Big Five

PAEI and DISC remain optional qualitative correspondence lenses only. No numeric derived PAEI/DISC score in the first pilot.

Big Five remains a behind-the-scenes construct sanity check, not a WorkStyle result layer.

Jungian / MBTI-style mapping remains deferred.

## Pilot instrumentation

V0.5 local pilot should capture:
- anonymous session ID;
- instrument version and form ID;
- item response including explicit `NA`;
- direct/reverse direction;
- first-response latency;
- answer changes;
- block number;
- active completion time;
- number of `NA` responses;
- dimension valid-response counts;
- dimension/domain scores when calculable;
- post-result specificity rating;
- optional comment.

No name/email required. No server submission yet. JSON export remains the pilot collection mechanism.

## Current next gates

1. Manually open `tools/workstyle15/v05.html` on mobile.
2. Confirm the new `Kiek tai tau būdinga darbe?` scale feels immediately understandable.
3. Confirm `3` feels like a genuine midpoint and `Sunku įvertinti` removes the need to guess.
4. Run one full 45-item completion and compare latency/fatigue across the three 15-item blocks.
5. Flag any item that still feels artificial, patronizing, overly clever or unclear on first read.
6. Only after this cognitive pass invite outside participants.
7. Keep EN translation deferred until the LT wording survives the pilot.
8. Use an appropriately larger sample before structural/psychometric claims.
