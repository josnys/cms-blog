<?php

declare(strict_types=1);

namespace Domains\User\Services;

use App\Http\Resources\Domains\User\PermissionResource;
use App\Http\Resources\Domains\User\RoleResource;
use Domains\User\Models\Permission;
use Domains\User\Models\Role;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class AuthorizationService
{
    public function getAllPermissionPaginate(int $qty_per_page): AnonymousResourceCollection
    {
        $permissions = Permission::query();
        if (! request()->user()->can('create-permission')) {
            $permissions = $permissions->where('id', '!=', 2);
        }
        return PermissionResource::collection($permissions->paginate($qty_per_page));
    }

    public function getPermissionBySlug(string $slug): PermissionResource
    {
        return PermissionResource::make(Permission::where('slug', $slug)->first());
    }

    public function getAllRolePaginate(int $qty_per_page): AnonymousResourceCollection
    {
        return RoleResource::collection(Role::with('permissions')->paginate($qty_per_page));
    }

    public function getRoleBySlug(string $slug): RoleResource
    {
        return RoleResource::make(Role::with('permissions')->where('slug', $slug)->first());
    }

    public function getRolePermissionAssign(string $slug): array
    {
        $role = Role::with('permissions')->where('slug', $slug)->first();

        $role_permissions = $role->permissions->pluck('id')->toArray();

        return [
            'permissions' => Permission::active()->get()->map(function ($permission) use ($role_permissions) {
                return [
                    'id' => $permission->id,
                    'display_name' => $permission->display_name,
                    'slug' => $permission->slug,
                    'description' => $permission->description,
                    'is_checked' => in_array($permission->id, $role_permissions),
                ];
            }),
            'role_permissions' => $role->permissions->pluck('display_name')->join(', '),
            'role' => RoleResource::make($role),
        ];
    }
}
