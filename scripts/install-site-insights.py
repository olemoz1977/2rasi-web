from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
LIST = ROOT / 'scripts' / 'insights-pages.txt'
OWNER_TAG = '<script src="/tools/site-owner-mode.js?v=20260831-1"></script>'
INSIGHTS_TAG = '<script src="/tools/site-insights.js?v=20260828-1"></script>'
OWNER_PATTERN = re.compile(r'<script\s+src=["\']/tools/site-owner-mode\.js(?:\?[^"\']*)?["\']\s*></script>\s*', re.I)
INSIGHTS_PATTERN = re.compile(r'<script\s+src=["\']/tools/site-insights\.js(?:\?[^"\']*)?["\']\s*></script>', re.I)


def pages():
    for raw in LIST.read_text(encoding='utf-8').splitlines():
        line = raw.strip()
        if line and not line.startswith('#'):
            yield ROOT / line


def install(path: Path):
    if not path.exists():
        raise SystemExit(f'Missing production page: {path.relative_to(ROOT)}')

    text = path.read_text(encoding='utf-8')
    text = OWNER_PATTERN.sub('', text)
    bundle = OWNER_TAG + '\n' + INSIGHTS_TAG

    if INSIGHTS_PATTERN.search(text):
        updated = INSIGHTS_PATTERN.sub(bundle, text)
    else:
        idx = text.lower().rfind('</body>')
        if idx < 0:
            raise SystemExit(f'No </body> in {path.relative_to(ROOT)}')
        prefix = text[:idx]
        if not prefix.endswith('\n'):
            prefix += '\n'
        updated = prefix + bundle + '\n' + text[idx:]

    if updated != path.read_text(encoding='utf-8'):
        path.write_text(updated, encoding='utf-8')
        print(f'updated {path.relative_to(ROOT)}')
    else:
        print(f'ok      {path.relative_to(ROOT)}')


if __name__ == '__main__':
    for page in pages():
        install(page)
