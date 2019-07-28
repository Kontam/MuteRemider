import React from 'react';
import PropTypes from 'prop-types';

import convertBreak from '../modules/convertBreak';

const MutedTweet = ({ mutedTweet }) => {
  return (
    <li className="muted-tweet">
      {mutedTweet.tweet_text}
      <ul className="tweet-media-container">
        {
          mutedTweet.media_infos.map(media => (
            <li
              className="tweet-media-item"
              key={media.media_url_https}
            >
              <img alt="media" className="tweet-media" src={media.media_url_https} />
            </li>
          ))
        }
      </ul>
      <div className="tweet-info-container">
        <div className="tweet-count-info">
          <div className="retweet-icon" />
          <p className="tweet-retweet-count">{mutedTweet.retweet_count}</p>
        </div>
        <div className="tweet-count-info">
          <div className="favorite-icon" />
          <p className="tweet-favorite-count">{mutedTweet.favorite_count}</p>
        </div>
        <a href={mutedTweet.tweet_url} className="open-twitter-link" alt="tw">
          <div className="twitter-icon" />
        </a>
      </div>
    </li>
  );
};

MutedTweet.propTypes = {
  mutedTweet: PropTypes.shape({
    tweet_url: PropTypes.string,
    tweet_text: PropTypes.string,
    retweet_count: PropTypes.number,
    favorite_count: PropTypes.number,
    media_infos: PropTypes.arrayOf(
      PropTypes.shape({
        media_url_https: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default MutedTweet;
