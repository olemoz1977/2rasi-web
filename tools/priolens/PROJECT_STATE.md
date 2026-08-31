# PrioLens project state

Status: ACTIVE RESEARCH / FULL GALLERY IMPULSE AUDIT COMPLETE / BALANCED P3 OWNER RERUN COMPLETE / CER CONSTRUCT HOLD
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Read first

1. `docs/PRODUCT_ARCHITECTURE_INVARIANTS_v0.1.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/NEW_CHAT_SOURCE_OF_TRUTH_v0.1.md`
4. `docs/STIMULUS_IMPULSE_AUDIT_v0.1.md`
5. `docs/GALLERY_IMPULSE_AUDIT_v0.1.csv`
6. `docs/GALLERY_IMPULSE_CURATION_v0.1.md`
7. `docs/RECENT_GENERATED_IMPULSE_AUDIT_v0.1.md`
8. `docs/CANDIDATE_BANK_MATRIX_v0.3.md`
9. `docs/CER_VISUAL_VIABILITY_CHECK_v0.1.md`
10. `docs/P3_SINGLE_SESSION_DIAGNOSTIC_v0.1.md`
11. `docs/P3_BALANCED_OWNER_RERUN_DIAGNOSTIC_v0.1.md`
12. `docs/P3_SLOT_BALANCING_SPEC_v0.1.md`
13. `docs/P3_TIE_SAFE_RESULT_SPEC_v0.1.md`
14. `docs/STIMULUS_SELECTION_RULES_v0.2.md`
15. `docs/GALLERY_CONFLICTLAB_V04_PROVENANCE_NOTE_v0.1.md`
16. `docs/D1_D2_EVIDENCE_RECLASSIFICATION_v0.1.md`
17. `docs/ORIGINAL_STIMULUS_EXACT_MAPPING_v0.1.md`
18. this file

## Product boundary

PrioLens is a short visual-choice experience.

Canonical phrase:
> **For Fun with Wisdom**

Target public flow remains simple and non-diagnostic. The current research may use 2-image or 3-image presentation variants, but stimulus identity remains standalone and results describe only the current session/stimuli.

Core constraints:
- one image = one standalone stimulus;
- no mandatory writing or per-choice explanation;
- no personality/diagnosis/hidden-self claim;
- `no_clear_choice` allowed;
- latency is mechanical/UX data, not psychological strength;
- target public duration roughly 2–4 minutes.

## Active review rule

The active order is impulse-first:

> **image → what it evokes → possible direction → KEEP / HOLD / DROP / REASSIGN**

Do not start from the intended historical label.

This applies equally to historical PASS, HOLD, CANDIDATE and DROP images. A DROP may return if it failed only because it was assigned to the wrong direction. A PASS may be removed if its first impulse does not support the intended construct.

Canonical rule: `docs/STIMULUS_IMPULSE_AUDIT_v0.1.md`.

## Full Gallery audit complete

`Gallery.zip` contains 223 files / 222 byte-unique images.

Every Gallery image has a plain-language first-impulse description in:
`docs/GALLERY_IMPULSE_AUDIT_v0.1.csv`.

After second-stage curation:
- 40 Gallery images remain KEEP/HOLD for the current eight-direction question;
- 183 are DROP from the compact candidate bank.

Do not perform another full Gallery pass unless a genuinely new question requires it.

## Current candidate bank after impulse audit

Active matrix: `docs/CANDIDATE_BANK_MATRIX_v0.3.md`.

### AUT
Strongest: `S05` tool choice; backpack strap adjustment; physical audio volume adjustment.
Working impulse: **I choose / I set this for myself.**
Bicycle saddle and car headrest remain HOLD. Workstation is DROP because computer work dominates.

### CER
CER is **CONSTRUCT HOLD**, not an image-production gap.
Working intended impulse:
> **Trauka į būseną, kurioje aišku, kas vyksta ar ko tikėtis.**

