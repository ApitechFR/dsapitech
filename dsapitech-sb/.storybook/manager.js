import { addons } from '@storybook/manager-api';
import { getPreferredColorScheme } from './dsapitech-theme';
import { version } from '../../package.json';

addons.setConfig({
  theme: getPreferredColorScheme(),
});

window.addEventListener('load', (event) => {
  const title = document.querySelector('#dsapitech button');
  title.append(` ${version}`);
})
