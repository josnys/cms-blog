<?php

declare(strict_types=1);

namespace Domains\Blog\Services;

use App\Http\Resources\Domains\Blog\SubCategoryResource;
use Domains\Blog\Models\BlogSubCategory;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class SubCategoryService
{
     public function getAllPaginate(int $categoryId) : AnonymousResourceCollection
     {
          return SubCategoryResource::collection(BlogSubCategory::where('blog_category_id', $categoryId)->paginate(50));
     }

     public function getBySlug(string $slug) : SubCategoryResource
     {
          return SubCategoryResource::make(BlogSubCategory::where('slug', $slug)->first());
     }
}