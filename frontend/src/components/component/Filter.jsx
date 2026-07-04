import {useState} from "react";
import {formatPrice} from "../../util/functions.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";

export default function Filter(){
    const navigate = useNavigate()
    const params = new URLSearchParams();

    const [filters, setFilters] = useState({
        search: "",
        category: "",
        brands: [],
        maxPrice: 50000000,
        inStock: false,
        hasDiscount: false,
    });
    const handleChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value,
        }));
    };
    if (filters.category) params.append("category", filters.category);
    if (filters.maxPrice) params.append("max", filters.maxPrice);
    if (filters.inStock) params.append("stock", filters.inStock);
    if (filters.hasDiscount) params.append("discount", filters.hasDiscount);

    function addFilter() {
        navigate(`/products?${params.toString()}`);
    }
    return  <aside className="lg:w-72 p-4 lg:p-8 border-t lg:border-t-0 lg:border-r space-y-6">
        <h2 className="text-xl font-bold">
            فیلتر محصولات
        </h2>
        <div>
            <h3 className="font-semibold mb-2">برند</h3>
            <select onChange={(e) => handleChange("category", e.target.value)} className="w-full border rounded-lg p-2">
                <option value="">همه برندها</option>
                <option value="apple">اپل</option>
                <option value="samsung">سامسونگ</option>
                <option value="xiaomi">شیائومی</option>
                <option value="asus">ایسوس</option>
            </select>
        </div>
        <div>
            <h3 className="font-semibold mb-2">محدوده قیمت</h3>

            <input
                type="range"
                min="1000000"
                max="100000000"
                step="1000000"
                value={filters.maxPrice}
                onChange={e => handleChange("maxPrice", e.target.value)}
                className="w-full"
            />

            <p className="mt-2 text-sm font-medium">
                تا {formatPrice(filters?.maxPrice)} تومان
            </p>
        </div>
        <div>
            <label className="flex items-center gap-2">
                <input type="checkbox" checked={filters.inStock} onChange={e => handleChange("inStock", e.target.value)}/>
                فقط کالاهای موجود
            </label>
        </div>
        <div>
            <label className="flex items-center gap-2">
                <input type="checkbox" checked={filters.hasDiscount} onChange={e => handleChange("hasDiscount", e.target.value)}/>
                فقط کالاهای دارای تخفیف
            </label>
        </div>
        <button
            onClick={() => addFilter()}
            className="w-full bg-(--primary) text-white py-2 rounded-lg cursor-pointer">
            اعمال فیلتر
        </button>
    </aside>
}