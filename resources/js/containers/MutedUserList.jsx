import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwAppsConst from '../TwAppsConst';
import MutedUserInfo from '../components/MutedUserInfo';
import { requestMutedUsers } from '../actions';

class MutedUserList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestMutedUsers(TwAppsConst.MUTED_USERS_ENDPOINT);
  }

  render() {
    const { mutedUsers, muted } = this.props;
    return (
      <div className="muter-content">
        <h2 className="muter-discription">あなたがミュートしているユーザー</h2>
        <ul className="muted-user-list">
          {
            mutedUsers.map((mutedUserInfo, index) => (
              <MutedUserInfo
                key={mutedUserInfo.muted_user.user_id}
                mutedUserInfo={mutedUserInfo}
                index={index}
                isUserMuted={muted[index]}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

MutedUserList.propTypes = {
  requestMutedUsers: PropTypes.func.isRequired,
  mutedUsers: PropTypes.arrayOf(
    PropTypes.shape({
      muted_user: PropTypes.shape({
        user_id: PropTypes.number,
      }),
    }),
  ).isRequired,
  muted: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default connect(
  state => ({
    mutedUsers: state.mutedUsers,
    muted: state.muted,
  }),
  {
    requestMutedUsers,
  },
)(MutedUserList);
