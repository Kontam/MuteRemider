import { Request, Response } from 'express';
import BffConst from '../const';

import execRequest from '../modules/execRequest';
import { createParamsWithToken } from '../modules/createParams';

export type MutedUserInfo = {
  user_id: string,
  user_name: string,
  screen_name: string,
  user_url: string,
  profile_image_url_https: string,
  muted: boolean,
}

export type MediaInfo = {
  media_url: string,
  short_url: string,
  type: string,
}

export type TweetInfo = {
  tweet_id: number
  tweet_url: string,
  tweet_text: string,
  retweet_count: number,
  favorite_count: number,
  media_infos: MediaInfo[],
}

export type MutedUsersAPIResource = {
  muted_user: MutedUserInfo,
  tweets_info: TweetInfo[],
}

/**
 * ミュートリマインダーの初期画面
 * 利用ユーザー本人の情報を取得する
 */
exports.muter_top = async function(req :Request, res: Response) {

}

/**
 * ミュートユーザー一覧を取得するAPI
 * @param {string} user_id DBにログを保存するためのキー
 */
exports.muter_muted_users = async function(req :Request,res: Response) {
  console.log("mutedUsers_session",req.session);
  const extraParams = {
    user_id: req!.session!.user_id,
  }
  console.log(extraParams);
  let params = {};
  if (req.session) {
    params = createParamsWithToken(req.session, extraParams);
  }
  const responce = await execRequest(BffConst.API_MUTED_LIST_SLUG, {params});
  res.send(responce.data);
}

exports.muter_user_info = function(req :Request, res: Response) {
}
