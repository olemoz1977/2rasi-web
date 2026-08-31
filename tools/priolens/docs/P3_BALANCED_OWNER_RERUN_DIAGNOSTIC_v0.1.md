# PrioLens P3 balanced owner rerun diagnostic v0.1

Status: OWNER-RUN DIAGNOSTIC / NOT VALIDATION
Date: 2026-08-31
Source session schema: `2rasi.priolens.p3.research-v0.3`
Seed: `mthh8pds-ucwagn`
Source artifact: `priolens_p3_standalone_v03.html`

## Scope

This is the second P3 owner run and the first run after implementing exact slot balancing and tie-safe result handling. It is a technical/design falsification checkpoint, not participant validation.

CER remained inactive (`HOLD_NOT_ACTIVE`), so seven directions were tested.

## Design integrity

The run used:
- 14 three-image trials;
- 7 active directions;
- every direction shown exactly 6 times;
- every direction pair co-occurring exactly twice;
- every exemplar shown 3 times;
- every exemplar appearing exactly once in each of the 3 slots;
- every direction appearing exactly 2/2/2 across the 3 slots.

The exported `slotAudit` confirms exact balance for all 14 exemplars and all 7 directions.

The previous position-exposure confound is therefore removed at the aggregate direction/exemplar level.

## Raw result

| Direction | Chosen / shown | Rate |
|---|---:|---:|
| Mastery | 6 / 6 | 100% |
| Connection | 3 / 6 | 50% |
| Protection | 3 / 6 | 50% |
| Exploration | 1 / 6 | 16.7% |
| Opportunity | 1 / 6 | 16.7% |
| Autonomy | 0 / 6 | 0% |
| Influence | 0 / 6 | 0% |

The tie-safe headline works correctly: Mastery is the unique top result in this run and Connection/Protection are tied below it.

## Exemplar contribution

Each exemplar was shown three times.

| Stimulus | Chosen / shown |
|---|---:|
| `mastery-01` | 3 / 3 |
| `mastery-02` | 3 / 3 |
| `connection-02` | 2 / 3 |
| `connection-01` | 1 / 3 |
| `protection-02` | 2 / 3 |
| `protection-01` | 1 / 3 |
| `exploration-01` | 1 / 3 |
| `exploration-02` | 0 / 3 |
| `opportunity-01` | 1 / 3 |
| `opportunity-02` | 0 / 3 |
| both Autonomy exemplars | 0 / 3 each |
| both Influence exemplars | 0 / 3 each |

Mastery is the only direction with perfect two-exemplar support in this run.

## Round consistency

| Direction | Round A | Round B |
|---|---:|---:|
| Mastery | 3/3 | 3/3 |
| Connection | 2/3 | 1/3 |
| Protection | 1/3 | 2/3 |
| Exploration | 1/3 | 0/3 |
| Opportunity | 0/3 | 1/3 |
| Autonomy | 0/3 | 0/3 |
| Influence | 0/3 | 0/3 |

Mastery survives the internal context split perfectly. Influence and Autonomy remain zero in both rounds.

## Comparison with first P3 owner run

First P3 run before exact slot balancing:
- Mastery 5/6;
- Protection 5/6;
- Connection 2/6;
- Opportunity 2/6;
- Autonomy 0/6;
- Exploration 0/6;
- Influence 0/6.

Balanced rerun:
- Mastery 6/6;
- Connection 3/6;
- Protection 3/6;
- Exploration 1/6;
- Opportunity 1/6;
- Autonomy 0/6;
- Influence 0/6.

What survives both runs:
1. Mastery remains consistently high and both historical exemplars contribute.
2. Influence remains 0/6 even after exact position balancing.
3. Autonomy also remains 0/6.
4. Protection is not stable at the previous 5/6 level once the plan/seed changes; it drops to 3/6.
5. Middle directions redistribute materially across seeds/context sets.

Therefore the previous Influence collapse cannot be explained only by aggregate slot imbalance. It remains a cross-format/stimulus/context problem.

This still does **not** establish a low owner `Influence` trait. The historical INF exemplars are already known to be semantically weak/cross-loaded, and the owner is repeatedly exposed to the same old bank.

## Latency / UX

Overall median response time: approximately 2.06 s.

The first trial took 9.18 s, likely including orientation to the new screen. Excluding the first trial, the median is approximately 1.97 s.

This supports P3 as a feasible low-deliberation UX for the owner, but it does not prove that three-image presentation is cognitively equivalent to pairwise choice for other participants.

`no_clear_choice`: 0/14.

Latency remains UX/trial-difficulty telemetry only.

## Slot choice behavior

Even though exposure is exactly balanced, chosen screen slots were:
- slot 0: 4/14;
- slot 1: 7/14;
- slot 2: 3/14.

Mastery wins are perfectly distributed: 2 wins in each slot.

The current mobile layout is geometrically asymmetric: two images are side-by-side on the upper row and the third is centered below. Exact exposure balancing protects direction totals from systematic slot overrepresentation, but it does not make the three positions perceptually equivalent within a trial.

Do not call the spatial confound solved. It is reduced and balanced, not eliminated.

## Model warning strengthened

The Plackett–Luce diagnostic assigns Mastery approximately 0.978 normalized weight because Mastery wins all 6 appearances. This is near-separation in a tiny 14-trial owner sample, not evidence of 97.8% psychological strength.

Recommendation: keep Plackett–Luce behind a research/debug view or remove it from ordinary result interpretation. Raw chosen/shown counts are more honest at this stage.

Likewise, projected pairwise wins from a triad are dependent projections, not independent pairwise observations.

## Stimulus-bank limitation is now primary

This P3 rerun still uses the historical two-exemplar bank. Current project evidence already says several of those exemplars are weak or cross-loaded, especially AUT, INF, EXP and OPP.

The run therefore cannot distinguish:
- a genuine repeated owner preference;
- the attractiveness/readability of a particular historical exemplar;
- choice-set/context effects;
- learned familiarity from repeated owner testing.

A third owner rerun with the same 14 historical images would add little and increase familiarity contamination.

## Immediate conclusion

The planner/tie corrections worked. Do not repeat the same technical fix cycle.

The strongest owner-run signal is:

> **Mastery remains dominant across two exemplars, two internal rounds and all three balanced slots. Influence remains absent after position balancing, so its P3 collapse is not explained by the original slot imbalance. But the historical stimulus bank is now the main methodological bottleneck, not the P3 counting algorithm.**

## Next research move

1. Stop repeating owner runs on the same 14 historical stimuli for validation claims.
2. Keep P3 as a viable research presentation variant, not yet the public architecture.
3. Use the impulse-curated candidate bank to construct the next materially different non-CER stimulus set.
4. Preserve exemplar identity in all outputs.
5. Decide separately whether the mobile 2+1 geometry is acceptable or whether P3 needs a different presentation solution before external testing.
6. Keep CER inactive until the construct decision is resolved.
