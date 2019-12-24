<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AuthrizedUsers extends Model
{
    protected $table = 'authrized_users';
    protected $fillable = ['user_id','token','token_secret'];

    public function getData() {

    }
}
