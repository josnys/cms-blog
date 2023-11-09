<?php

use Domains\User\Models\User;

use function Pest\Laravel\{ actingAs, assertGuest };

test('profile page is displayed', function () {
    $user = createUser();

    $response = actingAs($user)->get('/user/profile');

    $response->assertOk();
});

test('profile information can be updated', function () {
    $user = createUser();
    $username = 'my_new_username'; // fake()->userName();
    $email = fake()->email();

    $response = actingAs($user)
        ->patch('/user/profile', [
            'firstname' => fake()->firstName(),
            'lastname' => fake()->lastName(),
            'dob' => null,
            'bio' => null,
            'username' => $username,
            'email' => $email,
        ]);

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect('/user/profile');

    $user = User::find($user->id);

    expect($user->username)->toEqual($username);
    expect($user->email)->toEqual($email);
    expect($user->email_verified_at)->toBeNull();
});

test('email verification status is unchanged when the email address is unchanged', function () {
    $user = createUser();

    $response = actingAs($user)
        ->patch('/user/profile', [
            'firstname' => fake()->firstName(),
            'lastname' => fake()->lastName(),
            'dob' => null,
            'bio' => null,
            'username' => $user->username,
            'email' => $user->email,
        ]);

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect('/user/profile');
    $user = User::find($user->id);

    expect($user->email_verified_at)->not->toBeNull();
});

test('user can delete their account', function () {
    $user = createUser();

    $response = actingAs($user)
        ->delete('/user/profile', [
            'password' => 'password',
        ]);

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect('/');
    
    $user = User::find($user->id);

    assertGuest();
    expect($user)->toBeNull();
});

test('correct password must be provided to delete account', function () {
    $user = createUser();

    $response = actingAs($user)
        ->from('/user/profile')
        ->delete('/user/profile', [
            'password' => 'wrong-password',
        ]);

    $response
        ->assertSessionHasErrors('password')
        ->assertRedirect('/user/profile');

    $user = User::find($user->id);
    $user->refresh();

    expect($user)->not->toBeNull();
});
