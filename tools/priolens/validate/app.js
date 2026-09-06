(() => {
  'use strict';

  const API = 'https://workstyle-pilot-intake.olemoz1977.workers.dev';
  const SUBMIT_URL = API + '/v1/priolens-stimulus-validation';
  const SUMMARY_URL = API + '/v1/priolens-stimulus-validation-summary';
  const SCHEMA = '2rasi.priolens.stimulus-validation-session-v0.1';
  const VERSION = 'priolens-stimulus-validation-v0.1';
  const POOL_URL = './stimuli-v031.json';
  const FAMILY_ORDER = ['REST','RESOURCE','SAFETY','ORDER','CONNECTION','BELONGING','CARE','AUTONOMY','CONTROL','RECOGNITION','MASTERY','EXPLORATION','KNOWLEDGE','OPPORTUNITY'];
  const COMPETITORS = {
    REST:['RESOURCE','SAFETY','ORDER'],
    RESOURCE:['OPPORTUNITY','SAFETY','REST'],
    SAFETY:['ORDER','CONTROL','RESOURCE'],
    ORDER:['SAFETY','CONTROL','KNOWLEDGE'],
    CONNECTION:['BELONGING','CARE','RECOGNITION'],
    BELONGING:['CONNECTION','CARE','RECOGNITION'],
    CARE:['CONNECTION','BELONGING','RECOGNITION'],
    AUTONOMY:['CONTROL','OPPORTUNITY','EXPLORATION'],
    CONTROL:['AUTONOMY','MASTERY','ORDER'],
    RECOGNITION:['BELONGING','MASTERY','CARE'],
    MASTERY:['KNOWLEDGE','CONTROL','RECOGNITION'],
    EXPLORATION:['KNOWLEDGE','OPPORTUNITY','AUTONOMY'],
    KNOWLEDGE:['EXPLORATION','MASTERY','ORDER'],
    OPPORTUNITY:['RESOURCE','AUTONOMY','EXPLORATION'],
  };

  const COPY = {
    lt: {
      title:'PrioLens vaizdų patikra',
      kicker:'Atskiras aklas stimulų tyrimas',
      lead:'Padėk patikrinti, ar PrioLens vaizdai iš tiesų perteikia tai, ką ketiname jais parodyti.',
      intro1:'Čia nevertiname tavęs. Vertiname pačius vaizdus.',
      intro2:'Matysi 12 pavienių vaizdų. Pirmiausia trumpai parašysi, ką juose matai, dar nematydamas mūsų kategorijų. Tik tada pasirinksi artimiausią apibūdinimą.',
      time:'~5–7 min.',
      anonymous:'Be vardo ir el. pašto',
      twelve:'12 iš 42 vaizdų',
      blind:'Kategorijos rodomos tik po tavo pirmo aprašymo',
      data:'Išsaugome atsakymus, kalbą, anoniminį sesijos ID ir atsakymo laikus. Laikai naudojami tik kaip proceso telemetrija. Nerašyk vardų ar kitos asmenį identifikuojančios informacijos.',
      start:'Pradėti vaizdų patikrą →',
      back:'← Grįžti į PrioLens',
      progress:'Vaizdas',
      of:'iš',
      step1Title:'Ką pirmiausia matai šiame vaizde?',
      step1Help:'Trumpai parašyk, kas čia svarbiausia vyksta arba ką vaizdas tau perteikia. 3–12 žodžių visiškai pakanka.',
      textPlaceholder:'Pvz., žmogus padeda kitam...',
      clarity:'Kiek aiškiai vaizdas perteikia vieną pagrindinę mintį?',
      notClear:'Visai neaiškiai',
      veryClear:'Labai aiškiai',
      next:'Toliau →',
      step2Title:'Kuri kryptis geriausiai atitinka tai, ką ką tik parašei?',
      step2Help:'Rinkis artimiausią apibūdinimą. Teisingo atsakymo čia nėra.',
      confidence:'Kiek esi tikras dėl šio pasirinkimo?',
      unsure:'Labai neaišku',
      sure:'Labai aišku',
      valence:'Koks bendras vaizdo emocinis tonas?',
      unpleasant:'Nemalonus',
      neutral:'Neutralus',
      pleasant:'Malonus',
      nextImage:'Kitas vaizdas →',
      finish:'Baigti ir išsaugoti →',
      sending:'Saugoma…',
      sendFail:'Nepavyko išsaugoti. Patikrink ryšį ir bandyk dar kartą.',
      retry:'Bandyti dar kartą',
      doneTitle:'Ačiū. Tavo 12 vertinimų išsaugoti.',
      doneText:'Šie atsakymai bus naudojami vaizdų semantiniam aiškumui ir painiojimui su artimomis kryptimis tikrinti. Jie nėra tavo asmenybės ar poreikių vertinimas.',
      mainPilot:'Atlikti pagrindinį PrioLens →',
      another:'Įvertinti kitą 12 vaizdų rinkinį',
      other:'Kita / nė viena iš šių',
      ownerSummary:'Tyrėjo suvestinė',
      summaryTitle:'Stimulus screening suvestinė',
      overall:'Visi',
      sessions:'užbaigtų sesijų',
      keep:'KEEP kandidatų',
      review:'REVIEW',
      replace:'REPLACE kandidatų',
      collecting:'renka duomenis',
      criteria:'Iš anksto nustatytas screening kriterijus: sprendimas tik nuo n≥40 vienam vaizdui. KEEP: intended fit ≥60%, artimiausias konkurentas ≤20%, „kita“ ≤20%, aiškumas ir pasitikėjimas ≥3.5/5. REPLACE: fit <40%, konkurentas ar „kita“ ≥35%, arba konkurentas ≥ intended fit. Kiti atvejai = REVIEW. Tai atrankos taisyklė, ne konstrukto validacijos įrodymas.',
      fit:'Fit',
      topComp:'Artimiausias konkurentas',
      clarityShort:'Aišk.',
      confShort:'Pasit.',
      valenceShort:'Tonas',
      status:'Būsena',
      loading:'Kraunama…',
      summaryFail:'Nepavyko gauti suvestinės.',
      familyNames:{
        REST:'Poilsis / atsistatymas',
        RESOURCE:'Resursų prieinamumas',
        SAFETY:'Saugumas / apsauga',
        ORDER:'Tvarka / struktūra',
        CONNECTION:'Tiesioginis ryšys',
        BELONGING:'Priklausymas / bendrumas',
        CARE:'Rūpinimasis / pagalba',
        AUTONOMY:'Autonomija / savarankiškas pasirinkimas',
        CONTROL:'Kontrolė / veiksmo poveikis',
        RECOGNITION:'Pripažinimas / įvertinimas',
        MASTERY:'Meistriškumas / kompetencija',
        EXPLORATION:'Tyrinėjimas / atradimas',
        KNOWLEDGE:'Mokymasis / supratimas',
        OPPORTUNITY:'Prieinama galimybė'
      },
      mechanisms:{
        REST:'Poilsis, atsikvėpimas ar energijos atgavimas',
        RESOURCE:'Prieinami naudingi ištekliai ar tai, ką galima panaudoti',
        SAFETY:'Apsauga, saugumas ar rizikos sumažinimas',
        ORDER:'Tvarka, struktūra ar aiškus išdėstymas',
        CONNECTION:'Tiesioginis ryšys ir abipusis kontaktas tarp žmonių',
        BELONGING:'Buvimas grupės dalimi, bendrumas ar veikimas kartu',
        CARE:'Rūpinimasis kitu, pagalba ar parama veiksmu',
        AUTONOMY:'Galėjimas pačiam rinktis kryptį ar spręsti',
        CONTROL:'Tiesioginis veiksmo rezultato valdymas ar kontrolė',
        RECOGNITION:'Pastangų ar indėlio pastebėjimas ir įvertinimas',
        MASTERY:'Įgudęs atlikimas, gebėjimų naudojimas ar tobulinimas',
        EXPLORATION:'Naujumo tyrinėjimas, paieška ar atradimas',
        KNOWLEDGE:'Mokymasis, supratimo gilinimas ar informacijos įsisavinimas',
        OPPORTUNITY:'Reali prieinama galimybė kažką pradėti ar panaudoti'
      }
    },
    en: {
      title:'PrioLens visual check',
      kicker:'Separate blind stimulus study',
      lead:'Help us test whether PrioLens images actually communicate the visual mechanisms they were designed to show.',
      intro1:'This study is not evaluating you. It is evaluating the images.',
      intro2:'You will see 12 individual images. First, briefly describe what you see before any of our categories are shown. Only then will you choose the closest description.',
      time:'~5–7 min.',
      anonymous:'No name or email',
      twelve:'12 of 42 images',
      blind:'Categories appear only after your first description',
      data:'We store your responses, language, an anonymous session ID, and response times. Timing is used only as process telemetry. Please do not include names or other identifying personal information.',
      start:'Start visual check →',
      back:'← Back to PrioLens',
      progress:'Image',
      of:'of',
      step1Title:'What do you notice first in this image?',
      step1Help:'Briefly describe what seems most important, what is happening, or what the image conveys. 3–12 words is enough.',
      textPlaceholder:'For example, one person helps another...',
      clarity:'How clearly does the image communicate one main idea?',
      notClear:'Not clear',
      veryClear:'Very clear',
      next:'Continue →',
      step2Title:'Which direction best matches what you just wrote?',
      step2Help:'Choose the closest description. There is no “correct” answer here.',
      confidence:'How confident are you in this choice?',
      unsure:'Very unsure',
      sure:'Very sure',
      valence:'What is the overall emotional tone of the image?',
      unpleasant:'Unpleasant',
      neutral:'Neutral',
      pleasant:'Pleasant',
      nextImage:'Next image →',
      finish:'Finish and save →',
      sending:'Saving…',
      sendFail:'Could not save. Check your connection and try again.',
      retry:'Try again',
      doneTitle:'Thank you. Your 12 ratings were saved.',
      doneText:'These responses will be used to test semantic clarity and confusion with nearby visual directions. They are not an assessment of your personality or needs.',
      mainPilot:'Try the main PrioLens →',
      another:'Rate another set of 12 images',
      other:'Other / none of these',
      ownerSummary:'Research summary',
      summaryTitle:'Stimulus screening summary',
      overall:'All',
      sessions:'completed sessions',
      keep:'KEEP candidates',
      review:'REVIEW',
      replace:'REPLACE candidates',
      collecting:'collecting data',
      criteria:'Pre-set screening rule: no decision until n≥40 per image. KEEP: intended fit ≥60%, nearest competitor ≤20%, “other” ≤20%, clarity and confidence ≥3.5/5. REPLACE: fit <40%, competitor or “other” ≥35%, or competitor ≥ intended fit. All other cases = REVIEW. This is a selection rule, not proof of construct validity.',
      fit:'Fit',
      topComp:'Nearest competitor',
      clarityShort:'Clarity',
      confShort:'Conf.',
      valenceShort:'Tone',
      status:'Status',
      loading:'Loading…',
      summaryFail:'Could not load the summary.',
      familyNames:{
        REST:'Rest / restoration',
        RESOURCE:'Resource availability',
        SAFETY:'Safety / protection',
        ORDER:'Order / structure',
        CONNECTION:'Direct connection',
        BELONGING:'Belonging / togetherness',
        CARE:'Care / helping',
        AUTONOMY:'Autonomy / self-direction',
        CONTROL:'Control / action-effect',
        RECOGNITION:'Recognition / esteem',
        MASTERY:'Mastery / competence',
        EXPLORATION:'Exploration / discovery',
        KNOWLEDGE:'Learning / understanding',
        OPPORTUNITY:'Available opportunity'
      },
      mechanisms:{
        REST:'Rest, relief, or regaining energy',
        RESOURCE:'Useful resources or usable value being available',
        SAFETY:'Protection, safety, or reducing risk',
        ORDER:'Order, structure, or clear arrangement',
        CONNECTION:'Direct reciprocal contact between people',
        BELONGING:'Being part of a group, togetherness, or doing something together',
        CARE:'Caring for another person, helping, or supporting through action',
        AUTONOMY:'Being able to choose a direction or decide for yourself',
        CONTROL:'Direct control over an action and its effect',
        RECOGNITION:'Effort or contribution being noticed and appreciated',
        MASTERY:'Skilled performance, using or improving abilities',
        EXPLORATION:'Exploring novelty, searching, or discovering',
        KNOWLEDGE:'Learning, deepening understanding, or taking in information',
        OPPORTUNITY:'A real accessible possibility to start or use something'
      }
    }
  };

  const app = document.getElementById('app');
  const langButtons = Array.from(document.querySelectorAll('[data-lang]'));
  let lang = resolveLanguage();
  let pool = null;
  let state = null;
  let stageStartedAt = performance.now();

  function resolveLanguage() {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'lt' || q === 'en') return q;
    const h = location.hostname.toLowerCase();
    return (h === '2rasi.lt' || h.endsWith('.2rasi.lt')) ? 'lt' : 'en';
  }

  function setLanguage(next) {
    const previousLang = lang;
    lang = next;
    if (state) {
      state.language = lang;
      try { localStorage.removeItem('priolens:stimulus-validation:v01:' + previousLang); } catch {}
      saveDraft();
    }
    document.documentElement.lang = lang;
    document.title = (lang === 'lt' ? 'PrioLens vaizdų patikra' : 'PrioLens visual check') + ' · 2rasi';
    langButtons.forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
    const u = new URL(location.href);
    u.searchParams.set('lang', lang);
    history.replaceState(null, '', u);
    render();
  }

  langButtons.forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.lang)));

  function uuid() {
    if (crypto && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
  }

  function seedFrom(text) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < text.length; i++) {
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function rng(seed) {
    let t = seed >>> 0;
    return () => {
      t += 0x6D2B79F5;
      let x = t;
      x = Math.imul(x ^ (x >>> 15), x | 1);
      x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffled(items, seedText) {
    const a = items.slice();
    const r = rng(seedFrom(seedText));
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function formStimuli(formIndex) {
    const byFamily = new Map();
    pool.stimuli.forEach(s => {
      if (!byFamily.has(s.targetFamily)) byFamily.set(s.targetFamily, []);
      byFamily.get(s.targetFamily).push(s);
    });
    byFamily.forEach(list => list.sort((a,b) => a.id.localeCompare(b.id)));

    const out = [];
    FAMILY_ORDER.forEach((family, familyIndex) => {
      const miss = familyIndex % 7;
      if (formIndex === miss) return;
      const available = [0,1,2,3,4,5,6].filter(x => x !== miss);
      const shift = familyIndex % 6;
      const rotated = available.slice(shift).concat(available.slice(0, shift));
      const pos = rotated.indexOf(formIndex);
      const exemplarIndex = Math.floor(pos / 2);
      const hit = byFamily.get(family)?.[exemplarIndex];
      if (!hit) throw new Error('Form construction failed for ' + family);
      out.push(hit.id);
    });
    if (out.length !== 12) throw new Error('Validation form must contain 12 stimuli.');
    return out;
  }

  function storageKey() {
    return 'priolens:stimulus-validation:v01:' + lang;
  }

  function saveDraft() {
    if (!state) return;
    try { localStorage.setItem(storageKey(), JSON.stringify(state)); } catch {}
  }

  function loadDraft() {
    try {
      const raw = localStorage.getItem(storageKey());
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.schema !== SCHEMA || !Array.isArray(parsed.order) || parsed.order.length !== 12) return null;
      return parsed;
    } catch { return null; }
  }

  function clearDraft() {
    try { localStorage.removeItem(storageKey()); } catch {}
  }

  function newState(avoidForm = null) {
    const sessionId = uuid();
    let formIndex = parseInt(sessionId.replace(/[^0-9a-f]/gi,'').slice(-4) || '0', 16) % 7;
    const qForm = Number(new URLSearchParams(location.search).get('form'));
    const forcedForm = (window.RASI_OWNER_MODE || window.RASI_TEST_MODE) && Number.isInteger(qForm) && qForm >= 0 && qForm <= 6;
    if (forcedForm) formIndex = qForm;
    else if (Number.isInteger(avoidForm) && formIndex === avoidForm) formIndex = (formIndex + 1) % 7;
    const order = shuffled(formStimuli(formIndex), sessionId + ':presentation');
    return {
      schema:SCHEMA,
      version:VERSION,
      poolVersion:pool.poolVersion,
      sessionId,
      formIndex,
      language:lang,
      startedAt:new Date().toISOString(),
      index:0,
      stage:1,
      order,
      responses:[],
      partial:null
    };
  }

  function currentStimulus() {
    const id = state?.order?.[state.index];
    return pool?.stimuli?.find(s => s.id === id) || null;
  }

  function optionCodes(stimulus) {
    const codes = [stimulus.targetFamily, ...(COMPETITORS[stimulus.targetFamily] || [])];
    return shuffled([...new Set(codes)].slice(0,4).concat('OTHER'), state.sessionId + ':' + stimulus.id + ':options');
  }

  function t() { return COPY[lang]; }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }

  function sourceMeta() {
    const q = new URLSearchParams(location.search);
    let referrerHost = '';
    try { referrerHost = document.referrer ? new URL(document.referrer).hostname.slice(0,160) : ''; } catch {}
    return {
      source:(q.get('utm_source') || '').slice(0,80),
      medium:(q.get('utm_medium') || '').slice(0,80),
      campaign:(q.get('utm_campaign') || '').slice(0,120),
      referrerHost
    };
  }

  function scaleHtml(name, value, left, right) {
    return '<div class="scale" data-scale="' + name + '">' +
      [1,2,3,4,5].map(v => '<button type="button" class="scaleBtn ' + (Number(value) === v ? 'on' : '') + '" data-value="' + v + '">' + v + '</button>').join('') +
      '</div><div class="scaleAnchors"><span>' + escapeHtml(left) + '</span><span>' + escapeHtml(right) + '</span></div>';
  }

  function bindScale(root, name, onChange) {
    root.querySelectorAll('[data-scale="' + name + '"] .scaleBtn').forEach(btn => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('[data-scale="' + name + '"] .scaleBtn').forEach(x => x.classList.toggle('on', x === btn));
        onChange(Number(btn.dataset.value));
      });
    });
  }

  function updateProgress() {
    const bar = document.getElementById('barFill');
    if (bar) bar.style.width = ((state.index / 12) * 100) + '%';
  }

  function renderIntro() {
    const C = t();
    app.innerHTML = `
      <section class="panel">
        <p class="kicker">${escapeHtml(C.kicker)}</p>
        <h1>${escapeHtml(C.title)}</h1>
        <p class="lead">${escapeHtml(C.lead)}</p>
        <p><strong>${escapeHtml(C.intro1)}</strong> ${escapeHtml(C.intro2)}</p>
        <div class="meta"><span>${escapeHtml(C.twelve)}</span><span>${escapeHtml(C.time)}</span><span>${escapeHtml(C.anonymous)}</span><span>${escapeHtml(C.blind)}</span></div>
        <p class="note">${escapeHtml(C.data)}</p>
        <div class="actions">
          <button type="button" class="btn primary" id="startStudy">${escapeHtml(C.start)}</button>
          <a class="btn" href="../">${escapeHtml(C.back)}</a>
        </div>
        ${window.RASI_OWNER_MODE ? '<div class="ownerBar"><button type="button" class="btn secondary" id="ownerSummary">' + escapeHtml(C.ownerSummary) + '</button></div>' : ''}
      </section>`;
    document.getElementById('startStudy').onclick = () => {
      state = loadDraft() || newState();
      stageStartedAt = performance.now();
      saveDraft();
      if (window.RASI_INSIGHTS?.track) window.RASI_INSIGHTS.track('tool_start', {context:'stimulus-validation'}, {dedupe:false});
      render();
    };
    const owner = document.getElementById('ownerSummary');
    if (owner) owner.onclick = renderSummary;
  }

  function renderStudy() {
    const C = t();
    const stimulus = currentStimulus();
    if (!stimulus) return renderIntro();
    const partial = state.partial || { stimulusId:stimulus.id, openText:'', clarity:null, classification:null, confidence:null, valence:null, step1Ms:0, step2Ms:0 };
    state.partial = partial;
    const progress = state.index + 1;

    if (state.stage === 1) {
      app.innerHTML = `
        <section class="panel">
          <div class="progressRow"><span>${escapeHtml(C.progress)} ${progress} ${escapeHtml(C.of)} 12</span><span>${Math.round((state.index/12)*100)}%</span></div>
          <div class="progress"><div id="barFill"></div></div>
          <div class="studyCard">
            <div class="imageFrame"><img id="stimulusImage" src="${escapeHtml(stimulus.imageUrl)}" alt=""></div>
            <div>
              <h2>${escapeHtml(C.step1Title)}</h2>
              <p class="helper">${escapeHtml(C.step1Help)}</p>
              <textarea id="openText" maxlength="240" placeholder="${escapeHtml(C.textPlaceholder)}">${escapeHtml(partial.openText || '')}</textarea>
              <div class="field"><span class="fieldLabel">${escapeHtml(C.clarity)}</span>
                ${scaleHtml('clarity', partial.clarity, C.notClear, C.veryClear)}
              </div>
              <div class="actions"><button type="button" class="btn primary" id="step1Next" disabled>${escapeHtml(C.next)}</button></div>
            </div>
          </div>
        </section>`;
      updateProgress();
      const textArea = document.getElementById('openText');
      const next = document.getElementById('step1Next');
      const validate = () => { next.disabled = textArea.value.trim().length < 2 || !partial.clarity; };
      textArea.addEventListener('input', () => { partial.openText = textArea.value.slice(0,240); saveDraft(); validate(); });
      bindScale(app, 'clarity', v => { partial.clarity = v; saveDraft(); validate(); });
      validate();
      next.onclick = () => {
        partial.openText = textArea.value.trim().slice(0,240);
        partial.step1Ms = Math.max(0, Math.round(performance.now() - stageStartedAt));
        state.stage = 2;
        stageStartedAt = performance.now();
        saveDraft();
        render();
      };
    } else {
      const codes = optionCodes(stimulus);
      app.innerHTML = `
        <section class="panel">
          <div class="progressRow"><span>${escapeHtml(C.progress)} ${progress} ${escapeHtml(C.of)} 12</span><span>${Math.round((state.index/12)*100)}%</span></div>
          <div class="progress"><div id="barFill"></div></div>
          <div class="studyCard">
            <div class="imageFrame"><img src="${escapeHtml(stimulus.imageUrl)}" alt=""></div>
            <div>
              <h2>${escapeHtml(C.step2Title)}</h2>
              <p class="helper">${escapeHtml(C.step2Help)}</p>
              <div class="choices" id="choices">
                ${codes.map(code => '<button type="button" class="choice ' + (partial.classification === code ? 'on' : '') + '" data-code="' + code + '">' + escapeHtml(code === 'OTHER' ? C.other : C.mechanisms[code]) + '</button>').join('')}
              </div>
              <div class="field"><span class="fieldLabel">${escapeHtml(C.confidence)}</span>
                ${scaleHtml('confidence', partial.confidence, C.unsure, C.sure)}
              </div>
              <div class="field"><span class="fieldLabel">${escapeHtml(C.valence)}</span>
                ${scaleHtml('valence', partial.valence, C.unpleasant, C.pleasant)}
              </div>
              <div class="actions"><button type="button" class="btn primary" id="step2Next" disabled>${escapeHtml(state.index === 11 ? C.finish : C.nextImage)}</button></div>
              <div class="saveState" id="saveState"></div>
            </div>
          </div>
        </section>`;
      updateProgress();
      const next = document.getElementById('step2Next');
      const validate = () => { next.disabled = !partial.classification || !partial.confidence || !partial.valence; };
      app.querySelectorAll('.choice').forEach(btn => btn.addEventListener('click', () => {
        partial.classification = btn.dataset.code;
        app.querySelectorAll('.choice').forEach(x => x.classList.toggle('on', x === btn));
        saveDraft();
        validate();
      }));
      bindScale(app, 'confidence', v => { partial.confidence = v; saveDraft(); validate(); });
      bindScale(app, 'valence', v => { partial.valence = v; saveDraft(); validate(); });
      validate();
      next.onclick = async () => {
        partial.step2Ms = Math.max(0, Math.round(performance.now() - stageStartedAt));
        const response = {
          stimulusId:stimulus.id,
          targetFamily:stimulus.targetFamily,
          openText:partial.openText,
          clarity:partial.clarity,
          classification:partial.classification,
          confidence:partial.confidence,
          valence:partial.valence,
          presentationIndex:state.index,
          optionOrder:codes,
          step1Ms:partial.step1Ms,
          step2Ms:partial.step2Ms,
          totalMs:(partial.step1Ms || 0) + (partial.step2Ms || 0)
        };
        state.responses = state.responses.filter(r => r.stimulusId !== stimulus.id);
        state.responses.push(response);
        if (state.index < 11) {
          state.partial = null;
          state.stage = 1;
          state.index += 1;
          stageStartedAt = performance.now();
          saveDraft();
          render();
          preloadNext();
        } else {
          state.partial = partial;
          state.stage = 2;
          saveDraft();
          await submitSession(next);
        }
      };
    }
  }

  function preloadNext() {
    const nextId = state?.order?.[state.index + 1];
    const next = pool?.stimuli?.find(s => s.id === nextId);
    if (next) { const img = new Image(); img.src = next.imageUrl; }
  }

  async function submitSession(button) {
    const C = t();
    const saveState = document.getElementById('saveState');
    if (button) { button.disabled = true; button.textContent = C.sending; }
    if (saveState) saveState.textContent = C.sending;
    const payload = {
      schema:SCHEMA,
      version:VERSION,
      poolVersion:pool.poolVersion,
      sessionId:state.sessionId,
      formIndex:state.formIndex,
      language:lang,
      startedAt:state.startedAt,
      completedAt:new Date().toISOString(),
      responses:state.responses.slice().sort((a,b) => a.presentationIndex - b.presentationIndex),
      ...sourceMeta()
    };
    try {
      const res = await fetch(SUBMIT_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload),
        credentials:'omit',
        cache:'no-store'
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      clearDraft();
      if (window.RASI_INSIGHTS?.complete) window.RASI_INSIGHTS.complete({context:'stimulus-validation',responses:12,formIndex:state.formIndex});
      renderDone();
    } catch (error) {
      if (saveState) saveState.innerHTML = '<span class="error">' + escapeHtml(C.sendFail) + '</span>';
      if (button) { button.disabled = false; button.textContent = C.retry; }
    }
  }

  function renderDone() {
    const C = t();
    const from = lang === 'lt' ? 'lt' : 'com';
    app.innerHTML = `
      <section class="panel">
        <div class="doneMark">✓</div>
        <h1>${escapeHtml(C.doneTitle)}</h1>
        <p class="lead">${escapeHtml(C.doneText)}</p>
        <div class="actions">
          <a class="btn primary" href="https://omesg360.eu/priolens-open14-v04/?from=${from}&lang=${lang}">${escapeHtml(C.mainPilot)}</a>
          <button type="button" class="btn" id="anotherSet">${escapeHtml(C.another)}</button>
          <a class="btn" href="../">${escapeHtml(C.back)}</a>
        </div>
        ${window.RASI_OWNER_MODE ? '<div class="ownerBar"><button type="button" class="btn secondary" id="ownerSummary">' + escapeHtml(C.ownerSummary) + '</button></div>' : ''}
      </section>`;
    document.getElementById('anotherSet').onclick = () => { const previousForm = state?.formIndex; state = newState(previousForm); saveDraft(); stageStartedAt = performance.now(); render(); };
    const owner = document.getElementById('ownerSummary');
    if (owner) owner.onclick = renderSummary;
  }

  async function renderSummary() {
    const C = t();
    app.innerHTML = '<section class="panel"><p class="kicker">' + escapeHtml(C.ownerSummary) + '</p><h1>' + escapeHtml(C.summaryTitle) + '</h1><p>' + escapeHtml(C.loading) + '</p></section>';
    try {
      const res = await fetch(SUMMARY_URL, {headers:{'X-2rasi-owner':'1'},credentials:'omit',cache:'no-store'});
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      renderSummaryData(data, 'all');
    } catch {
      app.innerHTML = '<section class="panel"><h1>' + escapeHtml(C.summaryTitle) + '</h1><p class="error">' + escapeHtml(C.summaryFail) + '</p><div class="actions"><button class="btn" id="summaryBack">' + escapeHtml(C.back) + '</button></div></section>';
      document.getElementById('summaryBack').onclick = renderIntro;
    }
  }

  function renderSummaryData(data, scope) {
    const C = t();
    const rows = (data.rows || []).filter(r => r.scope === scope);
    const sessions = data.sessionCounts?.[scope] || 0;
    const counts = {KEEP:0,REVIEW:0,REPLACE:0,COLLECTING:0};
    rows.forEach(r => { counts[r.status] = (counts[r.status] || 0) + 1; });
    const scopeLabel = scope === 'all' ? C.overall : scope.toUpperCase();
    app.innerHTML = `
      <section class="panel summary">
        <p class="kicker">${escapeHtml(C.ownerSummary)}</p>
        <h1>${escapeHtml(C.summaryTitle)}</h1>
        <div class="summaryControls">
          ${['all','lt','en'].map(x => '<button type="button" data-scope="' + x + '" class="' + (x === scope ? 'on' : '') + '">' + escapeHtml(x === 'all' ? C.overall : x.toUpperCase()) + '</button>').join('')}
        </div>
        <div class="summaryGrid">
          <div class="metric"><strong>${sessions}</strong><span>${escapeHtml(C.sessions)} · ${escapeHtml(scopeLabel)}</span></div>
          <div class="metric"><strong>${counts.KEEP || 0}</strong><span>${escapeHtml(C.keep)}</span></div>
          <div class="metric"><strong>${counts.REVIEW || 0}</strong><span>${escapeHtml(C.review)}</span></div>
          <div class="metric"><strong>${counts.REPLACE || 0}</strong><span>${escapeHtml(C.replace)}</span></div>
        </div>
        <p class="criteria">${escapeHtml(C.criteria)}</p>
        <div class="tableWrap"><table>
          <thead><tr><th>Stimulus</th><th>n</th><th>${escapeHtml(C.fit)}</th><th>${escapeHtml(C.topComp)}</th><th>${escapeHtml(C.clarityShort)}</th><th>${escapeHtml(C.confShort)}</th><th>${escapeHtml(C.valenceShort)}</th><th>${escapeHtml(C.status)}</th></tr></thead>
          <tbody>
            ${rows.map(r => {
              const comp = r.topCompetitor ? (C.familyNames[r.topCompetitor] || r.topCompetitor) + ' ' + pct(r.topCompetitorRate) : '—';
              return '<tr><td><strong>' + escapeHtml(r.stimulusId) + '</strong><br><span class="note">' + escapeHtml(C.familyNames[r.targetFamily] || r.targetFamily) + '</span></td><td>' + r.n + '</td><td>' + pct(r.fitRate) + '<br><span class="note">other ' + pct(r.otherRate) + '</span></td><td>' + escapeHtml(comp) + '</td><td>' + num(r.clarityAvg) + '</td><td>' + num(r.confidenceAvg) + '</td><td>' + num(r.valenceAvg) + '</td><td><span class="status ' + escapeHtml(r.status) + '">' + escapeHtml(r.status) + '</span></td></tr>';
            }).join('')}
          </tbody>
        </table></div>
        <div class="actions"><button type="button" class="btn" id="summaryBack">${escapeHtml(C.back)}</button></div>
      </section>`;
    app.querySelectorAll('[data-scope]').forEach(btn => btn.onclick = () => renderSummaryData(data, btn.dataset.scope));
    document.getElementById('summaryBack').onclick = renderIntro;
  }

  function pct(v) { return Number.isFinite(Number(v)) ? Math.round(Number(v) * 100) + '%' : '—'; }
  function num(v) { return Number.isFinite(Number(v)) ? Number(v).toFixed(1) : '—'; }

  function render() {
    document.documentElement.lang = lang;
    langButtons.forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
    if (!state) return renderIntro();
    renderStudy();
  }

  async function boot() {
    try {
      const res = await fetch(POOL_URL, {cache:'no-store'});
      if (!res.ok) throw new Error('pool fetch failed');
      pool = await res.json();
      if (!pool || !Array.isArray(pool.stimuli) || pool.stimuli.length !== 42) throw new Error('invalid pool');
      const saved = loadDraft();
      if (saved) state = saved;
      render();
      if (state) preloadNext();
    } catch (error) {
      app.innerHTML = '<section class="panel"><h1>PrioLens</h1><p class="error">Could not load the stimulus set.</p></section>';
    }
  }

  boot();
})();