# PrioLens File Library visual audit v0.1

Status: WORKING AUDIT / NOT A STIMULUS FREEZE
Date: 2026-08-29

## Purpose

Record direct visual-review evidence recovered from the user's File Library. This supplements, but does not replace, the repository candidate inventory.

Important:

- File Library numeric filenames are retrieval handles, not semantic labels.
- Legacy ConflictLab/2Pair mappings are not authoritative for PrioLens.
- A visually plausible candidate is not a validated construct.
- Final selection still requires two conceptually independent exemplars per working direction and cross-set confound review.

## Access correction

The previous project-state blocker said direct binary/pixel inspection was unavailable through the GitHub connector. That is true for the GitHub connector itself, but incomplete for the overall workflow: the user's File Library contains the historical image set and exposes the images for direct multimodal review.

Therefore direct visual review is available through File Library and should be used before any new generation decision.

Exact `2465.png` was not surfaced by filename search, but the same historical numeric image series is recoverable by content and adjacent numeric filenames. Literal searches around `2455-2504` also failed to surface those exact handles, so absence from filename search must not be interpreted as absence from the library.

## Directly reviewed / surfaced numeric-series candidates

| File Library title | Visible content | Provisional PrioLens relevance | Main confound / concern | Disposition |
|---|---|---|---|---|
| `2766.png` | Open laptop on wooden table | MAS candidate only in a very weak sense | Generic work/device imagery does not establish mastery | REJECT for MAS unless paired with stronger independent evidence |
| `2767.png` | Blank envelope on table | CER/OPP/CON ambiguous | Meaning depends on imagined message/social story | RESERVE / AMBIGUOUS |
| `2781.png` | Key inserted in door lock | PRO stronger than CER | Very literal security/control cue; object familiarity may dominate | PRO CANDIDATE, high literalness flag |
| `2782.png` | Dim corridor, door slightly ajar with light | OPP/AUT/EXP | Transition/opening metaphor is shared by three directions | RESERVE / AMBIGUOUS |
| `2783.png` | Revolving glass entrance door | OPP/AUT | Functional architectural object; weak personal priority meaning | RESERVE |
| `2784.png` | Open elevator | OPP/AUT/EXP | Transition cue is generic and highly literal | RESERVE / AMBIGUOUS |
| `2785.png` | Parked silver car | AUT possible | Mobility, ownership, status and product preference confounds | REJECT unless no better AUT candidate exists |
| `2787.png` | Cracked road lane marking | PRO possible | Damage/negative-valence cue may dominate choice | REJECT for base set |
| `2790.png` | Two mugs on table, one steaming | CON plausible | Connection is implied through absent second person; warmth/aesthetic cue | CON CANDIDATE |
| `2791.png` | Fabric, blank tag, scissors | MAS/AUT/EXP ambiguous | Product/craft narrative not uniquely tied to one direction | RESERVE / AMBIGUOUS |
| `2792.png` | Chess pieces and altered central square/block | MAS or INF possible | Chess strongly imports strategy/competition/intelligence schemas; no visible influencing actor/outcome | RESERVE, high semantic-confound flag |
| `2793.png` | Open blank book with folded pages | MAS/EXP | Visual novelty/complexity may drive preference; no visible competence process | RESERVE / AMBIGUOUS |
| `2794.png` | Capsule and opened foil on bedside table | PRO possible | Medical/safety/health salience and negative affect dominate | REJECT for base set |
| `2795.png` | Overcoat on coat rack | no clear direction | Lifestyle/product aesthetics dominate | REJECT |
| `2796.png` | Wrapped gifts | CON/OPP possible | Positive valence, gifting culture, celebration cue | RESERVE, high valence flag |
| `2798.png` | Forest trail splitting into two paths | AUT/EXP/OPP all plausible | Choice metaphor is too generic; nearest-neighbour ambiguity is structural | REJECT as single-direction exemplar |
| `2681(1).png` | Two hooded faceless figures in dark studio | CON/INF possible only weakly | Threat/ominous mood and anonymity dominate | REJECT |
| `3119(1).png` | Two similar men side by side on road | CON possible | Gender/age/social similarity and portrait preference confounds | REJECT for base set |
| `3120(1).png` | Two similar men from behind on road | CON/AUT ambiguous | Same demographic and social-scene confounds | REJECT for base set |
| `3361.png` / `3362.png` | Minimal monochrome geometric architectural forms | potentially useful as low-social abstract controls | Semantics not yet tied defensibly to a direction; geometry may become its own preference axis | KEEP FOR ABSTRACT REVIEW |

## Second-pass targeted retrieval

Searches were run for visual content that would satisfy the operational definitions rather than legacy labels, including:

- a visible actor changing a shared/external outcome for INF;
- hands-on precision, refinement or competence for MAS;
- an opening with visible future value/potential for OPP.

The targeted retrieval mainly returned the same weak candidates (`2792` chess, `2791` fabric/scissors, `2782-2784` transition imagery) rather than new clean exemplars.

This is evidence that the currently recoverable numeric-series subset is becoming exhausted for the three weakest directions. It is not proof that the entire File Library has been exhaustively searched, because numeric filename indexing is incomplete.

## Immediate implications by weak direction

### INF

No reviewed File Library item yet provides a defensible Influence exemplar. Chess may invoke strategy/competition but not influence itself. Social-figure images add interpersonal and threat confounds rather than clean influence.

A valid INF exemplar needs visible content where changing a shared/external direction, decision or outcome is the central cue without relying on status clothing, dominance, facial authority or a hidden story.

**Current state: genuine generation gap is now likely, not merely possible.**

### MAS

Laptop remains weak. Chess and crafted/folded-book imagery are stronger than laptop as skill/competence cues, but each adds strong domain-specific schemas. Fabric/scissors adds a craft cue but still does not visibly show refinement, practiced competence or quality improvement.

A valid MAS exemplar needs the act/result of skill, precision, refinement or competence to be visible rather than inferred from a generic work object.

**Current state: genuine generation gap is likely unless a not-yet-surfaced File Library item shows visible skilled action.**

### OPP

Door, elevator and forked-path imagery all express opening/transition, but they also map naturally to Autonomy and Exploration. The blank envelope and gifts add possible future value but depend on hidden narrative and positive-valence schemas.

A valid OPP exemplar needs visible potential gain/opening without collapsing into freedom-of-choice or curiosity/discovery.

**Current state: only borderline candidates; likely generation gap.**

### CON

Two mugs is the cleanest currently surfaced numeric-series candidate. It implies a relationship without faces or text, but still needs an independent second exemplar with a different scene realization.

### PRO

Key-in-lock is a plausible candidate. Pill and damaged-road imagery are too affectively loaded. `p0-002-a` and other repository candidates still need direct comparison.

## Audit policy going forward

1. Continue File Library retrieval by visual content, not numeric filename alone.
2. Prioritize INF, MAS and OPP searches first.
3. For every candidate, record nearest-neighbour alternatives before assigning a direction.
4. Separate semantic ambiguity from low-level visual confounds.
5. Do not generate new images until the recoverable File Library reserve has been exhausted for the weak directions.
6. Once targeted retrieval stops producing new candidates, treat INF/MAS/OPP as explicit generation briefs rather than weakening the semantic contract to fit old assets.
7. Do not copy File Library items into PrioLens runtime assets until final selection and provenance/hash capture are possible.

No 16-stimulus freeze is authorized by this checkpoint.