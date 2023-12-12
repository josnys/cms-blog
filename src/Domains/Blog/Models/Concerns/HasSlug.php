<?php

namespace Domains\Blog\Models\Concerns;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

trait HasSlug
{
     public static function bootHasSlug(): void
     {
          static::creating(function(Model $model){
               $slug = Str::slug($model->name);
               $exists = $model->where('slug', $slug)->first();
               $count = 0;

               while($exists){
                    $count++;
                    $slug = "$slug-$count";
                    $exists = $model->where('slug', $slug)->first();
               }
               
               $model->slug = $slug;
          });
     }
}