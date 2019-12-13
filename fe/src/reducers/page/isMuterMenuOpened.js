export const ACTION_CHANGE_ISMUTERMENU_OPENED = 'CHANGE_ISMUTERMENU_OPENED';

export const setIsMuterMenuOpened = isMuterMenuOpened => (dispatch) => {
  dispatch({ type: ACTION_CHANGE_ISMUTERMENU_OPENED, isMuterMenuOpened });
};


// メニュー開閉状態
const isMuterMenuOpened = (state = false, action) => {
  switch (action.type) {
  case ACTION_CHANGE_ISMUTERMENU_OPENED:
    return action.isMuterMenuOpened;
  default:
    return state;
  }
};

export default isMuterMenuOpened;
