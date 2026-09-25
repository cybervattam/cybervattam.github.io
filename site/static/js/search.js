(function () {
  const dialog = document.querySelector('[data-search-dialog]');
  const openButton = document.querySelector('[data-search-open]');
  const closeButton = document.querySelector('[data-search-close]');
  const form = document.querySelector('[data-search-form]');
  const input = document.querySelector('#site-search-input');
  const status = document.querySelector('[data-search-status]');
  const results = document.querySelector('[data-search-results]');

  if (!dialog || !openButton || !form || !input || !status || !results) return;

  const indexUrl = dialog.dataset.searchIndex;
  const strings = {
    default: status.dataset.searchDefault,
    results: status.dataset.searchResultsLabel,
    noResults: status.dataset.searchNoResults,
    unavailable: status.dataset.searchUnavailable,
  };
  let pages = [];
  let indexPromise;

  const loadIndex = () => {
    if (!indexPromise) {
      indexPromise = fetch(indexUrl)
        .then((response) => {
          if (!response.ok) throw new Error('Search index unavailable');
          return response.json();
        })
        .then((data) => {
          pages = data;
          return data;
        });
    }
    return indexPromise;
  };

  const renderResults = (query) => {
    const terms = query.toLocaleLowerCase().split(/\s+/).filter(Boolean);
    results.replaceChildren();

    if (!terms.length) {
      status.textContent = strings.default;
      return;
    }

    const matches = pages.filter((page) => {
      const haystack = `${page.title} ${page.content}`.toLocaleLowerCase();
      return terms.every((term) => haystack.includes(term));
    }).slice(0, 12);

    status.textContent = matches.length
      ? `${matches.length} ${strings.results}`
      : strings.noResults;

    matches.forEach((page) => {
      const link = document.createElement('a');
      link.className = 'site-search__result';
      link.href = page.url;
      link.textContent = page.title;
      results.appendChild(link);
    });
  };

  openButton.addEventListener('click', () => {
    dialog.showModal();
    input.focus();
    loadIndex().catch(() => {
      status.textContent = strings.unavailable;
    });
  });

  closeButton?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  form.addEventListener('submit', (event) => event.preventDefault());
  input.addEventListener('input', () => {
    loadIndex().then(() => renderResults(input.value)).catch(() => {
      status.textContent = strings.unavailable;
    });
  });
})();
