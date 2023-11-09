<?php

use Domains\User\Models\User;
use Illuminate\Support\Facades\Hash;
use function Pest\Laravel\{actingAs};

test('password can be updated', function () {
    $user = createUser();

    $response = actingAs($user)
        ->from('/user/profile')
        ->put('/password', [
            'current_password' => 'password',
            'password' => 'new-password',
            'password_confirmation' => 'new-password',
        ]);
    $user = User::find($user->id);

    expect(Hash::check('new-password', $user->password))->toBeTrue();

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect('/login');
});

test('correct password must be provided to update password', function () {
    $user = createUser();

    $response = actingAs($user)
        ->from('/user/profile')
        ->put('/password', [
            'current_password' => 'wrong-password',
            'password' => 'new-password',
            'password_confirmation' => 'new-password',
        ]);

    $response
        ->assertSessionHasErrors('current_password')
        ->assertRedirect('/user/profile');
});
