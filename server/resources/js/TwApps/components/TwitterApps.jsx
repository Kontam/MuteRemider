import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom';

import TwAppsConst from '../TwAppsConst';
import TwAppsHeader from './TwAppsHeader';
import MuteReminder from '../MuteReminder/containers/MuteReminder';
import BlockReminder from '../BlockReminder/components/BlockReminder.tsx';
import { setUserInfo, setBaseUrl } from '../MuteReminder/actions';
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
    // htmlに埋め込みで渡ってきたユーザー情報をstateに格納する
    const { twUserInfo } = this.props;
    this.props.setUserInfo(twUserInfo);
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
  setUserInfo: PropTypes.func.isRequired,
  setBaseUrl: PropTypes.func.isRequired,
  twUserInfo: PropTypes.shape().isRequired,
};

export default connect(
  () => ({}),
  {
    setBaseUrl,
    setUserInfo,
  },
)(TwitterApps);
