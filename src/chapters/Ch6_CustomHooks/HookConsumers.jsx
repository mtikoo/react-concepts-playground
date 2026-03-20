import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';
import CodeBlock from '../../components/CodeBlock';

function LocalStorageConsumer() {
  const [name, setName] = useLocalStorage('playground-name', '');

  return (
    <div className="demo-section">
      <h3>useLocalStorage</h3>
      <p>
        Type below -- the value persists in <code>localStorage</code>. Refresh
        the page and it will still be there.
      </p>
      <p>
        The component code stays simple because serialization and persistence are
        hidden in the hook. This is the core custom-hook benefit: reusable logic
        with a clean, familiar state-like API.
      </p>
      <div className="demo-area">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Persistent name..."
          style={{ maxWidth: 300 }}
        />
        <div>
          Stored value: <strong>{name || '(empty)'}</strong>
        </div>
      </div>
      <CodeBlock>{`const [name, setName] = useLocalStorage('key', '');`}</CodeBlock>
    </div>
  );
}

function FetchConsumer() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );

  return (
    <div className="demo-section">
      <h3>useFetch</h3>
      <p>
        Returns <code>{'{ data, loading, error }'}</code>. Automatically aborts
        on unmount or URL change.
      </p>
      <p>
        This pattern centralizes request lifecycle concerns in one place, so UI
        components only decide what to render for loading, error, or success.
        That keeps fetch behavior consistent across the app.
      </p>
      <div className="demo-area">
        {loading && <div className="loading">Loading todos...</div>}
        {error && <div className="error-text">{error}</div>}
        {data && (
          <ul className="todo-list">
            {data.map((t) => (
              <li key={t.id}>
                <input type="checkbox" checked={t.completed} readOnly />
                <span className={t.completed ? 'done' : ''}>{t.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <CodeBlock>{`const { data, loading, error } = useFetch(url);`}</CodeBlock>
    </div>
  );
}

export { LocalStorageConsumer, FetchConsumer };
