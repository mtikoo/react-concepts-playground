import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

const USERS = [
  { id: 1, name: 'Alice', role: 'admin', active: true },
  { id: 2, name: 'Bob', role: 'user', active: true },
  { id: 3, name: 'Charlie', role: 'user', active: false },
  { id: 4, name: 'Diana', role: 'admin', active: true },
  { id: 5, name: 'Eve', role: 'user', active: false },
];

export default function FindSomeEveryDemo() {
  const [searchId, setSearchId] = useState(1);

  const found = USERS.find((u) => u.id === searchId);
  const hasAdmin = USERS.some((u) => u.role === 'admin');
  const allActive = USERS.every((u) => u.active);
  const activeCount = USERS.filter((u) => u.active).length;

  return (
    <div className="demo-section">
      <h3>
        <code>.find()</code>, <code>.some()</code>, <code>.every()</code>
      </h3>
      <p>
        <code>find</code> returns the <strong>first match</strong> (or{' '}
        <code>undefined</code>). <code>some</code> returns <code>true</code> if{' '}
        <strong>at least one</strong> element matches. <code>every</code> returns{' '}
        <code>true</code> only if <strong>all</strong> match.
      </p>
      <p>
        Use these methods when you need quick checks rather than full list
        transformations. They read like business rules: “find this user,”
        “does any admin exist,” and “are all users active.”
      </p>
      <div className="demo-area">
        <div className="demo-row">
          <label style={{ fontSize: '0.85rem' }}>Find user by ID:</label>
          {USERS.map((u) => (
            <button
              key={u.id}
              style={{
                background: searchId === u.id ? 'var(--accent)' : 'var(--text-muted)',
                padding: '4px 12px',
                fontSize: '0.8rem',
              }}
              onClick={() => setSearchId(u.id)}
            >
              {u.id}
            </button>
          ))}
        </div>

        {found ? (
          <div className="user-card">
            <strong>{found.name}</strong> — {found.role},{' '}
            {found.active ? 'active' : 'inactive'}
          </div>
        ) : (
          <div className="error-text">No user with ID {searchId}</div>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 10,
            marginTop: 4,
          }}
        >
          <div
            style={{
              padding: '10px 14px',
              background: 'var(--code-bg)',
              borderRadius: 8,
              fontSize: '0.84rem',
              textAlign: 'center',
            }}
          >
            <div style={{ color: 'var(--text-muted)', marginBottom: 4 }}>.some(admin)</div>
            <strong style={{ color: hasAdmin ? 'var(--success)' : 'var(--danger)' }}>
              {String(hasAdmin)}
            </strong>
          </div>
          <div
            style={{
              padding: '10px 14px',
              background: 'var(--code-bg)',
              borderRadius: 8,
              fontSize: '0.84rem',
              textAlign: 'center',
            }}
          >
            <div style={{ color: 'var(--text-muted)', marginBottom: 4 }}>.every(active)</div>
            <strong style={{ color: allActive ? 'var(--success)' : 'var(--danger)' }}>
              {String(allActive)}
            </strong>
          </div>
          <div
            style={{
              padding: '10px 14px',
              background: 'var(--code-bg)',
              borderRadius: 8,
              fontSize: '0.84rem',
              textAlign: 'center',
            }}
          >
            <div style={{ color: 'var(--text-muted)', marginBottom: 4 }}>active count</div>
            <strong>
              {activeCount}/{USERS.length}
            </strong>
          </div>
        </div>
      </div>
      <CodeBlock>{`const found = users.find(u => u.id === searchId);
const hasAdmin = users.some(u => u.role === 'admin');
const allActive = users.every(u => u.active);`}</CodeBlock>
    </div>
  );
}
