<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_meta_data', function (Blueprint $table) {
            $table->id();
            $table->string('cpf', 30)->nullable();
            $table->string('nick', 30);
            $table->string('cep', 10)->nullable();
            $table->string('address', 100)->nullable();
            $table->string('number', 10)->nullable();
            $table->string('complement', 50)->nullable();
            $table->string('district', 50)->nullable();
            $table->string('state', 50)->nullable();
            $table->string('sex', 25)->nullable();
            $table->string('marital_status', 25)->nullable();
            $table->date('birth_date');
            $table->unsignedBigInteger('user_id');
 
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_meta_data');
    }
};
