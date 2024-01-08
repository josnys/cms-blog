<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('gallery_details', function (Blueprint $table) {
            $table->foreignId('gallery_id')->onDelete('cascade');
            $table->foreignId('media_id')->onDelete('cascade');

            $table->primary(['gallery_id', 'media_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gallery_details');
    }
};
