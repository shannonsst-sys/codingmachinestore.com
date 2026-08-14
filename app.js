const products = [
  {
    id: 'dy-8',
    model: 'DY-8',
    type: 'Manual hot ribbon coder',
    category: 'Hot ribbon coding machines',
    filter: 'manual',
    title: 'DY-8 Hand-Operated Hot Ribbon Coding Machine',
    price: 40,
    badge: 'Entry point',
    image: 'public/assets/products/dy-8/hero.png',
    images: [
      'public/assets/products/dy-8/hero.png',
      'public/assets/products/dy-8/side-1.jpeg',
      'public/assets/products/dy-8/side-2.jpeg',
      'public/assets/products/dy-8/side-3.jpeg',
      'public/assets/products/dy-8/detail-1.png',
      'public/assets/products/dy-8/detail-2.png',
    ],
    description: 'A compact hot ribbon coder for flexible packaging, including plastic film bags, laminated pouches and aluminium-plastic composite packaging.',
    longDescription: 'The DY-8 uses hot-stamping ribbon instead of liquid ink to create clean, practical marks on soft packaging. Its hand-operated format is easy to place near a packing station and is particularly suited to food, pharmaceutical and hygiene-sensitive applications.',
    specs: [
      ['Coding speed', '1–90 prints/min'],
      ['Power supply', '220 V / 50 Hz'],
      ['Power consumption', '60 W'],
      ['Ribbon width', '25–35 mm'],
      ['Net weight', '2.6 kg'],
      ['Dimensions', '286 × 263 × 196 mm'],
    ],
    applications: 'Food packaging · Pharmaceutical packaging · Plastic films · Laminated pouches',
  },
  {
    id: 'hp-241b',
    model: 'HP-241B',
    type: 'Electric hot ribbon coder',
    category: 'Hot ribbon coding machines',
    filter: 'electric',
    title: 'HP-241B Electric Hot Ribbon Coding Machine',
    price: 160,
    badge: 'Best value',
    image: 'public/assets/products/hp-241b/hero.png',
    images: [
      'public/assets/products/hp-241b/hero.png',
      'public/assets/products/hp-241b/side-1.png',
      'public/assets/products/hp-241b/side-2.png',
      'public/assets/products/hp-241b/side-3.png',
      'public/assets/products/hp-241b/detail-1.png',
      'public/assets/products/hp-241b/detail-2.png',
    ],
    description: 'An electric multi-row coder with movable copper type characters for foil, film, kraft paper, paper cards and similar materials.',
    longDescription: 'The HP-241B is designed for repeatable electric hot ribbon coding. Movable copper characters are easy to install and replace, while the special character-changing structure supports different work areas and packaging formats.',
    specs: [
      ['Printing rows', '1–3 rows'],
      ['Printing speed', '20–120 prints/min'],
      ['Power supply', '220 V / 150 W'],
      ['Warm-up time', '5–10 min'],
      ['Ribbon width', '25–30 mm'],
      ['Net weight', 'Approx. 7.0 kg'],
      ['Dimensions', '25 × 22 × 33 cm'],
      ['Character size', '2 × 4 × 15 mm'],
    ],
    applications: 'Aluminium foil · Plastic film · Kraft paper · Paper cards',
  },
];

