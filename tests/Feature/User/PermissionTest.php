<?php

use Domains\User\Models\Permission;
use Illuminate\Support\Str;
use function Pest\Laravel\{actingAs};

test('user can read permission page.', function(){
    $user = createUserAdmin();

    $response = actingAs($user)
        ->get(route('admin.permission.index'));

    $response->assertOk();
});

test('user can not read permission page.', function () {
    $user = createUser();

    $response = actingAs($user)
        ->get(route('admin.permission.index'));

    $response->assertForbidden();
});

test('user can create permissions', function () {
    $user =  createUserAdmin();
    $name = implode(' ', fake()->words(2));
    
    $response = actingAs($user)
        ->post(route('admin.permission.store'), [
            'permissions' => [
                [
                    'display_name' => $name,
                    'slug' => Str::slug($name),
                    'is_active' => fake()->boolean()
                ]
            ]
        ]);

    $response->assertSessionHasNoErrors()
        ->assertRedirect('/admin/permission');
});

test('user can update permission', function() {
    $user = createUserAdmin();
    $permission = Permission::factory()->createOne();

    $response = actingAs($user)
        ->patch(route('admin.permission.update', $permission->slug), [
            'display_name' => 'Updated Permission',
            'is_active' => fake()->boolean()
        ]);
    
    $permission->refresh();

    $response->assertSessionHasNoErrors()
        ->assertRedirect('/admin/permission');
    expect($permission->display_name)->toEqual('Updated Permission');
});

test('user unauthorize to create permissions', function () {
    $user =  createUser();
    $name = implode(' ', fake()->words(2));

    $response = actingAs($user)
        ->post(route('admin.permission.store'), [
            'permissions' => [
                [
                    'display_name' => $name,
                    'slug' => Str::slug($name),
                    'is_active' => fake()->boolean()
                ]
            ]
        ]);

    $response->assertSessionHasNoErrors()
        ->assertForbidden();
});
