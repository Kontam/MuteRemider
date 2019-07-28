const TwAppsConst = {
  USER_INFO_ENDPOINT: `${window.location.origin}/myapps/user_api`,
  MUTED_USERS_ENDPOINT: `${window.location.origin}/myapps/list_api`,
  // USER_INFO_ENDPOINT: `${window.location.origin}/user_api`,
  // MUTED_USERS_ENDPOINT: `${window.location.origin}/list_api`,


  ACTION_CHANGE_USER_INFO: 'CHANGE_USER_INFO',
  ACTION_CHANGE_MUTED_USERS: 'CHANGE_MUTED_USERS',


  HEADER_MENU_INITIAL: 'initial',
  HEADER_MENU_CLOSED: 'closed',
  HEADER_MENU_OPENED: 'opened',

  SHOW_TWEETS_INITIAL: 'initial',
  SHOW_TWEETS_CLOSED: 'closed',
  SHOW_TWEETS_OPENED: 'opened',
};

export default TwAppsConst;
