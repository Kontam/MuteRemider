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
      listHeight: 0,
      muted: true,
    };
    const mutedUser = this.props.mutedUserInfo.muted_user;
    this.userClassName = `user-${mutedUser.screen_name}`;
    this.listClassName = `list-${mutedUser.screen_name}`;
    this.itemClassName = `item-${mutedUser.screen_name}`;
  }

  componentDidMount() {
    this.itemElems = document.getElementsByClassName(this.itemClassName);
    this.userElems = document.getElementsByClassName(this.userClassName);
  }

  handleUnmuteClicked() {
    const { muted } = this.state;
    this.setState({ muted: !muted });
  }

  handleShowTweetsClicked() {
    const { showTweets } = this.state;
    if (showTweets === TwAppsConst.SHOW_TWEETS_OPENED) {
      this.setState({ showTweets: TwAppsConst.SHOW_TWEETS_CLOSED });
      // 固定ヘッダで隠れる分を考慮してスクロールする
      window.scrollTo(0, this.userElems[0].offsetTop - 50);
      return;
    }
    // アニメーション用にツイートリストの高さを計算する
    // ListのComponentDidMountでは画像ロード前の高さになってしまうためズレる
    let listHeight = 0;
    for (let i = 0; i < this.itemElems.length; i += 1) {
      listHeight += this.itemElems[i].clientHeight;
    }
    this.setState({ listHeight });
    this.setState({ showTweets: TwAppsConst.SHOW_TWEETS_OPENED });
  }

  render() {
    const { mutedUserInfo } = this.props;
    const mutedUser = mutedUserInfo.muted_user;
    const { showTweets, muted, listHeight } = this.state;
    return (
      <li className={`muted-user-info ${this.userClassName}`}>
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
          listClassName={this.listClassName}
          itemClassName={this.itemClassName}
          listHeight={listHeight}
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
