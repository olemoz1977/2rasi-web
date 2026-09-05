# PrioLens v0.4 — matrix-primary result freeze

Status: DEPLOYED TECHNICAL PASS / OWNER REAL-PHONE VISUAL REVIEW
Date: 2026-09-05

## Decision

The 12×12 relationship matrix is now the **primary participant-facing result**.

The ship and map cards are **deactivated from the normal participant flow**.

They remain in the runtime DOM only as:
- an internal host for the already-built detail content;
- an emergency fallback if the matrix result module itself cannot render.

They are not a normal result step and must not be shown before/after the matrix.

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
- the result screen runs in `detailOnlyHost`;
- the ship/map scene is CSS-hidden;
- closing returns to the matrix.

### Antro atsakymo detalės

Uses the existing Channel-B detail content:
- selected/current lowest-sufficiency area(s);
- current item detail text;
- provenance: how the area was singled out;
- no-route explanation when applicable.

When opened from the matrix:
- the result screen runs in `detailOnlyHost`;
- the ship/map scene is CSS-hidden behind the detail sheet;
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
