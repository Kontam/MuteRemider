import React, { Component } from 'react';
import { connect } from 'react-redux';

import MuterMenu from '../components/MuterMenu';
import MutedUserList from './MutedUserList';
import FatalMessage from '../components/FatalMessage';


class MuteReminder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { errMessage } = this.props;
    return (
      <div className="mutereminder">
        <MuterMenu />
        { errMessage ? <FatalMessage /> : <MutedUserList /> }
      </div>
    );
  }
}

export default connect(
  state => ({
    errMessage: state.errMessage,
  }),
)(MuteReminder);
