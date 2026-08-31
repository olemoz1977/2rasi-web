# PrioLens original stimulus exact mapping v0.1

Status: RECOVERED / BYTE-LEVEL VERIFIED
Date: 2026-08-31

## Evidence

User-provided `Gallery.zip` contains all sixteen blind-review files `S01.webp` ... `S16.webp`.

User-provided `priolens_working_beta-4.html` contains sixteen embedded WebP data URLs keyed by stable beta IDs such as `exploration-01`, `mastery-02`, etc.

Each `Sxx.webp` was decoded/read without modification and compared by SHA-256 against every WebP byte stream extracted from the beta HTML.

Result: all 16 blind files have one and only one exact byte-for-byte match in the beta registry.

This closes the previously unresolved `Sxx -> direction-01/direction-02` mapping. No numbering or semantic inference is used.

## Exact mapping

| Blind ID | Stable beta asset ID | Intended direction | Historical red-team status |
| --- | --- | --- | --- |
| S01 | `exploration-01` | EXP | REWORK / retest |
| S02 | `influence-02` | INF | REWORK / retest |
| S03 | `connection-01` | CON | candidate only; social/face salience confound |
| S04 | `influence-01` | INF | REPLACE preferred |
| S05 | `autonomy-01` | AUT | REPLACE / redesign |
| S06 | `certainty-02` | CER | REWORK / retest |
| S07 | `opportunity-02` | OPP | REPLACE preferred |
| S08 | `protection-01` | PRO | REWORK / retest |
| S09 | `exploration-02` | EXP | REPLACE / redesign |
| S10 | `certainty-01` | CER | REPLACE preferred |
| S11 | `autonomy-02` | AUT | REPLACE / redesign |
| S12 | `mastery-01` | MAS | STRONGEST CANDIDATE |
| S13 | `protection-02` | PRO | REPLACE preferred |
| S14 | `connection-02` | CON | REWORK / retest |
| S15 | `opportunity-01` | OPP | provisional candidate only |
| S16 | `mastery-02` | MAS | STRONGEST CANDIDATE |

## Scene inventory

- S01 / exploration-01 — straight forest path into distance.
- S02 / influence-02 — finger starts a wooden domino chain reaction.
- S03 / connection-01 — two people facing each other in positive conversation.
- S04 / influence-01 — hand steers/diverts beads through a branching mechanical channel.
- S05 / autonomy-01 — several everyday tools/objects with a hand near the alternatives; choice/context is visually ambiguous.
- S06 / certainty-02 — clipboard checklist with completed check marks.
- S07 / opportunity-02 — prepared food/resources available around an empty plate.
- S08 / protection-01 — open umbrella against rain/wet exterior conditions.
- S09 / exploration-02 — hand opens a drawer containing varied small objects; exploration/choice context is ambiguous.
- S10 / certainty-01 — transparent container with heterogeneous objects; semantics ambiguous.
- S11 / autonomy-02 — person at adjustable workstation/monitor setup; autonomy signal depends on inferred control/context.
- S12 / mastery-01 — calipers and small tool used for precise mechanical adjustment/measurement.
- S13 / protection-02 — fitted protective case containing a metal object; protected value/fragility is weak.
- S14 / connection-02 — three people in conversation around a table; CON/INF and social-salience risk.
- S15 / opportunity-01 — open greenhouse with healthy productive plants; strong nature/positive-valence confound.
- S16 / mastery-02 — hands shaping clay on a pottery wheel.

## Consequence

The original 16-image bank is now fully reconstructable under both naming systems:

`Sxx <-> stable beta asset ID <-> intended direction <-> historical red-team diagnosis`

The recovery blocker is closed.

Next research work should not regenerate these historical assets. Use them as evidence/anchors while deciding which directions merit a larger standalone exemplar bank and which old stimuli should be kept, reworked or replaced before human semantic screening.
