import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

const INITIAL_ITEMS = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];

export default function MapDemo() {
  const [suffix, setSuffix] = useState('.js');

  const mapped = INITIAL_ITEMS.map((item) => `${item}${suffix}`);

  return (
    <div className="demo-section">
      <h3>
        <code>.map()</code> — Transform Every Element
      </h3>
      <p>
        Returns a <strong>new array</strong> with each element transformed by
        the callback. The original array is never mutated. In React, this is
        how you render lists from data.
      </p>
      <p>
        Read this example in two steps: first, compute <code>mapped</code> from
        source data; second, render <code>mapped</code> with JSX. This split
        keeps rendering declarative and makes transformations easier to debug.
      </p>
      <div className="demo-area">
        <div className="demo-row">
          <span style={{ fontSize: '0.85rem' }}>Suffix:</span>
          {['.js', '.ts', ' Framework', ''].map((s) => (
            <button
              key={s}
              style={{
                background: suffix === s ? 'var(--accent)' : 'var(--text-muted)',
                padding: '4px 12px',
                fontSize: '0.8rem',
              }}
              onClick={() => setSuffix(s)}
            >
              {s || '(none)'}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
          {mapped.map((item) => (
            <span
              key={item}
              style={{
                background: 'var(--code-bg)',
                border: '1px solid var(--border)',
                padding: '6px 14px',
                borderRadius: 8,
                fontSize: '0.88rem',
                fontWeight: 500,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <CodeBlock>{`const mapped = items.map(item => \`\${item}\${suffix}\`);

// React rendering pattern
{mapped.map(item => <span key={item}>{item}</span>)}`}</CodeBlock>
    </div>
  );
}
