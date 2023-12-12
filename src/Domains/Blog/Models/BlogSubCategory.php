<?php

declare(strict_types=1);

namespace Domains\Blog\Models;

use Domains\Blog\Models\Concerns\HasSlug;
use Domains\Concerns\FindActive;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BlogSubCategory extends Model
{
    use HasFactory;
    use HasSlug;
    use FindActive;

    protected $fillable = [
        'blog_category_id',
        'name',
        'slug',
        'show_main_menu',
        'is_active',
    ];

    protected $casts = [
        'show_main_menu' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function category() : BelongsTo
    {
        return $this->belongsTo(BlogCategory::class, 'id', 'blog_category_id');
    }
}
