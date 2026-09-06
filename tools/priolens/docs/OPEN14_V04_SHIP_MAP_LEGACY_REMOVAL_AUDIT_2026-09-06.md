# PrioLens v0.4 — ship/map legacy removal audit and safe migration plan

Status: PREPARED / NO RUNTIME MUTATION YET  
Date: 2026-09-06

## Baseline

Implementation repo:
`olemoz1977/omesg360`

Implementation branch:
`feature/priolens-open14-v04`

Audited implementation SHA:
`660ec63f19cc0288b4ebc7bd1f0a2e426900b246`

Green baseline runs:
- logic smoke: `33986214555` SUCCESS
- local 390×844 UI smoke: `33986214562` SUCCESS
- deployed owner-preview/API/full-flow smoke: `33986214567` SUCCESS

Architecture repo:
`olemoz1977/2rasi-web`

Architecture branch baseline:
`c94b8d239733186d70118755b4ed460c2f45f572`

No implementation/runtime mutation was made during this audit.

## Executive finding

The ship/map layer is not merely dead hidden markup.

It is a **hidden compatibility architecture** that still participates in:
1. the generated participant DOM;
2. result-detail rendering;
3. URL/detail routing;
4. matrix-render fallback;
5. bootstrap localization assumptions;
6. smoke tests;
7. deploy workflow gates.

Therefore deleting only `shipCard` / `mapCard` from HTML would break v0.4.

At the same time, keeping this layer is now harmful:
- crawlers/LLMs can inspect hidden HTML and describe obsolete SHIP/MAP semantics;
- stale route/map wording has already leaked into participant detail copy;
- the transformed hidden result host caused the B-detail viewport/PDF/back freeze bug;
- current source-of-truth says matrix is primary and ship/map participant flow is deactivated.

Conclusion:
**remove ship/map structurally, but preserve the A/B detail semantics and current result-state contracts.**

## Current dependency chain

```
open14-v03/index.html baseline
        ↓
build_from_v031.mjs
        ↓ imports RESULT_WORLD_HTML / RESULT_WORLD_CSS
result_shell_v04.mjs
        ↓ generated hidden result host includes
shipCard + mapCard + attentionDetail + suffDetail + old result actions
        ↓
result_renderer_v04.mjs
        ↓
renderResultWorldV04()
  ├─ renders ship scene
  ├─ renders map scene
  ├─ renders A detail
  └─ renders B detail
        ↓
build_from_v031.mjs
openMatrixDetail()
        ↓
matrix actions open details through the legacy renderer
```

## Exact active dependencies

### 1. `result_shell_v04.mjs`

Currently contains participant-invisible but crawler-visible:
- `#shipCard`
- `#shipFocus`
- `#shipPlaceholder` = `LAIVAS`
- ship SVG
- water band
- `#mapCard`
- `#mapRoute`
- `#mapPlaceholder` = `ŽEMĖLAPIS`
- `#needsMapStage`
- ship/map detail buttons
- all ship/map CSS and map-land styling.

The same file also contains the still-needed:
- `#attentionDetail`
- `#suffDetail`
- A reflection/research mounts
- B detail/research mounts.

### 2. `result_renderer_v04.mjs`

This is the main coupling point.

`renderResultWorldV04()` uses strict `q(id)` lookups. Missing any required scene ID throws.

Scene-only dependencies:
- `firstLabel`
- `firstHeading`
- `secondLabel`
- `secondHeading`
- `shipFocus`
- `shipPlaceholder`
- `shipTap`
- `mapPlaceholder`
- `mapRoute`
- `mapTap`
- `needsMapStage`
- `worldSeparationNote`
- `shipDetailsButton`
- `mapDetailsButton`.

Still-needed detail dependencies:
- `attentionDetail`
- `attentionBack`
- `attentionDetailTitle`
- `repeatRows`
- `attentionNote`
- `leastHeading`
- `leastRows`
- `leastNote`
- `compareLabel`
- `compareHeading`
- `compareRows`
- `attentionResearch`
- `suffDetail`
- `suffDetailTitle`
- `suffDetailClose`
- `suffRows`
- `suffResultNote`
- `suffResearch`.

Map-only code that becomes dead after decoupling:
- `NEED_MAP`
- route drawing/scheduling for the visual map
- land SVG generators
- `renderNeedsMap()`
- coastline/terrain/pin rendering
- ship/map copy keys such as `ship`, `map`, `separate`.

