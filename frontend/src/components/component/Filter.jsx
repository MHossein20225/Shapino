import {useState} from "react";
import {formatPrice} from "../../util/functions.jsx";

export default function Filter(){

    const [price, setPrice] = useState(50000000);
    return  <aside className="lg:w-72 p-4 lg:p-8 border-t lg:border-t-0 lg:border-r space-y-6">
        <h2 className="text-xl font-bold">
            فیلتر محصولات
        </h2>
        <div>
            <h3 className="font-semibold mb-2">جستجو</h3>
            <input
                type="text"
                placeholder="نام محصول..."
                className="w-full border rounded-lg p-2"
            />
        </div>
        <div>
            <h3 className="font-semibold mb-2">دسته‌بندی</h3>
            <label className="block">
                <input type="checkbox"/> موبایل
            </label>
            <label className="block">
                <input type="checkbox"/> لپ تاپ
            </label>
            <label className="block">
                <input type="checkbox"/> هدفون
            </label>
            <label className="block">
                <input type="checkbox"/> ساعت هوشمند
            </label>
        </div>
        <div>
            <h3 className="font-semibold mb-2">برند</h3>

            <label className="block"><input type="checkbox"/> اپل</label>
            <label className="block"><input type="checkbox"/> سامسونگ</label>
            <label className="block"><input type="checkbox"/> شیائومی</label>
            <label className="block"><input type="checkbox"/> ایسوس</label>
        </div>
        <div>
            <h3 className="font-semibold mb-2">محدوده قیمت</h3>

            <input
                type="range"
                min="1000000"
                max="100000000"
                step="1000000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full"
            />

            <p className="mt-2 text-sm font-medium">
                تا {formatPrice(price)} تومان
            </p>
        </div>
        <div>
            <label className="flex items-center gap-2">
                <input type="checkbox"/>
                فقط کالاهای موجود
            </label>
        </div>
        <div>
            <label className="flex items-center gap-2">
                <input type="checkbox"/>
                فقط کالاهای دارای تخفیف
            </label>
        </div>
        <button className="w-full bg-(--primary) text-white py-2 rounded-lg">
            اعمال فیلتر
        </button>
    </aside>
}