# PrioLens Open14 C-package provenance / readiness

Status: ACTIVE ASSET-PACKAGE BUILD / NOT RUNTIME BANK
Date: 2026-09-03
Parent decision: `OPEN14_NO_REPEAT_42_TRANSITION_2026-09-03.md`

## Purpose

Turn the approved 14-family third-exemplar shortlist into an auditable asset package.

A semantic scene choice is **not** yet a frozen stimulus. A C exemplar becomes runtime-ready only when all of the following are known:

- exact source identity;
- exact local/repo binary;
- stable runtime path;
- geometry / crop decision;
- no visible watermark / construct-label text;
- duplicate check against current A/B and other C images;
- first-impulse / mechanism note;
- known cross-loading risk.

Until those fields are complete, do not patch live `open14-v02/bank.json`.

## C package manifest

Legend:
- `SOURCE-LOCKED` = semantic choice and canonical external source are known; binary still needs repo/runtime normalization unless noted otherwise.
- `UPLOAD-IDENTITY-OPEN` = owner reviewed an uploaded image, but its exact stable source/binary identity is not yet recovered in the repo package.
- `BOUNDARY` = usable research probe with material construct cross-loading.

| Family | C scene | Semantic decision | Provenance state | Known source / fallback | Main risk |
| --- | --- | --- | --- | --- | --- |
| REST | slippers / home-rest cue | KEEP provisional | **UPLOAD-IDENTITY-OPEN** | fallback: Pexels `14847960` (slippers on wooden floor) or `8899497` (person beside slippers) | fashion/product cue; close to existing home-comfort mechanism |
| RESOURCE | prepared wood / usable materials | KEEP provisional | **SOURCE-LOCKED concept** | Pexels `5974010` — planer and assorted wooden blocks in workroom | MASTERY / workshop cross-load |
| SAFETY | fastening seat belt | KEEP | **SOURCE-LOCKED concept** | Pexels `8153605` — close-up fastening seat belt | familiar learned safety cue |
| ORDER | organized open drawer | KEEP | **UPLOAD-IDENTITY-OPEN** | prior source candidate: Pexels `6264420` — inside of a drawer | exact uploaded binary must be matched before freeze |
| CONNECTION | two people in direct conversation | KEEP | **UPLOAD-IDENTITY-OPEN** | fallback candidates: Pexels `13929439`, `8554325`, `11591649` | faces / warmth / friendship may dominate reciprocal connection |
| BELONGING | shared gaming activity | KEEP | **SOURCE-LOCKED concept** | Pexels `9071468` — friends sitting on couch / gaming | positive group valence |
| CARE | adult tying child's shoe | KEEP | **UPLOAD-IDENTITY-OPEN** | prior source candidates: Pexels `5094107` or `7339487` | child/caregiver role cue; still within proactive-care boundary |
| AUTONOMY | choosing one garment from rack | **BOUNDARY KEEP** | **SOURCE-LOCKED concept** | Pexels `6069074`; fallback `8030171` | fashion/shopping preference can dominate self-direction |
| CONTROL | mixing / control console | KEEP provisional | **UPLOAD-IDENTITY-OPEN** | fallback: Pexels `7891866` or `11346926` | strong technical/lighting salience; music-domain cue |
| RECOGNITION | directed loyalty/employee award | **BOUNDARY KEEP** | **UPLOAD-IDENTITY-OPEN** | fallback: Pexels `16323628` (Employee of the Month trophy) or `7005751` (recognition award plaque) | achievement/status/text cue; must remain distinct from SUCCESS/ACHIEVEMENT hold |
| MASTERY | sewing a button | KEEP | **SOURCE-LOCKED concept** | Pexels `8030168` | another manual-skill exemplar; domain diversity limited |
| EXPLORATION | binocular search | KEEP | **SOURCE-LOCKED concept** | Pexels `15692450` | travel/nature context |
| KNOWLEDGE | active study + notes | KEEP | **SOURCE-LOCKED concept** | Pexels `6929197` | academic-context cue |
| OPPORTUNITY | open greenhouse with visible productive plants | KEEP | **SOURCE-LOCKED concept** | Pexels `21854305` | nature/resource/growth valence |

## Current readiness count

Semantic C choice:
- 14 / 14 families have a working C scene;
- 12 / 14 are ordinary KEEP/provisional KEEP;
- AUTONOMY and RECOGNITION remain explicit boundary probes.

Exact binary/provenance package:
- **9 / 14 have a canonical external source candidate already documented**;
- **5 / 14 require exact uploaded-image identity recovery before they can be frozen as the reviewed image**: REST, ORDER, CONNECTION, CARE, CONTROL, RECOGNITION is also uploaded-identity-open, so the practical unresolved set is **6 / 14** if the owner-reviewed loyalty-award file is retained rather than replaced by a fallback.

Therefore the bank is **not 42-runtime-ready yet**.

## Important correction to a tempting shortcut

Do not silently substitute a visually similar Pexels fallback for an owner-reviewed uploaded image.

A different photo is a different stimulus. If the exact uploaded REST / ORDER / CONNECTION / CARE / CONTROL / RECOGNITION file cannot be recovered, the fallback must be reviewed as a new candidate, not treated as provenance for the old one.

## A/B/C audit preparation

Current A/B paths are frozen in deployed Open14 v0.2. The first true A/B/C visual audit becomes executable family-by-family when the exact C binary is source-locked.

Priority order:

### P0
1. AUTONOMY: current A + current B + clothing-choice C
2. RECOGNITION: current A + current B + award C
3. REST: current A + current B + slippers C
4. RESOURCE: current A + current B + prepared-material C
5. OPPORTUNITY: current A + current B + greenhouse C

### P1
6. CONNECTION
7. CARE
8. KNOWLEDGE
9. EXPLORATION

### Stable families — still inspect as A/B/C set, but no replacement search unless the combined set exposes a new problem
- SAFETY
- ORDER
- BELONGING
- CONTROL
- MASTERY

## D-search trigger

For a P0 family, D search starts only if the actual A/B/C visual comparison gives a clear losing current exemplar on the agreed criteria:

1. intended first impulse is less readable within about one second;
2. stronger neighbouring-family cross-load;
3. nuisance salience dominates intended signal;
4. its mechanism is redundant with another family exemplar;
5. replacing it would materially improve mechanism diversity.

If no current A/B clearly loses to the assembled C, keep A/B/C and do not create work just to justify the audit.

## Next concrete asset task

1. Recover/match the exact owner-reviewed uploaded files for REST-C, ORDER-C, CONNECTION-C, CARE-C, CONTROL-C and RECOGNITION-C.
2. For source-locked external candidates, capture/download the exact selected binary and normalize it into a dedicated next-bank asset directory without altering the source image content.
3. Record hashes and dimensions.
4. Only then create the visual A/B/C contact sheet / review surface.

No live runtime patch is authorized by this manifest.
