<?php

declare(strict_types = 1);

namespace Domains\Blog\Services;

use App\Http\Resources\Domains\Blog\ContentResource;
use Domains\Blog\Models\Content;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ContentService
{
     public function getAllPaginate() : AnonymousResourceCollection
     {
          return ContentResource::collection(Content::with(['category', 'subcategory', 'user.person', 'cover'])->paginate());
     }

     public function getBySlug(string $slug) : ContentResource
     {
          return ContentResource::make(Content::with(['user.person', 'cover', 'category', 'subcategory'])->where('slug', $slug)->first());
     }

     public function getAllActiveToCompose() : Array
     {
          return Content::active()->get()->map(function($content){
               return [
                    'id' => $content->id,
                    'name' => $content->name,
                    'date' => $content->created_at->format('d M Y')
               ];
          })->toArray();
     }
}