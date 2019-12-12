import ActionTypes from '../actions/types';
import { combineReducers } from 'redux';
import userInfo from './resource/userInfo';
import mutedUsers from './resource/mutedUsers';
import isMuterMenuOpened from './page/isMuterMenuOpened';
import muted from './page/muted';
import muteRequestStatus from './meta/muterRequestStatus';
import userRequestStatus from './meta/userRequestStatus';
import errMessage from './page/errMessage';
import popUpMessage from './page/popUpMessage';

interface appNameAction {
  type :string;
  payload: string;
}

interface basePathAction {
  type :string;
  payload: string;
}

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

const appName = (state :string = "", action :appNameAction) => {
  switch (action.type) {
    case ActionTypes.SET_APPNAME:
      return action.payload;
    default:
      return state;
  };
};

const basePath = (state :string = "", action :basePathAction) => {
  switch (action.type) {
    case ActionTypes.SET_BASEPATH:
      return action.payload;
    default:
      return state;
  };
};

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
