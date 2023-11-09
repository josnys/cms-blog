<?php

declare(strict_types=1);

namespace Domains\User\Actions;

use Domains\User\Models\Permission;

class CreatePermissionAction
{
    public function handle(array $data): int
    {
        $count = 0;
        foreach ($data as $perm) {
            $permission = new Permission();
            $permission->display_name = $perm['display_name'];
            $permission->slug = $perm['slug'];
            $permission->is_active = $perm['is_active'];

            $permission->save();

            if ($permission) {
                $count++;
            }
        }

        return $count;
    }
}
