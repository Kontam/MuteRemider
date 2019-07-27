import TwAppsConst from '../TwAppsConst';
import requestToServer from '../modules/requestToServer';

export const setUserInfo = userInfo => (dispatch) => {
  dispatch({ type: TwAppsConst.ACTION_CHANGE_USER_INFO, userInfo });
};

export const setMutedUsers = mutedUsers => (dispatch) => {
  dispatch({ type: TwAppsConst.ACTION_CHANGE_MUTED_USERS, mutedUsers });
};


// 認証ユーザーの情報を取得する
export const requestUserInfo = (endpoint, params = {}) => (dispatch) => {
  requestToServer(endpoint, params)
    .then(({ data, status }) => {
      dispatch(setUserInfo(data));
      return 0;
    });
};

export const requestMutedUsers = (endpoint, params = {}) => (dispatch) => {
  requestToServer(endpoint, params)
    .then(({ data, status }) => {
      dispatch(setMutedUsers(data));
      return 0;
    });
}
