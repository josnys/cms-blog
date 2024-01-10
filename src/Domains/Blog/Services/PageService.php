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

     public function getBySlugWithAssets(string $slug) : PageResource
     {
          // Change this response
          $page = Page::with(['content' => function($content){
               return $content->with(['cover', 'category', 'subcategory']);
          }])->with(['gallery' => function($gallery){
               return $gallery->with('medias');
          }])->where('slug', $slug)->first();

          return new PageResource($page);
     }
}