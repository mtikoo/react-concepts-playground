import { Link, useSearchParams } from 'react-router-dom';

const ALL_USERS = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'user' },
  { id: 4, name: 'Diana', role: 'admin' },
  { id: 5, name: 'Eve', role: 'user' },
];

export default function UserList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const roleFilter = searchParams.get('role') || '';

  const filtered = roleFilter
    ? ALL_USERS.filter((u) => u.role === roleFilter)
    : ALL_USERS;

  return (
    <>
      <h4 style={{ marginBottom: 12 }}>User List</h4>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 12 }}>
        Uses <code>useSearchParams</code> for filtering. Click a user to
        navigate with <code>useParams</code>.
      </p>
      <div className="demo-row" style={{ marginBottom: 16 }}>
        <span style={{ fontSize: '0.85rem' }}>Filter:</span>
        <button
          style={{
            background: !roleFilter ? 'var(--accent)' : 'var(--text-muted)',
            padding: '4px 12px',
            fontSize: '0.8rem',
          }}
          onClick={() => setSearchParams({})}
        >
          All
        </button>
        <button
          style={{
            background: roleFilter === 'admin' ? 'var(--accent)' : 'var(--text-muted)',
            padding: '4px 12px',
            fontSize: '0.8rem',
          }}
          onClick={() => setSearchParams({ role: 'admin' })}
        >
          Admin
        </button>
        <button
          style={{
            background: roleFilter === 'user' ? 'var(--accent)' : 'var(--text-muted)',
            padding: '4px 12px',
            fontSize: '0.8rem',
          }}
          onClick={() => setSearchParams({ role: 'user' })}
        >
          User
        </button>
      </div>
      {filtered.map((u) => (
        <div key={u.id} className="user-card" style={{ marginBottom: 8 }}>
          <Link to={`users/${u.id}`} style={{ textDecoration: 'none', color: 'var(--accent)' }}>
            <strong>{u.name}</strong>
          </Link>{' '}
          &mdash; {u.role}
        </div>
      ))}
    </>
  );
}
