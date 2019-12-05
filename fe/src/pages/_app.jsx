import App from 'next/app';
import React from 'react';
import withReduxStore from '../modules/with-redux-store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from '../modules/styles/theme';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
