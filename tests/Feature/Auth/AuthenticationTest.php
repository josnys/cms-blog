<?php

use App\Providers\RouteServiceProvider;
use function Pest\Laravel\{get, post, assertAuthenticated, assertGuest};

test('login screen can be rendered', function () {  
    $response = get('/login');

    $response->assertStatus(200);
});

test('users can authenticate using the login screen with username', function () {
    $user = createUser();

    $response = post('/login', [
        'email' => $user->username,
        'password' => 'password',
        'remember' => fake()->boolean()
    ]);
    
    assertAuthenticated();
    $response->assertRedirect(RouteServiceProvider::HOME);
});

test('users can authenticate using the login screen with email', function () {
    $user = createUser();

    $response = post('/login', [
        'email' => $user->email,
        'password' => 'password',
        'remember' => fake()->boolean()
    ]);

    assertAuthenticated();
    $response->assertRedirect(RouteServiceProvider::HOME);
});

test('users can not authenticate with invalid password', function () {
    $user = createUser();

    post('/login', [
        'email' => $user->email,
        'password' => 'wrong-password',
        'remember' => fake()->boolean()
    ]);

    assertGuest();
});
