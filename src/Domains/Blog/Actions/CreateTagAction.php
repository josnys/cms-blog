<?php 

declare(strict_types=1);

namespace Domains\Blog\Actions;

use Domains\Blog\Models\BlogTag;

class CreateTagAction
{
     public function handle(array $data) : BlogTag
     {
          $tag = new BlogTag();
          $tag->name = $data['name'];
          $tag->is_active = $data['status'];
          $tag->save();

          return $tag;
     }
}