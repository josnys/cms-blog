<?php

declare(strict_types=1);

namespace App\Http\Resources\Domains\Blog;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'name' => $this->name,
            'subcategories' => SubCategoryResource::collection($this->whenLoaded('subcategories')),
            'show_main_menu' => [
                'text' => $this->show_main_menu ? 'Yes' : 'No',
                'value' => $this->show_main_menu
            ],
            'status' => [
                'text' => $this->is_active ? 'Yes' : 'No',
                'value' => $this->is_active
            ],
        ];
    }
}
