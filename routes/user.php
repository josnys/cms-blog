<?php

declare(strict_types=1);

use App\Http\Controllers\MediaController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\UserToAdminController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'user', 'as' => 'user.', 'middleware' => ['auth', 'verified']], function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('to-admin', UserToAdminController::class)->name('to.admin');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['prefix' => 'files', 'as' => 'file.'], function () {
    Route::group(['prefix' => 'medias', 'as' => 'media.'], function () {
        Route::get('/{path}', MediaController::class)->name('full');
        Route::get('/thumbnails/{path}', MediaController::class)->name('thumbnail');
    });
});

require __DIR__ . '/auth.php';
