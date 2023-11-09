<?php

declare(strict_types=1);

namespace App\Http\Requests\Auth;

use Domains\User\DTO\RegisterUserData;
use Domains\User\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'firstname' => 'required|string|max:255',
            'lastname' => 'sometimes|nullable|string|max:255',
            'username' => 'required|string|max:50|alpha_dash|unique:users',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Password::defaults()],
        ];
    }

    public function payload(): RegisterUserData
    {
        return RegisterUserData::fromRequest(
            data: [
                'firstname' => $this->string('firstname')->toString(),
                'lastname' => $this->string('lastname')->toString(),
                'username' => $this->string('username')->toString(),
                'email' => $this->string('email')->toString(),
                'password' => $this->string('password')->toString(),
            ]
        );
    }
}
