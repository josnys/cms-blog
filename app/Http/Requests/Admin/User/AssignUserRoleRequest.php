<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\User;

use Illuminate\Foundation\Http\FormRequest;

class AssignUserRoleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->allowedTo('assign-role-to-user');
    }

    public function rules(): array
    {
        return [
            'roles' => ['required', 'array'],
            'roles.*.id' => ['required', 'integer'],
            'roles.*.slug' => ['required', 'alpha_dash'],
            'roles.*.is_checked' => ['required', 'boolean'],
        ];
    }
}
