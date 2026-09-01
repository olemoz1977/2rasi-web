# PrioLens data contract v0.1

Status: DRAFT / MUST FREEZE BEFORE EXTERNAL COLLECTION

This contract keeps raw observation data separate from later interpretation. The client must be able to reconstruct exactly what a participant saw, where it appeared and what was selected without inferring a psychological meaning from latency or screen position.

## 1. Version envelope

Every session record must include:

```json
{
  "schema": "2rasi.priolens.session.v0.1",
  "product_version": "0.1",
  "protocol_version": "0.1",
  "stimulus_set_version": "0.1",
  "session_plan_version": "0.1",
  "runtime_build": "..."
}
```

A stimulus or protocol change creates a new version. Do not overwrite a frozen version and continue collecting as if nothing changed.

## 2. Session envelope

Required fields:

- `session_id`: pseudonymous random identifier
- `created_at`: wall-clock timestamp for operational trace only
- `locale`: `en` or `lt`
- `host`: `2rasi.com` or `2rasi.lt`
- `consent_mode`: local-only / research-upload-opt-in when upload exists
- `plan_seed` or allocation identifier
- `trial_count_core`: expected 28
- `trial_count_reliability`: expected 0 in base v0.1
- `viewport_start`: width, height, orientation, device pixel ratio
- `completion_status`

Do not place name, email, employer or other directly identifying fields in the research event payload.

## 3. Trial record

Each trial stores the presented pair as observation, not as an inferred score.

Required fields:

```json
{
  "trial_id": "...",
  "trial_index": 0,
  "edge_id": "connection__mastery",
  "reliability_trial": false,
  "top": {
    "direction_id": "connection",
    "stimulus_id": "connection-01"
  },
  "bottom": {
    "direction_id": "mastery",
    "stimulus_id": "mastery-02"
  },
  "render": {
    "preloaded": true,
    "decoded": true,
    "both_visible": true,
    "stable_before_start": true
  },
  "trial_start_monotonic_ms": 0,
  "choice_commit_monotonic_ms": 0,
  "choice_latency_ms": 0,
  "choice": {
    "kind": "stimulus",
    "position": "top",
    "stimulus_id": "connection-01",
    "direction_id": "connection"
  },
  "input_modality": "pointer",
  "viewport": {
    "width": 0,
    "height": 0,
    "orientation": "portrait"
  },
  "diagnostics": {
    "orientation_changed": false,
    "layout_changed": false,
    "visibility_interrupted": false
  }
}
```

If `no_clear_choice` is enabled in a later frozen protocol, it must be represented as a separate `choice.kind`, not converted into a loss for both directions.

## 4. Mechanical latency boundary

`choice_latency_ms` is a mechanical observation only. It may be used to audit UX/timing quality or explore preregistered research questions. It must not be interpreted as need strength, instinct strength, confidence or psychological salience by default.

No v0.1 combined score may mix choice and latency.

## 5. Derived participant trace

Derived v0.1 fields may include:

- per-direction selections/wins out of seven observed direction edges
- the 28 observed edge outcomes
- tied direction groups
- descriptive tiers
- close-choice flags if a separately defined observable rule exists

The raw 28-edge trace remains the source of truth. A rendered participant result must be reproducible from the stored trace and the versioned analysis code.

## 6. Validity diagnostics

A session should be flagged for review when at least one of the following occurs:

- required asset was not decoded before the measured trial
- both stimuli were not simultaneously visible
- viewport forced crop or scroll
- orientation/layout changed during a measured trial
- trial plan differs from the persisted plan
- duplicate/missing core direction edge
- runtime error interrupted the block

Validity flags do not silently delete data. Keep the observation and record the exclusion/quality decision separately.

## 7. Upload boundary

No upload endpoint is active in this scaffold.

Reserved same-origin namespace: `/api/priolens/v1/`.

When implemented, upload must be explicit opt-in and the frontend must remain capable of completing the reflection flow without transmitting research data, unless a later product decision deliberately changes that contract.
