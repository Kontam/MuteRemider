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
const commonController = require('../commonController');
jest.mock('../../modules/execRequest');
describe('ログインユーザー情報の取得処理', () => {
    test('正常終了時にユーザー情報のAPIリソースをクライアントに送信する', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = { session: { passport: { user: {
                        twitter_token: "test_token",
                        twitter_token_secret: "test_token_secret",
                    } } } };
        const res = { send: jest.fn().mockReturnThis() };
        const axiosResult = { data: {
                user_id: "test_id",
                user_name: "test_name",
                screen_name: "test_screen_name",
                profile_image_url_https: "https:xxxx/",
            } };
        execRequest_1.default.mockReturnValue(axiosResult);
        yield commonController.user_info(req, res);
        power_assert_1.default.deepStrictEqual(res.send.mock.calls[0][0], axiosResult.data);
    }));
});
//# sourceMappingURL=commonController.test.js.map