import {Swiper, SwiperSlide} from "swiper/react";
import ProductCard from "./ProductCard.jsx";
import {productSliderFun} from "../../util/productSliderFun.jsx";
import {useEffect, useState} from "react";

export default function ProductsSlider({categories}){
    const width = window.innerWidth;
    const [products, setProducts] = useState()
    useEffect(() => {
        async function fetchingProducts() {
            const products = await productSliderFun(categories)
            setProducts(products)
        }
        fetchingProducts()
    }, [categories])

    return(
        <div className="w-full">
            <Swiper slidesPerView={width <= 720 ? 3 : 5} spaceBetween={20}>
                {
                    products && products.map(items =>
                        <SwiperSlide><ProductCard id={items.id} name={items.title} price={items.price} off={items.off} image={items.image}/></SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}