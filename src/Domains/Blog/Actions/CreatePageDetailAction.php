<?php 

declare(strict_types=1);

namespace Domains\Blog\Actions;

use Domains\Blog\Enums\PageDetailTypeEnum;
use Domains\Blog\Models\Page;

class CreatePageDetailAction
{
     public function handle(array $data, Page $page) : Page
     {
          $galleries = array();
          $contents = array();

          foreach($data as $d){
               $d['page_id'] = $page->id;
               $d['user_id'] = auth()->id();

               if($d['type'] == PageDetailTypeEnum::GALLERY->value){
                    array_push($galleries, $d);
               }

               if($d['type'] == PageDetailTypeEnum::CONTENT->value){
                    array_push($contents, $d);
               }
          }
          
          $page->content()->sync($contents);
          $page->gallery()->sync($galleries);

          return $page;
     }
}