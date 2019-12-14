import { combineReducers } from 'redux';
import userInfo from './resource/userInfo';
import mutedUsers from './resource/mutedUsers';
import isMuterMenuOpened from './page/isMuterMenuOpened';
import muted from './page/muted';
import muteRequestStatus from './meta/muteRequestStatus';
import userRequestStatus from './meta/userRequestStatus';
import errMessage from './page/errMessage';
import popUpMessage from './page/popUpMessage';
import basePath from './meta/basePath';
import appName from './meta/appName';

export interface RootState {
  appName :string,
  basePath :string,
  isMuterMenuOpened: any,
  userInfo :any,
  mutedUsers :any,
  muted :any,
  muteRequestStatus :any,
  userRequestStatus :any,
  errMessage :any,
  popUpMessage :any,
}

export default combineReducers<RootState>({
  appName,
  basePath,
  isMuterMenuOpened,
  userInfo,
  mutedUsers,
  muted,
  muteRequestStatus,
  userRequestStatus,
  errMessage,
  popUpMessage,
});
