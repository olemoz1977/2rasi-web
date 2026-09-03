# PrioLens Open14 no-repeat 42 transition

Status: ACTIVE OWNER DECISION / NEXT-BANK DESIGN / LIVE v0.2 UNCHANGED
Date: 2026-09-03
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Active asset-package child: `OPEN14_C_PACKAGE_PROVENANCE_2026-09-03.md`

## Decision

The owner approved moving the next PrioLens visual bank from the current 14 families × 2 exemplars to:
- 14 active families;
- 3 unique exemplars per family;
- 42 unique active visual stimuli total;
- each family still appears exactly 3 times in one participant session;
- A, B and C each appear exactly once for that family;
- no exact-image repeat within a participant session.

This is a next-version design decision. It does **not** silently mutate the currently deployed Open14 v0.2 bank or historical v0.2 data.

The public v0.2 bank remains the 28-exemplar `OWNER_FINALIZED_FINAL_AUDIT_PASS` bank until the 42-bank package, planner, versioning and smoke pass.

## Why

The current planner shows every family three times but has only two exemplars, so one exact image must repeat. The current family evidence rule already refuses to treat same-exemplar repetition as family-level evidence.

The 42-bank design removes avoidable within-session exact-image familiarity and gives every family three distinct exemplar opportunities.

This is methodological hardening, not validation and not evidence that visual pull = unmet need.

## Guardrails

Do not claim:
- personality diagnosis;
- subconscious / true-self access;
- fast = true;
- RT = psychological strength;
- visual pull = unmet need;
- a validated complete human-priority taxonomy.

CARE boundary remains frozen:
- visual CARE = proactive care-giving;
- `CARE_SUPPORT_PRESENT` = care/support present or received;
- do not treat them as construct-equivalent.

External recruitment remains CLOSED during this transition.

## Working C set — 2026-09-03

Exact reviewed binaries and hashes are canonical in `OPEN14_C_PACKAGE_PROVENANCE_2026-09-03.md`.

| Family | Proposed C mechanism | Current decision | Main residual risk |
| --- | --- | --- | --- |
| REST | slippers / home-rest cue | KEEP provisional | product/fashion cue; close to home-comfort mechanism |
| RESOURCE | prepared wood / usable materials | KEEP provisional | MASTERY / workshop cross-load |
| SAFETY | fastening seat belt | KEEP | familiar learned safety cue |
| ORDER | organized open drawer | KEEP | ordinary object-order scene |
| CONNECTION | dyadic direct conversation | KEEP | faces/warmth; close to CONNECTION-A |
| BELONGING | shared gaming activity | KEEP | hobby / positive social valence |
| CARE | adult tying a child's shoe | KEEP | caregiver/child context; matches proactive CARE boundary |
| AUTONOMY | choosing one garment from rack | BOUNDARY KEEP | fashion/shopping preference can dominate self-direction |
| CONTROL | mixing / control console | KEEP provisional | lighting / technical/music salience |
| RECOGNITION | teacher/student high-five / directed positive acknowledgement | **BOUNDARY PREFERRED C** | learning/mastery/teacher-student cross-load |
| MASTERY | sewing a button | KEEP | manual-skill domain concentration |
| EXPLORATION | binocular search | KEEP | nature/travel context |
| KNOWLEDGE | active study + notes | KEEP | academic-context cue |
| OPPORTUNITY | open greenhouse with visible productive plants | KEEP | nature/resource/growth valence |

### Recognition correction

The previous loyalty-award candidate is no longer the preferred C.

Owner small/mobile-size review found the transparent award too difficult to notice. That first-glance failure overrides its conceptual appeal.

- old award image `4965.jpg` = HOLD / not final C;
- current comparison C = `4967.jpg` teacher/student high-five;
- `4967` is intentionally labelled a boundary probe, not a clean recognition exemplar.

## Active 28-bank replacement audit

### P0 — challenge first after C package assembly
1. `AUTONOMY-B`
2. `RECOGNITION-B`
3. `REST-A`
4. `RESOURCE-B`
5. `OPPORTUNITY-B`

### P1 — watch; do not replace from theory alone
- `CONNECTION-B`
- `CARE-A`
- `KNOWLEDGE-A`
- `EXPLORATION-B`

### KEEP unless new evidence appears
Current SAFETY A/B, ORDER A/B, BELONGING A/B, CONTROL A/B, MASTERY A/B and other non-flagged slots.

## Replacement rule

Do **not** move C into a weak A/B slot and call the family finished.

For every P0 family:
1. compare current A + current B + proposed C;
2. judge construct fit, ~1 second readability, nuisance salience, cross-loading and mechanism diversity;
3. if current A or B clearly loses, search/select a fourth candidate D specifically for that family;
4. compare A/B/C/D;
5. retire the losing exemplar only when three stronger unique exemplars remain;
6. preserve provenance and version the change.

No replacement is authorized merely because C looks stronger.

## Planner target

Family schedule can remain structurally unchanged:
- 14 triads;
- every family exactly 3 times;
- 3 distinct macro domains per triad;
- no repeated family pair;
- each family once in each screen slot.

Exemplar assignment changes:
- current v0.2: one of A/B repeats;
- next bank: A, B and C each appear exactly once per family.

Per participant:
- 42 total image exposures;
- A = 14, B = 14, C = 14;
- exact-image repeats = 0.

Because 14 is not divisible by 3, one-session exemplar×slot counts cannot be perfectly equal. Target a rotated 5/5/4-type balance and rotate family-specific A/B/C permutations across seed classes so no family acquires a stable exemplar-slot association.

The planner, not DOM/CSS order, owns balancing.

## Versioning boundary

The 42-bank transition requires a new versioned combination of:
- bank / stimulus set;
- exemplar-assignment planner;
- session metadata sufficient to distinguish bank/planner identity;
- analysis filter.

Do not overwrite historical v0.2 identity. Existing v0.2 sessions remain v0.2 observations.

## Execution sequence

1. **C PACKAGE** — exact reviewed binaries and provenance: active in `OPEN14_C_PACKAGE_PROVENANCE_2026-09-03.md`.
2. **A/B/C AUDIT** — inspect every family; challenge P0 first.
3. **D SEARCH ONLY WHERE NEEDED** — do not widen search for families that pass.
4. **FINAL 3×14 FREEZE** — exactly three unique reviewed exemplars per family.
5. **PLANNER PATCH** — one-use A/B/C assignment + slot balancing.
6. **SCHEMA / VERSION PATCH** — keep old v0.2 data separable.
7. **TECHNICAL AUDIT** — geometry, reachability, text/watermark, duplicate hash/pHash, missing assets.
8. **OWNER VISUAL SMOKE** — mobile first-glance review of the complete 42-bank set.
9. **RUNTIME SMOKE** — 14 triads, 42 unique exposures, A/B/C once per family, no exact-image repeat, existing Channel B/result/autosave behavior intact.
10. Only then reconsider external recruitment.

## Explicit non-action

Do not patch live `open14-v02/bank.json` yet.

Live v0.2 remains stable while the next bank is prepared in parallel.