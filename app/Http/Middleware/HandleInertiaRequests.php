<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Domains\Shared\Services\SettingsService;
use Domains\Shared\Services\SiteService;
use Domains\User\Services\UserService;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    // public function version(Request $request): string|null
    // {
    //     return parent::version($request);
    // }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = auth()->check() ? (new UserService())->getByUsername(auth()->user()->username) : null;

        return [
            ...parent::share($request),
            'app' => (new SettingsService())->getById(1) ?? [],
            'menu' => (new SiteService())->getMainMenu(),
            'additional' => ['mascot' => SiteService::getMascot(), 'current_year' => Carbon::now()->format('Y')],
            'auth' => [
                'user' => $user,
                'can' => $user ? [
                    'admin_panel' => $user->can('admin-access'),
                ] : null,
            ],
            'ziggy' => fn () => [
                ...(new Ziggy())->toArray(),
                'location' => $request->url(),
            ],
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'info' => fn () => $request->session()->get('info'),
                'error' => fn () => $request->session()->get('error'),
                'warning' => fn () => $request->session()->get('warning'),
            ],
            'errors' => fn () => $request->session()->get('errors') ? $request->session()->get('errors')->getBag('default')->getMessages() : (object) [],
        ];
    }
}
