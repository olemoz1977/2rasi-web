# PrioLens paired-exemplar calibration checkpoint

Status: INTERNAL SINGLE-PARTICIPANT DESIGN CHECK / NOT VALIDATION
Date: 2026-08-30

## Design

One completed 28-edge baseline session was immediately followed by a calibration session using the same 28 direction pairs. In every calibration edge both directions used the alternate exemplar and top/bottom position was inverted relative to baseline.

This checkpoint is useful for detecting image/exemplar sensitivity. It does not establish reliability of the construct, population validity or a participant trait/profile.

## Baseline vs calibration direction totals

| Direction | Baseline | Calibration | Delta |
|---|---:|---:|---:|
| AUT | 0/7 | 1/7 | +1 |
| CER | 1/7 | 0/7 | -1 |
| EXP | 3/7 | 2/7 | -1 |
| MAS | 6/7 | 7/7 | +1 |
| CON | 4/7 | 4/7 | 0 |
| INF | 4/7 | 6/7 | +2 |
| PRO | 5/7 | 5/7 | 0 |
| OPP | 5/7 | 3/7 | -2 |

Rank-order similarity of the eight direction totals is high descriptively (Spearman rho about 0.82), but n=8 directions and one participant means this is not validation evidence.

## Edge-level agreement

The same direction won in **21 of 28 edges (75%)** after both concrete images were replaced and positions inverted.

Seven edges flipped:

- AUT vs CER
- CON vs EXP
- CON vs MAS
- CON vs OPP
- CON vs PRO
- INF vs OPP
- INF vs PRO

Therefore aggregate score stability hides important pair-level instability, especially for CON.

## Stable-edge map

Counting only edges that produced the same direction winner in both rounds:

| Direction | Stable wins | Stable losses | Unstable edges |
|---|---:|---:|---:|
| MAS | 6 | 0 | 1 |
| INF | 4 | 1 | 2 |
| PRO | 4 | 1 | 2 |
| OPP | 3 | 2 | 2 |
| CON | 2 | 1 | 4 |
| EXP | 2 | 4 | 1 |
| AUT | 0 | 6 | 1 |
| CER | 0 | 6 | 1 |

This representation is more informative than a single 0–7 rank because it distinguishes repeated pairwise precedence from edges sensitive to exemplar/context.

## Exemplar-level selections across both rounds

Because the calibration swaps each direction to its alternate exemplar for every opponent, each exemplar appears once against each of the seven other directions across the two rounds.

| Stimulus | Wins / 7 appearances |
|---|---:|
| MAS-01 | 7/7 |
| MAS-02 | 6/7 |
| INF-01 | 5/7 |
| INF-02 | 5/7 |
| PRO-01 | 5/7 |
| PRO-02 | 5/7 |
| CON-01 | 4/7 |
| CON-02 | 4/7 |
| OPP-01 | 3/7 |
| OPP-02 | 5/7 |
| EXP-01 | 3/7 |
| EXP-02 | 2/7 |
| AUT-01 | 1/7 |
| AUT-02 | 0/7 |
| CER-01 | 0/7 |
| CER-02 | 1/7 |

Interpretation for stimulus design:

- MAS is strong across both exemplars, not driven by a single image.
- INF, PRO and CON show identical exemplar totals, which is encouraging at exemplar level.
- OPP shows a meaningful exemplar gap (3/7 vs 5/7) and remains the clearest current exemplar-bias flag.
- AUT and CER are weak with both exemplars. One participant cannot tell whether this reflects the participant's visual choices, direction-level stimulus unattractiveness, or poor operationalization. Do not infer low autonomy/certainty as a trait from these scores.
- CON is especially important: its aggregate 4/7 is identical in both rounds, but only 3 of its 7 pairwise edges are stable. Aggregate stability therefore must not be mistaken for pairwise reliability.

## Position / latency notes

Baseline top/bottom selections: 13 / 15.
Calibration top/bottom selections: 10 / 18.
Combined bottom selection proportion is 33/56. This is a possible position-salience signal but not large enough from one participant to justify a correction. Continue counterbalancing and retain position in raw data.

Median latency decreased from about 1.95 s in baseline to 1.51 s in calibration. Latency remains diagnostic metadata only and must not be converted into psychological strength.

## Product implication

After a calibration round, the participant result should prefer a **stable-edge map** over simply presenting the second session's 0–7 totals.

Recommended post-calibration output:

1. overall edge agreement out of 28;
2. stable wins / stable losses / unstable edges per direction;
3. list of flipped edges as `image/context sensitive`;
4. optional internal exemplar-level diagnostic;
5. no trait, hidden-need or validated-construct claims.

## Next research actions

- Keep current two-round calibration mode for internal testing.
- Collect several independent users before replacing AUT/CER solely because of this participant.
- Watch OPP-01 vs OPP-02 separately.
- Treat CON score totals with caution; pair-level stability is currently weak despite identical totals.
- Preserve exemplar ID, direction pair, position and latency in exports.
