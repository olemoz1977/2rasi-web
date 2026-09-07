# Social sharing architecture

Status: active · 2026-09-07

## Purpose

Keep social profile links stable, preserve campaign attribution, and give each 2rasi tool a distinct localized social preview.

## Three different link types

### 1. Profile / bio links — stable

Use the platform-specific `/go/` URL in the social profile. Do not change it when a new tool is promoted.

Examples:
- `https://2rasi.com/go/instagram`
- `https://2rasi.com/go/tiktok`
- `https://2rasi.com/go/facebook`
- `https://2rasi.com/go/youtube`
- `https://2rasi.com/go/linkedin`

### 2. Social post / comment links — localized share wrappers

Use a share wrapper when a social platform should show a localized tool-specific card.

Pattern:
- LT: `https://2rasi.lt/s/lt/<tool>/`
- EN: `https://2rasi.com/s/en/<tool>/`

Append campaign parameters to the wrapper, for example:

`https://2rasi.lt/s/lt/mirror/?utm_source=linkedin&utm_medium=social&utm_campaign=mirror&utm_content=reel_v1`

The wrapper:
1. exposes static Open Graph / Twitter metadata to social crawlers;
2. is `noindex` and is not a search landing page;
3. redirects a human visitor with JavaScript to the real tool;
4. preserves all query parameters and the hash, so existing attribution continues to work.

Do not use a meta-refresh redirect here: social crawlers need to read the wrapper metadata.

### 3. Direct tool URLs — product pages

Direct tool pages remain canonical user-facing product pages:
`/tools/<tool>/`

They contain fallback Open Graph / Twitter metadata and a tool-specific image. Because `.lt` and `.com` share the same static source, fully localized social titles/descriptions are provided by the `/s/lt/` and `/s/en/` wrappers rather than runtime JavaScript.

## Social card assets

Generated assets live in:
`assets/social/`

Current cards:
- leadership-360.jpg
- mirror.jpg
- multipliers.jpg
- divergent.jpg
- situational-leadership.jpg
- drama-triangle.jpg
- strategic-thinking.jpg
- 2pair.jpg
- workstyle.jpg
- priolens.jpg

Dimensions: 1200 × 627 px (1.91:1).

Source generator:
`scripts/generate_social_cards.py`

Automation:
`.github/workflows/social-cards.yml`

## Guardrails

- Do not change bio links per promoted tool.
- Do not create a second analytics/tracking system for social links.
- Before adding new routing or attribution infrastructure, inspect existing `/go/`, `/s/`, and current tracking first.
- For a new tool, add its social card, direct-page OG fallback, and LT/EN share wrappers together.
- Keep `/s/` wrappers out of sitemaps and marked `noindex`.
