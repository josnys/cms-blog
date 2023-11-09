<?php

declare(strict_types=1);

namespace Domains\User\Services;

use App\Http\Resources\Domains\User\UserResource;
use Domains\User\Models\Permission;
use Domains\User\Models\Role;
use Domains\User\Models\User;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Arr;

class UserService
{
    public function getAllPaginate(): AnonymousResourceCollection
    {
        return UserResource::collection(User::with('person')->paginate(50));
    }

    public function getByUsername(string $username): UserResource
    {
        return new UserResource(User::with('person')->where('username', $username)->first());
    }

    public function getUserRoleAssign(string $username): array
    {
        $user = User::with('person')->with('roles')->where('username', $username)->first();

        $user_roles = $user->roles->pluck('id')->toArray();
        return [
            'roles' => Role::active()->get()->map(function ($role) use ($user_roles) {
                return [
                    'id' => $role->id,
                    'display_name' => $role->display_name,
                    'slug' => $role->slug,
                    'description' => $role->description,
                    'is_checked' => in_array($role->id, $user_roles),
                ];
            })->toArray(),
            'user_roles' => $user->roles->pluck('display_name')->join(', '),
            'user' => UserResource::make($user),
        ];
    }

    public function getUserPermissionAssign(string $username): array
    {
        $user = User::with('person')->with(['roles' => fn ($roles) => $roles->with('permissions')])->with('permissions')->where('username', $username)->first();
        $user_permissions = $user->permissions->pluck('id')->toArray();

        $all_permissions = [];
        $permission_through_role = [];
        foreach ($user->roles as $role) {
            array_push($permission_through_role, $role->permissions->pluck('id')->toArray());
            array_push($all_permissions, $role->permissions->pluck('display_name')->toArray());
        }
        $permission_through_role = Arr::collapse($permission_through_role);
        array_push($all_permissions, $user->permissions->pluck('display_name')->toArray());
        $all_permissions = Arr::collapse($all_permissions);

        return [
            'permissions' => Permission::active()->whereNotIn('id', $permission_through_role)->get()->map(function ($permission) use ($user_permissions) {
                return [
                    'id' => $permission->id,
                    'display_name' => $permission->display_name,
                    'slug' => $permission->slug,
                    'description' => $permission->description,
                    'is_checked' => in_array($permission->id, $user_permissions),
                ];
            })->toArray(),
            'user_permissions' => $user->permissions->pluck('display_name')->join(', '),
            'display_permission' => collect($all_permissions)->join(', '),
            'user' => UserResource::make($user),
        ];
    }
}
