<?php

namespace Domains\User\DTO;

use DateTime;

class UserProfileData
{
    public function __construct(private readonly string $firstname, private readonly string $lastname, private readonly string $username, private readonly DateTime $dob, private readonly string $bio, private readonly string $email)
    {
    }

    public function toArray(): array
    {
        return [
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'username' => $this->username,
            'dob' => $this->dob,
            'bio' => $this->bio,
            'email' => $this->email,
        ];
    }

    public static function fromRequest(array $data): UserProfileData
    {
        return new UserProfileData(
            firstname: $data['firstname'],
            lastname: $data['lastname'],
            username: $data['username'],
            dob: $data['dob'],
            bio: $data['bio'],
            email: $data['email'],
        );
    }
}
