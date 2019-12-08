module.exports = {
  API_BASE_URL: process.env.NODE_ENV === 'production'
   ? process.env.API_BASE_URL : process.env.API_BASE_URL_DEV,
  API_LOGIN_SLUG: '/login_api',
}
