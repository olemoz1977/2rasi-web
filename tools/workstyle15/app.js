(() => {
  "use strict";

  const spec = window.WORKSTYLE15;
  if (!spec) throw new Error("WORKSTYLE15 data spec is missing.");

  const STORAGE_KEY = `workstyle15:${spec.instrument.version}:${spec.instrument.formId}:session`;
  const COMPLETED_KEY = `workstyle15:${spec.instrument.version}:completed`;
  const itemById = new Map(spec.items.map(item => [item.id, item]));
  const orderedItems = spec.order.map(id => itemById.get(id));

  const els = {};
  let state = null;
  let questionShownAt = null;
  let activeSince = null;

  function $(id) { return document.getElementById(id); }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function uuid() {
    if (crypto && typeof crypto.randomUUID === "function") return crypto.randomUUID();
    return `ws15-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }

  function nowIso() { return new Date().toISOString(); }

  function validateSpec() {
    const errors = [];
    if (spec.items.length !== 75) errors.push(`Expected 75 items, got ${spec.items.length}`);
    if (spec.order.length !== 75) errors.push(`Expected 75 order positions, got ${spec.order.length}`);
    if (new Set(spec.order).size !== spec.order.length) errors.push("Order contains duplicate item IDs");
    for (const id of spec.order) if (!itemById.has(id)) errors.push(`Order references missing item ${id}`);
    for (const dim of Object.keys(spec.dimensions)) {
      const count = spec.items.filter(x => x.dim === dim).length;
      if (count !== 5) errors.push(`${dim} has ${count} items, expected 5`);
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
    } catch (_) {
      return null;
    }
  }

  function saveState() {
    if (!state) return;
    state.lastSeenAt = nowIso();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function stopActiveClock() {
    if (activeSince !== null && state) {
      state.activeMs = (state.activeMs || 0) + Math.max(0, Date.now() - activeSince);
      activeSince = null;
    }
  }

  function startActiveClock() {
    if (activeSince === null) activeSince = Date.now();
  }

  function setScreen(name) {
    els.intro.hidden = name !== "intro";
    els.quiz.hidden = name !== "quiz";
    els.results.hidden = name !== "results";
    if (name === "quiz") startActiveClock();
    else stopActiveClock();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function initIntro() {
    const saved = loadState();
    if (saved && !saved.completed && Object.keys(saved.responses || {}).length > 0) {
      els.resumeBtn.hidden = false;
      els.exportPartialBtn.hidden = false;
      const answered = Object.keys(saved.responses).length;
      els.resumeInfo.textContent = `Rasta nebaigta anoniminė sesija: atsakyta ${answered} iš 75.`;
    } else {
      els.resumeBtn.hidden = true;
      els.exportPartialBtn.hidden = true;
      els.resumeInfo.textContent = "";
    }
  }

  function startNew() {
    state = emptyState();
    state.startedAt = nowIso();
    state.currentIndex = 0;
    saveState();
    setScreen("quiz");
    renderQuestion();
  }

  function resume() {
    state = loadState() || emptyState();
    if (!state.startedAt) state.startedAt = nowIso();
    state.currentIndex = Math.min(Math.max(0, state.currentIndex || 0), 74);
    setScreen("quiz");
    renderQuestion();
  }

  function recordQuestionDeparture() {
    if (!state || questionShownAt === null) return;
    const item = orderedItems[state.currentIndex];
    if (!item) return;
    const entry = state.timing[item.id] || { firstResponseMs: null, visits: 0, changes: 0 };
    entry.lastViewMs = Math.max(0, Date.now() - questionShownAt);
    state.timing[item.id] = entry;
    questionShownAt = null;
  }

  function answer(value) {
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
    els.nextBtn.disabled = false;
  }

  function renderQuestion() {
    const item = orderedItems[state.currentIndex];
    if (!item) return;

    questionShownAt = Date.now();
    const timing = state.timing[item.id] || { firstResponseMs: null, visits: 0, changes: 0 };
    timing.visits = (timing.visits || 0) + 1;
    state.timing[item.id] = timing;

    const pos = state.currentIndex + 1;
    els.progressLabel.textContent = `${pos} / 75`;
    els.progressBar.style.width = `${(pos / 75) * 100}%`;
    els.itemId.textContent = `Teiginys ${pos}`;
    els.questionText.textContent = item.text;

    const labels = [
      "Visiškai nesutinku",
      "Nesutinku",
      "Nei sutinku, nei nesutinku",
      "Sutinku",
      "Visiškai sutinku"
    ];

    const selected = state.responses[item.id];
    els.scaleOptions.innerHTML = labels.map((label, idx) => {
      const value = idx + 1;
      const checked = selected === value ? " checked" : "";
      return `<div class="ws-choice"><input type="radio" name="response" id="r${value}" value="${value}"${checked}><label for="r${value}"><span class="ws-choice-num">${value}</span><span class="ws-choice-text">${escapeHtml(label)}</span></label></div>`;
    }).join("");

    els.scaleOptions.querySelectorAll("input[name=response]").forEach(input => {
      input.addEventListener("change", e => answer(Number(e.target.value)));
    });

    els.prevBtn.disabled = state.currentIndex === 0;
    els.nextBtn.disabled = selected === undefined;
    els.nextBtn.textContent = state.currentIndex === 74 ? "Rodyti rezultatą" : "Toliau";
    saveState();
  }

  function prevQuestion() {
    if (state.currentIndex <= 0) return;
    recordQuestionDeparture();
    state.currentIndex -= 1;
    saveState();
    renderQuestion();
  }

  function nextQuestion() {
    const item = orderedItems[state.currentIndex];
    if (state.responses[item.id] === undefined) return;
    recordQuestionDeparture();

    if (state.currentIndex === 74) {
      complete();
      return;
    }

    state.currentIndex += 1;
    saveState();
    renderQuestion();
  }

  function scoredValue(item, response) {
    return item.dir === "R" ? 6 - response : response;
  }

  function calculateScores() {
    const dimensionScores = {};
    for (const dim of Object.keys(spec.dimensions)) {
      const items = spec.items.filter(item => item.dim === dim);
      const sum = items.reduce((acc, item) => acc + scoredValue(item, state.responses[item.id]), 0);
      dimensionScores[dim] = Math.round(((sum - 5) / 20) * 1000) / 10;
    }

    const domainScores = {};
    for (const domain of spec.domains) {
      const values = domain.dimensions.map(dim => dimensionScores[dim]);
      domainScores[domain.id] = Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 10) / 10;
    }
    return { dimensionScores, domainScores };
  }

  function complete() {
    const missing = spec.order.filter(id => state.responses[id] === undefined);
    if (missing.length) {
      state.currentIndex = Math.max(0, spec.order.indexOf(missing[0]));
      renderQuestion();
      return;
    }

    stopActiveClock();
    state.completed = true;
    state.completedAt = nowIso();
    state.scores = calculateScores();
    saveState();

    try {
      const completed = JSON.parse(localStorage.getItem(COMPLETED_KEY) || "[]");
      completed.push({ sessionId: state.sessionId, completedAt: state.completedAt });
      localStorage.setItem(COMPLETED_KEY, JSON.stringify(completed.slice(-20)));
    } catch (_) {}

    renderResults();
    setScreen("results");
  }

  function resultList(items) {
    return `<ul>${items.map(x => `<li><strong>${escapeHtml(spec.dimensions[x.dim].lt)}</strong> — ${Math.round(x.score)} indeksas</li>`).join("")}</ul>`;
  }

  function renderResults() {
    if (!state.scores) state.scores = calculateScores();
    const { dimensionScores, domainScores } = state.scores;

    const ranked = Object.entries(dimensionScores)
      .map(([dim, score]) => ({ dim, score }))
      .sort((a, b) => b.score - a.score);

    els.topProfile.innerHTML = resultList(ranked.slice(0, 3));
    els.lowProfile.innerHTML = resultList([...ranked].reverse().slice(0, 3));

    els.domainGrid.innerHTML = spec.domains.map(domain => {
      const score = domainScores[domain.id];
      return `<article class="ws-domain"><strong>${escapeHtml(domain.lt)}</strong><div class="ws-index">${Math.round(score)}</div><small>teorinės skalės indeksas</small></article>`;
    }).join("");

    const dimOrder = spec.domains.flatMap(domain => domain.dimensions);
    els.dimensionsList.innerHTML = dimOrder.map(dim => {
      const meta = spec.dimensions[dim];
      const score = dimensionScores[dim];
      const domain = spec.domains.find(d => d.id === meta.domain);
      return `<details class="ws-dimension">
        <summary>
          <span class="ws-dim-name"><strong>${escapeHtml(meta.lt)}</strong><span>${escapeHtml(domain.lt)}</span></span>
          <span class="ws-bar-track"><span class="ws-bar" style="width:${Math.max(0, Math.min(100, score))}%"></span></span>
          <span class="ws-dim-score">${Math.round(score)}</span>
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

    const minutes = Math.max(1, Math.round((state.activeMs || 0) / 60000));
    els.completionMeta.textContent = `Aktyvus pildymo laikas: apie ${minutes} min. · versija ${spec.instrument.version} · forma A`;

    if (state.feedback?.specificity) {
      const radio = document.querySelector(`input[name="specificity"][value="${state.feedback.specificity}"]`);
      if (radio) radio.checked = true;
    }
    els.feedbackComment.value = state.feedback?.comment || "";
  }

  function buildExportPayload() {
    const scores = state.scores || (state.completed ? calculateScores() : null);
    return {
      schema: "workstyle15-pilot-session-v1",
      meta: {
        sessionId: state.sessionId,
        instrumentId: state.instrumentId,
        instrumentVersion: state.instrumentVersion,
        formId: state.formId,
        language: state.language,
        startedAt: state.startedAt,
        completedAt: state.completedAt,
        lastSeenAt: state.lastSeenAt,
        completed: Boolean(state.completed),
        activeMs: Math.round(state.activeMs || 0),
        answeredCount: Object.keys(state.responses || {}).length
      },
      responses: spec.order.map((id, index) => {
        const item = itemById.get(id);
        const response = state.responses[id];
        return {
          position: index + 1,
          itemId: id,
          dimension: item.dim,
          direction: item.dir,
          response: response ?? null,
          scored: response === undefined ? null : scoredValue(item, response),
          firstResponseMs: state.timing?.[id]?.firstResponseMs ?? null,
          visits: state.timing?.[id]?.visits ?? 0,
          changes: state.timing?.[id]?.changes ?? 0
        };
      }),
      scores: scores || null,
      feedback: state.feedback || { specificity: null, comment: "" }
    };
  }

  function downloadJson() {
    stopActiveClock();
    saveState();
    const payload = buildExportPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `workstyle15-${spec.instrument.version}-${state.sessionId}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    if (!els.quiz.hidden) startActiveClock();
  }

  async function copyJson() {
    stopActiveClock();
    saveState();
    const text = JSON.stringify(buildExportPayload(), null, 2);
    try {
      await navigator.clipboard.writeText(text);
      els.feedbackStatus.textContent = "Anoniminiai pilotiniai duomenys nukopijuoti.";
    } catch (_) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      els.feedbackStatus.textContent = "Anoniminiai pilotiniai duomenys nukopijuoti.";
    }
    if (!els.quiz.hidden) startActiveClock();
  }

  function saveFeedback() {
    const checked = document.querySelector('input[name="specificity"]:checked');
    state.feedback = {
      specificity: checked ? Number(checked.value) : null,
      comment: els.feedbackComment.value.trim()
    };
    saveState();
    els.feedbackStatus.textContent = "Atsiliepimas išsaugotas šiame įrenginyje.";
  }

  function goToIntro() {
    recordQuestionDeparture();
    stopActiveClock();
    saveState();
    setScreen("intro");
    initIntro();
  }

  function restart() {
    if (!confirm("Pradėti naują sesiją? Dabartinė sesija liks tik anksčiau eksportuotame faile, jei ją eksportavote.")) return;
    localStorage.removeItem(STORAGE_KEY);
    state = null;
    setScreen("intro");
    initIntro();
  }

  function bind() {
    els.intro = $("intro");
    els.quiz = $("quiz");
    els.results = $("results");
    els.startBtn = $("startBtn");
    els.resumeBtn = $("resumeBtn");
    els.exportPartialBtn = $("exportPartialBtn");
    els.resumeInfo = $("resumeInfo");
    els.progressBar = $("progressBar");
    els.progressLabel = $("progressLabel");
    els.itemId = $("itemId");
    els.questionText = $("questionText");
    els.scaleOptions = $("scaleOptions");
    els.prevBtn = $("prevBtn");
    els.nextBtn = $("nextBtn");
    els.saveExitBtn = $("saveExitBtn");
    els.topProfile = $("topProfile");
    els.lowProfile = $("lowProfile");
    els.domainGrid = $("domainGrid");
    els.dimensionsList = $("dimensionsList");
    els.completionMeta = $("completionMeta");
    els.feedbackComment = $("feedbackComment");
    els.feedbackStatus = $("feedbackStatus");
    els.saveFeedbackBtn = $("saveFeedbackBtn");
    els.exportBtn = $("exportBtn");
    els.copyBtn = $("copyBtn");
    els.restartBtn = $("restartBtn");

    els.startBtn.addEventListener("click", startNew);
    els.resumeBtn.addEventListener("click", resume);
    els.exportPartialBtn.addEventListener("click", () => {
      state = loadState();
      if (state) downloadJson();
    });
    els.prevBtn.addEventListener("click", prevQuestion);
    els.nextBtn.addEventListener("click", nextQuestion);
    els.saveExitBtn.addEventListener("click", goToIntro);
    els.saveFeedbackBtn.addEventListener("click", saveFeedback);
    els.exportBtn.addEventListener("click", downloadJson);
    els.copyBtn.addEventListener("click", copyJson);
    els.restartBtn.addEventListener("click", restart);

    document.addEventListener("keydown", e => {
      if (els.quiz.hidden) return;
      if (["1", "2", "3", "4", "5"].includes(e.key)) {
        const input = $(`r${e.key}`);
        if (input) {
          input.checked = true;
          answer(Number(e.key));
        }
      } else if (e.key === "Enter" && !els.nextBtn.disabled) {
        nextQuestion();
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (!state || els.quiz.hidden) return;
      if (document.hidden) {
        stopActiveClock();
        saveState();
      } else {
        startActiveClock();
      }
    });

    window.addEventListener("beforeunload", () => {
      if (!state) return;
      stopActiveClock();
      saveState();
    });
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
      document.body.innerHTML = `<main class="ws-shell"><h1>WorkStyle 15</h1><p>Nepavyko paleisti pilotinės versijos.</p><pre>${escapeHtml(err.message)}</pre></main>`;
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
