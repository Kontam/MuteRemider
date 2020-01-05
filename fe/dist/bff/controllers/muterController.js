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
/**
 * ミュートユーザー一覧を取得するAPI
 * @param {string} user_id DBにログを保存するためのキー
 */
exports.muter_muted_users = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const extraParams = {
            user_id: req.session.passport.user.id,
        };
        let params = {};
        if (req.session) {
            params = createParams_1.createParamsWithToken(req.session, extraParams);
        }
        const response = yield execRequest_1.default(const_1.default.API_MUTED_LIST_SLUG, { params });
        res.send(response.data);
    });
};
/**
 * 特定のユーザー一人をミュート解除する
 * @param {string} screen_name　GETパラメータから取得する対象ユーザーの名前
 */
exports.muter_unmute_user = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const extraParams = {};
        let params = {};
        if (req.session) {
            params = createParams_1.createParamsWithToken(req.session, extraParams);
        }
        const endPoint = const_1.default.API_UNMUTE_USER_SLUG + `/${req.params.screen_name || ''}`;
        const response = yield execRequest_1.default(endPoint, { params });
        res.send(response.data);
    });
};
/**
 * 特定のユーザー一人をミュートにする
 * @param {string} screen_name　GETパラメータから取得する対象ユーザーの名前
 */
exports.muter_mute_user = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const extraParams = {};
        let params = {};
        if (req.session) {
            params = createParams_1.createParamsWithToken(req.session, extraParams);
        }
        const endPoint = const_1.default.API_MUTE_USER_SLUG + `/${req.params.screen_name || ''}`;
        const response = yield execRequest_1.default(endPoint, { params });
        res.send(response.data);
    });
};
//# sourceMappingURL=muterController.js.map