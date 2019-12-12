import TwAppsConst from '../../components/TwApps/TwAppsConst';

export const ACTION_MUTE_REQUEST_START = 'MUTE_REQUEST_START';
export const ACTION_MUTE_REQUEST_END = 'MUTE_REQUEST_END';

const muteRequestStatus = (state = TwAppsConst.REQUEST_STATUS_COMPLETE, action) => {
  switch (action.type) {
  case ACTION_MUTE_REQUEST_START:
    return TwAppsConst.REQUEST_STATUS_LOADING;
  case ACTION_MUTE_REQUEST_END:
    return TwAppsConst.REQUEST_STATUS_COMPLETE;
  default:
    return state;
  }
};

export default muteRequestStatus;
