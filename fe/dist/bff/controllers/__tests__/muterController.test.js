"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const execRequest_1 = __importDefault(require("../../modules/execRequest"));
const power_assert_1 = __importDefault(require("power-assert"));
const const_1 = __importDefault(require("../../const"));
const muterController = require('../muterController');
jest.mock('../../modules/execRequest');
const req = {
    session: { passport: { user: {
                twitter_token: "test_token",
                twitter_token_secret: "test_token_secret",
                id: "test_user_id",
            } } },
    query: {},
    params: {},
};
const res = { send: jest.fn().mockReturnThis() };
const next = jest.fn().mockReturnThis();
beforeEach(() => {
    res.send.mockClear();
    next.mockClear();
    execRequest_1.default.mockClear();
});
describe('ミュートユーザー一覧取得API', () => {
    test('正常終了時、APIリソースをレスポンスする', () => __awaiter(void 0, void 0, void 0, function* () {
        const axiosResult = { data: {
                muted_user: {
                    user_id: "test_id",
                    user_name: "test_name",
                    screen_name: "test_screen_name",
                    user_url: "test_url",
                    muted: true,
                    profile_image_url_https: "https:xxx",
                },
                tweets_info: [
                    {
                        tweet_id: 123,
                        media_infos: [],
                        tweet_text: "tweet_text",
                        tweet_url: "tweet_url",
                        favorite_count: 1,
                        retweet_count: 2,
                    }
                ]
            } };
        execRequest_1.default.mockResolvedValue(axiosResult);
        yield muterController.muter_muted_users(req, res);
        power_assert_1.default.deepStrictEqual(res.send.mock.calls[0][0], axiosResult.data);
    }));
});
describe('ミュートAPIのテスト', () => {
    test('正常系のテスト　アクセスURLの正当性、レスポンスの正当性', () => __awaiter(void 0, void 0, void 0, function* () {
        const exReq = Object.assign(req);
        const testScreenName = "test_screen_name";
        exReq.params.screen_name = testScreenName;
        const axiosResult = { data: {
                id: 2244994945,
                id_str: "2244994945",
                name: "Twitter Dev",
                screen_name: "test_screen_name",
            } };
        execRequest_1.default.mockResolvedValue(axiosResult);
        yield muterController.muter_mute_user(exReq, res, next);
        power_assert_1.default.equal(execRequest_1.default.mock.calls[0][0], const_1.default.API_MUTE_USER_SLUG + `/${testScreenName}`);
        power_assert_1.default.deepStrictEqual(res.send.mock.calls[0][0], axiosResult.data);
    }));
});
//# sourceMappingURL=muterController.test.js.map