import ActionTypes from '../actions/types';
import { combineReducers } from 'redux';

interface appNameAction {
  type :string;
  payload: string;
}

export interface LoginPageState {
  appName :string;
}

const appName = (state :string = "", action :appNameAction) => {
  switch (action.type) {
    case ActionTypes.SET_APPNAME:
      return action.payload;
    default:
      return state;
  };
};

export default combineReducers<LoginPageState>({
  appName,
});
