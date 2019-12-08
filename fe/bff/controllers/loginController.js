exports.loginToTwitter = function(req, res) {
  // res.send("loginToTwitter");
  const axiosBase = require('axios');
  const axios = axiosBase.create({
    baseURL: 'http://localhost:3101',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json',
  })

  res.redirect('http://127.0.0.1:3101/login_api');

  // axios.get('/login_api').then(function(responce) {
  //   console.log(responce);
  //   res.send("axios success");
  // }).catch(function(error) {
  //   console.log(error.response);
  //   res.send("error ocuerd");
  // });
}
