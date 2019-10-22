import React from 'react';
import PropTypes from 'prop-types';

import TwAppsConst from '../../TwAppsConst';

const ShowTweetsButton = ({ showTweets, onClick }) => {
  let buttonClassName = 'muted-hide-button';
  let iconClassName = 'hide-icon';
  let buttonLabel = '隠す';
  let forPCDOM = <span className="pc-show-button-label">ツイートを</span>;

  if (showTweets !== TwAppsConst.SHOW_TWEETS_OPENED) {
    buttonClassName = 'muted-show-button';
    iconClassName = 'show-icon';
    buttonLabel = 'チラ見';
  }

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={onClick}
    >
      <div className={iconClassName} />
      {forPCDOM}
      {buttonLabel}
    </button>
  );
};

ShowTweetsButton.propTypes = {
  showTweets: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShowTweetsButton;
