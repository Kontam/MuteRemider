<?php
require_once(__DIR__ . '/TwitterAPIErrorCheck.php');

function summarizeUserInfo($user_obj)
{
    // デフォルトアイコンはnormalサイズ(48x48)なのでoriginalに変更(500x500)
    $original_image_url = replaceProfileImgUrl($user_obj->profile_image_url_https, 'original');

    return $simple_user_array = [
        "user_id"                 => $user_obj->id,
        "user_name"               => $user_obj->name,
        "screen_name"             => $user_obj->screen_name,
        "profile_image_url_https" => $original_image_url,
    ];
}

function summarizeMutedUsersInfo($users_obj)
{
    // API制限回数等のTwitterからのエラー処理
    $error_status = TwitterAPIErrorCheck($users_obj);
    if ($error_status !== "OK") {
        return $error_status;
    }

    // 不測の事態
    // デバッグ用にAPIのアドレスを直接売った時にddされるようにする
    if (! property_exists($users_obj, "users")) {
        dd($users_obj);
    }

    $users = $users_obj->users;
    $simple_users_array = [];

    foreach ($users as $user) {
        // デフォルトアイコンはnormalサイズ(48x48)なのでoriginalに変更(500x500)
        $original_image_url = replaceProfileImgUrl($user->profile_image_url_https, 'original');

        $simple_users_array[] = [
            "user_id"                 => $user->id,
            "user_name"               => $user->name,
            "screen_name"             => $user->screen_name,
            "user_url"                => $user->url,
            "profile_image_url_https" => $original_image_url,
            "muted"                   => true,
        ];
    }

    return $simple_users_array;
}

function summarizeTweetsInfo($tweets, $max_length = 3)
{
    $simple_tweets_array = [];

    foreach ($tweets as $tweet) {
        // 無省略テキストが存在すればそちらを使う
        if (property_exists($tweet, "full_text")) {
            $tweet_text = $tweet->full_text;
        } else {
            $tweet_text =  $tweet->text;
        }

        $media_infos = []; //メディア配列
        // メディアが存在しない場合はextended_entitiesキーが存在しない
        if (property_exists($tweet, "extended_entities")) {
            $media_array = $tweet->extended_entities->media;
            if (count($media_array) > 0) {
                foreach ($media_array as $media) {
                    $media_infos[] = [
                        "media_url_https" => $media->media_url_https,
                        "short_url" => $media->url,
                        "type" => $media->type,
                    ];
                }
            }
        }

        $simple_tweets_array[] = [
            "tweet_id"       => $tweet->id,
            "tweet_url"      => "https://twitter.com/" . $tweet->user->screen_name . "/status/" . $tweet->id_str,
            "tweet_text"     => $tweet_text,
            "retweet_count"  => $tweet->retweet_count,
            "favorite_count" => $tweet->favorite_count,
            "media_infos"    => $media_infos,
        ];
        // 表示最大数まで取得したら終了
        if (count($simple_tweets_array) === $max_length) {
            break;
        }
    }

    return $simple_tweets_array;
}

//========================================================
// Twitterのユーザーobject付属のアイコン画像URLの指定サイズ変更を行う
// 引数: 画像URL(str) 変更後のサイズ(str)
// original: 500x500
// bigger  : 73x73
// mini    : 24x24
// normal  : 48x48 （default）
//========================================================
function replaceProfileImgUrl($image_url, $size = 'original') {
    switch ($size) {
        default:
            $replaced_image_url = preg_replace('/_normal/', '', $image_url);
            return $replaced_image_url;
    }
}
