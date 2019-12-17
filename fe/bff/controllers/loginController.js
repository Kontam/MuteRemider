const Const = require('../const');
const apiBaseUrl = Const.API_BASE_URL;
const request = require('request');

// ログインページにリクエストを発行する
exports.loginToTwitter = function(req, res) {
  // const options = {
  //   url: `${apiBaseUrl}${Const.API_LOGIN_SLUG}`,
  //   method: 'GET',
  //   headers: {
  //     'Accept': 'application/json'
  //   },
  // }
  // request(options, (error, responce, body) => {
  //   if (!error) {
  //     console.log(responce);
  //     res.send(body);
  //   } else {
  //     console.log('Error');
  //     res.status(500);
  //     res.end('Internal Server Error')
  //   }
  // })

}
