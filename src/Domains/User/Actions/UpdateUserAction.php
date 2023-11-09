<?php

declare(strict_types=1);

namespace Domains\User\Actions;

use Domains\User\Models\Person;
use Domains\User\Models\User;

class UpdateUserAction
{
    public function handle(array $data, User $user): User
    {
        $person = Person::find($user->person_id);
        $person->firstname = $data['firstname'];
        $person->lastname = $data['lastname'];
        $person->dob = $data['dob'];
        $person->bio = $data['bio'];
        $person->update();

        $user->is_suspended = $data['suspended'];
        $user->is_banned = $data['banned'];
        $user->update();

        return $user;
    }
}
