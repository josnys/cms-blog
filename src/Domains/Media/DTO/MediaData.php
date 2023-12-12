<?php

declare(strict_types=1);

namespace Domains\Media\DTO;

use Illuminate\Http\UploadedFile;

class MediaData
{
     public function __construct(
          protected readonly string $name,
          protected readonly string $url = '',
          protected readonly string $type,
          protected readonly string $description = '',
          protected readonly bool $external,
          protected readonly bool $status,
          protected readonly UploadedFile|null $file,
     ){}

     public function toArray() : array
     {
          return [
               'name' => $this->name,
               'url' => $this->url,
               'type' => $this->type,
               'description' => $this->description,
               'external' => $this->external,
               'status' => $this->status,
               'file' => $this->file
          ];
     }

     public static function fromRequest(array $data) : MediaData
     {
          return new MediaData(
               name: $data['name'],
               url: $data['url'],
               type: $data['type'],
               description: $data['description'],
               external: $data['external'],
               status: $data['status'],
               file: $data['file']
          );
     }
}