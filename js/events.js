(function () {
  const input = document.querySelector('[data-event-search-input]');
  const source = document.querySelector('[data-events-source]');
  const upcomingSection = document.querySelector('[data-upcoming-section]');
  const upcomingGroups = document.querySelector('[data-upcoming-groups]');
  const upcomingCount = document.querySelector('[data-upcoming-count]');
  const pastSection = document.querySelector('[data-past-section]');
  const pastList = document.querySelector('[data-past-events]');
  const pastCount = document.querySelector('[data-past-count]');
  const clearButton = document.querySelector('[data-event-search-clear]');
  const status = document.querySelector('[data-event-search-status]');
  const noResults = document.querySelector('[data-event-search-empty]');

  if (!input || !source || !upcomingGroups || !pastList) return;

  const cards = [...source.querySelectorAll('[data-event-card]')];
  const now = Date.now();
  const upcoming = [];
  const past = [];

  cards.forEach((card) => {
    const endTime = Date.parse(card.dataset.eventEnd);
    const startTime = Date.parse(card.dataset.eventStart);
    const event = { card, endTime, startTime };
    if (Number.isFinite(endTime) && endTime < now) {
      card.classList.add('is-past');
      past.push(event);
    } else {
      upcoming.push(event);
    }
  });

  upcoming.sort((a, b) => {
    const startA = Number.isFinite(a.startTime) ? a.startTime : Infinity;
    const startB = Number.isFinite(b.startTime) ? b.startTime : Infinity;
    return startA - startB;
  });
  past.sort((a, b) => b.endTime - a.endTime);

  const monthFormatter = new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const monthGroups = new Map();

  upcoming.forEach(({ card }) => {
    const [, year, month] = /^(\d{4})-(\d{2})/.exec(card.dataset.eventStart) || [];
    const key = year && month ? `${year}-${month}` : 'unscheduled';
    let group = monthGroups.get(key);

    if (!group) {
      const section = document.createElement('section');
      section.className = 'event-month-group';
      section.dataset.eventMonthGroup = '';

      const heading = document.createElement('h3');
      heading.className = 'event-month-group__title';
      heading.textContent = year && month
        ? monthFormatter.format(new Date(Date.UTC(Number(year), Number(month) - 1, 1)))
        : 'Date to be announced';

      const grid = document.createElement('div');
      grid.className = 'events-grid';
      section.append(heading, grid);
      upcomingGroups.appendChild(section);
      group = { section, grid };
      monthGroups.set(key, group);
    }

    group.grid.appendChild(card);
  });

  past.forEach(({ card }) => pastList.appendChild(card));
  source.hidden = true;

  const updateResults = () => {
    const query = input.value.trim().toLocaleLowerCase();
    let visibleUpcoming = 0;
    let visiblePast = 0;

    cards.forEach((card) => {
      const matches = !query || card.textContent.toLocaleLowerCase().includes(query);
      card.hidden = !matches;
      if (matches && card.classList.contains('is-past')) visiblePast += 1;
      else if (matches) visibleUpcoming += 1;
    });

    monthGroups.forEach(({ section }) => {
      section.hidden = !section.querySelector('.event-card:not([hidden])');
    });
    upcomingSection.hidden = visibleUpcoming === 0;
    pastSection.hidden = visiblePast === 0;
    noResults.hidden = visibleUpcoming + visiblePast > 0;
    clearButton.hidden = !query;
    upcomingCount.textContent = `${visibleUpcoming} event${visibleUpcoming === 1 ? '' : 's'}`;
    pastCount.textContent = `${visiblePast} event${visiblePast === 1 ? '' : 's'}`;
    status.textContent = query
      ? `${visibleUpcoming + visiblePast} event${visibleUpcoming + visiblePast === 1 ? '' : 's'} found.`
      : `${visibleUpcoming} upcoming · ${visiblePast} past`;
  };

  input.addEventListener('input', updateResults);
  clearButton.addEventListener('click', () => {
    input.value = '';
    updateResults();
    input.focus();
  });

  updateResults();
})();