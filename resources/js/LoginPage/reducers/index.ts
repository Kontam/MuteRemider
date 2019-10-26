import { combineReducers } from 'redux';

interface appNameAction {
  type :string;
  payload: string;
}

export interface LoginPageState {
  appName :string;
}

const appName = (state :any, action :appNameAction) => {
  return "MuteReminder";
};

export default combineReducers<LoginPageState>({
  appName,
});
