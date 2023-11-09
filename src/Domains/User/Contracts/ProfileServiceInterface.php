<?php

declare(strict_types=1);

namespace Domains\User\Contracts;

use App\Http\Resources\Domains\User\UserResource;

interface ProfileServiceInterface
{
    public function getUserByUsername(string $username): UserResource | null;
}
