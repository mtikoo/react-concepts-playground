import { useState, useEffect, useRef } from 'react';

export default function AsyncAwaitDemo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);

  const fetchPosts = async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=5',
        { signal: controller.signal }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  return (
    <div className="demo-section">
      <h3>async / await</h3>
      <p>
        Same fetch rewritten with <code>async/await</code> and
        <code> try/catch</code>. Uses an <code>AbortController</code> to
        cancel in-flight requests on unmount or re-fetch.
      </p>
      <div className="demo-area">
        <button onClick={fetchPosts} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Posts (async/await)'}
        </button>
        {error && <div className="error-text">{error}</div>}
        {posts.map((p) => (
          <div key={p.id} className="user-card">
            <strong>#{p.id}</strong> {p.title}
          </div>
        ))}
      </div>
    </div>
  );
}
