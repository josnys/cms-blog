<?php

declare(strict_types=1);

use App\Http\Controllers\HomePageController;
use App\Http\Controllers\MediaController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomePageController::class);

Route::group(['prefix' => 'files', 'as' => 'file.'], function () {
     Route::group(['prefix' => 'medias', 'as' => 'media.'], function () {
          Route::get('/{path}', MediaController::class)->name('full');
          Route::get('/thumbnails/{path}', MediaController::class)->name('thumbnail');
     });
});

require __DIR__.'/auth.php';
