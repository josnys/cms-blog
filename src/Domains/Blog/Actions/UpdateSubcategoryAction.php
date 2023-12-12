<?php

declare(strict_types=1);

namespace Domains\Blog\Actions;

use Domains\Blog\Models\BlogSubCategory;

class UpdateSubcategoryAction
{
     public function handle(array $data, BlogSubCategory $subcategory): BlogSubCategory
     {
          $subcategory->blog_category_id = $data['category'];
          $subcategory->name = $data['name'];
          $subcategory->show_main_menu = $data['show_main_menu'];
          $subcategory->is_active = $data['status'];

          $subcategory->update();

          return $subcategory;
     }
}