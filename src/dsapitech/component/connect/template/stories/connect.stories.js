import { renderConnect } from './connect';
import { connectArgs, connectArgTypes, connectProps } from './connect-arg-types';

const render = (args) => renderConnect({ connect: connectProps(args) });

export default {
  id: 'connect',
  title: 'DSApitech/Component/Connect',
  render: render,
  argTypes: connectArgTypes,
  args: connectArgs
};

export const ConnectStory = {
  tags: ['!autodocs'],
  args: {}
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {}
};

export const ConnectPlusStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: 'france-connect-plus',
    variant: 'plus'
  }
};
