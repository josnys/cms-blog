<?php

declare(strict_types=1);

namespace Domains\User\Actions;

use Domains\User\Models\Person;
use Domains\User\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateUserAction
{
    public function handle(array $data): User
    {
        $person = new Person();
        $person->firstname = $data['firstname'];
        $person->lastname = $data['lastname'];
        $person->save();

        $user = new User();
        $user->person_id = $person->id;
        $user->username = $data['username'];
        $user->email = $data['email'];
        $user->password = Hash::make($data['password']);
        $user->save();

        return $user;
    }
}
