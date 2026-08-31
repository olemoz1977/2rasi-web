# PrioLens two-channel result synthesis spec v0.1

Status: ACTIVE RESEARCH SPEC / NON-DIAGNOSTIC
Date: 2026-09-01

## Purpose

Define how PrioLens should combine:

A. revealed visual priority from Open14 v0.2;
B. current perceived sufficiency from the 12-item post-visual layer;

without pretending that both channels are the same scale or that one causally explains the other.

## Core rule

Do not compute one blended `PrioLens score`.

The result has three views:
1. **Kas dažniau patraukė** — visual choice pattern;
2. **Ko, tavo vertinimu, šiuo metu pakanka** — perceived sufficiency landscape;
3. **Kur šios dvi perspektyvos susitinka arba išsiskiria** — descriptive comparison.

## Channel A — Open14 visual priority

Each active family appears exactly 3 times per session.

For family `f`:

```text
shown_f = 3
chosen_f = 0..3
visual_rate_f = chosen_f / shown_f
```

Because there are only three exposures, `visual_rate_f` is coarse research telemetry, not a psychometric score.

Suggested descriptive language:
- 3/3 — `kartojosi kiekvieną kartą, kai pasirodė`;
- 2/3 — `kartojosi`;
- 1/3 — `pasirodė vieną kartą`;
- 0/3 — `šiame rinkinyje nelaimėjo`.

Do not translate 3/3 into `strong need` or 0/3 into `unimportant`.

### No strict 1–14 rank

Open14 is a sparse broad scan:
- 91 possible family pairs exist;
- only 42 pair co-occurrences are sampled;
- each family meets 6 unique opponents.

Therefore do not publish a false complete 1–14 ranking.

Show repeated families and ties directly.

## Channel A macro normalization

Open14 has unequal family counts by macro domain:
- BASIC: 4 families -> 12 appearances;
- GROWTH: 4 families -> 12 appearances;
- SOCIAL: 3 families -> 9 appearances;
- AGENCY/ESTEEM: 3 families -> 9 appearances.

Raw macro selection counts are therefore not directly comparable.

If a research macro summary is used:

```text
macro_visual_rate = total selections from macro / total appearances from macro
```

Do not compare raw 0..n counts across macros.

## Channel B — perceived sufficiency

Canonical source:
`PERCEIVED_SUFFICIENCY_LAYER_v0.2.md`.

Keep all 12 raw responses.

Optional domain summary:
- mean of available non-null items within each two-item domain;
- `null` when both items are `Sunku pasakyti`.

Do not use percentile norms until real norm data exist.

For participant-facing description, prefer scale wording itself over labels like `deficient` or `satisfied`.

## Cross-channel map

This map is deliberately asymmetric.

| Sufficiency domain | Closest visual families | Mapping status |
| --- | --- | --- |
| Restoration & resources | REST, RESOURCE | direct-enough research comparison |
| Safety & stability | SAFETY, ORDER | direct-enough research comparison |
| Connection, belonging & support | CONNECTION, BELONGING | direct-enough; CARE intentionally separate |
| Agency & esteem | AUTONOMY, CONTROL, RECOGNITION | adjacent, not one-to-one |
| Growth & capability | MASTERY, EXPLORATION, KNOWLEDGE, OPPORTUNITY | broad comparison only |
| Meaning & contribution | none active in Open14 v0.2 | reflection-only |

### CARE exception

Visual CARE means:
> acting for another person's welfare, including modest self-cost or proactive help.

Sufficiency `CARE_SUPPORT_PRESENT` means:
> perceived care/support present in one's life.

These are not equivalent. Do not directly compare them as `high/low match`.

CARE may be shown as an additional social/prosocial visual observation beside, not inside, the sufficiency comparison.

## Comparison language

### Lower perceived sufficiency + repeated related visual pull

Allowed:
> Ši sritis tavo greituose pasirinkimuose kartojosi, o pats vertini, kad šiuo metu jos gyvenime nėra daug.

Research hypothesis:
- currently salient candidate.

Not allowed:
- `tai nepatenkintas poreikis`;
- `todėl tavo pasąmonė jo ieško`.

### Higher perceived sufficiency + repeated related visual pull

Allowed:
> Ši sritis tavo pasirinkimuose kartojosi ir kartu atrodo pakankamai esanti tavo gyvenime.

Possible research explanations remain open:
- stable value/preference;
- active positive engagement;
- stimulus salience;
- context.

### Lower perceived sufficiency + little related visual pull

Allowed:
> Pats šią sritį vertini kaip mažiau pakankamą, tačiau šiame vaizdų rinkinyje ji retai iškilo į pirmą planą.

Do not resolve the discrepancy automatically.

### Higher perceived sufficiency + little related visual pull

Allowed:
> Ši sritis šiuo metu atrodo gana pakankama ir šiame vaizdų rinkinyje retai iškilo į pirmą planą.

Do not label automatically as a `settled need`.

## Participant-facing result structure

### Block 1 — `Kas kartojosi`

Show all families with 2/3 or 3/3 first.
If none reach 2/3, say that the session was more distributed rather than inventing a dominant lens.

Potential copy:
> Tavo pasirinkimai neišsidėstė vienodai. Šios temos kartojosi dažniau už kitas šiame konkrečiame rinkinyje.

### Block 2 — `Kaip pats vertini dabartinę situaciją`

Show six sufficiency domains using the participant's own 1–5 responses / compact domain summaries.

Avoid traffic-light diagnosis colors in research v0.1 unless later usability evidence supports them.

### Block 3 — `Kur verta pažvelgti dar kartą`

Show at most 2–3 comparisons where the two channels are informative:
- repeated visual family + lower related sufficiency;
- repeated visual family + higher related sufficiency;
- explicit mismatch if it is notable.

Do not mechanically generate six comparison paragraphs.

### Block 4 — `Kas liko neaišku`

Examples:
- ties between visual families;
- `no_clear_choice` frequency;
- CARE without direct sufficiency counterpart;
- meaning/contribution self-report without a visual counterpart.

This is a feature, not a failure: the product should expose uncertainty rather than manufacture completeness.

## Research export

Store:
- schema versions;
- seed;
- exact trial composition/order;
- exact exemplar IDs and paths;
- choice per trial;
- `no_clear_choice`;
- RT telemetry separately;
- family shown/chosen counts;
- macro normalized rates;
- 12 raw sufficiency items;
- optional six domain summaries;
- generated comparison tags, if any;
- no hidden psychological score.

## Current boundary

The first external-data question is not:
> `Does PrioLens correctly identify unmet needs?`

It is:
> `Do repeated visual pulls show interpretable, non-trivial relationships with independently reported current sufficiency, beyond stimulus-specific salience and chance?`

That is a testable research question without overclaiming the mechanism.
