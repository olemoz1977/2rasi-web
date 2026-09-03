# Open14 v0.3 MOST+LEAST migration — source PASS

Date: 2026-09-03
Status: SOURCE PASS / DEPLOYMENT PENDING / EXTERNAL RECRUITMENT CLOSED

## Decision

The active Open14 v0.3 preview protocol is migrated from the temporary positive-only interaction to the previously owner-tested MOST+LEAST interaction:

1. choose the image that pulls first;
2. lock that MOST choice;
3. from the two remaining images choose the one that pulls least, or choose the explicit tie option;
4. if there is no clear MOST choice, LEAST is not collected for that triad.

This does not change live Open14 v0.2.

The previous owner Rank v0.2 prototype is the interaction donor. The 42-image no-repeat bank, v0.2 family planner and v0.3 three-exemplar assigner remain unchanged.

## Protocol identity

Active session schema:
`2rasi.priolens.open14.rank-session-v0.3`

Draft key base:
`priolens.open14.v03.rank.draft`

This separate identity is intentional. Earlier positive-only v0.3 sessions using `2rasi.priolens.open14.session-v0.3` must not be pooled with MOST+LEAST sessions.

No participant-facing MOST-minus-LEAST score is introduced. MOST and LEAST remain separate observations. Any balance field is diagnostic only.

## Runtime source

Repository: `olemoz1977/omesg360`
Branch: `feature/priolens-open14-v03`

Generation chain:
1. `priolens/open14-v03/build_from_v02.mjs`
2. `priolens/open14-v03/apply_rank_v03.mjs`
3. `priolens/open14-v03/apply_rank_v03_result.mjs`
4. generated `priolens/open14-v03/index.html`

Implemented:
- MOST lock before LEAST;
- LEAST restricted to the remaining two images;
- explicit LEAST tie;
- `pendingMost` local/API checkpoint so reload between MOST and LEAST resumes the same phase;
- separate LEAST family/exemplar repetition evidence;
- separate result section for images that remained in the background;
- LEAST-aware comparison/reflection scenarios `LOW_LEAST` and `HIGH_LEAST`;
- bilingual locked-choice marker LT `PIRMAS` / EN `FIRST`;
- CARE visual-giving versus received/present-support boundary preserved.

## Source gates — PASS

Build + 42-bank invariant run:
`33763964338` = SUCCESS.

It passed:
- guarded positive-only -> MOST+LEAST transform;
- guarded LEAST-aware result transform;
- 1000-seed 42-bank/no-repeat smoke;
- rank identity guards;
- generated index commit.

Rank source/API contract run:
`33763878138` = SUCCESS.

It verified before DB configuration:
- PHP syntax for final/progress validators;
- valid rank final reaches backend configuration boundary;
- valid progress with `pendingMost` reaches backend configuration boundary;
- earlier positive-only v0.3 schema is rejected;
- LEAST cannot equal MOST;
- invalid `pendingMost` is rejected.

## Backend source

Separate v0.3 API sources now accept only:
`2rasi.priolens.open14.rank-session-v0.3`

Final validator additionally requires MOST+LEAST consistency and no remaining `pendingMost`.
Progress validator accepts a valid `pendingMost` checkpoint between the two visual decisions.

The existing database table can still be used because `session_schema` separates protocol identities.

## Deployment status

The existing Hostinger v0.3 preview directories still contain the earlier positive-only deployed version until explicitly overwritten:
- `/priolens-open14-v03-api/`
- `/priolens-open14-v03/`

Therefore earlier positive-only deployed smoke runs are historical evidence only. They do not close the active MOST+LEAST deployment gates.

Prepared packages:
- MOST+LEAST API package: prepared, not yet deployed;
- MOST+LEAST participant package: prepared, not yet deployed.

Required order:
1. overwrite only the v0.3 API preview files, preserving its existing `config.php`;
2. run dedicated deployed MOST+LEAST API smoke;
3. if PASS, overwrite only the v0.3 participant preview files;
4. run dedicated deployed MOST+LEAST participant Chromium smoke;
5. owner mobile visual/interaction smoke;
6. only then consider any live replacement.

Live v0.2 remains unchanged. External recruitment remains CLOSED.
