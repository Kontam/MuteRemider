import ActionTypes from './types';
import { Dispatch } from 'redux';

export const setAppName = (appName :string) => (dispatch :Dispatch) => {
  dispatch({type: ActionTypes.SET_APPNAME, payload: appName})
}

export const setBasePath = (basePath :string) => (dispatch :Dispatch) => {
  dispatch({type: ActionTypes.SET_BASEPATH, payload: basePath})
}
