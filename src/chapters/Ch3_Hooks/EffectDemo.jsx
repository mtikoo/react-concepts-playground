import { useState, useEffect } from 'react';

export default function EffectDemo() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [running]);

  return (
    <div className="demo-section">
      <h3>useEffect <span className="badge">Timer</span></h3>
      <p>
        Starts an interval when <code>running</code> is true. The cleanup
        function clears the interval when the component unmounts or
        <code> running</code> changes.
      </p>
      <p>
        This demonstrates the core effect lifecycle: run effect after render,
        then clean up before rerun/unmount. Always pair subscriptions, timers,
        or external listeners with cleanup to prevent memory leaks and duplicate
        background work.
      </p>
      <div className="demo-area">
        <div className="demo-row">
          <span style={{ fontSize: '1.4rem', fontWeight: 700, minWidth: 60 }}>
            {seconds}s
          </span>
          <button onClick={() => setRunning((r) => !r)}>
            {running ? 'Pause' : 'Start'}
          </button>
          <button
            style={{ background: 'var(--text-muted)' }}
            onClick={() => {
              setRunning(false);
              setSeconds(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
