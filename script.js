if (!window.RASI_LANG) {
  const i18n = document.createElement('script');
  i18n.src = `i18n.js?v=20260817-0836`;
  document.head.appendChild(i18n);
}

const lens = document.querySelector('.lens');
const stage = document.querySelector('.perception-stage');
const baseWord = document.querySelector('.base-word');
const hint = document.querySelector('.hint');
const hero = document.querySelector('.hero');
const cue = document.querySelector('.scroll-cue');
const header = document.querySelector('.site-header');

const coarsePointer = matchMedia('(pointer: coarse)').matches;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

const localizedHint = (key, fallback) => window.RASI_COPY?.hints?.[window.RASI_LANG]?.[key] || fallback;

const waterRenderer = window.createWaterDropRenderer?.({
  stage,
  lens,
  baseWord,
  hero
}) || null;

let dragging = false;
let landed = false;
let orientationListening = false;
let orientationActive = false;
let permissionRequested = false;
let baseBeta = null;
let baseGamma = null;
let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;
let tiltOriginX = 0;
let tiltOriginY = 0;
let rotationTimer = null;
let layoutMode = window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function smoothstep(value) {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function updateSemanticReveal(px, py) {
  const stageRect = stage.getBoundingClientRect();
  const wordRect = baseWord.getBoundingClientRect();
  const left = wordRect.left - stageRect.left;
  const top = wordRect.top - stageRect.top;
  const halfW = wordRect.width / 2;
  const halfH = wordRect.height / 2;
  const centerX = left + halfW;
  const centerY = top + halfH;

  // Signed distance from the drop centre to the actual SEE rectangle.
  // Morph starts only when the physical drop touches the word and reaches
  // full strength as the drop centre moves into the word area.
  const qx = Math.abs(px - centerX) - halfW;
  const qy = Math.abs(py - centerY) - halfH;
  const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
  const inside = Math.min(Math.max(qx, qy), 0);
  const signedDistance = outside + inside;
  const lensRadius = lens.offsetWidth / 2;

  const overlap = clamp((lensRadius - signedDistance) / Math.max(lensRadius, 1), 0, 1);
  const morph = smoothstep(overlap);

  stage.style.setProperty('--morph', morph.toFixed(3));
  waterRenderer?.setMorph(morph);
}

function setLensLocal(x, y, reveal = landed) {
  const min = 60;
  const maxX = Math.max(min, stage.clientWidth - min);
  const maxY = Math.max(min, stage.clientHeight - min);
  const px = clamp(x, min, maxX);
  const py = clamp(y, min, maxY);
  const radius = lens.offsetWidth / 2;

  currentX = px;
  currentY = py;
  lens.style.setProperty('--x', `${px}px`);
  lens.style.setProperty('--y', `${py}px`);

  // The DOM word is stationary. These variables only cut a moving optical
  // window out of it so WebGL can paint the refracted pixels beneath the drop.
  stage.style.setProperty('--drop-x', `${px}px`);
  stage.style.setProperty('--drop-y', `${py}px`);
  stage.style.setProperty('--drop-r', `${Math.max(0, radius - 1)}px`);

  if (reveal) {
    updateSemanticReveal(px, py);
  } else {
    stage.style.setProperty('--morph', '0');
    waterRenderer?.setMorph(0);
  }
}

function setLens(clientX, clientY) {
  const r = stage.getBoundingClientRect();
  setLensLocal(clientX - r.left, clientY - r.top);
}

function wordCenterLocal() {
  const stageRect = stage.getBoundingClientRect();
  const wordRect = baseWord.getBoundingClientRect();
  return {
    x: wordRect.left - stageRect.left + wordRect.width / 2,
    y: wordRect.top - stageRect.top + wordRect.height / 2
  };
}

function centerLensOnWord(reveal = true) {
  const center = wordCenterLocal();
  setLensLocal(center.x, center.y, reveal);
  targetX = tiltOriginX = currentX;
  targetY = tiltOriginY = currentY;
}

function settleLens() {
  if (landed) return;
  landed = true;
  centerLensOnWord(true);

  if (coarsePointer) {
    hint.textContent = localizedHint('tiltTouch', 'TILT · TOUCH · NOTICE');
    startOrientation(false);
  }
}

lens.addEventListener('animationend', settleLens, { once: true });
setTimeout(settleLens, reducedMotion ? 0 : (coarsePointer ? 1980 : 1720));

function attachOrientationListener() {
  if (orientationListening) return;
  orientationListening = true;
  window.addEventListener('deviceorientation', onOrientation, { passive: true });
}

async function startOrientation(fromGesture) {
  if (!coarsePointer || typeof DeviceOrientationEvent === 'undefined') return;

  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    if (!fromGesture || permissionRequested) {
      if (!permissionRequested) hint.textContent = localizedHint('touchTilt', 'TOUCH · TILT · NOTICE');
      return;
    }

    permissionRequested = true;
    try {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission === 'granted') {
        attachOrientationListener();
      } else {
        hint.textContent = localizedHint('dragTouch', 'DRAG · TOUCH · NOTICE');
      }
    } catch {
      hint.textContent = localizedHint('dragTouch', 'DRAG · TOUCH · NOTICE');
    }
    return;
  }

  attachOrientationListener();
}

