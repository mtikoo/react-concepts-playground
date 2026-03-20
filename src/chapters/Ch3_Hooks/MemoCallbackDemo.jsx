import { useState, useMemo, useCallback, memo } from 'react';

function expensiveSum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}

const ChildButton = memo(function ChildButton({ onClick, label }) {
  console.log(`[ChildButton "${label}"] rendered`);
  return <button onClick={onClick}>{label}</button>;
});

export default function MemoCallbackDemo() {
  const [count, setCount] = useState(1000);
  const [other, setOther] = useState(0);

  const sum = useMemo(() => expensiveSum(count), [count]);

  const increment = useCallback(() => {
    setCount((c) => c + 100);
  }, []);

  return (
    <div className="demo-section">
      <h3>useMemo &amp; useCallback</h3>
      <p>
        <code>useMemo</code> caches the expensive sum so it only recalculates
        when <code>count</code> changes. <code>useCallback</code> keeps a
        stable function reference so the <code>memo</code>-wrapped child
        skips re-renders. Open the console to see render logs.
      </p>
      <div className="demo-area">
        <div>
          Sum of 1..{count} = <strong>{sum.toLocaleString()}</strong>
        </div>
        <div className="demo-row">
          <ChildButton onClick={increment} label="+100 to count" />
          <button
            style={{ background: 'var(--text-muted)' }}
            onClick={() => setOther((o) => o + 1)}
          >
            Unrelated state ({other})
          </button>
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Changing &ldquo;unrelated state&rdquo; does NOT re-render ChildButton.
        </div>
      </div>
    </div>
  );
}
