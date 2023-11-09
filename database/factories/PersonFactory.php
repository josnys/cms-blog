<?php
declare(strict_types=1);

namespace Database\Factories;

use Domains\User\Models\Person;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Person>
 */
class PersonFactory extends Factory
{
    protected $model = Person::class;

    public function definition(): array
    {
        return [
            'firstname' => fake()->firstName(),
            'lastname' => fake()->lastName(),
            'dob' => fake()->dateTimeBetween('1980-01-01', '2020-01-01'),
            'bio' => fake()->paragraph(),
            'address' => fake()->address(),
            'phone' => fake()->phoneNumber(),
            'is_active' => fake()->boolean(),
            'is_banned' => fake()->boolean(),
        ];
    }
}
