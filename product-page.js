const productPageData = {
  'dy-8': {
    model: 'DY-8', type: 'Manual hot ribbon coder', title: 'DY-8 Hand-Operated Hot Ribbon Coding Machine', price: 40,
    imageRoot: '../public/assets/products/dy-8/', detailCount: 9,
    images: ['hero.png', 'side-1.jpeg', 'side-2.jpeg', 'side-3.jpeg', 'detail-1.png', 'detail-2.png'],
    description: 'A compact hot ribbon coder for flexible packaging, including plastic film bags, laminated pouches and aluminium-plastic composite packaging.',
    longDescription: 'The DY-8 uses hot-stamping ribbon instead of liquid ink to create clean, practical marks on soft packaging. Its hand-operated format is easy to place near a packing station and is particularly suited to food, pharmaceutical and hygiene-sensitive applications.',
    applications: 'Food packaging · Pharmaceutical packaging · Plastic films · Laminated pouches',
    specs: [['Coding speed', '1–90 prints/min'], ['Power supply', '220 V / 50 Hz'], ['Power consumption', '60 W'], ['Ribbon width', '25–35 mm'], ['Net weight', '2.6 kg'], ['Dimensions', '286 × 263 × 196 mm']],
    detailStories: [
      ['A compact coding workflow', 'The DY-8 keeps the coder, ribbon path and character head together in a small footprint that can sit beside a packing station.', 'Compact footprint · Manual operation'],
      ['Every adjustment in view', 'Feed roller, tension shaft, pressure roller and temperature control work together to keep the ribbon moving cleanly through the print head.', 'Ribbon feed · Tension control'],
      ['Install the ribbon the right way', 'For a clean transfer, the glossy side of the ribbon faces down and the matte side faces up. The visual guide makes setup easier for a new operator.', 'Glossy side down · Matte side up'],
      ['Made for flexible packaging', 'Hot ribbon coding is a practical fit for plastic film bags, laminated pouches, foil and other soft packaging where a crisp date or batch mark matters.', 'Food · Pharmaceutical · Pouches'],
      ['Clear marks in more than one color', 'Use standard black ribbon for everyday coding or ask us about other ribbon colors for a clearer contrast on your material.', 'Black · Gold · Red · Blue'],
      ['Wide ribbon capability', 'The DY-8 supports 25–35 mm ribbon widths, giving you room to match the print area and character arrangement to the pack.', '25–35 mm ribbon · Up to 35 mm'],
    ],
  },
  'hp-241b': {
    model: 'HP-241B', type: 'Electric hot ribbon coder', title: 'HP-241B Electric Hot Ribbon Coding Machine', price: 160,
    imageRoot: '../public/assets/products/hp-241b/', detailCount: 12,
    images: ['hero.png', 'side-1.png', 'side-2.png', 'side-3.png', 'detail-1.png', 'detail-2.png'],
    description: 'An electric multi-row coder with movable copper type characters for foil, film, kraft paper, paper cards and similar materials.',
    longDescription: 'The HP-241B is designed for repeatable electric hot ribbon coding. Movable copper characters are easy to install and replace, while the special character-changing structure supports different work areas and packaging formats.',
    applications: 'Aluminium foil · Plastic film · Kraft paper · Paper cards',
    specs: [['Printing rows', '1–3 rows'], ['Printing speed', '20–120 prints/min'], ['Power supply', '220 V / 150 W'], ['Warm-up time', '5–10 min'], ['Ribbon width', '25–30 mm'], ['Net weight', 'Approx. 7.0 kg'], ['Dimensions', '25 × 22 × 33 cm'], ['Character size', '2 × 4 × 15 mm']],
    detailStories: [
      ['Electric heat for repeatable coding', 'The HP-241B is built for a steady hot-ribbon workflow, with electric heating and a foot-pedal setup that keeps production moving.', 'Electric operation · 150 W'],
      ['Movable copper type characters', 'Characters can be installed and changed as the message changes, making the machine useful across different products and work areas.', 'Copper type · Easy to change'],
      ['One, two or three rows', 'Choose the row arrangement that matches your message, such as a production date, expiry date, batch number or short code.', '1–3 rows · 30 mm ribbon'],
      ['Print on foil, film and paper', 'The HP-241B is suited to aluminium foil, plastic film, kraft paper, paper cards and other similar packaging materials.', 'Foil · Film · Kraft paper'],
      ['A practical character-changing structure', 'The changeover structure keeps the coding head accessible, so operators can adjust the character set without rebuilding the whole station.', 'Changeover access · Work-area friendly'],
      ['Set up for daily production', 'The supplied images show the machine, ribbon, copper character set and operating accessories together so you can plan the station before ordering.', 'Machine · Ribbon · Character set'],
    ],
  },
};

