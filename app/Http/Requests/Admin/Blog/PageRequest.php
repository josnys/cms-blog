<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Blog;

use Domains\Blog\DTO\PageData;
use Illuminate\Foundation\Http\FormRequest;

class PageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->allowedTo('create-page') || $this->user()->allowedTo('update-page');
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'show_main_menu' => ['required', 'boolean'],
            'access_by_id' => ['required', 'boolean'],
            'status' => ['required', 'boolean']
        ];
    }

    public function payload(): PageData
    {
        return PageData::fromRequest(
            data: [
                'name' => $this->string('name')->toString(),
                'show_main_menu' => $this->string('show_main_menu')->toBoolean(),
                'access_by_id' => $this->string('access_by_id')->toBoolean(),
                'status' => $this->string('status')->toBoolean()
            ]
        );
    }
}
