(function () {
  const preferenceKey = 'cybervattam-language-preference';

  document.querySelectorAll('[data-language-selection]').forEach((link) => {
    link.addEventListener('click', () => {
      try {
        window.localStorage.setItem(preferenceKey, link.dataset.languageSelection);
      } catch {}
    });
  });
})();