import { renderStepper } from './stepper';
import { stepperArgs, stepperArgTypes, stepperProps } from './stepper-arg-types';

const render = (args) => renderStepper({ stepper: stepperProps(args) });

export default {
  id: 'stepper',
  title: 'DSApitech/Component/Stepper',
  render: render,
  argTypes: stepperArgTypes,
  args: stepperArgs
};

export const StepperStory = {
  tags: ['autodocs'],
  args: {}
};
