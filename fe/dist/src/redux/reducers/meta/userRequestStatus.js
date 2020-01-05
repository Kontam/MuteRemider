"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TwAppsConst_1 = __importDefault(require("../../../components/TwApps/TwAppsConst"));
exports.ACTION_USER_REQUEST_START = 'USER_REQUEST_START';
exports.ACTION_USER_REQUEST_END = 'USER_REQUEST_END';
// ユーザーAPIへのリクエストステータス
exports.startUserRequest = () => ({ type: exports.ACTION_USER_REQUEST_START });
// ユーザーAPIへのリクエストステータス
exports.endUserRequest = () => ({ type: exports.ACTION_USER_REQUEST_END });
// ユーザー情報は最初に必ずロードするため、初期ステータスはロード中
const userRequestStatus = (state = TwAppsConst_1.default.REQUEST_STATUS_LOADING, action) => {
    switch (action.type) {
        case exports.ACTION_USER_REQUEST_START:
            return TwAppsConst_1.default.REQUEST_STATUS_LOADING;
        case exports.ACTION_USER_REQUEST_END:
            return TwAppsConst_1.default.REQUEST_STATUS_COMPLETE;
        default:
            return state;
    }
};
exports.default = userRequestStatus;
//# sourceMappingURL=userRequestStatus.js.map