Existing candidates mostly resolve into proxies such as confirmation, order, permission, completion or precision. There is no strong standalone CER image yet. Do not generate more CER scenes until the construct itself is narrowed, replaced or explicitly retained despite this representational problem.

### EXP
Strongest: `S09` reveal/discovery; peek/curiosity; uncertain fork/path; `S01` forward into unseen route. Enough diversity for now.

### MAS
Strongest: `S12` precision measurement; `S16` skilled shaping; precise frame adjustment. Water-to-mark is a MAS/control HOLD, not CER.

### CON
Strongest: `S03` dyadic connection; reciprocal joint handling/exchange. Faces/warmth remain a recurring confound.

### INF
Strongest: irrigation gate distributing water across a wider system; local switch changing wider room state. `S02` domino and `S04` routing remain HOLD.

### PRO
Strongest: umbrella shielding; gate latch/access security; fitted protective case; robust enclosure. Keep shielding/securing/safeguarding together as candidate expressions until evidence says whether they cohere.

### OPP
Strongest: prepared useful materials; ripe harvest + basket; blank canvas + tools. Scenario diversity is good, though reward/nature confounds remain.

## D1/D2 evidence still active

The inference
`different visible mechanisms → one stable broad direction → safe direction score`
is not established enough to freeze.

Current broad directions are design hypotheses for bank construction, not validated scores. Later human evidence must decide whether materially different exemplars actually cohere.

## P3 owner-run checkpoint

Two owner P3 sessions have now been completed with CER inactive.

Shared design:
- 7 active directions;
- 14 three-image trials;
- every direction shown 6 times;
- every one of the 21 direction pairs co-occurred exactly twice.

### First owner run, before exact slot balancing

Raw result:
- Mastery 5/6;
- Protection 5/6;
- Connection 2/6;
- Opportunity 2/6;
- Autonomy 0/6;
- Exploration 0/6;
- Influence 0/6.

This run exposed two technical faults:
1. exact ties were broken incorrectly by result sorting;
2. stimulus/direction positions were not balanced.

Canonical diagnostic: `docs/P3_SINGLE_SESSION_DIAGNOSTIC_v0.1.md`.

### Balanced owner rerun

Source schema: `2rasi.priolens.p3.research-v0.3`
Seed: `mthh8pds-ucwagn`

The corrected planner achieved exact balance:
- every exemplar appears once in each of the 3 slots across its three presentations;
- every direction appears 2/2/2 across the 3 slots.

Raw result:
- Mastery 6/6;
- Connection 3/6;
- Protection 3/6;
- Exploration 1/6;
- Opportunity 1/6;
- Autonomy 0/6;
- Influence 0/6.

Critical findings:
1. **Tie-safe rendering and exact slot balancing now work.**
2. Mastery is the only direction with perfect two-exemplar support in the balanced run: `mastery-01` 3/3 and `mastery-02` 3/3.
3. Mastery is also perfectly stable across internal rounds (3/3 + 3/3) and its six wins are distributed 2/2/2 across the three slots.
4. Influence remains 0/6 after exact position balancing. The earlier P3 collapse therefore cannot be explained only by aggregate slot imbalance.
5. Autonomy also remains 0/6 across both P3 owner runs.
6. Protection falls from 5/6 to 3/6 after seed/context change; Connection rises from 2/6 to 3/6. Middle directions are context-sensitive in these owner runs.
7. Overall median RT is ~2.06 s; excluding the first orientation trial it is ~1.97 s. P3 is therefore feasible as a low-deliberation owner UX, but this is not participant validation.
8. Plackett–Luce output becomes extreme (`Mastery ~0.978`) under near-separation and 14 trials. It remains research/debug only and must not be interpreted as psychological strength.
9. Chosen slots were 4/7/3 despite exactly balanced exposure. The mobile 2+1 layout remains geometrically asymmetric even though aggregate slot exposure is balanced.
10. Repeating the same 14 historical images with the same owner now adds little and increases familiarity contamination.

