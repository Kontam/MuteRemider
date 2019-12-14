import { Dispatch } from 'redux';

export const SET_BASEPATH = 'SET_BASEPATH';

export type basePathAction = {
  type :string;
  payload: string;
}

export const setBasePath = (basePath :string) => (dispatch :Dispatch) => {
  dispatch({type: SET_BASEPATH, payload: basePath})
}


const basePath = (state :string = "", action :basePathAction) => {
  switch (action.type) {
    case SET_BASEPATH:
      return action.payload;
    default:
      return state;
  };
};
export default basePath;
