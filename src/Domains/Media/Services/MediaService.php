<?php 

declare(strict_types=1);

namespace Domains\Media\Services;

use App\Http\Resources\Domains\Media\MediaResource;
use Domains\Media\Models\Media;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class MediaService
{
     public function getAllPaginate() : AnonymousResourceCollection
     {
          return MediaResource::collection(Media::latest()->paginate(50));
     }

     public function getBySlug(string $slug) : MediaResource
     {
          return MediaResource::make(Media::where('slug', $slug)->first());
     }

     public static function getUrls(string $url, $thumb = false) : string
     {
          if(!$thumb){
               return route('file.media.full', $url);
          }

          return route('file.media.thumbnail', $url);
     }

     public function getAllActive() : AnonymousResourceCollection
     {
          return MediaResource::collection(Media::active()->latest()->get());
     }
}