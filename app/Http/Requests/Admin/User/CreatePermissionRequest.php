<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\User;

use Illuminate\Foundation\Http\FormRequest;

class CreatePermissionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->allowedTo('create-permission');
    }

    public function rules(): array
    {
        return [
            'permissions' => ['required', 'array'],
            'permissions.*.display_name' => ['required', 'string', 'max:255'],
            'permissions.*.slug' => ['required', 'string', 'alpha_dash', 'unique:permissions,slug'],
            'permissions.*.is_active' => ['required', 'boolean'],
        ];
    }
}
