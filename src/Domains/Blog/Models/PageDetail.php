<?php

declare(strict_types=1);

namespace Domains\Blog\Models;

use Domains\Blog\Models\Page;
use Domains\Concerns\FindActive;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PageDetail extends Pivot
{
    use HasFactory;
    use FindActive;

    protected $fillable = [
        'page_id',
        'user_id',
        'type',
        'block_id',
        'order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function page() : BelongsTo
    {
        return $this->belongsTo(Page::class);
    }
}
