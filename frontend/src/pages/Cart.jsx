import {useDispatch, useSelector} from "react-redux";
import CartItem from "../components/component/CartItem.jsx";
import ErrorPage from "./ErrorPage.jsx";
import {useQuery} from "@tanstack/react-query";
import {getCart} from "../util/requestFunctions.jsx";
import {formatPrice} from "../util/functions.jsx";

function Cart(){
    const isAuth = useSelector(state => state.auth.isAuthenticated)

    if (!isAuth)
        return <ErrorPage title="ورود امکان پذیر نیست"/>;


    const {data} = useQuery({
        queryKey:['cart'],
        queryFn:getCart,
    })



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
                                    {
                                        data?.map(items => (
                                            <CartItem
                                                id={items.product.id}
                                                image={items.product.image}
                                                name={items.product.title}
                                                description={items.product.description}
                                                price={formatPrice(items.product.price)}
                                                quantity={items.quantity}
                                            />
                                        ))
                                    }
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