const pageRoot = document.body;
const productId = pageRoot.dataset.productPage;
const product = productPageData[productId];
const pageMoney = (value) => `$${Number(value).toFixed(2)}`;
const pageCart = JSON.parse(localStorage.getItem('cms-cart') || '[]');
let pageQuantity = 1;

function savePageCart() { localStorage.setItem('cms-cart', JSON.stringify(pageCart)); }
function updatePageCartCount() { const count = pageCart.reduce((sum, line) => sum + line.quantity, 0); document.querySelectorAll('[data-product-count]').forEach((element) => { element.textContent = count; }); }
function addPageProduct(quantity) {
  const line = pageCart.find((item) => item.id === productId);
  if (line) line.quantity += quantity;
  else pageCart.push({ id: productId, quantity });
  savePageCart(); updatePageCartCount();
}
function showPageToast(message) {
  const toast = document.querySelector('[data-product-toast]'); toast.textContent = message; toast.classList.add('visible');
  clearTimeout(window.pageToastTimer); window.pageToastTimer = setTimeout(() => toast.classList.remove('visible'), 2400);
}
function setPageQuantity(value) { pageQuantity = Math.max(1, Math.floor(Number(value)) || 1); const input = document.querySelector('[data-standalone-quantity]'); if (input) input.value = pageQuantity; }
function ensureStandaloneQuantityInput() {
  const current = document.querySelector('[data-standalone-quantity]');
  if (!current || current.tagName === 'INPUT') return;
  const input = document.createElement('input'); input.type = 'number'; input.min = '1'; input.step = '1'; input.value = pageQuantity; input.dataset.standaloneQuantity = ''; input.setAttribute('aria-label', 'Quantity'); current.replaceWith(input);
}

function renderProductPage() {
  document.querySelector('[data-standalone-model]').textContent = product.model;
  document.querySelector('[data-standalone-type]').textContent = product.type;
  document.querySelector('[data-standalone-title]').textContent = product.title;
  document.querySelector('[data-standalone-price]').textContent = pageMoney(product.price);
  document.querySelector('[data-standalone-description]').textContent = product.description;
  document.querySelector('[data-standalone-long]').textContent = product.longDescription;
  document.querySelector('[data-standalone-applications]').textContent = product.applications;
  document.querySelector('[data-standalone-specs]').innerHTML = product.specs.map(([label, value]) => `<div class="spec-item"><span>${label}</span><strong>${value}</strong></div>`).join('');
  const gallery = product.images.map((name) => `${product.imageRoot}${name}`);
  const mainImage = document.querySelector('[data-standalone-main]'); mainImage.src = gallery[0]; mainImage.alt = product.title; mainImage.dataset.lightboxSrc = gallery[0]; mainImage.dataset.lightboxGroup = 'product';
  document.querySelector('[data-standalone-thumbs]').innerHTML = gallery.map((src, index) => `<button type="button" class="${index === 0 ? 'active' : ''}" data-page-thumb="${src}" data-lightbox-src="${src}" data-lightbox-group="product"><img src="${src}" alt="${product.title} view ${index + 1}" /></button>`).join('');
  const stories = product.detailStories.map(([title, body, tags], index) => `<article class="detail-story ${index % 2 ? 'detail-story-reverse' : ''}"><div class="detail-story-media"><img src="${product.imageRoot}details-gallery/${index + 1}.png" data-lightbox-src="${product.imageRoot}details-gallery/${index + 1}.png" data-lightbox-group="details" alt="${product.model} ${title}" loading="lazy" /></div><div class="detail-story-copy"><p class="eyebrow"><span>0${index + 1}</span> PRODUCT NOTE</p><h3>${title}</h3><p>${body}</p><div class="detail-tags">${tags.split(' · ').map((tag) => `<span>${tag}</span>`).join('')}</div></div></article>`).join('');
  const remaining = Array.from({ length: Math.max(0, product.detailCount - product.detailStories.length) }, (_, index) => { const imageIndex = product.detailStories.length + index + 1; return `<img src="${product.imageRoot}details-gallery/${imageIndex}.png" data-lightbox-src="${product.imageRoot}details-gallery/${imageIndex}.png" data-lightbox-group="details" alt="${product.model} additional product detail ${imageIndex}" loading="lazy" />`; }).join('');
  document.querySelector('[data-standalone-detail-gallery]').innerHTML = `${stories}${remaining ? `<div class="detail-more"><p class="eyebrow"><span>MORE</span> REFERENCE IMAGES</p><div class="detail-more-grid">${remaining}</div></div>` : ''}`;
  ensureStandaloneQuantityInput();
  updatePageCartCount();
}

