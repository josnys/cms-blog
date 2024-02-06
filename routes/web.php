<?php

declare(strict_types=1);

use App\Http\Controllers\Admin\Shared\PublicationController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\NewsletterSubscriptionController;
use App\Http\Controllers\UrlResolverController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomePageController::class)->name('home.page');

Route::get('/page/{slug?}', UrlResolverController::class)->name('site.page');

Route::post('/publication/create', [PublicationController::class, 'store'])->name('publication.store');

Route::post('/contact-us', ContactController::class)->name('site.contact');
Route::post('/subscribe', [NewsletterSubscriptionController::class, 'subscribe'])->name('newsletter.subscribe');
Route::post('/unsubscribe', [NewsletterSubscriptionController::class, 'unsubscribe'])->name('newsletter.unsubscribe');

Route::group(['prefix' => 'files', 'as' => 'file.'], function () {
     Route::group(['prefix' => 'medias', 'as' => 'media.'], function () {
          Route::get('/{path}', [MediaController::class, 'index'])->name('full');
          Route::get('/thumbnails/{path}', [MediaController::class, 'index'])->name('thumbnail');
          Route::get('/resource/{path}', [MediaController::class, 'resource'])->name('resource.full');
          Route::get('/resource/thumbnails/{path}', [MediaController::class, 'resource'])->name('resource.thumbnail');
     });
});

require __DIR__.'/auth.php';
