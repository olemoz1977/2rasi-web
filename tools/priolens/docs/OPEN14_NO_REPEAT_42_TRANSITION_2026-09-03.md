# PrioLens Open14 no-repeat 42 transition

Status: ACTIVE OWNER DECISION / NEXT-BANK DESIGN / LIVE v0.2 UNCHANGED
Date: 2026-09-03
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Decision

The owner approved moving the next PrioLens visual bank from the current 14 families × 2 exemplars to:

- 14 active families;
- 3 unique exemplars per family;
- 42 unique active visual stimuli total;
- each family still appears exactly 3 times in one participant session;
- each of that family's three exemplars appears exactly once in that session;
- therefore no exact-image repeat is required within a session.

This is a next-version design decision. It does **not** silently mutate the currently deployed Open14 v0.2 bank or historical v0.2 data.

The current public v0.2 bank remains the 28-exemplar `OWNER_FINALIZED_FINAL_AUDIT_PASS` bank until the 42-bank package, planner and schema transition pass their own audit and smoke.

## Why the change is justified

The current v0.2 planner shows each family three times but has only two exemplars, so one exemplar must repeat. The current family-level evidence rule already rejects same-exemplar repetition as family-level evidence.

The no-repeat design removes that avoidable within-session exact-image repetition and gives every family three independent exemplar opportunities before family-level repetition is considered.

This change is methodological hardening. It is not a claim that three exemplars validate a family or that visual pull measures an unmet need.

## Current research guardrails remain unchanged

Do not claim:
- personality diagnosis;
- subconscious or true-self access;
- fast = true;
- RT = psychological strength;
- visual pull = unmet need;
- a validated complete human-priority taxonomy.

CARE boundary remains frozen:
- visual CARE = proactive care-giving;
- `CARE_SUPPORT_PRESENT` = care/support present or received;
- do not treat them as construct-equivalent.

External recruitment remains CLOSED during this transition.

## Working third-exemplar shortlist

The 2026-09-03 owner working shortlist is the basis for the first 42-bank candidate package.

| Family | Proposed C mechanism | Current decision | Main residual risk |
| --- | --- | --- | --- |
| REST | slippers / home-rest cue | KEEP, provisional | may be close to existing home-comfort mechanism |
| RESOURCE | prepared wood/material blocks | KEEP, provisional | MASTERY / workshop cross-load |
| SAFETY | fastening seat belt | KEEP | familiar safety cue but distinct mechanism |
| ORDER | organized open drawer | KEEP | ordinary object-order scene |
| CONNECTION | dyadic direct conversation | KEEP | face/social salience; close to CONNECTION-A |
| BELONGING | shared gaming activity | KEEP | positive social valence |
| CARE | adult tying a child's shoe | KEEP | caregiver/child context; still matches proactive CARE boundary |
| AUTONOMY | choosing one garment from a rack | BOUNDARY KEEP | shopping/fashion preference can dominate general self-direction |
| CONTROL | control/mixing console | KEEP, provisional | lighting / visual salience |
| RECOGNITION | directed loyalty-award scene | BOUNDARY KEEP | achievement/status and visible award/text cues |
| MASTERY | sewing a button | KEEP | another manual-skill scene, though different from measurement/pottery |
| EXPLORATION | binocular search | KEEP | travel/nature context possible |
| KNOWLEDGE | active study + notes | KEEP | academic-context cue |
| OPPORTUNITY | open greenhouse with visible productive plants | KEEP | nature/resource/growth valence |

Twelve families are practically closed for a first C-package. AUTONOMY and RECOGNITION are usable boundary probes, not clean exemplars.

## Active 28-bank replacement audit

The owner also approved the 2026-09-03 review of the currently active A/B set.

### P0 — reopen for direct comparison after C package is assembled

1. `AUTONOMY-B`
2. `RECOGNITION-B`
3. `REST-A`
4. `RESOURCE-B`
5. `OPPORTUNITY-B`

