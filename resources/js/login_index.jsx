import React from 'react';
import ReactDOM from 'react-dom';

import LoginPage from './LoginPage/components/LoginPage';

const loginElem = document.querySelector('.react-login');

ReactDOM.render(
  <LoginPage />,
  loginElem,
);
