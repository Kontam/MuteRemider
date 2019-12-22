import { Request, Response } from 'express';
import BffConst from '../const';

// const Const = require('../const');
import execRequest from '../modules/execRequest';
import { createParamsWithToken } from '../modules/createParams';
// const createParamsWithToken = require('../modules/createParams');
/**
 * ミュートリマインダーの初期画面
 * 利用ユーザー本人の情報を取得する
 */
exports.muter_top = async function(req :Request, res: Response) {
  let params = {};
  if (req.session) {
    params = createParamsWithToken(req.session);
  }
  const responce = await execRequest(BffConst.API_MUTER_TOP_SLUG, {params});
  // DB操作のキーとしてセッションにuser_idを保存
  req!.session!.user_id = responce.data.user_id;
  // res.send(responce.data);
  res.redirect("/muted_list");
}

/**
 * ミュートユーザー一覧を取得するAPI
 * @param {string} user_id DBにログを保存するためのキー
 */
exports.muter_muted_users = async function(req :Request,res: Response) {
  const extraParams = {
    user_id: req!.session!.user_id,
  }
  let params = {};
  if (req.session) {
    params = createParamsWithToken(req.session, extraParams);
  }
  const responce = await execRequest(BffConst.API_MUTED_LIST_SLUG, {params});
  res.send(responce.data);
}

exports.muter_user_info = function(req :Request, res: Response) {
}
