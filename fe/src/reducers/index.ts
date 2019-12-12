import ActionTypes from '../actions/types';
import { combineReducers } from 'redux';

interface appNameAction {
  type :string;
  payload: string;
}

interface basePathAction {
  type :string;
  payload: string;
}

export interface RootState {
  appName :string;
  basePath :string;
}

const appName = (state :string = "", action :appNameAction) => {
  switch (action.type) {
    case ActionTypes.SET_APPNAME:
      return action.payload;
    default:
      return state;
  };
};

const basePath = (state :string = "", action :basePathAction) => {
  switch (action.type) {
    case ActionTypes.SET_BASEPATH:
      return action.payload;
    default:
      return state;
  };
};

export default combineReducers<RootState>({
  appName,
  basePath
});
