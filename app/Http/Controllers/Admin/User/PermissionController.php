<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\CreatePermissionRequest;
use App\Http\Requests\Admin\User\UpdatePermissionRequest;
use Domains\User\Actions\CreatePermissionAction;
use Domains\User\Models\Permission;
use Domains\User\Services\AuthorizationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PermissionController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/User/Permission'
    ) {
    }

    public function index(Request $request): Response
    {
        return Inertia::render("{$this->base_path}/Index", ['info' => [
            'header' => ['Name', 'Slug', 'Status', ''],
            'permissions' => (new AuthorizationService())->getAllPermissionPaginate(50),
            'can' => Permission::userAccess(),
        ],
        ]);
    }

    public function store(CreatePermissionRequest $request): RedirectResponse
    {
        $input = $request->validated();

        $result = (new CreatePermissionAction())->handle($input['permissions']);

        return redirect()->route('admin.permission.index')->with('success', "{$result} permission(s) authorization created.");
    }

    public function update(UpdatePermissionRequest $request, Permission $permission): RedirectResponse
    {
        $input = $request->validated();

        $permission->display_name = $input['display_name'];
        $permission->is_active = $input['is_active'];
        $permission->update();

        return redirect()->route('admin.permission.index')->with('success', 'Permission authorization updated.');
    }
}
