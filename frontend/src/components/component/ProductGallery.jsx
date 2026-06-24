import {Swiper, SwiperSlide} from "swiper/react";

function ProductGallery({images}) {
    return (
        <>
            <div className="w-full lg:w-1/2 space-y-4">
                <Swiper
                    navigation
                    className="border rounded-xl overflow-hidden"
                >

                    <SwiperSlide>
                        <img
                            src={images}
                            alt=""
                            className="w-full aspect-square object-cover"
                        />
                    </SwiperSlide>

                </Swiper>
                {/*<Swiper*/}
                {/*    navigation*/}
                {/*    className="rounded-xl overflow-hidden"*/}
                {/*    slidesPerView={5} spaceBetween={5}*/}
                {/*>*/}
                {/*    {images.map((item, i) => (*/}
                {/*        <SwiperSlide key={i}>*/}
                {/*            <img*/}
                {/*                src={item.image}*/}
                {/*                alt=""*/}
                {/*                className="w-full aspect-square object-cover"*/}
                {/*            />*/}
                {/*        </SwiperSlide>*/}
                {/*    ))}*/}
                {/*</Swiper>*/}
            </div>
        </>
    )
}

export default ProductGallery