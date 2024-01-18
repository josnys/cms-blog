<?php 

declare(strict_types=1);

namespace Domains\Shared\Services;

use App\Http\Resources\Domains\Shared\SettingResource;
use Domains\Shared\Models\Setting;

class SettingsService
{
     public function getById(int $id) : SettingResource
     {
          return new SettingResource(Setting::find($id));
     }

     public static function getLogoLarge(string $url)
     {
          return route('file.media.resource.full', $url);
     }

     public static function getLogoSmall(string $url)
     {
          return route('file.media.resource.thumbnail', $url);
     }
}