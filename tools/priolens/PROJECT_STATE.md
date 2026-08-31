# PrioLens project state

Status: ACTIVE RESEARCH / OPEN14 v0.2 / TWO-LAYER ARCHITECTURE ACTIVE
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Read first

1. `RESUME_HERE.md`
2. `docs/NEW_CHAT_SOURCE_OF_TRUTH_v0.1.md`
3. `docs/NEED_STATE_AND_IMPULSE_PRIORITY_ARCHITECTURE_v0.1.md`
4. `docs/OPEN14_SOCIAL_SPLIT_AND_SUCCESS_DECISION_v0.1.md`
5. `docs/P3_OPEN_SPECTRUM_14_SPEC_v0.2.md`
6. `docs/OPEN14_ASSET_MATRIX_v0.2.md`
7. `docs/PERCEIVED_SUFFICIENCY_LAYER_v0.1.md`
8. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
9. `docs/STIMULUS_SELECTION_PRAGMATIC_RULE_v0.1.md`
10. `docs/HOSTING_DEPLOYMENT_BOUNDARY_v0.1.md`
11. this file

Older v0.1 Open14 spec/matrix files are historical checkpoints, not the active design.

## Product boundary

PrioLens remains a short visual-choice experience.

Canonical phrase:
> **For Fun with Wisdom**

Do not claim:
- personality diagnosis;
- hidden / true self;
- subconscious truth;
- fast = true;
- latency = psychological strength;
- strong visual response = unmet need;
- one complete validated taxonomy of human priorities;
- Karpman roles from image choices.

Target public duration remains roughly 2–4 minutes. `no_clear_choice` stays valid.

## Active two-layer architecture

PrioLens separates two observations:

1. **revealed visual priority** — what repeatedly wins in low-deliberation visual choice;
2. **perceived sufficiency** — how sufficiently broader need domains currently feel represented/met.

Preferred order:
1. visual task first, without need labels or prior deficiency ratings;
2. perceived-sufficiency self-assessment second;
3. compare the layers without collapsing them into one psychological score.

Reason: asking what is missing first would prime the visual task.

Do not assign one global Maslow stage. Maslow-style levels are coarse coverage buckets because a person may be secure in one area and deprived in another.

## Theory stance

Theory is a coverage/omission map, not the source of a ready-made PrioLens taxonomy.

Potential reference frameworks include:
- Maslow-style need domains;
- Self-Determination Theory;
- Schwartz values;
- McClelland motives;
- approach/avoidance and promotion/prevention;
- caregiving, attachment, exploration, threat-defense and dominance/control literature;
- AgileBrain as a neighboring applied visual-need framework.

Do not infer neural-system activation from a picture choice.

## Active stimulus rule

Do not optimize toward laboratory sterility.

Use:
> **image → first spontaneous pull / meaning → candidate impulse family → KEEP / HOLD / DROP / REASSIGN / NEW-FAMILY**

Practical questions:
- what does a normal viewer get in about one second?
- is the image alive enough to create a real choice?
- is the discovered pull a plausible first read?
- is a competing reading actually stronger, or merely possible?

Emotion is not a confound by itself. Systematic salience imbalance across families is the larger risk.

## Gallery state

Gallery contains 223 files / 222 byte-unique images.

A full first-impulse audit exists. Do not restart all 223 from zero.

Historical KEEP/HOLD/DROP labels applied to older direction questions and are not binding under the broader spectrum question.

Hostinger source copy:
`omesg360.eu/public_html/priolens-research-assets/Gallery`

`olemoz1977/omesg360` provides the GitHub Actions + Hostinger FTP channel. Routine Hostinger inspection/deployment should be handled through that repo rather than delegated to the user.

## Historical P3 checkpoint

P3 v0.4 old seven-family runtime remains live on:
`omesg360.eu/priolens/`

Schema:
`2rasi.priolens.p3.research-v0.4`

Latest old-bank owner run:
- MAS 5/6;
- EXP 3/6;
- PRO 3/6;
- OPP 2/6;
- CON 1/6;
- AUT 0/6;
- INF 0/6;
- median RT ~1.51 s;
- `no_clear_choice` 0/14.

This is technical/design evidence only. Do not run another owner validation session on the same historical images.

## Active research variant: Open14 v0.2

The old seven/eight directions are not assumed exhaustive.

Active candidate families:

### Basic / stability
1. REST
2. RESOURCE
3. SAFETY
4. ORDER

### Social
5. CONNECTION — direct contact / reciprocity
6. BELONGING — being with / part of others
7. CARE — acting for another's welfare

### Agency / esteem
8. AUTONOMY
9. CONTROL
10. RECOGNITION

### Growth / cognitive / possibility
11. MASTERY
12. EXPLORATION
13. KNOWLEDGE — working display concept `Learning / Understanding`
14. OPPORTUNITY

This is a discovery shortlist, not a fundamental-needs taxonomy.

Canonical decision:
`docs/OPEN14_SOCIAL_SPLIT_AND_SUCCESS_DECISION_v0.1.md`.

Canonical spec:
`docs/P3_OPEN_SPECTRUM_14_SPEC_v0.2.md`.

## SUCCESS decision

