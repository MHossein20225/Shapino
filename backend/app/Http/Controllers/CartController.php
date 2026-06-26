<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function getCartByUserId(Request $request)
    {
        return Cart::with('product')
            ->where('user_id', $request->user()->id)
            ->get();
    }
}
