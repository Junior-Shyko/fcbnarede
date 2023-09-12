<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\HeartController;
use App\Http\Controllers\PhoneController;
use App\Http\Controllers\UserMetaDataController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('user')->group(function () {
    Route::get('list', [UserController::class, 'index'])->name('todos');
    Route::post('desactive/{id}', [UserMetaDataController::class, 'desactive'])->name('user-desactive');
});

Route::prefix('post')->group(function () {
    Route::get('todos', [PostController::class, 'index'])->name('todos');
});

Route::prefix('like')->group(function () {
    Route::post('add', [LikeController::class, 'store'])->name('add');
    Route::delete('unlike', [LikeController::class, 'destroy'])->name('unlike');
    Route::get('all/post/{id}', [LikeController::class, 'show'])->name('show');
    Route::get('my-like/{idPost}' , [LikeController::class, 'myLike'])->name('my-like');
});

Route::prefix('heart')->group(function () {
    Route::post('add', [HeartController::class, 'store'])->name('add-heart');
    Route::get('all/post/{id}', [HeartController::class, 'show'])->name('show');
});

Route::prefix('phone')->group(function () {
    Route::post('store', [PhoneController::class, 'store'])->name('phone-store');
    Route::get('user/{id}', [PhoneController::class, 'show'])->name('phone-user');
    Route::delete('delete/{id}', [PhoneController::class, 'destroy'])->name('phone-delete');
    Route::patch('update', [PhoneController::class, 'update'])->name('phone-update');
});

