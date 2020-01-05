"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const express = require("express");
const next = require("next");
const http = require("http");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const routes = require("next-routes");
// const port :any = parseInt(process.env.PORT as string, 10) || 80;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev, conf: { distDir: 'next' } });
const const_1 = __importDefault(require("./const")); //Nextの初期処理以降に記述しなければDotenvが動作しない
const login_controller = require('./controllers/loginController');
const muter_controller = require('./controllers/muterController');
const common_controller = require('./controllers/commonController');
const auth = require('./modules/twitterPassport');
const passport = auth.passport;
const handle = routes().getRequestHandler(nextApp);
const server = express();
server.use(cookieParser());
server.use(session({
    // secret: process.env.SESSION_SECRET,
    secret: "temp secret",
    resave: false,
    saveUninitialized: false,
    // trueが推奨だがhttps通信が必須になるのでproiductionのみとする
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));
//認証のセッションを初期化
server.use(passport.initialize());
server.use(passport.session());
//ログイン
server.get(const_1.default.LOGIN_CHECK_SLUG, login_controller.login_check);
server.get(const_1.default.TWITTER_LOGIN_SLUG, passport.authenticate('twitter'));
server.get("/callback", passport.authenticate('twitter', {
    successRedirect: '/success',
    failureRedirect: '/failure',
}));
server.get("/success", login_controller.login_success);
//共通API
server.get(const_1.default.USER_INFO_SLUG, common_controller.user_info);
//ミュートリマインダーAPI
server.get(const_1.default.MUTED_LIST_SLUG, muter_controller.muter_muted_users);
server.get(`${const_1.default.UNMUTE_USER_SLUG}/:screen_name`, muter_controller.muter_unmute_user);
server.get(`${const_1.default.MUTE_USER_SLUG}/:screen_name`, muter_controller.muter_mute_user);
// pages/muteriminder
server.get(const_1.default.FRONT_MUTER_SLUG, (req, res) => {
    const token = req.cookies.token || "";
    if (token) {
        return handle(req, res);
    }
    else {
        console.log("not authrized");
        res.redirect(const_1.default.LOGIN_CHECK_SLUG);
    }
});
server.get("*", (req, res) => {
    return handle(req, res);
});
// const server = http.createServer(app);
// server.listen(port, (err :any) => {
//   if (err) throw err;
//   console.log(`>Server is running`);
// });
exports.Next = functions.https.onRequest(server);
//# sourceMappingURL=index.js.map