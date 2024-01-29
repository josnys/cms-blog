<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('publications', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable(false);
            $table->string('website')->nullable(false);
            $table->string('address_one')->nullable(false);
            $table->string('address_two')->nullable();
            $table->string('city')->nullable(false);
            $table->string('state')->nullable(false);
            $table->string('country')->nullable(false);
            $table->string('zipcode')->nullable(false);
            $table->string('gps_location')->nullable();
            $table->boolean('is_active')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('publications');
    }
};
