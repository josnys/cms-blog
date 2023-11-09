<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('is_suspended')->default(false);
            $table->boolean('is_banned')->default(false);
            $table->rememberToken();
            $table->timestamps();

            $table->foreignId('person_id')->constrained('people')->index();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
