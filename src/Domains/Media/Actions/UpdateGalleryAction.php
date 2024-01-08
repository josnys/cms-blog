<?php 

declare(strict_types=1);

namespace Domains\Media\Actions;

use Domains\Media\Models\Gallery;

class UpdateGalleryAction
{
     public function handle(Gallery $gallery, array $data) : Gallery
     {
          $gallery->name = $data['name'];
          $gallery->description = $data['description'];
          $gallery->is_active = $data['status'];
          $gallery->update();

          $gallery->medias()->sync(array_unique($data['details']));

          return $gallery;
     }
}