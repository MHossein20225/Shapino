export default function CartItem({image, name, description, price}) {
    return(
        <tr className="border-t hover:bg-gray-50 transition-colors">
            <td className="p-4 text-center">
                <button className="text-red-500 hover:text-red-700 text-2xl">
                    ×
                </button>
            </td>
            <td className="p-4">
                <div className="flex items-center gap-4">
                    <img
                        src={image}
                        alt=""
                        className="w-16 h-16 md:w-20 md:h-20 rounded-lg border object-cover"
                    />
                    <div>
                        <p className="font-semibold">
                            {name}
                        </p>

                        <p className="text-sm text-gray-500">
                            {description}
                        </p>
                    </div>
                </div>
            </td>
            <td className="p-4 text-center whitespace-nowrap">
                {price} تومان
            </td>
            <td className="p-4">
                <div className="flex justify-center items-center">
                    <button className="w-9 h-9 border border-gray-300 hover:bg-gray-100">
                        +
                    </button>
                    <input
                        type="text"
                        value="1"
                        readOnly
                        className="w-12 h-9 border-y border-gray-300 text-center outline-none"
                    />
                    <button className="w-9 h-9 border border-gray-300 hover:bg-gray-100">
                        -
                    </button>
                </div>
            </td>
            <td className="p-4 text-center font-bold text-green-600 whitespace-nowrap">
                {price} تومان
            </td>
        </tr>
    )
}