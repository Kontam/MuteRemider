<?php

namespace App\Http\Controllers;

require_once(__DIR__ . '/../../../vendor/autoload.php');
require_once(__DIR__ . '/../../modules/createTwitterConnection.php');
require_once(__DIR__ . '/../../modules/summarizeTwitterObjects.php');
require_once(__DIR__ . '/../../modules/requestToTwitterAPI.php');

use Illuminate\Http\Request;
use App\Users;

class BlockReminderController extends Controller
{
  public function block_list(Request $request)
  {
    // TwitterOAuthのインスタンスを生成する
    $objTwitterConnection = createTwitterConnection();
    // エラー配列が返却されて入ればそれがレスポンスになる
    if(! checkTwitterConnection($objTwitterConnection)) {
        return response()->json($objTwitterConnection);
    }

    $api_params = [
      "include_entities" => false,
    ];

    //ブロックユーザーを取得する
    $blocked_users = $objTwitterConnection->get('blocks/list', $api_params);
    $simple_users_array = summarizeBlockedUserInfo($blocked_users);

    // エラー配列が返還されていた場合はそれをレスポンスとして返却
    if (count($simple_users_array)) {
      if (array_key_exists("code", $simple_users_array[0])) {
          return response()->json($simple_users_array);
      }
    } else {
        // レコード0の場合はnodataを１番上に入れたエラー配列を返す
        $nodata_error = [
            [
                "code" => 901,
                "message" => "ブロックしているユーザーが存在しません。\r\n" .
                    "ブロック機能を有効活用しましょう。",
            ]
        ];
        return response()->json($nodata_error);
    };

    $return_array = [];
    // ミュートユーザーごとのツイートを取得し、不要な情報を削る
    foreach ($simple_users_array as $blocked_user) {
        $users_tweets_params = [
            'user_id' => $blocked_user["user_id"],
            'count' => 20,
            'exclude_replies' => true, // リプライは含まない
            'include_rts' => false, //リツイートは含まない
            "tweet_mode" => "extended",
        ];
        $user_tweets = $objTwitterConnection->get('statuses/user_timeline', $users_tweets_params);
        // ユーザーごとの配列になるようにデータを格納
        // dd($user_tweets);
        $return_array[] = [
            "muted_user" => $blocked_user,
            "tweets_info" => summarizeTweetsInfo($user_tweets)
        ];
    }

    dd($return_array);
  }
}
