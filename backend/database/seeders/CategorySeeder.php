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
                'name' => 'موبایل',
                'slug' => 'mobile',
                'image' => 'images/categories/mobile.png',
                'parent_id' => null,
            ],
            [
                'name' => 'لپ تاپ',
                'slug' => 'laptop',
                'image' => 'images/categories/laptop.png',
                'parent_id' => null,
            ],
            [
                'name' => 'هدفون',
                'slug' => 'headphone',
                'image' => 'images/categories/headphone.png',
                'parent_id' => null,
            ],
            [
                'name' => 'لوازم خانگی',
                'slug' => 'home-appliances',
                'image' => 'images/categories/home-appliances.png',
                'parent_id' => null,
            ],
            [
                'name' => 'اپل',
                'slug' => 'apple',
                'image' => null,
                'parent_id' => 1,
            ],
            [
                'name' => 'سامسونگ',
                'slug' => 'samsung',
                'image' => null,
                'parent_id' => 1,
            ],
            [
                'name' => 'شیائومی',
                'slug' => 'xiaomi',
                'image' => null,
                'parent_id' => 1,
            ],
            [
                'name' => 'ایسوس',
                'slug' => 'asus',
                'image' => null,
                'parent_id' => 2,
            ],
            [
                'name' => 'لنوو',
                'slug' => 'lenovo',
                'image' => null,
                'parent_id' => 2,
            ],
            [
                'name' => 'سونی',
                'slug' => 'sony',
                'image' => null,
                'parent_id' => 3,
            ],
            [
                'name' => 'جی بی ال',
                'slug' => 'jbl',
                'image' => null,
                'parent_id' => 3,
            ],
            [
                'name' => 'یخچال',
                'slug' => 'refrigerator',
                'image' => null,
                'parent_id' => 4,
            ],
            [
                'name' => 'ماشین لباسشویی',
                'slug' => 'washing-machine',
                'image' => null,
                'parent_id' => 4,
            ],
            [
                'name' => 'تلویزیون',
                'slug' => 'television',
                'image' => null,
                'parent_id' => 4,
            ],
            [
                'name' => 'جاروبرقی',
                'slug' => 'vacuum-cleaner',
                'image' => null,
                'parent_id' => 4,
            ],
            [
                'name' => 'مایکروویو',
                'slug' => 'microwave',
                'image' => null,
                'parent_id' => 4,
            ],
        ]);
    }
}
