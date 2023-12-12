<?php 

declare(strict_types=1);

namespace Domains\Blog\DTO;

class CategoryData
{
     public function __construct(
          protected readonly string $name,
          protected readonly bool $show_main_menu,
          protected readonly bool $status
     ){}

     public function toArray() : array
     {
          return [
               'name' => $this->name,
               'show_main_menu' => $this->show_main_menu,
               'status' => $this->status
          ];
     }

     public static function fromRequest(array $data) : CategoryData
     {
          return new CategoryData(
               name: $data['name'],
               show_main_menu: $data['show_main_menu'],
               status: $data['status']
          );
     }
}