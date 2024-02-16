<?php 

declare(strict_types=1);

namespace Domains\Shared\Services;

class AddressToGPS
{
     private function __construct(
          protected string $address,
          protected mixed $google_map_key
     ){}

     public static function make(string $address) : static
     {
          return new static($address, env('GOOGLE_MAP_API_KEY'));
     }

     public function getMapKey() : string|null
     {
          return $this->google_map_key;
     }

     public function getGPSCoordinate() : string
     {
          $gps = "";
          $geo = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address=' . urlencode($this->address) . '&sensor=false&key='. $this->google_map_key);

          $geo = json_decode($geo, true);

          if ($geo['status'] = 'OK' && !isset($geo['error_message'])) {
               $latitude = $geo['results'][0]['geometry']['location']['lat'];
               $longitude = $geo['results'][0]['geometry']['location']['lng'];
               $gps = "$latitude, $longitude";
          }

          return $gps;
     }
}