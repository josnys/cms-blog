<?php

declare(strict_types=1);

namespace App\Http\Resources\Domains\Media;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GalleryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'status' => [
                'text' => $this->is_active ? 'Yes' : 'No',
                'value' => (bool)$this->is_active
            ],
            'medias' => MediaCollection::make($this->whenLoaded('medias'))
        ];
    }
}
