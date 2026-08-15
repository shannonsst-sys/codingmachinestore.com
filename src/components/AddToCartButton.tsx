import { useState } from 'react';

type Props = { id: string; name: string; price: number };

export default function AddToCartButton({ id, name, price }: Props) {
  const [quantity, setQuantity] = useState(1);
  const setSafeQuantity = (value: number) => setQuantity(Math.max(1, Number.isFinite(value) ? Math.floor(value) : 1));
  const add = () => {
    const current = JSON.parse(localStorage.getItem('cms-cart') || '[]');
    const existing = current.find((line: Props & { quantity: number }) => line.id === id);
    if (existing) existing.quantity += quantity;
    else current.push({ id, name, price, quantity });
    localStorage.setItem('cms-cart', JSON.stringify(current));
    window.dispatchEvent(new Event('cms-cart-updated'));
    setQuantity(1);
  };
  return <div className="add-cart-group"><div className="quantity-control" aria-label={`Quantity for ${name}`}><button type="button" onClick={() => setSafeQuantity(quantity - 1)} aria-label="Decrease quantity">−</button><input type="number" min="1" step="1" value={quantity} onChange={(event) => setSafeQuantity(Number(event.target.value))} aria-label="Quantity" /><button type="button" onClick={() => setSafeQuantity(quantity + 1)} aria-label="Increase quantity">＋</button></div><button className="button button-dark add-cart-button" type="button" onClick={add}>Add to quote list</button></div>;
}
