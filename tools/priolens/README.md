# PrioLens

Working status: architecture scaffold only. Not ready for participant data collection.

PrioLens is a new 2rasi product route. It is intentionally separate from the frozen 2Pair product and its historical releases.

## Route

- EN: `https://2rasi.com/tools/priolens/`
- LT: `https://2rasi.lt/tools/priolens/`

The same product code is served on both 2rasi domains; host-based language handling follows the existing 2rasi pattern.

## v0.1 protocol target

- 8 working priority directions
- 2 visual exemplars per direction
- 16 stimuli total
- 28 unique direction-v-direction core comparisons
- every direction appears 7 times
- one exemplar combination sampled per direction edge in a session
- exemplar combinations rotated across participants
- vertical top/bottom measured layout on all supported viewports
- equal 1:1 frames, `object-fit: contain`, simultaneous visibility, no scroll
- preload + decode before measured timing begins
- result is descriptive relative-priority clarity, not a diagnosis

## Current scaffold

`config/product-v0.1.json` defines the product/route boundary.

`config/protocol-v0.1.json` freezes the structural protocol decisions that are already settled and leaves unresolved decisions explicit rather than hiding defaults in code.

`config/stimuli-v0.1.json` registers the eight directions and two exemplar slots per direction. Asset fields remain null until the visual set is frozen.

`docs/DATA_CONTRACT_v0.1.md` defines the event boundary before any upload endpoint is implemented.

## Runtime boundary

The product frontend belongs under `/tools/priolens/` on 2rasi. No PrioLens runtime should redirect to or depend on `omesg360.eu`.

If research persistence is enabled later, the public API namespace is reserved as `/api/priolens/v1/`. Backend implementation remains separate from the static presentation layer even when exposed under the same 2rasi origin.

## Do not do yet

- do not expose a live start button
- do not collect external research sessions
- do not call the eight directions validated needs
- do not infer subconscious/instinctive strength from latency
- do not create a strict #1-#8 result when ties remain
- do not pool PrioLens data with 2Pair data

See `/PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md` for the full product decision record.
