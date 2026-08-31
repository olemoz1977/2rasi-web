# PrioLens project state

Status: ACTIVE RESEARCH / FULL GALLERY IMPULSE AUDIT COMPLETE / P3 OWNER DIAGNOSTIC COMPLETE / CER CONSTRUCT HOLD
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Read first

1. `docs/PRODUCT_ARCHITECTURE_INVARIANTS_v0.1.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/STIMULUS_IMPULSE_AUDIT_v0.1.md`
4. `docs/GALLERY_IMPULSE_AUDIT_v0.1.csv`
5. `docs/GALLERY_IMPULSE_CURATION_v0.1.md`
6. `docs/RECENT_GENERATED_IMPULSE_AUDIT_v0.1.md`
7. `docs/CANDIDATE_BANK_MATRIX_v0.3.md`
8. `docs/CER_VISUAL_VIABILITY_CHECK_v0.1.md`
9. `docs/P3_SINGLE_SESSION_DIAGNOSTIC_v0.1.md`
10. `docs/P3_SLOT_BALANCING_SPEC_v0.1.md`
11. `docs/P3_TIE_SAFE_RESULT_SPEC_v0.1.md`
12. `docs/STIMULUS_SELECTION_RULES_v0.2.md`
13. `docs/GALLERY_CONFLICTLAB_V04_PROVENANCE_NOTE_v0.1.md`
14. `docs/D1_D2_EVIDENCE_RECLASSIFICATION_v0.1.md`
15. `docs/ORIGINAL_STIMULUS_EXACT_MAPPING_v0.1.md`
16. this file

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

One P3 owner session was completed with CER inactive.

Design:
- 7 active directions;
- 14 three-image trials;
- every direction shown 6 times;
- every one of the 21 direction pairs co-occurred exactly twice.

Raw result:
- Mastery 5/6;
- Protection 5/6;
- Connection 2/6;
- Opportunity 2/6;
- Autonomy 0/6;
- Exploration 0/6;
- Influence 0/6.

Critical findings:
1. **Mastery and Protection are tied.** Current P3 result UI incorrectly names Mastery as the unique most-selected direction despite a 0 p.p. gap.
2. Both Mastery exemplars contributed wins (3/3 + 2/3), and both Protection exemplars contributed wins (3/3 + 2/3). This is stronger internal stimulus consistency than the other active directions in this run.
3. Connection and Opportunity are exemplar-dependent: one exemplar produced 2/3 wins while the other produced 0/3.
4. Influence is cross-format unstable: earlier pairwise owner runs gave 4/7 and 6/7 wins, while P3 gave 0/6 selections.
5. Slot placement is not balanced in the current P3 plan. The participant selected top/middle/bottom slots 3/3/8 times; Protection appeared bottom 4/6, Influence middle 4/6, Autonomy top 4/6.
6. Exact slot balancing is guaranteed for the current design: the trial↔stimulus incidence graph is 3-regular bipartite and can be decomposed into three perfect matchings. Assigning those matchings to top/middle/bottom makes every exemplar appear once in each slot.
7. Plackett–Luce output is research-only. Near-separation makes its normalized values look more precise than 14 trials justify.

Canonical diagnostic: `docs/P3_SINGLE_SESSION_DIAGNOSTIC_v0.1.md`.
Technical specs:
- `docs/P3_SLOT_BALANCING_SPEC_v0.1.md`
- `docs/P3_TIE_SAFE_RESULT_SPEC_v0.1.md`

## Gallery provenance

Part of Gallery was influenced by ConflictLab v0.4 axes (`aw`, `cs`, `cr`) and visible-cue rules. This explains image ancestry but is not the PrioLens scoring model. Do not use old ConflictLab labels to rescue current mappings.

## Solo workflow

The user is working alone.

Current workflow:
1. use owner runs for technical/design falsification, not validation;
2. keep exemplar identity and position visible;
3. use blind AI only for obvious ambiguity/confound checks;
4. do not recruit externally yet;
5. do not generate broadly.

## Immediate next action

The P3 correction is now specified, not conceptually blocked.

Implementation requirements:
1. implement `P3_TIE_SAFE_RESULT_SPEC_v0.1.md`;
2. implement `P3_SLOT_BALANCING_SPEC_v0.1.md`;
3. rerun the same 7-direction P3 owner check with a new seed;
4. inspect whether the Influence collapse persists after position balancing;
5. keep CER inactive until its construct decision is resolved.

Current implementation blocker:
- no identifiable P3 runtime/source exists in the PrioLens branch;
- two newly uploaded files named `decision_drivers_8x8_prototype_v0.3.html` and `decision_drivers_8x8_prototype_v0.4.html` are not currently retrievable through the active file mount/search layer, so their relevance cannot be verified;
- code changes require a readable P3 HTML/source artifact.

Do not substitute the old pairwise `priolens_working_beta` runtime for the missing P3 source.

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
- do not treat ConflictLab v0.4 axes as the current PrioLens scoring model;
- keep the public experience aligned with **For Fun with Wisdom**.

## AI Review Harness

Vercel harness exists and reaches AI Gateway. Paid execution remains deferred.
