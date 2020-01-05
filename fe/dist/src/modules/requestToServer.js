"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const requestToServer = (endpoint, params = {}) => axios_1.default
    .get(endpoint, params)
    .then((result) => {
    const { data, status } = result;
    return { data, status };
});
exports.default = requestToServer;
//# sourceMappingURL=requestToServer.js.map