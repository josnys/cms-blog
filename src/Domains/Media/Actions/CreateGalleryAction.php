<?php

declare(strict_types=1);

namespace Domains\Media\Actions;

use Domains\Media\Models\Gallery;

class CreateGalleryAction
{
     public function handle(array $data) : Gallery
     {
          $gallery = new Gallery();
          $gallery->name = $data['name'];
          $gallery->description = $data['description'];
          $gallery->is_active = $data['status'];
          $gallery->save();

          $gallery->medias()->sync(array_unique($data['details']));

          return $gallery;
     }
}