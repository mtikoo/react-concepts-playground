import { useState } from 'react';

function simulateCallbackAPI(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('ID must be positive'), null);
    } else {
      callback(null, {
        id,
        name: `User ${id}`,
        email: `user${id}@example.com`,
      });
    }
  }, 800);
}

function callbackToPromise(id) {
  return new Promise((resolve, reject) => {
    simulateCallbackAPI(id, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

export default function CallbackDemo() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(1);

  const handleCallbackStyle = () => {
    setLoading(true);
    setError(null);
    setResult(null);

    simulateCallbackAPI(userId, (err, data) => {
      setLoading(false);
      if (err) setError(err.message);
      else setResult(data);
    });
  };

  const handlePromiseStyle = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await callbackToPromise(userId);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="demo-section">
      <h3>Callback Pattern</h3>
      <p>
        Simulates a Node-style <code>(err, data)</code> callback API, then
        shows how to wrap it in a Promise so you can <code>await</code> it.
        Try setting ID to 0 to trigger the error path.
      </p>
      <p>
        Many legacy libraries still expose callback APIs. Promisifying them is a
        practical migration strategy that lets modern React code use
        <code> async/await</code> consistently without rewriting the original
        source API.
      </p>
      <div className="demo-area">
        <div className="demo-row">
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
            style={{ maxWidth: 80 }}
          />
          <button onClick={handleCallbackStyle} disabled={loading}>
            Callback
          </button>
          <button onClick={handlePromiseStyle} disabled={loading}>
            Promisified
          </button>
        </div>
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error-text">{error}</div>}
        {result && (
          <div className="user-card">
            <strong>{result.name}</strong> &mdash; {result.email}
          </div>
        )}
      </div>
    </div>
  );
}
