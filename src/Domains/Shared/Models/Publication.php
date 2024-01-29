<?php

declare(strict_types=1);

namespace Domains\Shared\Models;

use Domains\Concerns\FindActive;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    use HasFactory;
    use FindActive;

    protected $fillable = [
        'name',
        'website',
        'address_one',
        'address_two',
        'city',
        'state',
        'country',
        'zipcode',
        'gps_location'
    ];
}
