<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Shared;

use Domains\Shared\DTO\SettingDTO;
use Illuminate\Foundation\Http\FormRequest;

class SettingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'logo' => ['nullable', 'sometimes', 'image', 'max:2048', 'mimes:png,jpg,jpeg'],
            'slogan' => ['nullable', 'sometimes', 'string', 'max:255'],
            'description' => ['nullable', 'sometimes', 'string', 'max:1000'],
            'email' => ['nullable', 'sometimes', 'email'],
            'phone' => ['nullable', 'sometimes', 'string'],
            'address' => ['nullable', 'sometimes', 'string', 'max:255'],
            'socials' => ['nullable', 'sometimes', 'array'],
        ];
    }

    public function payload() : SettingDTO
    {
        return SettingDTO::fromRequest(
            data: [
                'name' => $this->string('name')->toString(),
                'logo' => $this->file('logo'),
                'slogan' => $this->string('slogan')->toString(),
                'description' => $this->string('description')->toString(),
                'email' => $this->string('email')->toString(),
                'phone' => $this->string('phone')->toString(),
                'address' => $this->string('address')->toString(),
                'socials' => $this->input('socials'),
            ]
        );
    }
}
