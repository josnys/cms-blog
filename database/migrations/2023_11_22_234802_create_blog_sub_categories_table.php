<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('blog_sub_categories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('blog_category_id')->constrained();
            $table->string('name')->nullable(false);
            $table->string('slug')->nullable(false);
            $table->boolean('show_main_menu')->default(false);
            $table->boolean('is_active')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('blog_sub_categories');
    }
};
