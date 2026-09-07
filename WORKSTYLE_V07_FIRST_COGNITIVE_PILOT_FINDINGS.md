# WorkStyle v0.7 — first cognitive pilot findings

Status: FIRST REAL COGNITIVE SESSION / UX + CONSTRUCT SIGNAL ONLY
Date: 2026-08-23
Instrument version: `0.7-cognitive-8axis-lt-b`

## Scope boundary

This is one real completion. It is useful for:
- response-format usability;
- timing / fatigue signal;
- ambiguity / memory problems;
- first qualitative impressions of the bipolar format.

It is **not** evidence for psychometric validity, axis reliability, factor structure, or a respondent profile.

## Session summary

- 34 / 34 situations completed.
- Wall-clock completion time: ~8.53 minutes.
- Median item time: ~11.0 s.
- Mean item time: ~15.1 s.
- First 17 items mean: ~17.1 s.
- Last 17 items mean: ~13.0 s.
- No late-session latency collapse was observed.
- No `Priklauso nuo situacijos` responses.
- No `Neteko / negaliu įvertinti` responses.
- No `Abu panašiai` midpoint responses.
- No item was marked with the combined `neaiškus / dirbtinas / primena kitą` checkbox.

Response distribution:
- left extreme (`Visada` left): 9
- left moderate (`Dažniau` left): 10
- midpoint (`Abu panašiai`): 0
- right moderate (`Dažniau` right): 13
- right extreme (`Visada` right): 2

## Qualitative respondent signal

The respondent described the experience as unusual / novel: it felt unlike tests they had previously completed.

Interpretation:
- this is consistent with the new response grammar requiring comparison between two plausible behavioural strategies rather than rating agreement with a desirable statement;
- novelty itself is not evidence of validity;
- it may be a product-experience advantage if clarity remains high and the forced trade-off does not create artificial choices.

## Important UX failure: end-of-test recall

The end feedback asked which situations seemed similar and where context was missing.

The respondent entered essentially:
> `Kaip prisiminti kai testas baigtas`

for both prompts.

This is a valid design failure, not respondent failure.

After 34 randomised situations, retrospective recall of item numbers / content is unrealistic.

Decision:
- do not rely on end-only free recall for item-level cognitive feedback;
- split the current combined checkbox into distinct in-item signals:
  1. `Neaišku / sunku suprasti`
  2. `Primena ankstesnę situaciją`
- store them separately;
- at completion automatically show which situations were flagged;
- retain end comments only for global impressions.

## Duplicate-feeling signal

Final general feedback:
> `Vietomis jaučiasi kad jau atsakiau į panašu klausimą`

No exact item pairs can be recovered because the current UI did not capture the feeling at the moment it occurred.

This is methodologically important because repeated scenarios can reflect either:
1. intentionally repeated indicators of the same axis;
2. wording/content redundancy within an axis;
3. overlap between different axes.

The current session cannot distinguish these explanations.

Therefore the next version must capture duplicate perception in-item.

## Midpoint and special-option observation

The respondent used neither midpoint nor either special option in 34 items.

Do **not** interpret this as proof that the scale has a meaningful neutral point or that context dependence is absent. With N=1 it may simply reflect one respondent's strong directional preferences or response style.

However, it is encouraging that the bipolar format did not automatically drive the respondent into `Priklauso nuo situacijos` despite earlier concern that many work-style dilemmas might be too context dependent.

This should be watched closely in subsequent sessions.

## Axis-level descriptive pattern — research diagnostics only

Signed direction is not presented as a personal result. The following is only an internal consistency / spread diagnostic for this one session.

| Axis | n | Mean response | Within-axis SD | Note |
|---|---:|---:|---:|---|
| Autonomous ↔ Coordinated | 5 | 1.40 | 0.55 | highly consistent left tendency in this session |
| Disagreement assertion ↔ Alignment seeking | 5 | 3.60 | 0.89 | moderate right tendency |
| Method consistency ↔ adaptation | 5 | 3.00 | 1.41 | mixed / context-sensitive pattern |
| Expressive ↔ reserved participation | 5 | 1.60 | 1.34 | mostly left, one divergent item |
| Evidence revision threshold | 3 | 3.33 | 1.15 | mixed; slowest axis on average |
| Opportunity ↔ risk scanning | 3 | 1.67 | 0.58 | consistent left tendency |
| Local ↔ system scope | 3 | 4.00 | 0.00 | perfectly consistent right responses in this session |
| Structured ↔ emergent organisation | 5 | 3.20 | 1.64 | widest spread; investigate scenario dependence |

These are not scale scores and should not be shown to the respondent.

## Timing flags

Slowest diagnostic families in this session:
- Evidence revision: ~25.0 s mean per item.
- Opportunity/risk scanning: ~20.7 s mean, driven strongly by the first item.
- Method consistency/adaptation: ~16.3 s mean.

The very first item took ~43.7 s, likely including learning the new response grammar. Do not treat that single latency as an item-quality failure without more sessions.

## Current decision

**KEEP the bipolar response experiment.**

Reason:
- completion was feasible;
- no fatigue collapse;
- the respondent experienced the format as meaningfully different;
- no special-option overuse;
- the first session surfaced a concrete, fixable cognitive-feedback UX problem.

**DO NOT reduce or validate axes from this one session.**

Immediate next change is instrumentation, not construct deletion:
- split ambiguity and duplicate flags;
- make duplicate feedback capturable during the item;
- simplify end feedback so it does not require remembering item numbers.
