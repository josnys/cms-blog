<?php

declare(strict_types = 1);

namespace Domains\Blog\DTO;

use DateTime;

class ContentData
{
     public function __construct(
          protected readonly string $title = '',
          protected readonly string $intro = '',
          protected readonly int $category,
          protected readonly ?int $subcategory = null,
          protected readonly string $body,
          protected readonly int $cover,
          protected readonly bool $status,
          protected readonly ?DateTime $published = null
     ) {}

     public function toArray() : array
     {
          return [
               'title' => $this->title,
               'intro' => $this->intro,
               'category' => $this->category,
               'subcategory' => $this->subcategory,
               'body' => $this->body,
               'cover' => $this->cover,
               'status' => $this->status,
               'published' => $this->published
          ];
     }

     public static function fromRequest(array $data) : ContentData
     {
          return new ContentData(
               title: $data['title'],
               intro: $data['intro'],
               category: $data['category'],
               subcategory: $data['subcategory'],
               body: $data['body'],
               cover: $data['cover'],
               status: $data['status'],
               published: $data['published']
          );
     }
}