<?php
require_once(__DIR__ . '/../../vendor/autoload.php');
use Abraham\TwitterOAuth\TwitterOAuth;

function createTwitterConnection() {
    ##########################################################
    ###アクセストークン確認
    $twAccessToken = session('twAccessToken');
    if (! $twAccessToken) {
        echo "不正なアクセスです\r\n";
        print_r(session()->all());
        exit;
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
