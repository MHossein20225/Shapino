<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $validate = $request->validate([
            'username' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
        ], [
            'username.unique' => 'این نام کاربری قبلاً استفاده شده',
            'email.unique' => 'این ایمیل قبلاً ثبت شده',
        ]);
        $user = User::create([
            'username' => $validate['username'],
            'email' => $validate['email'],
            'password' => Hash::make($validate['password'])
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully',
            'auth' => $user,
            'token' => $token
        ], 201);
    }


    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'رمز یا ایمیل اشتباه است'
            ], 401);
        }

        $user = Auth::user();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'auth' => $user,
            'token' => $token
        ]);
    }
}
