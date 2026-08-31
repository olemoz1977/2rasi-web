# PrioLens Gallery impulse curation v0.1

Status: ACTIVE CURATION
Updated: 2026-08-31
Source: `GALLERY_IMPULSE_AUDIT_v0.1.csv`

## Rule

This pass starts from the recorded first impulse, not from the historical label.

`KEEP` = worth carrying into the compact candidate bank.
`HOLD` = semantically relevant but has a clear ambiguity/confound.
`DROP` = do not carry into the compact bank now.

The full Gallery contains 223 files / 222 byte-unique images. After impulse-first curation, 40 images remain KEEP/HOLD. The other 183 are DROP for the current eight-direction candidate bank. DROP does not mean the image is visually bad; it means its dominant impulse is not useful enough for the present PrioLens question.

## AUT

- `S05.webp` — **rinktis tinkamą įrankį** — KEEP. Choice/agency is the first read; tool/mastery leakage remains.

Gallery alone does not provide enough strong AUT diversity. Recent generated personal-adjustment scenes are assessed separately.

## CER

- `20260731_245002797.png` — **patvirtinti / įsipareigoti** — KEEP. Confirmed/committed state; document/legal cue.
- `20260730_230415808.png` — **tvarka / paskirtos vietos** — HOLD. Clear structure, but order dominates over certainty.
- `20260830_245725601.png` — **važiuoti / tęsti, nes galima** — HOLD. Clear permission/go state, but relies on learned traffic-light color/rule.
- `S10.webp` — **tvarkingai ir matomai laikyti** — HOLD. Visibility/known contents are present, but containment/order also dominate.

Important: `S06.webp` is DROP for CER. Its first impulse is completion, not clarity/predictability.

## EXP

- `S09.webp` — **atidaryti ir atrasti, kas viduje** — KEEP. Direct discovery; mystery/reward cue remains.
- `20260809_235839567.png` — **pažiūrėti už kliūties / atrasti** — KEEP. Direct curiosity/discovery.
- `20260731_051026107.png` — **rinktis kryptį neaiškume** — KEEP. Exploration is plausible; autonomy/uncertainty leakage remains.
- `S01.webp` — **eiti pirmyn į nežinomą kelią** — KEEP. Forward/unseen-space pull; scenic/nature pull remains.
- `20260730_232545797.png` — **sekti pėdsakais / eiti toliau** — HOLD. Following may dominate discovery.
- `20260730_233938996.png` — **važiuoti pirmyn** — HOLD. Generic travel/route trope.
- `file_000000009244821095cdb1e7c946f6b1.png` — **orientuotis / rasti kryptį** — HOLD. Navigation may be closer to certainty than exploration.

## MAS

- `S12.webp` — **tiksliai išmatuoti / patikrinti** — KEEP.
- `S16.webp` — **meistriškai formuoti** — KEEP.
- `1788135386167.png` — **tiksliai sureguliuoti / surinkti** — KEEP. Repeats handcraft/manual-skill trope.
- `20260808_233759579.png` — **įstatyti / pritaikyti detalę** — HOLD. Precision/fit with completion leakage.
- `20260830_242340401.png` — **subalansuoti / sukrauti** — HOLD. Skill/control challenge, but no explicit skilled actor.

## CON

- `S03.webp` — **užmegzti ryšį su kitu žmogumi** — KEEP. Direct dyadic connection; face/warmth salience remains.
- `20260829_235204397.png` — **veikti kartu / perduoti objektą** — KEEP. Reciprocity is visible.
- `S14.webp` — **bendrauti / veikti socialiniame rate** — HOLD. Group/social salience is strong.
- `20260731_043300801.png` — **dalintis šiluma / būti kartu** — HOLD. Symbolic shared moment rather than actual reciprocity.
- `20260730_230816104.png` — **dalintis gėrimu / būti poroje** — HOLD. Paired/shared context, weak human relation.

## INF

- `file_0000000064308246af3fd5a5884c9e8c.png` — **paskirstyti vandenį platesnei sistemai** — KEEP. One local action changes distribution across a wider system.
- `file_000000006b148210abe3c22f8ce50764.png` — **įjungti / pakeisti visos patalpos būseną** — KEEP. Local action changes a wider environment.
- `S02.webp` — **paleisti grandininę reakciją** — HOLD. Clear cascading effect, but generic causality rather than meaningful influence.
- `S04.webp` — **nukreipti / valdyti srautą** — HOLD. Active routing/control, but engineered/mechanical.

## PRO

- `S08.webp` — **apsisaugoti nuo lietaus** — KEEP. Direct shielding.
- `20260731_042940286.png` — **užrakinti / riboti prieigą** — KEEP. Direct securing/access protection.
- `20260829_233727670.png` — **saugiai laikyti / apsaugoti** — KEEP. Fitted protective case.
- `file_000000000db881f4ae8d011930c0e30a.png` — **apsaugoti / uždaryti į korpusą** — KEEP. Robust enclosure; industrial-object ambiguity.
- `1785848537847.png` — **užverti / apsaugoti įėjimą** — HOLD. Protection vs restriction/access-control ambiguity.
- `S13.webp` — **saugiai laikyti vertingą daiktą** — HOLD. Protection visible; object value/fragility weak.
- `file_000000006bc881f482e783fee25d78e6.png` — **apsaugoti ir kartu matyti mechanizmą** — HOLD. Transparency/inspection leakage.

## OPP

- `file_0000000024fc8210a5fb3823b3d86a9f.png` — **pradėti kurti iš paruoštų medžiagų** — KEEP. Useful materials are ready and usable.
- `file_00000000673881f4bc390c5618110a68.png` — **nuskinti / pasinaudoti prinokusiu derliumi** — KEEP. Immediate valuable resource; food/nature reward confound.
- `file_00000000c7f0821081be7676884bb00f.png` — **pradėti kurti nuo tuščios drobės** — KEEP. Ready possibility; creativity cue.
- `1785954922572.png` — **augimo potencialas** — HOLD. Positive nature symbolism.
- `20260731_050136952.png` — **gauti / atidaryti dovaną** — HOLD. Surprise/reward cue.
- `S07.webp` — **pasinaudoti paruoštu maistu** — HOLD. Strong food-reward confound.
- `S15.webp` — **įeiti į augimo / derliaus erdvę** — HOLD. Nature/green positive-valence confound.

## Main result

The impulse-first pass materially changes the bank:

- `S05` comes back as a useful AUT candidate because the first read is choice/agency.
- `S09` comes back as a useful EXP candidate because the first read is discovery.
- `S06` loses its provisional CER role because the first read is completion.
- PRO is broader and stronger when direct shielding, securing and safeguarding are allowed to remain candidate expressions of the same broad motivational hypothesis instead of being split prematurely.
- CER remains the thinnest and least convincing family.

Do not generate new images yet. First add the recent generated candidates to the same impulse-first bank, then rebuild the current matrix.