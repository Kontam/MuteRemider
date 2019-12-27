import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

import { setIsMuterMenuOpened } from '../../../../redux/reducers/page/isMuterMenuOpened';
import { resetButton, MyThemeProps } from '../../../../modules/styles/theme';
import { mediaQ } from '../../../../modules/styles/media';
import { RootState } from '../../../../redux/reducers';
const cross_icon = require('../../../../../img/cross_icon.svg');
const hambargar_icon = require('../../../../../img/hambargar_icon.svg');


type Props = {
  isMuterMenuOpened: boolean,
  setIsMuterMenuOpened: (isMuterMenuOpened: boolean) => void,
}

export const Container = styled.div`
  display: none;
  ${mediaQ.pc} {
    display: block;
    text-align: right;
    /* animation: ${({theme, isOpened}: MyThemeProps<{isOpened: boolean}>) => isOpened ? openKeyframes + ".3s forwards" : "none"} */
  }
`;

export const Icon = styled.img`
  ${mediaQ.pc} {
    font-size: 20px;
    height: 40px;
    width: 40px;
  }
`;

export const Button = styled.button`
  ${mediaQ.pc} {
    cursor: pointer;
    font-size: 20px;
    ${resetButton}
  }
`;

class ToggleMuterMenuButton extends Component<Props> {
  handleToggleClicked() {
    const { isMuterMenuOpened } = this.props;
    if (isMuterMenuOpened) {
      this.props.setIsMuterMenuOpened(false);
      return;
    }
    this.props.setIsMuterMenuOpened(true);
  }

  render() {
    const { isMuterMenuOpened } = this.props;
    const imgUrl = isMuterMenuOpened ? `${cross_icon}` : `${hambargar_icon}`;
    return (
      <Container>
        <Button
          onClick={() => { this.handleToggleClicked(); }}
        >
          <Icon className="menu-toggle-icon" src={imgUrl} alt="close"/>
        </Button>
      </Container>
    );
  }
}


export default connect(
  (state: RootState) => ({
    isMuterMenuOpened: state.isMuterMenuOpened,
  }),
  {
    setIsMuterMenuOpened,
  },
)(ToggleMuterMenuButton);
