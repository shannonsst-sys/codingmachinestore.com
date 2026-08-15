import { useEffect, useState } from 'react';

type Props = { src: string; alt: string };

export default function ImageLightbox({ src, alt }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return <>
    <button type="button" className="image-lightbox-trigger" onClick={() => setOpen(true)} aria-label={`Enlarge ${alt}`}>
      <img src={src} alt={alt} loading="lazy" />
      <span>Click to enlarge</span>
    </button>
    {open && <div className="lightbox single-lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
      <button type="button" className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
      <img className="lightbox-image" src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
    </div>}
  </>;
}
