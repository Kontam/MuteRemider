@extends('layouts.default')

@section('head')
    <link rel="stylesheet" href="css/muter_index.css">
@endsection

@section('title', 'あの人は今？チェッカー')
@section('body')
    <div class="react-homeapp"></div>
@endsection
@section('scripts')
    <script>
       <?php $tw_user_info = session('twUserInfo'); ?>
        var twUserInfo = {
            "user_id": "{{ $tw_user_info["user_id"] }}",
            "user_name": "{{ $tw_user_info["user_name"] }}",
            "screen_name": "{{ $tw_user_info["screen_name"] }}",
            "profile_image_url_https": "{{ $tw_user_info["profile_image_url_https"] }}",
        };
    </script>
    <script src="js/muter_index.js" charset="utf-8"></script>
@endsection
