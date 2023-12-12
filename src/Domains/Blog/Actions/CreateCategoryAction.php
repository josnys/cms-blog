<?php

declare(strict_types=1);

namespace Domains\Blog\Actions;

use Domains\Blog\Models\BlogCategory;

class CreateCategoryAction
{
     public function handle(array $data) : BlogCategory
     {
          $category = new BlogCategory();
          $category->name = $data['name'];
          $category->show_main_menu = $data['show_main_menu'];
          $category->is_active = $data['status'];
          
          $category->save();

          return $category;
     }
}