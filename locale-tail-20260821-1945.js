(() => {
  const host = window.location.hostname.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const forced = params.get('lang');
  const lang = (forced === 'lt' || forced === 'en')
    ? forced
    : ((host === '2rasi.lt' || host.endsWith('.2rasi.lt')) ? 'lt' : 'en');

  const text = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  };

  const action = (selector, value) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const span = el.querySelector('span');
    if (!span) {
      el.textContent = value;
      return;
    }
    const node = [...el.childNodes].find(n => n.nodeType === Node.TEXT_NODE);
    if (node) node.nodeValue = `${value} `;
  };

  function apply() {
    const lt = lang === 'lt';

    const workstyle = document.querySelector('#workstyle');
    if (workstyle) {
      text('#workstyle .experiment-state', lt ? 'Kognityvinis pilotas · LT' : 'Cognitive pilot · LT');
      text('#workstyle .experiment-summary', lt
        ? 'Tyrimo prototipas apie pasirinkimus tarp lygiaverčių darbo strategijų kasdienėse situacijose.'
        : 'A research prototype exploring choices between equally valid ways of working across everyday situations.');
      const meta = workstyle.querySelectorAll('.experiment-meta span');
      if (meta[0]) meta[0].textContent = lt ? '34 situacijos · 8 kandidatinės ašys' : '34 situations · 8 candidate axes';
      if (meta[1]) meta[1].textContent = lt ? 'Asmeninis profilis dar nerodomas' : 'No personal profile yet';
      action('#workstyle .experiment-actions a:nth-child(1)', lt ? 'Apie' : 'About');
      action('#workstyle .experiment-actions a:nth-child(2)', lt ? 'Pradėti pilotą' : 'Start pilot');
    }

    text('.manifesto-word', lt ? 'ŽIŪRĖK' : 'LOOK');
    const manifesto = document.querySelectorAll('.manifesto-copy p');
    const manifestoCopy = lt
      ? ['Pirmiausia pažįstama.', 'Tada netikėta.', 'Galiausiai prasmė.']
      : ['Familiar first.', 'Unexpected second.', 'Meaning third.'];
    manifesto.forEach((el, i) => { if (manifestoCopy[i]) el.textContent = manifestoCopy[i]; });

    text('#about .kicker', lt ? 'APIE' : 'ABOUT');
    text('.about-lead', lt
      ? '2rasi yra vieta suvokimo, pasirinkimo ir refleksijos eksperimentams.'
      : '2rasi is a place for experiments in perception, choice and reflection.');

    const aboutBody = document.querySelectorAll('#about .about-copy > p:not(.kicker):not(.about-lead)');
    const aboutCopy = lt
      ? ['Vieni prasideda nuo psichologijos. Kiti nuo darbo. Dar kiti nuo paprastų dalykų, kurių nustojome pastebėti.', 'Kas nutinka, jei pažvelgiame dar kartą?']
      : ['Some begin with psychology. Some with work. Some with ordinary things we stopped noticing.', 'What happens if we look again?'];
    aboutBody.forEach((el, i) => { if (aboutCopy[i]) el.textContent = aboutCopy[i]; });

    const targetHost = lt ? '2rasi.com' : '2rasi.lt';
    const targetLabel = lt ? 'EN' : 'LT';

    const switcher = document.querySelector('.language-switch');
    if (switcher) {
      switcher.textContent = targetLabel;
      switcher.href = `https://${targetHost}${window.location.pathname}${window.location.hash}`;
      switcher.setAttribute('aria-label', lt ? 'Switch to English' : 'Perjungti į lietuvių kalbą');
    }

    const footerLink = document.querySelector('.footer-links a:last-child');
    if (footerLink) {
      footerLink.textContent = `${targetLabel} ↗`;
      footerLink.href = `https://${targetHost}`;
      footerLink.setAttribute('aria-label', lt ? 'English version' : 'Lietuviška versija');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply, { once: true });
  } else {
    apply();
  }
  requestAnimationFrame(apply);
  setTimeout(apply, 100);
  setTimeout(apply, 600);
})();
