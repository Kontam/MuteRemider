<!-- Gタグ等を含まないテスト用ページのテンプレート -->
@extends('test.template')

@section('title', '動作確認用ページ')
@section('body')
        <div class="react-test"></div>
@endsection
@section('scripts')
    <script src="js/test_index.js"></script>
@endsection
