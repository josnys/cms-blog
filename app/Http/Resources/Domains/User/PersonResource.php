<?php

declare(strict_types=1);

namespace App\Http\Resources\Domains\User;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PersonResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'fullname' => "{$this->firstname} {$this->lastname}",
            'dob' => "{$this->dob} 00:00:00",
            'bio' => $this->bio,
            'address' => $this->address,
            'phone' => $this->phone,
            'avatar' => [
                'small' => $this->small_avatar,
                'large' => $this->large_avatar,
            ],
        ];
    }
}
