<?php

declare(strict_types=1);

namespace App\Http\Resources\Domains\Media;

use Domains\Media\Services\MediaService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'name' => $this->name,
            'url' => [
                'name' => $this->url,
                'large' => !$this->is_external ? MediaService::getUrls($this->url) : null,
                'small' => !$this->is_external ? MediaService::getUrls($this->url, true) : null,
                'external' => $this->is_external ? $this->url : null
            ],
            'type' => $this->type,
            'mime' => $this->mime_type,
            'description' => $this->description,
            'external' => [
                'text' => $this->is_external ? 'Yes' : 'No',
                'value' => $this->is_external
            ],
            'status' => [
                'text' => $this->is_active ? 'Yes' : 'No',
                'value' => $this->is_active
            ],
        ];
    }
}
