<?php

declare(strict_types=1);

namespace Domains\Blog\Actions;

use Domains\Blog\Models\BlogCategory;

class UpdateCategoryAction
{
     public function handle(array $data, BlogCategory $category) : BlogCategory
     {
          $category->name = $data['name'];
          $category->show_main_menu = $data['show_main_menu'];
          $category->is_active = $data['status'];
          
          $category->update();

          return $category;
     }
}