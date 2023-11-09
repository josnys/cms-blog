<?php

declare(strict_types=1);

namespace Domains\User\Models;

use Database\Factories\PermissionFactory;
use Domains\Concerns\FindActive;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Permission extends Model
{
    use HasFactory;
    use FindActive;

    protected $fillable = [
        'display_name',
        'slug',
        'description',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, 'roles_permissions');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'users_permissions');
    }

    public static function userAccess(): array
    {
        return [
            'add_new' => request()->user()->can('create-permission'),
            'edit' => request()->user()->can('update-permission'),
        ];
    }

    protected static function newFactory()
    {
        return new PermissionFactory();
    }
}
