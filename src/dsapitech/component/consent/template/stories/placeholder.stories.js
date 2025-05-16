import { renderConsentPlaceholder } from './consent';
import { placeholderArgs, placeholderArgTypes, placeholderProps } from './placeholder-arg-types';

const render = (args) => renderConsentPlaceholder({ consent: placeholderProps(args) });

export default {
  id: 'placeholder',
  title: 'DSApitech/Component/Consent/Consent Placeholder',
  render: render,
  argTypes: placeholderArgTypes,
  args: placeholderArgs
};

export const ConsentPlaceholderStory = {
  tags: ['autodocs'],
  args: {}
};
