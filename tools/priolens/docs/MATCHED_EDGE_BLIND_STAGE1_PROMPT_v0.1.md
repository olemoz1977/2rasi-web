# PrioLens matched-edge blind review prompt — Stage 1 v0.1

You are reviewing 14 **text-only matched scene concepts**. You do not know the intended category system or the purpose of each pair.

Do not try to guess a hidden framework. Evaluate only whether the two variants create a clean, meaningful visual contrast that could plausibly be rendered as two matched static images.

For each pair M01–M14, provide:

1. **Dominant contrast** — one short sentence describing the most obvious difference between Variant A and Variant B.
2. **Variant A primary meaning** — what A most directly communicates.
3. **Variant B primary meaning** — what B most directly communicates.
4. **Top alternative interpretation** for each side.
5. **Equal legitimacy** — would both sides be reasonable choices, or does one look obviously better/more useful/safer/more attractive?
6. **Hidden-story dependence** — does either side require inferred ownership, future benefit, social role, intention or context not actually visible?
7. **Non-semantic confound risk** — which visual difference could dominate choice if rendered (object count, brightness, faces, motion, reward, threat, complexity, etc.)?
8. **Matched-render feasibility** — can the two variants realistically be rendered with similar camera, lighting, object density and attractiveness while keeping the intended visible contrast?
9. **Verdict** — choose exactly one:
   - `CLEAN_CONTRAST`
   - `AMBIGUOUS_CONTRAST`
   - `NONSEMANTIC_DOMINATED`
   - `INFEASIBLE_AS_MATCHED_PAIR`
10. **Confidence** 0–100.

After all 14 pairs, add:

A. 4 strongest matched concepts.
B. 4 weakest matched concepts.
C. Concepts where one variant is structurally more attractive or desirable.
D. Concepts where the intended-looking contrast depends mainly on a hidden story.
E. Any pairs that appear to test essentially the same underlying contrast despite different scenes.

Important:
- Do not improve or rewrite the concepts yet.
- Do not infer personality, values, needs or traits.
- Do not assume that “more choice,” “more visibility,” “more protection,” “more effect,” etc. is inherently better.
- Preserve ambiguity rather than resolving it charitably.

Stop after Stage 1. Wait for the intended mapping reveal.
