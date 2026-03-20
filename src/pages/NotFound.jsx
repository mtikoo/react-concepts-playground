import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <h1 style={{ fontSize: '5rem', fontWeight: 800, margin: 0, color: 'var(--accent)' }}>
        Oops!
      </h1>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 600, margin: '12px 0 8px' }}>
        Page Not Found
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 8, fontSize: '0.95rem' }}>
        No route matches <code style={{ background: 'var(--code-bg)', padding: '2px 6px', borderRadius: 4 }}>{pathname}</code>
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginTop: 20,
          padding: '10px 24px',
          background: 'var(--accent)',
          color: '#fff',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '0.9rem',
        }}
      >
        Go to Chapter 1
      </Link>
    </div>
  );
}
