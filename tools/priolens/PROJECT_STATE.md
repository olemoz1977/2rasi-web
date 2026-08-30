# PrioLens project state

Status: ACTIVE RESEARCH / FRAMEWORK + STIMULUS REDESIGN / FREEZE STOPPED
Updated: 2026-08-30
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9
Public target: `https://2rasi.com/tools/priolens/` and `https://2rasi.lt/tools/priolens/`

## Product boundary

- PrioLens is a new 2rasi-native product, not a ConflictLab revival.
- 2Pair remains frozen.
- No runtime dependency on `omesg360.eu`.
- Intended promise remains narrow and descriptive: repeated pairwise choices may clarify which competing direction took precedence in this session and with these stimuli.
- No diagnosis, subconscious/hidden-needs, personality-type, employment-suitability or validated-trait claims.

Working public wording remains provisional:

- EN: `When two things matter, what takes priority?`
- LT: `Kai svarbūs abu, kam teiki pirmenybę?`

## Eight working directions

- AUT: Autonomy / Pasirinkimo laisvė
- CER: Certainty / Aiškumas
- EXP: Exploration / Tyrinėjimas
- MAS: Mastery / Meistriškumas
- CON: Connection / Ryšys
- INF: Influence / Poveikis
- PRO: Protection / Apsauga
- OPP: Opportunity / Galimybė

Source: `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`

Status: INTERNAL WORKING CONTRACT / NOT VALIDATED CONSTRUCTS.

## Framework under review

The original architecture used:

- 8 directions;
- 2 exemplars per direction;
- 16 active stimuli;
- complete 8-direction tournament `C(8,2) = 28` core trials;
- one exemplar combination per direction edge per participant;
- descriptive result only.

After independent adversarial review, **2 exemplars per direction are no longer considered sufficient for a freeze-ready research architecture**. A larger rotating candidate pool, provisionally at least 4 materially different exemplars per direction, is under consideration so direction effects can be separated from exemplar effects.

The 28-edge tournament itself remains a framework hypothesis, not a rejected or frozen design. It does not require transitivity or a strict 1–8 ranking.

## Presentation / data rules that still stand

- vertical top/bottom presentation;
- equal 1:1 frames;
- both visible simultaneously;
- `object-fit: contain`;
- no scrolling during measured trial;
- top/bottom randomized/counterbalanced independently from direction;
- unsupported viewport fails preflight;
- preload + decode before measured timing;
- `performance.now()` for mechanical latency diagnostics only;
- exact choice-commit event still unresolved.

Participant result boundary remains descriptive:

- raw observed selections / wins may be shown only with appropriate caveats;
- pairwise trace/matrix is allowed;
- ties and intransitive cycles must remain visible rather than forced into false precision;
- no latency-derived psychological score;
- no combined choice+latency score;
- no validated latent-trait claim.

## Red-team checkpoint

Source: `/tools/priolens/docs/RED_TEAM_SYNTHESIS_v0.1.md`

Independent blind reviews by Kimi, Gemini and Claude found enough semantic disagreement and direction-specific confounding to invalidate the previous assumption that the current 16 were close to freeze.

Immediate decision:

**STOP stimulus freeze. CONTINUE research. REDESIGN stimulus architecture before external preference collection.**

The current 16 may remain as research references/candidates, but they are no longer a freeze-ready set.

Strongest surviving question:

> Can materially different exemplars of the same direction produce a reproducible direction-level choice signal after semantic fit and low-level visual confounds are controlled?

If not, PrioLens should stop or be reframed as an image-preference reflection task rather than a direction-level priority trace.

## Current blocker boundary

The active blocker is no longer cosmetic cleanup.

There are now two upstream blockers:

1. **Framework validity:** even with ideal stimuli, is the narrow direction-level descriptive inference defensible and empirically falsifiable?
2. **Stimulus operationalization:** can the eight directions be represented by materially different visual exemplars without direction-specific modality/valence/salience confounds?

Do not spend major effort polishing the current 16 until these questions are addressed.

## Current review protocols

- `/tools/priolens/docs/RED_TEAM_REVIEW_PROTOCOL_v0.1.md` — stimulus/method adversarial review.
- `/tools/priolens/docs/FRAMEWORK_RED_TEAM_PROTOCOL_v0.1.md` — framework-only review assuming ideal stimuli.
- `/tools/priolens/docs/RED_TEAM_SYNTHESIS_v0.1.md` — current synthesis and freeze-stop decision.

## Next priority work

1. Run an independent **framework-only adversarial review** without current images or prior red-team conclusions.
2. Separate logical framework flaws from empirical uncertainties and reviewer criticisms that do not apply to the stated protocol.
3. Decide whether the 8-direction / pairwise-tradeoff framework survives before rebuilding a large stimulus library.
4. If it survives, design a broader stimulus candidate architecture, provisionally >=4 materially different exemplars per direction.
5. Run human semantic validation before preference testing:
   - blind open-ended image meaning;
   - mapping to direction definitions only after open coding;
   - intended-direction hit / neighbour-confusion / confound ratings.
6. Quantify low-level visual features and categorical confounds.
7. Only after semantic screening run balanced pairwise preference research.
8. Retain exemplar IDs and model participant, direction, exemplar and presentation effects separately.
9. Add descriptive intransitive-triad diagnostics.
10. Freeze protocol/stimuli only if the direction-level signal survives these tests.

## Current repository files

Key current files:

- `/PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md` — original draft architecture; now partially superseded by red-team decisions.
- `/tools/priolens/config/protocol-v0.1.json` — draft protocol scaffold, not externally frozen.
- `/tools/priolens/config/stimuli-v0.1.json` — PENDING / no frozen hashes.
- `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`
- `/tools/priolens/docs/STIMULUS_LEDGER_v0.1.md` — historical/current-candidate ledger, not a freeze.
- `/tools/priolens/docs/FULL_SET_AUDIT_v0.1.md` — superseded on freeze-readiness by red-team synthesis.
- `/tools/priolens/docs/RED_TEAM_SYNTHESIS_v0.1.md`
- `/tools/priolens/docs/FRAMEWORK_RED_TEAM_PROTOCOL_v0.1.md`
- `/tools/priolens/PROJECT_STATE.md`

## Recovery instruction

If conversation context is lost, start from this file, then `docs/RED_TEAM_SYNTHESIS_v0.1.md`, `docs/FRAMEWORK_RED_TEAM_PROTOCOL_v0.1.md`, `docs/DIRECTION_DEFINITIONS_v0.1.md`, and only then the older stimulus ledger/full-set audit and draft architecture. Do not reconstruct PrioLens from ConflictLab or 2Pair memory.
