<?php

declare(strict_types=1);

namespace Domains\Blog\Models;

use Domains\Concerns\FindActive;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogTag extends Model
{
    use HasFactory;
    use FindActive;

    protected $fillable = ['name', 'is_active'];

    protected $casts = ['is_active' => 'boolean'];
}
