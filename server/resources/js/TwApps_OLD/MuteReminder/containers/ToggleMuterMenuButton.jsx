import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwAppsConst from '../../TwAppsConst';

import { setIsMuterMenuOpened } from '../actions';

class ToggleMuterMenuButton extends Component {
  constructor(props) {
    super(props);

    // メニュー開閉アニメーション用クラス
    this.toggleAnimationClass = '';
  }

  handleToggleClicked() {
    const { isMuterMenuOpened } = this.props;
    if (isMuterMenuOpened) {
      this.props.setIsMuterMenuOpened(false);
      this.toggleAnimationClass = 'muter-menu-closed';
      return;
    }
    this.props.setIsMuterMenuOpened(true);
    this.toggleAnimationClass = 'muter-menu-opened';
  }

  render() {
    const { isMuterMenuOpened } = this.props;
    const imgUrl = isMuterMenuOpened ? `${TwAppsConst.IMG_DIR_PATH}/cross_icon.svg` : `${TwAppsConst.IMG_DIR_PATH}/hambargar_icon.svg`;
    return (
      <div className="menu-button-container">
        <button
          type="button"
          className="menu-toggle-button"
          onClick={() => { this.handleToggleClicked(); }}
        >
          <img className="menu-toggle-icon" src={imgUrl} alt="close"/>
        </button>
      </div>
    );
  }
}

ToggleMuterMenuButton.propTypes = {
  isMuterMenuOpened: PropTypes.bool.isRequired,
  setIsMuterMenuOpened: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    isMuterMenuOpened: state.isMuterMenuOpened,
  }),
  {
    setIsMuterMenuOpened,
  },
)(ToggleMuterMenuButton);
