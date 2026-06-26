<?php

namespace Database\Seeders;

use App\Models\Cart;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Cart::insert([
            [
                'user_id' => 1,
                'product_id' => 1,
                'quantity' => 1,
            ],
            [
                'user_id' => 1,
                'product_id' => 4,
                'quantity' => 2,
            ],
            [
                'user_id' => 1,
                'product_id' => 10,
                'quantity' => 1,
            ],
            [
                'user_id' => 1,
                'product_id' => 16,
                'quantity' => 1,
            ],
            [
                'user_id' => 1,
                'product_id' => 20,
                'quantity' => 1,
            ],
        ]);
    }
}
