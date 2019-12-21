<?php
require_once(__DIR__ . '/../../vendor/autoload.php');
use Abraham\TwitterOAuth\TwitterOAuth;

function createTwitterConnection() {
    ##########################################################
    ###アクセストークン確認
    $twAccessToken = session('twAccessToken');
    if (! $twAccessToken) {
        // エラー配列を生成して返却する
        $errors_array = [];
        $errors_array[] = [
            "code" => 911,
            "message" => "不正なアクセスです。\r\n" .
                "TOPページからログインしてください。",
        ];
        return $errors_array;
    }
    ##########################################################
    ### ユーザー情報の取得
    //TwitterOAuthクラスをインスタンス化
    $objTwitterConnection = new TwitterOAuth(
        config('const.CONSUMER_KEY'),
        config('const.CONSUMER_SECRET'),
        $twAccessToken['oauth_token'],
        $twAccessToken['oauth_token_secret']
    );

    return $objTwitterConnection;
}

/**
 * パラメーターでtokenを渡して認証を行う
 */
function createTwitterConnectionWithToken($token, $token_secret) {
  $objTwitterConnection = new TwitterOAuth(
    config('const.CONSUMER_KEY'),
    config('const.CONSUMER_SECRET'),
    $token,
    $token_secret
  );
  return $objTwitterConnection;
}

// 返却されたTwitterConnectionのエラーチェック
function checkTwitterConnection($objTwitterConnection) {
    if (is_array($objTwitterConnection)) {
        return false;
    }
    return true;
}
