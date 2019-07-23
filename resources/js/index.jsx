import React from 'react';
import ReactDOM from 'react-dom';

import MuteReminder from './components/MuteReminder';

const appElem = document.querySelector('.react-homeapp');

if (appElem) {
  ReactDOM.render(
    <MuteReminder />,
    appElem,
  );
}
