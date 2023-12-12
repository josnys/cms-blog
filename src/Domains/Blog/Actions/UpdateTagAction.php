<?php

declare(strict_types=1);

namespace Domains\Blog\Actions;

use Domains\Blog\Models\BlogTag;

class UpdateTagAction 
{
     public function handle(array $data, BlogTag $tag) : BlogTag
     {
          $tag->name = $data['name'];
          $tag->is_active = $data['status'];
          $tag->update();

          return $tag;
     }
}