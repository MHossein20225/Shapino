import {Link} from "react-router-dom";

function ProductCard({id, image, name, price, off = null, rating}) {
    return(
        <Link to={`product/${id}`} className="relative flex flex-col bg-(--bg-secondary) rounded-(--radius-sm) overflow-hidden shadow-sm hover:shadow-md transition w-full">
            {off &&
                <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md z-10">
                    OFF {off}%
                </div>
            }

            <div className="w-full aspect-square p-2">
                <img
                    className="w-full h-48 object-cover rounded-(--radius-sm)"
                    src={image}
                    alt=""
                />
            </div>
            <div className="flex flex-col gap-2 p-2 sm:p-3">
                <p className="text-xs sm:text-sm md:text-base font-medium line-clamp-2">
                        {
                            name.length > 25
                            ? name.slice(0, 25) + "..."
                            : name
                        }
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 sm:gap-2">
                        <p className={`text-[10px] sm:text-xs ${off && "line-through text-gray-400"}`}>
                            {price}
                        </p>
                        {off && <p className="text-sm sm:text-base text-red-500 font-bold">
                            {price - (price * off / 100)}
                        </p>}
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-500">تومان</p>
                </div>
                <p className="text-yellow-500 text-xs sm:text-sm">
                    ⭐ {rating}
                </p>

            </div>
        </Link>
    )
}
export default ProductCard
