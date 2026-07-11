<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Product;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function getComment(Product $product)
    {
        return response()->json($product->comments);
    }
    public function addComment(Request $request, Product $product)
    {
        $validated = $request->validate([
            'body' => 'required|string|min:2|max:1000',
            'parent_id' => 'nullable|exists:comments,id',
        ]);

        $comment = $product->comments()->create([
            'user_id' => $request->user()->id,
            'body' => $validated['body'],
            'parent_id' => $validated['parent_id'] ?? null,
        ]);

        return response()->json($comment->load('user'), 201);
    }

    public function getReplies(Comment $comment)
    {
        return response()->json(
            $comment->replies
        );
    }
}
