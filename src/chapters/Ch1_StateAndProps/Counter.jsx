import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-section">
      <h3>Counter <code>useState</code></h3>
      <p>
        This is the smallest useful state example: one piece of local state
        (<code>count</code>) and three updates (increment, decrement, reset).
        Each click triggers a re-render, and React paints the latest state value.
      </p>
      <p>
        Notice the functional updater form
        (<code>prev =&gt; prev + 1</code>). It is the safest pattern when next
        state depends on previous state, especially when multiple updates may be
        queued in the same event cycle.
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
