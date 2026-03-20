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
      <div className="demo-section">
        <h3>How to study this chapter</h3>
        <p>
          Treat this chapter as a data-transformation pipeline. Learn each method
          in isolation first, then observe how they combine to form clean UI logic.
          React list rendering is mostly about transforming raw data into exactly
          the shape your component needs.
        </p>
        <p>
          Focus on the return value of each method: arrays from
          <code> map/filter</code>, booleans from <code>some/every</code>, single
          values from <code>reduce/find</code>. Knowing these return types makes
          JSX rendering much easier to reason about.
        </p>
      </div>
      <MapDemo />
      <FilterDemo />
      <ReduceDemo />
      <FindSomeEveryDemo />
      <ChainingDemo />
    </ChapterLayout>
  );
}
