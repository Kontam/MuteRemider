import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwAppsConst from '../TwAppsConst';
import TwAppsHeader from '../components/TwAppsHeader';
import MuteReminder from './MuteReminder';
import { requestUserInfo, setBaseUrl } from '../actions';

class TwitterApps extends Component {
  componentDidMount() {
    const { baseUrl } = this.props;
    this.props.setBaseUrl(baseUrl);
    this.props.requestUserInfo(baseUrl + TwAppsConst.USER_INFO_ENDPOINT);
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
  baseUrl: PropTypes.string.isRequired,
  requestUserInfo: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  {
    setBaseUrl,
    requestUserInfo,
  },
)(TwitterApps);
