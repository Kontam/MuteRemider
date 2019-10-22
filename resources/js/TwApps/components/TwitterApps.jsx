import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom';

import TwAppsConst from '../TwAppsConst';
import TwAppsHeader from './TwAppsHeader';
import MuteReminder from '../MuteReminder/containers/MuteReminder';
import BlockReminder from '../BlockReminder/components/BlockReminder.tsx';
import { requestUserInfo, setBaseUrl } from '../MuteReminder/actions';
import LoadingImg from './LoadingImg';


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
      <HashRouter>
        <div className="twitter-apps">
          <LoadingImg />
          <TwAppsHeader />
          <Route path="/MuteReminder" component={MuteReminder} />
          <Route path="/BlockReminder" component={BlockReminder} />
        </div>
      </HashRouter>
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
