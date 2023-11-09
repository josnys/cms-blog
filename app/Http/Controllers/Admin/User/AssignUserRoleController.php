<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\AssignUserRoleRequest;
use Domains\User\Models\User;
use Domains\User\Services\UserService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AssignUserRoleController extends Controller
{
    public function create(User $user): Response
    {
        return Inertia::render('Admin/User/Role', ['info' => (new UserService())->getUserRoleAssign($user->username)]);
    }

    public function store(AssignUserRoleRequest $request, User $user): RedirectResponse
    {
        $input = $request->validated();

        $user->roles()->sync(collect($input['roles'])->where('is_checked', true)->pluck('id')->toArray());

        return redirect()->route('admin.user.index')->with('success', 'Roles successfully assigned to user.');
    }
}
