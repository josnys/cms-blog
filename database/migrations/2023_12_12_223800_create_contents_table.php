<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->nullable(false);
            $table->foreignId('blog_category_id')->constrained();
            $table->foreignId('blog_sub_category_id')->nullable();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('cover_id')->nullable();
            $table->string('name')->nullable();
            $table->text('intro', 200)->nullable();
            $table->text('body')->nullable(false);
            $table->boolean('is_active')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contents');
    }
};
