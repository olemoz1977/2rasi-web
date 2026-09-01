# PrioLens Open14 stimulus bank owner review v0.1

Status: ACTIVE CHECKPOINT
Date: 2026-09-01

## Why this checkpoint exists

The previous formal checkpoint stopped at geometry normalization. Runtime work has moved beyond that point.

The active 28-image Open14 bank has now received:
- actual-dimensions audit;
- reviewed 1:1 normalization for acceptable portrait assets;
- owner first-glance semantic review;
- watermark OCR / visual review;
- clean-near-duplicate search in the Hostinger Gallery;
- owner review of replacement candidates for several weak exemplars.

This checkpoint supersedes the older statement that the immediate next action is to finish the 28-asset dimensions audit.

## Geometry audit result

Current 28-asset bank:
- 23 / 28 assets were already square;
- 5 / 28 were 768x1360 portrait assets.

Portrait set:
- REST-A;
- RESOURCE-B;
- ORDER-A;
- BELONGING-B;
- KNOWLEDGE-A.

Reviewed center 1:1 derivatives accepted:
- REST-A;
- RESOURCE-B;
- BELONGING-B;
- KNOWLEDGE-A.

ORDER-A was not accepted as a crop solution and remains replacement-required.

Important: geometric acceptance does not imply semantic acceptance. REST-A is geometrically acceptable but semantically mismatched to REST.

## Owner first-glance review decisions

### Replace / reassign

- REST-A: `REASSIGN_REQUIRED_SEMANTIC_MISMATCH`.
  - Original creation intent: choice between classic shoes and sneakers.
  - Do not interpret as rest/restoration.

- REST-B: `REPLACE_REQUIRED_WATERMARK`.
  - Two visible watermarks.

- ORDER-A: `REPLACE_REQUIRED_1TO1`.
  - Crop solution rejected; replacement needed.

- ORDER-B: `REPLACE_REQUIRED_SEMANTIC_MISMATCH`.
  - Owner does not read the image as clear order / structure on first glance.

- AUTONOMY-A: `REPLACE_REQUIRED_SEMANTIC_MISMATCH`.
  - Choosing a tool does not clearly communicate self-direction / autonomy.

- CONTROL-A: `REPLACE_REQUIRED_VISUAL_CREDIBILITY`.
  - Central instrument/object looks artificial or implausible and can dominate the first-glance read.

- KNOWLEDGE-A: `REPLACE_SEARCH_BETTER_CANDIDATE`.
  - Search for a clearer learning / understanding cue.

- KNOWLEDGE-B: `REPLACE_SEARCH_BETTER_CANDIDATE`.
  - Current `see clearer / more` boundary probe is too broad; search for clearer learning / understanding.

### Hold / review

- BELONGING-B: `HOLD_OWNER_REVIEW_ASYMMETRIC_WARMTH`.
  - Belonging reading is debatable because visible steam / warmth appears associated mainly with one participant/object.

- OPPORTUNITY-A: `HOLD_SEARCH_BETTER_CANDIDATE`.
  - Search Gallery for a clearer immediate-opportunity cue before freezing.

### Keep but clean

- CONNECTION-A: `CLEAN_REQUIRED_WATERMARK`.
  - KlingAI watermark detected by OCR.

- CONNECTION-B: `CLEAN_REQUIRED_WATERMARK`.
  - Watermark visually confirmed during owner smoke.

Do not spend cleanup effort on stimuli already marked REPLACE / REASSIGN unless a clean equivalent directly solves the replacement.

## Latest replacement-candidate review

These decisions are intentionally stored here rather than only in chat. Candidate status does **not** change the live runtime path until the asset is explicitly accepted, normalized if needed, and switched in `bank.json`.

### REST

**REST-A strong candidate:** `Gallery/20260730_233524155.png`
- scene: soft home slippers at the threshold / entrance;
- owner-proposed construct reading: rest through switching into home / recovery mode;
- working first-glance target: `persijungti į poilsį / namų komfortą`;
- assessment: strong REST candidate, materially better than current shoes-choice image;
- caveat: portrait source, so requires reviewed 1:1 crop/reframe before bank switch.

**Rejected REST candidate:** `Gallery/20260731_242911216.png`
- scene: unplugged electrical plug;
- idea: `atsijungti`;
- rejected for Open14 REST because the REST reading is metaphorical and secondary; first glance is more likely electricity / technical object / safety / disorder.

REST-B still needs a separate restoration mechanism, preferably a direct pause / recovery / refresh cue rather than another home-comfort duplicate.

### ORDER

**ORDER-A preferred direction:** tool shadow board / outlined assigned tool positions.
- target first-glance principle: `kiekvienas daiktas turi savo vietą`;
- must show the organizing system, not craftsmanship or active tool use;
- current workshop-bench image `Gallery/20260730_233635118.png` was rejected as ORDER because it reads more strongly as tools / workshop / mastery.

**ORDER-B preferred direction:** clearly marked parking spaces / assigned zones on asphalt.
- target first-glance principle: `erdvė suskirstyta į aiškiai paskirtas vietas`;
- prefer visible markings / structure over a crowded car scene.

**Checklist candidate `Gallery/S06.webp`: HOLD / weak for ORDER.**
- reads more as completed tasks / progress / checking / control than spatial or structural order;
- do not use as primary A/B if stronger tool-board + marked-space pair is available.

**Traffic-light candidate:** not preferred for ORDER.
- can express external rules / regulation, but parking-space markings are cleaner and less semantically loaded.

### AUTONOMY

