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
                'title' => 'آیفون 16 پرو مکس',
                'description' => 'پرچمدار جدید اپل با دوربین حرفه‌ای.',
                'price' => 98000000,
                'image' => 'images/products/iphone16.png',
                'category_id' => 5,
            ],
            [
                'title' => 'سامسونگ گلکسی S25 Ultra',
                'description' => 'پرچمدار سامسونگ.',
                'price' => 85000000,
                'image' => 'images/products/galaxyS25.png',
                'category_id' => 6,
            ],
            [
                'title' => 'شیائومی 15',
                'description' => 'پرچمدار جدید شیائومی.',
                'price' => 45000000,
                'image' => 'images/products/xiaomi15.png',
                'category_id' => 7,
            ],
            [
                'title' => 'Asus ROG Strix G16',
                'description' => 'لپ تاپ گیمینگ حرفه‌ای.',
                'price' => 115000000,
                'image' => 'images/products/AsusROGStrixG16.png',
                'category_id' => 8,
            ],
            [
                'title' => 'Asus TUF A15',
                'description' => 'لپ تاپ گیمینگ اقتصادی.',
                'price' => 76000000,
                'image' => 'images/products/AsusTUFA15.png',
                'category_id' => 8,
            ],
            [
                'title' => 'Asus Vivobook 15',
                'description' => 'مناسب دانشجویان و برنامه‌نویسان.',
                'price' => 35000000,
                'image' => 'images/products/AsusVivobook15.png',
                'category_id' => 8,
            ],
            [
                'title' => 'Lenovo Legion 5',
                'description' => 'لپ تاپ گیمینگ قدرتمند.',
                'price' => 87000000,
                'image' => 'images/products/LenovoLegion5.png',
                'category_id' => 9,
            ],
            [
                'title' => 'Sony WH-1000XM5',
                'description' => 'هدفون نویز کنسلینگ حرفه‌ای.',
                'price' => 24000000,
                'image' => 'images/products/SonyWH1000XM5.png',
                'category_id' => 10,
            ],
            [
                'title' => 'JBL Tune 770NC',
                'description' => 'هدفون بی‌سیم با کیفیت بالا.',
                'price' => 8900000,
                'image' => 'images/products/JBLTune770NC.png',
                'category_id' => 11,
            ],
            [
                'title' => 'JBL Live 660NC',
                'description' => 'صدای قدرتمند و باتری عالی.',
                'price' => 11500000,
                'image' => 'images/products/JBLLive660NC.png',
                'category_id' => 11,
            ],
            [
                'title' => 'یخچال فریزر سامسونگ مدل RB34',
                'description' => 'یخچال کم مصرف با ظرفیت بالا.',
                'price' => 85000000,
                'image' => 'images/products/samsungRefregratorRB34.png',
                'category_id' => 12,
            ],
            [
                'title' => 'یخچال ال جی مدل GC-X257',
                'description' => 'ساید بای ساید هوشمند.',
                'price' => 145000000,
                'image' => 'images/products/LGRefregratorGC-X257.png',
                'category_id' => 12,
            ],
            [
                'title' => 'ماشین لباسشویی ال جی 9 کیلویی',
                'description' => 'دارای موتور اینورتر کم مصرف.',
                'price' => 62000000,
                'image' => 'images/products/LGWashingMachine9kg.png',
                'category_id' => 13,
            ],
            [
                'title' => 'ماشین لباسشویی سامسونگ 8 کیلویی',
                'description' => 'برنامه‌های شستشوی متنوع.',
                'price' => 57000000,
                'image' => 'images/products/samsungWashingMachine8kg.png',
                'category_id' => 13,
            ],
            [
                'title' => 'تلویزیون سامسونگ 65 اینچ QLED',
                'description' => 'کیفیت تصویر 4K.',
                'price' => 98000000,
                'image' => 'images/products/samsungTV65InchQLED.png',
                'category_id' => 14,
            ],
            [
                'title' => 'تلویزیون ال جی OLED 55 اینچ',
                'description' => 'نمایشگر OLED با رنگ‌های عمیق.',
                'price' => 115000000,
                'image' => 'images/products/LGTVOLED55inch.png',
                'category_id' => 14,
            ],
            [
                'title' => 'جاروبرقی بوش سری 8',
                'description' => 'قدرت مکش بالا.',
                'price' => 18000000,
                'image' => 'images/products/BoschVacuum8Series.png',
                'category_id' => 15,
            ],
            [
                'title' => 'جاروبرقی فیلیپس PowerPro',
                'description' => 'فیلتر ضد حساسیت.',
                'price' => 14500000,
                'image' => 'images/products/PhilipsVacuumPowerPro.png',
                'category_id' => 15,
            ],
            [
                'title' => 'مایکروویو پاناسونیک 42 لیتری',
                'description' => 'مناسب خانواده‌های پرجمعیت.',
                'price' => 24000000,
                'image' => 'images/products/panasonicMicrowave42liter.png',
                'category_id' => 16,
            ],
            [
                'title' => 'مایکروویو سامسونگ MG40',
                'description' => 'دارای قابلیت گریل.',
                'price' => 21000000,
                'image' => 'images/products/samsungMicrowave40liter.png',
                'category_id' => 16,
            ],
        ]);
    }
}
