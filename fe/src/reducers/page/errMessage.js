export const ACTION_CHANGE_ERR_MESSAGE = 'CHANG_ERR_MESSAGE';

// 致命的なエラー発生時に表示するメッセージ
// 正常処理中は空文字列
const errMessage = (state = '', action) => {
  switch (action.type) {
  case ACTION_CHANGE_ERR_MESSAGE:
    return action.message;
  default:
    return state;
  }
};

export default errMessage;
