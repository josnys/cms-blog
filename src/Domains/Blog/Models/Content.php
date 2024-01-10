<?php

declare(strict_types=1);

namespace Domains\Blog\Models;

use Domains\Blog\Models\Concerns\HasSlug;
use Domains\Concerns\FindActive;
use Domains\Media\Models\Media;
use Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Content extends Model
{
    use HasFactory;
    use HasSlug;
    use FindActive;

    protected $fillable = [
        'slug',
        'user_id',
        'blog_category_id',
        'blog_sub_category_id',
        'cover_id',
        'title',
        'intro',
        'body',
        'is_active',
        'published_at'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'published_at' => 'datetime'
    ];

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function category() : BelongsTo
    {
        return $this->belongsTo(BlogCategory::class, 'blog_category_id', 'id');
    }

    public function subcategory(): BelongsTo
    {
        return $this->belongsTo(BlogSubCategory::class, 'blog_sub_category_id', 'id');
    }

    public function cover() : BelongsTo
    {
         return $this->belongsTo(Media::class, 'cover_id', 'id');
    }
}
