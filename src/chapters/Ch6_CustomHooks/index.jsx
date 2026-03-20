import ChapterLayout from '../../components/ChapterLayout';
import { LocalStorageConsumer, FetchConsumer } from './HookConsumers';

export default function Ch6() {
  return (
    <ChapterLayout
      title="Chapter 6: Custom Hooks"
      description="Extract reusable logic into custom hooks. A custom hook is just a function that calls other hooks."
    >
      <LocalStorageConsumer />
      <FetchConsumer />
    </ChapterLayout>
  );
}
