<?php

declare(strict_types=1);

namespace Domains\Shared\DTO;

use Illuminate\Http\UploadedFile;

class SettingDTO
{
     public function __construct(
          protected readonly string $name,
          protected readonly UploadedFile|null $logo,
          protected readonly string|null $slogan,
          protected readonly string|null $description,
          protected readonly string|null $email,
          protected readonly string|null $phone,
          protected readonly string|null $address,
          protected readonly array|null $socials,
     ){}

     public function toArray() : array
     {
          return [
               'name' => $this->name,
               'logo' => $this->logo,
               'slogan' => $this->slogan,
               'description' => $this->description,
               'email' => $this->email,
               'phone' => $this->phone,
               'address' => $this->address,
               'socials' => $this->socials
          ];
     }

     public static function fromRequest(array $data) : SettingDTO
     {
          return new SettingDTO(
               name: $data['name'],
               logo: $data['logo'],
               slogan: $data['slogan'],
               description: $data['description'],
               email: $data['email'],
               phone: $data['phone'],
               address: $data['address'],
               socials: $data['socials']
          );
     }
}