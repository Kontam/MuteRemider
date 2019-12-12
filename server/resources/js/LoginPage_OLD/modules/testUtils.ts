import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer, { RootState } from '../reducers';

import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

export const adapter = () => { enzyme.configure({ adapter: new Adapter() }) };

/**
 *
 * @param initialState
 */

const defaultInitialState :RootState = {
  basePath: "",
  appName: "",
}

export type LoginPageStore = Store<RootState>
export const storeFactory = (initialState :RootState = defaultInitialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk),);
}

/**
 * 頻繁に使用するテスト用の初期ステート
 */
export const commonInitialState :RootState = {
  basePath: "https://basepath.com",
  appName: "MuteReminder",
}



