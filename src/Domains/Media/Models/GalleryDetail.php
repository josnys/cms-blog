<?php

declare(strict_types=1);

namespace Domains\Media\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GalleryDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'gallery_id',
        'media_id'
    ];

    public function gallery() : BelongsTo
    {
        return $this->belongsTo(Gallery::class, 'gallery_id', 'id');
    }
}
