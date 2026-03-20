import { useState, useRef, useEffect } from 'react';

export default function RefDemo() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const prevValueRef = useRef('');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div className="demo-section">
      <h3>useRef</h3>
      <p>
        Two uses: (1) <code>inputRef</code> focuses the input on mount, and
        (2) <code>prevValueRef</code> tracks the previous value across renders
        without causing a re-render.
      </p>
      <div className="demo-area">
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          style={{ maxWidth: 300 }}
        />
        <div>
          Current: <strong>{value || '(empty)'}</strong> | Previous:{' '}
          <strong>{prevValueRef.current || '(empty)'}</strong>
        </div>
      </div>
    </div>
  );
}
