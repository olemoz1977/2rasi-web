# PrioLens OPEN14 v0.4 — adaptive A+ / B+ protocol freeze

Status: DESIGN FREEZE / NOT DEPLOYED
Date: 2026-09-04
Current runtime remains: v0.3.1 owner preview
Current live v0.2 remains untouched
External recruitment remains CLOSED

Machine-readable companion:
`tools/priolens/config/open14-v0.4-adaptive-clarifiers-protocol.json`

## Why this exists

The planned result world is deliberately sparse:
- a ship represents the Channel-A focus;
- a separate needs map represents Channel-B perceived sufficiency;
- the ship and the needs map are not one-to-one constructs and must not be automatically connected.

A ship that only works when one raw family reaches 3/3 would fail too often. Under the current 14-triad planner each of 14 families appears exactly three times. Exhaustive enumeration of all `3^14 = 4,782,969` neutral MOST sequences, assuming equal random choice among the three images and no `no-clear` responses, gives:

| Raw 3/3 families | Probability |
|---|---:|
| 0 | 54.6576% |
| 1 | 39.0437% |
| 2 | 6.0893% |
| 3 | 0.2081% |
| 4 | 0.0013% |

Therefore a unique raw 3/3 appears in only about 39.04% of this neutral baseline. The proposed A+ rules would be invoked in about 60.62% of neutral sequences. This is a design baseline only, not a prediction of real participant behavior.

## Non-negotiable interpretation boundaries

Channel A remains low-deliberation comparative visual choice.

MOST means first visual pull in a triad.
LEAST means lower pull among the remaining two after a clear MOST.

A+ is not another raw MOST exposure and must not be folded into the 0/3–3/3 count.
A+ is an adaptive clarification/focus selection among families that already repeated in raw Channel A.

Channel B remains self-reported current perceived sufficiency.
B+ is an adaptive clarification among equal lowest eligible Channel-B ratings.

Do not claim:
- visual pull = unmet need;
- A+ turns 2/3 into 3/3;
- B+ discovers the participant's deepest or true need;
- LEAST = dislike or low importance;
- RT = psychological strength;
- MOST minus LEAST = a psychological score;
- the 14 Channel-A families and 12 Channel-B need items are a one-to-one taxonomy.

CARE remains an important boundary case: visual giving/caring is not equivalent to receiving/present support in Channel B.

## Frozen flow

1. Channel A: current 14 triads.
2. In each clear triad: MOST, then LEAST among the other two.
3. Compute raw MOST family counts.
4. Run A+ only when required by the rules below.
5. Channel B: current 12 sufficiency items.
6. Compute the lowest eligible numeric sufficiency item(s).
7. Run B+ only when exact eligible minima are tied.
8. Final persistence.
9. Optional fixed transition video, identical for all participants.
10. Result world:
   - ship = Channel-A focus;
   - needs map = Channel-B/B+ route.

A+ must occur before Channel B. This prevents the need wording in Channel B from priming the visual runoff.

## Channel A+ rules

### A1. Raw counts are preserved

For each of the 14 families, raw MOST count remains 0, 1, 2 or 3 based only on the original 14 triads.
`Nė vienas aiškiai` adds no MOST count and skips LEAST exactly as in v0.3.

A+ never changes these counts.

### A2. Determine whether A+ is needed

Apply in order:

1. Exactly one family is 3/3:
   - no A+;
   - that family becomes the Channel-A focus;
   - source = `A_DIRECT_UNIQUE_3_OF_3`.

2. Two or more families are 3/3:
   - A+ runoff between all 3/3 families;
   - source = `A_PLUS_RUNOFF_3_OF_3`.

3. No family is 3/3 and exactly one family is 2/3:
   - no A+ because there is nothing tied to clarify;
   - that unique repeated family becomes the Channel-A focus;
   - source = `A_DIRECT_UNIQUE_2_OF_3`.

4. No family is 3/3 and two or more families are 2/3:
   - A+ runoff between all 2/3 families;
   - source = `A_PLUS_RUNOFF_2_OF_3`.

