import React from 'react';
import ReactDOM from 'react-dom';

import base_path from 'base_path';

import LoginPage from './LoginPage/components/LoginPage';

const loginElem = document.querySelector('.react-login');

ReactDOM.render(
  <LoginPage
    basePath={base_path}
  />,
  loginElem,
);
