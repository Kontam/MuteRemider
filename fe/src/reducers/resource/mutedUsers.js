export const ACTION_CHANGE_MUTED_USERS = 'CHANGE_MUTED_USERS';

const mutedUsers = (state = [], action) => {
  switch (action.type) {
  case ACTION_CHANGE_MUTED_USERS:
    return action.mutedUsers;
  default:
    return state;
  }
};

export default mutedUsers;
