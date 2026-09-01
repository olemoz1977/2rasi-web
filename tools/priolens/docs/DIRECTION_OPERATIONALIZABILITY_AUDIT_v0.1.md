# PrioLens direction operationalizability audit v0.1

Status: DESIGN GATE / PRE-ASSET / NOT CONSTRUCT VALIDATION
Date: 2026-08-30

## Purpose

Before generating a new PrioLens stimulus pool, test whether each working direction can be represented by **observable static-scene properties** without relying on a hidden story, researcher intent, or a direction-specific visual confound.

This audit adapts a useful methodological boundary from ConflictLab v0.8 without importing its AW/CS/CR constructs:

`SCENE PROPERTY -> PARTICIPANT RESPONSE -> DIRECTION-LEVEL INTERPRETATION`

These levels must remain separate.

An image can be a **candidate operationalization** of AUT/CER/EXP/MAS/CON/INF/PRO/OPP. It is not evidence that the participant selected that direction until human data establish that the mapping generalizes beyond the particular image/family.

## Design-stage language

Allowed before human evidence:

- `target_direction_hypothesis: AUT` (or another direction)
- `mapping_status: UNCONFIRMED`
- `scene_property_family: ...`
- `static_image_feasibility: HIGH / MEDIUM / LOW`
- `known_neighbour_risks: ...`

Not allowed before human evidence:

- “this image is autonomy”;
- “choosing this image means autonomy took priority”;
- “this stimulus measures opportunity”;
- “the participant preferred certainty” solely from a raw image choice.

## Overall finding

The eight working directions are **not equally easy to operationalize as static images**.

That asymmetry is itself a methodological risk.

| Direction | Static-image feasibility | Main reason | Structural risk |
|---|---|---|---|
| MAS | HIGH | skilled execution / refinement can be directly visible | craft/action-family attraction |
| CER | MEDIUM-HIGH | information visibility / defined state can be directly visible | organization/completion/PRO leakage |
| CON | MEDIUM-HIGH semantic fit | reciprocal social relation can be visible | social/face salience is direction-specific |
| PRO | MEDIUM-HIGH semantic fit | barrier / preservation / shielding can be visible | threat/loss/negative-valence asymmetry |
| INF | MEDIUM | actor -> external consequence can be visible | generic causality/MAS leakage; “shared” consequence may need story |
| EXP | MEDIUM-LOW | investigation can be visible, but “discovery itself” is partly response-level | AUT/OPP/CER leakage; novelty/aesthetic pull |
| AUT | MEDIUM-LOW | freedom is relational to constraints; absence of imposed control is hard to depict | OPP/EXP/MAS and configurability leakage |
| OPP | LOW-MEDIUM | future value is counterfactual and tends to be represented as visible reward/resource | reward/positive-valence + EXP/AUT overlap |

This is a design feasibility judgement, not evidence that any direction exists as a stable psychological construct.

---

## AUT · Autonomy

Working definition: freedom to choose or determine one's own path, method or course of action.

### What is difficult

“Freedom” is not a visible object. It is a relation between an actor and the constraints/options available to that actor. A static image easily shows **multiple options**, but multiple options alone can mean OPP or EXP. A configured workstation can show customization, but the viewer cannot know whether the configuration was self-chosen or externally imposed.

### Candidate scene-property families

**AUT-SPF-01 · Equivalent method availability**
- One clearly shared goal/task.
- Multiple visibly legitimate, functionally equivalent ways to proceed.
- Actor has direct access to all methods.
- No method is visually privileged as obviously better.
- Main neighbour risks: OPP, MAS.
- Feasibility: MEDIUM.

**AUT-SPF-02 · Reconfigurable action setup**
- Same functional system visibly allows meaningful user reconfiguration rather than fixed routing.
- Reconfiguration itself is visible, not inferred from ownership or workplace context.
- Main neighbour risks: CER/structure, MAS.
- Feasibility: MEDIUM.

**AUT-SPF-03 · Branching route / open path**
- Multiple routes are visually available.
- Problem: route scenes naturally imply EXP and OPP and often nature/travel preference.
- Feasibility: LOW / HOLD unless a design can suppress these alternatives.

### Gate 0A verdict

