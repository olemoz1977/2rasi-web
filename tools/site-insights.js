(() => {
  'use strict';

  const ENDPOINT = 'https://workstyle-pilot-intake.olemoz1977.workers.dev';
  const EVENT_URL = `${ENDPOINT}/v1/event`;
  const FEEDBACK_URL = `${ENDPOINT}/v1/feedback`;
  const VERSION = '2rasi-insights-v1';
  const VISIT_KEY = '2rasi:visit:v1';
  const SOURCE_KEY = '2rasi:source:v1';

  const path = location.pathname.toLowerCase();
  const host = location.hostname.toLowerCase();
  const lang = (host === '2rasi.lt' || host.endsWith('.2rasi.lt') || document.documentElement.lang === 'lt') ? 'lt' : 'en';

  function toolFromPath() {
    const map = [
      ['/tools/leadership-360', 'leadership-360'],
      ['/tools/mirror', 'mirror'],
      ['/tools/multipliers', 'multipliers'],
      ['/tools/divergent', 'divergent'],
      ['/tools/situational-leadership', 'situational-leadership'],
      ['/tools/drama-triangle', 'drama-triangle'],
      ['/tools/strategic-thinking', 'strategic-thinking'],
      ['/tools/2pair', '2pair'],
      ['/tools/workstyle15', 'workstyle'],
    ];
    for (const [prefix, id] of map) if (path.startsWith(prefix)) return id;
    return path === '/' || path.endsWith('/index.html') ? 'gallery' : 'site';
  }

  const tool = toolFromPath();
  const isToolPage = tool !== 'gallery' && tool !== 'site';
  const isRunPage = /\/run\/|v07-cognitive\.html|\/pilot\//.test(path);

  function uuid() {
    if (crypto && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
  }

  function getVisitId() {
    try {
      let id = sessionStorage.getItem(VISIT_KEY);
      if (!id) {
        id = uuid();
        sessionStorage.setItem(VISIT_KEY, id);
      }
      return id;
    } catch {
      return uuid();
    }
  }

  function cleanHost(value) {
    try { return value ? new URL(value).hostname.toLowerCase().slice(0, 160) : ''; }
    catch { return ''; }
  }

  function classifySource(referrerHost) {
    const q = new URLSearchParams(location.search);
    const utm = (q.get('utm_source') || '').trim().toLowerCase().slice(0, 80);
    if (utm) return utm;
    const r = referrerHost || '';
    if (/tiktok/.test(r)) return 'tiktok';
    if (/facebook|fb\.com|fbcdn|l\.facebook/.test(r)) return 'facebook';
    if (/instagram/.test(r)) return 'instagram';
    if (/linkedin/.test(r)) return 'linkedin';
    if (/skool/.test(r)) return 'skool';
    if (/google|bing|duckduckgo|yahoo/.test(r)) return 'search';
    if (!r || r === host || r.endsWith(`.${host}`)) return 'direct';
    return 'referral';
  }

  function getSource() {
    try {
      const existing = sessionStorage.getItem(SOURCE_KEY);
      if (existing) return JSON.parse(existing);
    } catch {}

    const q = new URLSearchParams(location.search);
    const referrerHost = cleanHost(document.referrer);
    const source = {
      source: classifySource(referrerHost),
      medium: (q.get('utm_medium') || '').trim().slice(0, 80),
      campaign: (q.get('utm_campaign') || '').trim().slice(0, 120),
      content: (q.get('utm_content') || '').trim().slice(0, 120),
      referrerHost,
    };
    try { sessionStorage.setItem(SOURCE_KEY, JSON.stringify(source)); } catch {}
    return source;
  }

  const visitId = getVisitId();
  const source = getSource();

  function compactMeta(meta) {
    if (!meta || typeof meta !== 'object') return {};
    const out = {};
    for (const [key, value] of Object.entries(meta)) {
      if (value === undefined || value === null) continue;
      if (typeof value === 'string') out[key] = value.slice(0, 240);
      else if (typeof value === 'number' || typeof value === 'boolean') out[key] = value;
    }
    return out;
  }

  function post(url, body, keepalive = false) {
    const payload = JSON.stringify(body);
    try {
      return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive,
        credentials: 'omit',
        cache: 'no-store',
      }).catch(() => null);
    } catch {
      return Promise.resolve(null);
    }
  }

  function basePayload() {
    return {
      version: VERSION,
      visitId,
      toolId: tool,
      pagePath: location.pathname.slice(0, 240),
      pageHost: host.slice(0, 120),
      language: lang,
      source: source.source,
      medium: source.medium,
      campaign: source.campaign,
      content: source.content,
      referrerHost: source.referrerHost,
    };
  }

  const fired = new Set();
  function track(eventType, meta = {}, options = {}) {
    const dedupe = options.dedupe !== false;
    const key = `${eventType}:${tool}:${JSON.stringify(compactMeta(meta))}`;
    if (dedupe && fired.has(key)) return;
    if (dedupe) fired.add(key);
    post(EVENT_URL, {
      ...basePayload(),
      eventId: uuid(),
      eventType,
      occurredAt: new Date().toISOString(),
      meta: compactMeta(meta),
    }, Boolean(options.keepalive));
  }

  window.RASI_INSIGHTS = Object.freeze({
    track,
    complete(meta = {}) { markComplete(meta); },
    feedback() { openFeedback(); },
  });

  track('page_view', {
    title: document.title,
    context: isRunPage ? 'run' : (isToolPage ? 'landing' : 'gallery'),
  });

  function looksLikeStart(link) {
    const href = link.getAttribute('href') || '';
    if (!href || href.startsWith('#') || href.startsWith('mailto:')) return false;
    if (link.matches('[data-2rasi-start],[data-drama-start],[data-workstyle-start]')) return true;
    let u;
    try { u = new URL(href, location.href); } catch { return false; }
    const p = u.pathname.toLowerCase();
    if (/\/run\//.test(p) || /v07-cognitive\.html$/.test(p)) return true;
    if (tool === 'leadership-360' && u.hostname.endsWith('omesg360.eu')) return true;
    if (tool === '2pair' && u.hostname.endsWith('omesg360.eu')) return true;
    return false;
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    if (looksLikeStart(link)) {
      let targetHost = '';
      let targetPath = '';
      try {
        const u = new URL(link.href, location.href);
        targetHost = u.hostname;
        targetPath = u.pathname;
      } catch {}
      track('tool_start', { targetHost, targetPath }, { keepalive: true });
    }
  }, true);

  let interacted = false;
  const interactionStartedAt = Date.now();
  const interactionEvents = ['input', 'change', 'pointerdown', 'keydown'];
  interactionEvents.forEach(type => document.addEventListener(type, () => { interacted = true; }, { capture: true, passive: true }));

  let completed = false;
  let completionAt = 0;
  function markComplete(meta = {}) {
    if (completed || !isRunPage) return;
    completed = true;
    completionAt = Date.now();
    track('tool_complete', {
      elapsedSec: Math.max(0, Math.round((completionAt - interactionStartedAt) / 1000)),
      ...compactMeta(meta),
    }, { keepalive: true });
    showFeedbackTrigger(true);
  }

  function visible(el) {
    if (!el || !el.isConnected) return false;
    if (el.hidden) return false;
    const style = getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  }

  const resultSelector = [
    '#resultsCard', '#results', '#result', '#resultScreen', '#result-screen', '#summary', '#done', '#doneScreen',
    '.results-card', '.result-card', '.results', '.result-screen', '[data-results]', '[data-result]'
  ].join(',');

  const initialCandidates = new WeakMap();
  document.querySelectorAll(resultSelector).forEach(el => {
    initialCandidates.set(el, { visible: visible(el), text: (el.textContent || '').trim().length });
  });

  function scanForCompletion() {
    if (completed || !isRunPage || !interacted) return;
    const nodes = document.querySelectorAll(resultSelector);
    for (const el of nodes) {
      const nowVisible = visible(el);
      const nowText = (el.textContent || '').trim().length;
      const initial = initialCandidates.get(el);
      if (!nowVisible) continue;
      if (!initial) {
        if (nowText >= 80) return markComplete({ detectedBy: 'result-added' });
        initialCandidates.set(el, { visible: nowVisible, text: nowText });
        continue;
      }
      if (!initial.visible && nowVisible && nowText >= 60) return markComplete({ detectedBy: 'result-visible' });
      if (nowVisible && nowText >= Math.max(120, initial.text + 80)) return markComplete({ detectedBy: 'result-populated' });
    }
  }

  if (isRunPage) {
    const observer = new MutationObserver(scanForCompletion);
    observer.observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['hidden', 'class', 'style'] });
    setInterval(scanForCompletion, 1000);
  }

  let widget;
  let feedbackOpen = false;
  let feedbackChoice = '';

  function css() {
    if (document.getElementById('rasi-insights-style')) return;
    const style = document.createElement('style');
    style.id = 'rasi-insights-style';
    style.textContent = `
      .rasi-feedback{position:fixed;z-index:9999;right:18px;bottom:18px;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#17231f}
      .rasi-feedback *{box-sizing:border-box}
      .rasi-feedback-trigger{border:1px solid rgba(53,107,97,.28);background:rgba(255,255,255,.94);color:#244b44;border-radius:999px;padding:10px 14px;font-size:13px;font-weight:700;box-shadow:0 10px 28px rgba(18,41,34,.12);cursor:pointer;backdrop-filter:blur(8px)}
      .rasi-feedback-panel{width:min(360px,calc(100vw - 24px));background:#fff;border:1px solid rgba(53,107,97,.22);border-radius:18px;padding:16px;box-shadow:0 20px 55px rgba(18,41,34,.18)}
      .rasi-feedback-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:12px}.rasi-feedback-head strong{font:600 20px/1.15 Georgia,serif}.rasi-feedback-close{border:0;background:transparent;font-size:20px;line-height:1;padding:0 2px;cursor:pointer;color:#65736d}
      .rasi-feedback-choices{display:flex;gap:8px;margin:10px 0}.rasi-feedback-choices button{flex:1;border:1px solid #d4ddd8;background:#f7f9f8;border-radius:12px;padding:10px;cursor:pointer;font-weight:700;color:#244b44}.rasi-feedback-choices button[aria-pressed="true"]{background:#e3efeb;border-color:#356b61}
      .rasi-feedback-label{display:block;font-size:13px;font-weight:700;margin:12px 0 6px}.rasi-feedback textarea{width:100%;min-height:84px;resize:vertical;border:1px solid #d4ddd8;border-radius:12px;padding:10px 11px;font:inherit;color:#17231f;background:#fff}
      .rasi-feedback-consent{display:flex;gap:8px;align-items:flex-start;font-size:12px;color:#51615a;margin:10px 0}.rasi-feedback-consent input{margin-top:2px}.rasi-feedback-note{font-size:11px;color:#718079;margin:8px 0 0}.rasi-feedback-send{width:100%;border:0;background:#356b61;color:#fff;border-radius:999px;padding:11px 14px;font-weight:750;cursor:pointer;margin-top:8px}.rasi-feedback-send:disabled{opacity:.45;cursor:not-allowed}.rasi-feedback-thanks{font-size:14px;color:#244b44;margin:4px 0}
      @media(max-width:600px){.rasi-feedback{left:12px;right:12px;bottom:12px}.rasi-feedback-trigger{float:right}.rasi-feedback-panel{width:100%}}
    `;
    document.head.appendChild(style);
  }

  function ensureWidget() {
    if (widget || !isToolPage) return;
    css();
    widget = document.createElement('div');
    widget.className = 'rasi-feedback';
    widget.hidden = true;
    document.body.appendChild(widget);
  }

  function showFeedbackTrigger(force = false) {
    if (!isToolPage) return;
    ensureWidget();
    if (!force && isRunPage && !completed) return;
    if (feedbackOpen) return;
    const doneKey = `2rasi:feedback:${tool}`;
    try { if (sessionStorage.getItem(doneKey) === 'sent') return; } catch {}
    widget.hidden = false;
    widget.innerHTML = `<button type="button" class="rasi-feedback-trigger">${lang === 'lt' ? 'Ar buvo naudinga?' : 'Was this useful?'}</button>`;
    widget.querySelector('button').addEventListener('click', openFeedback);
  }

  function openFeedback() {
    if (!isToolPage) return;
    ensureWidget();
    feedbackOpen = true;
    widget.hidden = false;
    const t = lang === 'lt' ? {
      title: 'Ar čia buvo kas nors naudingo?', yes: 'Taip', no: 'Nelabai',
      prompt: 'Kas konkrečiai?', promptNo: 'Ko pritrūko?',
      consent: 'Gali anonimiškai cituoti mano komentarą 2rasi puslapyje.',
      note: 'Be vardo ir el. pašto. Komentarą cituosime tik pažymėjus sutikimą.', send: 'Siųsti', close: 'Uždaryti'
    } : {
      title: 'Was there anything useful here?', yes: 'Yes', no: 'Not really',
      prompt: 'What specifically?', promptNo: 'What was missing?',
      consent: 'You may quote my comment anonymously on 2rasi.',
      note: 'No name or email. We quote comments only with this permission.', send: 'Send', close: 'Close'
    };
    widget.innerHTML = `
      <div class="rasi-feedback-panel" role="dialog" aria-label="${t.title}">
        <div class="rasi-feedback-head"><strong>${t.title}</strong><button class="rasi-feedback-close" type="button" aria-label="${t.close}">×</button></div>
        <div class="rasi-feedback-choices"><button type="button" data-value="yes" aria-pressed="false">${t.yes}</button><button type="button" data-value="no" aria-pressed="false">${t.no}</button></div>
        <label class="rasi-feedback-label" for="rasi-feedback-text">${t.prompt}</label>
        <textarea id="rasi-feedback-text" maxlength="1200"></textarea>
        <label class="rasi-feedback-consent"><input type="checkbox" id="rasi-feedback-quote"> <span>${t.consent}</span></label>
        <button class="rasi-feedback-send" type="button" disabled>${t.send}</button>
        <p class="rasi-feedback-note">${t.note}</p>
      </div>`;
    const close = widget.querySelector('.rasi-feedback-close');
    const label = widget.querySelector('.rasi-feedback-label');
    const send = widget.querySelector('.rasi-feedback-send');
    const textarea = widget.querySelector('textarea');
    widget.querySelectorAll('.rasi-feedback-choices button').forEach(btn => {
      btn.addEventListener('click', () => {
        feedbackChoice = btn.dataset.value;
        widget.querySelectorAll('.rasi-feedback-choices button').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
        label.textContent = feedbackChoice === 'yes' ? t.prompt : t.promptNo;
        send.disabled = false;
      });
    });
    close.addEventListener('click', () => { feedbackOpen = false; widget.hidden = true; });
    send.addEventListener('click', async () => {
      if (!feedbackChoice) return;
      send.disabled = true;
      const comment = textarea.value.trim().slice(0, 1200);
      const quoteConsent = Boolean(widget.querySelector('#rasi-feedback-quote').checked && comment);
      const res = await post(FEEDBACK_URL, {
        ...basePayload(),
        feedbackId: uuid(),
        usefulness: feedbackChoice,
        comment,
        quoteConsent,
        completedBeforeFeedback: completed,
        occurredAt: new Date().toISOString(),
      });
      if (res && res.ok) {
        track('feedback', { usefulness: feedbackChoice, hasComment: Boolean(comment), quoteConsent }, { keepalive: true });
        try { sessionStorage.setItem(`2rasi:feedback:${tool}`, 'sent'); } catch {}
        widget.innerHTML = `<div class="rasi-feedback-panel"><p class="rasi-feedback-thanks">${lang === 'lt' ? 'Ačiū. Gavome.' : 'Thank you. Received.'}</p></div>`;
        setTimeout(() => { widget.hidden = true; feedbackOpen = false; }, 2200);
      } else {
        send.disabled = false;
        send.textContent = lang === 'lt' ? 'Nepavyko. Bandyti dar kartą' : 'Failed. Try again';
      }
    });
  }

  if (isToolPage) {
    if (isRunPage) {
      setTimeout(() => { if (!completed) showFeedbackTrigger(true); }, 90_000);
    } else {
      setTimeout(() => showFeedbackTrigger(true), 12_000);
    }
  }
})();
