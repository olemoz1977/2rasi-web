# PrioLens v0.4 — all MOST repetitions + Android PDF blank-page fix

Status: DEPLOYED TECHNICAL PASS / OWNER REAL-ANDROID REVIEW PENDING
Date: 2026-09-05

## Decision

The primary matrix overview now shows **all raw Channel-A MOST repetitions**:
- every family chosen 3/3;
- every family chosen 2/3.

The detail view remains narrower:
- it continues to use the single resolved `attentionFocus`;
- if A+ was needed, that is the family the participant selected in A+;
- the general matrix does not hide the other raw 3/3 or 2/3 repetitions.

This preserves the distinction:
- **overview = all observable repeated visual directions**;
- **detail = one resolved direction for reflection**.

## Green grammar

Separate point markers remain removed.

Every 3/3 or 2/3 family chip is colored directly:
- 3/3 = solid dark green fill with white text;
- 2/3 = solid light green fill with dark text.

This replaces the previous mostly-outline treatment, which was too weak on a real phone.

The summary card is now:
**Pirmo žvilgsnio pasikartojimai**

and lists every 3/3 / 2/3 family as a filled green badge.

Green encodes raw repetition count only. It does not encode:
- value;
- desirability;
- strength of a need;
- psychological importance.

## LEAST

Unchanged methodological rule:
- LEAST is absent from the primary matrix;
- exact 3/3 LEAST remains in first-glance detail only;
- LEAST is also removed from the general PDF report.

## Orange grammar

Unchanged from the previous owner correction:
- B <=3 marks only the exact top-axis B item;
- the exact left-axis B item;
- its own diagonal cell;
- no orange row/column spill into other needs.

## Android PDF diagnosis

Owner-supplied Android Chrome PDF still contained:
- page 1 with the full report compressed into the upper part;
- page 2 with no report content, only the page/background area.

The report content itself was not overflowing. The stronger cause was the inherited screen layout:
- `body{min-height:100dvh}`;
- `.wrap{min-height:100dvh}`;
- root/background styling surviving into the Android print pagination context.

The second page therefore behaved like a layout-height/background artifact rather than a content page.

## PDF remediation

Print mode now explicitly resets both through CSS and inline pre-print state:
- `html` height/min-height -> auto / 0;
- `body` height/min-height -> auto / 0;
- `.wrap` height/min-height -> auto / 0;
- root/body background -> white;
- overflow -> visible;
- matrix result -> static/auto height with no page-break-after;
- no LEAST appendix note.

The reset is applied before `window.print()` and restored after printing.

Target remains:
- one A4 portrait page;
- summary + compact numbered matrix + exact 12-statement appendix.

## Runtime evidence

Implementation repo:
`olemoz1977/omesg360`
branch:
`feature/priolens-open14-v04`

Matrix model:
`2rasi.priolens.open14.result-matrix-v0.6`

Technical gates:
- logic/build: run `33960497419` SUCCESS;
- local 390x844 + one-page PDF smoke: run `33960497418` SUCCESS;
- deployed owner preview/API/390x844 full-flow: run `33960497398` SUCCESS.

Real Android Save-as-PDF remains the final acceptance check because Chromium CI cannot reproduce Android's native print service exactly.
