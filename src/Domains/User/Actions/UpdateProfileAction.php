<?php

declare(strict_types=1);

namespace Domains\User\Actions;

use Domains\User\Models\Person;
use Domains\User\Models\User;

class UpdateProfileAction
{
    public function handle(array $data, User $user): User | Person
    {
        $person = Person::find($user->person_id);

        $email_verified = ($user->email !== $data['email']);

        $person->firstname = $data['firstname'];
        $person->lastname = $data['lastname'];
        $person->dob = $data['dob'];
        $person->bio = $data['bio'];
        $person->update();

        $user->username = $data['username'];
        $user->email = $data['email'];
        $user->update();

        if ($email_verified) {
            $user->email_verified_at = null;
            $user->update();
        }

        if ($person->wasChanged()) {
            return $person;
        }

        return $user;
    }
}
