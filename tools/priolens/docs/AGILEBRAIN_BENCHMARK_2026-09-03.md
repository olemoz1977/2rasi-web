# PrioLens benchmark: AgileBrain

Date: 2026-09-03
Status: RESEARCH BENCHMARK / ADJACENT METHOD / NO RUNTIME CHANGE

## Purpose

Treat AgileBrain as the closest currently identified adjacent method for PrioLens, not as proof that PrioLens measures the same construct.

This benchmark is subordinate to the current PrioLens research boundaries in:
- `RESUME_HERE.md`;
- `PROJECT_STATE.md`;
- `OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`;
- `OPEN14_CARE_ANALYSIS_RULE_v0.1.md`.

PrioLens guardrails remain unchanged:
- no personality diagnosis;
- no subconscious / true-self claim;
- no `fast = true` inference;
- RT is process telemetry, not psychological strength;
- visual pull is not equated with unmet need;
- no one global need score;
- Open14 is a discovery shortlist, not a validated complete taxonomy.

## 1. AgileBrain in one methodological sentence

AgileBrain uses rapid sequential presentation of validated images representing 12 theorized emotional needs, separately asks for states the respondent wants to feel more of and less of, and converts image selection plus response latency into need-level and summary wellbeing scores.

## 2. AgileBrain protocol reconstructed from published sources

### Construct model

AgileBrain uses 12 needs arranged as 4 life domains × 3 levels:

| Domain | Foundational | Experiential | Aspirational |
| --- | --- | --- | --- |
| Self | Safety | Authenticity | Potential |
| Material | Autonomy | Immersion | Success |
| Social | Inclusion | Caring | Recognition |
| Spiritual | Justice | Ethics | Purpose |

Each has promotion and prevention forms, e.g. Safety/Insecurity, Autonomy/Disempowerment, Inclusion/Exclusion.

### Stimulus bank

Published description:
- 320 Shutterstock images initially tested;
- 2,728 research participants in image development;
- final bank: 72 images;
- 3 promotion + 3 prevention images per need;
- six trained raters classified final stimuli, Cohen's kappa = 0.91;
- binary-selection internal consistency was used during image filtering.

The 2023 BMC paper reports final need-cell KR20 values about 0.80–0.83 and domain-level KR20 around 0.93.

### Participant task

Published job-context protocol:
1. focus on feelings about the job;
2. sentence-completion framing;
3. six-image practice round;
4. 36 promotion images in random order;
5. 36 prevention images in random order.

Prompts are variants of:
- `Thinking about my current situation/job, I wish I could feel a little more...`
- `...I wish I could feel a little less...`

Images are exposed in a short response window. Published descriptions place it around 500–1,500/1,600 ms.

### Scoring

AgileBrain later describes:
- **Activation**: number of selected images weighted by selection latency; faster selected images contribute more;
- **Positivity/Valence**: balance/ratio of promotion versus prevention selections;
- **Wellbeing Index**: derived combination of activation and positivity, described as `(1 - activation decimal) × positivity`.

The newer public platform describes 144 data points per exercise. The published protocol has 72 stimulus exposures; selection state plus latency is a plausible interpretation of the 144 figure, but this exact accounting should not be treated as confirmed unless AgileBrain documents it explicitly.

## 3. Evidence that should be taken seriously

### A. Stimulus engineering is materially ahead of PrioLens

AgileBrain did not merely pick plausible pictures. It reports 320 candidate images, 2,728 participants, psychometric filtering and trained-rater classification before arriving at 72 final images.

For PrioLens this is the strongest benchmark lesson: image semantics need empirical calibration, not only owner/researcher judgement.

### B. There is published reliability evidence

The 2023 BMC Psychology paper reports:
- need-level KR20 roughly >= 0.80;
- life-domain KR20 about 0.93;
- 14-month matched-subject test-retest correlations (n=60) from 0.67 to 0.78 for overall positive/negative and four domain scores.

This is substantially more evidence than PrioLens currently has.

### C. There is external-criterion association evidence

The 2024 Frontiers in Public Health paper used four US full-time-worker samples (n=812, 810, 986, 1,179) and compared AgileBrain summary metrics with PHQ-9, CESD-10, GAD-7, loneliness, stress, coping, neuroticism, trauma and neurodiversity variables.

Many associations are statistically significant, but typical full-sample correlations are modest, commonly about |r| = .1–.31.

Cross-validated high-vs-low depression/anxiety classification reported about 64.0%–76.7% accuracy depending on cut point.

This supports the conclusion that the signal is non-random and related to wellbeing. It does not by itself prove that each image-selection score uniquely identifies a specific unmet need.

## 4. Important methodological weaknesses / overclaims

### A. `Fast = pre-cognitive = authentic` is not established by the cited timing logic

AgileBrain explicitly argues that restricting responses to roughly 500–1,500 ms keeps responses before cognitive reprocessing and therefore free of impression management/social-desirability distortion.

