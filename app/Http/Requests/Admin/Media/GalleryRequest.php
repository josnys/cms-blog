<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Media;

use Domains\Media\DTO\GalleryData;
use Illuminate\Foundation\Http\FormRequest;

class GalleryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->allowedTo('create-gallery') || $this->user()->allowedTo('update-gallery');
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:200'],
            'description' => ['sometimes', 'nullable', 'string', 'max:1000'],
            'status' => ['required', 'boolean'],
            'details' => ['required', 'array'],
            'details.*.id' => ['integer', 'gt:0']
        ];
    }

    public function payload() : GalleryData
    {
        return GalleryData::fromRequest(
            data : [
                'name' => $this->string('name')->toString(),
                'description' => $this->string('description')->toString(),
                'status' => $this->string('status')->toBoolean(),
                'details' => collect($this->input('details'))->pluck('id')->toArray()
            ]
        );
    }
}
