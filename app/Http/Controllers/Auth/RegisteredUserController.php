<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterUserRequest;
use App\Providers\RouteServiceProvider;
use Domains\User\Actions\CreateUserAction;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    public function store(RegisterUserRequest $request): RedirectResponse
    {
        try {
            $input = $request->payload();

            $user = (new CreateUserAction())->handle($input->toArray());

            $message = "Welcome to your dashboard {$user->username}";

            event(new Registered($user));

            Auth::login($user);

            return redirect(RouteServiceProvider::HOME)->with('success', $message);
        } catch (\Exception $e) {
            Log::info('Create User', ['error' => $e]);
            return back()->with('error', 'An Error has occured. Please Contact System Admin');
        }
    }
}