function onOrientation(event) {
  if (!landed || dragging || event.beta == null || event.gamma == null) return;

  if (baseBeta == null || baseGamma == null) {
    baseBeta = event.beta;
    baseGamma = event.gamma;
    tiltOriginX = currentX || wordCenterLocal().x;
    tiltOriginY = currentY || wordCenterLocal().y;
    targetX = tiltOriginX;
    targetY = tiltOriginY;
    orientationActive = true;
    hint.textContent = localizedHint('tiltTouch', 'TILT · TOUCH · NOTICE');
    return;
  }

  const beta = event.beta - baseBeta;
  const gamma = event.gamma - baseGamma;
  const angle = ((screen.orientation?.angle ?? window.orientation ?? 0) + 360) % 360;

  let horizontal = gamma;
  let vertical = beta;

  if (angle === 90) {
    horizontal = beta;
    vertical = -gamma;
  } else if (angle === 270) {
    horizontal = -beta;
    vertical = gamma;
  } else if (angle === 180) {
    horizontal = -gamma;
    vertical = -beta;
  }

  const nx = clamp(horizontal / 18, -1, 1);
  const ny = clamp(vertical / 18, -1, 1);
  const travelX = stage.clientWidth * 0.3;
  const travelY = stage.clientHeight * 0.34;

  targetX = clamp(tiltOriginX + nx * travelX, 60, stage.clientWidth - 60);
  targetY = clamp(tiltOriginY + ny * travelY, 60, stage.clientHeight - 60);
}

function animateTilt() {
  if (landed && orientationActive && !dragging) {
    const x = currentX + (targetX - currentX) * 0.14;
    const y = currentY + (targetY - currentY) * 0.14;
    setLensLocal(x, y, true);
  }
  requestAnimationFrame(animateTilt);
}
requestAnimationFrame(animateTilt);

function recalibrateForLayoutChange() {
  if (!landed) return;
  clearTimeout(rotationTimer);
  rotationTimer = setTimeout(() => {
    baseBeta = null;
    baseGamma = null;
    orientationActive = false;
    centerLensOnWord(true);
    waterRenderer?.resize();
    if (coarsePointer) startOrientation(false);
  }, 220);
}

window.addEventListener('orientationchange', recalibrateForLayoutChange);
screen.orientation?.addEventListener?.('change', recalibrateForLayoutChange);
window.addEventListener('resize', () => {
  const nextMode = window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait';
  if (nextMode !== layoutMode) {
    layoutMode = nextMode;
    recalibrateForLayoutChange();
  } else {
    waterRenderer?.resize();
  }
});

stage.addEventListener('pointerdown', (e) => {
  if (!landed) return;
  dragging = true;
  stage.setPointerCapture?.(e.pointerId);
  setLens(e.clientX, e.clientY);
  if (coarsePointer) startOrientation(true);
});

stage.addEventListener('pointermove', (e) => {
  if (!landed) return;
  if (dragging || e.pointerType === 'mouse') setLens(e.clientX, e.clientY);
});

function finishDrag() {
  dragging = false;
  if (orientationActive) {
    tiltOriginX = currentX;
    tiltOriginY = currentY;
    targetX = currentX;
    targetY = currentY;
    baseBeta = null;
    baseGamma = null;
  }
}

stage.addEventListener('pointerup', finishDrag);
stage.addEventListener('pointercancel', finishDrag);

function rippleAndGo() {
  hero.classList.remove('ripple-now');
  void hero.offsetWidth;
  hero.classList.add('ripple-now');
  setTimeout(() => document.querySelector('#experiments').scrollIntoView({ behavior: 'smooth' }), 360);
}

cue.addEventListener('click', rippleAndGo);
lens.addEventListener('dblclick', rippleAndGo);

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }
}, { threshold: .15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Keep the legacy reflection tools in the same browsing context so the
// browser Back action naturally returns to 2rasi. Research/professional
// destinations keep their explicit new-tab behaviour.
['mirror', 'multipliers', 'divergent', 'situational-leadership', 'karpman', 'strategic-thinking'].forEach((id) => {
  const start = document.querySelector(`#${id} .experiment-actions a:nth-child(2)`);
  if (!start) return;
  start.target = '_self';
  start.removeAttribute('rel');
});

// Lab-only localization. This path guard keeps the production homepage and
// production tool pages untouched while the full visual homepage is tested.
(() => {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path !== '/lab/homepage-visual-v3') return;

  const lt = window.location.hostname === '2rasi.lt' || window.location.hostname.endsWith('.2rasi.lt');
  if (!lt) return;

  const setText = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  };

  setText('.site-header nav a:nth-child(1)', 'Eksperimentai');
  setText('.site-header nav a:nth-child(2)', 'Apie');
  setText('.eyebrow', 'Mažas poslinkis gali pakeisti vaizdą');
  setText('#hero-title', 'Pažvelk dar kartą.');
  setText('.hero-sub', 'Įrankiai ir eksperimentai, padedantys pamatyti kitaip.');
  setText('#about .kicker', 'APIE');
  setText('.about-lead', '2rasi yra vieta suvokimo, pasirinkimo ir refleksijos eksperimentams.');

  const aboutParagraphs = document.querySelectorAll('#about .about-copy > p:not(.kicker):not(.about-lead)');
  if (aboutParagraphs[0]) aboutParagraphs[0].textContent = 'Vieni prasideda nuo psichologijos. Kiti nuo darbo. Dar kiti nuo paprastų dalykų, kurių nustojome pastebėti.';
  if (aboutParagraphs[1]) aboutParagraphs[1].textContent = 'Kas nutinka, jei pažvelgiame dar kartą?';
})();
