<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::insert([
            [
                'title' => 'گوشی آیفون 15 پرو',
                'description' => 'گوشی پرچمدار اپل با دوربین حرفه‌ای و پردازنده قدرتمند.',
                'price' => 85000000,
                'image' => 'images/products/1.png',
                'category_id' => 3,
            ],
            [
                'title' => 'گوشی سامسونگ گلکسی S25',
                'description' => 'پرچمدار جدید سامسونگ با نمایشگر AMOLED.',
                'price' => 72000000,
                'image' => 'images/products/2.png',
                'category_id' => 4,
            ],
            [
                'title' => 'گوشی شیائومی 15',
                'description' => 'گوشی قدرتمند با دوربین لایکا و باتری پرظرفیت.',
                'price' => 48000000,
                'image' => 'images/products/3.png',
                'category_id' => 5,
            ],
            [
                'title' => 'لپ تاپ لنوو XPS 14',
                'description' => 'لپ تاپ حرفه‌ای با کیفیت ساخت فوق‌العاده.',
                'price' => 95000000,
                'image' => 'images/products/5.png',
                'category_id' => 7,
            ],
        ]);
    }
}