### P1 — watch, but do not replace from theory alone

6. `CONNECTION-B`
7. `CARE-A`
8. `KNOWLEDGE-A`
9. `EXPLORATION-B`

### KEEP unless new evidence appears

Current SAFETY A/B, ORDER A/B, BELONGING A/B, CONTROL A/B, MASTERY A/B and the other non-flagged active slots.

## Replacement rule

Do **not** move a C candidate into a weak A/B slot and call the family finished.

Reason: that would again leave the family with only two strong unique exemplars and recreate the same third-exemplar problem.

For every P0 family:

1. assemble current A + current B + proposed C side by side;
2. compare construct fit, one-second readability, nuisance salience, cross-loading and mechanism diversity;
3. if current A or B clearly loses, search/select a fourth candidate `D` specifically for that family;
4. compare A/B/C/D;
5. retire the losing old exemplar only when three stronger unique exemplars remain;
6. preserve provenance and version the replacement.

No P0 replacement is authorized merely because a current C is stronger.

## Planner target for the no-repeat bank

The 14-triad family schedule can remain structurally unchanged:

- 14 triads;
- each family appears exactly 3 times;
- 3 distinct macro domains per triad;
- no repeated family pair;
- each family once in each screen slot.

Exemplar assignment changes:

- old v0.2: one exemplar appears twice and the other once;
- next bank: A, B and C each appear exactly once per family.

Per participant session:
- 42 total image exposures;
- A total = 14;
- B total = 14;
- C total = 14;
- exact-image repeats = 0.

Because 14 is not divisible by 3, global exemplar-by-slot counts cannot be perfectly equal in one session. Target the balanced matrix:

| exemplar | slot 0 | slot 1 | slot 2 | total |
| --- | ---: | ---: | ---: | ---: |
| A | 5 | 5 | 4 | 14 |
| B | 4 | 5 | 5 | 14 |
| C | 5 | 4 | 5 | 14 |

Equivalent rotations are acceptable. Across seed classes / consecutive allocations, rotate family-specific A/B/C permutations so a family does not acquire a stable exemplar-slot association.

The planner, not DOM/CSS order, owns this balancing.

## Versioning boundary

The 42-bank transition requires a new versioned combination of:
- bank/stimulus set;
- exemplar assignment planner;
- session schema metadata if necessary to distinguish the bank/planner combination;
- analysis filter.

Do not overwrite historical v0.2 identity. Existing v0.2 sessions remain v0.2 observations.

Exact next public version label is not frozen by this document; the implementation must bump the relevant bank/planner version before any external data collection.

## Execution sequence

1. **C PACKAGE** — resolve exact source/provenance/runtime-ready asset for all 14 proposed C exemplars.
2. **42 SIDE-BY-SIDE AUDIT** — inspect each family as A/B/C, with P0 families explicitly challenged.
3. **P0 D SEARCH ONLY WHERE NEEDED** — do not widen search for families that already pass.
4. **FINAL 3×14 FREEZE** — retain exactly three unique reviewed exemplars per family.
5. **PLANNER PATCH** — replace repeated-index logic with one-use A/B/C assignment and slot balancing.
6. **SCHEMA / VERSION PATCH** — keep old v0.2 data separable.
7. **TECHNICAL AUDIT** — geometry, reachability, text/watermark, duplicate hash/pHash, missing assets.
8. **OWNER VISUAL SMOKE** — mobile first-glance check of the complete 42-bank set.
9. **RUNTIME SMOKE** — verify 14 triads, 42 unique exposures, A/B/C once per family, no exact-image repeat, existing Channel B/result/autosave behavior intact.
10. Only after that reconsider external recruitment.

## Explicit non-action

Do not patch the live `open14-v02/bank.json` to 42 items yet.

The third-exemplar assets do not yet have a single audited runtime-ready provenance package, and P0 replacement decisions intentionally require A/B/C comparison plus D only where needed.

Live v0.2 remains stable while the next bank is prepared in parallel.
