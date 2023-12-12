<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Blog;

use Domains\Blog\DTO\CategoryData;
use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->allowedTo('create-blog-category') || $this->user()->allowedTo('update-blog-category');
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'show_main_menu' => ['required', 'boolean'],
            'status' => ['required', 'boolean']
        ];
    }

    public function paylooad()
    {
        return CategoryData::fromRequest(
            data: [
                'name' => $this->string('name')->toString(),
                'show_main_menu' => $this->string('show_main_menu')->toBoolean(),
                'status' => $this->string('status')->toBoolean()
            ]
        );
    }
}
