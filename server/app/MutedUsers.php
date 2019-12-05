<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MutedUsers extends Model
{

    protected $table = 'muted_users';
    protected $fillable = ['user_id', 'screen_name', 'muted_by']; //挿入可能なカラム一覧
    //

    public function getData() {

    }
}
