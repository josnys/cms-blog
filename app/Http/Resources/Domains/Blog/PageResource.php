<?php

declare(strict_types=1);

namespace App\Http\Resources\Domains\Blog;

use App\Http\Resources\Domains\Media\GalleryCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'name' => $this->name,
            'gallery' => GalleryCollection::make($this->whenLoaded('gallery')),
            'content' => ContentCollection::make($this->whenLoaded('content')),
            'show_main_menu' => [
                'text' => $this->show_main_menu ? 'Yes' : 'No',
                'value' => $this->show_main_menu
            ],
            'access_by_id' => [
                'text' => $this->access_by_id ? 'Yes' : 'No',
                'value' => $this->access_by_id
            ],
            'status' => [
                'text' => $this->is_active ? 'Yes' : 'No',
                'value' => $this->is_active
            ]
        ];
    }
}
