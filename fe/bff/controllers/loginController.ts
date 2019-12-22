import { Request, Response } from 'express';
import BffConst from '../const';

// const MyConst = require('../const');
const apiBaseUrl = BffConst.API_BASE_URL;
const request = require('request');

// ログインページにリクエストを発行する
exports.loginToTwitter = function(req: Request, res: Response) {
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
