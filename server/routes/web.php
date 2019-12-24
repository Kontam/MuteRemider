<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'LoginController@top');
// Route::get('/login_api', 'LoginController@twLogin');
// Route::get('/callback', 'LoginController@callback');
Route::get('/login_store_api', 'LoginController@storeToken');

// Route::get('/show', 'MuteReminderController@list');
Route::get('/muter_top', 'MuteReminderController@top');

Route::get('/user_api', 'MuteReminderController@authorized_user_api');
Route::get('/muted_list_api', 'MuteReminderController@list_api');
Route::get('/unmute/{screen_name}', 'MuteReminderController@unmute');
Route::get('/mute/{screen_name}', 'MuteReminderController@mute');

// ブロックユーザー
Route::get('/block_list_api', 'BlockReminderController@block_list');

// テストコード
// 動作確認を行わないときはコメントアウトされていて良い
Route::get('/test', 'TestController@test');