const state = {
  cart: JSON.parse(localStorage.getItem('cms-cart') || '[]'),
  filter: 'all',
  activeProduct: null,
  modalQuantity: 1,
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const money = (value) => `$${Number(value).toFixed(2)}`;
const getProduct = (id) => products.find((product) => product.id === id);

function persistCart() {
  localStorage.setItem('cms-cart', JSON.stringify(state.cart));
}

function cartQuantity() {
  return state.cart.reduce((sum, line) => sum + line.quantity, 0);
}

function cartTotal() {
  return state.cart.reduce((sum, line) => {
    const product = getProduct(line.id);
    return sum + (product ? product.price * line.quantity : 0);
  }, 0);
}

function renderProductGrid() {
  const grid = $('[data-product-grid]');
  const visible = products.filter((product) => state.filter === 'all' || product.filter === state.filter);
  grid.innerHTML = visible.map((product) => `
    <article class="product-card" data-product-card="${product.id}">
      <a class="product-card-image" href="products/${product.id}.html" aria-label="View ${product.title}">
        <img src="${product.image}" alt="${product.title}" loading="lazy" />
        <span class="product-card-badge">${product.badge}</span>
      </a>
      <div class="product-card-body">
        <p class="eyebrow"><span>${product.model}</span> · ${product.type}</p>
        <h3>${product.title}</h3>
        <p class="product-card-description">${product.description}</p>
        <div class="product-card-footer">
          <div><span class="price-label">Clear price</span><span class="price-value">${money(product.price)}<small>/ unit</small></span></div>
          <div class="card-actions"><a class="mini-button" href="products/${product.id}.html">View product <span>↗</span></a><button class="mini-button add" type="button" data-add-product="${product.id}">Add to cart <span>＋</span></button></div>
        </div>
      </div>
    </article>
  `).join('');
}

function renderCart() {
  const totalQuantity = cartQuantity();
  const total = cartTotal();
  $$('[data-cart-count]').forEach((element) => { element.textContent = totalQuantity; });
  $('[data-cart-total]').textContent = money(total);
  const itemList = $('[data-cart-items]');
  const empty = $('[data-cart-empty]');
  if (!state.cart.length) {
    itemList.innerHTML = '';
    empty.classList.add('active');
    return;
  }
  empty.classList.remove('active');
  itemList.innerHTML = state.cart.map((line) => {
    const product = getProduct(line.id);
    if (!product) return '';
    return `<div class="cart-line"><img src="${product.image}" alt="${product.title}" /><div><h3>${product.model}</h3><small>${product.type}</small><div class="line-bottom"><div class="line-quantity"><button type="button" data-line-minus="${product.id}" aria-label="Decrease quantity">−</button><span>${line.quantity}</span><button type="button" data-line-plus="${product.id}" aria-label="Increase quantity">＋</button></div><button type="button" class="remove-line" data-line-remove="${product.id}">Remove</button></div></div><strong class="line-price">${money(product.price * line.quantity)}</strong></div>`;
  }).join('');
}

function addToCart(id, quantity = 1) {
  const line = state.cart.find((item) => item.id === id);
  if (line) line.quantity += quantity;
  else state.cart.push({ id, quantity });
  persistCart();
  renderCart();
  showToast(`${getProduct(id).model} added to your cart`);
}

function updateLine(id, delta) {
  const line = state.cart.find((item) => item.id === id);
  if (!line) return;
  line.quantity += delta;
  if (line.quantity <= 0) state.cart = state.cart.filter((item) => item.id !== id);
  persistCart();
  renderCart();
}

function openCart() {
  $('[data-cart-drawer]').classList.add('active');
  $('[data-cart-drawer]').setAttribute('aria-hidden', 'false');
  $('[data-overlay]').classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeCart() {
  $('[data-cart-drawer]').classList.remove('active');
  $('[data-cart-drawer]').setAttribute('aria-hidden', 'true');
  if (!$('[data-product-modal]').classList.contains('active')) $('[data-overlay]').classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function openProduct(id) {
  const product = getProduct(id);
  if (!product) return;
  state.activeProduct = id;
  state.modalQuantity = 1;
  $('[data-modal-title]').textContent = product.title;
  $('[data-modal-category]').textContent = `${product.model} · ${product.category}`;
  $('[data-modal-subtitle]').textContent = `${product.type} · ${product.applications}`;
  $('[data-modal-price]').textContent = money(product.price);
  $('[data-modal-description]').textContent = product.longDescription;
  $('[data-modal-quantity]').textContent = state.modalQuantity;
  $('[data-modal-specs]').innerHTML = product.specs.map(([label, value]) => `<div class="spec-item"><span>${label}</span><strong>${value}</strong></div>`).join('');
  const thumbs = $('[data-modal-thumbs]');
  thumbs.innerHTML = product.images.map((image, index) => `<button type="button" class="${index === 0 ? 'active' : ''}" data-modal-thumb="${image}" aria-label="View image ${index + 1}"><img src="${image}" alt="${product.title} view ${index + 1}" /></button>`).join('');
  $('[data-modal-image]').src = product.images[0];
  $('[data-modal-image]').alt = product.title;
  $('[data-product-modal]').classList.add('active');
  $('[data-product-modal]').setAttribute('aria-hidden', 'false');
  $('[data-overlay]').classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeProduct() {
  $('[data-product-modal]').classList.remove('active');
  $('[data-product-modal]').setAttribute('aria-hidden', 'true');
  if (!$('[data-cart-drawer]').classList.contains('active')) $('[data-overlay]').classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function populateQuote() {
  const productsField = $('[data-quote-products]');
  const totalField = $('[data-quote-total]');
  const selectedProducts = state.cart.map((line) => `${getProduct(line.id)?.model || line.id} × ${line.quantity}`).join(', ') || 'General product enquiry';
  productsField.value = selectedProducts;
  totalField.value = money(cartTotal());
  const summary = $('[data-quote-summary]');
  if (summary) {
    summary.innerHTML = state.cart.length
      ? `<span>Cart attached to this request</span><strong>${selectedProducts}</strong><b>Estimated product subtotal: ${money(cartTotal())}</b>`
      : '<span>No products selected yet</span><strong>Tell us what you need and we will recommend a setup.</strong>';
  }
}

function scrollToQuote() {
  populateQuote();
  closeCart();
  closeProduct();
  setTimeout(() => $('#quote').scrollIntoView({ behavior: 'smooth' }), 80);
}

let toastTimer;
function showToast(message) {
  const toast = $('[data-toast]');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
}

document.addEventListener('click', (event) => {
  const addButton = event.target.closest('[data-add-product]');
  if (addButton) addToCart(addButton.dataset.addProduct);

  const openButton = event.target.closest('[data-open-product]');
  if (openButton) openProduct(openButton.dataset.openProduct);

  if (event.target.closest('[data-open-cart]')) openCart();
  if (event.target.closest('[data-close-cart]')) closeCart();
  if (event.target.closest('[data-close-product]')) closeProduct();
  if (event.target.closest('[data-scroll-top]')) window.scrollTo({ top: 0, behavior: 'smooth' });
  if (event.target.matches('[data-overlay]')) { closeCart(); closeProduct(); }

  const linePlus = event.target.closest('[data-line-plus]');
  if (linePlus) updateLine(linePlus.dataset.linePlus, 1);
  const lineMinus = event.target.closest('[data-line-minus]');
  if (lineMinus) updateLine(lineMinus.dataset.lineMinus, -1);
  const lineRemove = event.target.closest('[data-line-remove]');
  if (lineRemove) { state.cart = state.cart.filter((item) => item.id !== lineRemove.dataset.lineRemove); persistCart(); renderCart(); }

  const thumb = event.target.closest('[data-modal-thumb]');
  if (thumb) {
    $('[data-modal-image]').src = thumb.dataset.modalThumb;
    $$('[data-modal-thumb]').forEach((item) => item.classList.remove('active'));
    thumb.classList.add('active');
  }

  const category = event.target.closest('[data-category]');
  if (category) {
    const target = category.dataset.category;
    if (target === 'ribbon') { state.filter = 'all'; renderProductGrid(); $('#shop').scrollIntoView({ behavior: 'smooth' }); }
    else showToast('This category is being prepared — ask us for compatible options.');
  }

  const filter = event.target.closest('[data-filter]');
  if (filter) { state.filter = filter.dataset.filter; $$('[data-filter]').forEach((item) => item.classList.toggle('active', item === filter)); renderProductGrid(); }

  if (event.target.closest('[data-cart-quote]')) scrollToQuote();

  const menu = event.target.closest('.menu-button');
  if (menu) {
    const mobileNav = $('.mobile-nav');
    const active = mobileNav.classList.toggle('active');
    menu.setAttribute('aria-expanded', active ? 'true' : 'false');
    mobileNav.setAttribute('aria-hidden', active ? 'false' : 'true');
  }
});

$$('.mobile-nav a').forEach((link) => link.addEventListener('click', () => { $('.mobile-nav').classList.remove('active'); $('.menu-button').setAttribute('aria-expanded', 'false'); }));

$('[data-modal-minus]').addEventListener('click', () => { state.modalQuantity = Math.max(1, state.modalQuantity - 1); $('[data-modal-quantity]').textContent = state.modalQuantity; });
$('[data-modal-plus]').addEventListener('click', () => { state.modalQuantity += 1; $('[data-modal-quantity]').textContent = state.modalQuantity; });
$('[data-modal-add]').addEventListener('click', () => { if (state.activeProduct) { addToCart(state.activeProduct, state.modalQuantity); closeProduct(); openCart(); } });

const quoteForm = $('[data-quote-form]');
quoteForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submit = $('.button-submit', quoteForm);
  const success = $('[data-form-success]');
  const error = $('[data-form-error]');
  success.hidden = true; error.hidden = true; submit.disabled = true; submit.innerHTML = 'Sending request <span>…</span>';
  populateQuote();
  try {
    const response = await fetch(quoteForm.action, { method: 'POST', body: new FormData(quoteForm), headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Formspree request failed');
    quoteForm.reset();
    success.hidden = false;
    showToast('Quote request sent');
  } catch (errorValue) {
    console.error(errorValue);
    error.hidden = false;
  } finally {
    submit.disabled = false; submit.innerHTML = 'Send quote request <span>↗</span>';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { closeCart(); closeProduct(); }
});

renderProductGrid();
renderCart();
populateQuote();
