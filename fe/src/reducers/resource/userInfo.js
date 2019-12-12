export const ACTION_CHANGE_USER_INFO = 'CHANGE_USER_INFO';

const userInfo = (state = {}, action) => {
  switch (action.type) {
  case ACTION_CHANGE_USER_INFO:
    return action.userInfo;
  default:
    return state;
  }
};

export default userInfo;
