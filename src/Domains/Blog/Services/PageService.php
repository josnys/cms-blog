<?php

declare(strict_types=1);

namespace Domains\Blog\Services;

use App\Http\Resources\Domains\Blog\PageResource;
use Domains\Blog\Models\Page;
use Domains\Media\Services\MediaService;
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

     public function getBySlugWithAssets(string $slug, bool $full = false) : array
     {
          $page = Page::with(['content' => function($content){
               return $content->with(['cover', 'category', 'subcategory']);
          }])->with(['gallery' => function($gallery){
               return $gallery->with('medias');
          }])->where('slug', $slug)->first();

          if(!$page){
               return [];
          }

          return [
               'id' => $page->id,
               'name' => $page->name,
               'slug' => $page->slug,
               'block_display' => !$full ? $this->getPageWithAssets($page) : $this->getFullPageWithAssets($page),
          ];
     }

     public function getFullPageWithAssets(Page $page) : array
     {
          $content = $page->content->map(function($content){
               return [
                    'type' => 'content',
                    'name' => $content->name,
                    'order' => $content->pivot->order,
                    'intro' => $content->intro,
                    'body' => $content->body,
                    'cover' => $content->cover ? MediaService::getUrls($content->cover) : null
               ];
          })->toArray();

          $gallery = $page->gallery->map(function($gallery){
               return
               [
                    'type' => 'gallery',
                    'name' => $gallery->name,
                    'description' => $gallery->description,
                    'order' => $gallery->pivot->order,
                    'medias' => $gallery->medias->map(function($media){
                         return ['name' => $media->name, 'url' => $media->is_external ? $media->url : MediaService::getUrls($media->url, true)];
                    })->toArray()
               ];
          })->toArray();
          
          return collect(array_merge($content, $gallery))->sortBy('order')->toArray();
     }

     public function getPageWithAssets(Page $page) : array
     {
          $content = $page->content->map(function ($content) {
               return [
                    'type' => $content->pivot->type,
                    'block' => ['id' => $content->id, 'type' => $content->pivot->type, 'order' => $content->pivot->order, 'status' => $content->pivot->is_active, 'name' => $content->name],
                    'order' => $content->pivot->order,
                    'status' => $content->pivot->is_active
               ];
          })->toArray();

          $gallery = $page->gallery->map(function ($gallery) {
               return
                    [
                         'type' => $gallery->pivot->type,
                         'block' => ['id' => $gallery->id, 'type' => $gallery->pivot->type, 'order' => $gallery->pivot->order, 'status' => $gallery->pivot->is_active, 'name' => $gallery->name],
                         'order' => $gallery->pivot->order,
                         'status' => $gallery->pivot->is_active
                    ];
          })->toArray();

          return collect(array_merge($content, $gallery))->sortBy('order')->toArray();
     }
}