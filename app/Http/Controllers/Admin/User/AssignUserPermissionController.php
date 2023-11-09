<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\AssignUserPermissionRequest;
use Domains\User\Models\User;
use Domains\User\Services\UserService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AssignUserPermissionController extends Controller
{
    public function create(User $user): Response
    {
        return Inertia::render('Admin/User/Permission', ['info' => (new UserService())->getUserPermissionAssign($user->username)]);
    }

    public function store(AssignUserPermissionRequest $request, User $user): RedirectResponse
    {
        $input = $request->validated();

        $user->permissions()->sync(collect($input['permissions'])->where('is_checked', true)->pluck('id')->toArray());

        return redirect()->route('admin.user.index')->with('success', 'Permission successfully assigned to user');
    }
}
