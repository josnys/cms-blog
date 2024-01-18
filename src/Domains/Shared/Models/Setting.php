<?php

declare(strict_types=1);

namespace Domains\Shared\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'logo',
        'slogan',
        'description',
        'email',
        'phone',
        'address',
        'socials'
    ];

    protected $casts = [
        'socials' => 'array'
    ];
}
