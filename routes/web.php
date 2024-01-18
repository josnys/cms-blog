<?php

declare(strict_types=1);

use App\Http\Controllers\HomePageController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\UrlResolverController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomePageController::class)->name('home.page');

Route::get('/page/{slug?}', UrlResolverController::class)->name('site.page');

Route::group(['prefix' => 'files', 'as' => 'file.'], function () {
     Route::group(['prefix' => 'medias', 'as' => 'media.'], function () {
          Route::get('/{path}', [MediaController::class, 'index'])->name('full');
          Route::get('/thumbnails/{path}', [MediaController::class, 'index'])->name('thumbnail');
          Route::get('/resource/{path}', [MediaController::class, 'resource'])->name('resource.full');
          Route::get('/resource/thumbnails/{path}', [MediaController::class, 'resource'])->name('resource.thumbnail');
     });
});

require __DIR__.'/auth.php';
