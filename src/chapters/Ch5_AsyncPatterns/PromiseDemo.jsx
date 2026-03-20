import { useState } from 'react';

export default function PromiseDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setUsers(data.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="demo-section">
      <h3>Promise <code>.then() / .catch()</code></h3>
      <p>
        Classic promise chain: <code>fetch().then().catch()</code>.
        Manages <code>loading</code> and <code>error</code> state manually.
      </p>
      <p>
        Follow the flow line by line: set pending state, parse response only
        when status is valid, store data, and handle failures in one place. This
        explicit chain is great for understanding foundational async behavior.
      </p>
      <div className="demo-area">
        <button onClick={fetchUsers} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Users (Promise)'}
        </button>
        {error && <div className="error-text">{error}</div>}
        {users.map((u) => (
          <div key={u.id} className="user-card">
            <strong>{u.name}</strong> &mdash; {u.email}
          </div>
        ))}
      </div>
    </div>
  );
}
