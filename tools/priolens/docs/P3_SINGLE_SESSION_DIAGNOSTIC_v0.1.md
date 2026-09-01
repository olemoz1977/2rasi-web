# PrioLens P3 single-session diagnostic v0.1

Status: OWNER-RUN DIAGNOSTIC / NOT VALIDATION
Date: 2026-08-31
Source session schema: `2rasi.priolens.p3.research-v0.1`
Seed: `mthe40nj-nd5zmv`

## Scope

This document analyses one owner session only. It is useful for checking the P3 design, stimulus dependence and result rendering. It is not participant-level validation and does not establish any direction as a psychological construct.

CER was intentionally inactive in this run (`HOLD_NOT_ACTIVE`), so seven directions were tested.

## P3 combinatorial design

The run used:
- 14 three-image trials;
- 7 active directions;
- each direction shown exactly 6 times;
- each of the 21 direction pairs co-occurred exactly twice across the 14 triples.

This is an efficient property of the P3 design: 14 triple choices cover every pair among seven active directions twice.

Important limitation:

> choosing one item from three gives a winner over two alternatives, but it does not reveal the preference relation between the two unchosen items.

Therefore `impliedPairwiseWins` are useful projections, not literal pairwise observations.

## Raw session result

| Direction | Chosen / shown | Rate |
|---|---:|---:|
| Mastery | 5 / 6 | 83.3% |
| Protection | 5 / 6 | 83.3% |
| Connection | 2 / 6 | 33.3% |
| Opportunity | 2 / 6 | 33.3% |
| Autonomy | 0 / 6 | 0% |
| Exploration | 0 / 6 | 0% |
| Influence | 0 / 6 | 0% |

There is no unique #1. **Mastery and Protection are tied.**

The current result screen says `Dažniausiai pasirinkta: Meistriškumas` while also showing Protection at the same 83% and a `0 p.p.` #1–#2 difference. That is internally inconsistent and violates the product rule that ties/near-ties should be shown as such.

Recommended participant-facing wording for this run:

> **Šioje sesijoje išsiskyrė dvi kryptys: Meistriškumas ir Apsauga. Abi pasirinktos 5 iš 6 parodymų.**

Do not arbitrarily break this tie by sort order.

## A/B round consistency

Direction-level counts are fairly stable across the two internal rounds:

| Direction | Round A | Round B |
|---|---:|---:|
| Mastery | 2/3 | 3/3 |
| Protection | 3/3 | 2/3 |
| Connection | 1/3 | 1/3 |
| Opportunity | 1/3 | 1/3 |
| Autonomy | 0/3 | 0/3 |
| Exploration | 0/3 | 0/3 |
| Influence | 0/3 | 0/3 |

For this owner run, the overall top-level pattern is therefore not created by one round alone.

## Stimulus-level dependence

Each active exemplar was shown three times.

| Stimulus | Chosen / shown |
|---|---:|
| `mastery-01` | 3/3 |
| `mastery-02` | 2/3 |
| `protection-02` | 3/3 |
| `protection-01` | 2/3 |
| `connection-02` | 2/3 |
| `connection-01` | 0/3 |
| `opportunity-01` | 2/3 |
| `opportunity-02` | 0/3 |
| both Autonomy exemplars | 0/3 each |
| both Exploration exemplars | 0/3 each |
| both Influence exemplars | 0/3 each |

Interpretation:
- Mastery and Protection are the strongest current internal-consistency cases in this run because both exemplars contribute wins.
- Connection and Opportunity are strongly exemplar-dependent: all wins come from only one of the two exemplars.
- Zero wins for both exemplars of AUT/EXP/INF are noteworthy, but one session cannot distinguish true preference from choice-set, position and stimulus effects.

This is exactly why exemplar identity must remain visible in analysis.

## Position imbalance

The participant selected screen slots:
- slot 1 / top: 3 times;
- slot 2 / middle: 3 times;
- slot 3 / bottom: 8 times.

Direction exposure was not balanced within this session. Examples:
- Protection appeared bottom 4/6 times and top 2/6;
- Influence appeared middle 4/6 times;
- Autonomy appeared top 4/6 times;
- Mastery appeared top 3/6, middle 2/6, bottom 1/6.

This does not prove a position bias, but it creates a confound that should be removed from the planner rather than explained after the fact.

The same 14 triple set **can be assigned positions so that every stimulus appears exactly once in each of the three slots** across its three presentations. Therefore exact within-session position balancing is feasible without changing the triple design.

Planner requirement for the next P3 build:

> each exemplar appears 3 times → once top, once middle, once bottom.

This automatically gives every direction 2/2/2 slot exposure across its six presentations.

## Cross-protocol diagnostic

Earlier owner pairwise sessions with the same historical stimulus set produced:

Baseline 28-pair run:
- Mastery 6 wins;
- Protection 5;
- Opportunity 5;
- Connection 4;
- Influence 4;
- Exploration 3;
- Certainty 1;
- Autonomy 0.

Alternate/calibration 28-pair run:
- Mastery 7;
- Protection 5;
- Influence 6;
- Connection 4;
- Opportunity 3;
- Exploration 2;
- Autonomy 1;
- Certainty 0.

Useful observation:
- **Mastery and Protection remain high across pairwise and P3 formats.**
- **Influence changes radically:** 4/7 and 6/7 pairwise wins previously, then 0/6 selections in P3.

This contradiction is more informative than a neat ranking. It means Influence is currently highly sensitive to presentation context, position, opponent set or exemplar semantics. Do not interpret the P3 zero as a stable low Influence preference and do not interpret the earlier pairwise wins as a stable high Influence preference.

P3 is therefore useful specifically because it exposes choice-set/context dependence that pairwise-only testing can hide.

## Plackett–Luce model warning

The exported model gives approximately:
- Mastery `0.4966`;
- Protection `0.4966`;
- all other directions near zero.

With only 14 trials and near-separation in the choices, these values look much more precise than the evidence warrants.

Use the model as a research diagnostic only. Do not present those normalized values as psychological strength. If retained, the model needs regularization and explicit uncertainty or should remain behind an owner/research tab.

## Latency

Overall median mechanical response time is 1.85 s, matching the result screen.

Chosen Mastery trials were generally faster than chosen Protection trials in this session, but latency is not interpreted as preference strength. It may only be used as a trial-difficulty / UX diagnostic.

## Immediate corrections

1. Fix result headline: exact tie must render as a tie, not an arbitrary winner.
2. Fix P3 position planner: every exemplar once in each slot over its three presentations.
3. Keep raw direction rate and exemplar contribution visible before model output.
4. Treat Connection and Opportunity as exemplar-dependent in this run.
5. Flag Influence as cross-format unstable and investigate only after position balancing.
6. Keep CER inactive until the construct decision is resolved.

## Bottom line

The strongest finding from this owner run is not `Mastery is #1`.

It is:

> **P3 produced a clear Mastery–Protection top tie, showed good two-exemplar support for both, exposed strong exemplar dependence in Connection/Opportunity, and revealed a major cross-format instability for Influence. The next technical blocker is position balancing plus tie-safe result rendering, not more scoring sophistication.**
