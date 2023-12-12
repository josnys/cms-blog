<?php

declare(strict_types=1);

namespace Domains\Blog\Actions;

use Domains\Blog\Models\Page;

class CreatePageAction
{
     public function handle(array $array) : Page
     {
          $page = new Page();
          $page->name = $array['name'];
          $page->show_main_menu = $array['show_main_menu'];
          $page->access_by_id = $array['access_by_id'];
          $page->is_active = $array['status'];
          $page->save();

          return $page;
     }
}