import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UnmuteButton from './UnmuteButton';
import ShowTweetsButton from './ShowTweetsButton';
import MutedTweetList from './MutedTweetList';
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

  handleShowTweetsClicked() {
    const { showTweets } = this.state;
    if (showTweets === TwAppsConst.SHOW_TWEETS_OPENED) {
      this.setState({ showTweets: TwAppsConst.SHOW_TWEETS_CLOSED });
      return;
    }
    this.setState({ showTweets: TwAppsConst.SHOW_TWEETS_OPENED });
  }

  render() {
    const { mutedUserInfo } = this.props;
    const mutedUser = mutedUserInfo.muted_user;
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
        <MutedTweetList
          showTweets={showTweets}
          mutedTweets={mutedUserInfo.tweets_info}
        />
        <div className="muted-bottom-container">
          <UnmuteButton
            muted={muted}
            onClick={() => { this.handleUnmuteClicked(); }}
          />
          <ShowTweetsButton
            showTweets={showTweets}
            onClick={() => { this.handleShowTweetsClicked(); }}
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
    tweets_info: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
  }).isRequired,
};

export default MutedUserInfo;
