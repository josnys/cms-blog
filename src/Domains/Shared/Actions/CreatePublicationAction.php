<?php 

declare(strict_types=1);

namespace Domains\Shared\Actions;

use Domains\Shared\Models\Publication;

class CreatePublicationAction
{
     public function handle(array $data) : Publication
     {
          $publication = new Publication();
          $publication->name = $data['name'];
          $publication->website = $data['website'];
          $publication->address_one = $data['address_one'];
          $publication->address_two = $data['address_two'];
          $publication->city = $data['city'];
          $publication->state = $data['state'];
          $publication->country = $data['country'];
          $publication->zipcode = $data['zipcode'];
          $publication->is_active = false;
          
          $publication->save();

          return $publication;
     }
}