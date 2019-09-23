<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{

    // テーブル名の指定
    protected $table = 'users';
    protected $fillable = ['screen_name']; // 挿入可能なカラム一覧

    public function getData() {

    }

}