**HIGH-RISK CANDIDATE.** Do not generate many AUT assets until at least two genuinely different scene-property families survive blind concept review. Current evidence says AUT is too easily carried by researcher story.

---

## CER · Certainty

Working definition: clarity, predictability or knowing what applies, what is present, or what is likely to happen.

### What is visually tractable

The strongest static-image route is not “predictability” in the abstract but **information visibility / defined present state**. ConflictLab v0.8 independently arrived at similar scene-property families for its clarity work: partial reveal, relation evidence and context/reference availability. Those old families are design precedent only, not PrioLens validation evidence.

### Candidate scene-property families

**CER-SPF-01 · Relevant information visibility**
- The information needed to understand what is present is directly visible.
- Avoid merely neat/organized storage.
- Main neighbour risks: EXP, PRO.
- Feasibility: HIGH.

**CER-SPF-02 · Relation evidence**
- A relation/status that could otherwise be ambiguous is made visually explicit by the scene itself.
- Avoid text-heavy explanation or success symbols.
- Main neighbour risks: MAS, INF.
- Feasibility: MEDIUM-HIGH.

**CER-SPF-03 · Reference availability**
- A concrete reference/context makes the current state interpretable.
- Risk: text/symbol modality can make CER systematically easier to decode than other directions.
- Feasibility: MEDIUM / HIGH-RISK.

**CER-SPF-04 · Defined outcome**
- Scene implies one more defined next state.
- Problem: future inference is required and can leak to OPP/PRO.
- Feasibility: LOW-MEDIUM / HOLD.

### Gate 0A verdict

**CANDIDATE.** CER appears visualizable, but the construct should be operationalized primarily through **visible information/state**, not cleanliness, checklist achievement, enclosure or brightness.

---

## EXP · Exploration

Working definition: discovering, investigating or engaging with something not yet known.

### What is difficult

“Curiosity” and “wanting to discover” are participant responses, not scene properties. An empty road, open door or unknown container only shows an unknown/opening. It does not show that discovery itself is the priority.

A stronger visual route is **investigation in progress**.

### Candidate scene-property families

**EXP-SPF-01 · Active reveal**
- Actor is visibly revealing previously hidden neutral content.
- Unknown remains partially unresolved so the scene is discovery-in-progress, not simply a known organized state.
- Main neighbour risks: CER, OPP.
- Feasibility: MEDIUM.

**EXP-SPF-02 · Active inspection/inquiry**
- Actor is visibly examining unfamiliar evidence/object/content to find out what it is.
- Avoid technical skill cues that turn the scene into MAS.
- Main neighbour risks: MAS, CER.
- Feasibility: MEDIUM.

**EXP-SPF-03 · Entering unknown territory**
- Scene visually invites movement into partially unknown space.
- Strong AUT/OPP/nature/travel confounds.
- Feasibility: LOW / HOLD.

**EXP-SPF-04 · Sampling/search among unknown contents**
- Multiple unknown items/areas are being investigated, not merely selected.
- Main neighbour risks: AUT, OPP.
- Feasibility: MEDIUM-LOW.

### Gate 0A verdict

**HIGH-RISK CANDIDATE.** EXP should be built around **observable inquiry/reveal actions**, not picturesque unknown spaces. If human semantic screening still maps these scenes mainly to organization, choice or opportunity, EXP may not work as a static-image direction.

---

## MAS · Mastery

Working definition: developing or applying competence, precision, skill or quality.

### What is visually tractable

Skilled execution and refinement are directly observable. Current red-team reviews independently recognized the caliper and pottery scenes as precision/craftsmanship without seeing the label.

The remaining problem is not semantic legibility but **family diversity**: two “skilled hands doing craft” scenes can generate a stable craft preference rather than a direction effect.

### Candidate scene-property families

**MAS-SPF-01 · Precision adjustment / measurement**
- Visible fine control, measurement or tolerance-setting.
- Feasibility: HIGH.

**MAS-SPF-02 · Form refinement / craftsmanship**
- Visible transformation toward controlled quality/form.
- Feasibility: HIGH.

**MAS-SPF-03 · Practice / calibrated repetition**
- Visible deliberate practice or iterative refinement rather than one finished achievement.
- Risk: may require temporal inference.
- Feasibility: MEDIUM.

