<?php

declare(strict_types=1);

namespace App\Http\Resources\Domains\Blog;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TagResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'status' => [
                'text' => $this->is_active ? 'Yes' : 'No',
                'value' => $this->is_active
            ]
        ];
    }
}
