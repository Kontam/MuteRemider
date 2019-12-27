const express = require("express");
const next = require("next");
const http = require("http");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const port :any = parseInt(process.env.PORT as string, 10) || 80;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
import BffConst from './const'; //Nextの初期処理以降に記述しなければDotenvが動作しない

const login_controller = require('./controllers/loginController');
const muter_controller = require('./controllers/muterController');
const common_controller = require('./controllers/commonController');
const auth = require('./modules/twitterPassport');
const passport = auth.passport;

export {};

nextApp.prepare().then(() => {
  const app = express();
  app.use(cookieParser());
  app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: false,
      // trueが推奨だがhttps通信が必須になるのでproiductionのみとする
      cookie: { secure: process.env.NODE_ENV === 'production' }
    })
  )
  //認証のセッションを初期化
  app.use(passport.initialize());
  app.use(passport.session());


  app.get("/login", login_controller.login_check);
  app.get(BffConst.TWITTER_LOGIN_SLUG, passport.authenticate('twitter'));

  app.get("/callback", passport.authenticate('twitter',
    {
      successRedirect: '/success',
      failureRedirect: '/failure',
    })
  );
  app.get("/success", login_controller.login_success);

  //共通API
  app.get(BffConst.USER_INFO_SLUG, common_controller.user_info);

  //ミュートリマインダーAPI
  // app.get(BffConst.MUTER_TOP_SLUG, muter_controller.muter_top);
  app.get(BffConst.MUTED_LIST_SLUG, muter_controller.muter_muted_users);

  // pages/muteriminder
  app.get(BffConst.FRONT_MUTER_SLUG, (req: any, res: any) => {
    const token = req.cookies.token || "";
    if (token) {
      return handle(req, res);
    } else {
      console.log("not authrized");
      res.redirect(BffConst.LOGIN_CHECK_SLUG);
    }
  })

  app.get("*", (req :any, res:any) => {
    return handle(req, res);
  });


  const server = http.createServer(app);
  server.listen(port, (err :any) => {
    if (err) throw err;
    console.log(`>Server is running`);
  });
});

