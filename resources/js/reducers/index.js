import { combineReducers } from 'redux';

import TwAppsConst from '../TwAppsConst';

const baseUrl = (state = '', action) => {
  switch (action.type) {
  case TwAppsConst.ACTION_CHANGE_BASE_URL:
    return action.baseUrl;
  default:
    return state;
  }
};

// メニュー開閉状態
const isMuterMenuOpened = (state = true, action) => {
  switch (action.type) {
  case TwAppsConst.ACTION_CHANGE_ISMUTERMENU_OPENED:
    return action.isMuterMenuOpened;
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

// ユーザー情報は最初に必ずロードするため、初期ステータスはロード中
const userRequestStatus = (state = TwAppsConst.REQUEST_STATUS_LOADING, action) => {
  switch (action.type) {
  case TwAppsConst.ACTION_USER_REQUEST_START:
    return TwAppsConst.REQUEST_STATUS_LOADING;
  case TwAppsConst.ACTION_USER_REQUEST_END:
    return TwAppsConst.REQUEST_STATUS_COMPLETE;
  default:
    return state;
  }
};

// 致命的なエラー発生時に表示するメッセージ
// 正常処理中は空文字列
const errMessage = (state = '', action) => {
  switch (action.type) {
  case TwAppsConst.ACTION_CHANGE_ERR_MESSAGE:
    return action.message;
  default:
    return state;
  }
};

// ユーザーに通知する小さなメッセージ
// なにもない場合はから文字列
const popUpMessage = (state = '', action) => {
  switch (action.type) {
  case TwAppsConst.ACTION_CHANGE_POPUP_MESSAGE:
    return action.message;
  default:
    return state;
  }
};

export default combineReducers({
  baseUrl,
  isMuterMenuOpened,
  userInfo,
  mutedUsers,
  muted,
  muteRequestStatus,
  userRequestStatus,
  errMessage,
  popUpMessage,
});
