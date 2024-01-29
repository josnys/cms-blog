<?php

declare(strict_types=1);

namespace App\Http\Requests\Admin\Shared;

use Domains\Shared\DTO\PublicationDTO;
use Illuminate\Foundation\Http\FormRequest;

class PublicationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:150'],
            'website' => ['required', 'url'],
            'address_1' => ['required', 'string', 'max:200'],
            'address_2' => ['sometimes', 'nullable', 'string', 'max:200'],
            'city' => ['required', 'string', 'max:100'],
            'state' => ['required', 'string', 'max:100'],
            'country' => ['required', 'string', 'max:80'],
            'zipcode' => ['required', 'string', 'max:8'],
            'gps' => ['sometimes', 'nullable', 'string', 'max:50'],
            'status' => ['sometimes', 'nullable', 'boolean']
        ];
    }

    public function payload() : PublicationDTO
    {
        return PublicationDTO::fromRequest(
            data: [
                'name' => $this->string('name')->toString(),
                'website' => $this->string('website')->toString(),
                'address_one' => $this->string('address_1')->toString(),
                'address_two' => $this->string('address_2')->toString(),
                'city' => $this->string('city')->toString(),
                'state' => $this->string('state')->toString(),
                'country' => $this->string('country')->toString(),
                'zipcode' => $this->string('zipcode')->toString(),
                'gps_location' => $this->string('gps')->toString(),
                'status' => $this->string('status')->toBoolean()
            ]
        );
    }
}
