<?php

use function Pest\Laravel\{actingAs};

test('user can access admin dashboard', function () {
    $admin = createUserAdmin();
    
    $response = actingAs($admin)
        ->get('/admin/dashboard');

    $response->assertOk();
});

test('user can not access admin dashboard', function () {
    $user = createUser();

    $response = actingAs($user)
        ->get('/admin/dashboard');

    $response->assertStatus(403);
});
