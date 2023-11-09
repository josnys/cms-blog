<?php

declare(strict_types=1);

namespace Domains\User\Models\Concerns;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

trait HasCode
{
    public static function bootHasCode(): void
    {
        static::creating(function (Model $model) {
            $count = $model->count();
            $model->code = Str::padLeft($count, 4, 0);
        });
    }
}
