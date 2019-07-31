<?php
function summarizeUserInfo($user_obj)
{
    return $simple_user_array = [
        "user_id"                 => $user_obj->id,
        "user_name"               => $user_obj->name,
        "screen_name"             => $user_obj->screen_name,
        "profile_image_url_https" => $user_obj->profile_image_url_https,
    ];
}

function summarizeMutedUsersInfo($users_obj)
{
    if (! property_exists($users_obj, "users")) {
        dd($users_obj);
    }

    $users = $users_obj->users;
    $simple_users_array = [];

    foreach ($users as $user) {
        $simple_users_array[] = [
            "user_id"                 => $user->id,
            "user_name"               => $user->name,
            "screen_name"             => $user->screen_name,
            "user_url"                => $user->url,
            "profile_image_url_https" => $user->profile_image_url_https,
            "muted"                   => true,
        ];
    }

    return $simple_users_array;
}

function summarizeTweetsInfo($tweets)
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
    }

    return $simple_tweets_array;
}
