import { useParams, useNavigate } from 'react-router-dom';

const USERS = {
  1: { name: 'Alice', email: 'alice@example.com', role: 'admin', bio: 'Loves coding and coffee.' },
  2: { name: 'Bob', email: 'bob@example.com', role: 'user', bio: 'Weekend hiker.' },
  3: { name: 'Charlie', email: 'charlie@example.com', role: 'user', bio: 'Music enthusiast.' },
  4: { name: 'Diana', email: 'diana@example.com', role: 'admin', bio: 'Open source contributor.' },
  5: { name: 'Eve', email: 'eve@example.com', role: 'user', bio: 'Cat person.' },
};

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = USERS[id];

  if (!user) {
    return (
      <div>
        <h4>User not found</h4>
        <button onClick={() => navigate('/ch6')}>Back to list</button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        style={{ marginBottom: 16, background: 'var(--text-muted)' }}
      >
        &larr; Back
      </button>
      <div className="user-card">
        <h4>{user.name}</h4>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <div>{user.email} &middot; {user.role}</div>
          <div style={{ marginTop: 8 }}>{user.bio}</div>
        </div>
      </div>
      <p style={{ marginTop: 12, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        Route param <code>id</code> = <strong>{id}</strong> (from <code>useParams</code>).
        The back button uses <code>useNavigate(-1)</code>.
      </p>
    </div>
  );
}
