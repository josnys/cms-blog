<?php

declare(strict_types=1);

namespace Domains\Blog\Actions;

use Domains\Blog\Models\Content;

class UpdateContentAction
{
     public function handle(array $data, Content $content): Content
     {
          $content->user_id = auth()->id();
          $content->cover_id = $data['cover'];
          $content->blog_category_id = $data['category'];
          $content->blog_sub_category_id = $data['subcategory'];
          $content->name = $data['title'];
          $content->intro = $data['intro'];
          $content->body = $data['body'];
          $content->is_active = $data['status'];
          $content->published_at = $data['published'];

          $content->update();

          return $content;
     }
}
