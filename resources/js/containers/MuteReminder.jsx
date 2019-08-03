import React, { Component } from 'react';

import MuterMenu from '../components/MuterMenu';
import MutedUserList from './MutedUserList';


class MuteReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  handleLoad() {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div
        className="mutereminder"
        style={isLoading ? {} : { display: 'block' }}
        onLoad={() => { this.handleLoad(); }}
      >
        <MuterMenu />
        <MutedUserList />
      </div>
    );
  }
}

export default MuteReminder;
