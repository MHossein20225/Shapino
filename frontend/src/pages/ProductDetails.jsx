import ProductTabs from "../components/component/ProductTabs.jsx";
import truck from "../assets/icons/truck.svg";
import shield from "../assets/icons/shield.svg";
import headphone from "../assets/icons/headphone.svg";
import refresh from "../assets/icons/refresh.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import ProductGallery from "../components/component/ProductGallery.jsx";

function ProductDetails({name, description, image, price, off, rating}) {
    return(
        <section className="w-full py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/*<ProductGallery images={image}/>*/}

                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div>
                            <h1 className="text-3xl font-bold">
                                {name}
                            </h1>
                            <p className="text-gray-500 mt-2">
                                دسته بندی / برند
                            </p>
                        </div>
                        <div>
                            <p className="text-yellow-500 text-xs sm:text-sm">
                                ⭐ {rating}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            {off &&
                                <p className="text-3xl font-bold line-through text-gray-400">
                                    {price}
                            </p>}
                            <p className={`text-3xl font-bold ${off && "text-red-500"}`}>
                                {off ? price - (price * off / 100) : price} تومان
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button className="flex-1 bg-(--primary) text-white py-3 rounded-lg hover:opacity-90">
                                افزودن به سبد خرید
                            </button>
                            <button className="px-6 py-3 border rounded-lg hover:bg-gray-100">
                                علاقه‌مندی‌ها
                            </button>
                        </div>
                        <section className="w-full mt-4">
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="bg-(--bg-secondary) rounded-(--radius-md) p-4
                                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24">
                                    <div className="flex flex-col gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                                        <div className="size-12 shrink-0 rounded-full bg-blue-200 p-2">
                                            <img className="w-full h-full" src={truck} alt="" />
                                        </div>
                                        <div>
                                            <p className="text-lg text-nowrap lg:text-xl font-medium">
                                                ارسال سریع
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                                        <div className="size-12 shrink-0 rounded-full bg-green-200 p-2">
                                            <img className="w-full h-full" src={shield} alt="" />
                                        </div>
                                        <div>
                                            <p className="text-lg text-nowrap lg:text-xl font-medium">
                                                ضمانت اصالت کالا
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                                        <div className="size-12 shrink-0 rounded-full bg-red-200 p-2">
                                            <img className="w-full h-full" src={headphone} alt="" />
                                        </div>
                                        <div>
                                            <p className="text-lg text-nowrap lg:text-xl font-medium">
                                                پشتیبانی 24/7
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                                        <div className="size-12 shrink-0 rounded-full bg-orange-200 p-2">
                                            <img className="w-full h-full" src={refresh} alt="" />
                                        </div>
                                        <div>
                                            <p className="text-lg text-nowrap lg:text-xl font-medium">
                                                7 روز ضمانت بازگشت
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/*<ProductTabs description={description}/>*/}

            </div>
        </section>
    )
}

export default ProductDetails