<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\User;

use Illuminate\Foundation\Http\FormRequest;

class AssignRolePermissionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->allowedTo('assign-permission-to-role');
    }

    public function rules(): array
    {
        return [
            'permissions' => ['required', 'array'],
            'permissions.*.id' => ['required', 'integer'],
            'permissions.*.slug' => ['required', 'alpha_dash'],
            'permissions.*.is_checked' => ['required', 'boolean'],
        ];
    }
}
