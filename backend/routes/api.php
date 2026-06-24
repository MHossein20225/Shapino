<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\ProductController;

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::middleware('auth:sanctum')->get('/me', function (Request $request) {
    return response()->json($request->user());
});
Route::get('/products/{category}', [ProductController::class, 'productsBtCategory']);
Route::get('/product/{id}', [ProductController::class, 'productDetail']);
