(() => {
  'use strict';

  const host = window.location.hostname.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const forced = params.get('lang');
  const lang = (forced === 'lt' || forced === 'en')
    ? forced
    : ((host === '2rasi.lt' || host.endsWith('.2rasi.lt')) ? 'lt' : 'en');
  const lt = lang === 'lt';

  document.documentElement.lang = lang;
  window.RASI_LANG = lang;

  document.title = lt
    ? 'PrioLens — formuojamasis tyrimo prototipas · 2rasi'
    : 'PrioLens — formative research prototype · 2rasi';

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', lt
      ? 'Trumpas 2rasi vizualinių pasirinkimų eksperimentas, sugretinantis pasikartojančius vizualinius pasirinkimus su dabartiniu suvokiamu pakankamumu.'
      : 'A short 2rasi visual-choice experiment comparing repeated visual pulls with current perceived sufficiency.');
  }

  document.querySelectorAll('[data-en][data-lt]').forEach((el) => {
    el.textContent = lt ? el.dataset.lt : el.dataset.en;
  });

  const navLinks = document.querySelectorAll('.tool-header nav > a:not(.language-switch)');
  if (navLinks[0]) navLinks[0].textContent = lt ? 'Eksperimentai' : 'Experiments';
  if (navLinks[1]) navLinks[1].textContent = lt ? 'Apie' : 'About';

  const nav = document.querySelector('.tool-header nav');
  if (nav) {
    let switcher = nav.querySelector('.language-switch');
    if (!switcher) {
      switcher = document.createElement('a');
      switcher.className = 'language-switch';
      nav.appendChild(switcher);
    }
    const targetHost = lt ? '2rasi.com' : '2rasi.lt';
    switcher.href = `https://${targetHost}${window.location.pathname}${window.location.hash}`;
    switcher.textContent = lt ? 'EN' : 'LT';
    switcher.setAttribute('aria-label', lt ? 'Switch to English' : 'Perjungti į lietuvių kalbą');
    switcher.title = targetHost;
  }

  const from = lt ? 'lt' : 'com';
  const pilotUrl = `https://omesg360.eu/priolens-open14-v02/?from=${from}&lang=${lang}`;
  document.querySelectorAll('#start-pilot,#start-pilot-side').forEach((a) => {
    a.href = pilotUrl;
  });

  const footerSpan = document.querySelector('.tool-footer span');
  if (footerSpan) footerSpan.textContent = lt ? '2rasi · Pažvelk dar kartą.' : '2rasi · Look again.';
  const footerLink = document.querySelector('.tool-footer a');
  if (footerLink) footerLink.textContent = lt ? '← Grįžti į eksperimentus' : '← Back to experiments';
})();
