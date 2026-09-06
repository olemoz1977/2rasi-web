# PrioLens Open14 manual watermark audit — 2026-09-06

Status: COMPLETE / OWNER VISUAL 42/42 REVIEW

## Scope

Manual human visual review of the current 42-stimulus Open14 bank shown in `stimulus-bank.html`.

Purpose:
- identify visible generation watermarks, logos, signatures, sparkle marks or similar nuisance artifacts that automated OCR/watermark gates may miss.

This is a visual nuisance audit, not a semantic-validity judgement.

## Result

Owner reviewed all 42 current stimuli.

Confirmed visible watermark contamination:
- `SAFETY-02` — visible `KlingAI 3.0` watermark in the lower-right corner.
- `EXPLORATION-01` — visible `KlingAI 3.0` watermark in the lower-right corner.

Suspected generator artifact:
- `AUTONOMY-02` — small bright four-point sparkle in the lower-right region. Not confirmed as a textual watermark, but retained as a nuisance-review item.

No additional visible watermarks were found in the remaining 39 stimuli during the owner 42/42 manual pass.

## Interpretation

Previous automated watermark/OCR PASS must not be treated as sufficient evidence of visual cleanliness. Small semi-graphic watermarks can evade OCR.

The active public-pilot bank must not be silently overwritten under the same bank/pool identity.

Required remediation rule:
1. preserve current contaminated pixels as historical bank evidence;
2. replace/clean confirmed contaminated stimuli only in a new bank/pool version;
3. decide `AUTONOMY-02` separately after full-resolution review;
4. record an analytical cutoff so sessions collected before and after pixel remediation are not pooled as one identical stimulus bank.

## Research-data note

The owner validation session completed during this audit is a technical/manual smoke session and must not be treated as independent stimulus-validation research N.
