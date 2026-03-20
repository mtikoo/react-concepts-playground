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
      <ControlledForm />
      <UncontrolledForm />
      <FormValidation />
    </ChapterLayout>
  );
}
