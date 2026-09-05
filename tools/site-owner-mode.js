(() => {
  'use strict';

  const OWNER_KEY = '2rasi:owner:v1';
  const SOURCE_KEY = '2rasi:source:v1';
  const params = new URLSearchParams(location.search);
  const command = params.get('rasi_owner');

  function setOwner(enabled) {
    try {
      if (enabled) localStorage.setItem(OWNER_KEY, '1');
      else localStorage.removeItem(OWNER_KEY);
    } catch {}
  }

  if (command === '1') setOwner(true);
  if (command === '0') {
    setOwner(false);
    try { sessionStorage.removeItem(SOURCE_KEY); } catch {}
  }

  if (command === '1' || command === '0') {
    params.delete('rasi_owner');
    const query = params.toString();
    const cleanUrl = `${location.pathname}${query ? `?${query}` : ''}${location.hash}`;
    try { history.replaceState(null, '', cleanUrl); } catch {}
  }

  let owner = false;
  try { owner = localStorage.getItem(OWNER_KEY) === '1'; } catch {}

  if (owner) {
    try {
      sessionStorage.setItem(SOURCE_KEY, JSON.stringify({
        source: 'owner',
        medium: 'internal',
        campaign: 'owner-test',
        content: '',
        referrerHost: '',
      }));
    } catch {}
    document.documentElement.dataset.rasiOwner = '1';
  }

  window.RASI_OWNER_MODE = owner;
})();
