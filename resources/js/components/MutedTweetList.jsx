import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwAppsConst from '../TwAppsConst';
import MutedTweet from './MutedTweet';

const MutedTweetList = ({ showTweets, mutedTweets }) => {
  let listClassName = 'muted-tweet-list';
  switch (showTweets) {
  case TwAppsConst.SHOW_TWEETS_OPENED:
    listClassName = 'muted-tweet-list tweet-list-open-animation';
    break;
  case TwAppsConst.SHOW_TWEETS_CLOSED:
    listClassName = 'muted-tweet-list tweet-list-close-animation';
    break;
  default:
    listClassName = 'muted-tweet-list';
  }

  return (
    <ul className={listClassName}>
      {
        mutedTweets.map(mutedTweet => (
          <MutedTweet
            key={mutedTweet.tweet_id}
            mutedTweet={mutedTweet}
          />
        ))
      }
    </ul>
  );
};

MutedTweetList.propTypes = {
  showTweets: PropTypes.string.isRequired,
  mutedTweets: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(
  state => ({ mutedUsers: state.mutedUsers }),
)(MutedTweetList);
