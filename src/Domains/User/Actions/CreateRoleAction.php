<?php

declare(strict_types=1);

namespace Domains\User\Actions;

use Domains\User\Models\Role;

class CreateRoleAction
{
    public function handle(array $data): Role
    {
        $role = new Role();
        $role->display_name = $data['display_name'];
        $role->slug = $data['slug'];
        $role->is_active = $data['is_active'];
        $role->save();

        return $role;
    }
}
