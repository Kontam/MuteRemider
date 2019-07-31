import TwAppsConst from '../TwAppsConst';
import requestToServer from '../modules/requestToServer';

export const setBaseUrl = baseUrl => (dispatch) => {
  dispatch({ type: TwAppsConst.ACTION_CHANGE_BASE_URL, baseUrl });
};

export const setUserInfo = userInfo => (dispatch) => {
  dispatch({ type: TwAppsConst.ACTION_CHANGE_USER_INFO, userInfo });
};

export const setMutedUsers = mutedUsers => (dispatch) => {
  dispatch({ type: TwAppsConst.ACTION_CHANGE_MUTED_USERS, mutedUsers });
};

// ユーザーごとにミュートされているかどうかのフラグ
export const setMuted = muted => (dispatch) => {
  dispatch({ type: TwAppsConst.ACTION_CHANGE_MUTED, muted });
};

// インデックス番号で指定されたユーザーのミュートフラグをトグルする
export const toggleMuted = index => (dispatch) => {
  dispatch({ type: TwAppsConst.ACTION_TOGGLE_MUTED, index });
};

// ミュートAPIへのリクエストステータス
export const startMuteRequest = () => (dispatch) => {
  dispatch({ type: TwAppsConst.ACTION_MUTE_REQUEST_START });
};

// ミュートAPIへのリクエストステータス
export const endMuteRequest = () => (dispatch) => {
  dispatch({ type: TwAppsConst.ACTION_MUTE_REQUEST_END });
};

// 認証ユーザーの情報を取得する
export const requestUserInfo = (endpoint, params = {}) => (dispatch) => {
  requestToServer(endpoint, params)
    .then(({ data, status }) => {
      dispatch(setUserInfo(data));
      return 0;
    });
};

// ミュートユーザーのリストを取得し、ミュート状態のstateを初期化する
export const requestMutedUsers = (endpoint, params = {}) => (dispatch) => {
  requestToServer(endpoint, params)
    .then(({ data, status }) => {
      // 全てミュートフラグを立てた配列をミュートの初期値としてdispatch
      // ユーザーリストよりも先にこちらを作る（依存しているため）
      const initializedMuted = Array(data.length).fill(true);
      dispatch(setMuted(initializedMuted));
      // ミュートユーザーをstoreに登録
      dispatch(setMutedUsers(data));
      return 0;
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
      return 0;
    });
};
