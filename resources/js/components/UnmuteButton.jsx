import React from 'react';
import PropTypes from 'prop-types';

const UnmuteButton = ({ muted, onClick }) => {
  return (
    <button
      type="button"
      className={muted ? 'muted-unmute-button' : 'muted-mute-button'}
      onClick={() => { onClick(); }}
    >
      <div className={muted ? 'unmute-icon' : 'mute-icon'} />
      {muted ? 'ミュート解除' : 'ミュート'}
    </button>
  );
};

UnmuteButton.propTypes = {
  muted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UnmuteButton;
