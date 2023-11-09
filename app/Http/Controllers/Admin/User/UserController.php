<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\UpdateUserRequest;
use Domains\User\Actions\UpdateUserAction;
use Domains\User\Models\User;
use Domains\User\Services\UserService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/User'
    ) {
    }

    public function index(Request $request): Response
    {
        return Inertia::render("{$this->base_path}/Index", ['info' => [
            'header' => ['Code', 'Name', 'Username', 'E-mail', 'Roles', 'Status', ''],
            'users' => (new UserService())->getAllPaginate(50),
            'authorize_to' => [
                'edit' => $request->user()->allowedTo('update-user'),
                'assign_role' => $request->user()->allowedTo('assign-role-to-user'),
                'assign_permission' => $request->user()->allowedTo('assign-permission-to-user'),
                'change_password' => $request->user()->allowedTo('change-user-password'),
            ],
        ],
        ]);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function show(User $username): Response
    {
        return Inertia::render("{$this->base_path}/Form", ['info' => ['user' => (new UserService())->getByUsername($username->username)]]);
    }

    public function edit(User $user): Response
    {
        return Inertia::render("{$this->base_path}/Form", ['info' => ['user' => (new UserService())->getByUsername($user->username)]]);
    }

    public function update(UpdateUserRequest $request, User $user): RedirectResponse
    {
        $input = $request->payload();

        $user = (new UpdateUserAction())->handle($input->toArray(), $user);

        return redirect()->route('admin.user.index')->with('success', 'User modified successfully.');
    }

    public function destroy(User $user): RedirectResponse
    {
        return redirect()->route('admin.user.index')->with('success', 'User deleted successfully.');
    }
}
