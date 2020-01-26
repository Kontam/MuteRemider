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

// ログイン API
Route::get('/login_store_api', 'LoginController@storeToken');
Route::get('/login_check_api', 'LoginController@checkAuthrized');

// MuteRimider API
Route::get('/user_info_api', 'MuteReminderController@user_info');
Route::get('/muted_list_api', 'MuteReminderController@list_api');
Route::get('/unmute_api/{screen_name}', 'MuteReminderController@unmute');
Route::get('/mute_api/{screen_name}', 'MuteReminderController@mute');

// ブロックユーザー
Route::get('/block_list_api', 'BlockReminderController@block_list');
