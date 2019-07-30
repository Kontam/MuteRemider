import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwAppsConst from '../TwAppsConst';
import MutedTweet from './MutedTweet';

class MutedTweetList extends Component {
  constructor(props) {
    super(props);
    this.ulStyle = {};
    // this.listClassName = `list-${this.props.screenName}`;
    // this.itemClassName = `user-${this.props.screenName}`;
  }

  // componentDidMount() {
  //   this.itemElems = document.getElementsByClassName(this.itemClassName);
  //   this.listElems = document.getElementsByClassName(this.listClassName);
  //   this.listElems[0].addEventListener('load', () => {
  //     console.log('laode');
  //     this.listHeight = 0;
  //     for (let i = 0; i < this.listElems.length; i += 1) {
  //       this.listHeight += this.listElems[i].clientHeight;
  //     }
  //   });
  // }

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
    case TwAppsConst.SHOW_TWEETS_CLOSED:
      this.ulStyle = {
        maxHeight: 0,
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
  // screenName: PropTypes.string.isRequired,
  listClassName: PropTypes.string.isRequired,
  itemClassName: PropTypes.string.isRequired,
};

export default connect(
  state => ({ mutedUsers: state.mutedUsers }),
)(MutedTweetList);
