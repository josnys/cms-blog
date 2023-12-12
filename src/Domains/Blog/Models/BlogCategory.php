<?php

declare(strict_types=1);

namespace Domains\Blog\Models;

use Domains\Blog\Models\Concerns\HasSlug;
use Domains\Concerns\FindActive;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BlogCategory extends Model
{
    use HasFactory;
    use HasSlug;
    use FindActive;

    protected $fillable = [
        'name',
        'slug',
        'show_main_menu',
        'is_active',
    ];

    protected $casts = [
        'show_main_menu' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function subcategories() : HasMany
    {
        return $this->hasMany(BlogSubCategory::class, 'blog_category_id', 'id');
    }
}
