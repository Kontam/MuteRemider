@extends('layouts.default')

@section('head')
@include('common_parts.ogp')
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
