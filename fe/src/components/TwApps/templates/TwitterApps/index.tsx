import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TwAppsHeader from '../../organisms/TwAppsHeader';
import AppContent from '../../organisms/AppContent';
import TwAppsConst from '../../TwAppsConst';
import FrontDisplayContainer from '../../molecules/FrontDisplayContainer';
import { requestUserInfo } from '../../../../redux/reducers/resource/userInfo';
import { setBasePath, BasePath } from '../../../../redux/reducers/meta/basePath';

type Props = {
  basePath: BasePath,
}

const TwitterApps = ({ basePath }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // 利用者自身のユーザー情報を取得
    dispatch(requestUserInfo(TwAppsConst.USER_INFO_ENDPOINT));
    dispatch(setBasePath(basePath));
  },[])

  return (
    <div className="twitter-apps">
      <FrontDisplayContainer />
      <TwAppsHeader />
      <AppContent />
    </div>
  );
}

export default TwitterApps;
