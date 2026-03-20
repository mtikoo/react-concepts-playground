import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

export default function ReduceDemo() {
  const [items, setItems] = useState([
    { name: 'Shirt', price: 25, qty: 2 },
    { name: 'Jeans', price: 45, qty: 1 },
    { name: 'Shoes', price: 60, qty: 1 },
  ]);

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

  const updateQty = (index, delta) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, qty: Math.max(0, item.qty + delta) } : item
      )
    );
  };

  return (
    <div className="demo-section">
      <h3>
        <code>.reduce()</code> — Accumulate into a Single Value
      </h3>
      <p>
        Iterates over the array, passing an <strong>accumulator</strong> and the
        current element to the callback. Returns a single value — a number,
        string, object, or even another array.
      </p>
      <div className="demo-area">
        {items.map((item, i) => (
          <div
            key={item.name}
            className="user-card"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <span>
              <strong>{item.name}</strong>{' '}
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                @ ${item.price}
              </span>
            </span>
            <div className="demo-row" style={{ gap: 6 }}>
              <button
                style={{ padding: '2px 10px', fontSize: '0.85rem' }}
                onClick={() => updateQty(i, -1)}
              >
                −
              </button>
              <span style={{ minWidth: 24, textAlign: 'center', fontWeight: 600 }}>
                {item.qty}
              </span>
              <button
                style={{ padding: '2px 10px', fontSize: '0.85rem' }}
                onClick={() => updateQty(i, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div
          style={{
            padding: '12px 16px',
            background: 'var(--code-bg)',
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 600,
          }}
        >
          <span>{totalQty} items</span>
          <span>Total: ${total}</span>
        </div>
      </div>
      <CodeBlock>{`const total = items.reduce(
  (sum, item) => sum + item.price * item.qty,
  0  // initial accumulator value
);`}</CodeBlock>
    </div>
  );
}
