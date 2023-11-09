<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Domains\User\Models\Permission;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PermissionMiddleware
{
    public function handle(Request $request, Closure $next, string $permission): Response
    {
        if ($permission !== null) {
            $perms = Permission::where('slug', $permission)->first();

            if (! $perms || ! $request->user()->hasPermissionTo($perms)) {
                abort(403);
            }
        }
        return $next($request);
    }
}
