<?php
// ==================================================
//  動作検証用コントローラー
//  本番用コードとは関係ない動作確認はこのコントローラーに記述する
// ==================================================

namespace App\Http\Controllers;

require_once(__DIR__ . '/../../../vendor/autoload.php');

use Illuminate\Http\Request;

class TestController extends Controller {
    public function test() {
        return view('test.top');
    }
}
