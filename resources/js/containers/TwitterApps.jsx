import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwAppsConst from '../TwAppsConst';
import TwAppsHeader from '../components/TwAppsHeader';
import MuteReminder from './MuteReminder';
import { requestUserInfo } from '../actions';

class TwitterApps extends Component {
  componentDidMount() {
    this.props.requestUserInfo(TwAppsConst.USER_INFO_ENDPOINT);
  }

  render() {
    return (
      <div className="twitter-apps">
        <TwAppsHeader />
        <MuteReminder />
      </div>
    );
  }
}

TwitterApps.propTypes = {
  requestUserInfo: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  { requestUserInfo },
)(TwitterApps);
