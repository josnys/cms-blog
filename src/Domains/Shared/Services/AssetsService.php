<?php 

declare(strict_types = 1);

namespace Domains\Shared\Services;

use Domains\Blog\Services\CategoryService;
use Domains\Media\Services\MediaService as ServicesMediaService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class AssetsService 
{
     public function getCatalog() : AnonymousResourceCollection
     {
          return (new ServicesMediaService())->getAllActive();
     }

     public function getCategoriesAndSubs() : AnonymousResourceCollection
     {
          return (new CategoryService())->getAllWithSubsActive();
     }

     public function getContentCreationAssets() : array
     {
          return [
               'medias' => $this->getCatalog(),
               'categories' => $this->getCategoriesAndSubs()
          ];
     }
}