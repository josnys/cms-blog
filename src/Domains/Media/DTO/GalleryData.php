<?php 

declare(strict_types=1);

namespace Domains\Media\DTO;

class GalleryData
{
     public function __construct(
          protected readonly string $name,
          protected readonly string|null $description,
          protected readonly bool $status,
          protected readonly array $details
     ){}

     public function toArray() : array
     {
          return [
               'name' => $this->name,
               'description' => $this->description,
               'status' => $this->status,
               'details' => $this->details
          ];
     }

     public static function fromRequest(array $data) : GalleryData
     {
          return new GalleryData(
               name: $data['name'],
               description: $data['description'],
               status: $data['status'],
               details: $data['details']
          );
     }
}