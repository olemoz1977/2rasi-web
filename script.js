const lens = document.querySelector('.lens');
const stage = document.querySelector('.perception-stage');
const baseWord = document.querySelector('.base-word');
const hint = document.querySelector('.hint');
const hero = document.querySelector('.hero');
const cue = document.querySelector('.scroll-cue');
const header = document.querySelector('.site-header');

const coarsePointer = matchMedia('(pointer: coarse)').matches;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

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

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function smoothstep(value) {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function updateSemanticReveal(px, py) {
  const stageRect = stage.getBoundingClientRect();
  const wordRect = baseWord.getBoundingClientRect();
  const wordX = wordRect.left - stageRect.left + wordRect.width / 2;
  const wordY = wordRect.top - stageRect.top + wordRect.height / 2;

  const dx = px - wordX;
  const dy = py - wordY;
  const distance = Math.hypot(dx, dy);
  const lensRadius = lens.offsetWidth / 2;
  const wordRadius = Math.hypot(wordRect.width / 2, wordRect.height / 2) * .72;
  const contactDistance = lensRadius + wordRadius;

  // 0 when the drop has not reached SEE; 1 when it sits over the word.
  const overlap = clamp((contactDistance - distance) / (contactDistance * .72), 0, 1);
  const morph = smoothstep(overlap);

  stage.style.setProperty('--morph', morph.toFixed(3));
}

function setLensLocal(x, y, reveal = landed) {
  const min = 60;
  const maxX = Math.max(min, stage.clientWidth - min);
  const maxY = Math.max(min, stage.clientHeight - min);
  const px = clamp(x, min, maxX);
  const py = clamp(y, min, maxY);

  currentX = px;
  currentY = py;
  lens.style.setProperty('--x', `${px}px`);
  lens.style.setProperty('--y', `${py}px`);

  if (reveal) updateSemanticReveal(px, py);
  else stage.style.setProperty('--morph', '0');
}

function setLens(clientX, clientY) {
  const r = stage.getBoundingClientRect();
  setLensLocal(clientX - r.left, clientY - r.top);
}

function settleLens() {
  if (landed) return;
  landed = true;
  const x = stage.clientWidth / 2;
  const y = stage.clientHeight / 2;
  setLensLocal(x, y, true);
  targetX = tiltOriginX = currentX;
  targetY = tiltOriginY = currentY;

  if (coarsePointer) {
    hint.textContent = 'TILT · TOUCH · NOTICE';
    startOrientation(false);
  }
}

lens.addEventListener('animationend', settleLens, { once: true });
setTimeout(settleLens, reducedMotion ? 0 : 1550);

function attachOrientationListener() {
  if (orientationListening) return;
  orientationListening = true;
  window.addEventListener('deviceorientation', onOrientation, { passive: true });
}

async function startOrientation(fromGesture) {
  if (!coarsePointer || typeof DeviceOrientationEvent === 'undefined') return;

  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    if (!fromGesture || permissionRequested) {
      if (!permissionRequested) hint.textContent = 'TOUCH · TILT · NOTICE';
      return;
    }

    permissionRequested = true;
    try {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission === 'granted') {
        attachOrientationListener();
      } else {
        hint.textContent = 'DRAG · TOUCH · NOTICE';
      }
    } catch {
      hint.textContent = 'DRAG · TOUCH · NOTICE';
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
    tiltOriginX = currentX || stage.clientWidth / 2;
    tiltOriginY = currentY || stage.clientHeight / 2;
    targetX = tiltOriginX;
    targetY = tiltOriginY;
    orientationActive = true;
    hint.textContent = 'TILT · TOUCH · NOTICE';
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
