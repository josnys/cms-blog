<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Blog;

use Domains\Blog\DTO\ContentData;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ContentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->allowedTo('create-blog-content') || $this->user()->allowedTo('update-blog-content');
    }

    public function rules(): array
    {
        return [
            'title' => ['sometimes', 'nullable', 'string', 'max:255'],
            'intro' => ['sometimes', 'nullable', 'string'],
            'category' => ['required', 'integer', 'gt:0'],
            'subcategory' => ['sometimes', 'nullable', 'integer'],
            'body' => ['required', 'string'],
            'cover' => ['sometimes', 'nullable', 'integer', 'gt:0'],
            'status' => ['required', 'boolean'],
            'published' => ['sometimes', 'nullable', 'date']
        ];
    }

    public function payload() : ContentData
    {
        return ContentData::fromRequest(
            data: [
                'title' => $this->string('title')->toString(),
                'intro' => $this->string('intro')->toString(),
                'category' => $this->string('category')->toInteger(),
                'subcategory' => ($this->string('subcategory')->value() !== "") ? $this->string('subcategory')->toInteger() : null,
                'body' => $this->string('body')->toString(),
                'cover' => $this->string('cover')->toInteger(),
                'status' => $this->string('status')->toBoolean(),
                'published' => ($this->string('published')->value() !== "") ? $this->string('published')->toDate() : null
            ]
        );
    }
}
