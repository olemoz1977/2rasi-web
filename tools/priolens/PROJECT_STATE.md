# PrioLens project state

Status: ACTIVE DESIGN / HANDOFF SOURCE OF TRUTH
Updated: 2026-08-29
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9
Public target: `https://2rasi.com/tools/priolens/` and `https://2rasi.lt/tools/priolens/`

## Product boundary

- PrioLens is a new 2rasi-native product, not a ConflictLab revival.
- 2Pair remains frozen and must not be silently changed.
- No runtime dependency on `omesg360.eu`.
- Homepage position: card 10.
- Promise: clarify competing priorities through repeated pairwise choices; no diagnosis, subconscious/instinct claims, hidden-needs claims or employment-suitability claims.

Working public wording:

- EN: `When two things matter, what takes priority?`
- LT: `Kai svarbūs abu, kam teiki pirmenybę?`

## Protocol architecture

Eight working directions:

- AUT: Autonomy / Pasirinkimo laisvės poreikis
- CER: Certainty / Aiškumo poreikis
- EXP: Exploration / Tyrinėjimo trauka
- MAS: Mastery / Meistriškumo siekis
- CON: Connection / Ryšio poreikis
- INF: Influence / Poveikio siekis
- PRO: Protection / Apsaugos poreikis
- OPP: Opportunity / Galimybių trauka

Target:

- 2 conceptually independent exemplars per direction
- 16 active stimuli
- complete 8-direction tournament: C(8,2) = 28 core trials
- one exemplar combination per direction edge per participant; combinations rotate across sessions/participants
- optional reliability block remains off in base v0.1

## Working semantic contract

Source: `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`

Status: FROZEN FOR INTERNAL AUDIT / NOT VALIDATED CONSTRUCTS.

Binding rules:

- visible content must carry intended direction without filename/source knowledge;
- nearest-neighbour directions must be challenged;
- comparable fit to 2+ directions = ambiguous, not force-mapped;
- two exemplars must be conceptually independent scene/content realizations;
- semantic fit never overrides visual-confound risk.

## Presentation freeze

- vertical top/bottom on all supported viewports
- equal 1:1 frames
- both stimuli simultaneously visible
- `object-fit: contain`, no crop
- no scrolling during measured trial
- top/bottom randomized/counterbalanced independently from direction
- unsupported viewport fails preflight
- fetch+decode before timing
- `performance.now()`
- exact choice-commit event still unresolved

Required render order:

`preload -> decode -> reserve layout -> render both -> verify visible/interactive -> stable paint/layout -> start clock -> capture choice -> timestamp before next render`

## Result boundary

Initial participant result remains descriptive only:

- raw wins/selections per direction out of 7
- observed 28-edge trace/matrix
- ties visible
- tiers/relative pattern allowed
- reflection on surprising/close choices allowed
- no artificial strict 1–8 ranking on ties
- no latency-derived psychological score
- no choice+latency combined score

Any Bradley-Terry/model estimator requires a separate versioned analysis contract with uncertainty reporting.

## Historical asset recovery

Historical inventory remains documented in:

- `/tools/priolens/config/candidate-inventory-v0.1.json`
- `/tools/priolens/docs/ASSET_INVENTORY_v0.1.md`
- `/tools/priolens/docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`
- `/tools/priolens/docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md`

Recovered inventory:

- 42 non-placeholder historical stills
- 19 used by old v0.4
- 23 non-placeholder reserves

File Library direct visual access is available. Historical recovery did not produce clean independent coverage for every direction without weakening the semantic contract, so controlled generation was authorized where a demonstrated gap remains.

## Live stimulus decision source — CURRENT

**Candidate-level source of truth:**

`/tools/priolens/docs/STIMULUS_LEDGER_v0.1.md`

The ledger must be updated after each candidate decision before moving to another concept. Chat decisions alone are not durable project state.

Supporting audit history remains in:

- `/tools/priolens/docs/GENERATED_CANDIDATE_AUDIT_v0.1.md`
- `/tools/priolens/docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`

If those supporting files conflict with `STIMULUS_LEDGER_v0.1.md` on current candidate status, **the ledger wins**.

Generated/re-uploaded binaries are conversation/File Library assets and are **not** repository assets or hash-frozen stimuli yet.

### Current strict slot status

| Direction | Status | Current candidates |
|---|---:|---|
| AUT | **0/2** | none passed |
| CER | **0/2** | none passed |
| EXP | **1/2 provisional** | `3098` forest road |
| MAS | **2/2 PASS** | `4635` precision caliper; `4636` potter |
| CON | **0/2** | `2790` mugs and `2720` water glasses are reserves only |
| INF | **1/2** | routed physical consequence family represented by `4602` OR `4612`; these two are not independent |
| PRO | **1/2 provisional** | `2723` wet umbrella |
| OPP | **2/2 provisional** | `4637` productive greenhouse; `4638` prepared food table |

