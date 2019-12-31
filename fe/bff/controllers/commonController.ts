import { Request, Response } from 'express';
import BffConst from '../const';

import { createParamsWithToken } from '../modules/createParams';
import execRequest from '../modules/execRequest';

export type UserInfo = {
  user_id: string
  user_name: string
  screen_name: string
  profile_image_url_https: string
}

/*
* ユーザー情報の取得（認証トークンを含む）
*/
exports.user_info = async function(req :Request, res: Response) {
  let params = {};
  if (req.session) {
    params = createParamsWithToken(req.session);
  }
  const responce = await execRequest(BffConst.API_MUTER_TOP_SLUG, {params});
  const userInfo :UserInfo = responce.data;
  // DB操作のキーとしてセッションにuser_idを保存
  req!.session!.user_id = userInfo.user_id;

  res.send(userInfo);
}
