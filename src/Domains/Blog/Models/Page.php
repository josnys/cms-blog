<?php

declare(strict_types=1);

namespace Domains\Blog\Models;

use Domains\Blog\Models\PageDetail;
use Domains\Blog\Enums\PageDetailTypeEnum;
use Domains\Blog\Models\Concerns\HasSlug;
use Domains\Concerns\FindActive;
use Domains\Media\Models\Gallery;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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

    public function content() : BelongsToMany
    {
        return $this->belongsToMany(Content::class, 'page_details', 'page_id', 'block_id')
            ->wherePivot('type', PageDetailTypeEnum::CONTENT)
            ->withPivot(['type', 'order', 'is_active']);
    }

    public function gallery()
    {
        return $this->belongsToMany(Gallery::class, 'page_details', 'page_id', 'block_id')
            ->wherePivot('type', PageDetailTypeEnum::GALLERY)
            ->withPivot(['type', 'order', 'is_active']);
    }
}
