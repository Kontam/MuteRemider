<?php

function summarizeUsersInfo($users_obj) {
    $users = $users_obj->users;
    $simple_users_array = [];

    foreach ($users as $user) {
        $simple_users_array[] = [
            "user_id"                      => $user->id,
            "user_name"                    => $user->name,
            "screen_name"             => $user->screen_name,
            "user_url"                     => $user->url,
            "profile_image_url_https" => $user->profile_image_url_https,
        ];
    }

    return $simple_users_array;
}

function summarizeTweetsInfo($tweets) {
    $simple_tweets_array = [];

    foreach ($tweets as $tweet) {
        $simple_tweets_array[] = [
            "tweet_id" => $tweet->id,
            "tweet_url" => "https://twitter.com/" . $tweet->user->screen_name . "/status/" . $tweet->id_str,
            "tweet_text" => $tweet->text,
            "retweet_count" => $tweet->retweet_count,
            "favorite_count" => $tweet->favorite_count,
        ];
    }

    return $simple_tweets_array;
}
