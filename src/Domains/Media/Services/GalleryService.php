<?php 

declare(strict_types=1);

namespace Domains\Media\Services;

use App\Http\Resources\Domains\Media\GalleryResource;
use Domains\Media\Models\Gallery;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class GalleryService
{
     public function getAllPaginate() : AnonymousResourceCollection
     {
          return GalleryResource::collection(Gallery::with(['medias' => function($medias){
               return $medias->take(1);
          }])->paginate(50));
     }

     public function getBySlug(string $slug) : GalleryResource
     {
          return GalleryResource::make(Gallery::with('medias')->where('slug', $slug)->first());
     }
}