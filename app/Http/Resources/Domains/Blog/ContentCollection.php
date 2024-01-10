<?php

declare(strict_types=1);

namespace App\Http\Resources\Domains\Blog;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ContentCollection extends ResourceCollection
{
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection
        ];
    }
}
