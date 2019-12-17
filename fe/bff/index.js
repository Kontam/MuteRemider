const express = require("express");
const next = require("next");
const http = require("http");
// const session = require("express-session");
const port = parseInt(process.env.PORT, 10) || 80;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const auth = require('./modules/twitterPassport');
const passport = auth.passport;
const login_controller = require('./controllers/loginController');
const muter_controller = require('./controllers/muterController');
const Const = require('./const');

nextApp.prepare().then(() => {
  const app = express();

  app.use(
    require('express-session')({
      secret: "secret",
      resave: true,
      saveUninitialized: false,
      cookie: { secure: process.env.NODE_ENV == 'production' }
    })
  )
  //認証のセッションを保存
  app.use(passport.initialize());
  app.use(passport.session());

  // console.log(passport);

  app.get("/login", passport.authenticate('twitter'));
  // app.get("/callback", (req, res) => {
  //   console.log(req.session);
  //   console.log("callback", passport);
  //   console.log("callback", passport._strategies.session);
  //   const callbackURL = `${Const.BASE_URL}${Const.API_CALLBACK_SLUG}`;
  //   console.log("url",callbackURL);

  //   var session = req.session;
  //   if (!!session.visitCount) {
  //     session.visitCount += 1;
  //   } else {
  //     session.visitCount = 1;
  //   }
  //   res.send("hello");
  // });
  app.get("/callback", passport.authenticate('twitter',
    {
      successRedirect: '/muter',
      failureRedirect: '/failure',
    })
  );

  app.get("/muter", muter_controller.muter_top);

  app.get("*", (req, res) => {
    return handle(req, res);
  });


  const server = http.createServer(app);
  server.listen(port, err => {
    if (err) throw err;
    console.log(`>Server is running`);
  });
});
