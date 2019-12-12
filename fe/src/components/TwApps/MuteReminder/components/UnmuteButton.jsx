import React from 'react';
import PropTypes from 'prop-types';

const UnmuteButton = ({ muted, onClick, isForMobile }) => {
  let btnClassName = muted ? 'muted-unmute-button' : 'muted-mute-button';
  if (!isForMobile) {
    btnClassName = muted ? 'pc-muted-unmute-button' : 'pc-muted-mute-button';
  }

  return (
    <button
      type="button"
      className={btnClassName}
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
  isForMobile: PropTypes.bool,
};

UnmuteButton.defaultProps = {
  isForMobile: true,
};

export default UnmuteButton;
