export default function Greeting({ name = 'World', color = 'var(--accent)' }) {
  return (
    <div className="demo-section">
      <h3>Greeting <code>props</code></h3>
      <p>
        This component receives <code>name</code> and <code>color</code> as
        props with default values. Try changing them from the parent.
      </p>
      <div className="demo-area">
        <div
          style={{
            padding: '12px 20px',
            borderRadius: 8,
            background: color,
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            display: 'inline-block',
          }}
        >
          Hello, {name}!
        </div>
      </div>
    </div>
  );
}
