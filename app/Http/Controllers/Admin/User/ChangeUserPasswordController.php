<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\ChangeUserPasswordRequest;
use Domains\User\Models\User;
use Domains\User\Services\UserService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class ChangeUserPasswordController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/User/Password'
    ) {
    }

    public function edit(User $user): Response
    {
        return Inertia::render("{$this->base_path}/Form", ['info' => [
            'user' => (new UserService())->getByUsername($user->username),
        ],
        ]);
    }

    public function update(ChangeUserPasswordRequest $request, User $user): RedirectResponse
    {
        $input = $request->validated();

        $user->password = Hash::make($input['password']);
        $user->update();

        return redirect()->route('admin.user.index')->with('success', 'User password was reset successfully.');
    }
}
