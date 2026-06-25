import {Swiper, SwiperSlide} from "swiper/react";
import ProductCard from "./ProductCard.jsx";
import {getProductByCategory} from "../../util/getProductByCategory.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function ProductsSlider({title, categories}){
    const width = window.innerWidth;
    const [products, setProducts] = useState()
    useEffect(() => {
        async function fetchingProducts() {
            const products = await getProductByCategory(categories)
            setProducts(products)
        }
        fetchingProducts()
    }, [categories])

    return(
        <section className="w-full mt-6">
            <div className="flex flex-col gap-9 max-w-7xl mx-auto px-4 bg-(--bg-secondary) w-full rounded-(--radius-md) py-6">
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">{title}</p>
                    <Link to="" className="text-blue-500 hover:underline">
                        مشاهده همه
                    </Link>
                </div>

                <div className="w-full">
                    <Swiper slidesPerView={width <= 720 ? 3 : 5} spaceBetween={20}>
                        {
                            products && products.map(items =>
                                <SwiperSlide><ProductCard id={items.id} name={items.title} price={items.price} off={items.off} image={items.image}/></SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>


            </div>
        </section>

    )
}