### 3. `build_from_v031.mjs`

Current matrix detail flow still routes through the legacy renderer:

`openMatrixDetail('attention')`
- shows `#result`;
- calls `renderResult(true)`;
- opens attention detail.

`openMatrixDetail('sufficiency')`
- calls `renderResult(true)`;
- portals `#suffDetail` to `document.body`;
- opens sufficiency detail.

Current matrix failure path is also legacy:
- if matrix render fails, `showPreResultMatrix()` explicitly falls back to `show('result') + renderResult(false)`;
- that fallback is the old ship/map result world.

Build-time gates currently require ship/map:
- `id="needsMapStage"`
- `class="resultScene"`
- `id="shipDetailsButton"`
- `id="mapDetailsButton"`.

### 4. inherited v0.3 bootstrap assumptions

The v0.4 build starts from `open14-v03/index.html`.

Its `applyStaticLanguage()` still directly accesses old result IDs:
- result heading/lead/save status;
- first/second labels/headings;
- compare label/heading;
- restart/back/export/debug controls.

Therefore removing old result-shell IDs without patching this inherited bootstrap would cause a boot-time JS error before the experiment starts.

This is a critical removal dependency.

### 5. `result_matrix_v04.mjs`

The matrix itself does **not** need ship/map.

It needs:
- current state/model;
- A/B detail callbacks;
- PDF callback;
- restart callback;
- back URL.

Do not confuse matrix `routeCell` / B endpoint grammar with the old visual map.

### 6. tests

Current smoke tests deliberately assert the hidden legacy scene exists and stays hidden:
- `ui_smoke_v04.mjs`
- `deployed_real_smoke_v04.mjs`

Examples:
- `ship/map scene visible behind matrix attention detail`
- final PASS copy says `hidden ship/map`.

These tests must be inverted:
- ship/map DOM must be absent;
- details must still work.

### 7. deploy workflow

`.github/workflows/deploy-priolens-open14-v04-owner-preview.yml` currently requires:
- `id="shipCard"`
- `id="mapCard"`.

The workflow also deploys `result_renderer_v04.mjs` as a public module.

Important operational point:
the FTP step uploads files but is not a mirror-delete deployment.

Safest consequence:
**retain the existing public filename `result_renderer_v04.mjs` during the first cleanup and overwrite it with detail-only code.**
Do not rename it in the first migration, otherwise the old public renderer file could remain reachable on the server.

`result_shell_v04.mjs` is build-time source and is not deployed as a public module.

## What must be removed

From generated participant HTML:
- `shipCard`
- `mapCard`
- `shipPlaceholder`
- `mapPlaceholder`
- `needsMapStage`
- `shipFocus`
- ship SVG
- water band
- ship/map native detail buttons
- all ship/map scene markup.

From build-time presentation CSS:
- ship scene styles;
- water styles;
- needs-map styles;
- land/coast/terrain/pin/visual-route styles;
- mobile ship/map media-query rules.

From renderer:
- ship/map copy keys;
- ship/map DOM writes;
- ship/map aria/button wiring;
- needs-map visual data and render functions;
- map route drawing/scheduling.

From control flow:
- matrix-render fallback to ship/map.

From tests/workflow:
- all positive requirements that ship/map exist;
- all tests whose success criterion is only that ship/map remains hidden.

## What must NOT be removed blindly

The word **route** is overloaded.

These are current protocol/data concepts, not the old map visual:
- `state.sufficiencyRoute`
- `B_NO_LOW_ROUTE`
- `B_DIRECT_UNIQUE_MIN`
- `B_PLUS_SELECTED`
- `B_PLUS_SIMILAR`
- `B_PLUS_HARD_TO_SAY`
- matrix B endpoint cells / current insufficiency endpoint grammar.

Do not mass-replace or delete every identifier containing `route`.

Also preserve:
- `result_world_v04.mjs` semantic model unless a separate migration explicitly replaces its schema;
- A detail content;
- B detail content;
- research parallels;
- A self-explanation persistence;
- A+ noClear behavior;
- B multi-endpoint behavior;
- result restore;
- PDF;
- final API payload/schema.

## Recommended migration

### Commit 1 — decouple bootstrap and matrix controls

