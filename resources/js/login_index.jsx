import React from 'react';
import ReactDOM from 'react-dom';

import MuterLogin from './LoginPage/components/MuterLogin';

const loginElem = document.querySelector('.react-login');

ReactDOM.render(
  <MuterLogin />,
  loginElem,
);
