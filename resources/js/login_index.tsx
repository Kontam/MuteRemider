import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './LoginPage/reducers';
import base_path from 'base_path';

import LoginPage from './LoginPage/components/LoginPage';

const loginElem = document.querySelector('.react-login');
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <LoginPage
      basePath={base_path}
    />
  </Provider>,
  loginElem,
);
