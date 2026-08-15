import { type FormEvent, useEffect, useState } from 'react';

type CartLine = { id: string; name: string; price: number; quantity: number; sku?: string; notes?: string; quoteOnly?: boolean };

const readCart = (): CartLine[] => {
  try {
    const value = JSON.parse(localStorage.getItem('cms-cart') || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
};

const formatCartLine = (line: CartLine) => {
  const price = line.quoteOnly ? 'Price on request' : `$${(Number(line.price || 0) * Number(line.quantity || 0)).toFixed(2)}`;
  const sku = line.sku ? ` [SKU: ${line.sku}]` : '';
  const notes = line.notes ? `\nNotes: ${line.notes}` : '';
  return `${line.name}${sku} × ${line.quantity} — ${price}${notes}`;
};

export default function QuoteForm() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const refresh = () => setCart(readCart());
    refresh();
    window.addEventListener('cms-cart-updated', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('cms-cart-updated', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const total = cart.reduce((sum, line) => sum + Number(line.price || 0) * Number(line.quantity || 0), 0);
  const hasQuoteOnly = cart.some((line) => line.quoteOnly);
  const selectedProducts = cart.length
    ? cart.map(formatCartLine).join('\n')
    : 'No products selected yet.';

  const validateContact = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement | null)?.value.trim();
    const whatsapp = (form.elements.namedItem('whatsapp') as HTMLInputElement | null)?.value.trim();
    if (!email && !whatsapp) {
      event.preventDefault();
      setError('Please enter an email address or WhatsApp number so we can reply.');
      return;
    }
    setError('');
  };

  return <form className="quote-form-modern" action="https://formspree.io/f/xppalleq" method="POST" onSubmit={validateContact}>
    <input type="hidden" name="_subject" value="New Coding Machine Store quote request" />
    <input type="hidden" name="selected_products" value={selectedProducts} readOnly />
    <input type="hidden" name="estimated_product_total_usd" value={total.toFixed(2)} readOnly />
    <div className="quote-form-summary"><span>{cart.length ? `${cart.length} product line${cart.length === 1 ? '' : 's'} in your quote` : 'No products in your quote yet'}</span><strong>{hasQuoteOnly ? `$${total.toFixed(2)} + quote` : `$${total.toFixed(2)}`}</strong></div>
    <div className="quote-form-grid">
      <label><span>Your name *</span><input name="name" required placeholder="Your name or company" /></label>
      <label><span>Country / delivery address *</span><input name="address" required placeholder="City, country — shipping is quoted separately" /></label>
      <label><span>Email (optional)</span><input type="email" name="email" placeholder="you@example.com" /></label>
      <label><span>WhatsApp (optional)</span><input name="whatsapp" placeholder="+ country code and number" /></label>
    </div>
    <label><span>Products and requirements</span><textarea name="message" rows={5} placeholder="Tell us what you need to print, the packaging material, quantity and any compatibility questions." defaultValue={selectedProducts === 'No products selected yet.' ? '' : selectedProducts} /></label>
    {error && <p className="quote-form-error" role="alert">{error}</p>}
    <button className="button button-dark" type="submit">Send quote request <span>↗</span></button>
    <p className="quote-form-note">This form is handled by Formspree. We will reply by email or WhatsApp; shipping is calculated separately after receiving your address.</p>
  </form>;
}
