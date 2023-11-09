<?php

use App\Http\Controllers\Admin\AdminToUserController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\User\AssignRolePermissionController;
use App\Http\Controllers\Admin\User\AssignUserPermissionController;
use App\Http\Controllers\Admin\User\AssignUserRoleController;
use App\Http\Controllers\Admin\User\ChangeUserPasswordController;
use App\Http\Controllers\Admin\User\PermissionController;
use App\Http\Controllers\Admin\User\RoleController;
use App\Http\Controllers\Admin\User\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth', 'permission:admin-access']], function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::get('/to-user', AdminToUserController::class)->name('to.user');

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
});

require __DIR__ . '/auth.php';