**Strong AUTONOMY-A candidate:** forked path / two-direction scene `Gallery/file_00000000cc8c81f4a927534c8316290c.png`.
- first-glance target: `pasirinkti savo kryptį`;
- much stronger fit to self-direction / choice than current tool-selection image;
- do not use this image for OPPORTUNITY, because it reads primarily as choice / autonomy.

AUTONOMY-B backpack adjustment remains acceptable.

### CONTROL

Current CONTROL-A remains replacement-required.

Candidates reviewed:
- dog leash + collar: HOLD only; control meaning exists but is contaminated by pet / care / safety / dominance associations;
- domino chain `Gallery/S02.webp`: strong `impact / influence / chain reaction`, but weaker as direct CONTROL because after the trigger the process largely runs by itself; also has KlingAI watermark;
- traffic light: poor direct CONTROL from participant perspective because the system controls the viewer rather than the viewer controlling the system; stronger as external regulation / ORDER;
- preferred CONTROL-A search principle remains: a familiar, credible real control where one action directly regulates a visible state / flow / outcome.

### KNOWLEDGE / Learning-Understanding

**KNOWLEDGE-A strong KEEP candidate:** `Gallery/20260730_233054250.png`
- scene: library shelves / books;
- first-glance reading: books / knowledge / learning;
- assessment: strong Learning-Understanding cue with low construct overlap;
- working target: `ieškoti žinių / mokytis`;
- caveat: portrait source, requires reviewed 1:1 crop/reframe before bank switch.

**KNOWLEDGE-B monitor-only candidate `Gallery/20260730_233626457.png`: HOLD / weak.**
- reads clearly as computer / workspace, but not specifically learning or understanding;
- do not freeze as B unless no better digital-learning scene exists.

Preferred KNOWLEDGE pair logic:
- A = analog access to knowledge, e.g. books / library;
- B = active digital learning / understanding, e.g. course / explanation / note-taking / information study;
- both should converge on learning-understanding rather than technology itself.

### OPPORTUNITY

Forked-path candidate `Gallery/file_00000000cc8c81f4a927534c8316290c.png` is **rejected for OPPORTUNITY**.
- it reads primarily as `which direction do I choose?`;
- this is stronger AUTONOMY than OPPORTUNITY.

OPPORTUNITY should instead show one clearly accessible valuable possibility that can be acted on now, rather than a choice between alternatives.

Current OPPORTUNITY-A remains HOLD / search-better-candidate.

## Current family-level working summary

- REST: both runtime exemplars need replacement; strong A candidate found (slippers), B still search.
- RESOURCE: A/B currently pass.
- SAFETY: A passes; B semantically passes, verify clean `S13.webp` duplicate.
- ORDER: both runtime exemplars need replacement; preferred conceptual A/B pair identified (tool shadow board + marked parking spaces).
- CONNECTION: both semantically retained but require watermark cleanup / clean equivalents.
- BELONGING: A passes; B remains HOLD due to asymmetric warmth cue.
- CARE: A/B pass.
- AUTONOMY: A runtime image replace; forked-path candidate is strong; B passes.
- CONTROL: A replace; B passes; direct-control A still search.
- RECOGNITION: A passes; B retained as boundary probe.
- MASTERY: A/B pass.
- EXPLORATION: A/B pass.
- KNOWLEDGE: current A/B replace; strong library A candidate found; B still search.
- OPPORTUNITY: A remains HOLD/search; B passes.

## Watermark audit

A one-time OCR / corner audit was run across all 28 current runtime assets.

Clear detections:
- REST-B: KlingAI watermark, already replacement-required;
- ORDER-B: KlingAI 3.0 watermark, already replacement-required for semantics;
- CONNECTION-A: KlingAI watermark, keep-but-clean;
- CONNECTION-B: visually confirmed watermark, keep-but-clean.

No other currently retained stimulus produced a clear watermark-text detection in this pass. This is not a guarantee against tiny non-text logos.

## Gallery duplicate search

A perceptual-hash search over the Hostinger Gallery found:
- SAFETY-B current file `20260829_233727670.png` has `S13.webp` at perceptual hash distance 0.

This makes `S13.webp` a strong candidate for a clean equivalent of SAFETY-B and should be visually checked / switched if clean.

No near-identical clean copy was found for CONNECTION-A or CONNECTION-B in the first search pass.

## Current source-of-truth split

Technical runtime bank and per-exemplar review metadata:
`olemoz1977/omesg360/priolens/open14-v02/bank.json`

Owner-readable live catalog:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

Formal project checkpoint:
this document.

## Immediate next action

Do not run another owner interpretation session yet.

Finish stimulus remediation in this order:
1. verify / switch SAFETY-B to clean `S13.webp` if visually equivalent and watermark-free;
2. resolve CONNECTION-A and CONNECTION-B watermark cleanup or replace with clean equivalents;
3. resolve accepted replacement candidates already found: REST-A slippers, AUTONOMY-A forked path, KNOWLEDGE-A library;
4. find remaining replacements: REST-B, ORDER-A, ORDER-B, CONTROL-A, KNOWLEDGE-B;
5. review BELONGING-B and OPPORTUNITY-A against better Gallery candidates;
6. normalize every newly accepted non-square asset to reviewed 1:1 derivative;
7. re-run one final active-bank audit for geometry, watermark, semantic status and runtime reachability;
8. only when the active bank is clean, smoke the mobile visual flow once;
9. then fix sufficiency `null` / coverage display;
10. keep CARE visual-vs-received-support self-report asymmetry explicit;
11. configure and smoke 90-day cleanup cron;
12. then decide the first small external formative pilot.

External recruitment remains CLOSED.
