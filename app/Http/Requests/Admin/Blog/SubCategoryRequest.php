<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Blog;

use Domains\Blog\DTO\SubCategoryData;
use Illuminate\Foundation\Http\FormRequest;

class SubCategoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->allowedTo('create-blog-sub-category') || $this->user()->allowedTo('update-blog-sub-category');
    }

    public function rules(): array
    {
        return [
            'category' => ['required', 'integer', 'gt:0'],
            'name' => ['required', 'string', 'max:255'],
            'show_main_menu' => ['required', 'boolean'],
            'status' => ['required', 'boolean']
        ];
    }

    public function paylooad()
    {
        return SubCategoryData::fromRequest(
            data: [
                'category' => $this->string('category')->toInteger(),
                'name' => $this->string('name')->toString(),
                'show_main_menu' => $this->string('show_main_menu')->toBoolean(),
                'status' => $this->string('status')->toBoolean()
            ]
        );
    }
}
