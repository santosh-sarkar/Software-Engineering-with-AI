// ============================================================
// The Oak Table — Menu page (static)
// Dummy data only. No backend, no auth, no cart.
// Swappable: this DUMMY array mirrors the /api/menu response shape.
// ============================================================

const MENU_ITEMS = [
  { _id: 'd1', name: 'Crispy Calamari',  desc: 'Lightly floured, fried golden with lemon aioli and a sprinkle of sea salt.', price: 595, category: 'starters', veg: false, tag: 'Chef’s pick', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=70' },
  { _id: 'd2', name: 'Burrata & Heirloom Tomato', desc: 'Creamy burrata over blistered heirloom tomatoes, basil oil and toast.', price: 650, category: 'starters', veg: true, tag: '', img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=70' },
  { _id: 'd3', name: 'Truffle Parmesan Fries',   desc: 'Triple-cooked fries tossed in truffle oil, parmesan and parsley.',           price: 425, category: 'starters', veg: true, tag: 'Bestseller', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=70' },
  { _id: 'd4', name: 'Classic Smash Burger',     desc: 'Double smashed patty, aged cheddar, house sauce, pickles, brioche bun.',        price: 850, category: 'mains', veg: false, tag: 'Bestseller', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=70' },
  { _id: 'd5', name: 'Creamy Mushroom Fettuccine', desc: 'Slow-braised mushrooms, parmesan cream, fresh tagliatelle, toasted rustic.',  price: 775, category: 'mains', veg: true, tag: 'Chef’s pick', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=70' },
  { _id: 'd6', name: 'Wood-Fired Lamb Kofta',  desc: 'Spiced lamb skewers, charred eggplant, whipped yogurt and warm flatbread.',     price: 1095, category: 'mains', veg: false, tag: '', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=70' },
  { _id: 'd7', name: 'Charred Citrus Salmon',  desc: 'Pan-seared salmon, blood orange, fennel slaw and an herb beurre blanc.',           price: 1250, category: 'mains', veg: false, tag: 'Chef’s pick', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=70' },
  { _id: 'd8', name: 'Sticky Toffee Pudding',  desc: 'Warm sponge, salted caramel, clotted cream — the classic ending.',               price: 495, category: 'desserts', veg: true, tag: 'Bestseller', img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=70' },
  { _id: 'd9', name: 'Dark Chocolate Tart',    desc: '70% dark chocolate, sea salt, whipped crème fraîche and candied orange.',        price: 525, category: 'desserts', veg: true, tag: '', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=70' },
  { _id: 'd10', name: 'Grilled Lemon Tart',    desc: 'Zesty curd in a buttery shell, torched meringue peaks and thyme.',                price: 475, category: 'desserts', veg: true, tag: '', img: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=70' },
  { _id: 'd11', name: 'House Lemonade',        desc: 'Freshly squeezed, lightly sweetened and poured over big ice.',                    price: 295, category: 'drinks', veg: true, tag: '', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=70' },
  { _id: 'd12', name: 'Craft Iced Latte',      desc: 'Double shot over cream, slow-brewed and chilled with oat milk option.',            price: 375, category: 'drinks', veg: true, tag: '', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=70' },
];

const categories = [
  { key: 'all', label: 'All' },
  { key: 'starters', label: 'Starters' },
  { key: 'mains', label: 'Mains' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'drinks', label: 'Drinks' },
];

// ---- DOM refs ----
const tablist = document.getElementById('tablist');
const grid = document.getElementById('card-grid');
const empty = document.getElementById('empty-state');

// ---- Tabs ----
categories.forEach((cat, i) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.role = 'tab';
  btn.dataset.category = cat.key;
  btn.setAttribute('aria-selected', i === 0);
  btn.textContent = cat.label;
  btn.className = tabClass(i === 0);
  btn.addEventListener('click', () => setCategory(cat.key, btn));
  tablist.appendChild(btn);
});

function tabClass(active) {
  return 'shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-150 ' +
    (active ? 'border-ink bg-ink text-cream' : 'border-line bg-white text-muted hover:border-ink/40 hover:text-ink');
}

function setCategory(key, fromBtn) {
  tablist.querySelectorAll('[data-category]').forEach((b) => {
    const active = b === fromBtn;
    b.setAttribute('aria-selected', active);
    b.className = tabClass(active);
  });
  render(key);
}

// ---- Helpers ----
function formatPrice(n) {
  return n.toLocaleString('en-IN', { maximumFractionDigits: 0 }) + ' /-';
}

// ---- Render ----
function render(category) {
  const items = category === 'all' ? MENU_ITEMS : MENU_ITEMS.filter((m) => m.category === category);
  grid.innerHTML = '';
  empty.classList.toggle('hidden', items.length > 0);

  const runner = document.createElement('span');
  runner.className = 'sr-only';
  runner.textContent = items.length ? items.length + ' dishes available' : 'No dishes in this category';
  grid.appendChild(runner);

  items.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'group card-enter flex flex-col overflow-hidden rounded-2xl border border-line/70 bg-white shadow-card transition-shadow duration-200 hover:shadow-lift';

    card.innerHTML = `
      <div class="relative aspect-[4/3] overflow-hidden">
        <img src="${item.img}" alt="${item.name}" loading="lazy"
             class="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]" />
        <div class="absolute left-3 top-3 flex items-center gap-2">
          <span class="grid h-6 w-6 place-items-center rounded-full bg-white/90 shadow-sm" title="${item.veg ? 'Vegetarian' : 'Contains meat'}">
            <svg class="h-3.5 w-3.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              ${item.veg ? '<path d="M9 11l6 6" stroke="#5B6B3C"/><path d="M15 11l-6 6" stroke="#5B6B3C"/><circle cx="12" cy="12" r="9" stroke="#5B6B3C"/>' : '<path d="M9 10h6" stroke="#E04F26"/><path d="M9 14h6" stroke="#E04F26"/><circle cx="12" cy="12" r="9" stroke="#E04F26"/>'}
            </svg>
          </span>
        </div>
        ${item.tag ? `<span class="absolute right-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream backdrop-blur">${item.tag}</span>` : ''}
      </div>

      <div class="flex flex-1 flex-col p-4 sm:p-5">
        <div class="flex items-start justify-between gap-3">
          <h3 class="font-serif text-lg font-semibold leading-snug tracking-tight">${item.name}</h3>
          <span class="mt-0.5 shrink-0 font-semibold text-accent">Rs. ${formatPrice(item.price)}</span>
        </div>
        <p class="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">${item.desc}</p>
        <div class="mt-4 flex items-center justify-between pt-1">
          <span class="text-xs font-medium uppercase tracking-widest text-muted/70">${item.category}</span>
        </div>
      </div>
    `;

    grid.appendChild(card);

    card.style.animationDelay = (index * 40) + 'ms';
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('show')));
  });
}

// ---- Boot ----
render('all');