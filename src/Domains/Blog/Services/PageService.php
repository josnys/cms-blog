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

     public function getBySlugWithAssets(string $slug) : array
     {
          $page = Page::with(['content' => function($content){
               return $content->with(['cover', 'category', 'subcategory']);
          }])->with(['gallery' => function($gallery){
               return $gallery->with('medias');
          }])->where('slug', $slug)->first();

          $content = $page->content->map(function($content){
               return [
                    'type' => $content->pivot->type, 
                    'block' => ['id' => $content->id, 'type' => $content->pivot->type, 'order' => $content->pivot->order, 'status' => $content->pivot->is_active, 'name' => $content->name],
                    'order' => $content->pivot->order,
                    'status' => $content->pivot->is_active
               ];
          })->toArray();

          $gallery = $page->gallery->map(function($gallery){
               return
               [
                    'type' => $gallery->pivot->type,
                    'block' => ['id' => $gallery->id, 'type' => $gallery->pivot->type, 'order' => $gallery->pivot->order, 'status' => $gallery->pivot->is_active, 'name' => $gallery->name],
                    'order' => $gallery->pivot->order,
                    'status' => $gallery->pivot->is_active
               ];
          })->toArray();
          
          return [
               'id' => $page->id,
               'name' => $page->name,
               'slug' => $page->slug,
               'block_display' => collect(array_merge($content, $gallery))->sortBy('order')->toArray(),
          ];
     }
}