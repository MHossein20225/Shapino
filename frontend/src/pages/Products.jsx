import ProductCard from "../components/component/ProductCard.jsx";

function Products() {

    return(
        <section className="mt-4">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row">

                {/* Products */}
                <main className="flex-1 p-4 lg:p-8">
                    <header className="space-y-2">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            همه محصولات
                        </h1>
                        <p className="text-sm text-gray-500">
                            خانه / فروشگاه
                        </p>
                    </header>
                    <div className="mt-8 space-y-8">
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <p>نمایش 100 محصول</p>
                            <div className="flex items-center gap-2">
                                <span>مرتب سازی:</span>

                                <select className="border rounded-md px-3 py-1">
                                    <option>جدیدترین</option>
                                    <option>ارزان‌ترین</option>
                                    <option>محبوب‌ترین</option>
                                    <option>پربازدیدترین</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                            {/*where we put product*/}
                        </div>
                    </div>
                </main>
                {/* Sidebar */}
                <aside className="lg:w-72 p-4 lg:p-8 border-t lg:border-t-0 lg:border-r">
                    <h2 className="font-semibold">
                        فیلتر محصولات
                    </h2>
                </aside>
            </div>
        </section>
    )
}
export default Products