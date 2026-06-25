<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::insert([
            [
                'id' => 1,
                'name' => 'موبایل',
                'slug' => 'mobile',
                'image' => 'images/categories/mobile.png',
                'parent_id' => null,
            ],
            [
                'id' => 2,
                'name' => 'لپ تاپ',
                'slug' => 'laptop',
                'image' => 'images/categories/laptop.png',
                'parent_id' => null,
            ],
            [
                'id' => 3,
                'name' => 'اپل',
                'slug' => 'apple',
                'image' => null,
                'parent_id' => 1,
            ],
            [
                'id' => 4,
                'name' => 'سامسونگ',
                'slug' => 'samsung',
                'image' => null,
                'parent_id' => 1,
            ],
            [
                'id' => 5,
                'name' => 'شیائومی',
                'slug' => 'xiaomi',
                'image' => null,
                'parent_id' => 1,
            ],
            [
                'id' => 6,
                'name' => 'ایسوس',
                'slug' => 'asus',
                'image' => null,
                'parent_id' => 2,
            ],
            [
                'id' => 7,
                'name' => 'لنوو',
                'slug' => 'lenovo',
                'image' => null,
                'parent_id' => 2,
            ],
        ]);
    }
}
