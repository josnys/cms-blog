<?php 

declare(strict_types=1);

namespace Domains\Shared\DTO;

class PublicationDTO
{
     public function __construct(
          protected readonly string $name,
          protected readonly string $website,
          protected readonly string $address_one,
          protected readonly string|null $address_two,
          protected readonly string $city,
          protected readonly string $state,
          protected readonly string $country,
          protected readonly string $zipcode,
          protected readonly string|null $gps_location,
          protected readonly bool|null $status
     ){}

     public function toArray() : array
     {
          return [
               'name' => $this->name,
               'website' => $this->website,
               'address_one' => $this->address_one,
               'address_two' => $this->address_two,
               'city' => $this->city,
               'state' => $this->state,
               'country' => $this->country,
               'zipcode' => $this->zipcode,
               'gps_location' => $this->gps_location,
               'status' => $this->status
          ];
     }

     public static function fromRequest(array $data) : PublicationDTO
     {
          return new PublicationDTO(
               name: $data['name'],
               website: $data['website'],
               address_one: $data['address_one'],
               address_two: $data['address_two'],
               city: $data['city'],
               state: $data['state'],
               country: $data['country'],
               zipcode: $data['zipcode'],
               gps_location: $data['gps_location'],
               status: $data['status']
          );
     }
}