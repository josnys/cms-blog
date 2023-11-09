<?php

use App\Providers\RouteServiceProvider;
use function Pest\Laravel\{get, post, assertAuthenticated};

test('registration screen can be rendered', function () {
    $response = get('/register');

    $response->assertStatus(200);
});

test('new users can register', function () {
   $response = post('/register', [
        'firstname' => 'The New',
        'lastname' => 'User',
        'username' => 'the_new_username',
        'email' => 'the_new_username@app.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    assertAuthenticated();
    $response->assertRedirect(RouteServiceProvider::HOME);
});
