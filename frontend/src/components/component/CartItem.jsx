import deleteIcon from '../../assets/icons/delete.svg'
import {useMutation} from "@tanstack/react-query";
import {deleteCartItems, updateProductQuantity} from "../../util/requestFunctions.jsx";
import {queryClient} from "../../main.jsx";

export default function CartItem({id, image, name, description, price, quantity}) {

    const quantityChangesMutation = useMutation({
        mutationFn: ({id, quantity}) => updateProductQuantity(id, quantity),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            })
        }
    })
    const deleteItemMutation = useMutation({
        mutationFn: (id) => deleteCartItems(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            })
        }
    })
    return (
        <>
                <tr className="border-t hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-center">
                        <button
                            onClick={() => deleteItemMutation.mutate(id)}
                            className="text-red-500 hover:text-red-700 text-2xl">
                            <img src={deleteIcon} alt=""/>
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
                            <button onClick={() => {
                                quantityChangesMutation.mutate({
                                    id,
                                    quantity: quantity + 1
                                })
                            }}
                                    className="w-9 h-9 border border-gray-300 hover:bg-gray-100">
                                +
                            </button>
                            <div
                                className="w-12 h-9 border-y border-gray-300 flex items-center justify-center outline-none ">
                                {quantityChangesMutation.isPending
                                    ? <div
                                        className="w-5 h-5 border-4 border-gray-300 border-t-(--primary) rounded-full animate-spin"></div>
                                    : quantity
                                }
                            </div>
                            <button
                                onClick={() => {
                                    if (quantity > 1) {
                                        quantityChangesMutation.mutate({
                                            id,
                                            quantity: quantity - 1
                                        })
                                    }
                                }}
                                className="w-9 h-9 border border-gray-300 hover:bg-gray-100">
                                -
                            </button>
                        </div>
                    </td>
                    <td className="p-4 text-center font-bold text-green-600 whitespace-nowrap">
                        {price} تومان
                    </td>
                </tr>
        </>
    )
}