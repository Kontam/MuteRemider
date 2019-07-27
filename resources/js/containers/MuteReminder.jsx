import React from 'react';

import MuterMenu from '../components/MuterMenu';
import MutedUserList from './MutedUserList';

const MuteReminder = () => (
  <div className="mutereminder">
    <MuterMenu />
    <MutedUserList />
  </div>
);

export default MuteReminder;
