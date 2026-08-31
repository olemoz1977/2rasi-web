# PrioLens hosting and deployment boundary v0.1

Status: ACTIVE INFRASTRUCTURE DECISION
Date: 2026-08-31

## Trigger

A Hostinger auto-deploy to the 2rasi web root removed Gallery folders that existed only in hosting storage and were not part of the deployed repository tree. A similar failure mode had already occurred previously on `omesg360.eu`.

This is an infrastructure boundary problem, not a PrioLens stimulus/runtime problem.

## Decision

For the current research phase, PrioLens development and research hosting moves to the `omesg360.eu` Hostinger environment.

This does **not** redefine the final public product route. The intended public PrioLens product may still later be published under the 2rasi domains after the research architecture is stable.

### 2rasi.com / 2rasi.lt

Treat the 2rasi web root as a deploy-owned production surface.

Rules:
- only repository-controlled public site files belong in the auto-deployed target;
- do not manually store research source material, Gallery archives, temporary runtimes or irreplaceable assets inside an auto-deploy-owned `public_html` root;
- a deployment is allowed to replace the deployed tree without risking research source data;
- public PrioLens publication to 2rasi is a later explicit release decision, not the current research workspace.

### omesg360.eu

Use `omesg360.eu` as the current PrioLens research/dev environment.

Required separation:
1. **runtime deploy target** — a dedicated PrioLens directory that automation is allowed to replace;
2. **Gallery / research source assets** — stored outside that deploy target;
3. **backups/source of truth** — Gallery and other irreplaceable research assets must also exist outside Hostinger hosting storage.

Recommended shape if public web access to research assets is needed:

```text
omesg360.eu/
  public_html/
    priolens/              <- deploy-owned runtime target
    priolens-gallery/      <- persistent assets, only if deploy target is NOT public_html root
```

Safer shape if Gallery does not need direct public web access:

```text
omesg360.eu/
  public_html/
    priolens/              <- deploy-owned runtime target
  priolens-research-assets/ <- persistent, non-public research archive
```

The exact Hostinger filesystem path may differ. The invariant is the separation, not the folder spelling.

## Current recovery state

The historical PrioLens 16-image bank remains recoverable from the embedded standalone/beta HTML artifacts and the exact S01-S16 mapping is documented in the repository.

The larger Gallery source currently available in the `omesg360.eu` hosting environment must be treated as a recovery copy until an independent backup exists.

Before changing any `omesg360.eu` auto-deploy target, make an independent copy of the current Gallery directory.

## Production-source safety check

The GitHub repository remains the recoverable source for the 2rasi public site. The default `hero-webgl` branch still contains the homepage, shared assets and the principal public tool directories.

This does not prove that every manually uploaded Hostinger-only file survived. Files that never existed in Git or another backup remain the only loss-risk category.

## Deployment invariant

> Never store non-repository source assets inside an auto-deploy-owned directory.

A hosting directory is not a source archive.

## Public-route boundary

Current research hosting:
- `omesg360.eu` Hostinger environment.

Potential future public product route remains a separate release decision:
- EN: `2rasi.com/tools/priolens/`
- LT: `2rasi.lt/tools/priolens/`

Do not change the public product identity merely to solve a development-hosting problem.
