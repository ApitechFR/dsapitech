import { renderSidemenu } from './sidemenu';
import { sidemenuArgs, sidemenuArgTypes, sidemenuProps } from './sidemenu-arg-types';

const render = (args) => renderSidemenu({ sidemenu: sidemenuProps(args) });

export default {
  id: 'sidemenu',
  title: 'DSApitech/Component/Sidemenu',
  render: render,
  argTypes: sidemenuArgTypes,
  args: sidemenuArgs
};

export const SidemenuStory = {
  tags: ['autodocs'],
  args: {}
};
