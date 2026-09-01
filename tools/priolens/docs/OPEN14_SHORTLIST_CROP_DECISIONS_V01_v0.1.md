# PrioLens Open14 shortlist crop decisions v01

Status: ACTIVE CHECKPOINT / STIMULUS BANK REMEDIATION
Date: 2026-09-01

## Owner decisions applied

Owner crop choices:
- REST-B = `center`;
- KNOWLEDGE-B = `bottom`.

Technical runtime assets:
- REST-B -> `/priolens-research-assets/Open14-remediation-v02/rest-b_owner-b_sq_center_v01.webp`;
- KNOWLEDGE-B -> `/priolens-research-assets/Open14-remediation-v02/knowledge-b_owner-b_sq_bottom_v01.webp`.

Both source candidates previously passed OCR keyword screening for Kling/Gemini/OpenAI marks. The crop derivatives were prepared in the preceding shortlist-remediation workflow.

## Runtime update

Workflow:
`Apply PrioLens shortlist crops v01`

Run:
`33474026622`

Result:
- SUCCESS;
- `bank.json` patched and committed;
- REST-B switched to owner-selected center crop;
- KNOWLEDGE-B switched to owner-selected bottom crop;
- both accepted assets GET-smoked successfully;
- live `bank.json` contains both new runtime paths;
- CONTROL-A remains `SEARCH_REQUIRED_AFTER_SHORTLIST_REJECT`.

Working first-glance reads:
- REST-B: `pailsėti / atsistatyti`;
- KNOWLEDGE-B: `mokytis / suprasti per skaitmeninę terpę`.

## Current unresolved stimulus work

Required:
1. CONTROL-A -> new search required after owner rejected shortlist v01. Do not generate unless explicitly requested.

Hold / comparison:
2. BELONGING-B -> review against stronger candidates due asymmetric warmth cue.
3. OPPORTUNITY-A -> review against clearer immediate-opportunity candidates.

## Next sequence

1. search / shortlist CONTROL-A without generating;
2. compare BELONGING-B and OPPORTUNITY-A against existing Gallery candidates;
3. if no credible CONTROL-A exists, write a stimulus brief before any generation request;
4. run final 28/28 geometry + watermark + semantic + runtime-reachability audit;
5. run one final mobile visual smoke;
6. fix sufficiency `null` / coverage display;
7. preserve CARE visual-vs-received-support asymmetry explicitly;
8. configure and smoke 90-day cleanup cron;
9. only then decide first external formative mini-pilot.

External recruitment remains CLOSED.
