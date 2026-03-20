import ChapterLayout from '../../components/ChapterLayout';
import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm';
import FormValidation from './FormValidation';

export default function Ch8() {
  return (
    <ChapterLayout
      title="Chapter 8: Forms & Events"
      description="Controlled vs uncontrolled inputs, event handling callbacks, and client-side validation patterns."
    >
      <div className="demo-section">
        <h3>How to study this chapter</h3>
        <p>
          Read these lessons as form design trade-offs. Controlled forms provide
          precision and live validation; uncontrolled forms reduce state wiring
          for simple capture; validation combines event handling with clear user
          feedback.
        </p>
        <p>
          Compare how each approach stores input values, when errors appear, and
          how easy it is to extend behavior (formatting, debounced checks, submit
          guards, and accessibility messaging).
        </p>
      </div>
      <ControlledForm />
      <UncontrolledForm />
      <FormValidation />
    </ChapterLayout>
  );
}
