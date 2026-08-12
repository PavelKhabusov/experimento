/* ---------- i18n ---------- */
const I18N = {
  es: {
    nav_obras: 'Obras', nav_sobre: 'Sobre mí', nav_viajes: 'Viajes', nav_hist: 'Historias',
    hero_kicker: '✷ arte hecho a mano — Asunción, Paraguay ✷',
    hero_sub: 'Prendas pintadas a mano · bordados · cuadros · arcilla',
    hero_by: 'por Lorenzo Carrillo',
    cta_obras: 'Ver obras ↓',
    marquee: 'PINTADA A MANO ✷ BORDADO A MANO ✷ ARCILLA ✷ PIEZAS ÚNICAS ✷ ASUNCIÓN PY ✷ ',
    obras_title: 'Obras', obras_note: 'cada pieza es única',
    f_all: 'Todo', f_prendas: 'Prendas', f_dibujos: 'Dibujos', f_bordados: 'Bordados',
    f_cuadros: 'Cuadros', f_objetos: 'Objetos', f_sesion: 'Sesión',
    sobre_title: 'Sobre mí',
    sobre_p1: '<strong>Lorenzo Carrillo</strong> — artista y estudiante de arquitectura de Asunción, Paraguay. <span class="hi">EXPERIMENTO</span> es su laboratorio: caras imposibles dibujadas en tinta, remeras y camisas pintadas a mano, bordados puntada por puntada, cuadros y soles de arcilla.',
    sobre_p2: 'Nada se imprime, nada se repite: cada prenda y cada objeto sale de sus manos, pieza por pieza, y se vende en ferias locales o directo por Instagram.',
    sobre_hand: '— la arquitectura me enseñó a mirar; el dibujo, a desobedecer.',
    viajes_title: 'Viajes & arquitectura', viajes_note: 'lo que alimenta el ojo',
    viajes_lead: 'De Gaudí a Le Corbusier, de las salinas del altiplano a Niterói — el cuaderno visual detrás de las obras.',
    hist_title: 'Historias', hist_note: 'del taller y las ferias',
    hist_lead: 'Momentos guardados: ferias, prendas puestas, bordados en proceso, dibujos y cuadros.',
    hl: { Ferias: 'Ferias', Prendas: 'Prendas', Bordados: 'Bordados', Dibujos: 'Dibujos', Cuadros: 'Cuadros' },
    pedido_title: '¿Querés una pieza?',
    pedido_sub: 'se aceptan encargos — remeras, bordados, cuadros',
    pedido_btn: 'Escribime por Instagram ✷',
    cats: { prendas: 'Prendas', dibujos: 'Dibujos', bordados: 'Bordados', cuadros: 'Cuadros', objetos: 'Objetos', sesion: 'Sesión' },
    status: { 'vendido': 'vendido', 'sold out': 'sold out', 'disponible': 'disponible' },
  },
  en: {
    nav_obras: 'Works', nav_sobre: 'About', nav_viajes: 'Travel', nav_hist: 'Stories',
    hero_kicker: '✷ handmade art — Asunción, Paraguay ✷',
    hero_sub: 'Hand-painted garments · embroidery · paintings · clay',
    hero_by: 'by Lorenzo Carrillo',
    cta_obras: 'See works ↓',
    marquee: 'HAND-PAINTED ✷ HAND-EMBROIDERED ✷ CLAY ✷ ONE-OF-A-KIND ✷ ASUNCIÓN PY ✷ ',
    obras_title: 'Works', obras_note: 'every piece is one of a kind',
    f_all: 'All', f_prendas: 'Garments', f_dibujos: 'Drawings', f_bordados: 'Embroidery',
    f_cuadros: 'Paintings', f_objetos: 'Objects', f_sesion: 'Session',
    sobre_title: 'About me',
    sobre_p1: '<strong>Lorenzo Carrillo</strong> — artist and architecture student from Asunción, Paraguay. <span class="hi">EXPERIMENTO</span> is his laboratory: impossible faces drawn in ink, hand-painted tees and shirts, stitch-by-stitch embroidery, canvases and clay suns.',
    sobre_p2: 'Nothing is printed, nothing repeats: every garment and object leaves his hands one piece at a time, sold at local fairs or straight through Instagram.',
    sobre_hand: '— architecture taught me to look; drawing, to disobey.',
    viajes_title: 'Travel & architecture', viajes_note: 'what feeds the eye',
    viajes_lead: 'From Gaudí to Le Corbusier, from the altiplano salt flats to Niterói — the visual notebook behind the works.',
    hist_title: 'Stories', hist_note: 'from the studio & fairs',
    hist_lead: 'Saved moments: fairs, garments worn, embroidery in progress, drawings and paintings.',
    hl: { Ferias: 'Fairs', Prendas: 'Garments', Bordados: 'Embroidery', Dibujos: 'Drawings', Cuadros: 'Paintings' },
    pedido_title: 'Want a piece?',
    pedido_sub: 'commissions welcome — tees, embroidery, paintings',
    pedido_btn: 'DM me on Instagram ✷',
    cats: { prendas: 'Garments', dibujos: 'Drawings', bordados: 'Embroidery', cuadros: 'Paintings', objetos: 'Objects', sesion: 'Session' },
    status: { 'vendido': 'sold', 'sold out': 'sold out', 'disponible': 'available' },
  },
};

