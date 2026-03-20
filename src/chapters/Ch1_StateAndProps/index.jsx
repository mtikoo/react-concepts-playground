import { useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';
import Counter from './Counter';
import Greeting from './Greeting';
import ParentChild from './ParentChild';

const COLORS = ['#4f46e5', '#0891b2', '#059669', '#d97706', '#dc2626'];

export default function Ch1() {
  const [nameInput, setNameInput] = useState('React');
  const [colorIdx, setColorIdx] = useState(0);

  return (
    <ChapterLayout
      title="Chapter 1: State & Props"
      description="useState for local state, passing data via props, and lifting state to a common parent."
    >
      <div className="demo-section">
        <h3>How to study this chapter</h3>
        <p>
          Start with <strong>Counter</strong> to understand local component state,
          then move to <strong>Greeting</strong> to see one-way data flow through
          props, and finish with <strong>Lifting State Up</strong> to learn how
          siblings share data through a parent.
        </p>
        <p>
          As you interact with each lesson, ask yourself two questions:
          <em> where does state live?</em> and <em>who is allowed to change it?</em>.
          Those two answers will guide almost every React design decision.
        </p>
      </div>

      <Counter />

      <div className="demo-section">
        <h3>Props Controller</h3>
        <p>Change these values to see how the Greeting component below responds.</p>
        <div className="demo-area">
          <div className="demo-row">
            <input
              style={{ maxWidth: 200 }}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Greeting name"
            />
            <button onClick={() => setColorIdx((i) => (i + 1) % COLORS.length)}>
              Cycle Color
            </button>
          </div>
        </div>
      </div>

      <Greeting name={nameInput} color={COLORS[colorIdx]} />
      <ParentChild />
    </ChapterLayout>
  );
}
