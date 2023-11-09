<?php

declare(strict_types=1);

namespace Domains\User\Services;

use App\Http\Resources\Domains\User\UserResource;
use Domains\User\Contracts\ProfileServiceInterface;
use Domains\User\Models\User;

class ProfileService implements ProfileServiceInterface
{
    public function getUserByUsername(string $username): UserResource | null
    {
        $profile = User::query()->with('person')->where('username', $username)->first();
        if (! $profile) {
            return null;
        }

        return new UserResource($profile);
    }
}
