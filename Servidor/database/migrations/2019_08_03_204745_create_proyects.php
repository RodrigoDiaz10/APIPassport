<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProyects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proyects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('students_id')->unsigned();
            $table->foreign('students_id')->references('id')->on('students');
            $table->bigInteger('teachers_id')->unsigned();
            $table->foreign('teachers_id')->references('id')->on('teachers');
            $table->bigInteger('forms_id')->unsigned();
            $table->foreign('forms_id')->references('id')->on('forms');
            $table->bigInteger('Qualifications_id')->unsigned();
            $table->foreign('Qualifications_id')->references('id')->on('Qualifications');
            $table->string('aceptacion');
            $table->string('state')->default('ACTIVE');
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
        Schema::dropIfExists('proyects');
    }
}
