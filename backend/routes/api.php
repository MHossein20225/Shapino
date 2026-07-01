<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\ProductController;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\CartController;

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::middleware('auth:sanctum')->get('/me', function (Request $request) {
    return response()->json($request->user());
});


Route::get('/products', [ProductController::class, 'getProductBySearch']);
Route::get('/products/{category}', [ProductController::class, 'getProductsByCategory']);
Route::get('/product/{id}', [ProductController::class, 'getProductDetail']);


Route::get('/categories', [CategoryController::class, 'getAllCategory']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/cart', [CartController::class, 'getCartByUserId']);
    Route::patch('/cart/{id}', [CartController::class, 'updateCartQuantity']);
    Route::post('/cart/add', [CartController::class, 'addProductToCart']);
    Route::delete('/cart/delete/{id}', [CartController::class, 'deleteProductInCart']);
});
