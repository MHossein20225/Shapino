import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import heroSection from "../assets/images/heroSection.png"
import {Link} from "react-router-dom";
import truck from '../assets/icons/truck.svg'
import refresh from '../assets/icons/refresh.svg'
import shield from '../assets/icons/shield.svg'
import headphone from '../assets/icons/headphone.svg'
import Category from "../components/component/Category.jsx";
import ProductCard from "../components/component/ProductCard.jsx";

function Home() {
    const width = window.innerWidth;
    return (
        <>
            <section className="w-full mt-4">
                <div className="flex items-center max-w-7xl mx-auto px-4 bg-(--bg-secondary) w-full rounded-(--radius-md)">
                    <Link to=''><img className='w-full h-full' src={heroSection} alt=""/></Link>
                </div>
            </section>
            <section className="w-full mt-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-(--bg-secondary) rounded-(--radius-md) p-4
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="flex gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                            <div className="size-12 shrink-0 rounded-full bg-blue-200 p-2">
                                <img className="w-full h-full" src={truck} alt="" />
                            </div>
                            <div>
                                <p className="text-lg lg:text-xl font-medium">
                                    ارسال سریع
                                </p>
                                <p className="text-sm text-gray-500">
                                    ارسال به سراسر کشور
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                            <div className="size-12 shrink-0 rounded-full bg-green-200 p-2">
                                <img className="w-full h-full" src={shield} alt="" />
                            </div>
                            <div>
                                <p className="text-lg lg:text-xl font-medium">
                                    ضمانت اصالت کالا
                                </p>
                                <p className="text-sm text-gray-500">
                                    کالای اصل با گارانتی
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                            <div className="size-12 shrink-0 rounded-full bg-red-200 p-2">
                                <img className="w-full h-full" src={headphone} alt="" />
                            </div>
                            <div>
                                <p className="text-lg lg:text-xl font-medium">
                                    پشتیبانی 24/7
                                </p>
                                <p className="text-sm text-gray-500">
                                    پاسخگوی شما هستیم
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                            <div className="size-12 shrink-0 rounded-full bg-orange-200 p-2">
                                <img className="w-full h-full" src={refresh} alt="" />
                            </div>
                            <div>
                                <p className="text-lg lg:text-xl font-medium">
                                    7 روز ضمانت بازگشت
                                </p>
                                <p className="text-sm text-gray-500">
                                    بدون پرسش و شرط
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full mt-6">
                <div className="flex flex-col gap-9 max-w-7xl mx-auto px-4 bg-(--bg-secondary) w-full rounded-(--radius-md) py-6">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-bold">دسته بندی ها</p>
                        <Link to="" className="text-blue-500 hover:underline">
                            مشاهده همه
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {/*where we get category*/}
                    </div>
                </div>
            </section>
            <section className="w-full mt-6">
                <div className="flex flex-col gap-9 max-w-7xl mx-auto px-4 bg-(--bg-secondary) w-full rounded-(--radius-md) py-6">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-bold">لپ تاپ</p>
                        <Link to="" className="text-blue-500 hover:underline">
                            مشاهده همه
                        </Link>
                    </div>

                    <div className="w-full">
                        <Swiper slidesPerView={width <= 720 ? 3 : 5} spaceBetween={20}>
                            <SwiperSlide><ProductCard /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="w-full mt-6">
                <div className="flex flex-col gap-9 max-w-7xl mx-auto px-4 bg-(--bg-secondary) w-full rounded-(--radius-md) py-6">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-bold">لباس مردانه</p>
                        <Link to="" className="text-blue-500 hover:underline">
                            مشاهده همه
                        </Link>
                    </div>
                    <div className="w-full">
                        <Swiper slidesPerView={width <= 720 ? 3 : 5} spaceBetween={20}>
                            <SwiperSlide>{/*where we get product*/}</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home