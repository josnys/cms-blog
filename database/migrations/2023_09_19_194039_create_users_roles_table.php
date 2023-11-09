<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users_roles', function (Blueprint $table) {
            $table->foreignId('user_id')->on('users')->onDelete('cascade');
            $table->foreignId('role_id')->on('roles')->onDelete('cascade');

            $table->primary(['user_id', 'role_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users_roles');
    }
};
