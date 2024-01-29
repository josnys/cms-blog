<?php

declare(strict_types=1);

use App\Http\Controllers\Admin\AdminToUserController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\User\AssignRolePermissionController;
use App\Http\Controllers\Admin\User\AssignUserPermissionController;
use App\Http\Controllers\Admin\User\AssignUserRoleController;
use App\Http\Controllers\Admin\User\ChangeUserPasswordController;
use App\Http\Controllers\Admin\User\PermissionController;
use App\Http\Controllers\Admin\User\RoleController;
use App\Http\Controllers\Admin\User\UserController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\Blog\PageController;
use App\Http\Controllers\Admin\Blog\CategoryController;
use App\Http\Controllers\Admin\Blog\ContentController;
use App\Http\Controllers\Admin\Blog\PageDetailController;
use App\Http\Controllers\Admin\Blog\SubCategoryController;
use App\Http\Controllers\Admin\Blog\TagController;
use App\Http\Controllers\Admin\Media\GalleryController;
use App\Http\Controllers\Admin\Media\MediaController;
use App\Http\Controllers\Admin\Shared\PublicationController;
use App\Http\Controllers\Admin\Shared\SettingController;
use App\Http\Controllers\MediaController as ControllersMediaController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth', 'permission:admin-access']], function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('/to-user', AdminToUserController::class)->name('to.user');

    Route::get('/setting', [SettingController::class, 'index'])->name('setting.index');
    Route::get('/setting/create', [SettingController::class, 'create'])->name('setting.create');
    Route::post('/setting/create', [SettingController::class, 'store'])->name('setting.store');

    Route::group(['prefix' => 'permission', 'as' => 'permission.'], function () {
        Route::get('/', [PermissionController::class, 'index'])->middleware('permission:read-permission')->name('index');
        Route::post('/create', [PermissionController::class, 'store'])->name('store');
        Route::patch('/{permission:slug}/edit', [PermissionController::class, 'update'])->name('update');
    });

    Route::group(['prefix' => 'role', 'as' => 'role.'], function () {
        Route::get('/', [RoleController::class, 'index'])->middleware('permission:read-role')->name('index');
        Route::post('/create', [RoleController::class, 'store'])->name('store');
        Route::patch('/{role:slug}/edit', [RoleController::class, 'update'])->name('update');
        Route::get('/{role:slug}/permission', [AssignRolePermissionController::class, 'create'])->middleware('permission:assign-permission-to-role')->name('permission.create');
        Route::post('/{role:slug}/permission', [AssignRolePermissionController::class, 'store'])->name('permission.store');
    });

    Route::group(['prefix' => 'user', 'as' => 'user.'], function () {
        Route::get('/', [UserController::class, 'index'])->name('index');
        Route::get('/{user:username}/edit', [UserController::class, 'edit'])->middleware('permission:update-user')->name('edit');
        Route::patch('/{user:username}/edit', [UserController::class, 'update'])->name('update');

        // Password Change
        Route::get('/{user:username}/password', [ChangeUserPasswordController::class, 'edit'])->middleware('permission:change-user-password')->name('password.edit');
        Route::patch('/{user:username}/password', [ChangeUserPasswordController::class, 'update'])->name('password.update');

        // Assign Roles
        Route::get('/{user:username}/role', [AssignUserRoleController::class, 'create'])->name('role.create');
        Route::post('/{user:username}/role', [AssignUserRoleController::class, 'store'])->name('role.store');

        // Assign Permissions
        Route::get('/{user:username}/permission', [AssignUserPermissionController::class, 'create'])->name('permission.create');
        Route::post('/{user:username}/permission', [AssignUserPermissionController::class, 'store'])->name('permission.store');
    });

    Route::group(['prefix' => 'blog', 'as' => 'blog.'], function(){
        Route::get('/', [BlogController::class, 'index'])->name('index');

        Route::group(['prefix' => 'page', 'as' => 'page.'], function(){
            Route::get('/', [PageController::class, 'index'])->middleware('permission:read-page')->name('index');
            Route::post('/create', [PageController::class, 'store'])->name('store');
            Route::patch('/{page:slug}/edit', [PageController::class, 'update'])->name('update');

            Route::group(['prefix' => '/{page:slug}/detail', 'as' => 'detail.'], function(){
                Route::get('/create', [PageDetailController::class, 'create'])->name('create');
                Route::post('/create', [PageDetailController::class, 'store'])->name('store');
            });
        });

        Route::group(['prefix' => 'category', 'as' => 'category.'], function () {
            Route::get('/', [CategoryController::class, 'index'])->middleware('permission:read-blog-category')->name('index');
            Route::post('/create', [CategoryController::class, 'store'])->name('store');
            Route::patch('/{category:slug}/edit', [CategoryController::class, 'update'])->name('update');

            Route::group(['prefix' => '{category:slug}/subcategory', 'as' => 'subcategory.'], function () {
                Route::get('/', [SubCategoryController::class, 'index'])->middleware('permission:read-blog-sub-category')->name('index');
                Route::post('/create', [SubCategoryController::class, 'store'])->name('store');
                Route::patch('/{subcategory:slug}/edit', [SubCategoryController::class, 'update'])->name('update');
            });
        });

        Route::group(['prefix' => 'tag', 'as' => 'tag.'], function () {
            Route::get('/', [TagController::class, 'index'])->middleware('permission:read-blog-tag')->name('index');
            Route::post('/create', [TagController::class, 'store'])->name('store');
            Route::patch('/{tag}/edit', [TagController::class, 'update'])->name('update');
        });

        Route::group(['prefix' => 'content', 'as' => 'content.'], function(){
            Route::get('/', [ContentController::class, 'index'])->middleware('permission:read-blog-content')->name('index');
            Route::get('/create', [ContentController::class, 'create'])->name('create');
            Route::post('/create', [ContentController::class, 'store'])->name('store');
            Route::get('/{content:slug}/edit', [ContentController::class, 'edit'])->name('edit');
            Route::patch('/{content:slug}/edit', [ContentController::class, 'update'])->name('update');
        });
    });

    Route::group(['prefix' => 'media', 'as' => 'media.'], function(){
        Route::get('/', [MediaController::class, 'index'])->middleware('permission:read-media')->name('index');
        Route::post('/create', [MediaController::class, 'store'])->name('store');
        Route::post('/{media:slug}/edit', [MediaController::class, 'update'])->name('update');

        Route::group(['prefix' => 'gallery', 'as' => 'gallery.'], function(){
            Route::get('/', [GalleryController::class, 'index'])->middleware('permission:read-gallery')->name('index');
            Route::get('/create', [GalleryController::class, 'create'])->name('create');
            Route::post('/create', [GalleryController::class, 'store'])->name('store');
            Route::get('/{gallery:slug}/edit', [GalleryController::class, 'edit'])->name('edit');
            Route::put('/{gallery:slug}/edit', [GalleryController::class, 'update'])->name('update');
        });
    });

    Route::group(['prefix' => 'publication', 'as' => 'publication.'], function(){
        Route::get('/', [PublicationController::class, 'index'])->name('index');
        Route::post('/create', [PublicationController::class, 'store'])->name('store');
        Route::put('/{publication}/edit', [PublicationController::class, 'update'])->name('update');
    });
});

Route::group(['prefix' => 'files', 'as' => 'file.'], function(){
    Route::group(['prefix' => 'medias', 'as' =>'media.'], function(){
        Route::get('/{path}', [ControllersMediaController::class, 'index'])->name('full');
        Route::get('/thumbnails/{path}', [ControllersMediaController::class, 'index'])->name('thumbnail');
        Route::get('/resources/{path}', [ControllersMediaController::class, 'resource'])->name('resource.full');
        Route::get('/resources/thumbnails/{path}', [ControllersMediaController::class, 'resource'])->name('resource.thumbnail');
    });
});

require __DIR__ . '/auth.php';
