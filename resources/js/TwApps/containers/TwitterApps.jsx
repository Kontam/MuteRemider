import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwAppsConst from '../TwAppsConst';
import TwAppsHeader from '../components/TwAppsHeader';
import MuteReminder from './MuteReminder';
import { setUserInfo, setBaseUrl } from '../actions';
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
    // htmlに埋め込みで渡ってきたユーザー情報をstateに格納する
    const { twUserInfo } = this.props;
    this.props.setUserInfo(twUserInfo);
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
