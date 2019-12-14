import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwAppsConst from '../TwAppsConst';
import TwAppsHeader from './TwAppsHeader';
import MuteReminder from '../MuteReminder/containers/MuteReminder';
import BlockReminder from '../BlockReminder/components/BlockReminder.tsx';
import { setUserInfo } from '../MuteReminder/actions';
// import { getBasePath } from '../../../redux/'
import LoadingImg from './LoadingImg';


class TwitterApps extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // htmlに埋め込みで渡ってきたユーザー情報をstateに格納する
    const { twUserInfo } = this.props;
    this.props.setUserInfo(twUserInfo);
  }

  render() {
    return (
      <div className="twitter-apps">
        TwitterApps
        {/* <LoadingImg /> */}
        {/* <TwAppsHeader /> */}
        {/* <MuteReminder /> */}
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
