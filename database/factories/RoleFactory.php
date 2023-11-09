<?php

declare(strict_types=1);

namespace Database\Factories;

use Illuminate\Support\Str;
use Domains\User\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class RoleFactory extends Factory
{
    protected $model = Role::class;

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
