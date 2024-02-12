<?php

declare(strict_types=1);

namespace Domains\Media\Actions;

use Domains\Media\Models\Media;

class UpdateMediaAction
{
     public function handle(array $data, Media $media): Media
     {
          $media->name = $data['name'];
          $media->url = $data['url'];
          $media->type = $data['type'];
          $media->mime_type = $data['mime_type'];
          $media->description = $data['description'];
          $media->is_external = $data['external'];
          $media->is_active = $data['status'];
          $media->update();

          return $media;
     }
}
