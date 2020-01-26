<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AuthrizedUsers extends Model
{
    protected $table = 'authrized_users';
    protected $fillable = ['user_id','token','token_secret'];

    public static function isUserAuthrized($user_id) {
      return AuthrizedUsers::where('user_id',$user_id)->exists();
    }

    public static function createUser($user_id, $auth_token, $auth_token_secret) {
      AuthrizedUsers::create([
        'user_id' => $user_id,
        'token' => $auth_token,
        'token_secret' => $auth_token_secret,
      ]);
    }

    public static function getUser($user_id) {
      return AuthrizedUsers::where('user_id', $user_id)->first();
    }
}
