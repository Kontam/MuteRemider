import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer, { LoginPageState } from '../reducers';

import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export const adapter = () => { enzyme.configure({ adapter: new Adapter() }) };

/**
 *
 * @param initialState
 */

const defaultInitialState :LoginPageState = {
  basePath: "",
  appName: "",
}

export type LoginPageStore = Store<LoginPageState>
export const storeFactory = (initialState :LoginPageState = defaultInitialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk),);
}

/**
 * 頻繁に使用するテスト用の初期ステート
 */
export const commonInitialState :LoginPageState = {
  basePath: "https://basepath.com",
  appName: "MuteReminder",
}



