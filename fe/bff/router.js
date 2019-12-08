
var express = require('express')
var router = express.Router()

const Router = (app, nextApp) => {
  const handle = nextApp.getRequestHandler();

  router.get("*", (req, res) => {
    return handle(req, res);
  });
};

module.exports = Router;
