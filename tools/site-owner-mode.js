(() => {
  'use strict';

  const OWNER_KEY = '2rasi:owner:v1';
  const TEST_KEY = '2rasi:test:v1';
  const SOURCE_KEY = '2rasi:source:v1';
  const params = new URLSearchParams(location.search);
  const ownerCommand = params.get('rasi_owner');
  const testCommand = params.get('rasi_test');

  function setOwner(enabled) {
    try {
      if (enabled) localStorage.setItem(OWNER_KEY, '1');
      else localStorage.removeItem(OWNER_KEY);
    } catch {}
  }

  function setTest(enabled) {
    try {
      if (enabled) sessionStorage.setItem(TEST_KEY, '1');
      else sessionStorage.removeItem(TEST_KEY);
    } catch {}
  }

  if (ownerCommand === '1') setOwner(true);
  if (ownerCommand === '0') {
    setOwner(false);
    try { sessionStorage.removeItem(SOURCE_KEY); } catch {}
  }

  if (testCommand === '1') setTest(true);
  if (testCommand === '0') {
    setTest(false);
    try { sessionStorage.removeItem(SOURCE_KEY); } catch {}
  }

  if (ownerCommand === '1' || ownerCommand === '0' || testCommand === '1' || testCommand === '0') {
    params.delete('rasi_owner');
    params.delete('rasi_test');
    const query = params.toString();
    const cleanUrl = `${location.pathname}${query ? `?${query}` : ''}${location.hash}`;
    try { history.replaceState(null, '', cleanUrl); } catch {}
  }

  let owner = false;
  let test = false;
  try { owner = localStorage.getItem(OWNER_KEY) === '1'; } catch {}
  try { test = sessionStorage.getItem(TEST_KEY) === '1'; } catch {}

  const mode = owner ? 'owner' : (test ? 'test' : '');

  if (mode) {
    try {
      sessionStorage.setItem(SOURCE_KEY, JSON.stringify({
        source: mode,
        medium: 'internal',
        campaign: mode === 'owner' ? 'owner-test' : 'smoke-test',
        content: '',
        referrerHost: '',
      }));
    } catch {}
    document.documentElement.dataset.rasiMode = mode;
  }

  window.RASI_OWNER_MODE = owner;
  window.RASI_TEST_MODE = test && !owner;
})();