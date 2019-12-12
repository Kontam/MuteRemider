export const userInfo = (state = {}, action) => {
  switch (action.type) {
  case TwAppsConst.ACTION_CHANGE_USER_INFO:
    return action.userInfo;
  default:
    return state;
  }
};
