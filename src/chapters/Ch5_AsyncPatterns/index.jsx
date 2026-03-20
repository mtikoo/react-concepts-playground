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
      <PromiseDemo />
      <AsyncAwaitDemo />
      <CallbackDemo />
    </ChapterLayout>
  );
}
