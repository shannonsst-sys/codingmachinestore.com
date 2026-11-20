import { useEffect, useState } from 'react';
import AddToCartButton from './AddToCartButton';

type HomepageProduct = {
  slug: string;
  model: string;
  name: string;
  type: string;
  description: string;
  hero: string;
  price: number;
  priceLabel?: string | null;
  hasOptions: boolean;
};

const PAGE_SIZE = 8;

const SLIDES = [
  {
    image: '/assets/generated/hero-coding-machine.png',
    alt: 'Coding machine and packaging materials',
    title: 'Factory-direct coding machines',
    caption: 'Date, batch and expiry coding for flexible packaging — direct from Ruian, Zhejiang.',
    link: '/products/',
    linkLabel: 'Browse products →',
  },
  {
    image: '/assets/products/print-samples/ribbon-colours.png',
    alt: 'Six foil ribbon colours with printed sample pouches',
    title: 'Ribbon print samples',
    caption: 'Six foil ribbon colours — crisp, instant-dry marks on foil, film and plastic.',
    link: '/products/hp-241b/',
    linkLabel: 'See HP-241B →',
  },
  {
    image: '/assets/products/my-380f/hero.png',
    alt: 'MY-380F automatic solid ink roll coding machine',
    title: 'MY-380F solid ink roll coder',
    caption: 'Automatic paging and solid ink roll coding for paper bags, labels and film boxes.',
    link: '/products/my-380f/',
    linkLabel: 'See MY-380F →',
  },
];

export default function HomepageShowcase({ products }: { products: HomepageProduct[] }) {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pageProducts = products.slice(pageStart, pageStart + PAGE_SIZE);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setSlide((current) => (current + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, [paused, slide]);

  const goToSlide = (next: number) => setSlide((next + SLIDES.length) % SLIDES.length);
  const goToPage = (next: number) => {
    setPage(Math.min(Math.max(1, next), totalPages));
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeSlide = SLIDES[slide];

  return (
    <>
      <div
        className="banner-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured coding machines"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="banner-viewport">
          {SLIDES.map((item, index) => (
            <a key={item.title} href={item.link} aria-label={item.title} hidden={index !== slide}>
              <img className="banner-image" src={item.image} alt={item.alt} />
            </a>
          ))}
          <button type="button" className="banner-arrow banner-arrow-prev" onClick={() => goToSlide(slide - 1)} aria-label="Previous banner">‹</button>
          <button type="button" className="banner-arrow banner-arrow-next" onClick={() => goToSlide(slide + 1)} aria-label="Next banner">›</button>
        </div>
        <div className="banner-caption">
          <div>
            <strong>{activeSlide.title}</strong>
            <p>{activeSlide.caption}</p>
          </div>
          <a className="text-link" href={activeSlide.link}>{activeSlide.linkLabel}</a>
        </div>
        <div className="banner-dots" role="tablist" aria-label="Banner slides">
          {SLIDES.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={index === slide}
              aria-label={`Banner ${index + 1}: ${item.title}`}
              className={index === slide ? 'banner-dot active' : 'banner-dot'}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="product-grid product-grid--paged">
        {products.map((product, index) => {
          const visible = index >= pageStart && index < pageStart + PAGE_SIZE;
          return (
            <article className="product-card" key={product.slug} hidden={!visible}>
              <a className="product-card-media" href={`/products/${product.slug}/`}>
                <img src={product.hero} alt={product.name} loading="lazy" />
              </a>
              <div className="product-card-body">
                <span className="eyebrow">{product.model} · {product.type}</span>
                <h3><a href={`/products/${product.slug}/`}>{product.name}</a></h3>
                <p>{product.description}</p>
                <div className="product-meta">
                  <span className="price">{product.priceLabel ?? `$${product.price.toFixed(2)}`}</span>
                  {product.hasOptions ? (
                    <a className="button button-dark add-cart-button" href={`/products/${product.slug}/`}>Choose SKU</a>
                  ) : (
                    <AddToCartButton id={product.slug} name={`${product.model} ${product.name}`} price={product.price} />
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {totalPages > 1 && (
        <nav className="pagination" aria-label="Product pages">
          <button type="button" className="pagination-button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous page">← Prev</button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              className={pageNumber === currentPage ? 'pagination-button active' : 'pagination-button'}
              aria-current={pageNumber === currentPage ? 'page' : undefined}
              onClick={() => goToPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          <button type="button" className="pagination-button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next page">Next →</button>
          <span className="pagination-status">Page {currentPage} of {totalPages} · Showing {pageProducts.length} of {products.length} machines</span>
        </nav>
      )}
    </>
  );
}
