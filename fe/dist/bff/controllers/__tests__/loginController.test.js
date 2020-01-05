"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = __importDefault(require("../../const"));
const execRequest_1 = __importDefault(require("../../modules/execRequest"));
const power_assert_1 = __importDefault(require("power-assert"));
const loginController = require('../loginController');
const jwt = require('jsonwebtoken');
jest.mock('../../modules/execRequest');
jest.mock('jsonwebtoken');
describe('ログインチェック', () => {
    test('リクエストにトークンを含まない時はツイッターのログインページに遷移する', () => {
        const req = { cookies: {} };
        const res = {
            status: jest.fn().mockReturnThis(),
            redirect: jest.fn().mockReturnThis(),
        };
        loginController.login_check(req, res);
        expect(res.redirect.mock.calls[0][0]).toBe(const_1.default.TWITTER_LOGIN_SLUG);
    });
    describe('トークンが存在する場合、トークンチェックにリダイレクトする', () => {
        beforeEach(() => {
            execRequest_1.default.mockClear();
            jwt.verify.mockClear();
            jwt.sign.mockClear();
        });
        test('jwtトークンが正常な場合', (done) => {
            const req = {
                cookies: {
                    token: "test token",
                },
                session: {}
            };
            const res = {
                redirect: jest.fn().mockReturnThis(),
            };
            const result = { data: {
                    user_id: "test",
                    token: "test token",
                    token_secret: "test_token_sectet"
                } };
            const jwtMockResult = "mock user_id";
            execRequest_1.default.mockResolvedValue(result);
            jwt.verify.mockReturnValue(jwtMockResult);
            loginController.login_check(req, res).then(() => {
                power_assert_1.default.strictEqual(res.redirect.mock.calls[0][0], const_1.default.FRONT_MUTER_SLUG);
                done();
            });
        });
    });
});
describe('passportログイン後の処理', () => {
    const req = { session: { passport: { user: {
                    id: '123456789',
                } } } };
    const res = {
        cookie: jest.fn().mockReturnThis(),
        redirect: jest.fn().mockReturnThis(),
    };
    const next = jest.fn().mockReturnThis();
    const jwtResult = "TEST_TOKEN";
    beforeEach(() => {
        res.cookie.mockClear();
        res.redirect.mockClear();
        next.mockClear();
    });
    test('jwtトークンをクッキーに埋めてログイン後画面にリダイレクトする', (done) => {
        const axiosResult = { data: "success" };
        execRequest_1.default.mockResolvedValue(axiosResult);
        jwt.sign.mockReturnValue(jwtResult);
        loginController.login_success(req, res, next).then(() => {
            power_assert_1.default.strictEqual(res.cookie.mock.calls[0][1], jwtResult);
            power_assert_1.default.strictEqual(res.redirect.mock.calls[0][0], const_1.default.FRONT_MUTER_SLUG);
            done();
        });
    });
    test('jwtトークンを処理した後、APIからログイン失敗のレスポンスがあった場合はログインページにリダイレクトする', (done) => {
        const axiosResult = "failure";
        execRequest_1.default.mockResolvedValue(axiosResult);
        jwt.sign.mockReturnValue(jwtResult);
        loginController.login_success(req, res, next).then(() => {
            power_assert_1.default.strictEqual(next.mock.calls[0][0], const_1.default.MSG_API_LOGIN_FAIL);
            power_assert_1.default.strictEqual(res.redirect.mock.calls[0][0], const_1.default.TWITTER_LOGIN_SLUG);
            done();
        });
    });
});
// jwtの検証エラー時の処理をテストするためモックを解除する
// このテストのみモックを解除することができないのでいったんおき
// jest.unmock("jsonwebtoken");
// test('jwtトークンが不正な場合', (done) => {
//   const req = {
//     cookies:{
//       token:"test token",
//     },
//     session: {}
//   };
//   const res = {
//     redirect: jest.fn().mockReturnThis(),
//   };
//   const result :{data:AuthInfo} = { data: {
//     user_id: "test",
//     token: "test token",
//     token_secret: "test_token_sectet"
//   }};
//   loginController.login_check(req, res).then((result: any) => {
//     console.log(result);
//     done();
//   })
// done();
// });
//# sourceMappingURL=loginController.test.js.map