export const ACTION_TOGGLE_MUTED = 'TOGGLE_MUTED';
export const ACTION_CHANGE_MUTED = 'CHANGE_MUTED';

const muted = (state = [], action) => {
  // stateのアドレスが変わらないとレンダリングがされない
  // 旧stateの値をコピーした変数を用意する
  const newMuted = state.concat();
  switch (action.type) {
  case ACTION_CHANGE_MUTED:
    return action.muted;
  case ACTION_TOGGLE_MUTED:
    newMuted[action.index] = !state[action.index];
    return newMuted;
  default:
    return state;
  }
};

export default muted;
