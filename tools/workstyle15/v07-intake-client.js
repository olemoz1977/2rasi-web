(() => {
  'use strict';

  const cfg = window.WORKSTYLE_V07_INTAKE;
  if (!cfg || cfg.enabled !== true || !cfg.sessionUrl) return;

  const content = window.WORKSTYLE_V07_CONTENT;
  if (!content || !Array.isArray(content.items)) return;

  const feedback = document.getElementById('generalFeedback');
  const exportBtn = document.getElementById('exportBtn');
  const details = document.querySelector('#intro .ws-details');
  const actions = exportBtn?.closest('.ws-actions') || null;

  const expectedResponses = Number(cfg.expectedResponses || content.items.length || 34);
  const storageKey = cfg.storageKey || 'workstyle-v07-cognitive-session-e';
  const requestTimeoutMs = Number(cfg.requestTimeoutMs || 15000);
  const pollMs = Number(cfg.autosavePollMs || 200);

  const itemMap = content.items.map(({ id, axis, stem, left, right }) => ({
    id,
    axis,
    stem,
    left,
    right,
  }));

  let status = null;
  if (actions) {
    status = document.createElement('p');
    status.id = 'pilotAutosaveStatus';
    status.className = 'ws-small';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    status.textContent = 'Atsakymai tyrimo analizei išsaugomi automatiškai.';
    actions.insertAdjacentElement('afterend', status);
  }

  if (details && cfg.privacyText) {
    const privacyParagraph = details.querySelector('p:last-of-type');
    if (privacyParagraph) privacyParagraph.textContent = cfg.privacyText;
  }

  function readSession() {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function responseCount(session) {
    if (!session?.responses || typeof session.responses !== 'object') return 0;
    return Object.values(session.responses).filter(response => response?.kind).length;
  }

  function fingerprint(session) {
    return JSON.stringify({
      sessionId: session?.sessionId || null,
      completedAt: session?.completedAt || null,
      index: session?.index ?? null,
      responses: session?.responses || {},
      timingMs: session?.timingMs || {},
      breaks: session?.breaks || [],
      onBreak: session?.onBreak ?? null,
      pilotContext: session?.pilotContext || {},
    });
  }

  function makePayload(session) {
    const answered = responseCount(session);
    const completedAt = session.completedAt || (answered >= expectedResponses ? new Date().toISOString() : null);
    const { feedback: _feedback, submission: _submission, ...core } = session;

    return {
      ...core,
      completedAt,
      itemMap,
      captureMode: 'incremental-autosave',
      autosaveSeq: Date.now(),
      autosavedAt: new Date().toISOString(),
    };
  }

  let lastFingerprint = '';
  let queued = null;
  let inFlight = false;
  let retryTimer = null;

  function setStatus(message) {
    if (status) status.textContent = message;
  }

  function queueCurrentSession(force = false) {
    const session = readSession();
    if (!session || !session.sessionId || !session.responses) return;

    const answered = responseCount(session);
    if (answered === 0) return;

    // Do not rewrite the old technical/manual receipt merely because this
    // newer client was loaded. New incremental sessions have no such receipt.
    if (session.submission?.status === 'received' && !session.captureMode) return;

    const nextFingerprint = fingerprint(session);
    if (!force && nextFingerprint === lastFingerprint) return;
    lastFingerprint = nextFingerprint;

    queued = {
      payload: makePayload(session),
      answered,
    };
    drain();
  }

  async function sendSnapshot(snapshot) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), requestTimeoutMs);

    try {
      const response = await fetch(cfg.sessionUrl, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(snapshot.payload),
        signal: controller.signal,
      });

      let body = null;
      try {
        body = await response.json();
      } catch {
        // A non-JSON response is handled as a failed autosave below.
      }

      if (!response.ok || !body?.ok) {
        throw new Error(body?.error || `HTTP ${response.status}`);
      }
      if (body.sessionId && body.sessionId !== snapshot.payload.sessionId) {
        throw new Error('session_receipt_mismatch');
      }

      if (snapshot.answered >= expectedResponses) {
        setStatus(`${expectedResponses}/${expectedResponses} atsakymų išsaugota automatiškai.`);
      } else {
        setStatus(`Atsakymai saugomi automatiškai · ${snapshot.answered}/${expectedResponses}`);
      }
      return true;
    } catch (error) {
      console.error('WorkStyle pilot autosave failed', error);
      setStatus('Ryšys nutrūko. Sesija liko naršyklėje; bandysime išsaugoti dar kartą.');
      return false;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async function drain() {
    if (inFlight || !queued) return;
    inFlight = true;
    const snapshot = queued;
    queued = null;

    const ok = await sendSnapshot(snapshot);
    inFlight = false;

    if (!ok && !queued) {
      queued = snapshot;
      clearTimeout(retryTimer);
      retryTimer = setTimeout(() => {
        retryTimer = null;
        drain();
      }, 2500);
      return;
    }

    if (queued) drain();
  }

  function flushOnExit() {
    const session = readSession();
    if (!session || !session.sessionId || responseCount(session) === 0) return;
    if (session.submission?.status === 'received' && !session.captureMode) return;

    const payload = makePayload(session);
    try {
      fetch(cfg.sessionUrl, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch {
      // localStorage still retains the latest session for the next visit.
    }
  }

  const pollId = setInterval(() => queueCurrentSession(false), pollMs);
  queueCurrentSession(false);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      queueCurrentSession(true);
      flushOnExit();
    }
  });
  window.addEventListener('pagehide', flushOnExit);
  window.addEventListener('beforeunload', flushOnExit);

  // Keep the interval tied to this document only.
  window.addEventListener('unload', () => clearInterval(pollId), { once: true });

  // Feedback/reflection is intentionally not included in incremental session
  // payloads. It remains a separate collection layer.
  if (feedback) feedback.dataset.collection = 'separate';
})();
