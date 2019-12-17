import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer, { RootState } from '../reducers';

const initialState :RootState = {
  appName: "",
  basePath: "",
  isMuterMenuOpened: "any",
  userInfo :"any",
  mutedUsers :"any",
  muted :"any",
  muteRequestStatus :"any",
  userRequestStatus :"any",
  errMessage :"any",
  popUpMessage :"any",
}

export function initializeStore() {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  )
};
