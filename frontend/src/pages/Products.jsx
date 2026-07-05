import api from "../api/api.jsx";
import {useLoaderData} from "react-router-dom";
import {SwiperSlide} from "swiper/react";
import ProductCard from "../components/component/ProductCard.jsx";
import {logout} from "../features/auth/authSlice.jsx";
import Filter from "../components/component/Filter.jsx";
import {formatPrice} from "../util/functions.jsx";
import Pagination from "../components/component/Pagination.jsx";

function Products() {
    const { q, data } = useLoaderData();
    const products = data.data;

    return (
        <section className="mt-4">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row">
                <main className="flex-1 p-4 lg:p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                        {products.map(item => (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                name={item.title}
                                price={item.price}
                                off={item.off}
                                image={item.image}
                            />
                        ))}
                    </div>
                </main>
                <Filter />
            </div>
            <Pagination products={data} search={q} />
        </section>
    );
}
export default Products
export async function loader({ request }) {
    const params = new URL(request.url).searchParams;
    const q = params.get("q") ?? "";
    const { data } = await api.get("/products", {
        params: { q }
    });
    return { q, data };
}