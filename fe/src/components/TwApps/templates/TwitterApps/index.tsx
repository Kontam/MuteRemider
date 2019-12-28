import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TwAppsHeader from '../../organisms/TwAppsHeader';
import AppContent from '../../organisms/AppContent';
import TwAppsConst from '../../TwAppsConst';
// import LoadingImg from './LoadingImg';
import { requestUserInfo } from '../../../../redux/reducers/resource/userInfo';

const TwitterApps = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // 利用者自身のユーザー情報を取得
    dispatch(requestUserInfo(TwAppsConst.USER_INFO_ENDPOINT));
  },[])

  return (
    <div className="twitter-apps">
      {/* <LoadingImg /> */}
      <TwAppsHeader />
      <AppContent />
    </div>
  );
}

export default TwitterApps;
