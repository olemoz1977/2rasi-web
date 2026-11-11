(() => {
  "use strict";

  const spec = window.WORKSTYLE15;
  if (!spec) throw new Error("WORKSTYLE15 data spec is missing.");

  const itemById = new Map(spec.items.map(item => [item.id, item]));
  const orderedItems = spec.order.map(id => itemById.get(id));
  const TOTAL = orderedItems.length;
  const STORAGE_KEY = `workstyle15:${spec.instrument.version}:${spec.instrument.formId}:session`;

  const els = {};
  let state = null;
  let questionShownAt = null;
  let activeSince = null;

  const $ = id => document.getElementById(id);
  const nowIso = () => new Date().toISOString();

  function uuid() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") return window.crypto.randomUUID();
    return `ws15-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function validateSpec() {
    const errors = [];
    if (TOTAL !== 45) errors.push(`Expected 45 ordered items, got ${TOTAL}`);
    if (spec.items.length !== 45) errors.push(`Expected 45 items, got ${spec.items.length}`);
    if (new Set(spec.order).size !== TOTAL) errors.push("Order contains duplicate item IDs");
    for (const id of spec.order) if (!itemById.has(id)) errors.push(`Order references missing item ${id}`);
    for (const dim of Object.keys(spec.dimensions)) {
      const items = spec.items.filter(item => item.dim === dim);
      if (items.length !== 3) errors.push(`${dim} has ${items.length} items, expected 3`);
      if (items.filter(item => item.dir === "R").length !== 1) errors.push(`${dim} must have exactly one reverse item`);
    }
    if (errors.length) throw new Error(errors.join("; "));
  }

  function emptyState() {
    return {
      sessionId: uuid(),
      instrumentId: spec.instrument.id,
      instrumentVersion: spec.instrument.version,
      formId: spec.instrument.formId,
      language: spec.instrument.language,
      startedAt: null,
      completedAt: null,
      lastSeenAt: nowIso(),
      activeMs: 0,
      currentIndex: 0,
      responses: {},
      timing: {},
      feedback: { specificity: null, comment: "" },
      completed: false
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed.instrumentVersion !== spec.instrument.version || parsed.formId !== spec.instrument.formId) return null;
      return parsed;
    } catch (_) { return null; }
  }

  function saveState() {
    if (!state) return;
    state.lastSeenAt = nowIso();
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  function stopClock() {
    if (activeSince !== null && state) {
      state.activeMs = (state.activeMs || 0) + Math.max(0, Date.now() - activeSince);
      activeSince = null;
    }
  }

  function startClock() {
    if (activeSince === null) activeSince = Date.now();
  }

  function setScreen(name) {
    els.intro.hidden = name !== "intro";
    els.quiz.hidden = name !== "quiz";
    els.breakScreen.hidden = name !== "break";
    els.results.hidden = name !== "results";
    if (name === "quiz") startClock(); else stopClock();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function initIntro() {
    const saved = loadState();
    if (saved && !saved.completed && Object.keys(saved.responses || {}).length > 0) {
      els.resumeBtn.hidden = false;
      els.resumeInfo.textContent = `Rasta nebaigta sesija: atsakyta ${Object.keys(saved.responses).length} iš ${TOTAL}.`;
    } else {
      els.resumeBtn.hidden = true;
      els.resumeInfo.textContent = "";
    }
  }

  function startNew() {
    const existing = loadState();
    if (existing && !existing.completed && Object.keys(existing.responses || {}).length > 0) {
      if (!confirm("Yra nebaigta sesija. Pradėti iš naujo?")) return;
    }
    state = emptyState();
    state.startedAt = nowIso();
    saveState();
    setScreen("quiz");
    renderQuestion();
  }

  function resume() {
    state = loadState() || emptyState();
    if (!state.startedAt) state.startedAt = nowIso();
    state.currentIndex = Math.min(Math.max(0, state.currentIndex || 0), TOTAL - 1);
    setScreen("quiz");
    renderQuestion();
  }

  function recordDeparture() {
    if (!state || questionShownAt === null) return;
    const item = orderedItems[state.currentIndex];
    if (!item) return;
    const timing = state.timing[item.id] || { firstResponseMs: null, visits: 0, changes: 0 };
    timing.lastViewMs = Math.max(0, Date.now() - questionShownAt);
    state.timing[item.id] = timing;
    questionShownAt = null;
  }

  function setResponse(value) {
    const item = orderedItems[state.currentIndex];
    const previous = state.responses[item.id];
    const timing = state.timing[item.id] || { firstResponseMs: null, visits: 1, changes: 0 };
    if (timing.firstResponseMs === null && questionShownAt !== null) {
      timing.firstResponseMs = Math.max(0, Date.now() - questionShownAt);
    }
    if (previous !== undefined && previous !== value) timing.changes = (timing.changes || 0) + 1;
    state.responses[item.id] = value;
    state.timing[item.id] = timing;
    saveState();
    renderSelection(value);
    els.nextBtn.disabled = false;
  }

  function renderSelection(selected) {
    els.scaleOptions.querySelectorAll("input[name=response]").forEach(input => {
      input.checked = Number(input.value) === selected;
    });
    els.unknownBtn.classList.toggle("selected", selected === "NA");
    els.unknownBtn.setAttribute("aria-pressed", selected === "NA" ? "true" : "false");
  }

  function renderQuestion() {
    const item = orderedItems[state.currentIndex];
    if (!item) return;
    questionShownAt = Date.now();
    const timing = state.timing[item.id] || { firstResponseMs: null, visits: 0, changes: 0 };
    timing.visits = (timing.visits || 0) + 1;
    state.timing[item.id] = timing;

    const pos = state.currentIndex + 1;
    const section = Math.floor(state.currentIndex / 15) + 1;
    els.progressLabel.textContent = `${pos} / ${TOTAL}`;
    els.blockLabel.textContent = `Blokas ${section} iš 3`;
    els.progressBar.style.width = `${(pos / TOTAL) * 100}%`;
    els.itemId.textContent = `Teiginys ${pos}`;
    els.questionText.textContent = item.text;

    const labels = [
      "Visai nebūdinga",
      "Dažniau nebūdinga",
      "Kartais taip, kartais ne",
      "Dažniau būdinga",
      "Labai būdinga"
    ];

    els.scaleOptions.innerHTML = labels.map((label, idx) => {
      const value = idx + 1;
      return `<div class="ws-choice"><input type="radio" name="response" id="r${value}" value="${value}"><label for="r${value}"><span class="ws-choice-num">${value}</span><span class="ws-choice-text">${escapeHtml(label)}</span></label></div>`;
    }).join("");

    els.scaleOptions.querySelectorAll("input[name=response]").forEach(input => {
      input.addEventListener("change", e => setResponse(Number(e.target.value)));
    });
    els.unknownBtn.onclick = () => setResponse("NA");

    const selected = state.responses[item.id];
    renderSelection(selected);
    els.prevBtn.disabled = state.currentIndex === 0;
    els.nextBtn.disabled = selected === undefined;
    els.nextBtn.textContent = state.currentIndex === TOTAL - 1 ? "Rodyti rezultatą" : "Toliau";
    saveState();
  }

  function prevQuestion() {
    if (state.currentIndex <= 0) return;
    recordDeparture();
    state.currentIndex -= 1;
    saveState();
    renderQuestion();
  }

  function nextQuestion() {
    const item = orderedItems[state.currentIndex];
    if (state.responses[item.id] === undefined) return;
    recordDeparture();

    if (state.currentIndex === TOTAL - 1) return complete();

    const completedPos = state.currentIndex + 1;
    state.currentIndex += 1;
    saveState();

    if (completedPos === 15 || completedPos === 30) {
      const block = completedPos / 15;
      els.breakTitle.textContent = `${block} iš 3 blokų baigta`;
      els.breakText.textContent = block === 1
        ? "Liko 30 teiginių. Jei reikia, trumpam atitrauk akis nuo ekrano."
        : "Liko paskutiniai 15 teiginių.";
      setScreen("break");
    } else {
      renderQuestion();
    }
  }

  function continueAfterBreak() {
    setScreen("quiz");
    renderQuestion();
  }

  function scoredValue(item, response) {
    if (response === "NA" || response === null || response === undefined) return null;
    return item.dir === "R" ? 6 - response : response;
  }

  function calculateScores() {
    const dimensionScores = {};
    const dimensionResponseCounts = {};

    for (const dim of Object.keys(spec.dimensions)) {
      const items = spec.items.filter(item => item.dim === dim);
      const values = items
        .map(item => scoredValue(item, state.responses[item.id]))
        .filter(value => value !== null);
      dimensionResponseCounts[dim] = values.length;
      if (values.length < 2) {
        dimensionScores[dim] = null;
      } else {
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        dimensionScores[dim] = Math.round((((mean - 1) / 4) * 100) * 10) / 10;
      }
    }

    const domainScores = {};
    for (const domain of spec.domains) {
      const values = domain.dimensions.map(dim => dimensionScores[dim]).filter(value => value !== null);
      domainScores[domain.id] = values.length >= 2
        ? Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 10) / 10
        : null;
    }
    return { dimensionScores, dimensionResponseCounts, domainScores };
  }

  function complete() {
    const missing = spec.order.filter(id => state.responses[id] === undefined);
    if (missing.length) {
      state.currentIndex = spec.order.indexOf(missing[0]);
      setScreen("quiz");
      renderQuestion();
      return;
    }
    stopClock();
    state.completed = true;
    state.completedAt = nowIso();
    state.scores = calculateScores();
    saveState();
    renderResults();
    setScreen("results");
  }

  function scoreLabel(score) {
    return score === null ? "–" : String(Math.round(score));
  }

  function renderResults() {
    if (!state.scores) state.scores = calculateScores();
    const { dimensionScores, dimensionResponseCounts, domainScores } = state.scores;

    const ranked = Object.entries(dimensionScores)
      .filter(([, score]) => score !== null)
      .map(([dim, score]) => ({ dim, score }))
      .sort((a, b) => b.score - a.score);

    const makeList = list => `<ul>${list.map(x => `<li><strong>${escapeHtml(spec.dimensions[x.dim].lt)}</strong> — ${Math.round(x.score)}</li>`).join("")}</ul>`;
    els.topProfile.innerHTML = makeList(ranked.slice(0, 3));
    els.lowProfile.innerHTML = makeList([...ranked].reverse().slice(0, 3));

    const dimOrder = spec.domains.flatMap(domain => domain.dimensions);
    els.dimensionsList.innerHTML = dimOrder.map(dim => {
      const meta = spec.dimensions[dim];
      const score = dimensionScores[dim];
      const valid = dimensionResponseCounts[dim];
      const domain = spec.domains.find(d => d.id === meta.domain);
      const width = score === null ? 0 : Math.max(0, Math.min(100, score));
      const countNote = valid < 3 ? `<span class="ws-missing-note">${valid}/3 įvertinti</span>` : "";
      return `<details class="ws-dimension">
        <summary>
          <span class="ws-dim-name"><strong>${escapeHtml(meta.lt)}</strong><span>${escapeHtml(domain.lt)} ${countNote}</span></span>
          <span class="ws-bar-track"><span class="ws-bar" style="width:${width}%"></span></span>
          <span class="ws-dim-score">${scoreLabel(score)}</span>
        </summary>
        <div class="ws-dim-body">
          <p><b>Ką matuoja</b>${escapeHtml(meta.measures)}</p>
          <p><b>Kai tendencija labiau išreikšta</b>${escapeHtml(meta.high)}</p>
          <p><b>Kai tendencija mažiau išreikšta</b>${escapeHtml(meta.low)}</p>
          <p><b>Gali padėti</b>${escapeHtml(meta.helps)}</p>
          <p><b>Verta stebėti</b>${escapeHtml(meta.watch)}</p>
          <p class="ws-prompt"><b>Pastebėk</b>${escapeHtml(meta.prompt)}</p>
        </div>
      </details>`;
    }).join("");

    els.domainGrid.innerHTML = spec.domains.map(domain => {
      const score = domainScores[domain.id];
      return `<article class="ws-domain"><strong>${escapeHtml(domain.lt)}</strong><div class="ws-index">${scoreLabel(score)}</div><small>${score === null ? "nepakanka atsakymų" : "teorinės skalės indeksas"}</small></article>`;
    }).join("");

    const unknownCount = Object.values(state.responses).filter(v => v === "NA").length;
    const minutes = Math.max(1, Math.round((state.activeMs || 0) / 60000));
    els.completionMeta.textContent = `Aktyvus pildymo laikas: apie ${minutes} min. · „Sunku įvertinti“: ${unknownCount} · v${spec.instrument.version}`;

    if (state.feedback?.specificity) {
      const radio = document.querySelector(`input[name="specificity"][value="${state.feedback.specificity}"]`);
      if (radio) radio.checked = true;
    }
    els.feedbackComment.value = state.feedback?.comment || "";
  }

  function captureFeedback() {
    const checked = document.querySelector('input[name="specificity"]:checked');
    state.feedback = {
      specificity: checked ? Number(checked.value) : null,
      comment: els.feedbackComment.value.trim()
    };
  }

  function exportPayload() {
    captureFeedback();
    const scores = state.scores || (state.completed ? calculateScores() : null);
    return {
      schema: "workstyle15-pilot-session-v2",
      meta: {
        sessionId: state.sessionId,
        instrumentVersion: state.instrumentVersion,
        formId: state.formId,
        language: state.language,
        startedAt: state.startedAt,
        completedAt: state.completedAt,
        lastSeenAt: state.lastSeenAt,
        completed: Boolean(state.completed),
        activeMs: Math.round(state.activeMs || 0),
        answeredCount: Object.keys(state.responses || {}).length,
        unknownCount: Object.values(state.responses || {}).filter(v => v === "NA").length
      },
      responses: spec.order.map((id, index) => {
        const item = itemById.get(id);
        const response = state.responses[id];
        return {
          position: index + 1,
          block: Math.floor(index / 15) + 1,
          itemId: id,
          dimension: item.dim,
          direction: item.dir,
          response: response ?? null,
          scored: scoredValue(item, response),
          firstResponseMs: state.timing?.[id]?.firstResponseMs ?? null,
          visits: state.timing?.[id]?.visits ?? 0,
          changes: state.timing?.[id]?.changes ?? 0
        };
      }),
      scores,
      feedback: state.feedback
    };
  }

  function downloadJson() {
    stopClock();
    saveState();
    const blob = new Blob([JSON.stringify(exportPayload(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `workstyle15-${spec.instrument.version}-${state.sessionId}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function saveFeedback() {
    captureFeedback();
    saveState();
    els.feedbackStatus.textContent = "Atsiliepimas išsaugotas šiame įrenginyje.";
  }

  function restart() {
    if (!confirm("Pradėti naują sesiją?")) return;
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
    state = null;
    setScreen("intro");
    initIntro();
  }

  function bind() {
    ["intro","quiz","breakScreen","results","startBtn","resumeBtn","resumeInfo","progressBar","progressLabel","blockLabel","itemId","questionText","scaleOptions","unknownBtn","prevBtn","nextBtn","breakTitle","breakText","continueBtn","topProfile","lowProfile","dimensionsList","domainGrid","completionMeta","feedbackComment","feedbackStatus","saveFeedbackBtn","exportBtn","restartBtn"].forEach(id => els[id] = $(id));

    els.startBtn.addEventListener("click", startNew);
    els.resumeBtn.addEventListener("click", resume);
    els.prevBtn.addEventListener("click", prevQuestion);
    els.nextBtn.addEventListener("click", nextQuestion);
    els.continueBtn.addEventListener("click", continueAfterBreak);
    els.saveFeedbackBtn.addEventListener("click", saveFeedback);
    els.exportBtn.addEventListener("click", downloadJson);
    els.restartBtn.addEventListener("click", restart);

    document.addEventListener("visibilitychange", () => {
      if (!state || els.quiz.hidden) return;
      if (document.hidden) { stopClock(); saveState(); } else startClock();
    });
    window.addEventListener("beforeunload", () => { if (state) { stopClock(); saveState(); } });
  }

  function boot() {
    try {
      validateSpec();
      bind();
      initIntro();
      const saved = loadState();
      if (saved?.completed && saved.scores) {
        state = saved;
        renderResults();
        setScreen("results");
      } else {
        setScreen("intro");
      }
    } catch (err) {
      console.error(err);
      document.body.innerHTML = `<main class="ws-shell"><h1>WorkStyle 15</h1><p>Nepavyko paleisti v0.5.</p><pre>${escapeHtml(err.message)}</pre></main>`;
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
