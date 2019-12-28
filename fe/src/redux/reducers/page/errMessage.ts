export const ACTION_CHANGE_ERR_MESSAGE = 'CHANG_ERR_MESSAGE';

type SetErrMessageAction = {
  type: typeof ACTION_CHANGE_ERR_MESSAGE
  payload: string
}
type ErrMessageAction = SetErrMessageAction;

// 致命的なエラーメッセージの指定
export const setErrMessage = (message: string):SetErrMessageAction => ({ type: ACTION_CHANGE_ERR_MESSAGE, payload: message });


// 致命的なエラー発生時に表示するメッセージ
// 正常処理中は空文字列
const errMessage = (state = '', action: ErrMessageAction) => {
  switch (action.type) {
  case ACTION_CHANGE_ERR_MESSAGE:
    return action.payload;
  default:
    return state;
  }
};

export default errMessage;
