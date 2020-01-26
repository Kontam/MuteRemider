<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{

    // テーブル名の指定
    protected $table = 'users';
    protected $fillable = ['screen_name', 'user_id']; // 挿入可能なカラム一覧

    public static function isUserExists($screen_name) {
      return Users::where(config('pg-const.USERS_SCREEN_NAME'), $screen_name)->exists();
    }

    public static function createUser($user_id, $screen_name) {
        // 初めて利用したユーザー情報をDBにロギングする
        Users::create([
           config('pg-const.USERS_SCREEN_NAME') => $screen_name,
           config('pg-const.USERS_USER_ID') => $user_id,
        ]);
    }
}
