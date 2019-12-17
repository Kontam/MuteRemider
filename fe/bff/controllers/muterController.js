const Const = require('../const');
const execRequest = require('../modules/execRequest');

exports.muter_top = async function(req, res) {
  // const responce = await execRequest(Const.API_MUTER_TOP_SLUG);
  // console.log("muter_top", responce.data);
  // res.send(responce.data[0]);
  res.send("authed");
}

exports.muter_user_info = function(req, res) {
}
