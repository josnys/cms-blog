<?php

declare(strict_types=1);

namespace App\Http\Resources\Domains\Shared;

use Domains\Shared\Services\SettingsService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SettingResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slogan' => $this->slogan,
            'logo' => $this->logo ? [
                'small' => SettingsService::getLogoSmall("{$this->logo}"),
                'large' => SettingsService::getLogoLarge("{$this->logo}")
            ] : null,
            'description' => $this->description,
            'email' => $this->email,
            'phone' => $this->phone,
            'address' => $this->address,
            'socials' => $this->socials ?? []
        ];
    }
}