Before deleting DOM:
1. stop using hidden `#restart` as the matrix restart implementation;
2. implement matrix restart directly from current clear-result/reload logic;
3. compute the matrix back URL directly from `FROM_2RASI/LANG`, not hidden `#back2rasi`;
4. patch inherited `applyStaticLanguage()` so it no longer requires ship/map/result-scene IDs;
5. replace the matrix-failure fallback with a small generic result error/retry state, not ship/map.

Gate:
- full v0.4 flow unchanged;
- matrix, details, PDF, restart, back still PASS.

### Commit 2 — convert result shell to detail-only host

Keep the filename `result_shell_v04.mjs` for this migration.

Replace its content with:
- minimal `#result` attention-detail host;
- `#attentionDetail`;
- `#suffDetail`;
- required research/reflection mounts;
- generic result-error mount if required;
- detail-only CSS.

Delete the whole ship/water/map scene.

Gate:
generated HTML must contain zero:
- `shipCard`
- `mapCard`
- `shipPlaceholder`
- `mapPlaceholder`
- `needsMapStage`
- `resultScene`
- `LAIVAS`
- `ŽEMĖLAPIS`.

### Commit 3 — make renderer detail-only

Keep the public filename `result_renderer_v04.mjs` initially so the deploy overwrites the existing remote module.

Refactor `renderResultWorldV04()` into detail-only behavior internally:
- build the same `buildResultWorldModel(state)`;
- render A detail;
- render B detail;
- maintain detail URL/back/close behavior;
- maintain self-explanation persistence callbacks.

Delete:
- `NEED_MAP`;
- map rendering;
- ship rendering;
- visual route scheduling;
- scene button wiring;
- ship/map copy.

Optional after stabilization:
rename the exported function/module in a later cleanup. Do not combine renaming with structural removal.

### Commit 4 — invert tests and deploy gates

Build gates must require **absence**, not presence.

Local generated HTML:
- ship/map forbidden-token scan PASS.

Public renderer source:
- ship/map visual identifiers forbidden-token scan PASS.

Keep positive gates for:
- matrix;
- A detail;
- B detail;
- PDF;
- restart;
- back;
- API.

Update UI smoke:
- `.resultScene` count = 0;
- A detail opens from matrix;
- A detail closes/back returns to matrix;
- B detail is viewport-root fixed sheet;
- B detail Close works;
- browser/Android Back works;
- PDF never includes detail sheet;
- reload restore works;
- A+ noClear works;
- B multi-endpoint works.

Update deployed smoke with the same assertions.

### Commit 5 — clean deploy and crawler-facing source check

Deploy isolated v0.4 through the existing controlled GitHub Actions → FTP path.

Verify remote bytes.

Fetch live:
- `index.html`;
- `result_renderer_v04.mjs`.

Assert no obsolete visual tokens in either.

Then re-run an external crawler/LLM description test.

Expected:
external description should see matrix + first-glance details + second-answer details, not ship/map.

## Rollback

Rollback target:
`660ec63f19cc0288b4ebc7bd1f0a2e426900b246`

Known-green deployment:
`33986214567`

If any removal gate fails:
1. reset/revert implementation branch to the known-green ship/map-hidden baseline;
2. run the normal owner-preview deploy;
3. verify matrix + A detail + B detail + PDF + save/restore;
4. do not touch 2rasi landing pointer;
5. diagnose only in the isolated v0.4 implementation branch.

## Acceptance criteria

Removal is complete only when all are true:

1. normal participant result remains the same 12×12 matrix;
2. A detail behavior is preserved;
3. B detail behavior is preserved;
4. no ship/map participant DOM exists;
5. generated live HTML contains no `LAIVAS`, `ŽEMĖLAPIS`, ship/map scene IDs or needs-map mounts;
6. public renderer contains no ship/map visual implementation;
7. no matrix failure path can expose ship/map;
8. local 390×844 flow PASS;
9. deployed 390×844 flow PASS;
10. PDF one A4 page PASS;
11. browser/Android Back after details PASS;
12. completed-result reload restore PASS;
13. API/final save unchanged;
14. external crawler/LLM no longer describes ship/map.

## Decision

Proceed with structural removal, not a cosmetic hide.

The safest first implementation keeps the current module filenames and data contracts while deleting the obsolete visual scene and decoupling details from it.
