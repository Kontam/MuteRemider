import TwAppsConst from '../../../components/TwApps/TwAppsConst';

export const ACTION_USER_REQUEST_START = 'USER_REQUEST_START' as const;
export const ACTION_USER_REQUEST_END = 'USER_REQUEST_END' as const;

export type UserRequestStatusAction = {
  type: typeof ACTION_USER_REQUEST_START | typeof ACTION_USER_REQUEST_END,
}

// ユーザーAPIへのリクエストステータス
export const startUserRequest = (): UserRequestStatusAction => (
  { type: ACTION_USER_REQUEST_START }
);

// ユーザーAPIへのリクエストステータス
export const endUserRequest = (): UserRequestStatusAction => (
  { type: ACTION_USER_REQUEST_END }
);


// ユーザー情報は最初に必ずロードするため、初期ステータスはロード中
const userRequestStatus = (state = TwAppsConst.REQUEST_STATUS_LOADING, action: UserRequestStatusAction) => {
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
