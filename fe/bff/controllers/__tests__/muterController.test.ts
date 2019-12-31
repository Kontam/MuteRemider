import execRequest from '../../modules/execRequest';
import assert from 'power-assert';
import { MutedUsersAPIResource } from '../muterController';
const muterController = require('../muterController');

jest.mock('../../modules/execRequest');

describe('ミュートユーザー一覧取得API', () => {
  test('正常終了時、APIリソースをレスポンスする', async () => {
    const req = { session: {
      passport:{ user:{
        twitter_token: "test_token",
        twitter_token_secret: "test_token_secret",
        id: "test_user_id",
      } }
    }, };
    const res = { send: jest.fn().mockReturnThis() };
    const axiosResult: { data: MutedUsersAPIResource } = { data:{
      muted_user: {
        user_id: "test_id",
        user_name: "test_name",
        screen_name: "test_screen_name",
        user_url: "test_url",
        muted: true,
        profile_image_url_https: "https:xxx",
      },
      tweets_info:[
        {
          tweet_id: 123,
          media_infos: [],
          tweet_text: "tweet_text",
          tweet_url: "tweet_url",
          favorite_count: 1,
          retweet_count: 2,
        }
      ] } };
    (execRequest as jest.Mock).mockResolvedValue(axiosResult);

    await muterController.muter_muted_users(req, res);
    assert.deepStrictEqual(res.send.mock.calls[0][0], axiosResult.data);
  });
});