5. No family reaches 2/3:
   - do not manufacture a focus;
   - do not run a giant runoff across one-off selections;
   - source = `A_NO_REPEATED_FOCUS`.

The ship therefore represents a **Channel-A focus**, not strictly “the 3/3 family”. If the focus came from a unique 2/3 or A+, that provenance must be visible in the detail view even though the hero ship itself stays numerically clean.

### A3. A+ stimulus composition

A+ must remain visual.

For each candidate family show only the exemplars that the participant previously selected as MOST for that family:
- 3/3 candidate -> its three previously selected exemplars;
- 2/3 candidate -> its two previously selected exemplars.

Rules:
- family names hidden;
- no new exemplar may be introduced;
- all candidates in one runoff have the same raw repeat count;
- candidate-card order randomized;
- image order within each card randomized;
- no LEAST question in A+;
- no score or rank is generated from A+.

Suggested LT prompt:
> Pažiūrėk į tas vaizdų grupes, kurios tavo pasirinkimuose kartojosi. Kuri grupė dabar pirmiausia patraukia dėmesį?

Fallback option:
> Nė viena aiškiai

If the participant chooses `Nė viena aiškiai`, no single Channel-A focus is forced. Candidate families remain available in the detailed result.

### A4. What the ship may show

Hero ship:
- one focus-family name only when one focus exists;
- no 3/3 or 2/3 number on the hero;
- no LEAST score;
- no A/B cross-link;
- tapping the ship opens the detailed Channel-A view.

Detailed Channel-A view must disclose:
- raw MOST count;
- raw selected exemplars;
- LEAST information separately;
- whether A+ was used;
- if A+ was used, the candidate families and chosen family;
- A+ must never be described as a fourth exposure or as converting a 2/3 into 3/3.

## Channel B remains 12 sufficiency items

No extra fixed B questionnaire is added in v0.4.

The existing 12 self-report items remain the need-map data source. They are grouped visually into six need continents, but they are not mapped one-to-one onto Channel A families.

Channel-B `Sunku pasakyti` responses are excluded from numeric-minimum calculation.

## Channel B+ rules

B+ exists only to resolve a tied low-sufficiency destination. It is not a second need score.

### B1. Determine route eligibility

Let `m` be the minimum numeric value among answered Channel-B items.

1. No numeric answers:
   - no B+;
   - no route.

2. All numeric values are 4 or 5:
   - no B+;
   - no deficit-style route.

3. `m <= 3` and exactly one item has value `m`:
   - no B+;
   - that item is the route endpoint directly.

4. `m <= 3` and two or more items have exactly value `m`:
   - run B+ among all exact tied-minimum items.

We deliberately do not invent a numerical epsilon such as “within one point”. A 1–5 self-report scale is not treated as interval-precision data. B+ triggers on exact tied minima only.

### B2. B+ participant question

Suggested LT prompt:
> Šias sritis įvertinai vienodai žemai. Jei viena dabar vis dėlto atrodo mažiausiai pakankama, kuri?

Show only the tied-minimum need items, using concise need labels while retaining access to the original statement wording.

Additional options:
- `Jos dabar panašiai`
- `Sunku pasakyti`

Outcomes:
- participant selects one item -> one route endpoint;
- `Jos dabar panašiai` -> all tied-minimum items remain endpoints;
- `Sunku pasakyti` -> do not force a directional route; tied candidates may be highlighted without a route.

B+ never changes the underlying Channel-B numeric ratings.

## Needs map semantics

The needs map is entirely Channel B / B+.

It may contain:
- six need continents;
- twelve need locations corresponding to the current Channel-B sufficiency items;
- a dotted route only to the resolved endpoint or endpoints.

It must not contain Channel-A family names as if they were need locations.
It must not draw a causal or diagnostic line from the ship to the map.

Route meaning:
> where the participant's own current sufficiency ratings, plus B+ clarification when needed, place the lowest current sufficiency.

