
// indexでのimportの際、nextの初期処理より後にロードを行うこと
// DotenvのロードがNextの初期処理で行われる
const BffConst = {
  API_BASE_URL: process.env.NODE_ENV === 'production'
   ? process.env.API_BASE_URL : process.env.API_BASE_URL_DEV,
  BASE_URL: process.env.NODE_ENV === 'production'
  ? process.env.BASE_URL : process.env.BASE_URL_DEV,

  //Backend API
  API_MUTER_TOP_SLUG: '/muter_top',
  API_MUTED_LIST_SLUG: '/muted_list_api',
  API_STORE_LOGIN_SLUG: '/login_store_api',
  API_CHECK_LOGIN_API: '/login_check_api',

  //Bff Slugs
  LOGIN_CHECK_SLUG: '/login',
  MUTER_TOP_SLUG: '/muter',
  CALLBACK_SLUG: '/callback',
  MUTED_LIST_SLUG: '/muted_list',
  USER_INFO_SLUG: '/user_info',
  TWITTER_LOGIN_SLUG: '/twitter_login',

  //Front Slugs
  FRONT_MUTER_SLUG:'/mutereminder',

} as const;

export default BffConst;
