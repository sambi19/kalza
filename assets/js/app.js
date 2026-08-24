/* ==========================================================================
   NovaShop — Lógica de la tienda (vanilla JS, sin dependencias)
   ========================================================================== */

/* ---------- Utilidades ---------- */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const money = n =>
  new Intl.NumberFormat("es-CO", {
    style: "currency", currency: STORE.currency, maximumFractionDigits: 0
  }).format(n);

const waLink = text =>
  `https://wa.me/${STORE.phoneRaw}?text=${encodeURIComponent(text)}`;

const mailLink = (subject, body) =>
  `mailto:${STORE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const getProduct = id => PRODUCTS.find(p => p.id === id);

const discount = p =>
  p.compareAt ? Math.round((1 - p.price / p.compareAt) * 100) : 0;

const param = key => new URLSearchParams(location.search).get(key);

function toast(msg) {
  let el = $(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.dataset.show = "true";
  clearTimeout(el._t);
  el._t = setTimeout(() => (el.dataset.show = "false"), 2600);
}

/* ---------- Carrito (localStorage) ---------- */
const CART_KEY = "novashop.cart.v1";
const FAV_KEY  = "novashop.fav.v1";

const readJSON = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};
const writeJSON = (key, val) => {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
};

const Cart = {
  items: readJSON(CART_KEY, []),

  save() {
    writeJSON(CART_KEY, this.items);
    document.dispatchEvent(new CustomEvent("cart:change"));
  },
  key(id, size, color) { return `${id}|${size}|${color}`; },

  add(id, size, color, qty = 1) {
    const k = this.key(id, size, color);
    const found = this.items.find(i => this.key(i.id, i.size, i.color) === k);
    if (found) found.qty += qty;
    else this.items.push({ id, size, color, qty });
    this.save();
  },
  setQty(k, qty) {
    const it = this.items.find(i => this.key(i.id, i.size, i.color) === k);
    if (!it) return;
    it.qty = Math.max(1, Math.min(10, qty));
    this.save();
  },
  remove(k) {
    this.items = this.items.filter(i => this.key(i.id, i.size, i.color) !== k);
    this.save();
  },
  clear() { this.items = []; this.save(); },

  count() { return this.items.reduce((s, i) => s + i.qty, 0); },

  subtotal() {
    return this.items.reduce((s, i) => {
      const p = getProduct(i.id);
      return p ? s + p.price * i.qty : s;
    }, 0);
  },
  shipping() {
    const sub = this.subtotal();
    if (sub === 0) return 0;
    return sub >= STORE.freeShippingFrom ? 0 : STORE.shippingFlat;
  },
  total() { return this.subtotal() + this.shipping(); },

  /** Mensaje de pedido listo para WhatsApp */
  orderText(extra = {}) {
    const lines = this.items.map(i => {
      const p = getProduct(i.id);
      return `• ${p.name} — Talla ${i.size} — Color ${i.color} — x${i.qty} — ${money(p.price * i.qty)}`;
    });
    const parts = [
      `Hola ${STORE.name}, quiero confirmar este pedido:`,
      "",
      ...lines,
      "",
      `Subtotal: ${money(this.subtotal())}`,
      `Envío: ${this.shipping() === 0 ? "Gratis" : money(this.shipping())}`,
      `Total: ${money(this.total())}`
    ];
    if (extra.name)  parts.push("", `Nombre: ${extra.name}`);
    if (extra.city)  parts.push(`Ciudad: ${extra.city}`);
    if (extra.addr)  parts.push(`Dirección: ${extra.addr}`);
    if (extra.notes) parts.push(`Notas: ${extra.notes}`);
    return parts.join("\n");
  }
};

const Favs = {
  ids: readJSON(FAV_KEY, []),
  has(id) { return this.ids.includes(id); },
  toggle(id) {
    this.has(id) ? this.ids = this.ids.filter(x => x !== id) : this.ids.push(id);
    writeJSON(FAV_KEY, this.ids);
    return this.has(id);
  }
};

/* ---------- Iconos ---------- */
const ICON = {
  cart: '<svg viewBox="0 0 24 24"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9-8.4A5 5 0 0 1 12 6a5 5 0 0 1 9 5.6C19 15.6 12 20 12 20z"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  wa: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.6 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.3-.1.6.1.3.6 1.2 1.4 1.9 1 .9 1.8 1.2 2.1 1.3.3.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l2.2 1c.3.2.4.2.5.4.1.1.1.6-.1 1.3z"/></svg>',
  truck: '<svg viewBox="0 0 24 24"><path d="M3 16V6h11v10M14 9h4l3 3v4h-2"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3z"/><path d="m9 12 2 2 4-4"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8"/><path d="M20 4v4h-4"/><path d="M20 12a8 8 0 0 1-13.7 5.6L4 16"/><path d="M4 20v-4h4"/></svg>',
  card: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>'
};

/* ---------- Componentes reutilizables ---------- */
function starsHTML(rating, reviews) {
  const full = "★".repeat(Math.round(rating));
  const rest = "☆".repeat(5 - Math.round(rating));
  return `<div class="stars"><span aria-hidden="true">${full}${rest}</span> <b>${rating.toFixed(1)}</b> <span>(${reviews})</span></div>`;
}

function productCardHTML(p) {
  const flags = [];
  if (p.badge === "sale" && p.compareAt) flags.push(`<span class="flag flag--sale">-${discount(p)}%</span>`);
  if (p.badge === "new") flags.push('<span class="flag flag--new">Nuevo</span>');
  if (p.stock <= 10) flags.push('<span class="flag">Últimas unidades</span>');

  return `
  <article class="card" data-id="${p.id}">
    <div class="card__media">
      <a href="producto.html?id=${p.id}" aria-label="${p.name}">
        <div class="ph ph--4x5" data-label="Imagen ${p.name}"></div>
      </a>
      <div class="card__flags">${flags.join("")}</div>
      <button class="icon-btn card__fav" data-fav="${p.id}" aria-pressed="${Favs.has(p.id)}" aria-label="Guardar ${p.name} en favoritos">${ICON.heart}</button>
      <div class="card__quick">
        <a class="btn btn--solid btn--block" href="producto.html?id=${p.id}">Ver producto</a>
      </div>
    </div>
    <span class="card__brand">${p.brand}</span>
    <h3 class="card__name"><a href="producto.html?id=${p.id}">${p.name}</a></h3>
    ${starsHTML(p.rating, p.reviews)}
    <div class="card__price">
      <span>${money(p.price)}</span>
      ${p.compareAt ? `<del>${money(p.compareAt)}</del><span class="off">-${discount(p)}%</span>` : ""}
    </div>
    <div class="card__swatches" aria-label="Colores disponibles">
      ${p.colors.map(c => `<span class="sw" style="background:${c.hex}" title="${c.name}"></span>`).join("")}
    </div>
  </article>`;
}

function renderProducts(container, list) {
  if (!container) return;
  container.innerHTML = list.length
    ? list.map(productCardHTML).join("")
    : `<div class="empty" style="grid-column:1/-1">
         <h3 class="h-md">No encontramos productos</h3>
         <p class="muted" style="margin-top:8px">Probá quitando algún filtro o escribinos y te ayudamos a buscar tu talla.</p>
         <a class="btn btn--wa" style="margin-top:16px" href="${waLink('Hola ' + STORE.name + ', busco un modelo que no veo en la web.')}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
       </div>`;
}

/* ---------- Cabecera: carrito, menú, favoritos ---------- */
function updateCartCount() {
  const n = Cart.count();
  $$("[data-cart-count]").forEach(el => {
    el.textContent = n;
    el.hidden = n === 0;
  });
}

function cartLineHTML(i) {
  const p = getProduct(i.id);
  if (!p) return "";
  const k = Cart.key(i.id, i.size, i.color);
  return `
  <div class="line" data-key="${k}">
    <div class="ph ph--1x1" data-label="Foto"></div>
    <div>
      <div class="line__name">${p.name}</div>
      <div class="line__meta">Talla ${i.size} · ${i.color} · x${i.qty}</div>
      <button class="line__rm" data-remove="${k}">Quitar</button>
    </div>
    <strong>${money(p.price * i.qty)}</strong>
  </div>`;
}

function renderCartDrawer() {
  const body = $("[data-drawer-body]");
  if (!body) return;
  body.innerHTML = Cart.items.length
    ? Cart.items.map(cartLineHTML).join("")
    : `<p class="muted" style="padding:32px 0;text-align:center">Tu carrito está vacío.<br>Explorá el catálogo y agregá tu par favorito.</p>`;

  const sub = $("[data-drawer-subtotal]");
  if (sub) sub.textContent = money(Cart.subtotal());
  const ship = $("[data-drawer-shipping]");
  if (ship) ship.textContent = Cart.shipping() === 0 ? "Gratis" : money(Cart.shipping());
  const tot = $("[data-drawer-total]");
  if (tot) tot.textContent = money(Cart.total());

  const wa = $("[data-drawer-wa]");
  if (wa) wa.href = waLink(Cart.orderText());

  $$("[data-drawer-checkout]").forEach(b => b.toggleAttribute("disabled", Cart.items.length === 0));
}

function openDrawer(sel, open) {
  const d = $(sel);
  if (!d) return;
  d.dataset.open = String(open);
  document.body.style.overflow = open ? "hidden" : "";
}

/* ---------- Página: inicio ---------- */
function initHome() {
  const featured = $("[data-featured]");
  if (featured) {
    const list = PRODUCTS.filter(p => p.badge === "new" || p.rating >= 4.7).slice(0, 8);
    renderProducts(featured, list);
  }
  const sale = $("[data-sale]");
  if (sale) renderProducts(sale, PRODUCTS.filter(p => p.compareAt).slice(0, 4));
}

/* ---------- Página: catálogo ---------- */
function initCatalog() {
  const grid = $("[data-catalog-grid]");
  if (!grid) return;

  const state = {
    q: param("q") || "",
    cats: new Set(param("cat") ? [param("cat")] : []),
    types: new Set(param("tipo") ? [param("tipo")] : []),
    sizes: new Set(),
    max: Infinity,
    onlySale: param("oferta") === "1",
    sort: "relevancia"
  };

  const search = $("[data-search-input]");
  if (search) search.value = state.q;

  function match(p) {
    if (state.q) {
      const hay = `${p.name} ${p.brand} ${p.type} ${p.category}`.toLowerCase();
      if (!hay.includes(state.q.toLowerCase())) return false;
    }
    if (state.cats.size && !state.cats.has(p.category)) return false;
    if (state.types.size && !state.types.has(p.type)) return false;
    if (state.sizes.size && !p.sizes.some(s => state.sizes.has(String(s)))) return false;
    if (p.price > state.max) return false;
    if (state.onlySale && !p.compareAt) return false;
    return true;
  }

  function sortList(list) {
    const l = [...list];
    if (state.sort === "precio-asc")  l.sort((a, b) => a.price - b.price);
    if (state.sort === "precio-desc") l.sort((a, b) => b.price - a.price);
    if (state.sort === "rating")      l.sort((a, b) => b.rating - a.rating);
    if (state.sort === "descuento")   l.sort((a, b) => discount(b) - discount(a));
    return l;
  }

  function activeChips() {
    const chips = [];
    if (state.q) chips.push(["q", `"${state.q}"`]);
    state.cats.forEach(c => chips.push(["cat:" + c, CATEGORIES.find(x => x.slug === c)?.name || c]));
    state.types.forEach(t => chips.push(["tipo:" + t, TYPES.find(x => x.slug === t)?.name || t]));
    state.sizes.forEach(s => chips.push(["talla:" + s, "Talla " + s]));
    if (state.onlySale) chips.push(["oferta", "En oferta"]);
    if (state.max !== Infinity) chips.push(["max", "Hasta " + money(state.max)]);
    return chips;
  }

  function render() {
    const list = sortList(PRODUCTS.filter(match));
    renderProducts(grid, list);

    const count = $("[data-result-count]");
    if (count) count.textContent = `${list.length} producto${list.length === 1 ? "" : "s"}`;

    const chipBox = $("[data-chips]");
    if (chipBox) {
      const chips = activeChips();
      chipBox.innerHTML = chips.length
        ? chips.map(([k, label]) => `<button class="chip" data-clear="${k}">${label} ✕</button>`).join("") +
          '<button class="chip" data-clear="all">Limpiar todo</button>'
        : "";
    }
  }

  /* Filtros de categoría y tipo */
  const catBox = $("[data-filter-cats]");
  if (catBox) {
    catBox.innerHTML = CATEGORIES.map(c => `
      <label class="check"><input type="checkbox" value="${c.slug}" ${state.cats.has(c.slug) ? "checked" : ""}> ${c.name}</label>`).join("");
  }
  const typeBox = $("[data-filter-types]");
  if (typeBox) {
    typeBox.innerHTML = TYPES.map(t => `
      <label class="check"><input type="checkbox" value="${t.slug}" ${state.types.has(t.slug) ? "checked" : ""}> ${t.name}</label>`).join("");
  }
  const sizeBox = $("[data-filter-sizes]");
  if (sizeBox) {
    const all = [...new Set(PRODUCTS.flatMap(p => p.sizes))].sort((a, b) => a - b);
    sizeBox.innerHTML = all.map(s =>
      `<button type="button" class="size-chip" data-size="${s}" aria-pressed="false">${s}</button>`).join("");
  }

  catBox?.addEventListener("change", e => {
    const v = e.target.value;
    e.target.checked ? state.cats.add(v) : state.cats.delete(v);
    render();
  });
  typeBox?.addEventListener("change", e => {
    const v = e.target.value;
    e.target.checked ? state.types.add(v) : state.types.delete(v);
    render();
  });
  sizeBox?.addEventListener("click", e => {
    const b = e.target.closest("[data-size]");
    if (!b) return;
    const v = b.dataset.size;
    const on = b.getAttribute("aria-pressed") === "true";
    b.setAttribute("aria-pressed", String(!on));
    on ? state.sizes.delete(v) : state.sizes.add(v);
    render();
  });

  $("[data-filter-sale]")?.addEventListener("change", e => {
    state.onlySale = e.target.checked; render();
  });
  $("[data-filter-price]")?.addEventListener("change", e => {
    state.max = e.target.value ? Number(e.target.value) : Infinity; render();
  });
  $("[data-sort]")?.addEventListener("change", e => { state.sort = e.target.value; render(); });

  $("[data-search-form]")?.addEventListener("submit", e => {
    e.preventDefault();
    state.q = search.value.trim();
    render();
  });

  $("[data-chips]")?.addEventListener("click", e => {
    const b = e.target.closest("[data-clear]");
    if (!b) return;
    const k = b.dataset.clear;
    if (k === "all") {
      state.q = ""; state.cats.clear(); state.types.clear(); state.sizes.clear();
      state.onlySale = false; state.max = Infinity;
      if (search) search.value = "";
      $$('[data-filter-cats] input, [data-filter-types] input').forEach(i => (i.checked = false));
      $$("[data-size]").forEach(i => i.setAttribute("aria-pressed", "false"));
      const saleBox = $("[data-filter-sale]"); if (saleBox) saleBox.checked = false;
      const priceBox = $("[data-filter-price]"); if (priceBox) priceBox.value = "";
    } else if (k === "q") { state.q = ""; if (search) search.value = ""; }
    else if (k === "oferta") { state.onlySale = false; const s = $("[data-filter-sale]"); if (s) s.checked = false; }
    else if (k === "max") { state.max = Infinity; const s = $("[data-filter-price]"); if (s) s.value = ""; }
    else {
      const [kind, val] = k.split(":");
      if (kind === "cat")   { state.cats.delete(val);  $$(`[data-filter-cats] input[value="${val}"]`).forEach(i => i.checked = false); }
      if (kind === "tipo")  { state.types.delete(val); $$(`[data-filter-types] input[value="${val}"]`).forEach(i => i.checked = false); }
      if (kind === "talla") { state.sizes.delete(val); $$(`[data-size="${val}"]`).forEach(i => i.setAttribute("aria-pressed", "false")); }
    }
    render();
  });

  /* Filtros en móvil */
  $("[data-open-filters]")?.addEventListener("click", () => {
    $(".filters").dataset.open = "true";
    document.body.style.overflow = "hidden";
  });
  $("[data-close-filters]")?.addEventListener("click", () => {
    $(".filters").dataset.open = "false";
    document.body.style.overflow = "";
  });

  render();
}

/* ---------- Página: producto ---------- */
function initPDP() {
  const root = $("[data-pdp]");
  if (!root) return;

  const p = getProduct(param("id")) || PRODUCTS[0];
  document.title = `${p.name} · ${STORE.name}`;

  let color = p.colors[0].name;
  let size = null;
  let qty = 1;

  root.innerHTML = `
    <div class="gallery">
      <div class="ph ph--16x9" data-label="Foto principal — ${p.name}"></div>
      <div class="ph ph--1x1" data-label="Detalle lateral"></div>
      <div class="ph ph--1x1" data-label="Detalle suela"></div>
      <div class="ph ph--1x1" data-label="Vista superior"></div>
      <div class="ph ph--1x1" data-label="En uso"></div>
    </div>

    <div class="pdp__info">
      <div>
        <span class="card__brand">${p.brand}</span>
        <h1 class="h-lg" style="margin:6px 0 10px">${p.name}</h1>
        ${starsHTML(p.rating, p.reviews)}
      </div>

      <div class="price-row">
        <span class="now">${money(p.price)}</span>
        ${p.compareAt ? `<del>${money(p.compareAt)}</del><span class="flag flag--sale">-${discount(p)}%</span>` : ""}
      </div>
      <p class="muted" style="font-size:13px">Hasta 4 cuotas sin interés · Envío gratis desde ${money(STORE.freeShippingFrom)}</p>

      <div>
        <div class="field-label"><span>Color</span><span class="muted" data-color-name>${color}</span></div>
        <div class="colors">
          ${p.colors.map((c, i) => `
            <button class="color-dot" data-color="${c.name}" style="background:${c.hex}"
              aria-pressed="${i === 0}" aria-label="Color ${c.name}"></button>`).join("")}
        </div>
      </div>

      <div>
        <div class="field-label"><span>Talla</span><a href="#guia-tallas" class="muted" style="text-decoration:underline">Guía de tallas</a></div>
        <div class="sizes">
          ${p.sizes.map(s => `
            <button class="size-chip" data-size="${s}" aria-pressed="false" ${p.sold.includes(s) ? "disabled" : ""}>${s}</button>`).join("")}
        </div>
        <p class="muted" style="font-size:12px;margin-top:8px" data-size-msg>Elegí tu talla para continuar.</p>
      </div>

      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <div class="qty">
          <button data-qty="-1" aria-label="Restar">−</button>
          <output data-qty-value>1</output>
          <button data-qty="1" aria-label="Sumar">+</button>
        </div>
        <span class="muted" style="font-size:13px">${p.stock} unidades disponibles</span>
      </div>

      <button class="btn btn--solid btn--lg btn--block" data-add>Agregar al carrito</button>
      <a class="btn btn--wa btn--lg btn--block" data-pdp-wa target="_blank" rel="noopener">${ICON.wa} Comprar por WhatsApp</a>

      <ul class="trust">
        <li>${ICON.truck}<span>Envío a toda Colombia en 2 a 5 días hábiles.</span></li>
        <li>${ICON.refresh}<span>Cambio de talla dentro de los 30 días.</span></li>
        <li>${ICON.shield}<span>100% original con garantía de 6 meses.</span></li>
        <li>${ICON.card}<span>Pago contra entrega, transferencia o tarjeta.</span></li>
      </ul>

      <div class="accordion" style="margin-top:10px">
        <details open>
          <summary>Descripción</summary>
          <div class="body">${p.desc}</div>
        </details>
        <details>
          <summary>Ficha técnica</summary>
          <div class="body">
            <ul>${p.specs.map(([k, v]) => `<li style="display:flex;justify-content:space-between;gap:16px;padding:6px 0;border-bottom:1px solid var(--line)"><b>${k}</b><span>${v}</span></li>`).join("")}</ul>
          </div>
        </details>
        <details id="guia-tallas">
          <summary>Guía de tallas y cuidado</summary>
          <div class="body">
            <p>Medí tu pie descalzo desde el talón hasta el dedo más largo, al final del día. Sumá 0,5 cm de holgura y buscá esa medida en la tabla:</p>
            <ul style="margin-top:10px">
              <li style="padding:4px 0">Talla 36 → 23,0 cm</li>
              <li style="padding:4px 0">Talla 38 → 24,3 cm</li>
              <li style="padding:4px 0">Talla 40 → 25,5 cm</li>
              <li style="padding:4px 0">Talla 42 → 26,8 cm</li>
              <li style="padding:4px 0">Talla 44 → 28,0 cm</li>
            </ul>
            <p style="margin-top:12px"><b>Cuidado:</b> ${p.care}</p>
          </div>
        </details>
        <details>
          <summary>Envíos y devoluciones</summary>
          <div class="body">
            Despachamos en 24 horas hábiles. Envío gratis en compras superiores a ${money(STORE.freeShippingFrom)};
            por debajo de ese monto el costo es de ${money(STORE.shippingFlat)}. Tenés 30 días para cambiar la talla
            siempre que el producto esté sin uso y con su caja original.
          </div>
        </details>
      </div>
    </div>`;

  const waBtn = $("[data-pdp-wa]", root);
  const updateWa = () => {
    waBtn.href = waLink(
      `Hola ${STORE.name}, me interesa el ${p.name} (${p.brand}).\nColor: ${color}\nTalla: ${size || "por definir"}\nCantidad: ${qty}\nPrecio: ${money(p.price)}`
    );
  };
  updateWa();

  root.addEventListener("click", e => {
    const c = e.target.closest("[data-color]");
    if (c) {
      color = c.dataset.color;
      $$("[data-color]", root).forEach(b => b.setAttribute("aria-pressed", String(b === c)));
      $("[data-color-name]", root).textContent = color;
      updateWa();
    }
    const s = e.target.closest("[data-size]");
    if (s) {
      size = s.dataset.size;
      $$("[data-size]", root).forEach(b => b.setAttribute("aria-pressed", String(b === s)));
      $("[data-size-msg]", root).textContent = `Talla ${size} seleccionada.`;
      updateWa();
    }
    const q = e.target.closest("[data-qty]");
    if (q) {
      qty = Math.max(1, Math.min(10, qty + Number(q.dataset.qty)));
      $("[data-qty-value]", root).textContent = qty;
      updateWa();
    }
    if (e.target.closest("[data-add]")) {
      if (!size) {
        $("[data-size-msg]", root).textContent = "Seleccioná una talla antes de continuar.";
        $("[data-size-msg]", root).style.color = "var(--sale)";
        return;
      }
      Cart.add(p.id, size, color, qty);
      toast("Agregado al carrito");
      openDrawer("[data-cart-drawer]", true);
    }
  });

  /* Relacionados */
  const rel = $("[data-related]");
  if (rel) {
    renderProducts(rel, PRODUCTS.filter(x => x.id !== p.id && (x.type === p.type || x.category === p.category)).slice(0, 4));
  }
}

/* ---------- Página: carrito ---------- */
function initCartPage() {
  const wrap = $("[data-cart-page]");
  if (!wrap) return;

  function render() {
    wrap.innerHTML = Cart.items.length ? Cart.items.map(i => {
      const p = getProduct(i.id);
      const k = Cart.key(i.id, i.size, i.color);
      return `
      <div class="cart-line" data-key="${k}">
        <div class="ph ph--1x1" data-label="Foto"></div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;justify-content:space-between;gap:16px">
            <div>
              <span class="card__brand">${p.brand}</span>
              <div class="line__name" style="font-size:16px">${p.name}</div>
              <div class="line__meta">Talla ${i.size} · Color ${i.color}</div>
            </div>
            <strong>${money(p.price * i.qty)}</strong>
          </div>
          <div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap">
            <div class="qty">
              <button data-step="-1" data-k="${k}" aria-label="Restar">−</button>
              <output>${i.qty}</output>
              <button data-step="1" data-k="${k}" aria-label="Sumar">+</button>
            </div>
            <button class="line__rm" data-remove="${k}">Eliminar</button>
          </div>
        </div>
      </div>`;
    }).join("") : `
      <div class="empty">
        <h2 class="h-md">Tu carrito está vacío</h2>
        <p class="muted" style="margin-top:8px">Todavía no agregaste ningún par.</p>
        <a class="btn btn--solid" style="margin-top:16px" href="catalogo.html">Ir al catálogo</a>
      </div>`;

    $("[data-page-subtotal]") && ($("[data-page-subtotal]").textContent = money(Cart.subtotal()));
    $("[data-page-shipping]") && ($("[data-page-shipping]").textContent = Cart.shipping() === 0 ? "Gratis" : money(Cart.shipping()));
    $("[data-page-total]")    && ($("[data-page-total]").textContent = money(Cart.total()));

    const falta = STORE.freeShippingFrom - Cart.subtotal();
    const msg = $("[data-free-shipping]");
    if (msg) {
      msg.textContent = Cart.items.length === 0 ? ""
        : falta > 0 ? `Te faltan ${money(falta)} para el envío gratis.`
        : "¡Tenés envío gratis en este pedido!";
    }
    $$("[data-checkout]").forEach(b => b.toggleAttribute("disabled", Cart.items.length === 0));
  }

  wrap.addEventListener("click", e => {
    const step = e.target.closest("[data-step]");
    if (step) {
      const it = Cart.items.find(i => Cart.key(i.id, i.size, i.color) === step.dataset.k);
      if (it) Cart.setQty(step.dataset.k, it.qty + Number(step.dataset.step));
    }
  });

  /* Checkout: arma el pedido y lo envía por WhatsApp */
  $("[data-checkout-form]")?.addEventListener("submit", e => {
    e.preventDefault();
    if (!Cart.items.length) return;
    const f = e.target;
    const data = {
      name:  f.nombre.value.trim(),
      city:  f.ciudad.value.trim(),
      addr:  f.direccion.value.trim(),
      notes: f.notas.value.trim()
    };
    window.open(waLink(Cart.orderText(data)), "_blank", "noopener");
    toast("Abrimos WhatsApp para confirmar tu pedido");
  });

  $("[data-checkout-mail]")?.addEventListener("click", e => {
    e.preventDefault();
    location.href = mailLink(`Nuevo pedido en ${STORE.name}`, Cart.orderText());
  });

  document.addEventListener("cart:change", render);
  render();
}

/* ---------- Formularios de contacto / newsletter ---------- */
function initForms() {
  $("[data-contact-form]")?.addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target;
    const text =
      `Hola ${STORE.name}, les escribo desde la web.\n\n` +
      `Nombre: ${f.nombre.value}\n` +
      `Correo: ${f.correo.value}\n` +
      `Teléfono: ${f.telefono.value || "—"}\n` +
      `Asunto: ${f.asunto.value}\n\n${f.mensaje.value}`;
    const via = f.canal.value;
    if (via === "email") location.href = mailLink(`${f.asunto.value} — ${f.nombre.value}`, text);
    else window.open(waLink(text), "_blank", "noopener");
    toast("Gracias, ya te estamos respondiendo");
    f.reset();
  });

  $$("[data-newsletter]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const mail = form.querySelector("input[type=email]").value;
      window.open(waLink(`Hola ${STORE.name}, quiero recibir novedades y descuentos. Mi correo es ${mail}.`), "_blank", "noopener");
      toast("¡Listo! Te sumamos a la lista");
      form.reset();
    });
  });
}

/* ---------- Datos de contacto en el markup ---------- */
function hydrateContact() {
  $$("[data-wa]").forEach(a => {
    const msg = a.dataset.wa || `Hola ${STORE.name}, quiero información sobre sus zapatos.`;
    a.href = waLink(msg);
    a.target = "_blank";
    a.rel = "noopener";
  });
  $$("[data-mail]").forEach(a => { a.href = `mailto:${STORE.email}`; });
  $$("[data-store-email]").forEach(el => (el.textContent = STORE.email));
  $$("[data-store-phone]").forEach(el => (el.textContent = STORE.phone));
  $$("[data-store-hours]").forEach(el => (el.textContent = STORE.hours));
  $$("[data-store-city]").forEach(el => (el.textContent = STORE.city));
  $$("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
  $$("[data-free-from]").forEach(el => (el.textContent = money(STORE.freeShippingFrom)));
}

/* ---------- Eventos globales ---------- */
function initGlobal() {
  document.addEventListener("click", e => {
    if (e.target.closest("[data-open-cart]"))  { openDrawer("[data-cart-drawer]", true); }
    if (e.target.closest("[data-close-cart]") || e.target.closest("[data-cart-drawer] .drawer__scrim")) {
      openDrawer("[data-cart-drawer]", false);
    }
    if (e.target.closest("[data-open-menu]"))  { openDrawer("[data-menu]", true); }
    if (e.target.closest("[data-close-menu]") || e.target.closest("[data-menu] .drawer-nav__scrim")) {
      openDrawer("[data-menu]", false);
    }

    const rm = e.target.closest("[data-remove]");
    if (rm) { Cart.remove(rm.dataset.remove); toast("Producto eliminado"); }

    const fav = e.target.closest("[data-fav]");
    if (fav) {
      const on = Favs.toggle(fav.dataset.fav);
      fav.setAttribute("aria-pressed", String(on));
      toast(on ? "Guardado en favoritos" : "Quitado de favoritos");
    }

    if (e.target.closest("[data-clear-cart]")) { Cart.clear(); toast("Carrito vacío"); }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      openDrawer("[data-cart-drawer]", false);
      openDrawer("[data-menu]", false);
    }
  });

  document.addEventListener("cart:change", () => { updateCartCount(); renderCartDrawer(); });
  updateCartCount();
  renderCartDrawer();
}

/* ---------- Movimiento: revelado al hacer scroll y header ---------- */
function initMotion() {
  const header = $(".header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const targets = $$(".reveal");
  if (!targets.length) return;

  const showAll = () => targets.forEach(el => el.classList.add("is-in"));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Sin observer o con movimiento reducido: mostrar todo tal cual.
  if (reduce || !("IntersectionObserver" in window)) return;

  // Recién acá ocultamos: si algo falla antes, el contenido ya se veía.
  document.documentElement.classList.add("js-motion");

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("is-in");
      obs.unobserve(en.target);
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0 });
  targets.forEach(el => io.observe(el));

  // Red de seguridad: pase lo que pase, a los 2 s todo queda visible.
  setTimeout(showAll, 2000);
  window.addEventListener("load", () => setTimeout(showAll, 600));
}

/* ---------- Arranque ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initMotion();
  hydrateContact();
  initGlobal();
  initHome();
  initCatalog();
  initPDP();
  initCartPage();
  initForms();
});
