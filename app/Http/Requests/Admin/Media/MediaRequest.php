<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Media;

use Domains\Media\DTO\MediaData;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Domains\Media\Enums\MediaTypeEnum;

class MediaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->allowedTo('create-media') || $this->user()->allowedTo('update-media');
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:80'],
            'url' => ['required_if:file,null', 'nullable', 'string'],
            'file' => ['required_if:selectedFile,!null', 'nullable', 'image', 'mimes:png,jpg,jpeg', 'max:4096'],
            'type' => ['required', 'string', Rule::in(MediaTypeEnum::values())],
            'description' => ['sometimes', 'string', 'max:255'],
            'external' => ['required', 'boolean'],
            'status' => ['required', 'boolean'],
        ];
    }

    public function payload() : MediaData
    {
        return MediaData::fromRequest(
            data : [
                'name' => $this->string('name')->toString(),
                'url' => $this->string('url')->toString(),
                'type' => $this->string('type')->toString(),
                'description' => $this->string('description')->toString(),
                'external' => $this->string('external')->toBoolean(),
                'status' => $this->string('status')->toBoolean(),
                'file' => $this->file('file')
            ]
        );
    }
}
