import ChapterLayout from '../../components/ChapterLayout';
import EffectDemo from './EffectDemo';
import RefDemo from './RefDemo';
import MemoCallbackDemo from './MemoCallbackDemo';
import ReducerDemo from './ReducerDemo';

export default function Ch3() {
  return (
    <ChapterLayout
      title="Chapter 3: Core Hooks"
      description="useEffect for side effects, useRef for DOM access and mutable values, useMemo/useCallback for performance, and useReducer for complex state logic."
    >
      <div className="demo-section">
        <h3>How to study this chapter</h3>
        <p>
          Hooks answer different questions: <code>useEffect</code> handles side
          effects, <code>useRef</code> stores mutable values without re-rendering,
          <code>useMemo/useCallback</code> optimize expensive work and stable
          references, and <code>useReducer</code> organizes multi-step state logic.
        </p>
        <p>
          Move through lessons in order and track dependencies carefully. Most
          hook bugs come from misunderstanding <em>when</em> code runs and what
          values are captured from previous renders.
        </p>
      </div>
      <EffectDemo />
      <RefDemo />
      <MemoCallbackDemo />
      <ReducerDemo />
    </ChapterLayout>
  );
}
