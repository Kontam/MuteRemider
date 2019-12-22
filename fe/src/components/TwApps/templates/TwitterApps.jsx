import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import TwAppsConst from '../TwAppsConst';
// import TwAppsHeader from './TwAppsHeader';
// import MuteReminder from '../MuteReminder/containers/MuteReminder';
import TwAppsConst from '../TwAppsConst';
// import BlockReminder from '../BlockReminder/components/BlockReminder.tsx';
// import { setUserInfo } from '../MuteReminder/actions';
// import { getBasePath } from '../../../redux/'
// import LoadingImg from './LoadingImg';
import { requestUserInfo } from '../../../redux/reducers/resource/userInfo';


class TwitterApps extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // 利用者自身のユーザー情報を取得
    this.props.requestUserInfo(TwAppsConst.USER_INFO_ENDPOINT);
    // const { twUserInfo } = this.props;
    // this.props.setUserInfo(twUserInfo);
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

// TwitterApps.propTypes = {
//   baseUrl: PropTypes.string.isRequired,
//   setUserInfo: PropTypes.func.isRequired,
//   setBaseUrl: PropTypes.func.isRequired,
//   twUserInfo: PropTypes.shape().isRequired,
// };

export default connect(
  () => ({}),
  {
    requestUserInfo,
    // setBaseUrl,
    // setUserInfo,
  },
)(TwitterApps);
