import { combineReducers } from 'redux';

import TwAppsConst from '../TwAppsConst';

const baseUrl = (state = {}, action) => {
  switch (action.type) {
  case TwAppsConst.ACTION_CHANGE_BASE_URL:
    return action.baseUrl;
  default:
    return state;
  }
};

const userInfo = (state = {}, action) => {
  switch (action.type) {
  case TwAppsConst.ACTION_CHANGE_USER_INFO:
    return action.userInfo;
  default:
    return state;
  }
};

const mutedUsers = (state = [], action) => {
  switch (action.type) {
  case TwAppsConst.ACTION_CHANGE_MUTED_USERS:
    return action.mutedUsers;
  default:
    return state;
  }
};

const muted = (state = [], action) => {
  // stateのアドレスが変わらないとレンダリングがされない
  // 旧stateの値をコピーした変数を用意する
  const newMuted = state.concat();
  switch (action.type) {
  case TwAppsConst.ACTION_CHANGE_MUTED:
    return action.muted;
  case TwAppsConst.ACTION_TOGGLE_MUTED:
    newMuted[action.index] = !state[action.index];
    return newMuted;
  default:
    return state;
  }
};

const muteRequestStatus = (state = TwAppsConst.REQUEST_STATUS_COMPLETE, action) => {
  switch (action.type) {
  case TwAppsConst.ACTION_MUTE_REQUEST_START:
    return TwAppsConst.REQUEST_STATUS_LOADING;
  case TwAppsConst.ACTION_MUTE_REQUEST_END:
    return TwAppsConst.REQUEST_STATUS_COMPLETE;
  default:
    return state;
  }
};

export default combineReducers({
  baseUrl,
  userInfo,
  mutedUsers,
  muted,
  muteRequestStatus,
});
