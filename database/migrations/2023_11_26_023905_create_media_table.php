<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->nullable(false);
            $table->string('name')->nullable(false);
            $table->string('url')->nullable(false);
            $table->string('type')->nullable(false);
            $table->string('mime_type')->nullable();
            $table->text('description')->nullable();
            $table->boolean('is_external')->default(false);
            $table->boolean('is_active')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('media');
    }
};
