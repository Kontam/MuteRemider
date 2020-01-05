"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRequestStatus_1 = require("../meta/userRequestStatus");
const requestToServer_1 = __importDefault(require("../../../modules/requestToServer"));
exports.ACTION_CHANGE_USER_INFO = 'CHANGE_USER_INFO';
// ミュートユーザーのリストを取得し、ミュート状態のstateを初期化する
exports.requestUserInfo = (endpoint) => (dispatch) => {
    dispatch(userRequestStatus_1.startUserRequest());
    requestToServer_1.default(endpoint)
        .then(({ data }) => {
        // console.log(data);
        const userInfo = data;
        // if ('code' in data[0]) {
        //   dispatch(setErrMessage(data[0].message));
        //   dispatch(endUserRequest());
        //   return;
        // }
        dispatch(userRequestStatus_1.endUserRequest());
        // ミュートユーザーをstoreに登録
        dispatch(exports.setUserInfo(userInfo));
    });
};
exports.setUserInfo = (userInfo) => ({ type: exports.ACTION_CHANGE_USER_INFO, payload: userInfo });
const userInfo = (state = {}, action) => {
    switch (action.type) {
        case exports.ACTION_CHANGE_USER_INFO:
            return action.payload;
        default:
            return state;
    }
};
exports.default = userInfo;
//# sourceMappingURL=userInfo.js.map