That conclusion is too strong.

General implicit-measure literature does not support the assumption that indirect/rapid measures automatically access unconscious representations or are automatically resistant to social desirability. Gawronski, LeBel & Peters (2007) specifically conclude that these assumptions are equivocal.

Therefore PrioLens should keep its current wording:
> low-deliberation comparative visual choice under reduced self-presentation opportunity

and should not copy AgileBrain's `subconscious`, `unfiltered`, `unfakeable`, `before thinking can occur`, or `true emotional needs` language.

### B. RT weighting carries a construct leap

AgileBrain inverts selection latency and treats faster selection as a stronger emotional response / stronger unmet need.

A response time contains more than motivational strength: visual recognizability, motor speed, attention, device/browser timing, familiarity, image complexity and task strategy can all contribute.

Online timing research shows that browser experiments can be usable for RT research, but device/browser/platform variation exists and should be empirically validated. That supports treating RT as analysable process data, not automatically as psychological magnitude.

PrioLens current rule `RT = telemetry only` is methodologically safer.

### C. Their own 2023 paper reports a discriminant-validity problem

The BMC paper explicitly notes a failure of the CFA discriminant analysis and says future work is needed to differentiate stimuli representing the constructs more clearly.

This matters because the central claim is not merely `images carry signal`; it is that distinct images uniquely map to 12 distinct needs.

PrioLens should therefore prioritize cross-exemplar and cross-family discriminability before any family-level interpretation claim.

### D. High 14-month stability is ambiguous for a claimed state measure

AgileBrain markets motivation as `right now` / state-based rather than trait-based. Yet the reported 14-month domain correlations are high (roughly .67–.78).

This is not necessarily bad reliability. But for a strongly state-sensitive instrument it creates an interpretive question: how much score variance is current state versus stable person tendency, stable job context, stimulus preference or method variance?

PrioLens should not use test-retest stability alone as success. For a state-sensitive design, both reasonable short-term reproducibility and context-sensitive movement can matter.

### E. Aggregate wellbeing validation does not fully validate the 12 need labels

The 2024 wellbeing paper mainly validates AgileBrain's aggregate activation/valence/wellbeing indices against external outcomes.

That is different from demonstrating that every individual need score is specifically and uniquely measuring Safety, Caring, Recognition, etc.

PrioLens should keep separate questions:
1. do visual choices show non-random repeat structure?;
2. are exemplar families distinguishable?;
3. do family-level repeats relate to separately reported sufficiency?;
4. do any aggregate patterns relate to external outcomes?

Do not collapse these into one statement called `validation`.

### F. Very large Cohen-d claims should not be confused with full-sample association strength

The 2024 paper reports modest correlations between AgileBrain and several criterion measures while also reporting very large Cohen-d values for group contrasts.

These describe different comparisons. Marketing language can make the evidence sound stronger if extreme-group separation is mentally substituted for ordinary person-level association.

PrioLens reporting should prefer direct effect estimates with confidence intervals and pre-specified contrasts, not superlative labels.

### G. Independence of the evidence base is limited

Key AgileBrain theory, method and validation papers are authored by J. David Pincus, the framework/method developer and/or employee of Leading Indicator Systems. The 2024 Frontiers paper explicitly declares this conflict of interest; the 2025 neurodiversity paper includes the developer and an advisor to the company.

There is peer review, but the benchmark should distinguish `peer reviewed` from `independently replicated`.

Searches located some third-party use/discussion, but not a strong body of independent replication of the core measurement claims.

## 5. PrioLens versus AgileBrain

| Dimension | AgileBrain | PrioLens current/next-bank |
| --- | --- | --- |
| Primary task | sequential yes/no image selection | comparative 3-image choice |
| Primary prompt | want more / want less | first spontaneous visual pull, no family labels |
| Construct inference | selected image = activated/unmet emotional need | candidate visual-pull family only |
| RT | contributes to psychological score | telemetry only |
| Families | 12 declared comprehensive needs | 14 discovery families, not complete taxonomy |
| Exemplars | 3 promotion + 3 prevention per need | next bank 3 unique exemplars per family |
| Repetition | 3 images for each valence/need | same family 3 times, different exemplar each time |
| Second channel | promotion/prevention both image-based | separate perceived-sufficiency Channel B after visual task |
| Core output | activation, positivity, wellbeing + need profile | repeated visual themes + separately reported sufficiency + cautious comparison |
| Global score | yes | intentionally no |
| Claim posture | subconscious/authentic/unmet-need claims | descriptive/formative guardrails |

## 6. Where PrioLens is genuinely differentiated

The defensible differentiation is **not** `visual needs test`.

The strongest current distinction is the two-channel architecture:

> Channel A: low-deliberation comparative visual pull
>
> Channel B: separately reported current perceived sufficiency
>
> Research object: the relationship or mismatch between the two, without assuming that A is the hidden truth and B is the rational distortion.