Canonical balanced rerun diagnostic: `docs/P3_BALANCED_OWNER_RERUN_DIAGNOSTIC_v0.1.md`.
Technical specs:
- `docs/P3_SLOT_BALANCING_SPEC_v0.1.md`
- `docs/P3_TIE_SAFE_RESULT_SPEC_v0.1.md`

## Historical source artifacts recovered

The following historical/current artifacts are now explicitly part of the source-of-truth recovery path:

- `priolens_working_beta_v03.html` — File Library; internal schema `working-v0.3`; 28-pair core plus explicit blind `2×28` research mode;
- `priolens_working_beta-4.html` — File Library; internal schema `working-v0.2`; same eight directions and 16 standalone stimuli, with optional calibration after the core result;
- `decision_drivers_8x8_prototype_v0.4.html` — ConflictLab-lineage 12-duel pairwise 8-driver prototype, not P3;
- `priolens_p3_standalone_v03.html` — recovered/current P3 three-image standalone runtime with embedded historical stimuli, schema `2rasi.priolens.p3.research-v0.3`, tie-safe result and exact slot balancing.

The previous blocker “actual P3 runtime/source not identified” is closed.

Do not infer version order from filenames alone. Canonical recovery rules: `docs/NEW_CHAT_SOURCE_OF_TRUTH_v0.1.md`.

## Gallery provenance

Part of Gallery was influenced by ConflictLab v0.4-era work and visible-cue rules. The recovered `decision_drivers_8x8_prototype_v0.4.html` also shows that AUT/CER/EXP/MAS/CON/INF/PRO/OPP were already being explored in the ConflictLab repository lineage before the later PrioLens working betas. This explains ancestry but is not current scoring validation.

Do not use historical labels to rescue current mappings.

## Solo workflow

The user is working alone.

Current workflow:
1. use owner runs for technical/design falsification, not validation;
2. keep exemplar identity and position visible;
3. use blind AI only for obvious ambiguity/confound checks;
4. do not recruit externally yet;
5. do not generate broadly.

## Immediate next action

The P3 tie and slot-correction cycle is complete.

Do **not** run a third owner session on the same 14 historical stimuli for validation claims.

Next research move:
1. keep P3 as a viable research presentation variant, not yet the public architecture;
2. build the next materially different **non-CER** research bank from the impulse-curated KEEP/HOLD candidates, prioritizing semantic diversity over equal historical quotas;
3. preserve exemplar identity so direction-level aggregation can be challenged rather than assumed;
4. use the new bank to test whether repeated choice patterns survive materially different exemplars;
5. separately decide whether the mobile P3 2+1 geometry is acceptable or needs a different spatial solution before external testing;
6. keep CER inactive until the construct decision is resolved.

Current methodological blocker:
- the historical two-exemplar bank is now more limiting than the P3 counting algorithm;
- several historical AUT/INF/EXP/OPP exemplars are already known to be weak or cross-loaded;
- repeated owner exposure to the same old bank creates familiarity contamination.

## Guardrails

- do not return to matched Preserve↔Refine architecture;
- do not erase D1/D2 negative evidence;
- do not equate a clear image with validated direction scoring;
- do not preserve old PASS/DROP labels by inertia;
- do not assign direction before writing the image impulse;
- do not fill quotas with weak or duplicate renders;
- do not treat P3 triple wins as literal observations between the two unchosen items;
- do not break exact result ties by array/sort order;
- do not treat Plackett–Luce weights as psychological strength;
- do not treat repeated owner runs on the same historical bank as validation;
- do not treat ConflictLab v0.4 lineage as the current PrioLens scoring model;
- keep the public experience aligned with **For Fun with Wisdom**.

## AI Review Harness

Vercel harness exists and reaches AI Gateway. Paid execution remains deferred.
