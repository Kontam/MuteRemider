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
Route::get('/login', 'LoginController@twLogin');
Route::get('/callback', 'LoginController@callback');
Route::get('/test', 'LoginController@test');

// Route::get('/show', 'MuteReminderController@list');
Route::get('/muter_top', 'MuteReminderController@top');

Route::get('/user_api', 'MuteReminderController@authorized_user_api');
Route::get('/list_api', 'MuteReminderController@list_api');
Route::get('/unmute/{screen_name}', 'MuteReminderController@unmute');
Route::get('/mute/{screen_name}', 'MuteReminderController@mute');
