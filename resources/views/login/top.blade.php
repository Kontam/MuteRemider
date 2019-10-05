@extends('layouts.default')

@section('head')
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/websaite#">
<meta property="og:url" content="https://konkonta.com/apps/MuteReminder/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="あの人は今？チェッカー" />
<meta property="og:description" content="【登録不要】twitterでミュートしたユーザーを一覧表示　ミュート解除やツイートのチラ見ができるWebアプリ" />
<meta property="og:site_name" content="あの人は今？チェッカー" />
<meta property="og:image" content="img/slides/muter-slide2.jpg" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@cha-han5656" />

<link rel="stylesheet" href="css/login_index.css">
<link rel="stylesheet" href="https://use.typekit.net/jdw4aor.css">
@endsection

@section('title','ログイン｜あの人は今？チェッカー')
@section('body')
    <div class="react-login"></div>
  </body>
</html>
@endsection
@section('scripts')
    <script src="js/login_index.js"></script>
@endsection
