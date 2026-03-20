import { useState } from 'react';

export default function ControlledForm() {
  const [form, setForm] = useState({ name: '', email: '', role: 'user' });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ ...form });
  };

  return (
    <div className="demo-section">
      <h3>Controlled Form</h3>
      <p>
        Each input is controlled via <code>value</code> + <code>onChange</code>.
        React owns the state; the DOM reflects it.
      </p>
      <p>
        This approach gives you full control for formatting, instant validation,
        conditional UI, and submit guarding. The trade-off is more state wiring,
        but for complex forms it is usually the most maintainable pattern.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ctrl-name">Name</label>
          <input
            id="ctrl-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ctrl-email">Email</label>
          <input
            id="ctrl-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ctrl-role">Role</label>
          <select id="ctrl-role" name="role" value={form.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="success-text" style={{ marginTop: 12 }}>
          Submitted: {JSON.stringify(submitted)}
        </div>
      )}
    </div>
  );
}
