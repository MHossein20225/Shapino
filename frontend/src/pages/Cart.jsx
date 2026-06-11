
function Cart() {

    return (
        <>
            <header className="w-full">
                <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-6">
                    <p className="text-4xl font-bold">سبد خرید</p>
                    <p className="opacity-60"> خانه / سبد</p>
                </div>
            </header>
            <section className="w-full">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-3/4">
                            <div className="overflow-x-auto border border-gray-200 bg-white shadow-sm">
                                <table className="w-full min-w-[700px]">
                                    <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-4 text-center">حذف</th>
                                        <th className="p-4 text-right">محصول</th>
                                        <th className="p-4 text-center">قیمت</th>
                                        <th className="p-4 text-center">تعداد</th>
                                        <th className="p-4 text-center">جمع</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="border-t hover:bg-gray-50 transition-colors">
                                        <td className="p-4 text-center">
                                            <button className="text-red-500 hover:text-red-700 text-2xl">
                                                ×
                                            </button>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src="https://play-lh.googleusercontent.com/cpWmdyzME_WxTe5CPluEmyym_zzAWrWvCEIdlZjXu9PGNO6mUPfkEgj6qsKwoedmaA"
                                                    alt=""
                                                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg border object-cover"
                                                />
                                                <div>
                                                    <p className="font-semibold">
                                                        نام محصول
                                                    </p>

                                                    <p className="text-sm text-gray-500">
                                                        توضیحات کوتاه
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center whitespace-nowrap">
                                            250,000 تومان
                                        </td>
                                        <td className="p-4">
                                            <div className="flex justify-center items-center">
                                                <button className="w-9 h-9 border border-gray-300 hover:bg-gray-100">
                                                    +
                                                </button>
                                                <input
                                                    type="text"
                                                    value="1"
                                                    readOnly
                                                    className="w-12 h-9 border-y border-gray-300 text-center outline-none"
                                                />
                                                <button className="w-9 h-9 border border-gray-300 hover:bg-gray-100">
                                                    -
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center font-bold text-green-600 whitespace-nowrap">
                                            250,000 تومان
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <div className="sticky top-6 border border-gray-200 bg-white shadow-sm p-6">
                                <h3 className="text-xl font-bold mb-4">
                                    خلاصه سفارش
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span>جمع کل محصولات:</span>
                                        <span>250,000 تومان</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>هزینه ارسال</span>
                                        <span>رایگان</span>
                                    </div>
                                    <div className="flex justify-between font-bold">
                                        <span className="text-sm">مبلغ قابل پرداخت</span>
                                        <span className="text-lg text-(--primary)">250,000 تومان</span>
                                    </div>
                                </div>
                                <button className="w-full mt-6 py-3 rounded-(--radius-md) bg-(--primary-hover) text-white hover:opacity-90">
                                    ادامه خرید و پرداخت
                                </button>
                                <button className="w-full mt-6 py-3 rounded-(--radius-md) bg-(--bg-secondary) hover:opacity-90 border border-grey">
                                    بازگشت به فروشگاه
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart