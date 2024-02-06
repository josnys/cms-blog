<?php

declare(strict_types=1);

namespace Domains\Shared\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NewsletterSubscription extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['email'];
}
