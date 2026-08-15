import { useEffect, useState } from 'react';
type Props = { name: string; images: string[] };
export default function ProductGallery({ name, images }: Props) {
  const [active, setActive] = useState(0); const [lightbox, setLightbox] = useState(false);
  const previous = () => setActive((active - 1 + images.length) % images.length); const next = () => setActive((active + 1) % images.length);
  useEffect(() => { if (!lightbox) return; const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setLightbox(false); if (event.key === 'ArrowLeft') previous(); if (event.key === 'ArrowRight') next(); }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); });
  return <div className="gallery">
    <div className="gallery-main"><button type="button" className="gallery-open" onClick={() => setLightbox(true)} aria-label="Open image gallery"><img src={images[active]} alt={name} /><span>Click to enlarge</span></button><button type="button" className="gallery-arrow gallery-prev" onClick={previous} aria-label="Previous image">←</button><button type="button" className="gallery-arrow gallery-next" onClick={next} aria-label="Next image">→</button></div>
    <div className="gallery-thumbs" role="list">{images.map((image, index) => <button type="button" className={index === active ? 'is-active' : ''} onClick={() => { setActive(index); setLightbox(true); }} aria-label={`Enlarge ${name} view ${index + 1}`} key={image}><img src={image} alt={`${name} view ${index + 1}`} /></button>)}</div>
    {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${name} image gallery`} onClick={() => setLightbox(false)}><button type="button" className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Close">×</button><button type="button" className="lightbox-nav lightbox-prev" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous image">←</button><img src={images[active]} alt={name} onClick={(event) => event.stopPropagation()} /><button type="button" className="lightbox-nav lightbox-next" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next image">→</button></div>}
  </div>;
}
