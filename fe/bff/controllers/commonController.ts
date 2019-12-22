import { Request, Response } from 'express';
import BffConst from '../const';

import { createParamsWithToken } from '../modules/createParams';
import execRequest from '../modules/execRequest';
const jwt = require('jsonwebtoken');

type UserInfo = {
  user_id: string
  user_name: string
  screen_name: string
  profile_image_url_https: string
}

export type VerifiedUserInfo = {
  userInfo: UserInfo
  token?: string
};
/*
* ユーザー情報の取得（認証トークンを含む）
*/
exports.user_info = async function(req :Request, res: Response) {
  let params = {};
  if (req.session) {
    params = createParamsWithToken(req.session);
  }
  const responce = await execRequest(BffConst.API_MUTER_TOP_SLUG, {params});
  // DB操作のキーとしてセッションにuser_idを保存
  req!.session!.user_id = responce.data.user_id;

  const token = jwt.sign(responce.data.user_id, process.env.JWT_SECRET);
  const verifiedUserInfo :VerifiedUserInfo = Object.assign({userInfo: responce.data} , {token});

  res.send(verifiedUserInfo);
  // res.redirect(BffConst.MUTED_LIST_SLUG);
}
