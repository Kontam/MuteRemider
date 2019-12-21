const Const = require('../const');
const execRequest = require('../modules/execRequest');
const createParamsWithToken = require('../modules/createParams');

/**
 * ミュートリマインダーの初期画面
 * 利用ユーザー本人の情報を取得する
 */
exports.muter_top = async function(req, res) {
  const params = createParamsWithToken(req.session);
  const responce = await execRequest(Const.API_MUTER_TOP_SLUG, {params});
  // DB操作のキーとしてセッションにuser_idを保存
  req.session.user_id = responce.data.user_id;
  // res.send(responce.data);
  res.redirect("/muted_list");
}

exports.muter_muted_users = async function(req,res) {
  const extraParams = {
    user_id: req.session.user_id,
  }
  const params = createParamsWithToken(req.session, extraParams);
  console.log(params);
  const responce = await execRequest(Const.API_MUTED_LIST_SLUG, {params});
  res.send(responce.data);
}

exports.muter_user_info = function(req, res) {
}
