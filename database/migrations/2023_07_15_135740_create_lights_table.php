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
        Schema::create('lights', function (Blueprint $table) {
            // ID
            $table->id();
            // Active
            $table->boolean('status')->default(true);
            // Name
            $table->string('name');
            // Description
            $table->string('description')->nullable();
            // Grupo
            $table->string('group_id')->nullable();
            // TimeStamps
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lights');
    }
};
