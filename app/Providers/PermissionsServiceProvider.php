<?php

declare(strict_types=1);

namespace App\Providers;

use Domains\User\Models\Permission;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class PermissionsServiceProvider extends ServiceProvider
{
    public function register(): void
    {
    }

    public function boot(): void
    {
        try {
            if (app()->environment() !== 'testing') {
                Permission::get()->map(function ($permission) {
                    Gate::define($permission->slug, function ($user) use ($permission) {
                        return $user->hasPermissionTo($permission);
                    });
                });
            }
        } catch (\Exception $e) {
            report($e);
        }
    }
}