let lang = localStorage.getItem('exp-lang') || 'es';

const t = () => I18N[lang];

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const s = t()[el.dataset.i18n];
    if (s !== undefined) el.textContent = s;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const s = t()[el.dataset.i18nHtml];
    if (s !== undefined) el.innerHTML = s;
  });
  document.querySelectorAll('.marquee-track span').forEach((el) => { el.textContent = t().marquee; });
  const btn = document.getElementById('langToggle');
  btn.textContent = lang === 'es' ? 'EN' : 'ES';
  const active = document.querySelector('.filters .chip.is-active');
  renderGrid(active ? active.dataset.cat : 'all');
  if (typeof renderHlTabs === 'function') { renderHlTabs(); renderHlGrid(); }
  if (!lb.hidden && cur) updateLb();
}

document.getElementById('langToggle').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  localStorage.setItem('exp-lang', lang);
  applyLang();
});

const BADGE_CLASS = {
  'vendido': 'badge-vendido',
  'sold out': 'badge-soldout',
  'disponible': 'badge-disponible',
};

const thumb = (f) => 'assets/thumbs/' + f.replace(/\.(jpg|webp)$/, '.webp');
const full = (f) => 'assets/posts/' + f;

/* ---------- grid ---------- */
const grid = document.getElementById('grid');

function renderGrid(cat) {
  grid.innerHTML = '';
  OBRAS.filter((o) => cat === 'all' || o.cat === cat).forEach((o) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', o.title);
    const badge = o.status
      ? `<span class="badge ${BADGE_CLASS[o.status] || ''}">${t().status[o.status] || o.status}</span>`
      : '';
    const multi = o.images.length > 1 ? `<span class="card-multi">${o.images.length} ⧉</span>` : '';
    card.innerHTML = `
      <div class="card-img">
        <img src="${thumb(o.images[0])}" alt="${o.title}" width="${o.w}" height="${o.h}" loading="lazy">
        ${multi}
      </div>
      <div class="card-body">
        <div class="card-head">
          <span class="card-title">${o.title}</span>
          ${badge}
        </div>
        <span class="card-cat">${t().cats[o.cat]} · ${o.date}</span>
      </div>`;
    card.addEventListener('click', () => openLb(o, 0));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(o, 0); }
    });
    grid.appendChild(card);
  });
}

document.querySelectorAll('.chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach((c) => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    renderGrid(chip.dataset.cat);
  });
});

renderGrid('all');

/* ---------- viajes strip ---------- */
const strip = document.getElementById('strip');
const VIAJES_GALLERY = {
  title: '',
  titles: VIAJES.map((v) => v.t),
  status: '',
  caption: '',
  images: VIAJES.map((v) => v.f + '.jpg'),
};
VIAJES.forEach((v, i) => {
  const fig = document.createElement('figure');
  fig.className = 'polaroid';
  fig.tabIndex = 0;
  fig.setAttribute('role', 'button');
  fig.setAttribute('aria-label', v.t);
  fig.innerHTML = `
    <img src="assets/thumbs/${v.f}.webp" alt="${v.t}" width="${v.w}" height="${v.h}" loading="lazy">
    <figcaption>${v.t}</figcaption>`;
  fig.addEventListener('click', () => openLb(VIAJES_GALLERY, i));
  fig.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(VIAJES_GALLERY, i); }
  });
  strip.appendChild(fig);
});

/* ---------- highlights ---------- */
const hlTabs = document.getElementById('hlTabs');
const hlGrid = document.getElementById('hlGrid');
let hlActive = 0;

function renderHlTabs() {
  hlTabs.innerHTML = '';
  HIGHLIGHTS.forEach((g, i) => {
    const b = document.createElement('button');
    b.className = 'chip' + (i === hlActive ? ' is-active' : '');
    b.textContent = `${t().hl[g.name] || g.name} · ${g.images.length}`;
    b.addEventListener('click', () => { hlActive = i; renderHlTabs(); renderHlGrid(); });
    hlTabs.appendChild(b);
  });
}

