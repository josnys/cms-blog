<?php

use Domains\User\Models\Permission;
use Domains\User\Models\Role;
use Domains\User\Models\User;
use Illuminate\Support\Facades\Hash;
use function Pest\Laravel\{actingAs};

test('admin user can edit a user', function () {
    $admin = createUserAdmin();
    $user = createUser();
    $firstname = fake()->firstName();
    $lastname = fake()->lastName();
    $suspended = fake()->boolean();
    $banned = fake()->boolean();

    $response = actingAs(authUser($admin))
        ->patch(route('admin.user.update', $user->username), [
            'firstname' => $firstname,
            'lastname' => $lastname,
            'suspended' => $suspended,
            'banned' => $banned
        ]);

    $response->assertSessionHasNoErrors()
        ->assertRedirect('/admin/user');
    
    $user->refresh();
    $user = User::with('person')->find($user->id);

    expect($user->person->firstname)->toEqual($firstname);
    expect($user->person->lastname)->toEqual($lastname);
});

test('user can assign role to a user', function(){
    $admin = createUserAdmin();
    $user = createUser();
    $role = Role::factory()->createOne();

    $response = actingAs(authUser($admin))
        ->post(route('admin.user.role.store', $user->username), [
            'roles' => [['id' => $role->id, 'slug' => $role->slug, 'is_checked' => true]]
        ]);
    $user->refresh();
    $user = $user->with('roles')->find($user->id);
    
    expect($user->roles->contains('slug', $role->slug))->toBeTrue();    
    $response->assertSessionHasNoErrors()
        ->assertRedirect('/admin/user');
});

test('user can assign permission to a user', function(){
    $admin = createUserAdmin();
    $user = createUser();
    $permissions = Permission::factory(3)->create()->map(function($permission){
        return ['id' => $permission->id, 'slug' => $permission->slug, 'is_checked' => true];
    });

    $response = actingAs(authUser($admin))
        ->post(route('admin.user.permission.store', $user->username), [
            'permissions' => $permissions->toArray()
        ]);
    $permission = Permission::where('slug', $permissions[0]['slug'])->first();

    expect($user->hasPermissionTo($permission))->toBeTrue();
    $response->assertSessionHasNoErrors()
        ->assertRedirect('/admin/user');
});

test('user can update a user\'s password', function(){
    $admin = createUserAdmin();
    $user = createUser();
    $new_password = 'new_password';

    $response = actingAs(authUser($admin))
        ->patch(route('admin.user.password.update', $user->username), [
            'password' => $new_password,
            'password_confirmation' => $new_password
        ]);
    $user->refresh();

    $response->assertSessionHasNoErrors()
        ->assertRedirect('/admin/user');
    expect(Hash::check($new_password, $user->password))->toBeTrue();
});
