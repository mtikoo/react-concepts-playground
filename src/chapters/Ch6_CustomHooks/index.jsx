import ChapterLayout from '../../components/ChapterLayout';
import { LocalStorageConsumer, FetchConsumer } from './HookConsumers';

export default function Ch6() {
  return (
    <ChapterLayout
      title="Chapter 6: Custom Hooks"
      description="Extract reusable logic into custom hooks. A custom hook is just a function that calls other hooks."
    >
      <div className="demo-section">
        <h3>How to study this chapter</h3>
        <p>
          A custom hook is not a new React feature; it is a pattern for reusing
          stateful logic. Study each consumer and identify what logic is hidden
          behind the hook API and what UI logic stays in the component.
        </p>
        <p>
          Good hooks expose a minimal interface and keep side effects internal.
          This makes your components easier to read, test, and reuse across
          multiple screens.
        </p>
      </div>
      <LocalStorageConsumer />
      <FetchConsumer />
    </ChapterLayout>
  );
}
