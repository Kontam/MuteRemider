import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import TwAppsConst from '../TwAppsConst';

class TwAppsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: TwAppsConst.HEADER_MENU_INITIAL,
    };
  }

  render() {
    const imgUrl = this.props.userInfo.profile_image_url_https;
    const imgIconDOM = imgUrl ? <img className="twapps-header-icon" src={imgUrl} alt="icon" /> : '';
    return (
      <header className="twapps-header">
        {imgIconDOM}
      </header>
    );
  }
}

TwAppsHeader.propTypes = {
  userInfo: PropTypes.shape({
    profile_image_url_https: PropTypes.string,
  }).isRequired,
};

export default connect(
  state => ({
    userInfo: state.userInfo,
  }),
)(TwAppsHeader);
