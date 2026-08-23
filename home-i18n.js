(() => {
  'use strict';

  const host = window.location.hostname.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const forced = params.get('lang');
  const lang = (forced === 'lt' || forced === 'en')
    ? forced
    : ((host === '2rasi.lt' || host.endsWith('.2rasi.lt')) ? 'lt' : 'en');
  const lt = lang === 'lt';

  window.RASI_LANG = lang;
  window.RASI_COPY = {
    hints: {
      en: { tiltTouch: 'TILT · TOUCH · NOTICE', touchTilt: 'TOUCH · TILT · NOTICE', dragTouch: 'DRAG · TOUCH · NOTICE' },
      lt: { tiltTouch: 'PAKREIPK · PALIESK · PASTEBĖK', touchTilt: 'PALIESK · PAKREIPK · PASTEBĖK', dragTouch: 'TEMPK · PALIESK · PASTEBĖK' }
    }
  };

  const pick = (en, ltText) => lt ? ltText : en;
  const set = (selector, en, ltText) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = pick(en, ltText);
  };
  const setAll = (selector, pairs) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (pairs[i]) el.textContent = pick(pairs[i][0], pairs[i][1]);
    });
  };
  const setAction = (el, en, ltText) => {
    if (!el) return;
    const label = pick(en, ltText);
    const span = el.querySelector('span');
    if (!span) {
      el.textContent = label;
      return;
    }
    const textNode = [...el.childNodes].find(n => n.nodeType === Node.TEXT_NODE);
    if (textNode) textNode.nodeValue = `${label} `;
    else el.insertBefore(document.createTextNode(`${label} `), span);
  };

  const cards = {
    '2pair': {
      state: ['Research active', 'Tyrimas vyksta'],
      summary: ['A reflection framework being developed through temporary calibration and validation studies.', 'Refleksijos sistema, kuriama per laikinus kalibravimo ir validavimo tyrimus.'],
      meta: [['Product in development', 'Kuriamas produktas'], ['Wave 1 + Calibration v0.1 live', 'Wave 1 + Calibration v0.1 veikia']],
      actions: [['About', 'Apie'], ['Wave 1', 'Wave 1'], ['Calibration', 'Calibration']]
    },
    mirror: {
      state: ['Live · EN/LT', 'Veikia · EN/LT'],
      summary: ['Notice what may be getting in your way.', 'Pastebėk, kas gali tau trukdyti.'],
      meta: [['Reflection experiment', 'Refleksijos eksperimentas'], ['English & Lithuanian', 'Anglų ir lietuvių']],
      actions: [['About', 'Apie'], ['Start', 'Pradėti']]
    },
    multipliers: {
      state: ['Live · LT', 'Veikia · LT'],
      summary: ['A leadership reflection experiment inspired by the Multipliers framework.', 'Vadovavimo refleksijos eksperimentas, įkvėptas „Multipliers“ modelio.'],
      meta: [['Leadership reflection', 'Vadovavimo refleksija'], ['15 situations', '15 situacijų']],
      actions: [['About', 'Apie'], ['Start', 'Pradėti']]
    },
    divergent: {
      state: ['Live · LT', 'Veikia · LT'],
      summary: ['A self-reflection experiment combining a Big Five profile with exploratory archetypes.', 'Savirefleksijos eksperimentas, jungiantis Big Five profilį su tyrinėjamais archetipais.'],
      meta: [['OCEAN reflection', 'OCEAN refleksija'], ['60 statements', '60 teiginių']],
      actions: [['About', 'Apie'], ['Start', 'Pradėti']]
    },
    'situational-leadership': {
      state: ['Live · LT', 'Veikia · LT'],
      summary: ['A leadership reflection tool for exploring how your approach shifts with the situation.', 'Vadovavimo refleksijos įrankis, padedantis pastebėti, kaip požiūris keičiasi priklausomai nuo situacijos.'],
      meta: [['Leadership reflection', 'Vadovavimo refleksija'], ['20 + 3 situations', '20 + 3 situacijos']],
      actions: [['About', 'Apie'], ['Start', 'Pradėti']]
    },
    karpman: {
      state: ['Live · LT', 'Veikia · LT'],
      summary: ['A reflection on the roles we may slip into when tension rises.', 'Refleksija apie vaidmenis, į kuriuos galime įslysti augant įtampai.'],
      meta: [['Conflict patterns', 'Konflikto modeliai'], ['18 statements', '18 teiginių']],
      actions: [['About', 'Apie'], ['Start', 'Pradėti']]
    },
    'strategic-thinking': {
      state: ['Live · LT', 'Veikia · LT'],
      summary: ['A self-reflection experiment exploring systems thinking, reframing and reflection.', 'Savirefleksijos eksperimentas apie sisteminį mąstymą, perspektyvos keitimą ir refleksiją.'],
      meta: [['15 situations · 3 dimensions', '15 situacijų · 3 dimensijos'], ['Browser-only data', 'Duomenys tik naršyklėje']],
      actions: [['About', 'Apie'], ['Start', 'Pradėti']]
    },
    'leadership-360': {
      state: ['Live · LT/EN', 'Veikia · LT/EN'],
      summary: ['A multi-rater leadership development cycle connecting pseudonymous 360° feedback with a 90-day action plan and repeat measurement.', 'Kelių vertintojų lyderystės tobulėjimo ciklas, jungiantis pseudoniminį 360° grįžtamąjį ryšį, 90 dienų veiksmų planą ir pakartotinį matavimą.'],
      meta: [['75 statements · 15 competencies', '75 teiginiai · 15 kompetencijų'], ['C1 → 90 days → C2', 'C1 → 90 dienų → C2']],
      actions: [['About', 'Apie'], ['Start', 'Pradėti']]
    },
    workstyle: {
      state: ['Cognitive pilot · LT', 'Kognityvinis pilotas · LT'],
      summary: ['A research prototype exploring choices between equally valid ways of working across everyday situations.', 'Tyrimo prototipas apie pasirinkimus tarp lygiaverčių darbo strategijų kasdienėse situacijose.'],
      meta: [['34 situations · 8 candidate axes', '34 situacijos · 8 kandidatinės ašys'], ['No personal profile yet', 'Asmeninis profilis dar nerodomas']],
      actions: [['About', 'Apie'], ['Start pilot', 'Pradėti pilotą']]
    }
  };

  function apply() {
    document.documentElement.lang = lang;
    document.title = pick('2rasi — Look again.', '2rasi — Pažvelk dar kartą.');
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', pick(
      'Tools and experiments for seeing things differently.',
      'Įrankiai ir eksperimentai, padedantys pamatyti kitaip.'
    ));

    set('.site-header nav a:nth-child(1)', 'Experiments', 'Eksperimentai');
    set('.site-header nav a:nth-child(2)', 'About', 'Apie');
    set('.eyebrow', 'A small shift can change the view', 'Mažas poslinkis gali pakeisti vaizdą');
    set('#hero-title', 'Look again.', 'Pažvelk dar kartą.');
    set('.hero-sub', 'Tools and experiments for seeing things differently.', 'Įrankiai ir eksperimentai, padedantys pamatyti kitaip.');
    set('.hint', 'Move · look · notice', 'Judink · žiūrėk · pastebėk');
    set('.section-intro .kicker', 'EXPERIMENTS', 'EKSPERIMENTAI');
    set('#experiments-title', 'Small shifts. Different views.', 'Maži poslinkiai. Kitas vaizdas.');

    Object.entries(cards).forEach(([id, copy]) => {
      const root = document.getElementById(id);
      if (!root) return;
      const state = root.querySelector('.experiment-state');
      const summary = root.querySelector('.experiment-summary');
      if (state) state.textContent = pick(copy.state[0], copy.state[1]);
      if (summary) summary.textContent = pick(copy.summary[0], copy.summary[1]);
      root.querySelectorAll('.experiment-meta span').forEach((el, i) => {
        if (copy.meta[i]) el.textContent = pick(copy.meta[i][0], copy.meta[i][1]);
      });
      root.querySelectorAll('.experiment-actions a').forEach((el, i) => {
        if (copy.actions[i]) setAction(el, copy.actions[i][0], copy.actions[i][1]);
      });
    });

    const pairRoot = document.getElementById('2pair');
    const calibrationLink = pairRoot?.querySelector('.experiment-actions a:nth-child(3)');
    if (calibrationLink) {
      calibrationLink.href = 'https://omesg360.eu/conflictlab/releases/calibration-v0.1/';
      calibrationLink.target = '_blank';
      calibrationLink.rel = 'noopener';
    }

    const leadershipRoot = document.getElementById('leadership-360');
    const leadershipStart = leadershipRoot?.querySelector('.experiment-actions a:nth-child(2)');
    if (leadershipStart) leadershipStart.href = `https://omesg360.eu/leadership-360/?lang=${lang}`;

    set('.manifesto-word', 'LOOK', 'ŽIŪRĖK');
    setAll('.manifesto-copy p', [
      ['Familiar first.', 'Pirmiausia pažįstama.'],
      ['Unexpected second.', 'Tada netikėta.'],
      ['Meaning third.', 'Galiausiai prasmė.']
    ]);

    set('#about .kicker', 'ABOUT', 'APIE');
    set('.about-lead', '2rasi is a place for experiments in perception, choice and reflection.', '2rasi yra vieta suvokimo, pasirinkimo ir refleksijos eksperimentams.');
    setAll('#about .about-copy > p:not(.kicker):not(.about-lead)', [
      ['Some begin with psychology. Some with work. Some with ordinary things we stopped noticing.', 'Vieni prasideda nuo psichologijos. Kiti nuo darbo. Dar kiti nuo paprastų dalykų, kurių nustojome pastebėti.'],
      ['What happens if we look again?', 'Kas nutinka, jei pažvelgiame dar kartą?']
    ]);

    const targetHost = lt ? '2rasi.com' : '2rasi.lt';
    const targetLabel = lt ? 'EN' : 'LT';
    const targetHref = `https://${targetHost}/`;
    const switcher = document.querySelector('.language-switch');
    if (switcher) {
      switcher.textContent = targetLabel;
      switcher.href = targetHref;
      switcher.setAttribute('aria-label', lt ? 'Open English site' : 'Atidaryti lietuvišką svetainę');
      switcher.title = targetHost;
    }

    const footerLink = document.querySelector('.footer-links a:last-child');
    if (footerLink) {
      footerLink.textContent = `${targetLabel} ↗`;
      footerLink.href = targetHref;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply, { once: true });
  } else {
    apply();
  }
  requestAnimationFrame(apply);
})();
