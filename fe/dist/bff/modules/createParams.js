"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * APIへのリクエストで共有に含めるトークンをマージしたparamsを返す
 * @param {object} req.session
 * @param {object} 個別に指定するパラメータ
 */
exports.createParamsWithToken = (session, params = {}) => {
    const accessToken = {
        twitter_token: session.passport.user.twitter_token,
        twitter_token_secret: session.passport.user.twitter_token_secret
    };
    return Object.assign(accessToken, params);
};
//# sourceMappingURL=createParams.js.map