
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

  //Slugs
  MUTER_TOP_SLUG: '/muter',
  CALLBACK_SLUG: '/callback',
  MUTED_LIST_SLUG: '/muted_list'
} as const;

export default BffConst;

