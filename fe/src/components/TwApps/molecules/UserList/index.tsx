import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../../redux/reducers';
import TwAppsConst from '../../TwAppsConst';
import ListedUser from '../ListedUser';
import { requestMutedUsers,  MutedUser } from '../../../../redux/reducers/resource/mutedUsers';
import { UserInfo } from '../../../../redux/reducers/resource/userInfo';

type MutedUserListProps = {
  mutedUsers: MutedUser[],
  muted: boolean,
  basePath: string,
  isMuterMenuOpened: boolean,
  userInfo: UserInfo,
}

const stateSelector = (state: RootState) => ({
  mutedUsers: state.mutedUsers,
  muted: state.muted,
  basePath: state.basePath,
  isMuterMenuOpened: state.isMuterMenuOpened,
  userInfo: state.userInfo,
});

const MutedUserList = () => {
  const {basePath, mutedUsers, muted, isMuterMenuOpened, userInfo}: MutedUserListProps = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    requestMutedUsers(basePath + TwAppsConst.MUTED_USERS_ENDPOINT, dispatch);
  },[]);

  return (
    <div className="muter-content">
      <h2 className="muter-discription">あなたがミュートしているユーザー</h2>
      <ul className={`muted-user-list ${isMuterMenuOpened ? 'list-menu-opened' : 'list-menu-closed'}`}>
        {
          mutedUsers.map((mutedUserInfo, index) => (
            <ListedUser
              key={mutedUserInfo.muted_user.user_id}
              mutedUserInfo={mutedUserInfo}
              index={index}
              isUserMuted={muted[index]}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default MutedUserList;
