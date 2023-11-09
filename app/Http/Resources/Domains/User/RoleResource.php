<?php

declare(strict_types=1);

namespace App\Http\Resources\Domains\User;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RoleResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'display_name' => $this->display_name,
            'slug' => $this->slug,
            'permissions' => PermissionResource::collection($this->whenLoaded('permissions')),
            'status' => [
                'value' => $this->is_active,
                'text' => $this->is_active ? 'Active' : 'Inactive',
            ],
        ];
    }
}
