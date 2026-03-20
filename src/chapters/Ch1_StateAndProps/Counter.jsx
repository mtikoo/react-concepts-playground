import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-section">
      <h3>Counter <code>useState</code></h3>
      <p>
        Basic state management. Click buttons to update the count.
        The functional updater form <code>prev =&gt; prev + 1</code> is safest
        when the new state depends on the old.
      </p>
      <div className="demo-area">
        <div className="demo-row">
          <button onClick={() => setCount((prev) => prev - 1)}>-</button>
          <span style={{ fontSize: '1.4rem', fontWeight: 700, minWidth: 40, textAlign: 'center' }}>
            {count}
          </span>
          <button onClick={() => setCount((prev) => prev + 1)}>+</button>
          <button
            style={{ background: 'var(--text-muted)' }}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
