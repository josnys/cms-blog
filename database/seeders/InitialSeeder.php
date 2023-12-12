<?php

declare(strict_types=1);

namespace Database\Seeders;

use Domains\User\Actions\CreateUserAction;
use Domains\User\Models\Permission;
use Domains\User\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class InitialSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            ['name' => 'Admin Access', 'status' => true],
            ['name' => 'Create Permission', 'status' => false],
            ['name' => 'Read Permission', 'status' => true],
            ['name' => 'Update Permission', 'status' => true],
            ['name' => 'Delete Permission', 'status' => true],
            ['name' => 'Create Role', 'status' => true],
            ['name' => 'Read Role', 'status' => true],
            ['name' => 'Update Role', 'status' => true],
            ['name' => 'Delete Role', 'status' => true],
            ['name' => 'Update User', 'status' => true],
            ['name' => 'Change User Password', 'status' => true],
            ['name' => 'Assign Permission to Role', 'status' => true],
            ['name' => 'Assign Permission to User', 'status' => true],
            ['name' => 'Assign Role to User', 'status' => true],
            ['name' => 'Create Page', 'status' => true],
            ['name' => 'Read Page', 'status' => true],
            ['name' => 'Update Page', 'status' => true],
            ['name' => 'Delete Page', 'status' => true],
            ['name' => 'Create Blog Category', 'status' => true],
            ['name' => 'Read Blog Category', 'status' => true],
            ['name' => 'Update Blog Category', 'status' => true],
            ['name' => 'Delete Blog Category', 'status' => true],
            ['name' => 'Create Blog Sub Category', 'status' => true],
            ['name' => 'Read Blog Sub Category', 'status' => true],
            ['name' => 'Update Blog Sub Category', 'status' => true],
            ['name' => 'Delete Blog Sub Category', 'status' => true],
            ['name' => 'Create Blog Tag', 'status' => true],
            ['name' => 'Read Blog Tag', 'status' => true],
            ['name' => 'Update Blog Tag', 'status' => true],
            ['name' => 'Delete Blog Tag', 'status' => true],
            ['name' => 'Create Media', 'status' => true],
            ['name' => 'Read Media', 'status' => true],
            ['name' => 'Update Media', 'status' => true],
            ['name' => 'Delete Media', 'status' => true],
        ];

        $roles = [
            ['name' => 'Super User', 'status' => false],
            ['name' => 'Admin', 'status' => true],
        ];

        $super_user = [
            'firstname' => 'Josny J',
            'lastname' => 'Severe',
            'username' => 'josnys',
            'email' => 'dirjos2014@gmail.com',
            'password' => 'password'
        ];

        $admin_user = [
            'firstname' => 'Adminis',
            'lastname' => 'Trator',
            'username' => 'admin',
            'email' => 'admin@app.com',
            'password' => 'password'
        ];

        $super_user_permissions = array();
        $admin_permissions = array();

        foreach($permissions as $key => $permission){
            $perm = new Permission;
            $perm->display_name = $permission['name'];
            $perm->slug = Str::slug($permission['name']);
            $perm->is_active = $permission['status'];
            $perm->save();

            array_push($super_user_permissions, $perm->id);
            if($key != 1){
                array_push($admin_permissions, $perm->id);
            }
        }

        foreach($roles as $key => $role){
            $rol = new Role;
            $rol->display_name = $role['name'];
            $rol->slug = Str::slug($role['name']);
            $rol->is_active = $role['status'];
            $rol->save();

            if($key === 0){
                $rol->permissions()->sync($super_user_permissions);
                $su_role = $rol->id;
            }else{
                $rol->permissions()->sync($admin_permissions);
                $au_role = $rol->id;
            }
        }

        $su_data = (new CreateUserAction())->handle($super_user);
        $su_data->roles()->sync([$su_role]);

        $au_data = (new CreateUserAction())->handle($admin_user);
        $au_data->roles()->sync([$au_role]);
    }
}
