<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Blog;

use Domains\Blog\DTO\TagData;
use Illuminate\Foundation\Http\FormRequest;

class TagRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->allowedTo('create-blog-tag') || $this->user()->allowedTo('update-blog-tag');
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:80'],
            'status' => ['required', 'boolean']
        ];
    }

    public function payload() : TagData
    {
        return TagData::fromRequest(
            data: [
                'name' => $this->string('name')->toString(),
                'status' => $this->string('status')->toBoolean()
            ]
        );
    }
}