function renderHlGrid() {
  const g = HIGHLIGHTS[hlActive];
  const gallery = {
    titles: g.images.map(() => t().hl[g.name] || g.name),
    status: '', caption: '',
    images: g.images.map((im) => im.f),
    dir: 'highlights',
  };
  hlGrid.innerHTML = '';
  g.images.forEach((im, i) => {
    const fig = document.createElement('button');
    fig.className = 'hl-cell';
    fig.setAttribute('aria-label', g.name);
    fig.innerHTML = `<img src="assets/highlights/${im.f.replace(/\.(jpg|webp)$/, '')}_t.webp" alt="${g.name}" width="${im.w}" height="${im.h}" loading="lazy">`;
    fig.addEventListener('click', () => openLb(gallery, i));
    hlGrid.appendChild(fig);
  });
}

renderHlTabs();
renderHlGrid();

/* ---------- lightbox ---------- */
const lb = document.getElementById('lb');
const lbImg = document.getElementById('lbImg');
const lbTitle = document.getElementById('lbTitle');
const lbBadge = document.getElementById('lbBadge');
const lbText = document.getElementById('lbText');
const lbCount = document.getElementById('lbCount');

let cur = null;
let idx = 0;

function openLb(obra, i) {
  cur = obra;
  idx = i;
  updateLb();
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLb() {
  lb.hidden = true;
  document.body.style.overflow = '';
  cur = null;
}

const lbSrc = (o, i) => (o.dir ? `assets/${o.dir}/` : 'assets/posts/') + o.images[i];

function updateLb() {
  lbImg.src = lbSrc(cur, idx);
  lbImg.alt = `${cur.titles ? cur.titles[idx] : cur.title} — ${idx + 1}`;
  lbTitle.textContent = cur.titles ? cur.titles[idx] : cur.title;
  lbBadge.textContent = cur.status ? (t().status[cur.status] || cur.status) : '';
  lbBadge.className = 'badge ' + (BADGE_CLASS[cur.status] || '');
  lbText.textContent = cur.caption;
  lbCount.textContent = cur.images.length > 1 ? `${idx + 1} / ${cur.images.length}` : '';
  const nav = cur.images.length > 1 ? '' : 'none';
  document.getElementById('lbPrev').style.display = nav;
  document.getElementById('lbNext').style.display = nav;
  if (cur.images.length > 1) {
    new Image().src = lbSrc(cur, (idx + 1) % cur.images.length);
  }
}

function step(d) {
  if (!cur) return;
  idx = (idx + d + cur.images.length) % cur.images.length;
  updateLb();
}

document.getElementById('lbClose').addEventListener('click', closeLb);
document.getElementById('lbPrev').addEventListener('click', () => step(-1));
document.getElementById('lbNext').addEventListener('click', () => step(1));
lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });

document.addEventListener('keydown', (e) => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});

/* ---------- dancing hero letters ---------- */
const heroTitle = document.querySelector('.hero-title');
const DANCE_STYLES = ['dance-invert', 'dance-lav', 'dance-pink', 'dance-butter', 'dance-hand'];
let dancing = false;

heroTitle.addEventListener('click', () => {
  if (dancing) return;
  dancing = true;
  const spans = [...heroTitle.querySelectorAll('span')];
  spans.forEach((s, i) => {
    const isOutline = (i + 1) % 3 === 0;
    const cls = isOutline
      ? (Math.random() < 0.45 ? DANCE_STYLES[1 + Math.floor(Math.random() * 3)] : 'dance-invert')
      : (Math.random() < 0.15 ? 'dance-hand' : 'dance-invert');
    setTimeout(() => {
      const rot = (Math.random() * 28 - 14).toFixed(1);
      const dy = (Math.random() * 0.3 - 0.15).toFixed(2);
      const sc = (0.9 + Math.random() * 0.3).toFixed(2);
      s.style.transform = `rotate(${rot}deg) translateY(${dy}em) scale(${sc})`;
      s.classList.add(cls);
    }, i * 55);
    setTimeout(() => {
      s.style.transform = '';
      s.classList.remove(...DANCE_STYLES);
    }, 700 + i * 55);
  });
  setTimeout(() => { dancing = false; }, 700 + spans.length * 55 + 300);
});

let touchX = null;
lb.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 45) step(dx > 0 ? -1 : 1);
  touchX = null;
}, { passive: true });

applyLang();
