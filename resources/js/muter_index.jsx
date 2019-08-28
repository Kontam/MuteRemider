import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './TwApps/reducers';
import basePath from 'base_path';

import TwitterApps from './TwApps/containers/TwitterApps';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
  // applyMiddleware(thunk),
);

const appElem = document.querySelector('.react-homeapp');

if (appElem) {
  ReactDOM.render(
    <Provider store={store}>
      <TwitterApps
        baseUrl={basePath}
      />
    </Provider>,
    appElem,
  );
}
