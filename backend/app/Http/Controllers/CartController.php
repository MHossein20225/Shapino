<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    protected $fillable = [
        "user_id",
        "product_id",
    ];

    public function getCartByUserId(Request $request)
    {
        return Cart::with('product')
            ->where('user_id', $request->user()->id)
            ->get()
            ->map(function ($product) {
                $product->product->image = asset($product->product->image);
                return $product;
            });
    }

    public function updateCartQuantity(Request $request, $id)
    {
        $cart = Cart::where('product_id', $id)
            ->first()
            ->update([
                'quantity' => $request->quantity,
            ]);
        return response()->json($cart);
    }


    public function addProductToCart(Request $request)
    {
        $cart = Cart::create([
            "user_id" => $request->user()->id,
            "product_id" => $request->id
        ]);
        return response()->json($cart);
    }

    public function deleteProductInCart(Request $request, $id)
    {
        $cart = Cart::where("user_id", $request->user()->id)
            ->where("product_id", $id)
            ->delete();
    }

}
