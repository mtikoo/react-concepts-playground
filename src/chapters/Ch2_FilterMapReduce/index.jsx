import ChapterLayout from '../../components/ChapterLayout';
import MapDemo from './MapDemo';
import FilterDemo from './FilterDemo';
import ReduceDemo from './ReduceDemo';
import FindSomeEveryDemo from './FindSomeEveryDemo';
import ChainingDemo from './ChainingDemo';

export default function Ch2() {
  return (
    <ChapterLayout
      title="Chapter 2: Filter, Map & Reduce"
      description="map, filter, reduce, find, some, every — the functional toolkit React relies on for transforming and rendering data."
    >
      <MapDemo />
      <FilterDemo />
      <ReduceDemo />
      <FindSomeEveryDemo />
      <ChainingDemo />
    </ChapterLayout>
  );
}
