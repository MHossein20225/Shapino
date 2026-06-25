<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAllCategory()
    {
        return Category::where("parent_id", null)
            ->get()
            ->map(function ($category){
                $category->image = asset($category->image);
                return $category;
            });
    }
}
