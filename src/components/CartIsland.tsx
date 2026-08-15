import { useEffect, useState } from 'react';

type CartLine = { id: string; name: string; price: number; quantity: number };
type Props = { floating?: boolean };
const readCart = (): CartLine[] => { try { return JSON.parse(localStorage.getItem('cms-cart') || '[]'); } catch { return []; } };

export default function CartIsland({ floating = false }: Props) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  useEffect(() => { const refresh = () => setCart(readCart()); refresh(); window.addEventListener('cms-cart-updated', refresh); return () => window.removeEventListener('cms-cart-updated', refresh); }, []);
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const total = cart.reduce((sum, line) => sum + line.price * line.quantity, 0);
  return <div className={`cart-island${floating ? ' cart-island-floating' : ''}`}>
    <button className={`cart-button${floating ? ' cart-button-floating' : ''}`} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={floating ? `Open cart, ${count} items` : undefined}><span aria-hidden="true">🛒</span>{!floating && ' Cart '}<b>{count}</b></button>
    {open && <div className="cart-popover"><strong>Your quote list</strong>{cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((line) => <div className="cart-line" key={line.id}><span>{line.name}<small>× {line.quantity}</small></span><b>${(line.price * line.quantity).toFixed(2)}</b></div>)}<div className="cart-total"><span>Products total</span><b>${total.toFixed(2)}</b></div><a className="button button-dark" href="/#quote">Request a quote</a></div>}
  </div>;
}