**MAS-SPF-04 · Fine assembly / quality formation**
- Skill is visible in the action itself, not inferred from professional tools or status.
- Feasibility: HIGH.

### Gate 0A verdict

**CANDIDATE / strongest current direction.** Keep MAS, but deliberately diversify beyond the “close-up skilled hands” visual family.

---

## CON · Connection

Working definition: mutual contact, closeness, belonging or maintaining a meaningful relationship with others.

### What is visually tractable

Reciprocal orientation/interpersonal interaction can be visible. The difficulty is structural fairness: CON necessarily uses multiple social agents, while several other directions can be represented with objects. Human faces and social scenes have salience and positive-affect effects independent of connection.

### Candidate scene-property families

**CON-SPF-01 · Reciprocal orientation**
- Two people visibly orient to each other in mutual engagement.
- Avoid exaggerated smiles, romance/status cues, staged therapy/meeting symbolism.
- Feasibility: HIGH semantic / HIGH confound.

**CON-SPF-02 · Shared reciprocal action**
- Two or more actors visibly engage in one mutually dependent action.
- Risk: can become MAS/INF/cooperation rather than relationship.
- Feasibility: MEDIUM.

**CON-SPF-03 · Non-face mutual contact**
- Connection communicated through body/hands/reciprocal positioning without face dominance.
- Risk: gesture symbolism or intimacy.
- Feasibility: MEDIUM.

**CON-SPF-04 · Group belonging configuration**
- Group arrangement visually communicates togetherness without obvious party/reward context.
- Risk: people-count/social-scene salience remains.
- Feasibility: MEDIUM.

### Gate 0A verdict

**CANDIDATE WITH STRUCTURAL CONFOUND.** CON is semantically visualizable, but social modality cannot be treated as a normal asset-level nuisance. Later preference analysis must explicitly model face/social-content effects, and candidate generation should test face-reduced variants.

---

## INF · Influence

Working definition: having meaningful impact on the direction, decision or outcome of a shared/external situation.

### What is difficult

Generic cause-and-effect is not enough. A falling domino line demonstrates causality, but not necessarily “meaningful impact on a shared/external outcome.” Conversely, a social leadership scene usually needs an invisible story (“this person is leading”).

The image therefore needs an **actor action and a visible external consequence in the same frame**.

### Candidate scene-property families

**INF-SPF-01 · Distribution steering**
- One simple visible action redirects a flow/resource across multiple downstream elements.
- Consequence is visible beyond the actor's private task.
- Avoid high-skill controls.
- Main neighbour risk: MAS.
- Feasibility: MEDIUM-HIGH.

**INF-SPF-02 · System-state intervention with visible consequence**
- Actor changes a simple control and a larger external system visibly changes state.
- Avoid complex technical apparatus/status symbolism.
- Main neighbour risks: MAS, CER.
- Feasibility: MEDIUM.

**INF-SPF-03 · Shared-outcome contribution**
- One contribution visibly changes a collective/shared configuration.
- Problem: “shared” meaning may require social context and can become CON/MAS.
- Feasibility: MEDIUM-LOW.

**INF-SPF-04 · Pure chain reaction**
- Visible cause -> cascade.
- Current evidence: reviewers agree on causality but disagree whether this is INF.
- Feasibility: LOW as a direction exemplar / useful only as causality control.

### Gate 0A verdict

**HIGH-RISK CANDIDATE.** INF survives only if the scene shows **external consequence**, not merely mechanism or skilled manipulation. If independent families repeatedly collapse to MAS/generic causality, the definition needs redesign.

---

## PRO · Protection

Working definition: preventing harm/loss, reducing exposure, shielding or preserving something that matters.

### What is visually tractable

Barrier, shelter and preservation can be directly visible. The problem is that protection semantically depends on some adverse exposure or fragility, which can introduce negative valence, darkness, threat or high-value object cues.

### Candidate scene-property families

**PRO-SPF-01 · Barrier intercepting neutral exposure**
- Barrier visibly blocks rain/water/dust/impact from reaching a protected target.
- Keep hazard low-arousal and scene well lit.
- Feasibility: HIGH.