const pageLightbox = document.createElement('div');
pageLightbox.className = 'page-image-lightbox';
pageLightbox.hidden = true;
pageLightbox.setAttribute('role', 'dialog');
pageLightbox.setAttribute('aria-modal', 'true');
pageLightbox.setAttribute('aria-label', 'Product image viewer');
pageLightbox.innerHTML = '<button type="button" class="page-lightbox-close" data-page-lightbox-close aria-label="Close image viewer">×</button><button type="button" class="page-lightbox-nav page-lightbox-prev" data-page-lightbox-prev aria-label="Previous image">←</button><figure><img data-page-lightbox-image alt="" /><figcaption data-page-lightbox-caption></figcaption></figure><button type="button" class="page-lightbox-nav page-lightbox-next" data-page-lightbox-next aria-label="Next image">→</button>';
document.body.append(pageLightbox);

const pageLightboxImage = pageLightbox.querySelector('[data-page-lightbox-image]');
const pageLightboxCaption = pageLightbox.querySelector('[data-page-lightbox-caption]');
let pageLightboxItems = [];
let pageLightboxIndex = 0;

function showPageLightboxImage() {
  const item = pageLightboxItems[pageLightboxIndex];
  if (!item) return;
  pageLightboxImage.src = item.src;
  pageLightboxImage.alt = item.alt;
  pageLightboxCaption.textContent = `${pageLightboxIndex + 1} / ${pageLightboxItems.length}`;
}

function openPageLightbox(items, index) {
  pageLightboxItems = items;
  pageLightboxIndex = Math.max(0, index);
  showPageLightboxImage();
  pageLightbox.hidden = false;
  document.body.classList.add('image-viewer-open');
}

function closePageLightbox() {
  pageLightbox.hidden = true;
  document.body.classList.remove('image-viewer-open');
}

function movePageLightbox(step) {
  if (!pageLightboxItems.length) return;
  pageLightboxIndex = (pageLightboxIndex + step + pageLightboxItems.length) % pageLightboxItems.length;
  showPageLightboxImage();
}

pageLightbox.addEventListener('click', (event) => {
  if (event.target === pageLightbox || event.target.closest('[data-page-lightbox-close]')) closePageLightbox();
  if (event.target.closest('[data-page-lightbox-prev]')) movePageLightbox(-1);
  if (event.target.closest('[data-page-lightbox-next]')) movePageLightbox(1);
});

const pageCartModal = document.createElement('div');
pageCartModal.className = 'page-cart-modal';
pageCartModal.hidden = true;
pageCartModal.setAttribute('role', 'dialog');
pageCartModal.setAttribute('aria-modal', 'true');
pageCartModal.setAttribute('aria-label', 'Your quote list');
pageCartModal.innerHTML = '<div class="page-cart-card"><div class="page-cart-header"><div><p class="eyebrow"><span>YOUR ORDER</span></p><h2>Quote list <small data-page-cart-count>0 items</small></h2></div><button class="close-button" type="button" data-page-cart-close aria-label="Close cart">×</button></div><div class="page-cart-items" data-page-cart-items></div><div class="page-cart-empty" data-page-cart-empty>Your cart is empty.<br /><small>Add products to start building a quote.</small></div><div class="page-cart-footer"><div><span>Products total</span><strong data-page-cart-total>$0.00</strong></div><p>Shipping is calculated separately after we receive your delivery address.</p><a class="button button-primary button-full" href="../index.html#quote" data-page-cart-quote>Request a quote <span>↗</span></a></div></div>';
document.body.append(pageCartModal);

const pageCartItems = pageCartModal.querySelector('[data-page-cart-items]');
const pageCartEmpty = pageCartModal.querySelector('[data-page-cart-empty]');
const pageCartTotal = pageCartModal.querySelector('[data-page-cart-total]');
const pageCartCount = pageCartModal.querySelector('[data-page-cart-count]');

