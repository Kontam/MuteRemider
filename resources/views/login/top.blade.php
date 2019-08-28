@extends('layouts.default')

@section('title','ログイン｜あの人は今？チェッカー')
@section('body')
    <div class="react-login"></div>
    <a href={!! url('/login') !!}>ログイン</a>
  </body>
</html>
@endsection
@section('scripts')
    <script src="js/login_index.js"></script>
@endsection
