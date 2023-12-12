<?php 

declare(strict_types=1);

namespace Domains\Blog\DTO;

class TagData {
     public function __construct(
          protected readonly string $name,
          protected readonly bool $status
     ){}

     public function toArray() : array
     {
          return [
               'name' => $this->name,
               'status' => $this->status
          ];
     }

     public static function fromRequest(array $data) : TagData
     {
          return new TagData(
               name: $data['name'],
               status: $data['status']
          );
     }
}