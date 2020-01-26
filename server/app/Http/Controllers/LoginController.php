<?php

namespace App\Http\Controllers;

require_once(__DIR__ . '/../../../vendor/autoload.php');

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Abraham\TwitterOAuth\TwitterOAuth;

use App\AuthrizedUsers;

class LoginController extends Controller
{
    /**
     * bffで認証完了後にアクセスするAPI
     * 取得したアクセストークンをidとセットで保存する
     */
    public function storeToken(Request $request)
    {
      $auth_token = $_GET['twitter_token'];
      $auth_token_secret = $_GET['twitter_token_secret'];
      $user_id = $_GET['user_id'];

      //登録済みのユーザーではなければ情報を保存
      if (!AuthrizedUsers::isUserAuthrized($user_id)){
        AuthrizedUsers::createUser($user_id, $auth_token, $auth_token_secret);
      }
      return 'success';
    }

    /**
     * ユーザーが認証済みであるかをチェックする
     * @param {string} user_id
     */
    public function checkAuthrized(Request $request)
    {
      if (! array_key_exists('user_id', $_GET)) return 'invalid paramator';

      $user_id = $_GET['user_id'];
      //登録済みユーザーかどうかをチェック
      if (AuthrizedUsers::isUserAuthrized($user_id)) {
        response()->json(AuthrizedUsers::getUser($user_id));
      }
      return 'unauthrized';
    }
}
