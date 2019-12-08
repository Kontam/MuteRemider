const Const = require('../const');
const apiBaseUrl = Const.API_BASE_URL;

exports.loginToTwitter = function(req, res) {
  // res.send("loginToTwitter");
  const axiosBase = require('axios');
  const axios = axiosBase.create({
    baseURL: apiBaseUrl,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json',
  })

  res.redirect(`${apiBaseUrl}${Const.API_LOGIN_SLUG}`);

  // axios.get('/login_api').then(function(responce) {
  //   console.log(responce);
  //   res.send("axios success");
  // }).catch(function(error) {
  //   console.log(error.response);
  //   res.send("error ocuerd");
  // });
}
