<?php

declare(strict_types=1);

namespace App\Http\Resources\Domains\Shared;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PublicationResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'website' =>$this->website,
            'address' => [
                'one' => $this->address_one,
                'two' => $this->address_two
            ],
            'city' => $this->city,
            'state' => $this->state,
            'country' => $this->country,
            'zipcode' => $this->zipcode,
            'gps_location' => $this->gps_location,
            'status' => [
                'text' => $this->is_active ? 'Yes' : 'No',
                'value' => (bool)$this->is_active
            ]
        ];
    }
}
