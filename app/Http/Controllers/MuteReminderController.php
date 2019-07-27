<?php

namespace App\Http\Controllers;

require_once(__DIR__ . '/../../../vendor/autoload.php');
require_once(__DIR__ . '/../../modules/createTwitterConnection.php');
require_once(__DIR__ . '/../../modules/summarizeTwitterObjects.php');


use Illuminate\Http\Request;
use Abraham\TwitterOAuth\TwitterOAuth;

class MuteReminderController extends Controller
{
    public function list(Request $request)
    {
        //TwitterOAuthのインスタンスを生成する
        $objTwitterConnection = createTwitterConnection();
        $tweets_params = [];
        $tweets_params = ['count' => 10];

        $muted_users = $objTwitterConnection->get('mutes/users/list', $tweets_params);
        $users_tweets = [];
        foreach ($muted_users->users as $muted_user) {
            $users_tweets_params = [
                'user_id' => $muted_user->id,
                'count' => 20,
                'trim_user' => true, //ユーザー情報は省略
                'exclude_replies' => true, // リプライは含まない
                'include_rts' => false, //リツイートは含まない
            ];
            $users_tweets[] = $objTwitterConnection->get('statuses/user_timeline', $users_tweets_params);
        }
        return view('muter.list', compact('muted_users', 'users_tweets'));
    }

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

        return response()->json(summarizeUserInfo($authorized_user_info));
    }

    public function list_api(Request $request)
    {
        //TwitterOAuthのインスタンスを生成する
        $objTwitterConnection = createTwitterConnection();

        $tweets_params = [];
        $tweets_params = ['count' => 10];

        // ミュートユーザーの情報を取得し、不要な情報を削る
        $muted_users = $objTwitterConnection->get('mutes/users/list', $tweets_params);
        $simple_users_array = summarizeMutedUsersInfo($muted_users);

        // ミュートユーザーごとのツイートを取得し、不要な情報を削る
        foreach ($simple_users_array as $muted_user) {
            $users_tweets_params = [
                'user_id' => $muted_user["user_id"],
                'count' => 20,
                'exclude_replies' => true, // リプライは含まない
                'include_rts' => false, //リツイートは含まない
            ];
            $user_tweets = $objTwitterConnection->get('statuses/user_timeline', $users_tweets_params);
            // ユーザーごとの配列になるようにデータを格納
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

        return redirect('/show');
    }

    public function top()
    {
        return view('muter.top');
    }
}
