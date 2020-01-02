import { configure, addDecorator,addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import viewPorts from './viewports';
import { theme } from '../src/modules/styles/theme';

addParameters({
  viewport: {
    viewports: viewPorts, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'PC',
  },
});

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

// automatically import all files ending in *.stories.js
configure(require.context('../src/components/', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/), module);