Route does **not** mean:
- deepest need;
- hidden need;
- true need;
- diagnosis;
- explanation of the Channel-A visual pull.

## Transition video boundary

A short ship-in-storm video may be used as an emotional transition after all questions and before the static result world.

It must be identical for all result patterns.
Do not vary storm intensity, damage, sea state or direction according to the participant's scores.

Technical requirements:
- target 4–6 seconds;
- muted;
- `playsinline`;
- skip control;
- `prefers-reduced-motion` skips the video;
- media load failure falls through immediately to the static result.

## v0.4 data-model direction

Do not silently add these semantics to `2rasi.priolens.open14.rank-session-v0.3`.
Use a new v0.4 session schema and new draft namespace.

Expected conceptual fields:

```json
{
  "attentionClarifier": {
    "trigger": "A_PLUS_RUNOFF_2_OF_3",
    "candidateFamilies": ["..."],
    "candidateCards": [
      {"familyId": "...", "exemplarIds": ["...", "..."]}
    ],
    "selectedFamilyId": "...",
    "noClear": false,
    "rtMs": 0
  },
  "attentionFocus": {
    "familyId": "...",
    "source": "A_PLUS_RUNOFF_2_OF_3",
    "rawMostCount": 2
  },
  "sufficiencyClarifier": {
    "minimumValue": 2,
    "candidateItems": ["...", "..."],
    "selectedItemId": "...",
    "similar": false,
    "hardToSay": false
  },
  "sufficiencyRoute": {
    "itemIds": ["..."],
    "source": "B_PLUS_SELECTED"
  }
}
```

Exact JSON shape may change during implementation, but these distinctions must survive.

## Neutral combinatorial baseline for A+

Using the fixed current planner and assuming one random MOST among each triad:

- exactly 0 families at 3/3: 2,614,257 / 4,782,969 = 54.6576%;
- exactly 1 family at 3/3: 1,867,446 / 4,782,969 = 39.0437%;
- 2+ families at 3/3: 6.3000%;
- no 3/3 but exactly one 2/3: 15,932 / 4,782,969 = 0.3331%;
- no family reaches 2/3: 229 / 4,782,969 = 0.0048%;
- A+ trigger under the frozen decision rules: 2,899,362 / 4,782,969 = 60.6185%.

Among the no-3/3 neutral sequences, the number of 2/3 candidates is most commonly 3–5, with 4 candidates the modal case. Therefore A+ UI must be designed for multiple candidate image groups on mobile, not only a two-way tie.

## Required owner-only edge cases before result-world coding

Build/test logic against at least these synthetic states:

1. one unique 3/3;
2. two 3/3 candidates;
3. no 3/3, one unique 2/3;
4. no 3/3, 2–5 tied 2/3 candidates;
5. six or seven 2/3 candidates;
6. no family >=2/3;
7. A+ participant chooses `Nė viena aiškiai`;
8. raw Channel A contains multiple `Nė vienas aiškiai` trials;
9. Channel B one unique eligible minimum;
10. Channel B two tied eligible minima;
11. Channel B many tied minima;
12. Channel B all values 4–5;
13. Channel B all `Sunku pasakyti`;
14. Channel B mixed numeric + `Sunku pasakyti`;
15. B+ `Jos dabar panašiai`;
16. B+ `Sunku pasakyti`;
17. LT and EN;
18. 390×844 mobile layout and resume after A+ / B+ checkpoints.

## Implementation order

1. New v0.4 session schema + draft namespace.
2. Pure deterministic A-focus resolver.
3. A+ UI + persistence + resume.
4. Pure deterministic B-route resolver.
5. B+ UI + persistence + resume.
6. API compatibility/validation for v0.4 while preserving v0.3 owner sessions during migration.
7. Owner-only synthetic edge-case harness.
8. Only then implement the ship + needs-map result renderer.
9. Transition video last, because it is decoration around an already-correct result model.

Do not touch live v0.2 or open recruitment as part of this sequence.
