import ChapterLayout from '../../components/ChapterLayout';
import PromiseDemo from './PromiseDemo';
import AsyncAwaitDemo from './AsyncAwaitDemo';
import CallbackDemo from './CallbackDemo';

export default function Ch5() {
  return (
    <ChapterLayout
      title="Chapter 5: Async Patterns"
      description="Three ways to handle asynchronous work in JavaScript: raw Promises, async/await, and converting callback APIs to Promises."
    >
      <div className="demo-section">
        <h3>How to study this chapter</h3>
        <p>
          All three lessons solve the same core problem: asynchronous control
          flow with loading, success, and failure states. Compare them by reading
          each lesson in this order: Promise chain, async/await, then callback
          conversion.
        </p>
        <p>
          As you test the demos, pay attention to state transitions. Reliable
          async UI code always answers: when to start loading, how to recover
          from errors, and how to prevent stale requests from updating UI.
        </p>
      </div>
      <PromiseDemo />
      <AsyncAwaitDemo />
      <CallbackDemo />
    </ChapterLayout>
  );
}
