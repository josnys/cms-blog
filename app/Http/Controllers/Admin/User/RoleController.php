<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\CreateRoleRequest;
use App\Http\Requests\Admin\User\UpdateRoleRequest;
use Domains\User\Actions\CreateRoleAction;
use Domains\User\Models\Role;
use Domains\User\Services\AuthorizationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RoleController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/User/Role'
    ) {
    }

    public function index(Request $request): Response
    {
        return Inertia::render("{$this->base_path}/Index", ['info' => [
            'header' => ['Name', 'Slug', 'Status', ''],
            'roles' => (new AuthorizationService())->getAllRolePaginate(50),
            'authorize_to' => Role::userAccess(),
        ],
        ]);
    }

    public function store(CreateRoleRequest $request): RedirectResponse
    {
        $input = $request->validated();

        $result = (new CreateRoleAction())->handle($input);

        $message = $result->wasRecentlyCreated ? 'Role created successfully.' : 'No Action taken';

        return redirect()->route('admin.role.index')->with('success', $message);
    }

    public function update(UpdateRoleRequest $request, Role $role): RedirectResponse
    {
        $input = $request->validated();

        $role->display_name = $input['display_name'];
        $role->is_active = $input['is_active'];
        $role->update();

        return redirect()->route('admin.role.index')->with('success', 'Role access updated.');
    }
}
