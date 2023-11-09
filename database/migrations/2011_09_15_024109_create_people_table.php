<?php
declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->nullable(false);

            $table->string('firstname')->nullable(false);
            $table->string('lastname')->nullable();
            $table->date('dob')->nullable();
            $table->text('bio')->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('profile_url')->nullable();
            $table->boolean('is_active')->default(true);
            $table->boolean('is_banned')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('people');
    }
};
