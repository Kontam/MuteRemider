import { Request, Response } from 'express';
import BffConst from '../const';


const jwt = require('jsonwebtoken');

/**
 * ログイン成功後の処理
 */
exports.login_success = async function(req :Request, res: Response) {
  res.redirect(BffConst.FRONT_MUTER_SLUG);
}


exports.login_failure = async function(req :Request,res: Response) {

}