`SUCCESS / ACHIEVEMENT` is removed from the active Open14 visual family set.

Reason:
- success is an outcome that can be attractive because of mastery, recognition, reward/resource, control, autonomy or opportunity;
- current static imagery does not isolate a useful atomic success pull without heavy overlap.

Status:
- `SUCCESS / ACHIEVEMENT = DERIVED / THEORY-HOLD`.

Do not regenerate success images merely to preserve the old count.

## Social split

Do not collapse:
- CONNECTION — direct contact / reciprocity;
- BELONGING — being with / part of others;
- CARE — action for another person's welfare.

CARE working boundary:
> **act for another person's welfare, including with a small personal cost or before being asked.**

Accepted CARE mechanism classes:
- visible modest self-sacrifice;
- proactive practical help without a visible request.

Do not use heroic emergency scenes where danger/bravery dominates.

## Open14 v0.2 planner

Canonical source:
`research/p3_open14_planner_v02.mjs`

Planner:
`cyclic-14x3-diff-1-4-slot-role-v0.2`

Family-set version:
`open-spectrum-14-v0.2`

Macro family counts:
- BASIC 4;
- GROWTH 4;
- SOCIAL 3;
- AGENCY / ESTEEM 3.

Validated invariants:
- exactly 14 triads;
- every family appears exactly 3 times;
- every family appears exactly once in each slot: 1/1/1;
- every trial contains 3 distinct macro domains;
- no family pair repeats;
- 42 unique family-pair co-occurrences;
- every family meets 6 unique opponents.

The v0.2 implementation was smoke-tested across 1000 deterministic seeds with all validation invariants passing.

The FAMILY_SET order is structural. Do not alphabetize/reorder it without revalidation.

## Active asset matrix

Canonical:
`docs/OPEN14_ASSET_MATRIX_v0.2.md`.

Current state:
- 24 existing/recovered assets cover 12 of 14 families;
- BELONGING uses existing Gallery assets;
- SUCCESS requires no slots because it is no longer in Open14;
- only CARE A/B and RECOGNITION A/B remain intentionally blank.

### BELONGING candidates

- `S14.webp` — `bendrauti / veikti socialiniame rate`;
- `20260731_043300801.png` — `dalintis šiluma / būti kartu`.

These remain broad-scan candidates with expected overlap, not validated constructs.

### KNOWLEDGE / Learning-Understanding

A = `20260730_230227381.png` — explicit classroom/learning.

B = `20260811_180451129.png` — `pamatyti aiškiau / daugiau`.

B is an intentional boundary probe that also fixes the earlier family-level portrait-geometry disadvantage. Do not hide exemplar identity in analysis.

### AUT recovered material

Preferred AUT-B is preserved in `olemoz1977/omesg360`:
`priolens/recovered-assets/priolens_aut_backpack_v01.webp`.

Physical audio control remains an AUT / CONTROL boundary reserve, not a default AUT anchor.

## Current true visual gaps

Only four Open14 v0.2 slots remain intentionally unresolved:
- CARE-A;
- CARE-B;
- RECOGNITION-A;
- RECOGNITION-B.

Do not fill these by reinterpretation of unrelated Gallery scenes.
Do not generate images automatically.

## Perceived-sufficiency layer

Canonical draft:
`docs/PERCEIVED_SUFFICIENCY_LAYER_v0.1.md`.

It stays after the visual task.

Important:
- visual CONNECTION and BELONGING do not require separate self-report scales yet;
- perceived care/support does not equal giving care;
- do not manufacture one-to-one mappings for tidy charts;
- raw self-report items remain canonical.

## Current methodological stance

Working hypothesis:
> **Low-deliberation comparative visual choice under reduced self-presentation opportunity.**

Lithuanian working phrasing:
> **Mažos deliberacijos vizualinis pasirinkimas, kuriame sumažinta galimybė sąmoningai konstruoti atsakymą apie save.**

The project is treated as potentially state-sensitive, not as stable personality typing.

## Immediate next action

Do **not** return to the old seven-direction Bank B.
Do **not** restore SUCCESS to Open14.
Do **not** generate images without a human gate.

Next:
1. freeze the 24 existing Open14 v0.2 assets as the working shortlist;
2. define two materially different CARE and two materially different RECOGNITION scene mechanisms in words;
3. prepare runtime/data wiring around planner v0.2 without fake image placeholders for the four unresolved slots;
4. stop for human review before creating any missing stimulus;
5. after accepted missing assets exist, build the complete Open14 v0.2 runtime;
6. run an owner technical/design smoke test only, then move toward external human data rather than repeated owner validation.

Current objective:
> **finish Open14 v0.2 with the minimum missing assets while keeping the experience fast, vivid and non-test-like.**

## Guardrails

- no sterile-image optimization for its own sake;
- no forced seven/eight/fourteen theoretical completeness;
- no theory-first rationalization of images;
- no `strong visual response = unmet need` claim;
- no direct neural-system inference from image choice;
- no Karpman role diagnosis from visual choices;
- no Plackett–Luce weight as psychological strength;
- no repeated-owner old-bank run as validation;
- preserve exemplar identity;
- keep public experience aligned with **For Fun with Wisdom**.