Strict total: **7/16 occupied candidate slots; 9 remain open.**

Open slots:

- INF: 1
- EXP: 1
- PRO: 1
- CON: 2
- CER: 2
- AUT: 2

### Closed directions for generation

- **MAS:** closed at 2/2. Do not generate more unless cross-set audit rejects one.
- **OPP:** closed provisionally at 2/2. Re-open only if cross-set valence/domain audit rejects one.

### INF caution

- `4602` marble gate and `4612` irrigation gate are both semantic passes but **same-family**, so they cannot form the final INF pair.
- `4614` is a crude Python procedural domino reference only and is never a stimulus.
- Domino is still a viable independent INF concept, but attempted photorealistic renders failed physical causal coherence because the finger read as holding/stopping the first block or the chain was already falling before contact.

## Current blocker boundary

The active blocker is no longer “find images generally.” It is exactly **9 unresolved slots** under the frozen semantic contract.

Work should proceed slot-by-slot. Do not reopen completed directions or run broad untargeted generation/library sweeps.

Before any 16-stimulus freeze:

1. fill the 9 open slots with defensible candidates;
2. verify conceptual independence within each direction;
3. assemble the proposed 16-candidate set;
4. run full-set semantic + luminance/contrast/complexity/salience/style/valence/domain-overlap audit;
5. only then copy selected assets into a PrioLens-owned path and hash/freeze them.

No generated or historical image is a frozen PrioLens stimulus yet.

## Current cross-set concerns

- MAS-1 has technical/mechanical affinity with routed-flow INF, but semantics are separable.
- MAS-2 provides useful domain diversity.
- OPP pair has stronger positive/reward valence than current MAS/INF candidates.
- `4637` and `4638` both use visible food/resource value and therefore need a domain/valence challenge in the full-set audit.
- `3098` carries nature/travel aesthetic salience.
- `2723` carries dark/rain negative-valence salience.
- INF `4602` and `4612` must not both enter the final 16.

## Next priority work

1. Work only on the 9 open slots recorded in `STIMULUS_LEDGER_v0.1.md`.
2. After every candidate review, persist the decision in the ledger before changing direction.
3. Prefer existing File Library/recovered assets when they meet the definition; generate only for demonstrated gaps.
4. Do not count procedural references/mockups as stimuli.
5. Once all 16 candidate slots are occupied, run the full-set confound audit.
6. Copy only selected/frozen assets into a PrioLens-owned path and capture immutable hashes.
7. Freeze neutral participant prompt.
8. Freeze choice-commit event.
9. Implement deterministic 28-edge planner with exemplar + position balancing.
10. Implement renderer/preflight and descriptive result trace.
11. Only then freeze protocol/stimulus versions and expose public participation.

## Current repository files

- `/PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`
- `/tools/priolens/README.md`
- `/tools/priolens/index.html`
- `/tools/priolens/config/product-v0.1.json`
- `/tools/priolens/config/protocol-v0.1.json`
- `/tools/priolens/config/stimuli-v0.1.json` — deliberately PENDING / assets null
- `/tools/priolens/config/candidate-inventory-v0.1.json`
- `/tools/priolens/config/generation-candidates-v0.1.json`
- `/tools/priolens/docs/DATA_CONTRACT_v0.1.md`
- `/tools/priolens/docs/ASSET_INVENTORY_v0.1.md`
- `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`
- `/tools/priolens/docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md`
- `/tools/priolens/docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`
- `/tools/priolens/docs/STIMULUS_GENERATION_BRIEFS_v0.1.md`
- `/tools/priolens/docs/GENERATED_CANDIDATE_AUDIT_v0.1.md`
- `/tools/priolens/docs/STIMULUS_LEDGER_v0.1.md` — live candidate decision log
- `/tools/priolens/PROJECT_STATE.md` (this file)

## Recovery instruction

If conversation context is lost, start from this file, then `docs/STIMULUS_LEDGER_v0.1.md`, `docs/DIRECTION_DEFINITIONS_v0.1.md`, `docs/GENERATED_CANDIDATE_AUDIT_v0.1.md`, `docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`, `docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md`, `docs/ASSET_INVENTORY_v0.1.md`, `PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`, and draft PR #9. Do not reconstruct PrioLens from ConflictLab or 2Pair memory. Treat this file as the project source of truth; for candidate-level status, defer to `STIMULUS_LEDGER_v0.1.md`.
