<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Blog;

use Domains\Blog\Enums\PageDetailTypeEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PageDetailRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->allowedTo('manage-page-content');
    }

    public function rules(): array
    {
        return [
            'blocks' => ['required', 'array'],
            'blocks.*.type' => ['required', 'string', Rule::in(PageDetailTypeEnum::values())],
            'blocks.*.block_id' => ['required', 'integer'],
            'blocks.*.order' => ['required', 'integer'],
            'status.*.status' => ['required', 'boolean']
        ];
    }
}
