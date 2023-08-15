<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserMetaDataController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('user')->group(function () {
    Route::get('editar-dados/{id}', [UserMetaDataController::class, 'edit'])->name('editar-usuario');
    Route::patch('update-user/{id}', [UserMetaDataController::class, 'update'])->name('update-user');
});

Route::prefix('post')->group(function () {
    Route::get('/{id}', [PostController::class, 'show'])->name('post');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

//USER METADATA
Route::post('user-metadata', [UserMetaDataController::class, 'store']);

Route::get('csrf', function(){
    echo csrf_token();
});