function pageCartTotalValue() { return pageCart.reduce((sum, line) => sum + (productPageData[line.id]?.price || 0) * line.quantity, 0); }
function renderPageCart() {
  pageCartCount.textContent = `${pageCart.reduce((sum, line) => sum + line.quantity, 0)} items`;
  pageCartTotal.textContent = pageMoney(pageCartTotalValue());
  pageCartEmpty.hidden = pageCart.length > 0;
  pageCartItems.hidden = pageCart.length === 0;
  pageCartItems.innerHTML = pageCart.map((line) => { const item = productPageData[line.id]; if (!item) return ''; return `<div class="page-cart-line"><div><strong>${item.title}</strong><small>${pageMoney(item.price)} / unit</small></div><div class="page-cart-line-controls"><div class="line-quantity"><button type="button" data-page-cart-minus="${line.id}" aria-label="Decrease quantity">−</button><input type="number" min="1" step="1" value="${line.quantity}" data-page-cart-quantity="${line.id}" aria-label="${item.title} quantity" /><button type="button" data-page-cart-plus="${line.id}" aria-label="Increase quantity">＋</button></div><strong>${pageMoney(item.price * line.quantity)}</strong><button class="remove-line" type="button" data-page-cart-remove="${line.id}">Remove</button></div></div>`; }).join('');
}
function openPageCart() { renderPageCart(); pageCartModal.hidden = false; document.body.classList.add('page-cart-open'); }
function closePageCart() { pageCartModal.hidden = true; document.body.classList.remove('page-cart-open'); }
function updatePageCartLine(id, quantity) { const line = pageCart.find((item) => item.id === id); if (!line) return; line.quantity = Math.max(1, Math.floor(Number(quantity)) || 1); savePageCart(); updatePageCartCount(); renderPageCart(); }
function removePageCartLine(id) { const index = pageCart.findIndex((item) => item.id === id); if (index < 0) return; pageCart.splice(index, 1); savePageCart(); updatePageCartCount(); renderPageCart(); }

pageCartModal.addEventListener('click', (event) => {
  if (event.target === pageCartModal || event.target.closest('[data-page-cart-close]')) closePageCart();
  const minus = event.target.closest('[data-page-cart-minus]'); if (minus) updatePageCartLine(minus.dataset.pageCartMinus, pageCart.find((line) => line.id === minus.dataset.pageCartMinus).quantity - 1);
  const plus = event.target.closest('[data-page-cart-plus]'); if (plus) updatePageCartLine(plus.dataset.pageCartPlus, pageCart.find((line) => line.id === plus.dataset.pageCartPlus).quantity + 1);
  const remove = event.target.closest('[data-page-cart-remove]'); if (remove) removePageCartLine(remove.dataset.pageCartRemove);
});
pageCartModal.addEventListener('change', (event) => { const input = event.target.closest('[data-page-cart-quantity]'); if (input) updatePageCartLine(input.dataset.pageCartQuantity, input.value); });

document.addEventListener('keydown', (event) => {
  if (!pageLightbox.hidden) {
    if (event.key === 'Escape') closePageLightbox();
    if (event.key === 'ArrowLeft') movePageLightbox(-1);
    if (event.key === 'ArrowRight') movePageLightbox(1);
  }
  if (!pageCartModal.hidden && event.key === 'Escape') closePageCart();
});

document.addEventListener('click', (event) => {
  const pageCartButton = event.target.closest('[data-open-page-cart], .cart-floating, .product-cart-link');
  if (pageCartButton) { event.preventDefault(); openPageCart(); }
  const lightboxTarget = event.target.closest('[data-lightbox-src]');
  if (lightboxTarget) {
    const group = lightboxTarget.dataset.lightboxGroup || 'product';
    const items = [...document.querySelectorAll(`[data-lightbox-group="${group}"]`)].map((item) => ({ src: item.dataset.lightboxSrc, alt: item.querySelector('img')?.alt || item.alt || product.title }));
    const index = items.findIndex((item) => item.src === lightboxTarget.dataset.lightboxSrc);
    openPageLightbox(items, Math.max(0, index));
  }
  const thumb = event.target.closest('[data-page-thumb]');
  if (thumb) { document.querySelector('[data-standalone-main]').src = thumb.dataset.pageThumb; document.querySelector('[data-standalone-main]').dataset.lightboxSrc = thumb.dataset.pageThumb; document.querySelectorAll('[data-page-thumb]').forEach((item) => item.classList.remove('active')); thumb.classList.add('active'); }
  if (event.target.closest('[data-standalone-minus]')) setPageQuantity(pageQuantity - 1);
  if (event.target.closest('[data-standalone-plus]')) setPageQuantity(pageQuantity + 1);
  if (event.target.closest('[data-standalone-quantity]')) setPageQuantity(event.target.value);
  if (event.target.closest('[data-standalone-add]')) { addPageProduct(pageQuantity); showPageToast(`${product.model} added to your cart`); }
  if (event.target.closest('[data-standalone-quote]')) { addPageProduct(pageQuantity); }
  if (event.target.closest('[data-scroll-top]')) window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderProductPage();
