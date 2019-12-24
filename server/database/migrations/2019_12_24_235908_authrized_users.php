<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AuthrizedUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //認証されたユーザーのトークンを保存する
        Schema::create('authrized_users', function(Blueprint $table){
          $table->string('user_id')->primary();
          $table->string('token');
          $table->string('token_secret');
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::drop('authrized_users');
    }
}
