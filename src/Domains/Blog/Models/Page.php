<?php

declare(strict_types=1);

namespace Domains\Blog\Models;

use Domains\Blog\Models\Concerns\HasSlug;
use Domains\Concerns\FindActive;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;
    use HasSlug;
    use FindActive;

    protected $fillable = [
        'slug',
        'name',
        'show_main_menu',
        'access_by_id',
        'is_active'
    ];

    protected $casts = [
        'show_main_menu' => 'boolean',
        'access_by_id' => 'boolean',
        'is_active' => 'boolean'
    ];
}
