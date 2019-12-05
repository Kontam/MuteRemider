<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// 外部ユーザーからのアクセスを許可しないAPIなので、CSRF対策済みのweb.phpが適切
// こちらでセッションを有効にするためにはkarnel.phpの編集が必要
// Route::get('/list_api', 'MuteReminderController@test');
