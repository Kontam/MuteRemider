<?php

namespace App\Http\Controllers;

require_once(__DIR__ . '/../../../vendor/autoload.php');

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Abraham\TwitterOAuth\TwitterOAuth;


class LoginController extends Controller
{
    public function top()
    {
        return view('login.top');
    }

    public function twLogin(Request $request)
    {
        $consumer_key = config('const.CONSUMER_KEY');
        $consumer_secret = config('const.CONSUMER_SECRET');

        $connection = new TwitterOAuth($consumer_key, $consumer_secret);
        $request_token = $connection->oauth('oauth/request_token', array('oauth_callback' => url('/callback')));

        session([
            'oauth_token' => $request_token['oauth_token'],
            'oauth_token_secret' => $request_token['oauth_token_secret'],
        ]);
        $url = $connection->url('oauth/authenticate', array('oauth_token' => $request_token['oauth_token']));

        return redirect()->away($url, 302, []);
    }

    public function callback(Request $request)
    {
        $request_token = [];
        $request_token['oauth_token'] = session('oauth_token');
        $request_token['oauth_token_secret'] = session('oauth_token_secret');

        if (empty($_REQUEST['oauth_token']) || $request_token['oauth_token'] !== $_REQUEST['oauth_token']) {
            print_r($_REQUEST);
            print_r($request_token);
        }

        $connection = new TwitterOAuth(config('const.CONSUMER_KEY'), config('const.CONSUMER_SECRET'), $request_token['oauth_token'], $request_token['oauth_token_secret']);
        $access_token = $connection->oauth("oauth/access_token", array("oauth_verifier" => $_REQUEST['oauth_verifier']));

        session(['twAccessToken' => $access_token]);
        $responce = [
          "message" => "succeed",
        ];
        return responce()->json($responce);
    }
}
