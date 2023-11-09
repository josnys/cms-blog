<?php

declare(strict_types=1);

namespace Domains\User\DTO;

use DateTime;

class UserData
{
    public function __construct(protected readonly string $firstname, protected readonly string $lastname, protected readonly DateTime $dob, protected readonly string $bio, protected readonly bool $suspended, protected readonly bool $banned)
    {
    }

    public function toArray(): array
    {
        return [
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'dob' => $this->dob,
            'bio' => $this->bio,
            'suspended' => $this->suspended,
            'banned' => $this->banned,
        ];
    }

    public static function fromRequest(array $data): UserData
    {
        return new UserData(
            firstname: $data['firstname'],
            lastname: $data['lastname'],
            dob: $data['dob'],
            bio: $data['bio'],
            suspended: $data['suspended'],
            banned: $data['banned']
        );
    }
}
