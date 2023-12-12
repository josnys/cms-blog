<?php

declare(strict_types=1);

namespace Domains\Media\Models;

use Domains\Blog\Models\Concerns\HasSlug;
use Domains\Concerns\FindActive;
use Domains\Media\Services\MediaService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Media extends Model
{
    use HasFactory;
    use HasSlug;
    use FindActive;

    protected $fillable = [
        'slug', 
        'name', 
        'url',
        'type',
        'mime_type',
        'description',
        'is_external',
        'is_active'
    ];

    protected $casts = [
        'is_external' => 'boolean',
        'is_active' => 'boolean'
    ];
}
