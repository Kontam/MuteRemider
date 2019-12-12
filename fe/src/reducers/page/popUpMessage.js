export const ACTION_CHANGE_POPUP_MESSAGE = 'CHANGE_POPUP_MESSAGE';

// ユーザーに通知する小さなメッセージ
// なにもない場合はから文字列
const popUpMessage = (state = '', action) => {
  switch (action.type) {
  case ACTION_CHANGE_POPUP_MESSAGE:
    return action.message;
  default:
    return state;
  }
};

export default popUpMessage;
