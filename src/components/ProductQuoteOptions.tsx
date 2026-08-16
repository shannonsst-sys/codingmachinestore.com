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

const customCharacters = [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', '.', '/', 'blank'];

export default function ProductQuoteOptions({ id, name, options, notesPrompt }: Props) {
  const firstValues = useMemo(() => Object.fromEntries(options.map((option) => [option.id, option.values[0]?.id ?? ''])), [options]);
  const [selected, setSelected] = useState<Record<string, string>>(firstValues);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [customQuantities, setCustomQuantities] = useState<Record<string, number>>(() => Object.fromEntries(customCharacters.map((character) => [character, 0])));
  const [message, setMessage] = useState('');

  const selectedValues = options.map((option) => option.values.find((value) => value.id === selected[option.id]) ?? option.values[0]).filter(Boolean);
  const selectedValue = selectedValues[0];
  const requiresNotes = Boolean(selectedValue?.requiresNotes);
  const characterLimit = selectedValue?.maxCharacters;
  const isCharacterQuantitySelector = Boolean(selectedValue?.characterQuantities);
  const isStructuredCustomization = Boolean(requiresNotes && characterLimit);
  const structuredTotal = Object.values(customQuantities).reduce((sum, value) => sum + value, 0);
  const structuredNotes = customCharacters.filter((character) => customQuantities[character] > 0).map((character) => `${character}×${customQuantities[character]}`).join(', ');
  const setSafeQuantity = (value: number) => setQuantity(Math.max(1, Number.isFinite(value) ? Math.floor(value) : 1));

  const add = () => {
    if (!selectedValue) return;
    const lineNotes = isStructuredCustomization || isCharacterQuantitySelector ? structuredNotes : notes.trim();
    if (isCharacterQuantitySelector && structuredTotal < 1) {
      setMessage('Please select at least one character before adding this item.');
      return;
    }
    if (requiresNotes && !lineNotes && !isStructuredCustomization) {
      setMessage('Please list the characters and quantities you need before adding this item.');
      return;
    }
    if (characterLimit) {
      if (structuredTotal !== characterLimit) {
        setMessage(`Custom character boxes must total exactly ${characterLimit} pieces. Current total: ${structuredTotal}.`);
        return;
      }
    }
    const current: CartLine[] = JSON.parse(localStorage.getItem('cms-cart') || '[]');
    const lineId = `${id}::${selectedValue.id}::${encodeURIComponent(lineNotes).slice(0, 160)}`;
    const lineName = `${name} — ${selectedValue.label}`;
    const lineQuantity = isCharacterQuantitySelector ? structuredTotal : quantity;
    const existing = current.find((line) => line.id === lineId);
    if (existing) existing.quantity += lineQuantity;
    else current.push({ id: lineId, name: lineName, price: selectedValue.price, quantity: lineQuantity, sku: selectedValue.sku, notes: lineNotes || undefined, quoteOnly: selectedValue.quoteOnly });
    localStorage.setItem('cms-cart', JSON.stringify(current));
    window.dispatchEvent(new Event('cms-cart-updated'));
    setQuantity(1);
    setMessage(`${selectedValue.sku} · ${lineQuantity} pieces added to your quote list.`);
  };

  return <div className="product-options">
    {options.map((option) => <label className="product-option" key={option.id}><span>{option.label}</span><select value={selected[option.id]} onChange={(event) => { setSelected({ ...selected, [option.id]: event.target.value }); setMessage(''); }}><option value="" disabled>Select an option</option>{option.values.map((value) => <option value={value.id} key={value.id}>{value.sku} · {value.label}{value.quoteOnly ? ' · Quote' : ` · $${value.price.toFixed(2)}`}</option>)}</select>{option.helper && <small>{option.helper}</small>}</label>)}
    {selectedValue?.description && <p className="product-option-description">{selectedValue.description}</p>}
    {selectedValue?.contents && <details className="product-option-contents"><summary>View character composition</summary><p>{selectedValue.contents}</p></details>}
    {isStructuredCustomization || isCharacterQuantitySelector ? <div className="product-option-character-quantities"><div className="product-option-character-heading"><span>Character quantities *</span><strong>{characterLimit ? `${structuredTotal} / ${characterLimit}` : `${structuredTotal} pieces`}</strong></div><div className="character-quantity-grid">{customCharacters.map((character) => <label className="character-quantity" key={character}><span title={character === 'blank' ? 'Blank space' : character}>{character === 'blank' ? 'Blank' : character}</span><input type="number" min="0" max={characterLimit} step="1" value={customQuantities[character]} onChange={(event) => { const value = Math.max(0, Math.floor(Number(event.target.value) || 0)); setCustomQuantities({ ...customQuantities, [character]: value }); setMessage(''); }} aria-label={`Quantity for ${character === 'blank' ? 'blank space' : character}`} /></label>)}</div><small>{characterLimit ? `Enter the quantity for each character. The total must be exactly ${characterLimit} pieces before this custom box can be added.` : 'Enter the quantity for each character. The total number of pieces and price are calculated automatically.'}</small></div> : requiresNotes && <label className="product-option-notes"><span>Customization details *</span><textarea value={notes} onChange={(event) => { setNotes(event.target.value); setMessage(''); }} rows={4} maxLength={1200} required placeholder={notesPrompt ?? 'List the letters, numbers and symbols with quantities, for example: A×5, 0×10, /×2, blank×3.'} /></label>}
    <div className="product-option-actions">{isCharacterQuantitySelector ? <div className="product-option-total" aria-live="polite"><span>Total</span><strong>{structuredTotal} pcs · ${(selectedValue.price * structuredTotal).toFixed(2)}</strong></div> : <div className="quantity-control" aria-label={`Quantity for ${name}`}><button type="button" onClick={() => setSafeQuantity(quantity - 1)} aria-label="Decrease quantity">−</button><input type="number" min="1" step="1" value={quantity} onChange={(event) => setSafeQuantity(Number(event.target.value))} aria-label="Quantity" /><button type="button" onClick={() => setSafeQuantity(quantity + 1)} aria-label="Increase quantity">＋</button></div>}<button className="button button-dark" type="button" onClick={add}>Add to quote list</button></div>
    {message && <p className="product-option-message" role="status">{message}</p>}
  </div>;
}
