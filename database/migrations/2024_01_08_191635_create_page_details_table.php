<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('page_details', function (Blueprint $table) {
            $table->foreignId('page_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->string('type')->nullable(false);
            $table->unsignedBigInteger('block_id')->nullable(false);
            $table->integer('order')->default(1);
            $table->boolean('is_active')->default(false);

            $table->primary(['page_id', 'type', 'block_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('page_details');
    }
};
