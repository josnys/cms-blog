<?php

declare(strict_types=1);

namespace Domains\Blog\Services;

use App\Http\Resources\Domains\Blog\PageResource;
use Domains\Blog\Models\Page;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PageService
{
     public function getAllPaginate() : AnonymousResourceCollection
     {
          return PageResource::collection(Page::paginate(50));
     }

     public function getBySlug(string $slug) : PageResource
     {
          return new PageResource(Page::where('slug', $slug)->first());
     }
}