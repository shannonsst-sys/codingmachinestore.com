import { useMemo, useState } from 'react';
import type { ProductOption } from '../data/products';

type Props = {
  id: string;
  name: string;
  options: ProductOption[];
  notesPrompt?: string;
};

type CartLine = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  sku: string;
  notes?: string;
  quoteOnly?: boolean;
};

export default function ProductQuoteOptions({ id, name, options, notesPrompt }: Props) {
  const firstValues = useMemo(() => Object.fromEntries(options.map((option) => [option.id, option.values[0]?.id ?? ''])), [options]);
  const [selected, setSelected] = useState<Record<string, string>>(firstValues);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');

  const selectedValues = options.map((option) => option.values.find((value) => value.id === selected[option.id]) ?? option.values[0]).filter(Boolean);
  const selectedValue = selectedValues[0];
  const requiresNotes = Boolean(selectedValue?.requiresNotes);
  const characterLimit = selectedValue?.maxCharacters;
  const setSafeQuantity = (value: number) => setQuantity(Math.max(1, Number.isFinite(value) ? Math.floor(value) : 1));

  const add = () => {
    if (!selectedValue) return;
    if (requiresNotes && !notes.trim()) {
      setMessage('Please list the characters and quantities you need before adding this item.');
      return;
    }
    if (characterLimit) {
      const countMatch = notes.match(/(?:total|count|数量)\s*[:：]?\s*(\d+)/i);
      const quantities = [...notes.matchAll(/(?:blank|space|空格|[A-Za-z0-9./])\s*[x×*]\s*(\d+)/gi)].map((match) => Number(match[1]));
      const count = countMatch ? Number(countMatch[1]) : quantities.reduce((sum, value) => sum + value, 0);
      if (!count) {
        setMessage(`Please include quantities for the custom characters, with a maximum of ${characterLimit} pieces.`);
        return;
      }
      if (count > characterLimit) {
        setMessage(`Custom character boxes are limited to ${characterLimit} pieces.`);
        return;
      }
    }
    const current: CartLine[] = JSON.parse(localStorage.getItem('cms-cart') || '[]');
    const lineId = `${id}::${selectedValue.id}::${encodeURIComponent(notes.trim()).slice(0, 160)}`;
    const lineName = `${name} — ${selectedValue.label}`;
    const existing = current.find((line) => line.id === lineId);
    if (existing) existing.quantity += quantity;
    else current.push({ id: lineId, name: lineName, price: selectedValue.price, quantity, sku: selectedValue.sku, notes: notes.trim() || undefined, quoteOnly: selectedValue.quoteOnly });
    localStorage.setItem('cms-cart', JSON.stringify(current));
    window.dispatchEvent(new Event('cms-cart-updated'));
    setQuantity(1);
    setMessage(`${selectedValue.sku} added to your quote list.`);
  };

  return <div className="product-options">
    {options.map((option) => <label className="product-option" key={option.id}><span>{option.label}</span><select value={selected[option.id]} onChange={(event) => { setSelected({ ...selected, [option.id]: event.target.value }); setMessage(''); }}><option value="" disabled>Select an option</option>{option.values.map((value) => <option value={value.id} key={value.id}>{value.sku} · {value.label}{value.quoteOnly ? ' · Quote' : ` · $${value.price.toFixed(2)}`}</option>)}</select>{option.helper && <small>{option.helper}</small>}</label>)}
    {selectedValue?.description && <p className="product-option-description">{selectedValue.description}</p>}
    {(notesPrompt || requiresNotes) && <label className="product-option-notes"><span>{requiresNotes ? 'Customization details *' : 'Character quantity notes'}</span><textarea value={notes} onChange={(event) => { setNotes(event.target.value); setMessage(''); }} rows={4} maxLength={1200} required={requiresNotes} placeholder={notesPrompt ?? 'List the letters, numbers and symbols with quantities, for example: A×5, 0×10, /×2, blank×3.'} />{characterLimit && <small>Maximum {characterLimit} characters. Include “total: 74” in your note if you want us to verify the exact count.</small>}</label>}
    <div className="product-option-actions"><div className="quantity-control" aria-label={`Quantity for ${name}`}><button type="button" onClick={() => setSafeQuantity(quantity - 1)} aria-label="Decrease quantity">−</button><input type="number" min="1" step="1" value={quantity} onChange={(event) => setSafeQuantity(Number(event.target.value))} aria-label="Quantity" /><button type="button" onClick={() => setSafeQuantity(quantity + 1)} aria-label="Increase quantity">＋</button></div><button className="button button-dark" type="button" onClick={add}>Add to quote list</button></div>
    {message && <p className="product-option-message" role="status">{message}</p>}
  </div>;
}
