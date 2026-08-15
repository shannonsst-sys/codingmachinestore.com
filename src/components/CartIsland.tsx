import { useEffect, useState } from 'react';

type CartLine = { id: string; name: string; price: number; quantity: number; sku?: string; notes?: string; quoteOnly?: boolean };
type Props = { floating?: boolean };
const readCart = (): CartLine[] => { try { return JSON.parse(localStorage.getItem('cms-cart') || '[]'); } catch { return []; } };

export default function CartIsland({ floating = false }: Props) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  useEffect(() => { const refresh = () => setCart(readCart()); refresh(); window.addEventListener('cms-cart-updated', refresh); return () => window.removeEventListener('cms-cart-updated', refresh); }, []);
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const total = cart.reduce((sum, line) => sum + line.price * line.quantity, 0);
  const hasQuoteOnly = cart.some((line) => line.quoteOnly);
  const saveCart = (next: CartLine[]) => { setCart(next); localStorage.setItem('cms-cart', JSON.stringify(next)); window.dispatchEvent(new Event('cms-cart-updated')); };
  const updateQuantity = (id: string, quantity: number) => { const next = cart.map((line) => line.id === id ? { ...line, quantity: Math.max(1, Math.floor(quantity) || 1) } : line); saveCart(next); };
  const removeLine = (id: string) => saveCart(cart.filter((line) => line.id !== id));
  return <div className={`cart-island${floating ? ' cart-island-floating' : ''}`}>
    <button className={`cart-button${floating ? ' cart-button-floating' : ''}`} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={floating ? `Open cart, ${count} items` : undefined}><span aria-hidden="true">🛒</span>{!floating && ' Cart '}<b>{count}</b></button>
    {open && <><button className="cart-modal-backdrop" type="button" aria-label="Close cart" onClick={() => setOpen(false)} /><section className="cart-modal" role="dialog" aria-modal="true" aria-label="Your quote list"><div className="cart-modal-header"><div><span className="eyebrow">Your order</span><h2>Quote list <small>{count} items</small></h2></div><button className="cart-modal-close" type="button" onClick={() => setOpen(false)} aria-label="Close cart">×</button></div>{cart.length === 0 ? <div className="cart-modal-empty"><strong>Your cart is empty.</strong><p>Add products to compare quantities and request a quote.</p></div> : <div className="cart-modal-items">{cart.map((line) => <div className="cart-modal-line" key={`${line.id}-${line.notes ?? ''}`}><div className="cart-modal-line-copy"><strong>{line.name}</strong><small>{line.quoteOnly ? 'Price on request' : `$${line.price.toFixed(2)} / unit`}{line.sku ? ` · SKU ${line.sku}` : ''}</small>{line.notes && <small className="cart-modal-line-notes">Notes: {line.notes}</small>}</div><div className="cart-modal-line-controls"><div className="quantity-control"><button type="button" onClick={() => updateQuantity(line.id, line.quantity - 1)} aria-label={`Decrease ${line.name}`}>−</button><input type="number" min="1" step="1" value={line.quantity} onChange={(event) => updateQuantity(line.id, Number(event.target.value))} aria-label={`${line.name} quantity`} /><button type="button" onClick={() => updateQuantity(line.id, line.quantity + 1)} aria-label={`Increase ${line.name}`}>＋</button></div><strong className="cart-modal-line-total">{line.quoteOnly ? 'Quote' : `$${(line.price * line.quantity).toFixed(2)}`}</strong><button className="cart-modal-remove" type="button" onClick={() => removeLine(line.id)}>Remove</button></div></div>)}</div>}<div className="cart-modal-footer"><div><span>Products total</span><strong>{hasQuoteOnly ? `$${total.toFixed(2)} + quote` : `$${total.toFixed(2)}`}</strong></div><p>Shipping is calculated separately after we receive your delivery address. Customized items are confirmed in the quote.</p><a className="button button-dark" href="/#quote" onClick={() => setOpen(false)}>Request a quote</a></div></section></>}
  </div>;
}
