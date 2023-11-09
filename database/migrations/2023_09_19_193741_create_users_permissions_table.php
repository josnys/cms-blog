<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users_permissions', function (Blueprint $table) {
            $table->foreignId('user_id')->on('users')->onDelete('cascade');
            $table->foreignId('permission_id')->on('permissions')->onDelete('cascade');

            $table->primary(['user_id', 'permission_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users_permissions');
    }
};
