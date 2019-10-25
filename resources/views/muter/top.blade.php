@extends('layouts.default')

@section('head')
    <link rel="stylesheet" href="css/muter_index.css">
@endsection

@section('title', 'あの人は今？チェッカー')
@section('body')
    <div class="react-homeapp"></div>
@endsection
@section('scripts')
    <script src="js/muter_index.js" charset="utf-8"></script>
    <script>
      var twUserInfo = {
        "user_id": {{ session('user_id') }},
        "screen_name": {{ session('screen_name') }},
      };
    </script>
@endsection
