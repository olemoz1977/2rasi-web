from pathlib import Path

index = Path('index.html')
text = index.read_text(encoding='utf-8')
text = text.replace('i18n.js?v=20260824-0732', 'i18n.js?v=20260825-trust')
anchor = """        document.querySelectorAll('[data-en-legacy]').forEach(link => {
          const key = link.getAttribute('data-en-legacy');
          if (routes[key]) link.href = routes[key];
          link.target = '_self';
          link.removeAttribute('rel');
        });"""
addition = anchor + """

        document.querySelectorAll('.experiment-actions a[href^="/tools/"]').forEach(link => {
          link.target = '_self';
          link.removeAttribute('rel');
          const arrow = link.querySelector('span');
          if (arrow && arrow.textContent.trim() === '↗') arrow.textContent = '→';
        });"""
if 'experiment-actions a[href^="/tools/"]' not in text:
    if anchor not in text:
        raise SystemExit('Homepage route anchor not found')
    text = text.replace(anchor, addition, 1)
index.write_text(text, encoding='utf-8')

landing_js = Path('tools/tool-landing-i18n.js')
js = landing_js.read_text(encoding='utf-8')
old = '''// Legacy tools live on GitHub Pages. Keep them in the same browsing context
// so Back naturally returns to this 2rasi landing instead of leaving an
// orphaned tab after the reflection is finished.
(() => {
  document.querySelectorAll('a[href*="olemoz1977.github.io/"]').forEach((link) => {
    link.target = '_self';
    link.removeAttribute('rel');
  });
})();'''
new = '''// Legacy runtimes now live under the same 2rasi domain. Keep local navigation
// in the same browsing context and use an internal arrow rather than the
// external-link symbol. True external systems keep their ↗ marker.
(() => {
  document.querySelectorAll('a[href^="/tools/"]').forEach((link) => {
    link.target = '_self';
    link.removeAttribute('rel');
    if (link.textContent.includes('↗')) link.textContent = link.textContent.replace('↗', '→');
  });
})();'''
if old not in js:
    raise SystemExit('Legacy navigation block not found')
landing_js.write_text(js.replace(old, new, 1), encoding='utf-8')

for path in Path('tools').glob('*/index.html'):
    html = path.read_text(encoding='utf-8')
    html = html.replace('tool-landing-i18n.js?v=20260824-0135', 'tool-landing-i18n.js?v=20260825-trust')
    path.write_text(html, encoding='utf-8')
