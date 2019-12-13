import { setErrMessage } from '../page/errMessage'
import { startUserRequest, endUserRequest } from '../meta/userRequestStatus';
import { startMuteRequest, endMuteRequest } from '../meta/muteRequestStatus';
import requestToServer from '../../modules/requestToServer';

export const ACTION_CHANGE_MUTED_USERS = 'CHANGE_MUTED_USERS';

export const setMutedUsers = mutedUsers => (dispatch) => {
  dispatch({ ACTION_CHANGE_MUTED_USERS, mutedUsers });
};

// ミュートユーザーのリストを取得し、ミュート状態のstateを初期化する
export const requestMutedUsers = (endpoint, params = {}) => (dispatch) => {
  dispatch(startUserRequest());
  requestToServer(endpoint, params, dispatch)
    .then(({ data }) => {
      if ('code' in data[0]) {
        dispatch(setErrMessage(data[0].message));
        dispatch(endUserRequest());
        return;
      }
      // 全てミュートフラグを立てた配列をミュートの初期値としてdispatch
      // ユーザーリストよりも先にこちらを作る（依存しているため）
      dispatch(endUserRequest());
      const initializedMuted = Array(data.length).fill(true);
      dispatch(setMuted(initializedMuted));
      // ミュートユーザーをstoreに登録
      dispatch(setMutedUsers(data));
    });
};

export const requestUnmuteUser = (endpoint, screenName, index, params = {}) => (dispatch) => {
  dispatch(startMuteRequest());
  requestToServer(endpoint, params)
    .then(({ data, status }) => {
      // ミュート解除に成功した場合はユーザー情報objectが返される
      // スクリーンネームを照合して成否を確認する
      dispatch(endMuteRequest());
      if (data.screen_name === screenName) {
        dispatch(toggleMuted(index));
      }
    });
};

const mutedUsers = (state = [], action) => {
  switch (action.type) {
  case ACTION_CHANGE_MUTED_USERS:
    return action.mutedUsers;
  default:
    return state;
  }
};

export default mutedUsers;
