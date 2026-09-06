# PrioLens v0.4 — matrix-primary result freeze

Status: DEPLOYED / LEGACY RESULT VISUALS REMOVED / DETAIL-ONLY RUNTIME
Date: 2026-09-05

## Decision

The 12×12 relationship matrix is now the **primary participant-facing result**.

The earlier ship/map result scene has now been **removed from the runtime DOM and public renderer**.

A/B detail content remains, but it is hosted directly as detail-only UI:
- first-glance detail = dedicated routed detail view;
- second-answer detail = viewport-root bottom sheet over the matrix;
- matrix-render failure = generic saved-result error state, not an alternate visual result.

## Result flow

1. Channel A MOST + LEAST
2. A+ when required
3. Channel B sufficiency
4. B+ when required
5. final save starts
6. **12×12 relationship matrix**
7. optional:
   - **Pirmo žvilgsnio detalės**
   - **Antro atsakymo detalės**
   - **Išsaugoti PDF**
   - **Atlikti dar kartą**
   - **Grįžti į 2rasi**

There is no longer a participant-facing **Toliau į rezultatą** transition to the ship/map scene.

Completed-result restore opens the matrix directly.

## Detail behavior

The existing information is preserved.

### Pirmo žvilgsnio detalės

Uses the existing Channel-A detail content:
- focus provenance;
- exact repetition explanation;
- focus exemplars in the reflection block;
- participant self-explanation;
- exact 3/3 LEAST/background evidence.

When opened from the matrix:
- the detail-only result host opens directly;
- no obsolete result scene exists behind it;
- closing returns to the matrix.

### Antro atsakymo detalės

Uses the existing Channel-B detail content:
- selected/current lowest-sufficiency area(s);
- current item detail text;
- provenance: how the area was singled out;
- no-route explanation when applicable.

When opened from the matrix:
- the detail content is rendered into a viewport-root bottom sheet;
- the matrix remains visible behind it;
- closing returns to the matrix.

## Matrix actions

Visible below the matrix:
- `Pirmo žvilgsnio detalės`
- `Antro atsakymo detalės`
- `Išsaugoti PDF`
- `Atlikti dar kartą`
- `Grįžti į 2rasi`

Removed:
- `Toliau į rezultatą`

## Methodological boundary

This change is presentation-only.

Unchanged:
- 14 Channel-A visual families;
- 12 Channel-B sufficiency areas;
- MOST and LEAST stored/analyzed separately;
- A+/B+ rules;
- DIRECT / RELATED / BRIDGE construct-map semantics;
- no causal A→B interpretation;
- no need-strength encoding.

## Runtime implementation

Implementation repo:
`olemoz1977/omesg360`
branch:
`feature/priolens-open14-v04`

Key files:
- `priolens/open14-v04/result_matrix_v04.mjs`
- `priolens/open14-v04/result_renderer_v04.mjs`
- `priolens/open14-v04/result_shell_v04.mjs`
- `priolens/open14-v04/build_from_v031.mjs`

## Technical evidence

Latest structural-cleanup deployment:
- runtime SHA: `e2d10c3908057a5be7c71dacc0b5936481c2643b`;
- logic smoke: `34007584761` SUCCESS;
- local 390×844 UI smoke: `34007584748` SUCCESS;
- deployed 390×844 owner-flow/API/source-clean smoke: `34007584760` SUCCESS;
- live HTML/public renderer obsolete-visual token checks: PASS;
- A detail, B detail, PDF, browser Back and completed-result restore: PASS.

Historical matrix-primary deployment evidence follows.


Final deployment:
- GitHub Actions run: `33957908985`
- result: **SUCCESS**
- source/build gates: PASS
- isolated v0.4 API: PASS
- live byte/MIME checks: PASS
- real deployed 390×844 matrix-primary flow: PASS
- A-detail opens from matrix while ship/map scene remains hidden: PASS
- A-detail closes back to matrix: PASS
- B-detail opens from matrix while ship/map scene remains hidden: PASS
- B-detail closes back to matrix: PASS
- completed result restores directly to matrix: PASS
- multiple B endpoints remain untruncated in matrix: covered by local smoke
- live v0.2 remains unchanged.

## Supersession

This decision supersedes the earlier v0.4 flow in which:
`matrix → Toliau į rezultatą → ship/map world`.

The earlier ship/map visual work remains historical implementation evidence, not the current participant-facing result architecture.
