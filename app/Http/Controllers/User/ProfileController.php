<?php

declare(strict_types=1);

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateRequest;
use Domains\User\Actions\UpdateProfileAction;
use Domains\User\Services\ProfileService;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function edit(Request $request, ProfileService $profile_service): Response
    {
        return Inertia::render('Profile/Show', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'profile' => $profile_service->getUserByUsername($request->user()->username),
            'status' => session('status'),
        ]);
    }

    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $input = $request->payload();

        $data = (new UpdateProfileAction())->handle($input->toArray(), $request->user());

        if ($data->email_verified_at) {
            $data->sendEmailVerificationNotification();
        }

        return redirect()->route('user.profile.edit')->with('success', 'Profile modified successfully.');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        if ($user->id === 1) {
            return redirect()->route('user.profile.edit')->with('warning', 'This user can not be deleted.');
        }

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
