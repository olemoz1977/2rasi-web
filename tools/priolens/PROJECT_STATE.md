# PrioLens project state

Status: ACTIVE RESEARCH / ORIGINAL BASELINE RECOVERED / GALLERY TRIAGE COMPLETE
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Read first

1. `docs/PRODUCT_ARCHITECTURE_INVARIANTS_v0.1.md`
2. `docs/ORIGINAL_PRIOLENS_BASELINE_RECOVERY_v0.1.md`
3. `docs/ORIGINAL_STIMULUS_EXACT_MAPPING_v0.1.md`
4. `docs/GALLERY_CANDIDATE_BANK_PASS_v0.1.md`
5. this file

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

The old red-team stopped the 16-image freeze and recommended a larger independently designed candidate bank. Exactly eight final public scores are not guaranteed. The directions remain working hypotheses.

## Recovery completed · 2026-08-31

User-provided artifacts:
- `priolens_working_beta-4.html`;
- `Gallery.zip`.

`Gallery.zip` contains all `S01.webp` ... `S16.webp` blind-review stimuli.

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

The recovery blocker is CLOSED. Do not ask the user to re-upload the old project or rediscover these mappings.

## Historical red-team status of the 16

Strongest anchors:
- S12 / `mastery-01` — precision measurement / craftsmanship.
- S16 / `mastery-02` — pottery / craftsmanship.

Candidate / rework:
- S01 EXP;
- S02 INF;
- S03 CON;
- S06 CER;
- S08 PRO;
- S14 CON;
- S15 OPP.

Replace / redesign preferred:
- S04 INF;
- S05 AUT;
- S07 OPP;
- S09 EXP;
- S10 CER;
- S11 AUT;
- S13 PRO.

## Gallery triage completed · 2026-08-31

`Gallery.zip` contains 223 image files / 222 byte-unique files. It is a historical generation archive, not a clean stimulus registry.

A full visual pass separated:
- old dark office/WorkStyle atmosphere assets;
- abstract sculpture/geometric experiments;
- repeated path/door/journey families;
- repeated craft/precision families;
- repeated literal-connection families;
- late 2026-08-29/30 action/resource scenes.

Canonical triage: `docs/GALLERY_CANDIDATE_BANK_PASS_v0.1.md`.

### Strongest current small standalone bank

- MAS: S12 caliper precision — KEEP anchor.
- MAS: S16 pottery skill — KEEP anchor.
- INF: irrigation gate feeding several channels — KEEP; strongest new broader-impact candidate.
- INF: local light switch changing wider room state — KEEP candidate.
- CON: S03 dyadic connection — KEEP candidate with face-salience warning.
- CON: two people jointly holding/exchanging a box — KEEP candidate.
- EXP: footprints/trail — KEEP candidate.
- EXP: road/journey through windshield — KEEP candidate.
- PRO: S08 umbrella shielding — KEEP candidate.
- OPP: prepared useful materials on workbench — KEEP; strongest new low-valence opportunity candidate.
- OPP: ripe harvest + empty basket — KEEP candidate with nature/reward warning.
- CER: S06 checklist — KEEP historical semantic anchor with completion-symbol warning.

### Explicit gaps

Do not fill these by quota:
- AUT: no clean KEEP yet.
- CER: no diverse text/symbol-free second KEEP.
- PRO: no diverse second KEEP.
- MAS: domain-diverse third exemplar missing; do not add another handcraft image.
- CON: low-face-salience reciprocal-relation exemplar missing.

### What survives from the recent 10h

The matched Preserve↔Refine architecture is discarded, but some standalone image work survives:
- irrigation/shared-system action → useful INF candidate;
- prepared useful materials → useful OPP candidate;
- ripe harvest + basket → useful OPP candidate;
- local switch affecting a larger room → useful INF candidate;
- X13 cord-coil renders may remain lower-level standalone candidates but are not forced into any old direction.

## Solo research constraint

The user is currently working alone.

Therefore **human semantic validation is not the immediate execution step** and must not become a blocker.

Current solo workflow:
1. ChatGPT + user curate and red-team the candidate bank;
2. AI may be used only as a confound/alternative-reading filter, not as construct validator;
3. user self-checks are sanity checks only because designer intent contaminates them;
4. external human screening is deferred until a compact bank is worth showing, rather than requested image-by-image.

Do not repeatedly tell the user to recruit 10–15 participants during stimulus construction.

## Immediate next action

Do not generate broadly.

Design only against the explicit gaps:
1. AUT — 2–3 standalone concepts showing self-directed control/choice without path/door tropes;
2. CER — 2–3 text-free explicit-state concepts without completion/achievement cues;
3. PRO — 2–3 distinct protection mechanisms not umbrella/case;
4. MAS — 1–2 domain-diverse competence scenes not handcraft;
5. CON — 1–2 low-face-salience reciprocal-relation scenes.

INF and OPP get **no new images yet**; existing late candidates should be screened first.

Do not return to same-scene Preserve↔Refine construction. Do not regenerate historical S01–S16. Do not restart long Claude/Grok consensus loops.

## Research boundary

The main question remains:

> Can materially different standalone exemplars of the same working direction produce a reproducible direction-level choice signal after semantic fit and nuisance cues are controlled?

`KEEP` means only worth carrying forward. It does not authorize scoring and does not validate the old direction.

## AI Review Harness

Vercel harness exists and reaches AI Gateway. Paid execution remains deferred.
