# PrioLens project state

Status: ACTIVE RESEARCH / ORIGINAL STANDALONE BASELINE RECOVERED
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Read first

1. `docs/PRODUCT_ARCHITECTURE_INVARIANTS_v0.1.md`
2. `docs/ORIGINAL_PRIOLENS_BASELINE_RECOVERY_v0.1.md`
3. `docs/ORIGINAL_STIMULUS_EXACT_MAPPING_v0.1.md`
4. this file

Local stimulus failures must not silently redefine product architecture.

## Product boundary

PrioLens is a short visual-choice experience.

Working principle:
> **For Fun, but with Wisdom.**

Public flow:

```text
START
→ two standalone images
→ choose
→ two standalone images
→ choose
→ ...
→ short session mirror
```

The fundamental stimulus unit is **one standalone image**. A trial juxtaposes two independently registered stimuli. It is not a 2Pair-style same-scene matched A/B construction.

Public constraints:
- no mandatory writing or per-choice explanation;
- no personality/diagnosis/hidden-self claim;
- `no_clear_choice` allowed;
- eventual target roughly 2–4 minutes / 12–18 meaningful choices.

## Original architecture recovered

Original PrioLens v0.1 used:
- 8 working directions: AUT, CER, EXP, MAS, CON, INF, PRO, OPP;
- 2 independent standalone visual exemplars per direction;
- 16 active stimuli;
- 28 direction-v-direction edges in the old full research session;
- planner-assembled comparisons from independently registered image assets.

The old red-team stopped the 16-image freeze and recommended a larger independently designed candidate bank, provisionally at least 4 exemplars per direction, followed by human semantic validation before preference testing.

Exactly eight final public scores are not guaranteed. The directions remain working hypotheses.

## Recovery completed · 2026-08-31

User-provided artifacts:
- `priolens_working_beta-4.html`;
- `Gallery.zip`.

`Gallery.zip` contains all `S01.webp` ... `S16.webp` blind-review stimuli.

The beta HTML contains all 16 stable `direction-01/-02` WebP assets embedded as base64.

All sixteen Sxx files were compared byte-for-byte against all sixteen beta assets using SHA-256. Every Sxx had exactly one exact match.

Exact mapping:

| Sxx | Stable beta asset |
| --- | --- |
| S01 | `exploration-01` |
| S02 | `influence-02` |
| S03 | `connection-01` |
| S04 | `influence-01` |
| S05 | `autonomy-01` |
| S06 | `certainty-02` |
| S07 | `opportunity-02` |
| S08 | `protection-01` |
| S09 | `exploration-02` |
| S10 | `certainty-01` |
| S11 | `autonomy-02` |
| S12 | `mastery-01` |
| S13 | `protection-02` |
| S14 | `connection-02` |
| S15 | `opportunity-01` |
| S16 | `mastery-02` |

Canonical evidence: `docs/ORIGINAL_STIMULUS_EXACT_MAPPING_v0.1.md`.

The former recovery blocker is CLOSED. Do not ask the user to re-upload the old project or rediscover these mappings.

## Historical red-team status of the 16

### Strongest anchors
- S12 / `mastery-01` — precision measurement / craftsmanship.
- S16 / `mastery-02` — pottery / craftsmanship.

### Candidate / rework
- S01 / `exploration-01` — REWORK / retest.
- S02 / `influence-02` — REWORK / retest; domino causality.
- S03 / `connection-01` — candidate only; faces/social salience.
- S06 / `certainty-02` — REWORK / retest; checklist/completion leakage.
- S08 / `protection-01` — REWORK / retest; staging/mood risk.
- S14 / `connection-02` — REWORK / retest; CON/INF ambiguity.
- S15 / `opportunity-01` — provisional only; nature/positive-valence confound.

### Replace / redesign preferred
- S04 / `influence-01` — mechanical/system cross-load.
- S05 / `autonomy-01` — autonomy not robustly foregrounded.
- S07 / `opportunity-02` — food/reward dominated.
- S09 / `exploration-02` — sharp semantic disagreement.
- S10 / `certainty-01` — ambiguous container scene.
- S11 / `autonomy-02` — autonomy depends on inferred context.
- S13 / `protection-02` — protected object value/fragility unclear.

## Important methodological boundary

AI review is only a concept/confound filter. It does not validate a construct.

Before pairwise preference testing, standalone images must be screened independently with humans for:
- blind open-ended meaning;
- intended-direction hit / neighbour confusion;
- valence/aesthetic pull;
- faces/social salience;
- food/nature/reward cues;
- complexity/completion/expertise confounds.

The main research question remains:

> Can materially different standalone exemplars of the same working direction produce a reproducible direction-level choice signal after semantic fit and nuisance cues are controlled?

## Gallery ZIP

`Gallery.zip` is a large historical generation archive (~223 files), not a clean PrioLens registry. It contains:
- the exact S01–S16 blind set;
- many earlier/later generated iterations;
- likely unrelated 2rasi visual work.

Do not assume every Gallery image belongs to PrioLens. Use S01–S16 as the verified bridge, then classify other Gallery images by visual/content provenance before reusing them.

## Immediate next action

Recovery is complete enough to stop archaeology.

Next:
1. treat S12 and S16 as historical MAS anchors, not final validated items;
2. review the Gallery archive for additional **standalone** candidate exemplars that may diversify the eight working directions;
3. separate genuinely different exemplars from mere render iterations/duplicates;
4. build a candidate bank with approximately 4 materially different scenes per promising direction;
5. then run a small human standalone semantic screen before any new preference session.

Do not return to same-scene Preserve↔Refine pair construction. Do not regenerate historical S01–S16. Do not restart long Claude/Grok consensus loops.

## Historical drift evidence only

Recent X12/X13 Preserve↔Refine work remains useful only as evidence that matched-scene pressure can force artificial scenes. It is not the active PrioLens architecture.

## AI Review Harness

Vercel harness exists and reaches AI Gateway. Paid execution remains deferred.
