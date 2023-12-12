<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\AssignRolePermissionRequest;
use Domains\User\Models\Role;
use Domains\User\Services\AuthorizationService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AssignRolePermissionController extends Controller
{
    public function create(Role $role): Response
    {
        $role = $role->with('permissions')->where('slug', $role->slug)->first();
        return Inertia::render('Admin/User/Role/Assign', ['info' => (new AuthorizationService())->getRolePermissionAssign($role->slug)]);
    }

    public function store(AssignRolePermissionRequest $request, Role $role): RedirectResponse
    {
        $input = $request->validated();

        $permissions = collect($input['permissions'])->where('is_checked', true)->pluck('id')->toArray();

        if(auth()->id() === 1 && !in_array(2, $permissions)){
            array_push($permissions, 2);
        }
        
        $role->permissions()->sync($permissions);

        return redirect()->route('admin.role.index')->with('success', 'Permissions successfully assigned to role.');
    }
}
