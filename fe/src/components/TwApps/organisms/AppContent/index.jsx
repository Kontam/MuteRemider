import React, { Component } from 'react';
import { connect } from 'react-redux';

import MuterMenu from '../../molecules/MuterMenu';
import MutedUserList from '../../MuteReminder/containers/MutedUserList';
// import FatalMessage from '../MuteReminder/components/FatalMessage';

/**
 * 各
 */
class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { errMessage } = this.props;
    return (
      <div className="mutereminder">
        <MuterMenu />
        {/* { errMessage ? <FatalMessage /> : <MutedUserList /> } */}
      </div>
    );
  }
}

export default connect(
  state => ({
    errMessage: state.errMessage,
  }),
)(ListContainer);
