<?php

use App\Http\Resources\Domains\User\UserResource;
use Domains\User\Services\ProfileService;

test('ProfileService return UserResource', function () {
    $user = createUser();

    $profile = (new ProfileService($user))->getUserByUsername($user->username);

    expect($profile)->toBeInstanceOf(UserResource::class);
});