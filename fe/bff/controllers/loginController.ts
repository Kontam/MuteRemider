import { Request, Response } from 'express';
import BffConst from '../const';
import execRequest from '../modules/execRequest';
import { createParamsWithToken } from '../modules/createParams';

const jwt = require('jsonwebtoken');

export type AuthInfo = {
  user_id: string,
  token: string,
  token_secret: string,
}

/**
 * 認証済みユーザーチェック
 * ログインユーザーのブラウザにトークンがあればAPIに問い合わせ
 * クッキーがなければログイン画面にリダイレクトする
 */
exports.login_check = async function(req :Request, res: Response) {
  const token = req.cookies.token || "";
  if (token) {
    let user_id;
    try {
      user_id = jwt.verify(token, process.env.JWT_SECRET);
    }catch(e){
      console.log("jwt_fail", e);
      res.redirect(BffConst.TWITTER_LOGIN_SLUG);
    }

    const params = { user_id };
    const responce = await execRequest(BffConst.API_CHECK_LOGIN_API,{ params });
    const authInfo: AuthInfo = responce.data;

    if (authInfo.token) {
      const passportSession = { user: {
        twitter_token: authInfo.token,
        twitter_token_secret: authInfo.token_secret,
      }};
      const session = req.session;
      console.log("login_check", session);
      if ( session ) {
        session.passport = passportSession;
        session.user_id = user_id;
      }
      console.log("login_check", session);
      return res.redirect(BffConst.FRONT_MUTER_SLUG);
    }
  }

  res.redirect(BffConst.TWITTER_LOGIN_SLUG);
}

/**
 * passport経由のtwitterログイン成功後の処理
 * cookieにアクセストークンを埋め込んでリダイレクトする
 */
exports.login_success = async function(req :Request, res: Response) {
  const user_id = req?.session?.passport.user.id;
  const exrtraParams = {
    user_id,
  };
  const params = req.session ? createParamsWithToken(req.session, exrtraParams) : {};
  const responce = await execRequest(BffConst.API_STORE_LOGIN_SLUG, { params });
  //TODO エラーハンドリング処理を追記する
  console.log(responce);

  const token = jwt.sign(user_id, process.env.JWT_SECRET);
  console.log("jest",token);
  res.cookie("token", token);
  res.redirect(BffConst.FRONT_MUTER_SLUG);
}


exports.login_failure = async function(req :Request,res: Response) {

}
