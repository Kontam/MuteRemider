<?php

namespace App\Http\Controllers;

require_once(__DIR__ . '/../../../vendor/autoload.php');
require_once(__DIR__ . '/../../modules/createTwitterConnection.php');
require_once(__DIR__ . '/../../modules/summarizeTwitterObjects.php');
// require_once(__DIR__ . '/../../Users.php');


use Illuminate\Http\Request;
use Abraham\TwitterOAuth\TwitterOAuth;
// use Illuminate\Database\Eloquent\Model;
use App\Users;

class MuteReminderController extends Controller
{
    // ==================================================
    // 認証したユーザーの情報を取得するAPI
    // ==================================================
    public function authorized_user_api() {
        //TwitterOAuthのインスタンスを生成する
        $objTwitterConnection = createTwitterConnection();

        $params = [
            'include_entities' => false,
            'skip_status'      => true,
            'include_email'    => false
        ];

        $authorized_user_info = $objTwitterConnection->get('account/verify_credentials', $params);
        $summarized_user_info = summarizeUserInfo($authorized_user_info);

        // 利用経験のあるユーザーかどうかを検証する
        $notNewUser = Users::where('screen_name', $summarized_user_info["screen_name"])->get();

        if(count($notNewUser) === 0) {
            // 初めて利用したユーザー情報をDBにロギングする
            Users::create([
                'screen_name' => $summarized_user_info["screen_name"],
            ]);
        }

        return response()->json($summarized_user_info);
    }

    public function list_api(Request $request)
    {
        //TwitterOAuthのインスタンスを生成する
        $objTwitterConnection = createTwitterConnection();

        $tweets_params = [];
        $tweets_params = ['count' => 20];

        // ミュートユーザーの情報を取得し、不要な情報を削る
        $muted_users = $objTwitterConnection->get('mutes/users/list', $tweets_params);
        $simple_users_array = summarizeMutedUsersInfo($muted_users);

        // エラー配列が返還されていた場合はそれをレスポンスとして返却
        if (array_key_exists("code", $simple_users_array[0])) {
            return response()->json($simple_users_array);
        }

        // ミュートユーザーごとのツイートを取得し、不要な情報を削る
        foreach ($simple_users_array as $muted_user) {
            $users_tweets_params = [
                'user_id' => $muted_user["user_id"],
                'count' => 20,
                'exclude_replies' => true, // リプライは含まない
                'include_rts' => false, //リツイートは含まない
                "tweet_mode" => "extended",
            ];
            $user_tweets = $objTwitterConnection->get('statuses/user_timeline', $users_tweets_params);
            // ユーザーごとの配列になるようにデータを格納
            // dd($user_tweets);
            $return_array[] = [
                "muted_user" => $muted_user,
                "tweets_info" => summarizeTweetsInfo($user_tweets)
            ];
        }
        return response()->json($return_array);
    }

    public function unmute($screen_name) {
        //TwitterOAuthのインスタンスを生成する
        $objTwitterConnection = createTwitterConnection();

        $unmute_params = ['screen_name' => $screen_name];

        $result = $objTwitterConnection->post('mutes/users/destroy', $unmute_params);

        return response()->json($result);
    }

    public function mute($screen_name) {
        //TwitterOAuthのインスタンスを生成する
        $objTwitterConnection = createTwitterConnection();

        $mute_params = ['screen_name' => $screen_name];

        $result = $objTwitterConnection->post('mutes/users/create', $mute_params);

        return response()->json($result);
    }


    public function top()
    {
        return view('muter.top');
    }
}
