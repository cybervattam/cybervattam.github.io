(function () {
  const widget = document.querySelector('[data-term-widget]');
  if (!widget) return;

  const sourceUrl = widget.dataset.termSource;
  const pageLang = widget.dataset.termLang || 'en';
  const pairLabelEl = widget.querySelector('[data-term-pair-label]');
  const badgeEl = widget.querySelector('[data-term-badge]');
  const enTermEl = widget.querySelector('[data-term-en]');
  const nativeLangTagEl = widget.querySelector('[data-term-native-lang]');
  const nativeTermEl = widget.querySelector('[data-term-native]');
  const translitEl = widget.querySelector('[data-term-translit]');
  const exampleEl = widget.querySelector('[data-term-example]');
  const dotsEl = widget.querySelector('[data-term-dots]');
  const progressEl = widget.querySelector('[data-term-progress]');

  if (!sourceUrl || !badgeEl || !enTermEl || !nativeTermEl || !exampleEl) return;

  let terms = [];
  let dotCount = 0;
  let isEnglishMultiLang = false;
  let activeIndex = 0;
  let intervalId = null;
  let intervalMs = 4800;
  let isPaused = false;

  const renderDots = () => {
    if (!dotsEl || !dotCount) return;
    dotsEl.replaceChildren();
    for (let idx = 0; idx < dotCount; idx += 1) {
      const term = terms[idx];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'term-widget__dot' + (idx === (activeIndex % dotCount) ? ' is-active' : '');
      btn.setAttribute('aria-label', term ? `${term.english} / ${term.vernacular}` : `Term ${idx + 1}`);
      btn.addEventListener('click', () => {
        if (idx === (activeIndex % dotCount)) return;
        showTerm(idx);
        restartTimer();
      });
      dotsEl.appendChild(btn);
    }
  };

  const updateDots = () => {
    if (!dotsEl || !dotCount) return;
    const buttons = dotsEl.querySelectorAll('.term-widget__dot');
    const activeDot = activeIndex % dotCount;
    buttons.forEach((btn, idx) => {
      btn.classList.toggle('is-active', idx === activeDot);
    });
  };

  const resetProgressAnimation = () => {
    if (!progressEl) return;
    progressEl.style.transition = 'none';
    progressEl.style.transform = 'scaleX(0)';
    void progressEl.offsetWidth;
    if (!isPaused) {
      progressEl.style.transition = `transform ${intervalMs}ms linear`;
      progressEl.style.transform = 'scaleX(1)';
    }
  };

  const applyTermContent = (term) => {
    if (pairLabelEl && term.pairLabel) {
      pairLabelEl.textContent = term.pairLabel;
    }
    if (nativeLangTagEl && term.languageName) {
      nativeLangTagEl.textContent = term.languageName;
    }
    enTermEl.textContent = term.english;
    nativeTermEl.textContent = term.vernacular;
    if (translitEl) {
      translitEl.textContent = term.transliteration || '';
    }
    exampleEl.textContent = isEnglishMultiLang
      ? (term.exampleEn || term.exampleNative)
      : (term.exampleNative || term.exampleEn);

    const targetUrl = isEnglishMultiLang
      ? (term.urlEn || term.urlNative)
      : (term.urlNative || term.urlEn);
    if (targetUrl && badgeEl.tagName === 'A') {
      badgeEl.href = targetUrl;
    }
  };

  const showTerm = (index) => {
    if (!terms.length) return;
    activeIndex = (index + terms.length) % terms.length;
    const term = terms[activeIndex];

    badgeEl.classList.add('is-switching');
    exampleEl.classList.add('is-switching');

    window.setTimeout(() => {
      applyTermContent(term);
      updateDots();
      badgeEl.classList.remove('is-switching');
      exampleEl.classList.remove('is-switching');
      resetProgressAnimation();
    }, 210);
  };

  const startTimer = () => {
    stopTimer();
    resetProgressAnimation();
    intervalId = window.setInterval(() => {
      if (!isPaused) {
        showTerm(activeIndex + 1);
      }
    }, intervalMs);
  };

  const stopTimer = () => {
    if (intervalId) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  };

  const restartTimer = () => {
    if (!isPaused) {
      startTimer();
    }
  };

  widget.addEventListener('mouseenter', () => {
    isPaused = true;
    if (progressEl) {
      progressEl.style.transition = 'none';
    }
  });

  widget.addEventListener('mouseleave', () => {
    isPaused = false;
    resetProgressAnimation();
    startTimer();
  });

  fetch(sourceUrl)
    .then((res) => {
      if (!res.ok) throw new Error('Failed to load terms JSON');
      return res.json();
    })
    .then((data) => {
      if (!data || !data.languages) return;
      intervalMs = data.rotationIntervalMs || 4800;

      if (pageLang !== 'en' && data.languages[pageLang]) {
        // Non-English homepage: rotate strictly within this language's pair with English
        isEnglishMultiLang = false;
        const langPack = data.languages[pageLang];
        if (!Array.isArray(langPack.terms) || !langPack.terms.length) return;

        terms = langPack.terms.map((t) => ({
          ...t,
          languageName: langPack.languageName,
          pairLabel: langPack.pairLabelNative || langPack.pairLabelEn
        }));
        dotCount = terms.length;
      } else {
        // English homepage: rotate across all language pairs with English
        isEnglishMultiLang = true;
        const langOrder = ['ta', 'hi', 'ml', 'te', 'kn'].filter(
          (code) => data.languages[code] && Array.isArray(data.languages[code].terms) && data.languages[code].terms.length
        );
        if (!langOrder.length) return;

        const baseTermCount = data.languages[langOrder[0]].terms.length;
        const totalSteps = langOrder.length * baseTermCount;
        const combined = [];

        for (let step = 0; step < totalSteps; step += 1) {
          const langCode = langOrder[step % langOrder.length];
          const langPack = data.languages[langCode];
          const term = langPack.terms[step % langPack.terms.length];
          if (term) {
            combined.push({
              ...term,
              languageName: langPack.languageName,
              pairLabel: langPack.pairLabelEn || langPack.pairLabelNative
            });
          }
        }
        if (!combined.length) return;
        terms = combined;
        dotCount = baseTermCount;
      }

      applyTermContent(terms[0]);
      renderDots();
      startTimer();
    })
    .catch(() => {
      // Fallback: static initial content remains visible
    });
})();
