# WorkStyle 15 — decision log

Status: ACTIVE COGNITIVE PILOT / V0.6 AMBIGUITY REVIEW
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

## 45-item target decision

Target public-pilot form: **45 items = 15 dimensions × 3 items**.

Per dimension:
- 2 direct-key items;
- 1 reverse-key item;
- 3 items total.

Rationale:
- 30 items (2 per dimension) is attractive for UX but too fragile: one weak item would represent half of a dimension;
- 60–75 items carries too much fatigue risk;
- 45 is the selected compromise between respondent attention and dimension coverage.

The 45-item form is split into **3 blocks × 15 items**.

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

## Ambiguity rule learned in v0.6

Simple vocabulary is not enough. A statement is still weak if the respondent must invent the situation before answering.

Core rule:

> The respondent should rate their usual work behaviour, not solve what situation the item author probably had in mind.

Screen every item for:
1. undefined magnitude/time (`greitai`, `ilgiau`, `reikia laiko`, `svarbus`);
2. rationality traps where the reverse pole may be perfectly sensible behaviour;
3. role/authority dependency;
4. hidden-context dependency (`problema`, `sprendimas`, `informacija`, `nesėkmė`, `rezultatas` without enough behavioural anchoring);
5. hidden self-analysis instead of recallable behaviour;
6. socially obvious reverse poles;
7. two decisions inside one item: first whether the behaviour is justified, then whether the respondent does it.

Detailed review source:
- `WORKSTYLE15_V06_AMBIGUITY_REVIEW.md`

## Response scale

Question frame: **Kiek tai tau būdinga darbe?**

1. Visai nebūdinga
2. Dažniau nebūdinga
3. Kartais taip, kartais ne
4. Dažniau būdinga
5. Labai būdinga

Separate response:
- **Sunku įvertinti / neteko tokios situacijos**

Internal scoring rule:
- `Sunku įvertinti` is stored as `NA`;
- it does not contribute to the score.

### Public-copy boundary

Internal scoring mechanics are **not respondent-facing educational copy** unless they are necessary to answer the item.

The earlier public sentence explaining that `Sunku įvertinti` would not be converted to `3` came from an internal pilot reflection. It has been removed from the v0.6 respondent UI.

Public UI may simply explain:
- what 1 and 5 mean;
- that 3 means `Kartais taip, kartais ne`;
- that `Sunku įvertinti / neteko tokios situacijos` is available when the item cannot be rated normally.

Do not expose implementation detail merely because it is useful for analysis.

## Missing-response scoring

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
- do not present a domain as a full result when one of its dimensions is missing; the UI should make incomplete coverage explicit.

Indexes are theoretical scale positions, not norms or percentiles.

## V0.5 cognitive pilot finding

First real v0.5 completion:
- 45/45 completed;
- active time about 7.6 minutes;
- 7 `Sunku įvertinti` answers;
- 17 of 45 items were explicitly captured as awkward/difficult;
- respondent reported the wording felt better than v0.4 but substantial ambiguity remained.

Important finding: the separate `Sunku įvertinti` option successfully exposed item problems that would previously have disappeared into midpoint `3`.

Full audit:
- `WORKSTYLE15_V05_COGNITIVE_FLAGS.md`

## V0.6 cognitive rewrite

V0.6 rewrote all 45 items toward shorter, more observable work behaviour while preserving the same 15 dimensions, 2D+1R structure and the same item order for comparison.

Sources:
- `WORKSTYLE15_V06_45_LT_DRAFT.md`
- `tools/workstyle15/v06-config.js`
- `tools/workstyle15/v06.html`

The same order was deliberately retained so wording effects could be compared without simultaneously changing order effects.

First v0.6 completion:
- 45/45 completed;
- active time about 6.7 minutes;
- 6 `Sunku įvertinti` answers;
- respondent feedback: wording felt simpler and more human;
- profile stability improved in several dimensions but important item-level distortions remained.

Notable scoring problems:
- `SYS-05` can punish rational handling of a genuinely one-off problem and depressed Systems Thinking;
- `COP-05` can measure autonomy rather than lack of cooperation;
- `EMP-05` can measure preference for explicit information rather than low empathic attention;
- Learning Orientation and Reflective Self-Awareness still produced insufficient valid responses;
- some domain scores should not be displayed as complete when a constituent dimension is missing.

## Current v0.6 ambiguity flags

New screenshot review specifically flagged or questioned:
- `REG-05` — problem severity and `time to recover` are undefined;
- `OUT-02` — `failure` and `quickly` are too context-dependent and overlap emotional recovery;
- `LRN-02` — deliberate disagreement-seeking is role/opportunity dependent and not cleanly learning behaviour;
- `COP-02` — whether information `can affect` colleagues is too broad and role/confidentiality dependent;
- `PER-02` — `important work` and `takes longer than expected` are vague and may reflect external delay;
- `LRN-05` — stable good practice is rational and should not be reverse-scored as low learning orientation;
- `REF-05` — `my role in the problem` is abstract and revisiting a solved problem may be unnecessary.

These items should be replaced or structurally rewritten before another external pilot.

## Results hierarchy

1. 15 WorkStyle dimensions — primary result;
2. five domains — secondary summary;
3. balanced interpretation / trade-offs;
4. optional correspondence lenses only later.

Do not collapse respondents into fixed types.

If missing responses reduce a dimension below the minimum valid-response threshold, say so instead of inventing precision.

## PAEI / DISC / Big Five

PAEI and DISC remain optional qualitative correspondence lenses only. No numeric derived PAEI/DISC score in the first pilot.

Big Five remains a behind-the-scenes construct sanity check, not a WorkStyle result layer.

Jungian / MBTI-style mapping remains deferred.

## Pilot instrumentation

Local cognitive pilot captures:
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

1. Replace the structurally ambiguous v0.6 items identified in `WORKSTYLE15_V06_AMBIGUITY_REVIEW.md`.
2. Re-check all 45 items against the seven ambiguity patterns, not only the screenshot-flagged items.
3. Keep the 45-item / 3-block structure unchanged unless new fatigue evidence appears.
4. Keep the same response scale and separate `Sunku įvertinti` option.
5. Do not display internal scoring commentary in respondent-facing copy.
6. Run one more internal cognitive completion after the targeted item changes.
7. Only then invite outside cognitive-pilot participants.
8. Keep EN translation deferred until LT wording survives the pilot.
9. Use an appropriately larger sample before structural/psychometric claims.
