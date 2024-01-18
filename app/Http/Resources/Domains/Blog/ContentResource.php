<?php

declare(strict_types=1);

namespace App\Http\Resources\Domains\Blog;

use App\Http\Resources\Domains\Media\MediaResource;
use App\Http\Resources\Domains\User\UserResource;
use Domains\Blog\Enums\PageDetailTypeEnum;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContentResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'title' => $this->name,
            'intro' => $this->intro,
            'body' => $this->body,
            'type' => PageDetailTypeEnum::CONTENT->value,
            'cover' => MediaResource::make($this->whenLoaded('cover')),
            'user' => UserResource::make($this->whenLoaded('user')),
            'category' => CategoryResource::make($this->whenLoaded('category')),
            'subcategory' => SubCategoryResource::make($this->whenLoaded('subcategory')),
            'status' => [
                'text' => $this->is_active ? 'Yes' : 'No',
                'value' => $this->is_active
            ],
            'published' => [
                'text' => $this->published_at ? $this->published_at->format('d M Y') : 'No',
                'value' => !is_null($this->published_at),
                'data' => $this->published_at ? $this->published_at : null,
            ]
        ];
    }
}
