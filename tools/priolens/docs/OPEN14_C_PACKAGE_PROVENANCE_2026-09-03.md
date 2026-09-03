# PrioLens Open14 C-package provenance / readiness

Status: DESIGN-LEVEL 14/14 RESOLVED / FINAL 3×14 SET CAN BE FROZEN / NOT RUNTIME BANK
Date: 2026-09-03
Parent decision: `OPEN14_NO_REPEAT_42_TRANSITION_2026-09-03.md`
Latest family audit: `OPEN14_ABC_FULL_AUDIT_2026-09-03.md`
Recognition freeze: `OPEN14_RECOGNITION_D_OWNER_FREEZE_2026-09-03.md`
REST freeze: `OPEN14_REST_C_OWNER_FREEZE_2026-09-03.md`

## Purpose

Turn the owner-reviewed third-exemplar shortlist into an auditable next-bank asset package without silently mutating live Open14 v0.2.

A semantic scene choice is not a runtime-ready stimulus. Before runtime freeze require:
- exact reviewed binary identity;
- source/provenance where recoverable;
- geometry/crop decision;
- no visible watermark or construct-label text that dominates the task;
- duplicate check against current A/B and other next-bank images;
- first-impulse/mechanism note;
- known cross-loading risk.

## Final family corrections

### REST — CLOSED FOR NEXT-BANK DESIGN

Canonical freeze:
`OPEN14_REST_C_OWNER_FREEZE_2026-09-03.md`

`4928.jpg` furry slippers remains HOLD only because it is too close to the existing home-comfort/footwear mechanism.

Final REST-C:
- owner `4971.jpg`;
- source Pexels/Pixabay `269141`;
- dimensions `1536×1097`;
- bytes `474297`;
- SHA-256 `9996dbab58b7963b044f0a1129c228e94cfd28809772e1b17ebbaf131f6e131c`;
- small-size 192×192 review still reads as a person lying/resting under a blanket;
- normalized local 640×640 WebP review derivative SHA-256 `f84f46f7376c105765012ab614efc81e1a4a9bee137550ab6da90eae9d5f3465`;
- decision: **KEEP / FINAL REST-C**.

Residual risk: sleep-specific / illness-laziness interpretation, accepted as preferable to footwear semantic duplication.

Next-bank REST = **A + B + C(4971)**.

### RECOGNITION — CLOSED FOR NEXT-BANK DESIGN

Canonical freeze:
`OPEN14_RECOGNITION_D_OWNER_FREEZE_2026-09-03.md`

Historical candidates:
- `4965.jpg` transparent loyalty award = HOLD / not final because the award is too difficult to notice at small/mobile size;
- `4967.jpg` teacher/student high-five = BOUNDARY KEEP; directed positive acknowledgement, with learning/mastery/teacher-student cross-load.

Owner-approved final D:
- owner file label `4973.png`;
- decoded format JPEG/RGB despite upload label;
- dimensions `1536×1536`;
- bytes `294123`;
- SHA-256 `be0b9af42c648fba4d63643babc935d90247b48f6a5afe609664fe21c1672334`;
- normalized 640×640 WebP SHA-256 `3965c63ee28f7052ce0fb160b9308b8f3154aff5d7967da687a1ca09ad266b13`;
- owner-approved edited derivative from Pexels `7648310` certificate scene;
- at 192×192 the person + certificate remain obvious while certificate wording is not practically readable;
- residual risk: achievement/certificate/professional-status cross-load.

Next-bank Recognition = **A + C + D**:
- A KEEP;
- live B RETIRE FROM NEXT BANK only;
- C KEEP `4967.jpg`;
- D KEEP / FINAL owner `4973` certificate edit.

Live Open14 v0.2 remains unchanged until runtime bank/version/planner smoke passes.

## Exact reviewed / working third-or-replacement binaries

