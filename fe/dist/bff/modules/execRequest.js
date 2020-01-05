"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = __importDefault(require("../const"));
const apiBaseUrl = const_1.default.API_BASE_URL;
const axiosBase = require('axios');
const axios = axiosBase.create({
    baseURL: apiBaseUrl,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
});
const execRequest = (slug, params) => axios.get(slug, params).then((data) => {
    return data;
});
exports.default = execRequest;
//# sourceMappingURL=execRequest.js.map