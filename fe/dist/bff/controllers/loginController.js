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
const const_1 = __importDefault(require("../const"));
const execRequest_1 = __importDefault(require("../modules/execRequest"));
const createParams_1 = require("../modules/createParams");
const jwt = require('jsonwebtoken');
/**
 * 認証済みユーザーチェック
 * ログインユーザーのブラウザにトークンがあればAPIに問い合わせ
 * クッキーがなければログイン画面にリダイレクトする
 */
exports.login_check = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.cookies.token || "";
        if (token) {
            let user_id;
            try {
                user_id = jwt.verify(token, process.env.JWT_SECRET);
            }
            catch (e) {
                console.log("jwt_fail", e);
                res.redirect(const_1.default.TWITTER_LOGIN_SLUG);
            }
            const params = { user_id };
            const responce = yield execRequest_1.default(const_1.default.API_CHECK_LOGIN_API, { params });
            const authInfo = responce.data;
            if (authInfo.token) {
                const passportSession = { user: {
                        twitter_token: authInfo.token,
                        twitter_token_secret: authInfo.token_secret,
                        id: user_id,
                    } };
                const session = req.session;
                if (session) {
                    session.passport = passportSession;
                }
                return res.redirect(const_1.default.FRONT_MUTER_SLUG);
            }
        }
        res.redirect(const_1.default.TWITTER_LOGIN_SLUG);
    });
};
/**
 * passport経由のtwitterログイン成功後の処理
 * cookieにアクセストークンを埋め込んでリダイレクトする
 */
exports.login_success = function (req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const user_id = (_b = (_a = req) === null || _a === void 0 ? void 0 : _a.session) === null || _b === void 0 ? void 0 : _b.passport.user.id;
        const exrtraParams = {
            user_id,
        };
        const params = req.session ? createParams_1.createParamsWithToken(req.session, exrtraParams) : {};
        const response = yield execRequest_1.default(const_1.default.API_STORE_LOGIN_SLUG, { params });
        // TODO エラーハンドリング処理を追記する
        if (response.data !== 'success') {
            next(const_1.default.MSG_API_LOGIN_FAIL);
            res.redirect(const_1.default.TWITTER_LOGIN_SLUG);
        }
        const token = jwt.sign(user_id, process.env.JWT_SECRET);
        res.cookie("token", token);
        res.redirect(const_1.default.FRONT_MUTER_SLUG);
    });
};
exports.login_failure = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
    });
};
//# sourceMappingURL=loginController.js.map