| Family | Local reviewed file | Dimensions | SHA-256 | Current scene decision | Known source | Main residual risk |
| --- | --- | ---: | --- | --- | --- | --- |
| REST | `4971.jpg` | 1536×1097 | `9996dbab58b7963b044f0a1129c228e94cfd28809772e1b17ebbaf131f6e131c` | **KEEP / FINAL C** | Pexels/Pixabay `269141` | sleep-specific / illness-laziness interpretation |
| RESOURCE | `4957.jpg` | 1536×1024 | `736f0d26c0b89ddf04bac65346658284761711e68bca49e55f9c8b92133a815e` | KEEP provisional | Pexels `5974010` | MASTERY/workshop cross-load |
| SAFETY | `4945.jpg` | 1024×1536 | `59b0753375bc09c24fd0f41f33aa3fa69d0d8b78e2d48a2164fd965d9693754e` | KEEP | Pexels `8153605` | familiar learned safety cue |
| ORDER | `4958.jpg` | 864×1536 | `ed7f12a8f5522f81c3914ee3e3e16ab26154d0318f94c18a693c2bccc6d4d672` | KEEP | Pexels `6264420` | everyday kitchen context |
| CONNECTION | `4932.jpg` | 1024×1536 | `10e049ce299c2ed7cac1a0e573aba04f64cf994d6e3a3dd28d1f05e8b348ac12` | KEEP | Pexels `35999767` | warmth/romantic-context cue; close to CONNECTION-A |
| BELONGING | `4947.jpg` | 1536×864 | `4aab6177861be8ef82932efd0af2e21a4235981d49f468c151c457e79e582286` | KEEP | Pexels `9071468` | gaming/hobby and positive group valence |
| CARE | `4964.jpg` | 1024×1536 | `125cd21b4b4502ab388328a864b5715a1283bedcd05dd4dbf786326f872e97a9` | KEEP | Pexels `7339487` | child/caregiver role cue; matches proactive CARE boundary |
| AUTONOMY | `4966.jpg` | 1536×1024 | `0ac038bf442275e31dd0d980de184395501939791f9c5974629545d2a14aa802` | BOUNDARY KEEP | Pexels `6069074` | fashion/shopping preference can dominate self-direction |
| CONTROL | `4936.jpg` | 1536×1024 | `519312832a1a2050109136419a6fe6db0a8e5c36232404bbe45025be8fbf07e9` | KEEP provisional | exact external page still to recover; reviewed binary locked | strong blue/technical/music salience |
| RECOGNITION-C | `4967.jpg` | 1536×1024 | `6da3accd8573bfaedf461a19d3c96d2b67533df3053cf3a96193cbd761bb7da7` | BOUNDARY KEEP | Pexels `8520508` | learning/mastery/teacher-student cross-load |
| RECOGNITION-D | owner `4973.png` | 1536×1536 | `be0b9af42c648fba4d63643babc935d90247b48f6a5afe609664fe21c1672334` | **KEEP / FINAL NEXT-BANK REPLACEMENT** | owner-approved in-chat edit from Pexels `7648310` scene | achievement/certificate/status cross-load |
| MASTERY | `4952.jpg` | 1024×1536 | `242fe30c2a3b09c4c3face1bc91c91888586060a48cb418c29998c3ed0868dea` | KEEP | Pexels `8030168` | another manual-skill scene |
| EXPLORATION | `4953.jpg` | 1536×1024 | `fe82c4db8a37340e9ec490d5ee5fb3a7c796b0ff8da708cc0aaa9cbf23a8c245` | KEEP | Pexels `15692450` | nature/travel context |
| KNOWLEDGE | `4954.jpg` | 1536×1024 | `921321adf08e4c9e636f0b49eb4cb061b6ec42b0d6cc01aa4396cfddab126b21` | KEEP | Pexels `6929197` | academic-context cue |
| OPPORTUNITY | `4955.jpg` | 863×1536 | `2bdb71f8624de10a5eada2a8b25d8a97ac43dfeea5906ceb85d6d5c677f68b4b` | KEEP | Pexels `21854305` | nature/resource/growth valence |

Historical HOLD files:
- REST `4928.jpg`, 1025×1536, SHA-256 `452a9c5d1b5494c5574e4855c6fa6a75f7db01b90bce36eb3f687afae69c2d7c`;
- Recognition transparent award `4965.jpg`, 1536×1080, SHA-256 `6d579f836969ebdebe6a870b6642f40cdc13a1879daf6492175b6fe80dac8288`.

## Current readiness

Design audit:
- **14 / 14 families resolved** for next-bank design;
- REST is frozen as A+B+C(4971);
- Recognition is frozen as A+C+D, with live/current B retired from next-bank design only;
- the exact final 3×14 family design can now be frozen explicitly.

Runtime readiness remains incomplete because final binaries still need versioned runtime asset placement, normalized naming/geometry, planner patch, metadata versioning and smoke.

## Next executable step

1. Create explicit final 3×14 design-freeze manifest.
2. Normalize/package/version final assets.
3. Patch planner to one-use three-exemplar assignment per family.
4. Add new bank/planner/session identity so v0.2 observations remain separable.
5. Run hash/pHash/reachability/text-watermark/geometry audit.
6. Owner mobile 42-bank first-glance smoke.
7. Runtime no-repeat smoke.

Live Open14 v0.2 remains unchanged.