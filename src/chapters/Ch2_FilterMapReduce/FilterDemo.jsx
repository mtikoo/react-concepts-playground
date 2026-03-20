import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Phone', price: 699, inStock: true },
  { id: 3, name: 'Tablet', price: 449, inStock: false },
  { id: 4, name: 'Watch', price: 249, inStock: true },
  { id: 5, name: 'Earbuds', price: 129, inStock: false },
  { id: 6, name: 'Charger', price: 29, inStock: true },
];

export default function FilterDemo() {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [stockOnly, setStockOnly] = useState(false);

  const filtered = PRODUCTS.filter((p) => {
    if (p.price > maxPrice) return false;
    if (stockOnly && !p.inStock) return false;
    return true;
  });

  return (
    <div className="demo-section">
      <h3>
        <code>.filter()</code> — Keep Matching Elements
      </h3>
      <p>
        Returns a <strong>new array</strong> containing only elements where the
        callback returns <code>true</code>. Great for search, filtering lists,
        and removing items.
      </p>
      <div className="demo-area">
        <div className="demo-row">
          <label style={{ fontSize: '0.85rem' }}>
            Max price: <strong>${maxPrice}</strong>
          </label>
          <input
            type="range"
            min={0}
            max={1000}
            step={50}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{ flex: 1, maxWidth: 200 }}
          />
          <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 4 }}>
            <input
              type="checkbox"
              checked={stockOnly}
              onChange={(e) => setStockOnly(e.target.checked)}
            />
            In stock only
          </label>
        </div>
        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Showing {filtered.length} of {PRODUCTS.length} products
        </div>
        {filtered.map((p) => (
          <div
            key={p.id}
            className="user-card"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <span>
              <strong>{p.name}</strong>
              {!p.inStock && (
                <span style={{ color: 'var(--danger)', fontSize: '0.78rem', marginLeft: 8 }}>
                  Out of stock
                </span>
              )}
            </span>
            <span style={{ fontWeight: 600 }}>${p.price}</span>
          </div>
        ))}
      </div>
      <CodeBlock>{`const filtered = products.filter(p => {
  if (p.price > maxPrice) return false;
  if (stockOnly && !p.inStock) return false;
  return true;
});`}</CodeBlock>
    </div>
  );
}
