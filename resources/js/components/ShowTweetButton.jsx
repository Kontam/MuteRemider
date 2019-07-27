import React from 'react';
import PropTypes from 'prop-types';

const ShowTweetButton = () => {
  return (
    <button type="button" className="muted-show-button">
      <div className="show-icon" />
      チラ見
    </button>
  );
};

ShowTweetButton.propTypes = {
};

export default ShowTweetButton;
