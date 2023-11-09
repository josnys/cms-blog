<?php

declare(strict_types=1);

namespace Domains\Concerns;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Builder as ModelBuilder;

trait FindActive
{
    public function scopeActive(ModelBuilder $model): Builder
    {
        return $model->where('is_active', true);
    }
}
