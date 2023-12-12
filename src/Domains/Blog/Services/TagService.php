<?php

declare(strict_types=1);

namespace Domains\Blog\Services;

use App\Http\Resources\Domains\Blog\TagResource;
use Domains\Blog\Models\BlogTag;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TagService {

     public function getAllPaginate() : AnonymousResourceCollection
     {
          return TagResource::collection(BlogTag::paginate(50));
     }

     public function getById(int $tag_id) : TagResource
     {
          return TagResource::make(BlogTag::find($tag_id));
     }
}