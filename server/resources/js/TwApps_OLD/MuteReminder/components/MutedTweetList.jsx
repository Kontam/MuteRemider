import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwAppsConst from '../../TwAppsConst';
import MutedTweet from './MutedTweet';

class MutedTweetList extends Component {

  render() {
    const {
      showTweets, mutedTweets, listHeight, listClassName, itemClassName
    } = this.props;
    switch (showTweets) {
    case TwAppsConst.SHOW_TWEETS_OPENED:
      this.ulStyle = {
        borderTop: `1px solid ${TwAppsConst.STYLE_DARK_GRAY}`,
        display: 'block',
        maxHeight: listHeight,
      };
      break;
    default:
      this.ulStyle = {
        maxHeight: 0,
      };
    }

    return (
      <ul
        className={`muted-tweet-list ${listClassName}`}
        style={this.ulStyle}
      >
        {
          mutedTweets.map(mutedTweet => (
            <MutedTweet
              key={mutedTweet.tweet_id}
              mutedTweet={mutedTweet}
              itemClassName={itemClassName}
            />
          ))
        }
      </ul>
    );
  }
}

MutedTweetList.propTypes = {
  showTweets: PropTypes.string.isRequired,
  mutedTweets: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  listClassName: PropTypes.string.isRequired,
  itemClassName: PropTypes.string.isRequired,
};

export default connect(
  state => ({ mutedUsers: state.mutedUsers }),
)(MutedTweetList);
