<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MutedUsers extends Model
{

    protected $table = 'muted_users';
    protected $fillable = ['user_id', 'screen_name', 'muted_by']; //挿入可能なカラム一覧

    public static function createMuterUserList($tw_user_id, $simple_users_array) {
      foreach ($simple_users_array as $muted_user) {
          $where = [
              ['user_id', '=', $muted_user["user_id"]],
              ['muted_by', '=', $tw_user_id],
          ];
          if (!MutedUsers::where($where)->exists()) {
              MutedUsers::create([
                 'user_id' => $muted_user["user_id"],
                 'screen_name' => $muted_user["screen_name"],
                 'muted_by' => $tw_user_id,
              ]);
          }
      };
      return true;
    }
}
