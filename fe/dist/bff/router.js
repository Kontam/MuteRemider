"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// var express = require('express')
var router = express_1.default.Router();
const Router = (app, nextApp) => {
    const handle = nextApp.getRequestHandler();
    router.get("*", (req, res) => {
        return handle(req, res);
    });
};
module.exports = Router;
//# sourceMappingURL=router.js.map