import { radioArgs, radioArgTypes, radioProps } from './radio-arg-types';
import { renderRadio } from './radio';

const render = (args) => renderRadio({ radio: radioProps(args) });

export default {
  id: 'radio',
  title: 'DSApitech/Component/Radio',
  render: render,
  argTypes: radioArgTypes,
  args: radioArgs
};

export const RadioStory = {
  args: {}
};