**PRO-SPF-02 · Fitted preservation**
- Clearly fragile/common object is visibly cushioned or secured.
- Object fragility/value must be obvious without luxury/status cues.
- Feasibility: MEDIUM-HIGH.

**PRO-SPF-03 · Cover / containment during exposure**
- Protection is active and functionally obvious.
- Avoid enclosure being read as CER alone.
- Feasibility: MEDIUM.

**PRO-SPF-04 · Damage-prevention action**
- Actor performs a simple safeguarding action with risk and target visible.
- Avoid dramatic threat or heroic imagery.
- Feasibility: MEDIUM.

### Gate 0A verdict

**CANDIDATE WITH VALENCE RISK.** PRO appears visualizable, but candidate pool must deliberately vary protection families and normalize lighting/mood so “dark/rainy/threat” does not become the direction signature.

---

## OPP · Opportunity

Working definition: pursuing an opening, possibility or potential gain that could improve the future state.

### What is difficult

“Potential future gain” is counterfactual. Static images tend to solve this by showing desirable resources, food, lush growth, bright open spaces or success cues. Those elements can directly drive choice through reward/positive valence. If the reward is removed, the image often collapses into AUT (choice/access) or EXP (unknown opening).

This is the strongest current construct-level operationalization risk.

### Candidate scene-property families

**OPP-SPF-01 · Accessible unused capacity**
- A clearly usable opening/capacity is available now but not yet taken.
- The benefit should be functional rather than luxurious/reward-saturated.
- Main neighbour risks: AUT, CER.
- Feasibility: MEDIUM.

**OPP-SPF-02 · Available resource with obvious next use**
- Resource is visibly ready and there is a clear place/use for it.
- Risk: resource/reward attraction can dominate.
- Main neighbour risk: MAS.
- Feasibility: MEDIUM / HIGH-RISK.

**OPP-SPF-03 · Open access to a visible beneficial next state**
- Benefit is visible beyond an accessible opening.
- Risk: strong positive-valence/nature/travel framing; EXP leakage.
- Feasibility: LOW-MEDIUM / HOLD.

**OPP-SPF-04 · New slot/opening in a constrained system**
- A meaningful slot/access point is available that was otherwise scarce.
- Problem: “value” often requires context/story.
- Feasibility: LOW-MEDIUM.

### Gate 0A verdict

**HIGHEST-RISK / HOLD FOR CONCEPT WORK.** Do not generate another food/greenhouse/resource-reward family as the default solution. First prove that at least two non-reward-dominated scene-property families can communicate “opportunity” more strongly than AUT/EXP.

---

## Cross-direction structural diagnosis

The current eight directions mix different representation classes:

### A. Directly observable action/state dominant
- MAS: skill/refinement action.
- CER: visible information/state.
- PRO: protection/preservation action/state.
- CON: reciprocal social relation (observable but socially salient).

### B. Relational agency dominant
- AUT: actor relative to available constraints/options.
- INF: actor relative to external/shared consequences.

### C. Epistemic/future-orientation dominant
- EXP: unknown + investigation orientation.
- OPP: future value/opening.

This creates a potential **representation-class confound**: some directions can be shown as concrete present-tense actions, while others require the viewer to infer agency, unknownness or future value.

Therefore, visual cleanliness alone cannot equalize the eight directions. Human semantic data must test whether representation class predicts mapping success or later preference independently of direction.

## Pre-generation decision

Do not start a 4-assets-per-direction polishing campaign yet.

First create a **concept surplus** of scene-property families:

- target: 3–5 candidate families per direction;
- no polished assets yet;
- each family described only in observable scene terms;
- each family must list its nearest-neighbour failure mode and likely modality confounds;
- blind concept reviewers should not see the intended direction during first-pass interpretation.

Only families that survive concept feasibility should produce image assets.

## Stop / redesign trigger

A direction should move from `CANDIDATE` to `CONSTRUCT_REVIEW` if:

1. multiple materially different scene-property families repeatedly require hidden narrative to support the direction;
2. blind reviewers consistently map those families to neighbouring directions;
3. removing the dominant confound also removes the intended meaning;
4. the only successful family is one narrow visual trope, so “direction” cannot be separated from “family.”

If this happens, do not solve it by generating more artwork. Tighten/reframe/remove the direction or reconsider static-image modality.
