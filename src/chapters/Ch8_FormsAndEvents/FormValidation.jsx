import { useState } from 'react';

function validate(values) {
  const errors = {};
  if (!values.username.trim()) {
    errors.username = 'Username is required';
  } else if (values.username.length < 3) {
    errors.username = 'Must be at least 3 characters';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be at least 6 characters';
  }
  return errors;
}

export default function FormValidation() {
  const [values, setValues] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSuccess(true);
  };

  return (
    <div className="demo-section">
      <h3>Form Validation</h3>
      <p>
        Client-side validation on submit. Errors clear as the user types.
        Try submitting empty or short values.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="val-user">Username</label>
          <input
            id="val-user"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="min 3 chars"
          />
          {errors.username && <span className="field-error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="val-pass">Password</label>
          <input
            id="val-pass"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="min 6 chars"
          />
          {errors.password && <span className="field-error">{errors.password}</span>}
        </div>
        <button type="submit">Validate &amp; Submit</button>
      </form>
      {success && (
        <div className="success-text" style={{ marginTop: 12 }}>
          Validation passed!
        </div>
      )}
    </div>
  );
}
