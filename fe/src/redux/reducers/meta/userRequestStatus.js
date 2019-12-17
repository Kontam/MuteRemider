import TwAppsConst from '../../../components/TwApps/TwAppsConst';

export const ACTION_USER_REQUEST_START = 'USER_REQUEST_START';
export const ACTION_USER_REQUEST_END = 'USER_REQUEST_END';

// ユーザーAPIへのリクエストステータス
export const startUserRequest = () => (dispatch) => {
  dispatch({ type: ACTION_USER_REQUEST_START });
};

// ユーザーAPIへのリクエストステータス
export const endUserRequest = () => (dispatch) => {
  dispatch({ type: ACTION_USER_REQUEST_END });
};


// ユーザー情報は最初に必ずロードするため、初期ステータスはロード中
const userRequestStatus = (state = TwAppsConst.REQUEST_STATUS_LOADING, action) => {
  switch (action.type) {
  case ACTION_USER_REQUEST_START:
    return TwAppsConst.REQUEST_STATUS_LOADING;
  case ACTION_USER_REQUEST_END:
    return TwAppsConst.REQUEST_STATUS_COMPLETE;
  default:
    return state;
  }
};

export default userRequestStatus;
