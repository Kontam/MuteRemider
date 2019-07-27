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
    const { mutedUsers } = this.props;
    return (
      <div className="muter-content">
        <h2 className="muter-discription">あなたがミュートしているユーザー</h2>
        <div className="muted-user-list">
          {
            mutedUsers.map(mutedUserInfo => (
              <MutedUserInfo
                key={mutedUserInfo.muted_user.user_id}
                mutedUserInfo={mutedUserInfo}
              />
            ))
          }
        </div>
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
};

export default connect(
  state => ({
    mutedUsers: state.mutedUsers,
  }),
  {
    requestMutedUsers,
  },
)(MutedUserList);
