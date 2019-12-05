@extends('layouts.default')

@section('title','あの人は今？チェッカー')
@section('body')
    <?php for ($i = 0; $i < count($muted_users->users); $i++) :
        $muted_user = $muted_users->users[$i];
        ?>
        <p>
            <?php echo $muted_user->name . '</br>' ?>
            <?php echo $muted_user->screen_name . '</br>' ?>
            <img src="<?php echo $muted_user->profile_image_url_https ?>"/>
            <a href="{{ url('/unmute', $muted_user->screen_name) }}">ミュート解除</a></br>
            <?php foreach ($users_tweets[$i] as $users_tweet) : ?>
                <?php echo $users_tweet->created_at . '</br>' ?>
                <?php echo $users_tweet->text . '</br>' ?>
            <?php endforeach ?>
        </p>
    <?php endfor ?>
@endsection
