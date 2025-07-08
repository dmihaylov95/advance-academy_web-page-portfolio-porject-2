export function initTabs() {
  document.querySelectorAll('#tabMenu button').forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tabMenu .nav-link').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
      loadTab(btn.dataset.tab);
    })
  );
  loadTab('nature');
}

export async function loadTab(category) {
  const res = await fetch('../data/locations.json');
  const data = await res.json();
  const filtered = data.filter(l => l.category === category);
  renderLocations(filtered, '#tabContent');
}

export async function loadAllLocations() {
  const res = await fetch('../data/locations.json');
  const data = await res.json();
  renderLocations(data, '#allLocations');
}

export function renderLocations(locations, selector) {
  const container = document.querySelector(selector);
  container.innerHTML = '';
  locations.forEach(loc => {
    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `
      <div class="card mb-4">
        <img src="${loc.image}" class="card-img-top" alt="${loc.name}">
        <div class="card-body">
          <h5 class="card-title">${loc.name}</h5>
          <p>${loc.desc}</p>
        </div>
      </div>`;
    container.appendChild(card);
  });
}