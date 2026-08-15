type Props = { id: string; name: string; price: number };
export default function AddToCartButton({ id, name, price }: Props) {
  const add = () => { const current = JSON.parse(localStorage.getItem('cms-cart') || '[]'); const existing = current.find((line: Props & { quantity: number }) => line.id === id); if (existing) existing.quantity += 1; else current.push({ id, name, price, quantity: 1 }); localStorage.setItem('cms-cart', JSON.stringify(current)); window.dispatchEvent(new Event('cms-cart-updated')); };
  return <button className="button button-dark add-cart-button" type="button" onClick={add}>Add to quote list</button>;
}
