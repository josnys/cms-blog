<?php

declare(strict_types=1);

namespace Domains\Blog\Services;

use App\Http\Resources\Domains\Blog\CategoryResource;
use Domains\Blog\Models\BlogCategory;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryService
{
     public function getAllPaginate() : AnonymousResourceCollection
     {
          return CategoryResource::collection(BlogCategory::paginate(50));
     }

     public function getBySlug(string $slug) : CategoryResource
     {
          return new CategoryResource(BlogCategory::where('slug', $slug)->first());
     }
}