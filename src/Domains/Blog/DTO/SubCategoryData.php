<?php 

declare(strict_types=1);

namespace Domains\Blog\DTO;

class SubCategoryData
{
     public function __construct(
          protected readonly int $category,
          protected readonly string $name,
          protected readonly bool $show_main_menu,
          protected readonly bool $status
     ){}

     public function toArray() : array
     {
          return [
               'category' => $this->category,
               'name' => $this->name,
               'show_main_menu' => $this->show_main_menu,
               'status' => $this->status
          ];
     }

     public static function fromRequest(array $data): SubCategoryData
     {
          return new SubCategoryData(
               category: $data['category'],
               name: $data['name'],
               show_main_menu: $data['show_main_menu'],
               status: $data['status']
          );
     }
}