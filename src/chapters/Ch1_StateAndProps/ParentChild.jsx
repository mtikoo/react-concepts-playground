import { useState } from 'react';

function ChildInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type your name..."
    />
  );
}

export default function ParentChild() {
  const [name, setName] = useState('');

  return (
    <div className="demo-section">
      <h3>Lifting State Up</h3>
      <p>
        The parent owns the state (<code>name</code>) and passes it down along
        with a callback (<code>onChange</code>). The child calls the callback
        to update the parent.
      </p>
      <div className="demo-area">
        <ChildInput value={name} onChange={setName} />
        <div>
          Parent sees: <strong>{name || '(nothing yet)'}</strong>
        </div>
      </div>
    </div>
  );
}
