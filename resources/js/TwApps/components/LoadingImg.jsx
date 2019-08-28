import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TwAppsConst from '../TwAppsConst';

const LoadingImg = ({ muteRequestStatus, userRequestStatus }) => {
  let style = {};
  // いずれかの要素がロード中の時は表示する
  if (
    muteRequestStatus === TwAppsConst.REQUEST_STATUS_COMPLETE
      && userRequestStatus === TwAppsConst.REQUEST_STATUS_COMPLETE
  ) {
    style = { display: 'none' };
  }

  // background-imageは表示の優先順位が低いらしいのでimgタグを使用する
  return (
    <div
      className="loading-img-container"
      style={style}
    >
      <img className="loading-img" src="img/loading_anim.svg" alt="loading" />
      <p className="loading-caption">loading...</p>
    </div>
  );
};

LoadingImg.propTypes = {
  muteRequestStatus: PropTypes.string.isRequired,
  userRequestStatus: PropTypes.string.isRequired,
};

export default connect(state => ({
  muteRequestStatus: state.muteRequestStatus,
  userRequestStatus: state.userRequestStatus,
}))(LoadingImg);
