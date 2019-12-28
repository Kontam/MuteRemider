import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { mobileMuteButton, theme, pcMuteButton, divIcon, pcDivIcon } from '../../../../modules/styles/theme';
import { mediaQ } from '../../../../modules/styles/media';
const speaker_icon = require('../../../../../img/speaker_icon.svg');
const mute_button_icon = require('../../../../../img/mute_button_icon.svg');


export const createMobileButton = (isMuted) => {
  const bgColor = isMuted ? theme.colors.unmuteButtonColor : theme.colors.muteButtonColor;
  const labelColor = isMuted ? theme.colors.buttonLabelColor : theme.colors.basicWhite;
  return styled.button`
    ${mobileMuteButton(bgColor, labelColor)}
    ${mediaQ.pc} {
      display: none;
    }
  `;
}

export const createMobileIcon = (isMuted) => {
  const imgUrl =  isMuted ? speaker_icon : mute_button_icon;

  return styled.div`
    ${divIcon(imgUrl)};
    ${mediaQ.pc} {
      ${pcDivIcon(imgUrl)};
    }
  `;
}

export const createPcButton = (isMuted) => {
  const bgColor = isMuted ? theme.colors.unmuteButtonColor : theme.colors.muteButtonColor;
  const labelColor = isMuted ? undefined : theme.colors.basicWhite;

  return styled.button`
    display: none;
    ${mediaQ.pc} {
        ${pcMuteButton(bgColor, labelColor)}
    }
  `;
}

const UnmuteButton = ({ muted, onClick, isForMobile }) => {
  const Icon = createMobileIcon(muted);
  let Button = createMobileButton(muted);
  if (!isForMobile) {
    Button = createPcButton(muted);
  }

  return (
    <Button
      type="button"
      onClick={() => { onClick(); }}
    >
      <Icon className={muted ? 'unmute-icon' : 'mute-icon'} />
      {muted ? 'ミュート解除' : 'ミュート'}
    </Button>
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
