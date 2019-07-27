import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UnmuteButton from './UnmuteButton';
import ShowTweetButton from './ShowTweetButton';
import TwAppsConst from '../TwAppsConst';

class MutedUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTweets: TwAppsConst.SHOW_TWEETS_INITIAL,
      muted: true,
    };
  }

  handleUnmuteClicked() {
    const { muted } = this.state;
    this.setState({ muted: !muted });
  }

  render() {
    const mutedUser = this.props.mutedUserInfo.muted_user;
    const { showTweets, muted } = this.state;
    return (
      <li className="muted-user-info">
        <div className="muted-top-container">
          <img className="muted-user-icon" src={mutedUser.profile_image_url_https} alt="icon" />
          <div className="muted-username-container">
            <p className="muted-user-name">{mutedUser.user_name}</p>
            <p className="muted-user-name">
              @
              {mutedUser.screen_name}
            </p>
          </div>
        </div>
        <div className="muted-bottom-container">
          <UnmuteButton
            muted={muted}
            onClick={() => { this.handleUnmuteClicked(); }}
          />
          <ShowTweetButton
            showTweets={showTweets}
          />
        </div>
      </li>
    );
  }
}

MutedUserInfo.propTypes = {
  mutedUserInfo: PropTypes.shape({
    muted_user: PropTypes.shape({
      user_name: PropTypes.string,
      screen_name: PropTypes.string,
      profile_image_url_https: PropTypes.string,
    }),
  }).isRequired,
};

export default MutedUserInfo;
