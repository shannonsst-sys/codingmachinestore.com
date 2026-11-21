import { useEffect, useRef, useState } from 'react';
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

const SLIDES = [
  {
    image: '/assets/generated/hero-machines-revised.png',
    alt: 'Five industrial coding machines with a conveyor inkjet printer in the foreground',
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
  const rowRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startScroll: number } | null>(null);
  const movedRef = useRef(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setSlide((current) => (current + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, [paused, slide]);

  const goToSlide = (next: number) => setSlide((next + SLIDES.length) % SLIDES.length);
  const activeSlide = SLIDES[slide];

  const scrollRow = (direction: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;
    const firstCard = row.querySelector<HTMLElement>('.product-card');
    const step = (firstCard?.offsetWidth ?? 320) + 12;
    row.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    movedRef.current = false;
    dragRef.current = null;
    if (event.pointerType !== 'mouse' || (event.target instanceof Element && event.target.closest('button, input'))) return;
    dragRef.current = { startX: event.clientX, startScroll: rowRef.current?.scrollLeft ?? 0 };
  };
  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const row = rowRef.current;
    if (!drag || !row) return;
    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 5) movedRef.current = true;
    if (movedRef.current) row.scrollLeft = drag.startScroll - delta;
  };
  const endDrag = () => {
    dragRef.current = null;
  };
  const onClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (movedRef.current) {
      event.preventDefault();
      event.stopPropagation();
      movedRef.current = false;
    }
  };

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

      <div className="product-row-wrap">
        <button type="button" className="product-row-arrow product-row-arrow-prev" onClick={() => scrollRow(-1)} aria-label="Scroll products left">‹</button>
        <div
          className="product-row"
          ref={rowRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerCancel={endDrag} onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
        >
          {products.map((product) => (
            <article className="product-card" key={product.slug}>
              <a className="product-card-media" href={`/products/${product.slug}/`}>
                <img src={product.hero} alt={product.name} loading="lazy" draggable={false} />
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
          ))}
        </div>
        <button type="button" className="product-row-arrow product-row-arrow-next" onClick={() => scrollRow(1)} aria-label="Scroll products right">›</button>
      </div>
    </>
  );
}
