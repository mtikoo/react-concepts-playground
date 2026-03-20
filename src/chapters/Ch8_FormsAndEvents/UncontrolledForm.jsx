import { useRef, useState } from 'react';

export default function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <div className="demo-section">
      <h3>Uncontrolled Form</h3>
      <p>
        Uses <code>useRef</code> to read values on submit instead of tracking
        every keystroke. The DOM owns the state.
      </p>
      <p>
        Uncontrolled inputs are useful for lightweight forms or quick
        integrations. Because React does not track each keystroke, this can be
        simpler, but it offers less real-time control than controlled inputs.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="unctrl-name">Name</label>
          <input id="unctrl-name" ref={nameRef} placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="unctrl-email">Email</label>
          <input id="unctrl-email" ref={emailRef} type="email" placeholder="you@example.com" />
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
