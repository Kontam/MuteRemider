<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MutedUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //ミュートされたユーザーをミュートした人ごとに記録する
        Schema::create('muted_users', function (Blueprint $table){
            $table->increments('id');
            $table->string('user_id');
            $table->string('screen_name');
            $table->string('muted_by');
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
        Schema::drop('muted_users');
    }
}
