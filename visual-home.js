(() => {
  const lang = window.RASI_LANG || ((location.hostname === '2rasi.lt' || location.hostname.endsWith('.2rasi.lt')) ? 'lt' : 'en');
  document.querySelectorAll(`[data-${lang}]`).forEach((el) => {
    const value = el.getAttribute(`data-${lang}`);
    if (value != null) el.textContent = value;
  });

  const copy = {
    en: {
      aboutWhy: '2rasi began with a simple question: what changes when, instead of trying to classify ourselves faster, we look at the same thing once more?',
      professional: 'Facilitated and organizational work',
      modalTitle: 'This experiment is currently in Lithuanian.',
      modalBody: 'You can continue, but the experiment itself has not been translated to English yet.',
      continue: 'Continue in Lithuanian',
      back: 'Choose another experiment'
    },
    lt: {
      aboutWhy: '2rasi prasidėjo nuo paprasto klausimo: kas pasikeičia, kai užuot bandę greičiau save priskirti kategorijai, į tą patį dalyką pažvelgiame dar kartą?',
      professional: 'Darbas su komandomis ir organizacijomis',
      modalTitle: 'Šis eksperimentas šiuo metu prieinamas lietuviškai.',
      modalBody: 'Galite tęsti.',
      continue: 'Tęsti',
      back: 'Rinktis kitą eksperimentą'
    }
  }[lang];

  const states = {
    'leadership-360': { en: 'EN / LT', lt: 'EN / LT' },
    mirror: { en: 'EN / LT', lt: 'EN / LT' },
    multipliers: { en: 'EN / LT', lt: 'EN / LT' },
    divergent: { en: 'EN / LT', lt: 'EN / LT' },
    'situational-leadership': { en: 'LT only', lt: 'LT' },
    karpman: { en: 'EN / LT', lt: 'EN / LT' },
    'strategic-thinking': { en: 'LT only', lt: 'LT' },
    '2pair': { en: 'Research · EN / LT', lt: 'Tyrimas · EN / LT' },
    workstyle: { en: 'Pilot · LT', lt: 'Pilotas · LT' }
  };

  const style = document.createElement('style');
  style.textContent = `
    .portal-state{display:inline-flex;align-self:flex-start;align-items:center;margin-top:10px;padding:5px 9px;border:1px solid rgba(7,27,46,.16);border-radius:999px;background:rgba(255,255,255,.2);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(7,27,46,.58)}
    .about-why{max-width:720px;margin-top:18px}
    .about-professional{display:inline-block;margin-top:16px;font-size:.82rem;letter-spacing:.04em;color:inherit;text-underline-offset:4px}
    .language-dialog-backdrop{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:20px;background:rgba(4,20,31,.46);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
    .language-dialog{width:min(100%,520px);padding:28px;border:1px solid rgba(255,255,255,.58);border-radius:24px;background:rgba(239,248,250,.96);box-shadow:0 30px 90px rgba(4,24,36,.28);color:#071b2e}
    .language-dialog h3{margin:0 0 10px;font-family:Georgia,"Times New Roman",serif;font-weight:500;font-size:clamp(1.7rem,5vw,2.5rem);line-height:1.03}
    .language-dialog p{margin:0;color:rgba(7,27,46,.68);line-height:1.55}
    .language-dialog-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
    .language-dialog-actions a,.language-dialog-actions button{appearance:none;border:1px solid rgba(7,27,46,.2);border-radius:999px;padding:11px 15px;background:rgba(255,255,255,.58);color:inherit;font:inherit;font-size:.78rem;font-weight:650;text-decoration:none;cursor:pointer}
    .language-dialog-actions a{background:#0d4054;color:#fff;border-color:#0d4054}
  `;
  document.head.appendChild(style);

  Object.entries(states).forEach(([id, labels]) => {
    const card = document.getElementById(id);
    const copyRoot = card?.querySelector('.portal-copy');
    const index = copyRoot?.querySelector('.portal-index');
    if (!copyRoot || !index || copyRoot.querySelector('.portal-state')) return;
    const badge = document.createElement('span');
    badge.className = 'portal-state';
    badge.textContent = labels[lang] || labels.en;
    index.insertAdjacentElement('afterend', badge);
  });

  const about = document.querySelector('#about .about-copy');
  if (about && !about.querySelector('.about-why')) {
    const why = document.createElement('p');
    why.className = 'about-why';
    why.textContent = copy.aboutWhy;
    const question = about.querySelector('.question');
    if (question) question.insertAdjacentElement('beforebegin', why);
    else about.appendChild(why);

    const professional = document.createElement('a');
    professional.className = 'about-professional';
    professional.href = 'https://omesg360.eu/';
    professional.target = '_blank';
    professional.rel = 'noopener';
    professional.textContent = `${copy.professional} → OMESG360`;
    about.appendChild(professional);
  }

  function openLanguageDialog(href) {
    const existing = document.querySelector('.language-dialog-backdrop');
    if (existing) existing.remove();

    const backdrop = document.createElement('div');
    backdrop.className = 'language-dialog-backdrop';
    backdrop.innerHTML = `
      <div class="language-dialog" role="dialog" aria-modal="true" aria-labelledby="language-dialog-title">
        <h3 id="language-dialog-title"></h3>
        <p></p>
        <div class="language-dialog-actions">
          <a></a>
          <button type="button"></button>
        </div>
      </div>`;

    const title = backdrop.querySelector('h3');
    const body = backdrop.querySelector('p');
    const continueLink = backdrop.querySelector('a');
    const closeButton = backdrop.querySelector('button');
    title.textContent = copy.modalTitle;
    body.textContent = copy.modalBody;
    continueLink.textContent = copy.continue;
    continueLink.href = href;
    closeButton.textContent = copy.back;

    const close = () => backdrop.remove();
    closeButton.addEventListener('click', close);
    backdrop.addEventListener('click', (event) => {
      if (event.target === backdrop) close();
    });
    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      document.removeEventListener('keydown', onKey);
      close();
    };
    document.addEventListener('keydown', onKey);
    document.body.appendChild(backdrop);
    closeButton.focus();
  }

  if (lang === 'en') {
    ['situational-leadership', 'strategic-thinking'].forEach((id) => {
      const link = document.querySelector(`#${id} .portal-enter`);
      if (!link) return;
      link.addEventListener('click', (event) => {
        event.preventDefault();
        openLanguageDialog(link.href);
      });
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('in-view', entry.isIntersecting));
  }, { threshold: 0.42 });

  document.querySelectorAll('.portal-card').forEach((card) => observer.observe(card));

  document.querySelectorAll('.card-visual').forEach((visual) => {
    visual.addEventListener('click', () => {
      const card = visual.closest('.portal-card');
      if (!card) return;
      card.classList.remove('in-view');
      void card.offsetWidth;
      card.classList.add('in-view');
    });
  });
})();