AgileBrain asks the visual task itself to carry the unmet-need inference. PrioLens deliberately separates visual pull from explicit sufficiency and tests whether the relationship exists.

That is a methodological difference, not a branding difference.

## 7. What PrioLens should adopt from the benchmark

### Adopt

1. **Empirical stimulus calibration.** The 42-bank owner/mobile audit is necessary but not enough. Formative external data should become the next stimulus-selection layer.
2. **Three distinct exemplars per family.** Current 42-bank design now matches the minimum useful cross-exemplar logic and should not be weakened.
3. **Explicit stimulus-level reliability/discriminability reporting.** Do not hide under a family aggregate.
4. **State framing.** Ask about a clearly bounded present context/time horizon rather than trait identity.
5. **Repeated measurement as a future research path.** Useful only after one-session measurement is understood.
6. **Separate criterion validation later.** Once the measurement model survives formative work, test against external variables rather than validating only against itself.

### Do not adopt

1. `subconscious`, `true self`, `unfiltered`, `unfakeable` framing;
2. automatic RT-to-strength weighting;
3. one global wellbeing/need index at the present stage;
4. `complete human-needs taxonomy` claims;
5. direct individual-score -> team culture/dynamics inference without an explicit aggregation model and team-level validation;
6. using peer review as a synonym for independent replication.

## 8. Concrete implications for the Open14 formative pilot

The existing research question remains stronger than an AgileBrain-style claim:

> **Do cross-exemplar repeated visual pulls show interpretable, non-trivial relationships with independently reported current sufficiency, beyond stimulus-specific salience and chance?**

Minimum analyses to preserve/add:

1. **Exemplar salience:** selection rate per exact image.
2. **Cross-exemplar family repetition:** family repeat only when distinct exemplars contribute.
3. **Chance/permutation baseline:** observed family repetition versus planner-preserving randomized expectation.
4. **Position effects:** screen slot / triad order.
5. **No-clear-choice rate:** overall and by triad/image combination.
6. **Language stratification:** LT vs EN before pooling.
7. **Channel A vs B association:** only where constructs are pre-specified as comparable; CARE exception remains.
8. **Image dominance check:** a family should not appear strong only because one exemplar is unusually attractive or obvious.
9. **RT diagnostic only:** inspect whether RT mostly tracks image, device/session/order or choice confidence before considering any psychological interpretation.
10. **External semantic check:** after/beside pilot, independent raters can classify what each image appears to depict within ~1 second, without being shown the intended family labels first.

## 9. Strategic conclusion

AgileBrain is evidence that the commercial/research category `rapid visual motivational-state measurement` is real and viable. It is also evidence that visual-stimulus validity is expensive and empirical.

It does **not** invalidate PrioLens. It removes an easy differentiation story.

PrioLens cannot differentiate by saying:
> we use images instead of words to reveal needs.

A defensible PrioLens position is closer to:
> we compare what repeatedly pulls attention in a low-deliberation visual task with what the person separately reports as currently sufficient, and we treat any mismatch as a question to examine, not as proof of a hidden need.

The methodological priority therefore remains: prove the visual family signal is more than exact-image salience before expanding claims.

## Sources reviewed

Primary AgileBrain / method sources:
- Pincus JD. `The structure of human motivation`. BMC Psychology (2023). DOI: 10.1186/s40359-023-01346-5. https://pubmed.ncbi.nlm.nih.gov/37798750/
- Pincus JD. `Validation of a brief image elicitation task as an indicator of subjective wellbeing in the general population`. Frontiers in Public Health (2024). DOI: 10.3389/fpubh.2024.1435144. https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1435144/full
- Pincus JD, Beller K. `Emotional wellbeing in neurodivergent populations`. Frontiers in Psychology (2025). DOI: 10.3389/fpsyg.2025.1606232. https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1606232/full
- AgileBrain science page. https://agilebrain.com/science/
- AgileBrain platform page. https://agilebrain.com/agilebrain-platform/

External methodological context:
- Gawronski B, LeBel EP, Peters KR. `What Do Implicit Measures Tell Us? Scrutinizing the Validity of Three Common Assumptions`. Perspectives on Psychological Science (2007). DOI: 10.1111/j.1745-6916.2007.00036.x.
- Meissner F et al. `Predicting Behavior With Implicit Measures: Disillusioning Findings, Reasonable Explanations, and Sophisticated Solutions`. Frontiers in Psychology (2019). DOI: 10.3389/fpsyg.2019.02483.
- Bridges D et al. `The timing mega-study: comparing a range of experiment generators, both lab-based and online`. Behavior Research Methods (2020/2021).
- Anwyl-Irvine AL et al. `Realistic precision and accuracy of online experiment platforms, web browsers, and devices`. Behavior Research Methods (2021).