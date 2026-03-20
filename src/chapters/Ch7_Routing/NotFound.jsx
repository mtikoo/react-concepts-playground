import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '40px 0' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: 8 }}>404</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 16 }}>
        This route does not exist inside the routing demo.
      </p>
      <Link to="/ch6" style={{ color: 'var(--accent)' }}>
        Back to User List
      </Link>
    </div>
  );
}
