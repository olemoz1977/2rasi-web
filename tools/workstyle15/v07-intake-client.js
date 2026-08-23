(() => {
  'use strict';

  const cfg = window.WORKSTYLE_V07_INTAKE;
  if (!cfg || cfg.enabled !== true || !cfg.sessionUrl) return;

  const done = document.getElementById('done');
  const exportBtn = document.getElementById('exportBtn');
  const feedback = document.getElementById('generalFeedback');
  const details = document.querySelector('#intro .ws-details');
  const content = window.WORKSTYLE_V07_CONTENT;

  if (!done || !exportBtn || !feedback || !content || !Array.isArray(content.items)) return;

  const actions = exportBtn.closest('.ws-actions');
  if (!actions) return;

  exportBtn.classList.remove('primary');

  const submitBtn = document.createElement('button');
  submitBtn.type = 'button';
  submitBtn.id = 'submitPilotBtn';
  submitBtn.className = 'ws-button primary';
  submitBtn.textContent = 'Pateikti piloto duomenis';
  actions.insertBefore(submitBtn, exportBtn);

  const status = document.createElement('p');
  status.id = 'submitPilotStatus';
  status.className = 'ws-small';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.textContent = 'Pateikimas nėra automatinis: duomenys siunčiami tik paspaudus šį mygtuką.';
  actions.insertAdjacentElement('afterend', status);

  if (details && cfg.privacyText) {
    const privacyParagraph = details.querySelector('p:last-of-type');
    if (privacyParagraph) privacyParagraph.textContent = cfg.privacyText;
  }

  const expectedResponses = Number(cfg.expectedResponses || content.items.length || 34);
  const storageKey = cfg.storageKey || 'workstyle-v07-cognitive-session-e';
  const requestTimeoutMs = Number(cfg.requestTimeoutMs || 15000);
  const itemMap = content.items.map(({ id, axis, stem, left, right }) => ({
    id,
    axis,
    stem,
    left,
    right,
  }));

  function readSession() {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function writeSession(session) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(session));
    } catch {
      // Submission can still proceed even if local persistence is unavailable.
    }
  }

  function responseCount(session) {
    return session?.responses && typeof session.responses === 'object'
      ? Object.values(session.responses).filter(response => response?.kind).length
      : 0;
  }

  function makePayload(session) {
    const general = feedback.value.trim();
    session.feedback = { ...(session.feedback || {}), general };
    writeSession(session);

    return {
      ...session,
      itemMap,
      submittedAt: new Date().toISOString(),
    };
  }

  function renderReceipt(session) {
    const receipt = session?.submission;
    if (receipt?.status === 'received') {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sesija pateikta';
      status.textContent = receipt.receivedAt
        ? `Ačiū — sesija gauta ${new Date(receipt.receivedAt).toLocaleString('lt-LT')}.`
        : 'Ačiū — sesija gauta.';
      return true;
    }
    return false;
  }

  async function submitSession() {
    const session = readSession();
    if (!session) {
      status.textContent = 'Sesijos naršyklėje nerasta. Atsisiųsk JSON kopiją.';
      return;
    }

    const answered = responseCount(session);
    if (!session.completedAt || answered !== expectedResponses) {
      status.textContent = `Sesija dar neužbaigta (${answered}/${expectedResponses}).`;
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Pateikiama…';
    status.textContent = 'Siunčiama viena užbaigta piloto sesija…';

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), requestTimeoutMs);

    try {
      const response = await fetch(cfg.sessionUrl, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(makePayload(session)),
        signal: controller.signal,
      });

      let body = null;
      try {
        body = await response.json();
      } catch {
        // A non-JSON error still falls through to the generic failure message.
      }

      if (!response.ok || !body?.ok) {
        throw new Error(body?.error || `HTTP ${response.status}`);
      }
      if (body.sessionId && body.sessionId !== session.sessionId) {
        throw new Error('session_receipt_mismatch');
      }

      session.submission = {
        status: 'received',
        receivedAt: body.receivedAt || new Date().toISOString(),
      };
      writeSession(session);
      renderReceipt(session);
    } catch (error) {
      console.error('WorkStyle pilot submission failed', error);
      submitBtn.disabled = false;
      submitBtn.textContent = 'Bandyti pateikti dar kartą';
      status.textContent = error?.name === 'AbortError'
        ? 'Pateikimas užtruko per ilgai. Sesija liko naršyklėje — gali bandyti dar kartą arba atsisiųsti JSON kopiją.'
        : 'Nepavyko pateikti. Sesija liko naršyklėje — gali bandyti dar kartą arba atsisiųsti JSON kopiją.';
    } finally {
      clearTimeout(timeoutId);
    }
  }

  submitBtn.addEventListener('click', submitSession);
  renderReceipt(readSession());
})();
