<?php

declare(strict_types=1);

namespace Domains\User\DTO;

class RegisterUserData
{
    public function __construct(private readonly string $firstname, private readonly string $lastname, private readonly string $username, private readonly string $email, private readonly string $password)
    {
    }

    public function toArray(): array
    {
        return [
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'username' => $this->username,
            'email' => $this->email,
            'password' => $this->password,
        ];
    }

    public static function fromRequest(array $data): RegisterUserData
    {
        return new RegisterUserData(
            firstname: $data['firstname'],
            lastname: $data['lastname'],
            username: $data['username'],
            email: $data['email'],
            password: $data['password']
        );
    }
}
