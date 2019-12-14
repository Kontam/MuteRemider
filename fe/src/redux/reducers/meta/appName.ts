import { Dispatch } from 'redux';

export const SET_APPNAME = 'SET_APPNAME';

interface appNameAction {
  type :string;
  payload: string;
}

export const setAppName = (appName :string) => (dispatch :Dispatch) => {
  dispatch({type: SET_APPNAME, payload: appName})
}

const appName = (state :string = "", action :appNameAction) => {
  switch (action.type) {
    case SET_APPNAME:
      return action.payload;
    default:
      return state;
  };
};

export default appName;
