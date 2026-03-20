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
      <EffectDemo />
      <RefDemo />
      <MemoCallbackDemo />
      <ReducerDemo />
    </ChapterLayout>
  );
}
