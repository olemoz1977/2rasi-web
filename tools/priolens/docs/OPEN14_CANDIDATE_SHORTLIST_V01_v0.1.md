# PrioLens Open14 candidate shortlist v01

Status: ACTIVE CHECKPOINT / OWNER VISUAL REVIEW REQUIRED
Date: 2026-09-01

## Context

The first remediation batch resolved and deployed:
- SAFETY-B;
- AUTONOMY-A;
- REST-A;
- KNOWLEDGE-A;
- CONNECTION-A;
- CONNECTION-B.

Five active exemplars still require replacement before final bank audit:
- REST-B;
- ORDER-A;
- ORDER-B;
- CONTROL-A;
- KNOWLEDGE-B.

BELONGING-B and OPPORTUNITY-A remain HOLD/search items and are intentionally deferred until the five required replacements are resolved.

## Full Gallery retrieval pass

A whole-Gallery semantic retrieval pass was run over the current Hostinger Gallery.

Workflow:
`.github/workflows/priolens-gallery-semantic-search-v03.yml`

Run:
`33471115239`

Result:
- SUCCESS;
- 184 valid Gallery images were available after excluding 25 current/source/previous/bad-known files;
- each unresolved target was ranked against two text prompts using CLIP;
- OCR watermark screening was added to the ranked candidates;
- full review page deployed and smoked at:
  `https://omesg360.eu/priolens-candidate-review-v02/`.

Important boundary:
**CLIP ranking is retrieval support only. It is not evidence that a stimulus represents the intended family. No bank path may be changed from CLIP score alone.**

Known cross-loaded legacy assets such as `S06.webp` and `S11.webp` were not accepted simply because they ranked highly for a new target.

## Curated five-family shortlist

A smaller owner-facing review page was built from the full retrieval results.

Route:
`https://omesg360.eu/priolens-candidate-shortlist-v01/`

Workflow run:
`33471574796`

Result:
- SUCCESS;
- page deployed;
- HTTP smoke passed.

The page shows four A-D candidates for each required replacement and the intended first-glance target.

### REST-B
Target:
`poilsis / atsistatymas / aiški pauzė`

Candidates:
- A = `Gallery/20260730_220850179.png` — 768x1360 — CLIP #1
- B = `Gallery/20260730_232752414.png` — 768x1360 — CLIP #2
- C = `Gallery/20260730_233059566.png` — 768x1360 — CLIP #3
- D = `Gallery/1785948607280.png` — 1024x1024 — CLIP #10; retained because it is already square

### ORDER-A
Target:
`aiškiai paskirtos vietos / tvarkinga struktūra`, preferably a shadow-board / object-position mechanism.

Candidates:
- A = `Gallery/file_00000000047082119dea4783f54683d5.png` — 1254x1254 — CLIP #1
- B = `Gallery/file_000000003c0c81fb80655b530662c0ee.png` — 1254x1254 — CLIP #2
- C = `Gallery/20260805_222858501.png` — 2048x2048 — CLIP #3
- D = `Gallery/20260808_231944060.png` — 2048x2048 — CLIP #6

### ORDER-B
Target:
`sužymėtos / paskirtos zonos, ribos ir vietos`, visually distinct from ORDER-A object organization.

Candidates:
- A = `Gallery/20260730_082954248.png` — 768x1360 — CLIP #1
- B = `Gallery/20260731_042747442.png` — 768x1360 — CLIP #4
- C = `Gallery/file_00000000fdf0821099271633f3930bad.png` — 1254x1254 — CLIP #8
- D = `Gallery/20260731_042545269.png` — 768x1360 — CLIP #9

Overlapping ORDER-A candidates were intentionally removed from the ORDER-B shortlist to avoid selecting the same scene/mechanism for both exemplars.

### CONTROL-A
Target:
`realus, patikimas tiesioginio valdymo mechanizmas`, with no implausible AI-looking instrument.

Candidates:
- A = `Gallery/1786544004102.png` — 1024x1024 — CLIP #1
- B = `Gallery/file_0000000010ec820da325a18b91ef6420.png` — 1254x1254 — CLIP #2
- C = `Gallery/file_00000000d1d481f4bde2fe963dcc9381.png` — 1254x1254 — CLIP #3
- D = `Gallery/file_00000000165881f4b5a872f68db713ac.png` — 1254x1254 — CLIP #4

### KNOWLEDGE-B
Target:
`aktyviai mokytis / suprasti per skaitmeninę terpę`, not generic computer work.

Candidates:
- A = `Gallery/20260730_021452636.png` — 768x1360 — CLIP #2
- B = `Gallery/20260730_022124068.png` — 768x1360 — CLIP #3
- C = `Gallery/20260730_233626457.png` — 768x1360 — CLIP #4
- D = `Gallery/20260731_245233521.png` — 768x1360 — CLIP #5

`S11.webp`, despite CLIP rank #1, was excluded because prior blind review showed unstable / cross-loaded mapping and it should not be silently recycled as KNOWLEDGE.

## Owner decision required

Open:
`https://omesg360.eu/priolens-candidate-shortlist-v01/`

Return one of `A / B / C / D / reject` for each:
1. REST-B
2. ORDER-A
3. ORDER-B
4. CONTROL-A
5. KNOWLEDGE-B

Do not prefer a candidate because it has a higher CLIP rank. Use the project rule:
> **What does a reasonable viewer see happening within about one second?**

## After owner choices

1. For accepted portrait candidates, create reviewed 1:1 derivatives before switching the bank.
2. Audit accepted candidate for watermark / logos / text and visual credibility.
3. Switch only reviewed derivatives/assets into `bank.json`.
4. Smoke the five changed runtime paths.
5. Then review BELONGING-B and OPPORTUNITY-A against their candidate sets.
6. Run final 28/28 geometry + watermark + semantic + runtime-reachability audit.
7. Run one final mobile visual smoke.
8. Fix sufficiency `null` / coverage display.
9. Preserve CARE visual-vs-received-support asymmetry explicitly.
10. Configure and smoke the 90-day cleanup cron.
11. Only then decide the first external formative mini-pilot.

External recruitment remains CLOSED.
