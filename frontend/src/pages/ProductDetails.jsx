import truck from "../assets/icons/truck.svg";
import shield from "../assets/icons/shield.svg";
import headphone from "../assets/icons/headphone.svg";
import refresh from "../assets/icons/refresh.svg";
import {useSelector} from "react-redux";
import {Link, useLoaderData} from "react-router-dom";
import api from "../api/api.jsx";
import ProductGallery from "../components/component/ProductGallery.jsx";
import ProductTabs from "../components/component/ProductTabs.jsx";
import {useMutation, useQuery} from "@tanstack/react-query";
import {addProductToCart, getCart, isInCart} from "../util/requestFunctions.jsx";
import {queryClient} from "../main.jsx";
import login from "./Login.jsx";

function ProductDetails() {
    const isAuthenticated = useSelector(state => state.auth)
    const productDetail = useLoaderData()


    const mutation = useMutation({
        mutationFn: (id) => addProductToCart(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart"],
            });
        }
    })






    return (
        <section className="w-full py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10">


                    <ProductGallery images={productDetail.image}/>


                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div>
                            <h1 className="text-3xl font-bold">
                                {productDetail.title}
                            </h1>
                            <p className="text-gray-500 mt-2">
                                {productDetail.category.parent.name} / {productDetail.category.name}
                            </p>
                        </div>
                        {/*<div>*/}
                        {/*    <p className="text-yellow-500 text-xs sm:text-sm">*/}
                        {/*        ⭐ {rating}*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div className="flex justify-between">
                            {productDetail.off &&
                                <p className="text-3xl font-bold line-through text-gray-400">
                                    {productDetail.price}
                                </p>}
                            <p className={`text-3xl font-bold ${productDetail.off && "text-red-500"}`}>
                                {productDetail.off ? productDetail.price - (productDetail.price * productDetail.off / 100) : productDetail.price} تومان
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">

                            {
                                isAuthenticated ? (
                                    productDetail.isInCart ? (
                                        <button
                                            className="flex-1 bg-green-600 text-white py-3 rounded-lg"
                                        >
                                            در سبد خرید وجود دارد
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => mutation.mutate({ id: productDetail.id })}
                                            className="flex-1 bg-(--primary) text-white py-3 rounded-lg hover:opacity-90"
                                        >
                                            افزودن به سبد خرید
                                        </button>
                                    )
                                ) : (
                                    <Link
                                        to="/login"
                                        className="flex-1 bg-gray-300 text-gray-600 py-3 rounded-lg hover:opacity-90 text-center"
                                    >
                                        به حساب خود وارد شوید
                                    </Link>
                                )
                            }

                            <button className="px-6 py-3 border rounded-lg hover:bg-gray-100">
                                علاقه‌مندی‌ها
                            </button>
                        </div>
                        <section className="w-full mt-4">
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="bg-(--bg-secondary) rounded-(--radius-md) p-4
                                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24">
                                    <div
                                        className="flex flex-col gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                                        <div className="size-12 shrink-0 rounded-full bg-blue-200 p-2">
                                            <img className="w-full h-full" src={truck} alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-lg text-nowrap lg:text-xl font-medium">
                                                ارسال سریع
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                                        <div className="size-12 shrink-0 rounded-full bg-green-200 p-2">
                                            <img className="w-full h-full" src={shield} alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-lg text-nowrap lg:text-xl font-medium">
                                                ضمانت اصالت کالا
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                                        <div className="size-12 shrink-0 rounded-full bg-red-200 p-2">
                                            <img className="w-full h-full" src={headphone} alt=""/>
                                        </div>
                                        <div>
                                            <p className="text-lg text-nowrap lg:text-xl font-medium">
                                                پشتیبانی 24/7
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col gap-3 items-center rounded-(--radius-md) bg-(--bg-secondary) h-20 p-3">
                                        <div className="size-12 shrink-0 rounded-full bg-orange-200 p-2">
                                            <img className="w-full h-full" src={refresh} alt=""/>
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

                <ProductTabs description={productDetail.description}/>

            </div>
        </section>
    )
}

export default ProductDetails
export async function loader({ params }) {
    try {
        const { data } = await api("product/"+params.id)
        return data
    }catch (error){
        throw new Response(
            JSON.stringify({
                message: "محصول پیدا نشد",
            }),
            { status: error.response?.status || 500 }
        );
    }

}