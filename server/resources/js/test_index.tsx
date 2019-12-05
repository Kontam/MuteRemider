import React from 'react';
import ReactDOM from 'react-dom';

import BlockReminder from './TwApps/BlockReminder/components/BlockReminder';

const testElement = document.querySelector('.react-test');

ReactDOM.render(
    <BlockReminder />,
    testElement,
);
