import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwAppsConst from '../TwAppsConst';
import TwAppsHeader from '../components/TwAppsHeader';
import MuteReminder from './MuteReminder';
import { requestUserInfo, setBaseUrl } from '../actions';
import LoadingImg from '../components/LoadingImg';


class TwitterApps extends Component {
  constructor(props) {
    super(props);
    const { baseUrl } = this.props;
    // 全コンポーネントの処理の中で最初にurlのセットを行うために
    // componentDidMountではなくConsoructorで処理を行う
    this.props.setBaseUrl(baseUrl);
  }

  componentDidMount() {
    const { baseUrl } = this.props;
    this.props.requestUserInfo(baseUrl + TwAppsConst.USER_INFO_ENDPOINT);
  }

  render() {
    return (
      <div className="twitter-apps">
        <LoadingImg />
        <TwAppsHeader />
        <MuteReminder />
      </div>
    );
  }
}

TwitterApps.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  requestUserInfo: PropTypes.func.isRequired,
  setBaseUrl: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  {
    setBaseUrl,
    requestUserInfo,
  },
)(TwitterApps);
