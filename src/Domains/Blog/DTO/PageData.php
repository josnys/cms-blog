<?php

declare(strict_types=1);

namespace Domains\Blog\DTO;

class PageData
{
     public function __construct(
          protected readonly string $name,
          protected readonly bool $show_main_menu,
          protected readonly bool $access_by_id,
          protected readonly bool $status
     ){}

     public function toArray() : array
     {
          return [
               'name' =>$this->name,
               'show_main_menu' => $this->show_main_menu,
               'access_by_id' => $this->access_by_id,
               'status' => $this->status
          ];
     }

     public static function fromRequest(array $data): PageData
     {
          return new PageData(
               name: $data['name'],
               show_main_menu: $data['show_main_menu'],
               access_by_id: $data['access_by_id'],
               status: $data['status']
          );
     }
}