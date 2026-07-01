<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Cart;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function getProductsByCategory($category)
    {
        $category = Category::with('children')
            ->where('slug', $category)
            ->firstOrFail();

        $ids = $category->children
            ->pluck('id')
            ->push($category->id);

        $products = Product::whereIn('category_id', $ids)
            ->get()
            ->map(function ($product) {
                $product->image = asset($product->image);

                return $product;
            });
        return $products;
    }



    public function getProductDetail(Request $request, $id)
    {
        $product = Product::with('category.parent')->findOrFail($id);
        $product->image = asset($product->image);

        $product->isInCart = $request->user()
            ? Cart::where('user_id', $request->user()->id)
                ->where('product_id', $product->id)
                ->exists()
            : false;

        return $product;
    }


    public function getProductBySearch(Request $request)
    {
        $q = $request->input('q');
        return Product::where('title', 'like', "%{$q}%")
            ->get()
            ->map(function ($product) {
                $product->image = asset($product->image);

                return $product;
            });
    }
}
