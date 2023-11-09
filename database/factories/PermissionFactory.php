<?php

declare(strict_types=1);

namespace Database\Factories;

use Domains\User\Models\Permission;
use Illuminate\Support\Str;

use Illuminate\Database\Eloquent\Factories\Factory;

class PermissionFactory extends Factory
{
    protected $model = Permission::class;

    public function definition(): array
    {
        $name = implode(' ', fake()->words(2));

        return [
            'display_name' => $name,
            'slug' => Str::slug($name),
            'is_active' => fake()->boolean()
        ];
    }
}
