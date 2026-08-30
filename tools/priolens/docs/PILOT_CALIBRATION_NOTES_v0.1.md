# PrioLens pilot calibration notes v0.1

Status: INTERNAL BETA EVIDENCE / NOT VALIDATION
Date: 2026-08-30

## Scope and interpretation boundary

Two completed two-round runs are currently available from the working beta. Each run contains:

- round 1: all 28 unordered direction pairs once;
- round 2: the same 28 direction pairs with both direction exemplars switched and top/bottom positions reversed;
- 56 total choices per run.

The relationship between the two run owners is not recorded here. Therefore cross-run similarity must be interpreted conditionally:

- if the runs are from the same participant, similarity is within-person repeatability evidence;
- if they are from different participants, unusually similar direction patterns are a possible set-level salience / stimulus-bias warning.

Neither case is construct validation.

## Run A

Round-1 wins:

- AUT 0
- CER 1
- EXP 3
- MAS 6
- CON 4
- INF 4
- PRO 5
- OPP 5

Round-2 wins:

- AUT 1
- CER 0
- EXP 2
- MAS 7
- CON 4
- INF 6
- PRO 5
- OPP 3

Pair-direction agreement across changed exemplars + reversed position: **21/28 = 75%**.

Direction-level repeated pair outcome counts (repeated wins / repeated losses / changed choices):

- AUT: 0 / 6 / 1
- CER: 0 / 6 / 1
- EXP: 2 / 4 / 1
- MAS: 6 / 0 / 1
- CON: 2 / 1 / 4
- INF: 4 / 1 / 2
- PRO: 4 / 1 / 2
- OPP: 3 / 2 / 2

## Run B

Round-1 wins:

- AUT 0
- CER 2
- EXP 2
- MAS 7
- CON 4
- INF 4
- PRO 5
- OPP 4

Round-2 wins:

- AUT 1
- CER 1
- EXP 4
- MAS 7
- CON 4
- INF 2
- PRO 6
- OPP 3

Pair-direction agreement across changed exemplars + reversed position: **18/28 = 64%**.

Direction-level repeated pair outcome counts (repeated wins / repeated losses / changed choices):

- AUT: 0 / 6 / 1
- CER: 0 / 4 / 3
- EXP: 1 / 2 / 4
- MAS: 7 / 0 / 0
- CON: 2 / 1 / 4
- INF: 1 / 2 / 4
- PRO: 5 / 1 / 1
- OPP: 2 / 2 / 3

Run-B exemplar totals across both rounds (each exemplar appears against all seven other directions once):

- AUT-01 1/7; AUT-02 0/7
- CER-01 0/7; CER-02 3/7
- EXP-01 4/7; EXP-02 2/7
- MAS-01 7/7; MAS-02 7/7
- CON-01 3/7; CON-02 5/7
- INF-01 1/7; INF-02 5/7
- PRO-01 5/7; PRO-02 6/7
- OPP-01 2/7; OPP-02 5/7

These exemplar gaps are diagnostics only. With one run they cannot distinguish a general image bias from participant-specific preference for one scene family.

## Cross-run observations

The round-1 direction vectors are extremely similar (Spearman rank correlation approximately **0.96**). Round-2 vectors remain similar but less so (approximately **0.71**).

Repeated structural pattern across both available runs:

- MAS is at or near ceiling in both rounds;
- PRO is consistently high;
- CON remains mid-range;
- AUT is at floor / near-floor;
- CER is low;
- OPP drops in round 2 in both runs.

This pattern is potentially important but cannot yet be attributed to participants or to the stimulus set because participant identity relation and sample size are insufficient.

## Methodological defect discovered in working beta v0.2

The original optional calibration flow displayed the round-1 dimension result before offering round 2. That can contaminate round 2 through anchoring, consistency-seeking or deliberate counter-reaction.

Therefore the 21/28 and 18/28 figures above **must not be called reliability coefficients**.

Required research flow from v0.3 onward:

1. If a two-round calibration run is selected, do not reveal dimension names, scores or interpretation after round 1.
2. Show only a neutral intermission.
3. Run the complementary 28 trials.
4. Reveal results only after both rounds are complete.
5. Report raw pair agreement descriptively, not as validated reliability.
6. Keep latency diagnostic only and do not score it psychologically.

## Current beta implications

Do not replace stimuli merely because one participant chooses a direction often or rarely.

Re-open a direction only when one of these appears across multiple independent participants:

- persistent floor/ceiling direction effect regardless exemplar;
- persistent exemplar imbalance within a direction;
- unusually high pair flip rate relative to other directions;
- stable position or luminance/style preference that predicts choices.

Priority beta questions now:

1. Is the repeated MAS-high / AUT-CER-low structure participant-specific or set-level?
2. Does OPP-02 systematically outperform OPP-01 across independent participants?
3. Does INF exemplar imbalance persist, or was Run B participant-specific?
4. Does blind two-round calibration reduce or increase pair agreement compared with the contaminated v0.2 flow?
