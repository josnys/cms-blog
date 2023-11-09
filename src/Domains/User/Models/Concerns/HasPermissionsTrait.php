<?php

declare(strict_types=1);

namespace Domains\User\Models\Concerns;

use Domains\User\Models\Permission;

trait HasPermissionsTrait
{
    public function hasPermissionTo(Permission $permission): bool
    {
        return $this->hasPermissionThroughRole($permission) || $this->hasPermission($permission);
    }

    public function hasPermissionThroughRole($permission): bool
    {
        foreach ($permission->roles as $role) {
            if ($this->roles->contains($role)) {
                return true;
            }
        }
        return false;
    }

    public function allowedTo(string $permission): bool
    {
        $perms = Permission::where('slug', $permission)->first();
        return $this->hasPermissionTo($perms);
    }

    public function hasRole(array ...$roles): bool
    {
        foreach ($roles as $role) {
            if ($this->roles->contains('slug', $role)) {
                return true;
            }
        }

        return false;
    }

    public function hasPermission(Permission $permission): bool
    {
        return (bool) $this->permissions()->where('slug', $permission->slug)->count();
    }
}
