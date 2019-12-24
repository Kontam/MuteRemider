import { Request, Response } from 'express';
import BffConst from '../const';
import execRequest from '../modules/execRequest';
import { createParamsWithToken } from '../modules/createParams';

const jwt = require('jsonwebtoken');

/**
 * ログイン成功後の処理
 * cookieにアクセストークンを埋め込んでリダイレクトする
 */
exports.login_success = async function(req :Request, res: Response) {
  const user_id = req?.session?.passport.user.id;
  const exrtraParams = {
    user_id,
  };
  const params = req.session ? createParamsWithToken(req.session, exrtraParams) : {};
  const responce = await execRequest(BffConst.API_STORE_LOGIN_SLUG, { params });
  console.log(responce);

  const token = jwt.sign(user_id, process.env.JWT_SECRET);
  res.cookie("token", token);
  res.redirect(BffConst.FRONT_MUTER_SLUG);
}


exports.login_failure = async function(req :Request,res: Response) {

}
